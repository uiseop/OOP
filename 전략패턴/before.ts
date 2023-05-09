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

// 물고기나 새와 같은 다른 행동을 갖는 동물들이 추가되면?
// 물고기는 울지(cry)않기 때문에 cry() 메서드를 오버라이드 해줘야 함.
// 새는 날 수 있기 때문에 Animal 클래스 자체에 fly() 메서드를 추가하고, 나머지 다른 동물들에는 fly() 메서드를 따로 오버라이드 해줘야 함.

// 이는 수정과 확장에 있어 사실상 고칠 필요가 없는 부분들도 고쳐야하기 때문에 변화에 유연하지 못함.
// 물론 새에만 fly() 메서드를 추가할 수 있지만, 새 말고도 다른 동물들이 마찬가지로 날 수 있기 때문에 코드를 재사용할 수 없는 문제가 발생.

// 상속(is-a) 대신 합성(has-a)를 통해 구현하자!
// 객체가 해당 객체의 특성을 갖는!!!

// 상속은 이해하기 쉽지만, 높은 결합도를 갖고 있어 그 구조가 쉽게 망가질 수 있다.