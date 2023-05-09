class Animal {
  flyBehavior: FlyBehavior;

  constructor() {
    this.flyBehavior = new FlyNoWay();
  }

  eat() {
    console.log("와구 와구 먹습니다");
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
}

class Walkable {
  walk() {
    console.log("뚜벅 뚜벅 걷습니다");
  }
}

class Swimmable {
  swim() {
    console.log("물살을 가로지르며 헤엄칩니다");
  }
}

interface FlyBehavior {
  fly: () => void;
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("하늘을 날아다닙니다.");
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("나는 못 날아요!");
  }
}

class Cryable {
  sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }
  cry() {
    console.log(`${this.sound} 소리를 내며 웁니다`);
  }
}

class Dog {
  animal: Animal;
  cryable: Cryable;
  walkable: Walkable;
  swimmable: Swimmable;

  constructor(sound: string) {
    this.animal = new Animal();
    this.cryable = new Cryable(sound);
    this.walkable = new Walkable();
    this.swimmable = new Swimmable();
  }
}

class Fish {
  animal: Animal;
  swimmable: Swimmable;

  constructor() {
    this.animal = new Animal();
    this.swimmable = new Swimmable();
  }
}

const puppy = new Dog("컼ㅇ컼");
const 고등어 = new Fish();

puppy.cryable.cry(); // 컼ㅇ컼 소리를 내며 웁니다
고등어.swimmable.swim(); // 물살을 가로지르며 헤엄칩니다

// 행동들을 해당 행동의 인터페이스를 갖는 클래스로 분리하고, 그러한 클래스들의 합성을 통해 행동을 갖는 객체를 생성함으로써 수정이 필요한 부분만을 수정하여 다른 부분엔 영향이 없도록 변경!

// 다양한 변화가 있는 행동과 역할을 갖는 객체들로 분리함으로써 상속에서 확인했던 높은 결합도를 낮추고, 유연함을 얻을 수 있게 되었다.
// 하지만, 객체를 생성할때마다 새로운 객체를 생성하게 되어 이로인해 메모리 낭비가 발생할 수 있겠다.

// 알고리즘 문제 사이트에서도 트리 문제였던가? 생성자 함수로 노드를 생성해서 문제를 풀었을 때 시간초과, 메모리초과 문제가 발생했었는데, 이처럼 메모리가 중요한 경우에는 위 구조가 별로인걸까..? 그럴때는 합성으로 만든 구조를 상속으로 변경시키면 되는걸까...?

puppy.animal.flyBehavior.fly();
puppy.animal.setFlyBehavior(new FlyWithWings());
puppy.animal.flyBehavior.fly();

// FlyBehavior의 fly()라는 인터페이스를 바탕으로 프로그램이 실행중에 동적으로 행동을 지정할 수 있음.
// FlyWithWings와 FlyNoWay 둘 다 FlyBehavior을 implements 함으로써 같은 인터페이스로 다른 행동을 할 수 있음.
// 더 나아가 다형성을 보장하는 객체를 만들 수 있겠다!