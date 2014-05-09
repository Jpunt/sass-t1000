sass-t-1000-grid
================

**Yes, this is another responsive grid system.** There are a lot of them these days, but as with a lot of things: they didn’t cut it for me. They’re either too complicated or too limited, or too difficult to get your head around.

**No, this is not another responsive grid system.** It’s more a library. You build the grid yourself, using SASS-mixins. This way you’re free to choose the kind of media-queries or amount of breakpoints and sizes. And in the process you get to know your grid system as it grows with you.

## Basics
We’ve got a couple of principles that should be clear to you:
- Put content in columns
- Put columns in a row
- Columns are flexible
- Gutters are fixed
- Two spaces between two columns make a gutter
- The space between a column and a row make a gutter
- With great power, comes great responsibility. Only include what you need!

## Mixins

### grid
Let's start with a grid of 12 columns. And while we're on it, let's split them up in "s", "m" and "l" layouts.

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

This will generate classes with appropriate widths and paddings:

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

This way the elements will be at full width for `s`, they're equally divided for `l` layout and something special for `m`. But c'mon, 12 columns and such a large gutter for small screens? That's insane. Let's clean that up and give large screens a little bit more air as well:

```scss
@import 'T-1000';

@media only screen and (max-width: 399px) {
  @include grid(s, 2, 2px);
}

@media only screen and (min-width: 400px) {
  @include grid(m, 6, 5px);
}

@media only screen and (min-width: 1000px) {
  @include grid(l, 12, 8px);
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

You wanna get fancy and use em-based media-queries? Sure, it's your layout.


### properties
Columns are not the only flexible pieces in the puzzle of RWD. Often you find yourself setting properties (like margins, paddings, etc) that need different sizes for different layouts. You can do this with specific CSS, but how about this:

```scss
@import 'T-1000';

@media only screen and (max-width: 399px) {
  @include properties(2px, (margin, padding));
}

@media only screen and (min-width: 400px) {
  @include properties(5px, (margin, padding));
}

@media only screen and (min-width: 1000px) {
  @include properties(8px, (margin, padding));
}
```

This will generate classes with appropriate margins:

```css
@media only screen and (max-width: 399px) {
  .margin { margin: 2px; }
  .padding { padding: 2px; }
}

@media only screen and (min-width: 400px) {
  .margin { margin: 5px; }
  .padding { padding: 5px; }
}

@media only screen and (min-width: 1000px) {
  .margin { margin: 8px; }
  .padding { padding: 8px; }
}
```

When you use these classes instead of specific CSS you'll notice that things get more consistent, especially in combination with the grid. But of course these classes aren't enough for all cases. That's why we've got some extra onces, which are still in balance with the overall sizing of things:

```scss
@media only screen and (max-width: 399px) {
  @include properties(2px, (margin, padding), double);
}

@media only screen and (min-width: 400px) {
  @include properties(5px, (margin, padding), double);
}

@media only screen and (min-width: 1000px) {
  @include properties(8px, (margin, padding), double);
}
```

```css
@media only screen and (max-width: 399px) {
  .margin-double { margin: 4px; }
  .padding-double { padding: 4px; }
}

@media only screen and (min-width: 400px) {
  .margin-double { margin: 10px; }
  .padding-double { padding: 10px; }
}

@media only screen and (min-width: 1000px) {
  .margin-double { margin: 16px; }
  .padding-double { padding: 16px; }
}
```

`triple` and `half` are also available. In my experience: When you need any more or less than this, there's probably something wrong with the design. When you experience a desperate need for more, file a bug and let me know.


### properties-for-layout
When you're in a situation where you only want some margin in a specific layout, use `properties-for-layout`:

```scss
@media only screen and (max-width: 399px) {
  @include properties-for-layout(s, 2px, margin);
}

@media only screen and (min-width: 400px) {
  @include properties-for-layout(m, 5px, margin);
}

@media only screen and (min-width: 1000px) {
  @include properties-for-layout(l, 8px, margin);
}
```

```css
@media only screen and (max-width: 399px) {
  .s-margin { margin: 2px; }
}

@media only screen and (min-width: 400px) {
  .m-margin { margin: 5px; }
}

@media only screen and (min-width: 1000px) {
  .l-margin { margin: 8px; }
}
```

You can use `double` / `triple` / `half` here as well, like this:

```
@include properties-for-layout(m, 5px, margin, double)
```