// gets triangle shape

const { Rectangle, Triangle, Circle } = require("./shapes");

describe('Test of shape class', () => {

  it("should return a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');

  });

  it("should return a red square", () => {
    const shapeRectangle = new Rectangle();
    shapeRectangle.setColor("red");
    expect(shapeRectangle.render()).toEqual(`<rect width="200" height="200" x="10" y="10" fill="red"/>`);
  });
  it("should return a green circle", () => {
    const shapeCircle = new Circle();
    shapeCircle.setColor("green");
    expect(shapeCircle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
  })


  // gets square shape


  // gets circle shape

})