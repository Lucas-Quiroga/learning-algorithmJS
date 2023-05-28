describe("Transcription", () => {
  test("empty rna sequence", () => {
    expect(toRna("")).toEqual("");
  });

  xtest("transcribes cytosine to guanine", () => {
    expect(toRna("C")).toEqual("G");
  });

  xtest("transcribes guanine to cytosine", () => {
    expect(toRna("G")).toEqual("C");
  });

  xtest("transcribes thymine to adenine", () => {
    expect(toRna("T")).toEqual("A");
  });

  xtest("transcribes adenine to uracil", () => {
    expect(toRna("A")).toEqual("U");
  });

  xtest("transcribes all dna nucleotides to their rna complements", () => {
    expect(toRna("ACGTGGTCTTAA")).toEqual("UGCACCAGAAUU");
  });
});

/* Your task is determine the RNA complement of a given DNA sequence.

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with 
its complement:

    G -> C
    C -> G
    T -> A
    A -> U
*/

export const toRna = (dna) => {
  const map = {
    C: "G",

    G: "C",

    A: "U",

    T: "A",
  };

  return dna.replace(/[CGAT]/g, (nuc) => map[nuc]);
}

export const toRna = (DNA) =>
  [...DNA].reduce(
    (output, letter) => (output += { G: "C", C: "G", T: "A", A: "U" }[letter]), ""
  );

const rnaMap = new Map([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);

export function toRna(dnaStr) {
  if (!/^[G|C|T|A]*$/.test(dnaStr)) throw new Error("Invalid input DNA.");

  return [...dnaStr].map((s) => rnaMap.get(s)).join("");
}

const NUCLEOTIDE_MAP = {
  G: "C",

  C: "G",

  T: "A",

  A: "U",
};

export const toRna = (
  [...nucleotides] // ['G', 'T', 'C', 'A']
) =>
  // It's equivalent to splitting with an empty string as an argument
  // const splitNucleotides = nucleotides.split(''); ['G', 'T', 'C', 'A']
  nucleotides.reduce((rna, nucleotide) => rna + NUCLEOTIDE_MAP[nucleotide], "");

