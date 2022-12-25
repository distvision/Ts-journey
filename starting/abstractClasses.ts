abstract class takePhoto {
  constructor(
    public cameramode: string,
    public filter: string
  ){}

  abstract getSepia(): void
  getReelTime(): number {
    return 8
  }
}

class Instagram extends takePhoto {
  constructor(
    public cameramode: string,
    public filter: string,
    public burst: number
    ){
      super(cameramode, filter)
    }

    getSepia(): void {
        console.log("sepia");
    }
}

const bernardo = new Instagram("test","Test", 3)

bernardo.getReelTime()