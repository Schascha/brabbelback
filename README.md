# brabbelback

[![Build](https://github.com/Schascha/brabbelback/workflows/Build/badge.svg)](https://github.com/Schascha/brabbelback/actions)
[![npm](https://img.shields.io/npm/v/@schascha/brabbelback)](https://www.npmjs.com/package/@schascha/brabbelback)
[![install size](https://packagephobia.com/badge?p=@schascha/brabbelback)](https://packagephobia.com/result?p=@schascha/brabbelback)

Just some JS utils

## Installation

You can use brabbelback in your project by installing it using [npm](https://www.npmjs.com/package/@schascha/brabbelback):

```sh
npm i @schascha/brabbelback
```

## Usage

### Array

#### `has(array, value)`

Finds a value in array recursively.

```javascript
import { has } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(has(array, 'foo')); // true
console.log(has(array, ['foo', 'bar'])); // true
```

#### `isEmpty(value)`

Checks if value or array is empty.

```javascript
import { isEmpty } from '@schascha/brabbelback';

console.log(isEmpty(null)); // true
console.log(isEmpty('')); // true
console.log(isEmpty([])); // true
console.log(isEmpty([[]])); // true
```

#### `last(array)`

Returns last element from array.

```javascript
import { last } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(last(['foo', 'bar', 'baz'])); // 'baz'
```

#### `next(index, array, [loop=false])`

Returns next element from array.

```javascript
import { next } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(next(0, array)); // 'bar'
console.log(next(2, array)); // 'foo'
console.log(next(2, array, false)); // Disable infinite loop through array. Returns `undefined`.
```

#### `prev(index, array, [loop=true])`

Returns previous element from array.

```javascript
import { prev } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(prev(0, array)); // 'baz'
console.log(prev(2, array)); // 'bar'
console.log(prev(0, array, false)); // Disable infinite loop through array. Returns undefined.
```

#### `print(value, [separator=', '])`

Prints a value or an array of values.

```javascript
import { print } from '@schascha/brabbelback';

console.log(print('foo')); // 'foo'
console.log(print(['foo', 'bar', 'baz'])); // 'foo, bar, baz'
console.log(print(['foo', 'bar', 'baz'], '|')); // 'foo|bar|baz'
```

#### `push(array, value, [unique=true])`

Pushs a value or an array of values recursively.

```javascript
import { push } from '@schascha/brabbelback';

const array = [];
push(array, 'foo'); // ['foo']
push(array, ['foo', 'bar', 'baz']); // ['foo', 'bar', 'baz']
push(array, 'foo', false); // Disable unique push of strings and numbers. Returns ['foo', 'bar', 'baz', 'foo']
```

#### `random(array)`

Returns random element from array.

```javascript
import { random } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(random(array)); // 'foo' or 'bar' or 'baz'
```

#### `shuffle(array)`

Randomize array.

```javascript
import { shuffle } from '@schascha/brabbelback';

const array = ['foo', 'bar'];
console.log(shuffle(array)); // ['foo', 'bar'] or ['bar', 'foo']
```

#### `toArray(value)`

Returns value as an array if it's not one.

```javascript
import { toArray } from '@schascha/brabbelback';

console.log(toArray('foo')); // ['foo']
console.log(toArray(['foo'])); // ['foo']
console.log(toArray()); // []
```

### Classnames

#### `classnames(classes)`

Conditional class name helper.

```javascript
import { classnames } from '@schascha/brabbelback';

classnames('foo', 'bar', { baz: true }); // => 'foo bar baz'
classnames(['foo', 'bar', 'baz']); // => 'foo bar baz'
classnames({ foo: true, bar: undefined }, 'baz'); // 'foo baz'
```

### Cookie

#### `setCookie(name, value, [days=1])`

Create a cookie.

```javascript
import { setCookie } from '@schascha/brabbelback';

setCookie('name', 'value');
setCookie('name', 'value', 7); // Create a cookie that expires 7 days from now
```

#### `getCookie(name)`

Get cookie by name.

```javascript
import { getCookie } from '@schascha/brabbelback';

getCookie('name');
```

#### `removeCookie(name)`

Remove cookie.

```javascript
import { removeCookie } from '@schascha/brabbelback';

removeCookie('name'); // Same as setCookie('name', '', 0);
```

#### `clearCookies()`

Clear all cookies.

```javascript
import { clearCookies } from '@schascha/brabbelback';

clearCookies();
```

### Filter

#### `compare(a, b, [operator=''])`

Compare values.

```javascript
import { compare } from '@schascha/brabbelback';
```

#### `filter(obj, filters)`

Filter an array of objects with multiple criteria.

```javascript
import { filter } from '@schascha/brabbelback';
```

#### `groupBy(array, key)`

Group array items by key.

```javascript
import { groupBy } from '@schascha/brabbelback';

const array = [
	{ group: 'foo', name: 'Item 1' },
	{ group: 'bar', name: 'Item 2' },
	{ group: 'foo', name: 'Item 3' },
	{ name: 'Item 4' },
];
console.log(groupBy(array, 'group'));

/*
{
	foo: [
		{group: 'foo', name: 'Item 1'},
		{group: 'foo', name: 'Item 3'}
	],
	bar: [
		{group: 'bar', name: 'Item 2'}
	],
	undefined: [
		{ name: 'Item 4'}
	]
}
*/
```

### Type

#### `typeOf(value)`

Type-checking with Object.prototype.toString() method.

```javascript
import { typeOf } from '@schascha/brabbelback';

console.log(typeOf('foo')); // string
console.log(typeOf(['foo'])); // array
console.log(typeOf({ foo: 'bar' })); // object
```

### Visible

#### `isVisible(el)`

Test if a DOM element is visible on the users viewport.

```javascript
import { isVisible } from '@schascha/brabbelback';

const el = document.getElementById('name');
console.log(isVisible(el));
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
