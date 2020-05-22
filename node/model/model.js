class BaseModel {
  constructor(data, message) {
    // 如果data是string类型，就全部赋值null，就不会进入接下来的if了
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.error = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.error = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}