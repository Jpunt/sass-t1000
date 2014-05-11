sass-t-1000-grid
================

**Yes, this is another responsive grid system.** There are a lot of them these days, but as with a lot of things, they didn’t cut it for me. They’re either too complicated or too limited, or too difficult to get your head around.

**No, this is not another responsive grid system.** It’s more a library. You build the grid yourself using SASS-mixins. This way you’re free to choose the kind of media queries or number of breakpoints and sizes. And in the process you get to know your grid system as it grows with you.

## Basics
We’ve got a couple of principles that should be made clear:
- Put content in columns
- Put columns in a row
- Columns are flexible
- Gutters are fixed
- The padding of two columns make a gutter
- The padding of a column and a row make a gutter
- With great power comes great responsibility. Only include what you need!

## Mixins

### grid
*Note: Below are some examples of how to use the grid. It's how I like to do it. If you wanna get fancy and use em-based media queries or get old-school and call the layouts “mobile” and “desktop”, knock yourself out; it's your grid. Let the content do the talking and include what's needed for that. Check the [styles](https://github.com/Jpunt/sass-t-1000-grid/blob/master/demo/stylesheets/_layout.scss) of the [demo-page](http://jpunt.github.io/sass-t-1000-grid/) for a real-life example.*

Let's start with a grid of 12 columns. And while we're at it, let's split them into a couple of layouts:

```scss
@media only screen and (max-width: 399px) {
  @include grid(s, 12, 8px);
}

@media only screen and (min-width: 400px) {
  @include grid(m, 12, 8px);
}

@media only screen and (min-width: 1000px) {
  @include grid(l, 12, 8px);
}
```

This will generate classes with appropriate widths and paddings:

```css
@media only screen and (max-width: 399px) {
  .row { padding: 8px; }
  .col { padding: 8px; }

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
  .row { padding: 8px; }
  .col { padding: 8px; }

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
  .row { padding: 8px; }
  .col { padding: 8px; }

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

So if you have some elements that you'd like to lay out, you can do things like this:

```html
<div class="row">
  <div class="col s-12 m-12 l-4">First piece of content</div>
  <div class="col s-12 m-6 l-4">Second piece of content</div>
  <div class="col s-12 m-6 l-4">Third piece of content</div>
</div>
```

This way the elements will be at full width for `s`, equally divided for `l` layout and something special for `m`. But c'mon, 12 columns and such a large gutter for small screens? That's insane. Let's clean that up and give large screens a bit more breathing room as well:

```scss
@media only screen and (max-width: 399px) {
  @include grid(s, 2, 5px);
}

@media only screen and (min-width: 400px) {
  @include grid(m, 6, 8px);
}

@media only screen and (min-width: 1000px) {
  @include grid(l, 12, 10px);
}
```

```css
@media only screen and (max-width: 399px) {
  .row { padding: 5px; }
  .col { padding: 5px; }

  .s-1 { width: 50%; }
  .s-2 { width: 100%; }
}

@media only screen and (min-width: 400px) {
  .row { padding: 8px; }
  .col { padding: 8px; }

  .m-1 { width: 16.6666666667%; }
  .m-2 { width: 33.3333333333%; }
  .m-3 { width: 50%; }
  .m-4 { width: 66.6666666667%; }
  .m-5 { width: 83.3333333333%; }
  .m-6 { width: 100%; }
}

@media only screen and (min-width: 1000px) {
  .row { padding: 10px; }
  .col { padding: 10px; }

  .l-1 { width: 8.3333333333%; }
  .l-2 { width: 16.6666666667%; }
  .l-3 { width: 25%; }
  .l-4 { width: 33.3333333333%; }
  .l-5 { width: 41.6666666667%; }
  .l-6 { width: 50%; }
  .l-7 { width: 58.3333333333%; }
  .l-8 { width: 66.6666666667%; }
  .l-9 { width: 75%; }
  .l-10 { width: 83.3333333333%; }
  .l-11 { width: 91.6666666667%; }
  .l-12 { width: 100%; }
}
```

```html
<div class="row">
  <div class="col s-2 m-6 l-4">First piece of content</div>
  <div class="col s-2 m-3 l-4">Second piece of content</div>
  <div class="col s-2 m-3 l-4">Third piece of content</div>
