### 3장 - 데코레이터패턴

객체에 어떤 추가적인 기능을 덧붙이고 싶은 경우, 그 기능들을 Decorator로 만들어서 덧붙이는 방식입니다.

예를 들어, 서브웨이 샌드위치를 생각해보죠.
서브웨이 샌드위치는 우리의 입맛에 따라 채소를 선택할 수 있고, 빵 그리고 소스까지 선택할 수 있습니다.
때문에 샌드위치라는 객체에 포함되는 여러 토핑들이 각각 데코레이터가 되겠습니다.

데코레이터를 사용하면 나만의 독창적인 무언가를 만들 수 있겠죠?
변화할 수 있는 부분들을 따로 분리하는 캡슐화를 하는 방식으로 OCP 원칙을 만족시킬 수 있습니다!

그럼 샌드위치를 만들기 위한 코드를 작성해보도록 해봅시다!

```javascript
class Sandwich {
  constructor() {
    this.cost = null;
    this.description = "샌드위치";
  }

  getDescription() {
    return this.description;
  }

  getCost() {
    return this.cost;
  }
}

const sandwich = new Sandwich();
```
여기에다 샌드위치의 여러 토핑들을 추가할 수 있으면 되겠습니다. 각 토핑들은 샌드위치 객체 자체를 래핑하여 사용될 수 있습니다. 그렇기 때문에 래핑해서 리턴하는 객체는 다시 샌드위치의 책임과 역할을 할 수 있겠죠.

```javascript
class 호밀빵 {
  constructor(sandwich) {
    this.sandwich = sandwich;
    this.description = "호밀빵";
    this.cost = 1500;
  }

  getDescription() {
    return this.description + this.sandwich.getDescription();
  }

  getCost() {
    return this.cost + this.sandwich.getCost();
  }
}

class 양상추 {
  constructor(sandwich) {
    this.sandwich = sandwich;
    this.description = "양상추";
    this.cost = 300;
  }

  getDescription() {
    return this.description + this.sandwich.getDescription();
  }

  getCost() {
    return this.cost + this.sandwich.getCost();
  }
}
```

이렇게 샌드위치에 토핑으로 사용될 수 있는 재료들을 선언해주면 이제 샌드위치를 내 입맛에 맞게 장식할 수 있습니다!

```javascript
let sandwich = new Sandwich();
sandwich = new 호밀빵(sandwich);

console.log(`샌드위치의 이름은 ${sandwich.getDescription()}이고 ${sandwich.getCost()}원 입니다`) // 샌드위치의 이름은 호밀빵샌드위치이고 1500원 입니다

sandwich = new 양상추(sandwich);

console.log(`샌드위치의 이름은 ${sandwich.getDescription()}이고 ${sandwich.getCost()}원 입니다`) // 샌드위치의 이름은 양상추호밀빵샌드위치이고 1800원 입니다

```

이렇게 해서 객체에 추가 요소를 동적으로 추가할 수 있는 데코레이터 패턴을 알아봤습니다.
데코레이터 패턴을 사용하면 서브 클래스를 만들 때보다 훨씬 유연하게 기능을 확장할 수 있습니다!