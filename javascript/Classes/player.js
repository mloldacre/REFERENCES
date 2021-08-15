module.exports = class Player {
  #_WORLD_BOUNDARY = 7
  constructor(y_position, x_position) {
    this.y_position = y_position;
    this.x_position = x_position;
  }
  logic() {
    this.x_position++
    if (this.x_position > this.#_WORLD_BOUNDARY) {
      this.x_position = 0
    }
  }
}