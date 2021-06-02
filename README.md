# brabbelback

[![Build](https://github.com/Schascha/brabbelback/workflows/Build/badge.svg)](https://github.com/Schascha/brabbelback/actions)
[![npm](https://img.shields.io/npm/v/@schascha/brabbelback)](https://www.npmjs.com/package/@schascha/brabbelback)

Just some JS utils

## Installation

You can use brabbelback in your project by installing it using [npm](https://www.npmjs.com/package/@schascha/brabbelback):

```sh
npm i @schascha/brabbelback
```

## Usage

### classnames

Conditional class name helper

```javascript
import {classnames} from 'brabbelback';

classnames(['foo', 'bar', {baz: true}]); // => 'foo bar baz'
classnames([{foo: true, bar: undefined}, 'baz']);  // 'foo baz'
```

### cookie

Handle cookies

```javascript
import {getCookie, setCookie} from 'brabbelback';
```

#### Create a cookie

```javascript
setCookie('name', 'value');
```

#### Create a cookie that expires 7 days from now

```javascript
setCookie('name', 'value', 7);
```

#### Read cookie

```javascript
getCookie('name');
```

#### Remove cookie

```javascript
setCookie('name', '', 0);
```

### filter

Array/Object helper

#### Filter an array of objects with multiple criteria

```javascript
import {filter} from 'brabbelback';
```

#### Compare values

```javascript
import {compare} from 'brabbelback';
```

#### Group array items by key

```javascript
import {groupBy} from 'brabbelback';
```

#### Find a value in obj recursively

```javascript
import {has} from 'brabbelback';
```

#### Check if value or array is empty

```javascript
import {isEmpty} from 'brabbelback';

console.log(isEmpty(null));  // true
console.log(isEmpty(''));  // true
console.log(isEmpty([]));  // true
```

#### Print a value or an array of values

```javascript
import {print} from 'brabbelback';
```

#### Push a value or an array of values recursively

```javascript
import {push} from 'brabbelback';

const array = [];

push(array, 'foo');  // ['foo']
push(array, ['foo', 'bar', 'baz']);  // ['foo', 'bar', 'baz']
```

#### Return previous element from array

```javascript
import {prev} from 'brabbelback';

const arr = ['foo', 'bar', 'baz'];

console.log(prev(0, arr));  // 'baz'
console.log(prev(2, arr));  // 'bar'
```

#### Return next element from array

```javascript
import {next} from 'brabbelback';

const arr = ['foo', 'bar', 'baz'];

console.log(next(0, arr));  // 'bar'
console.log(next(2, arr));  // 'foo'
```

#### Return random element from array

```javascript
import {random} from 'brabbelback';

const array = ['foo', 'bar', 'baz'];

console.log(random(array));  // 'foo' or 'bar' or 'baz'
```

#### Shuffle array

```javascript
import {shuffle} from 'brabbelback';

const array = ['foo', 'bar', 'baz'];

console.log(shuffle(array));
```

### visible

Test if a DOM element is visible on the users viewport

```javascript
import {visible} from 'brabbelback';

var el = document.getElementById('name');

console.log(visible(el));
```

## Bugs? 🐛

Please let me know: https://github.com/Schascha/brabbelback/issues

## Buy me a Coffee ☕

Support this project and [others](https://github.com/Schascha?tab=repositories) via [PayPal](https://www.paypal.me/LosZahlos). Thanks

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/Schascha/brabbelback/releases).

## License

[MIT](./LICENSE)

Copyright (c) 2018 Sascha Künstler
