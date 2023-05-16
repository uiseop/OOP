class Animal {
  sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  eat() {
    console.log("와구 와구 먹습니다.");
  }

  walk() {
    console.log("뚜벅 뚜벅 걷습니다.");
  }

  cry() {
    console.log(`${this.sound}하고 웁니다`);
  }
}
// 상속을 바탕으로 구현
class Dog extends Animal {}
class Cat extends Animal {}