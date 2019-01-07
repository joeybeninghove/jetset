# jekyll-fun

In kind of a spin-off of [fun](https://github.com/joeybeninghove/fun), this is a
[Jekyll](https://jekyllrb.com/) starter kit that can be used to quickly build
out a production-ready Jekyll static site.

## Features

* [Webpack](https://webpack.js.org/) for managing all of the assets
* [Tailwind](https://tailwindcss.com/) baked in for utility-first CSS
* [Stimulus](https://stimulusjs.org/) as a lightweight javascript framework
* [PostCSS](https://github.com/postcss/postcss) used to load Tailwind and make
    [postcss-import](https://github.com/postcss/postcss-import) and 
    [postcss-preset-env](https://github.com/csstools/postcss-preset-env) available
    to use
* [BrowserSync](https://www.browsersync.io/) for live reloading of browser after
    code changes
* [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) for generating SEO
    tags
* [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) for generating a
    sitemap

## Setup

1. `bundle install`
2. `yarn install`

## Directory Structure

### `_src`

All of the CSS, JS and images are stored in the `_src` directory, which is
managed by Webpack.

## Usage

1. `rake serve`
2. `yarn dev`

## The Process

When Webpack runs, it compiles all of the assets into the `/assets` directory
and then generates the base layout to `_layouts/base.html` with the appropriate
`<link>` and `<script>` tags injected into it.
