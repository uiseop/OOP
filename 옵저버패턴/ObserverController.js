class ObserverController {
  constructor() {
    this.observers = new Map();
  }

  addObserver(observer, keys) {
    if (this.observers.has(observer)) return;
    this.observers.set(observer, new Set(keys));
  }

  removeObserver(key) {
    this.observers.delete(key);
  }

  // modifyObserversWeatherInfo

  notifyObservers(weatherDatas) {
    for (let [observer, keys] of this.observers.entries()) {
      const datas = [];
      for (let key of keys) {
        datas.push([key, weatherDatas.get(key).getData()]);
      }
      observer.update(datas);
    }
  }
}

export default ObserverController;
