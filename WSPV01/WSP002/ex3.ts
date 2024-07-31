class GovAgent {
  public country:string;
  public name:string;
  constructor(country: string, name: string) {
    this.country = country
    this.name = name
  }
  // 宣誓
  vow() {
    console.log(`I, ${this.name}, serve for ${this.country}`)
  }
  realVow() {
    console.log(`I am really ${this.name}, truely serve for ${this.country}`)
  }
}

// modify this function to make realVow() work as expected
function createSpy(options:any) {
  let fakeAgent = new GovAgent(options.fake.country, options.fake.name)
  fakeAgent.realVow = fakeAgent.realVow.bind(options.real)
  return fakeAgent
}

let 約兒 = new GovAgent('東國', '約兒·佛傑')

let 洛伊德 = createSpy({
  fake: { country: '東國', name: '洛伊德·佛傑' },
  real: { country: '西國', name: '黃昏' },
})

console.log('==============================')

約兒.vow() // print: I, 約兒·佛傑, serve for 東國
約兒.realVow() // print: I am really 約兒·佛傑, truely serve for 東國

console.log('==============================')

洛伊德.vow() // I, 洛伊德·佛傑, serve for 東國
洛伊德.realVow() // I am really 黃昏, truely serve for 西國

console.log('==============================')