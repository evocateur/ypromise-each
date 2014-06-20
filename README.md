Y.Promise.each()
================

Like all(),
but iterating sequentially,
resolving to an array of resolved values.

```js
var Promise = require('ypromise-each');

Promise.each(['foo', Promise.resolve('bar')], function (val, idx) {
    // idx 0, val === 'foo'
    // idx 1, val === 'bar'
})
    .then(function (value) {
        // value === ['foo','bar']
    })
    .catch(function (ex) {
        // if iterator threw, or Promise rejected
    });
```
