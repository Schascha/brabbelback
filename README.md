# brabbelback

Just some JS utils

- [classname](#classnames)
- [cookie](#cookie)
- [visible](#visible)

## classnames

Conditional class name helper

```javascript
import {classnames} from 'brabbelback';
```

Usage:

```javascript
classnames(['foo', 'bar', {baz: true}]); // => 'foo bar baz'
classnames([{foo: true, bar: undefined}, 'baz']); // => 'foo baz'
```

## cookie

Handle cookies

```javascript
import {getCookie, setCookie} from 'brabbelback';
```

Create a cookie:

```javascript
setCookie('name', 'value');
```

Create a cookie that expires 7 days from now:

```javascript
setCookie('name', 'value', 7);
```

Read cookie:

```javascript
getCookie('name');
```

Remove cookie:

```javascript
setCookie('name', '', 0);
```

## visible

Test if a DOM element is visible on the users viewport

```javascript
import {visible} from 'brabbelback';
```

Usage:

```javascript
var el = document.getElementById('name');

window.console.log(visible(el));
```

## License

[MIT](./LICENSE)
