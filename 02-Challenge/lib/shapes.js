
class Shape {
  constructor() {
    this.color = "";

  }
  setColor(color) {
    this.color = color;
  }


}

// class SVG {

// }



// const  = new Shape()
// banana.setColor("blue")
// console.log(banana)

class Rectangle extends Shape {
  render() {
    return `<rect width="200" height="200" x="10" y="10" fill="${this.color}"/>`
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }
}


module.exports = {Rectangle, Triangle, Circle}