let bool: boolean = false;
let nombre: number = 2;
let chaine: string = "test";
let tabString: string[] = ["test", "test2", "test3"];
let tabNumber: number[] = [1, 2, 3];

let jsp: any = "any";
jsp = 10;
let jsp2: unknown = "unknown";

let tuple: [number, string, boolean];
tuple = [1, "test", true];
tuple = ["test", 1, false];

let variable: string | number | boolean;
variable = "hello";
variable = 10;

type StringOrNumber = string | number;
let y: StringOrNumber = "hello";
y = 20;

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("string");
let output2 = identity<number>(10);

class Salut {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
  testBonjour() {
    return "bonjour" + this.message;
  }
}

let salut = new Salut("test");

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

if (bool) {
  console.log("bool est vrai");
} else {
  console.log("bool est faux");
}

if (nombre > 0) {
  console.log("nombre est supérieur à zéro");
} else {
  console.log("nombre est inférieur ou égal à zéro");
}

if (chaine.length > 0) {
  console.log("chaine n'est pas vide");
} else {
  console.log("chaine est vide");
}

if (tabString.length > 0) {
  console.log("tabString n'est pas vide");
} else {
  console.log("tabString est vide");
}

if (tabNumber.length > 0) {
  console.log("tabNumber n'est pas vide");
} else {
  console.log("tabNumber est vide");
}

if (jsp === "any") {
  console.log("jsp est à any");
} else {
  console.log("jsp n'est pas à any");
}

if (jsp2 !== undefined) {
  console.log("jsp2 est défini");
} else {
  console.log("jsp2 est indéfini");
}

if (tuple[0] === 1 && tuple[1] === "test" && tuple[2] === true) {
  console.log("tuple est correct");
} else {
  console.log("tuple est incorrect");
}

if (variable === "hello") {
  console.log("variable est égale à 'hello'");
} else if (variable === 10) {
  console.log("variable est égale à 10");
} else {
  console.log("variable est autre");
}

if (typeof y === "string") {
  console.log("y est un string");
} else if (typeof y === "number") {
  console.log("y est un number");
} else {
  console.log("y est autre");
}
console.log(output);
console.log(output2);
console.log(salut.testBonjour());

switch (c) {
  case Color.Red:
    console.log("La couleur est Rouge");
    break;
  case Color.Green:
    console.log("La couleur est Verte");
    break;
  case Color.Blue:
    console.log("La couleur est Bleue");
    break;
  default:
    console.log("La couleur est inconnue");
    break;
}
