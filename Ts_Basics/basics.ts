
let userName: string  = "Fred"
let hasloggedin: boolean = true

userName += "Bernardo"

console.log(hasloggedin);

let mynumber: number = 10

let myregex: RegExp = /foo/;

const names: string[] = userName.split(" ")
const myValue: Array<number> = [1,2,3,4]

interface Person {
  first: string;
  last: string;
}

const person: Person = {
  first: "name",
  last: "bernardo"
}
person.first

const ids: Record<number, string> = {
  10: "a",
  20: "b"
}
ids[30] = "c"

if(ids[30] === "D"){
  
}
