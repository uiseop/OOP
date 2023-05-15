import Humidity from "./Humidity";
import Pressure from "./Pressure";
import Temperature from "./Temperature";

class WeatherData {
  constructor() {
    this.weatherDatas = [];
  }

  addWeatherData(data) {
    this.weatherDatas.push(data);
    return this;
  }

  update() {
    // 구독자들에게 변화를 알리기
  }
}

const weatherData = new WeatherData();

weatherData // weatherData 객체의 addWeatherData 메서드 자체에 자기 자신 인스턴스를 return 하면서 체이닝을 통해 Data를 추가
  .addWeatherData(new Humidity())
  .addWeatherData(new Pressure())
  .addWeatherData(new Temperature());
