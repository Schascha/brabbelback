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

#### `next(index, array, loop = false)`

Returns next element from array.

```javascript
import { next } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(next(0, array)); // 'bar'
console.log(next(2, array)); // 'foo'
console.log(next(2, array, false)); // Disable infinite loop through array. Returns `undefined`.
```

#### `prev(index, array, loop = true)`

Returns previous element from array.

```javascript
import { prev } from '@schascha/brabbelback';

const array = ['foo', 'bar', 'baz'];
console.log(prev(0, array)); // 'baz'
console.log(prev(2, array)); // 'bar'
console.log(prev(0, array, false)); // Disable infinite loop through array. Returns `undefined`.
```

#### `print(value, separator = ', ')`

Prints a value or an array of values.

```javascript
import { print } from '@schascha/brabbelback';

console.log(print('foo')); // 'foo'
console.log(print(['foo', 'bar', 'baz'])); // 'foo, bar, baz'
console.log(print(['foo', 'bar', 'baz'], '|')); // 'foo|bar|baz'
```

#### `push(array, value, unique = true)`

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

#### `setCookie(name, value, days = 1)`

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

### Copy

#### `copy(text)`

Copy text to the clipboard.

```javascript
import { copy } from '@schascha/brabbelback';

copy('foo');
```

### Date

#### `addDays(date, days)`

Add days to a date.

```javascript
import { addDays } from '@schascha/brabbelback';

console.log(addDays(new Date('2020-01-01'), 1)); // new Date('2020-01-02')
```

#### `addMonths(date, months)`

Add months to a date.

```javascript
import { addMonths } from '@schascha/brabbelback';

console.log(addMonths(new Date('2020-01-01'), 1)); // new Date('2020-02-01')
```

#### `addYears(date, years)`

Add years to a date.

```javascript
import { addYears } from '@schascha/brabbelback';

console.log(addYears(new Date('2020-01-01'), 1)); // new Date('2021-01-01')
```

#### `diffInDays(date1, date2)`

Get the difference in days between two dates.

```javascript
import { diffInDays } from '@schascha/brabbelback';

console.log(diffInDays(new Date('2020-01-01'), new Date('2020-02-01'))); // 31
```

#### `daysInMonth(date)`

Get the number of days in a month.

```javascript
import { daysInMonth } from '@schascha/brabbelback';

console.log(daysInMonth(new Date('2020-01-01')); // 31
```

#### `formatDate(date, format = 'YYYY-MM-DD')`

Format a date as YYYY-MM-DD or a custom format.

```javascript
import { formatDate } from '@schascha/brabbelback';

console.log(formatDate(new Date('2020-01-31')); // 2020-01-31
console.log(formatDate(new Date('2020-01-31'), 'DD.MM.YYYY'); // 31.01.2020
```

### Event

#### `debounce(fn, delay)`

Debounce function to prevent multiple calls in a short period of time.

```javascript
import { debounce } from '@schascha/brabbelback';
```

#### `throttled(fn, delay)`

Throttle function to reduce the trigger rate.

```javascript
import { throttled } from '@schascha/brabbelback';
```

### Filter

#### `compare(a, b, operator = '')`

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

### Inject

#### `injectScript(src)`

```javascript
import { injectScript } from '@schascha/brabbelback';
```

### Math

#### `gcd(a, b)`

```javascript
import { gcd } from '@schascha/brabbelback';

console.log(gcd(8, 12)); // 4
```

#### `ratio(a, b)`

```javascript
import { ratio } from '@schascha/brabbelback';

console.log(ratio(1024, 768)); // 4:3
```

### Scroll

#### `scrollToTop(el, offset = 0, behavior = 'smooth')`

Scroll to the top of the element.

```javascript
import { scrollToTop } from '@schascha/brabbelback';

const el = document.querySelector('.el');
scrollToTop(el);

// Scroll to element with sticky header
scrollToTop(el, '.header');

// Scroll to element with offset
scrollToTop(el, 100);
```

### Text

#### `truncate(str, length = 250, ending = '...')`

Truncate a string to a certain length

```javascript
import { truncate } from '@schascha/brabbelback';

truncate('Hello World', 8); // Hello...
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
