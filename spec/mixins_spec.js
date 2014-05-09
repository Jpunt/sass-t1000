var fs = require("fs");
var sass = require("node-sass");

String.prototype.normalize = function() {
  return this.replace(/\s+/g, ' ');
}

describe("Mixins", function() {

  describe("grid", function() {
    it("compiles 2 columns with a padding of 5px", function() {
      var css = sass.renderSync({ file:'./spec/fixtures/grid.scss' }).normalize();
      var expected = fs.readFileSync('./spec/fixtures/grid.css').toString().normalize();
      expect(css).toEqual(expected);
    });
  });

});