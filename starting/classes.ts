class ClassUser {

  // private _courseCount = 1
  protected _courseCount = 1

  constructor(
    public email: string,
    public name: string,
    private userId: string
  ){}

  private deleteTocken(){
    console.log("Tocken deleted");
  }

  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum) {
    if(courseNum <= 1){
      throw new Error("course count should be more than 1")
    }
    this._courseCount = courseNum
  }

}

class SubUser extends ClassUser {
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}

const Ana = new ClassUser("ana@a.com", "ana", "000")