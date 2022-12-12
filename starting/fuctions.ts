function addtwo(num: number){
  return num + 2
}


function singUpUser(name: string, email:string, isPaid: boolean){
  
}

let loginUser = (name: string,email: string,isPaid:boolean = false) =>{}


addtwo(5)
singUpUser("fred", "fred@bv.io", false )
loginUser("fred", "fred@bv.io")

// ===================

// function getValue(myval: number) {
//   if(myval > 5){
//     return true
//   }
//   return "200 ok"
// }

const gethello = (S: string): string =>{
  return ""
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero) : string =>{
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
  console.log(errmsg);
}

function handleError(errmsg: string): never{
  throw new Error(errmsg);
}