</div>
```

You can also enable prefixes and suffixes to leave extra room before or after columns:

```scss
@media only screen and (max-width: 399px) {
  @include grid(s, 2, 5px, (prefix, suffix));
}

@media only screen and (min-width: 400px) {
  @include grid(m, 6, 8px, (prefix, suffix));
}

@media only screen and (min-width: 1000px) {
  @include grid(l, 12, 10px, (prefix, suffix));
}
```

```css
@media only screen and (max-width: 399px) {
  .row { padding: 5px; }
  .col { padding: 5px; }

  .s-1 { width: 50%; }
  .s-2 { width: 100%; }
  .s-prefix-1 { margin-left: 50%; }
  .s-prefix-2 { margin-left: 100%; }
  .s-suffix-1 { margin-right: 50%; }
  .s-suffix-2 { margin-right: 100%; }
}

@media only screen and (min-width: 400px) {
  .row { padding: 8px; }
  .col { padding: 8px; }

  .m-1 { width: 16.66667%; }
  .m-2 { width: 33.33333%; }
  .m-3 { width: 50%; }
  .m-4 { width: 66.66667%; }
  .m-5 { width: 83.33333%; }
  .m-6 { width: 100%; }
  .m-prefix-1 { margin-left: 16.66667%; }
  .m-prefix-2 { margin-left: 33.33333%; }
  .m-prefix-3 { margin-left: 50%; }
  .m-prefix-4 { margin-left: 66.66667%; }
  .m-prefix-5 { margin-left: 83.33333%; }
  .m-prefix-6 { margin-left: 100%; }
  .m-suffix-1 { margin-right: 16.66667%; }
  .m-suffix-2 { margin-right: 33.33333%; }
  .m-suffix-3 { margin-right: 50%; }
  .m-suffix-4 { margin-right: 66.66667%; }
  .m-suffix-5 { margin-right: 83.33333%; }
  .m-suffix-6 { margin-right: 100%; }
}

@media only screen and (min-width: 1000px) {
  .row { padding: 10px; }
  .col { padding: 10px; }

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
  .l-prefix-1 { margin-left: 8.33333%; }
  .l-prefix-2 { margin-left: 16.66667%; }
  .l-prefix-3 { margin-left: 25%; }
  .l-prefix-4 { margin-left: 33.33333%; }
  .l-prefix-5 { margin-left: 41.66667%; }
  .l-prefix-6 { margin-left: 50%; }
  .l-prefix-7 { margin-left: 58.33333%; }
  .l-prefix-8 { margin-left: 66.66667%; }
  .l-prefix-9 { margin-left: 75%; }
  .l-prefix-10 { margin-left: 83.33333%; }
  .l-prefix-11 { margin-left: 91.66667%; }
  .l-prefix-12 { margin-left: 100%; }
  .l-suffix-1 { margin-right: 8.33333%; }
  .l-suffix-2 { margin-right: 16.66667%; }
  .l-suffix-3 { margin-right: 25%; }
  .l-suffix-4 { margin-right: 33.33333%; }
  .l-suffix-5 { margin-right: 41.66667%; }
  .l-suffix-6 { margin-right: 50%; }
  .l-suffix-7 { margin-right: 58.33333%; }
  .l-suffix-8 { margin-right: 66.66667%; }
  .l-suffix-9 { margin-right: 75%; }
  .l-suffix-10 { margin-right: 83.33333%; }
  .l-suffix-11 { margin-right: 91.66667%; }
  .l-suffix-12 { margin-right: 100%; }
}
```

Obviously, this is quite a lot of generated css, so enable only what you need (that's why it's optional).


### properties
Columns are not the only flexible pieces of the puzzle of RWD. Often you find yourself setting properties (like margins, paddings, etc) that need different sizes for different layouts. You can do this with specific CSS, but how about this:

```scss
@media only screen and (max-width: 399px) {
  @include properties(5px, (margin, padding));
}

