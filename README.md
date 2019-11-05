# brabbelback

[![Travis Status](https://travis-ci.com/Schascha/brabbelback.svg?branch=master)](https://travis-ci.com/Schascha/brabbelback)

Just some JS utils

- [classnames](#classnames)
- [cookie](#cookie)
- [filter](#filter)
- [visible](#visible)

## classnames

Conditional class name helper

```javascript
import {classnames} from 'brabbelback';

classnames(['foo', 'bar', {baz: true}]); // => 'foo bar baz'
classnames([{foo: true, bar: undefined}, 'baz']); // => 'foo baz'
```

## cookie

Handle cookies

```javascript
import {getCookie, setCookie} from 'brabbelback';
```

### Create a cookie

```javascript
setCookie('name', 'value');
```

### Create a cookie that expires 7 days from now

```javascript
setCookie('name', 'value', 7);
```

### Read cookie

```javascript
getCookie('name');
```

### Remove cookie

```javascript
setCookie('name', '', 0);
```

## filter

Array/Object helper

### Filter an array of objects with multiple criteria

```javascript
import {filter} from 'brabbelback';
```

### Compare values

```javascript
import {compare} from 'brabbelback';
```

### Group array items by key

```javascript
import {groupBy} from 'brabbelback';
```

### Find a value in obj recursively

```javascript
import {has} from 'brabbelback';
```

### Print a value or an array of values

```javascript
import {print} from 'brabbelback';
```

### Push a value or an array of values recursively

```javascript
import {push} from 'brabbelback';
```

### Return previous element

```javascript
import {prev} from 'brabbelback';
```

### Return next element

```javascript
import {next} from 'brabbelback';
```

### Return random element

```javascript
import {random} from 'brabbelback';
```

### Check if value is empty

```javascript
import {isEmpty} from 'brabbelback';
```

## visible

Test if a DOM element is visible on the users viewport

```javascript
import {visible} from 'brabbelback';

var el = document.getElementById('name');

window.console.log(visible(el));
```

## Bugs?

Please let me know: https://github.com/Schascha/brabbelback/issues

## :coffee: Buy me a Coffee

Support this project and [others](https://github.com/Schascha?tab=repositories) via [PayPal](https://www.paypal.me/LosZahlos). Thanks

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/Schascha/brabbelback/releases).

## License

[MIT](./LICENSE)

Copyright (c) 2018-present Sascha Künstler
