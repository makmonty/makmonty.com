---
layout: ../../layouts/BlogLayout.astro
title: The Power of Tree Shaking in Frontend Development by example
pubDate: 2024-01-12T12:10:28.549Z
description: The primary goal of tree shaking is to reduce the size of the final
  JavaScript bundle that is delivered to the browser. Smaller bundles mean
  faster load times, improved performance, and a better user experience.
tags:
  - javascript
  - frontend
  - coding
featuredImage: /images/cms/treeshaking.webp
categories: []
---
## Introduction

Frontend development has witnessed significant advancements in recent years, and one of the key techniques that has revolutionized the way we build and optimize JavaScript applications is tree shaking. This process has become an essential tool in the toolkit of web developers, enabling them to create faster and more efficient applications by eliminating unused code. In this article, we'll dive into the concept of tree shaking, understand how it works, and explore its impact on frontend development.

## Understanding Tree Shaking

Tree shaking is a term used to describe the process of eliminating dead code or unused modules from your JavaScript application during the bundling phase. It takes its name from the idea of shaking a tree and letting the dead leaves (unused code) fall off, leaving only the essential branches (necessary code) behind.

The primary goal of tree shaking is to reduce the size of the final JavaScript bundle that is delivered to the browser. Smaller bundles mean faster load times, improved performance, and a better user experience. This is particularly crucial in the context of modern web development, where users expect fast and responsive applications.

## How Tree Shaking Works

Tree shaking relies on the static nature of ES6 modules to identify and eliminate dead code during the build process. ES6 modules provide a clear and explicit syntax for defining dependencies, making it easier for tools to analyze the code and determine which parts are actually being used.

When you import a module into your code, tree shaking tools can identify the specific functions, classes, or variables that are used and remove the rest. This process is made possible by the static nature of ES6 imports, as opposed to CommonJS or AMD, which have a more dynamic module system that makes it challenging to perform such optimizations.

## Enabling tree-shaking in the most commonly-used bundling tools

Several build tools and bundlers support tree shaking, making it easier for developers to integrate this optimization technique into their workflows. Some of the popular tools include:

1. [Webpack](https://webpack.js.org/): A widely used module bundler, has native support for tree shaking. By configuring your webpack build correctly and ensuring that your dependencies are ES6 modules, you can take advantage of its tree shaking capabilities.

```javascript
// webpack.config.js
module.exports = {
  // ...
  mode: 'production',
  optimization: {
    usedExports: true,
  },
};
```

2. [Rollup](https://rollupjs.org): Another bundler that excels at tree shaking. It is designed to optimize ES6 modules and is particularly popular for building libraries or smaller, focused applications.

```javascript
// rollup.config.js
import { terser } from '@rollup/plugin-terser';

export default {
  // ...
  plugins: \[terser()],
};
```

3. [Vite](https://vitejs.dev): The youngest kid in the block, runs on `esbuild` by default and claims to be the fastest

```javascript
// vite.config.js
export default {
  build: {
    minify: 'esbuild' // or 'terser'
  }
}
```

By default, both Webpack and Rollup use [Terser](https://terser.org/) under the hood, but Vite runs on [esbuild](https://esbuild.github.io/).

## Example output

Let's do a simple case. The following code will be a `math` module that exports two basic operation functions:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

Our main file will import that module and just use one of them:

```javascript
// app.js
import { add } from './math';

const result = add(5, 3);
```

Vite needs an `index.html` file as entrypoint, so we'll add the simplest one:

```html
<html>
  <head>
    <script type="module" src="./index"></script>
  </head>
  <body>
    <h1>Treeshaking example</h1>
  </body>
</html>
```

For this example we'll use Vite to minimize our code. Our config file looks like this:

```javascript
export default {
  build: {
    modulePreload: false
  }
}
```

The only option we add is the `build.modulePreload: false` to avoid having extra boilerplate in our output file. Under normal circumstances, you don't want to add that line.

Let's install Vite:

```bash
$ yarn add -D vite
```

And run it

```bash
$ npx vite build
```

Unless configured otherwise, our output file will be in the `dist/assets` directory. Let's see the result:

```bash
$ cat dist/assets/index-XXXXXX.js
function l(o,n){return o+n}const e=l(5,3);
```

As you can see, the resulting file doesn't contain any mention to the unused methods of the `math` module.

## Impact on Performance

The impact of tree shaking on performance is substantial. By removing unused code, the size of your JavaScript bundle is reduced, leading to faster download times and improved execution speed. Smaller bundles also contribute to quicker parsing and compilation times in the browser, resulting in a more responsive application.

Moreover, reducing the amount of code that needs to be loaded and executed can positively influence other performance metrics, such as Time to Interactive (TTI) and First Contentful Paint (FCP). Users will experience a faster-loading and more seamless interaction with your web application.

## Best Practices for Effective Tree Shaking

1. Use ES6 Modules: Ensure that your code and dependencies are written using ES6 module syntax. This static nature allows tree shaking tools to accurately determine unused code.
2. Check Bundler Configuration: Verify that your bundler is configured correctly to enable tree shaking. In webpack, for example, setting the \`mode\` to 'production' and enabling the \`usedExports\` optimization are essential steps.
3. Regularly Update Dependencies: Keep your project dependencies up to date, as newer versions of libraries may have improved tree shaking support and performance optimizations.
4. Avoid Dynamic Imports: While dynamic imports have their use cases, they can limit the effectiveness of tree shaking. Minimize the use of dynamic imports if possible.
5. Analyze Bundle Size: Use tools like webpack-bundle-analyzer to visualize your bundle size and identify opportunities for further optimization.

## Conclusion

Tree shaking has become a crucial optimization technique for frontend developers, allowing them to create leaner and more efficient JavaScript applications. By removing dead code during the bundling process, developers can significantly improve the performance of their web applications, leading to faster load times and enhanced user experiences.

As the web development landscape continues to evolve, integrating tree shaking into your workflow is a valuable practice to ensure that your applications stay fast, responsive, and competitive.
