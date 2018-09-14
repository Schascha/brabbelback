# brabbelback

Just some JS utils

- [cookie](#cookie)
- [visible](#visible)

## cookie

Handle cookies

```javascript
import {get, set} from 'brabbelback/cookie';
```

Create a cookie:

```javascript
set('name', 'value');
```

Create a cookie that expires 7 days from now:

```javascript
set('name', 'value', 7);
```

Read cookie:

```javascript
get('name');
```

Remove cookie:

```javascript
set('name', '', 0);
```

## visible

Test if a DOM element is visible on the users viewport

```javascript
import {visible} from 'brabbelback/visible';
```

Usage:

```javascript
var el = document.getElementById('name');
echo visible(el);
```


## License

[MIT](./LICENSE)
