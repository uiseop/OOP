class Temperature {
  constructor() {
    this.temperature = null;
  }

  getData() {
    return this.temperature;
  }

  updateTemperature(temperature) {
    this.temperature = temperature;
  }
}

export default Temperature