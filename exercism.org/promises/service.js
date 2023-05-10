export class TranslationService {
	/**
	 * Creates a new service
	 * @param {ExternalApi} api the original api
	 */
	constructor(api) {
		this.api = api
	}

	/**
	 * Attempts to retrieve the translation for the given text.
	 *
	 * - Returns whichever translation can be retrieved, regardless the quality
	 * - Forwards any error from the translation api
	 *
	 * @param {string} text
	 * @returns {Promise<string>}
	 */
	async free(text) {
		// return this.api.fetch(text).then(result => result.translation)
		return await this.api.fetch(text).then(({ translation: t }) => t)
	}

	/**
	 * Batch translates the given texts using the free service.
	 *
	 * - Resolves all the translations (in the same order), if they all succeed
	 * - Rejects with the first error that is encountered
	 * - Rejects with a BatchIsEmpty error if no texts are given
	 *
	 * @param {string[]} texts
	 * @returns {Promise<string[]>}
	 */
	batch(texts) {
		if (!texts) {
			return Promise.reject(new BatchIsEmpty())
		}
		return Promise.all(texts.map(text => this.free(text)))
	}

	/**
	 * Requests the service for some text to be translated.
	 *
	 * Note: the request service is flaky, and it may take up to three times for
	 *       it to accept the request.
	 *
	 * @param {string} text
	 * @returns {Promise<void>}
	 */
	async request(text) {
		// This is a function that will return a promise. The promise
		// requests from the API a translation, and uses its callback
		// to resolve or reject the promise.

		const promisify = () =>
			new Promise((resolve, reject) => {
				this.api.request(text, error => {
					error ? reject(error) : resolve()
				})
			})

		return await promisify() //   try
			.catch(promisify) // retry one
			.catch(promisify) // retry two
	}

	request(text, retries = 2) {
		return new Promise((resolve, reject) => {
			this.api.request(text, res => {
				if (retries > 0 && res instanceof Error) {
					// If api.request returns an error, retry at most two times

					resolve(this.request(text, --retries))
				} else if (retries <= 0 && res instanceof Error) {
					// If you run out of retries, reject with the last error received

					reject(res)
				} else {
					// If api.request does not return an error, resolve with undefined)

					resolve()
				}
			})
		})
	}

	/**
	 * Retrieves the translation for the given text
	 *
	 * - Rejects with an error if the quality can not be met
	 * - Requests a translation if the translation is not available, then retries
	 *
	 * @param {string} text
	 * @param {number} minimumQuality
	 * @returns {Promise<string>}
	 */
	async premium(text, minimumQuality) {
		return this.api
			.fetch(text)
			.catch(async () => {
				// When it fails to fetch, request it.
				// When the request passes, fetch it again.
				return this.request(text).then(() => this.api.fetch(text))
			})
			.then(({ quality: q, translation: t }) => {
				if (q < minimumQuality) {
					throw new QualityThresholdNotMet()
				}
				return t
			})
	}
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
	/**
	 * @param {string} text
	 */
	constructor(text) {
		super(
			`
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
		)

		this.text = text
	}
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
	constructor() {
		super(
			`
Requested a batch translation, but there are no texts in the batch.
    `.trim()
		)
	}
}
