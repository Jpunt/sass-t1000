sass-t-1000-grid
================

![T-1000](http://vonlitch.files.wordpress.com/2012/10/t1000.jpg)

**Yes, this is another responsive grid system.** There are a lot of them these days, but as with a lot of things: they didn’t cut it for me. They’re either too complicated or too limited, or too difficult to get your head around.

**No, this is not another responsive grid system.** It’s more a library. You build the grid yourself, using SASS-mixins. This way you’re free to choose the kind of media-queries or amount of breakpoints and sizes. And in the process you get to know your grid system as it grows with you.

# Basics
We’ve got a couple of principles that should be clear to you:
- Put content in columns
- Put columns in a row
- Columns are flexible
- Gutters are fixed
- Two spaces between two columns make a gutter
- The space between a column and a row make a gutter

# Grid
Let's start with a grid of 4 columns. And while we're on it, let's split them up in 's', 'm' and 'l' layouts.

```scss
@import 'T-1000';

@media only screen and (max-width: 399px) {
  @include grid(s, 12, 5px);
}

@media only screen and (min-width: 400px) {
  @include grid(m, 12, 5px);
}

@media only screen and (min-width: 1000px) {
  @include grid(l, 12, 5px);
}
```

This will produce classes with appropriate widths and paddings:

```css
@media only screen and (max-width: 399px) {
  .row { padding: 5px; }
  .col { padding: 5px; }

  .s-1 { width: 8.33333%; }
  .s-2 { width: 16.66667%; }
  .s-3 { width: 25%; }
  .s-4 { width: 33.33333%; }
  .s-5 { width: 41.66667%; }
  .s-6 { width: 50%; }
  .s-7 { width: 58.33333%; }
  .s-8 { width: 66.66667%; }
  .s-9 { width: 75%; }
  .s-10 { width: 83.33333%; }
  .s-11 { width: 91.66667%; }
  .s-12 { width: 100%; }
}

@media only screen and (min-width: 400px) {
  .row { padding: 5px; }
  .col { padding: 5px; }

  .m-1 { width: 8.33333%; }
  .m-2 { width: 16.66667%; }
  .m-3 { width: 25%; }
  .m-4 { width: 33.33333%; }
  .m-5 { width: 41.66667%; }
  .m-6 { width: 50%; }
  .m-7 { width: 58.33333%; }
  .m-8 { width: 66.66667%; }
  .m-9 { width: 75%; }
  .m-10 { width: 83.33333%; }
  .m-11 { width: 91.66667%; }
  .m-12 { width: 100%; }
}

@media only screen and (min-width: 1000px) {
  .row { padding: 5px; }
  .col { padding: 5px; }

  .l-1 { width: 8.33333%; }
  .l-2 { width: 16.66667%; }
  .l-3 { width: 25%; }
  .l-4 { width: 33.33333%; }
  .l-5 { width: 41.66667%; }
  .l-6 { width: 50%; }
  .l-7 { width: 58.33333%; }
  .l-8 { width: 66.66667%; }
  .l-9 { width: 75%; }
  .l-10 { width: 83.33333%; }
  .l-11 { width: 91.66667%; }
  .l-12 { width: 100%; }
}


```

So, if you have some elements that you'd like to layout, you can do things like this:

```html
<div class="row">
  <div class="col s-12 m-12 l-4">First piece of content</div>
  <div class="col s-12 m-6 l-4">Second piece of content</div>
  <div class="col s-12 m-6 l-4">Third piece of content</div>
</div>
```

This way the elements will be at full width for the 's' layout, they're equally divided for the 'l' layout and something special the 'm' layout. But c'mon, 12 columns and a 10px gutter for small screens? That's insane. Let's clean that up and give large screens a little bit more air as well:

```scss
@import 'T-1000';

@media only screen and (max-width: 399px) {
  @include grid(s, 2, 2px);
}

@media only screen and (min-width: 400px) {
  @include grid(m, 6, 5px);
}

@media only screen and (min-width: 1000px) {
  @include grid(l, 12, 5px);
}

@media only screen and (min-width: 1400px) {
  @include grid(xl, 12, 10px);
}
```

```html
<div class="row">
  <div class="col s-2 m-6 l-4 xl-4">First piece of content</div>
  <div class="col s-2 m-3 l-4 xl-4">Second piece of content</div>
  <div class="col s-2 m-3 l-4 xl-4">Third piece of content</div>
</div>
```