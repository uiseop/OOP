class Temperature {
  constructor() {
    this.temperature = 25;
  }

  getData() {
    return this.temperature;
  }

  updateTemperature(temperature) {
    this.temperature = temperature;
  }
}

export default Temperature