@media only screen and (min-width: 400px) {
  @include properties(8px, (margin, padding));
}

@media only screen and (min-width: 1000px) {
  @include properties(10px, (margin, padding));
}
```

This will generate classes with appropriate margins:

```css
@media only screen and (max-width: 399px) {
  .margin { margin: 5px; }
  .padding { padding: 5px; }
}

@media only screen and (min-width: 400px) {
  .margin { margin: 8px; }
  .padding { padding: 8px; }
}

@media only screen and (min-width: 1000px) {
  .margin { margin: 10px; }
  .padding { padding: 10px; }
}
```

When you use these classes instead of specific CSS you'll notice that things get more consistent, especially in combination with the grid. But of course these classes aren't enough for all cases. That's why we've got some extra ones, which are still relative to the overall sizing of things:

```scss
@media only screen and (max-width: 399px) {
  @include properties(5px, (margin, padding), double);
}

@media only screen and (min-width: 400px) {
  @include properties(8px, (margin, padding), double);
}

@media only screen and (min-width: 1000px) {
  @include properties(10px, (margin, padding), double);
}
```

```css
@media only screen and (max-width: 399px) {
  .margin-double { margin: 10px; }
  .padding-double { padding: 10px; }
}

@media only screen and (min-width: 400px) {
  .margin-double { margin: 16px; }
  .padding-double { padding: 16px; }
}

@media only screen and (min-width: 1000px) {
  .margin-double { margin: 20px; }
  .padding-double { padding: 20px; }
}
```

`triple` and `half` are also available. In my experience, if you find yourself needing any more or less than this, there's probably something wrong with the design. If you experience a desperate need for more, [file a bug](https://github.com/Jpunt/sass-t-1000-grid/issues/new) and let me know.


### properties-for-layout
When you're in a situation where you only want some margin in a specific layout, use `properties-for-layout`:

```scss
@media only screen and (max-width: 399px) {
  @include properties-for-layout(s, 5px, (margin, padding));
}

@media only screen and (min-width: 400px) {
  @include properties-for-layout(m, 8px, (margin, padding));
}

@media only screen and (min-width: 1000px) {
  @include properties-for-layout(l, 10px, (margin, padding));
}
```

```css
@media only screen and (max-width: 399px) {
  .s-margin { margin: 5px; }
  .s-padding { padding: 5px; }
}

@media only screen and (min-width: 400px) {
  .m-margin { margin: 8px; }
  .m-padding { padding: 8px; }
}

@media only screen and (min-width: 1000px) {
  .l-margin { margin: 10px; }
  .l-padding { padding: 10px; }
}
```

You can use `double` / `triple` / `half` here as well, like this:

```scss
@media only screen and (max-width: 399px) {
  @include properties-for-layout(s, 5px, (margin, padding), double)
}
```

```css
@media only screen and (max-width: 399px) {
  .s-margin-double { margin: 10px; }
  .s-padding-double { padding: 10px; }
}
```

### reset-properties
There are situations when you don't want certain properties to be set, for instance by one of the above mixins. For these cases, you can do this:

```scss
@include reset-properties((margin, padding));
```

```css
.reset-margin { margin: 0 !important; }
.reset-padding { padding: 0 !important; }
```

### reset-properties-for-layout
Or when you want properties to reset for certain layouts only, you can do this:

```scss
@media only screen and (max-width: 399px) {
  @include reset-properties-for-layout(s, (margin, padding));
}
```

```css
@media only screen and (max-width: 399px) {
  .s-reset-margin { margin: 0 !important; }
  .s-reset-padding { padding: 0 !important; }
}
```
