class Sandwich {
  constructor() {
    this.cost = 0;
    this.description = "샌드위치";
  }

  getDescription() {
    return this.description;
  }

  getCost() {
    return this.cost;
  }
}

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

let sandwich = new Sandwich();
sandwich = new 호밀빵(sandwich);

console.log(`샌드위치의 이름은 ${sandwich.getDescription()}이고 ${sandwich.getCost()}원 입니다`)

sandwich = new 양상추(sandwich);

console.log(`샌드위치의 이름은 ${sandwich.getDescription()}이고 ${sandwich.getCost()}원 입니다`)
