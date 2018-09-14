# brabbelback

Just some JS utils

- [cookie](#cookie)

## cookie

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

## License

[MIT](./LICENSE)
