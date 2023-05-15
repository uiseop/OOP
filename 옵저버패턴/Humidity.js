class Humidity {
  constructor() {
    this.humidity = null;
  }

  getData() {
    return this.humidity;
  }

  updateHumidity(humidity) {
    this.humidity = humidity;
  }
}

export default Humidity;
