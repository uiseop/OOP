import Humidity from "./Humidity.js";
import ObserverController from "./ObserverController.js";
import Pressure from "./Pressure.js";
import Temperature from "./Temperature.js";

class WeatherData {
  constructor() {
    this.weatherDatas = new Map();
    this.observerController = new ObserverController();
  }

  addWeatherData(key, value) {
    if (this.weatherDatas.has(key)) return;
    this.weatherDatas.set(key, value);
    return this;
  }

  removeWeatherData(key) {
    this.weatherDatas.delete(key);
    return;
  }

  getInfos() {
    for (let [key, value] of this.weatherDatas.entries()) {
      console.log(`The current ${key}is ${value.getData()}.`);
    }
  }

  update() {
    // 구독자들에게 변화를 알리기
  }
}

const weatherData = new WeatherData();

weatherData // weatherData 객체의 addWeatherData 메서드 자체에 자기 자신 인스턴스를 return 하면서 체이닝을 통해 Data를 추가
  .addWeatherData("humidity", new Humidity())
  .addWeatherData("pressure", new Pressure())
  .addWeatherData("temperature", new Temperature());

weatherData.getInfos();

weatherData.removeWeatherData("pressure");
console.log("@@@@@@@@@@@@@@@Ater remove pressure!@@@@@@@@@@@@@@@@@@");

weatherData.getInfos();
