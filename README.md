# Siren - Arknights OST Downloader in CLI -

![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)
[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)
![Test](https://github.com/p1atdev/siren/actions/workflows/test.yml/badge.svg)

## Installation

TODO

## Use as a library

Import

```ts
// deps.ts

export * as siren from "https://deno.land/x/siren@v0.1.0/mod.ts";
```

Then,

```ts
// main.ts

import { getSong } from "./deps.ts";

const song = await getSong("880378");

console.log(song.title); // "Operation Blade"

console.log(song.sourceUrl); // https://res01.hycdn.cn/*[random]*/*.mp3
```
