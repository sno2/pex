# Pex

An unofficial JavaScript (+ TypeScript) wrapper for the Pexels API.

## Why?

You might be wondering why the heck we would have another Pexels wrapper if there already is an [official one](https://github.com/pexels/pexels-javascript). The answer to that is that the development for the main one is not that fast and I wanted to implement better types such as string literals `"small" | "medium" | "large"` instead of just `string`. Also, they don't have any documentation on how to actually use their API wrapper. Furthermore, their code is lacking JSDoc (or TSDoc) to provide tooltips for properties/methods/classes on how to use certain things and what they actually do.

## Getting Started

Pex has browser and Node.js support. You can check out how to use Pex for each of these runtimes below.

### Web Usage

To use Pex on the web, you can just load your corresponding script type located in the `dist` folder after running `npm run build`. However, if you want to just load it via a CDN such as unpkg you can include the following HTML before your JavaScript that uses `window.pex`:

```html
<script src="https://unpkg.com/@sno2/pex/dist/index.umd.js"></script>
```

After that, you can just load in the `Pex` class as a UMD library on the `window` object:

```js
const { Pex } = window.pex; // sorta like require("@sno2/pex")

const pex = new Pex({ key: "YOUR_KEY" });
```

### Node.js Usage

It is extremely easy to use Pex on Node.js because all you need to do is run the following command to install Pex into your project:

```bash
npm i @sno2/pex
```

After that, you can import Pex like regular:

```js
const { Pex } = require("@sno2/pex"); // CommonJS

import { Pex } from "@sno2/pex"; // ES Module
```

## Docs

Check out the [full API docs](./docs/modules/index.md).

## License

[MIT](./LICENSE)
