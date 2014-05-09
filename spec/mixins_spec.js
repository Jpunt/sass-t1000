var fs = require('fs');
var sass = require('node-sass');

String.prototype.normalize = function() {
  return this.replace(/\s+/g, ' ');
}

function compiled(fileName) {
  return sass.renderSync({ file: './spec/fixtures/' + fileName }).normalize();
}

function expected(fileName) {
  return fs.readFileSync('./spec/fixtures/' + fileName).toString().normalize();
}

describe('Mixins', function() {

  describe('grid', function() {
    it('grid(s, 2, 5px)', function() {
      expect(compiled('grid-s-2-5px.scss')).toEqual(expected('grid-s-2-5px.css'));
    });

    it('grid(m, 6, 10px)', function() {
      expect(compiled('grid-m-6-10px.scss')).toEqual(expected('grid-m-6-10px.css'));
    });
  });

  describe('properties', function() {
    describe('single', function() {
      it('properties(5px, margin)', function() {
        expect(compiled('properties-5px-margin.scss')).toEqual(expected('properties-5px-margin.css'));
      });

      it('properties(10px, margin)', function() {
        expect(compiled('properties-10px-margin.scss')).toEqual(expected('properties-10px-margin.css'));
      });

      it('properties(5px, (margin, padding))', function() {
        expect(compiled('properties-5px-margin-padding.scss')).toEqual(expected('properties-5px-margin-padding.css'));
      });
    });

    describe('double', function() {
      it('properties(5px, margin, double)', function() {
        expect(compiled('properties-5px-margin-double.scss')).toEqual(expected('properties-5px-margin-double.css'));
      });
    });

    describe('half', function() {
      it('properties(5px, margin, half)', function() {
        expect(compiled('properties-5px-margin-half.scss')).toEqual(expected('properties-5px-margin-half.css'));
      });
    });

    describe('triple', function() {
      it('properties(5px, margin, triple)', function() {
        expect(compiled('properties-5px-margin-triple.scss')).toEqual(expected('properties-5px-margin-triple.css'));
      });
    });
  });

  describe('properties-for-layout', function() {
    describe('single', function() {
      it('properties-for-layout(s, 5px, margin)', function() {
        expect(compiled('properties-for-layout-s-5px-margin.scss')).toEqual(expected('properties-for-layout-s-5px-margin.css'));
      });

      it('properties-for-layout(s, 10px, margin)', function() {
        expect(compiled('properties-for-layout-s-10px-margin.scss')).toEqual(expected('properties-for-layout-s-10px-margin.css'));
      });

      it('properties-for-layout(s, 5px, (margin, padding))', function() {
        expect(compiled('properties-for-layout-s-5px-margin.scss')).toEqual(expected('properties-for-layout-s-5px-margin.css'));
      });

      it('properties-for-layout(m, 5px, margin)', function() {
        expect(compiled('properties-for-layout-m-5px-margin.scss')).toEqual(expected('properties-for-layout-m-5px-margin.css'));
      });
    });

    describe('double', function() {
      it('properties-for-layout(5px, margin, double)', function() {
        expect(compiled('properties-for-layout-s-5px-margin-double.scss')).toEqual(expected('properties-for-layout-s-5px-margin-double.css'));
      });
    });

    describe('half', function() {
      it('properties-for-layout-s-for-layout(5px, margin, half)', function() {
        expect(compiled('properties-for-layout-s-5px-margin-half.scss')).toEqual(expected('properties-for-layout-s-5px-margin-half.css'));
      });
    });

    describe('triple', function() {
      it('properties-for-layout-s-for-layout(5px, margin, triple)', function() {
        expect(compiled('properties-for-layout-s-5px-margin-triple.scss')).toEqual(expected('properties-for-layout-s-5px-margin-triple.css'));
      });
    });
  });
});