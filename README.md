# OOP

OOP 설계 원칙을 바탕으로 다양한 디자인 패턴들을 ts로 구현해보기

# 디자인 원칙

- 애플리케이션에서 달라지는 부분을 찾아내고, 달라지지 않는 부분과 분리한다: `캡슐화`
- 분리를 통해 수정이 필요한 부분에서의 수정은 바뀌지 않는 부분에 영향을 미치지 않고도 그 부분만 고치거나 확장할 수 있다: `수정과 확장`에 용이함

### 1장 - 전략패턴

객체들의 역할을 정의하고 변화하는 역할을 분리하는 캡슐화를 통해 각각의 역할들을 수정해서 쓸 수 있게 해줍니다. 전략패턴을 사용하면 객체의 역할을 동적으로 바꾸고 싶은 경우 직접 행위를 수정하지 않고 전략(해당 역할을 수행하는 객체)을 바꾸는 것만으로 역할을 수정할 수 있도록 만든 패턴이다.

로그인을 할 때에 id/pw로 로그인하는 일반 로그인 방식과 네이버나 카카오같은 소셜 로그인 방식도 이 전략 패턴을 적용한 하나의 예시라고 볼 수 있겠다.

### 2장 - 옵저버패턴

한 객체의 상태(정보)를 구독하는 여러 객체들이 있을 때, 새로운 객체의 추가(확장), 기존의 객체에서 구독하는 정보의 변경을 위해서는 정보를 갖는 주체와 정보를 구독하는 객체들 사이의 협력이 필요하다.

객체들끼리의 협력에 있어 정보를 갖은 쪽이 자신의 행동으로 구독하는 객체들에게 정보를 알리기 때문에 정보를 갖은 주체는 어떤 객체들이 자신의 어떤 정보를 필요로 하는지에 대한 정보가 필요하다.

이럴때 주체가 구독자들의 정보를 저장하는 방식이 옵저버패턴이다.

정보를 관리하는 주체가 생기므로 정보를 갖은 객체와 정보를 구독하는 객체 사이에 결합도를 낮출 수 있다.

#### 정보를 관리하는 주제(ObserverController)에서 정보를 push하기 보다 구독하는 객체(Observer)에서 필요한 정보를 pull 하는 게 낫지 않나?

Push 방식의 `장점`은 다음과 같다. 
1. Controller가 정보의 변화를 감지할 수 있고, 변화를 감지하면 모든 Observers들에게 정보가 변화됨을 알려줄 수 있다. 이는 `실시간 통지`와 같은 기능을 수행할 수 있다.
2. 구현이 쉽다. Controller는 자신의 상태(state)가 변화하면 자신을 구독하는 모든 Obsevers들에게 변화를 알림만 해주면 되기 때문에 구현이 쉽다.

반면 다음과 같은 `단점`들이 있다.
1. 모든 Observers들은 Controller가 관리하고 있는 모든 정보를 `notify` 받는다. 이로 인해 불필요한 정보를 받을 수 있을 수 있고, 이로 인해 불필요한 비용이 발생하게 된다.
2. 위의 문제로 인해 중복된 데이터를 받을 수 있다. 어떤 하나의 데이터 변화로 인해 다수의 중복된 데이터를 받을 수 있다.

반면, Pull 방식의 경우는 Observer가 자신이 필요한 시점에서, 필요한 데이터만을 선택해서 가져올 수 있는 특징이 있다. 이로 인해 불필요한 데이터 중복을 방지할 수 있지만, 옵저버쪽에서 최신화된 데이터를 요청하기 때문에 최신 데이터를 `fetch 하는 메서드`가 반복적으로 호출되는 일이 발생할 수 있다. 이로 인해 `네트워크 비용이 증가`할 수 있겠다.