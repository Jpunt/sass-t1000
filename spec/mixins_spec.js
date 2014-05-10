var fs = require('fs');
var path = require('path');
var sass = require('node-sass');

String.prototype.normalize = function() {
  return this.replace(/\s+/g, ' ').trim();
}

function scss(scss) {
  return sass.renderSync({
    data: "@import '../src/mixins.scss';" + scss,
    includePaths: [path.resolve(__dirname, "../src")]
  }).normalize();
}

function fixture(fileName) {
  return fs.readFileSync('./spec/fixtures/' + fileName).toString().normalize();
}

describe('Mixins', function() {

  describe('grid', function() {
    it('compiles for: layout: s | columns: 2 | spacing: 5px', function() {
      expect(scss('@include grid(s, 2, 5px);')).toEqual(fixture('grid-s-2-5px.css'));
    });

    it('compiles for: layout: m | columns: 6 | spacing: 8px', function() {
      expect(scss('@include grid(m, 6, 8px);')).toEqual(fixture('grid-m-6-8px.css'));
    });
  });

  describe('properties', function() {
    it('compiles for: spacing: 5px | properties: margin', function() {
      expect(scss('@include properties(5px, margin);')).toEqual(fixture('properties-5px-margin.css'));
    });

    it('compiles for: spacing: 8px | properties: margin', function() {
      expect(scss('@include properties(8px, margin);')).toEqual(fixture('properties-8px-margin.css'));
    });

    it('compiles for: spacing: 5px | properties: margin, padding', function() {
      expect(scss('@include properties(5px, (margin, padding));')).toEqual(fixture('properties-5px-margin-padding.css'));
    });

    it('compiles for: spacing: 5px | properties: margin | scale: double', function() {
      expect(scss('@include properties(5px, margin, double);')).toEqual(fixture('properties-5px-margin-double.css'));
    });

    it('compiles for: spacing: 5px | properties: margin | scale: half', function() {
      expect(scss('@include properties(5px, margin, half);')).toEqual(fixture('properties-5px-margin-half.css'));
    });

    it('compiles for: spacing: 5px | properties: margin | scale: triple', function() {
      expect(scss('@include properties(5px, margin, triple);')).toEqual(fixture('properties-5px-margin-triple.css'));
    });
  });

  describe('properties-for-layout', function() {
    it('compiles for: layout: s | spacing: 5px | properties: margin', function() {
      expect(scss('@include properties-for-layout(s, 5px, margin);')).toEqual(fixture('properties-for-layout-s-5px-margin.css'));
    });

    it('compiles for: layout: s | spacing: 8px | properties: margin', function() {
      expect(scss('@include properties-for-layout(s, 8px, margin);')).toEqual(fixture('properties-for-layout-s-8px-margin.css'));
    });

    it('compiles for: layout: s | spacing: 5px | properties: margin, padding', function() {
      expect(scss('@include properties-for-layout(s, 5px, (margin, padding));')).toEqual(fixture('properties-for-layout-s-5px-margin-padding.css'));
    });

    it('compiles for: layout: m | spacing: 5px | properties: margin', function() {
      expect(scss('@include properties-for-layout(m, 5px, margin);')).toEqual(fixture('properties-for-layout-m-5px-margin.css'));
    });

    it('compiles for: layout: s | spacing: 5px | properties: margin | scale: double', function() {
      expect(scss('@include properties-for-layout(s, 5px, margin, double);')).toEqual(fixture('properties-for-layout-s-5px-margin-double.css'));
    });

    it('compiles for: layout: s | spacing: 5px | properties: margin | scale: half', function() {
      expect(scss('@include properties-for-layout(s, 5px, margin, half);')).toEqual(fixture('properties-for-layout-s-5px-margin-half.css'));
    });

    it('compiles for: layout: s | spacing: 5px | properties: margin | scale: triple', function() {
      expect(scss('@include properties-for-layout(s, 5px, margin, triple);')).toEqual(fixture('properties-for-layout-s-5px-margin-triple.css'));
    });
  });

  describe('reset-properties', function() {
    it('compiles for: properties: margin', function() {
      expect(scss('@include reset-properties(margin);')).toEqual(fixture('reset-properties-margin.css'));
    });

    it('compiles for: properties: margin, padding', function() {
      expect(scss('@include reset-properties((margin, padding));')).toEqual(fixture('reset-properties-margin-padding.css'));
    });
  });

  describe('reset-properties-for-layout', function() {
    it('compiles for: layout: s | properties: margin', function() {
      expect(scss('@include reset-properties-for-layout(s, margin);')).toEqual(fixture('reset-properties-for-layout-s-margin.css'));
    });

    it('compiles for: layout: s | properties: margin, padding', function() {
      expect(scss('@include reset-properties-for-layout(s, (margin, padding));')).toEqual(fixture('reset-properties-for-layout-s-margin-padding.css'));
    });

    it('compiles for: layout: m | properties: margin', function() {
      expect(scss('@include reset-properties-for-layout(m, margin);')).toEqual(fixture('reset-properties-for-layout-m-margin.css'));
    });
  });
});