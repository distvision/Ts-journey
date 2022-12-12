// const User = {
//   name:  "fred",
//   email: "fred@bv.io",
//   isActive: true
// }

// type CreateUser = {
//   name: string
//   isPaid: boolean
// }

// function createUser({name: string, isPaid: boolean}: CreateUser) {}

// createUser({name: "fred", isPaid: false})

// ================== Type Aliases ==================

// type User = {
//   name:  string
//   email: string
//   isActive: boolean
// }

// function createUser(user: User): User{
//   return user
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string
  name:  string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser: User ={
  _id: "126",
  name: "fred",
  email: "fred@bv.io",
  isActive: false
}

type CardNumber = {
  cardNum: string
}

type CardDate = {
  cardDate: string
}

type CardDetails = CardNumber & CardDate & {
  cvv: number
}

myUser.email = "fred.b@bv.io"
// myUser._id = "rerg"