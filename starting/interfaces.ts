interface IUser {
  readonly dbId: number
  email: string
  userId: number
  googleid?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(coupName: string): number
}

interface IUser {
  githubToken: string
}

interface IAdmin extends IUser {
  role: "admin" | "ta" | "learner"
}

const frede: IAdmin = {
  dbId: 22,
  role: "admin",
  email: "fred@fred.com",
  userId: 546,
  githubToken: "github",
  startTrail: () =>{
    return "fred"
  },
  getCoupon: (name: "fred") =>{
    return 18
  }
}
frede.email = "fred@b.com"