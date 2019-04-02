import base from './base'

class Config {
  constructor(deps) {
    this._config = {
      ...base
    }
  }

  get(key) {
    return this._config[key]
  }

  set(key, value) {
    this._config[key] = value
    return this
  }
}

export default Config
