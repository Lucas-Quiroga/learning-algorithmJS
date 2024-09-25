/**
 * Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
 */

// Mi solución

function removeUrlAnchor(url) {
  let newUrl = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      break;
    }
    newUrl += url[i];
  }
  return newUrl;
}

// Otras soluciones

function removeUrlAnchor(url) {
  // TODO: complete
  let newUrl = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      newUrl = url.slice(0, i);
      break;
    }
  }
  return newUrl;
}
