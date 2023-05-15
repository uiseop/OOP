class Humidity {
  constructor() {
    this.humidity = 10;
  }

  getData() {
    return this.humidity;
  }

  updateHumidity(humidity) {
    this.humidity = humidity;
  }
}

export default Humidity;
