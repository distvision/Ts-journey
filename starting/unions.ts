let score: number | string = 33

score = 44

score = "fe"


type User1 = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let fred: User1 | Admin = {
  name: "fred", id: 123
}

fred = {username: "fred", id: 123}

// function getDnID(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }

getDnID(7)
getDnID("45")

function getDnID(id: number | string) {
  if(typeof id === "string"){
    id.toLowerCase()
  }
  id.toString()
}

const data: number[] = [1,2,4,85,87] 
const data2: string[] = ["dew", "wf"] 
const data3: (string | number)[] = ["dew", "wf", 4,45,64]
