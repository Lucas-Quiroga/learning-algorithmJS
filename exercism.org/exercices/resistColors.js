describe("Resistor Colors", () => {
  test("Brown and black", () => {
    expect(decodedValue(["brown", "black"])).toEqual(10);
  });

  xtest("Blue and grey", () => {
    expect(decodedValue(["blue", "grey"])).toEqual(68);
  });

  xtest("Yellow and violet", () => {
    expect(decodedValue(["yellow", "violet"])).toEqual(47);
  });

  xtest("Orange and orange", () => {
    expect(decodedValue(["orange", "orange"])).toEqual(33);
  });

  xtest("Ignore additional colors", () => {
    expect(decodedValue(["green", "brown", "orange"])).toEqual(51);
  });
});

export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
]

export const decodedValue = params => {
    let value = ''
    params.forEach((element, index) => {
      if(index === 2) return
      console.log(element, index)
      value += COLORS.indexOf(element)
    })
    return Number(value)
}

export const decodedValue = ([color1, color2]) => {
  return parseInt(`${COLORS[color1]}${COLORS[color2]}`);
  // Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
}

export const decodedValue = (toDecode) => {
  return Number(COLORS[toDecode[0]] + "" + COLORS[toDecode[1]]);
}

export const decodedValue = (colors) =>
    +colors
    .slice(0, 2)
    .map((color) => COLORS.indexOf(color))
    .join("");

export const decodedValue = ([firstColor, secondColor]) => 
    COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor)