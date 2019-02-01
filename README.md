## shortid-extend  (https://www.npmjs.org/package/shortid-extend)

> Amazingly short non-sequential url-friendly unique id generator.



This is a fork of the original ShortId module (https://github.com/dylang/shortid) from Dylan Greene(https://github.com/dylang)
for adapt the module to my work needs.




ShortId-extend creates amazingly short non-sequential url-friendly unique ids.  Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.

** NEW FUNCTIONALITY ** 
The module have now a config method for override the default settings for the alphabet and the default generated ID Length. IF you configure the module for have this config object overrides the default configuration and have the capability of sets the desired ID lenght also your desired alphabet lenght.

 * By default 7-14 url-friendly characters: `A-Z`, `a-z`, `0-9`, `_-`
 * **NEW** Load and use characters of any length.
 * **NEW** Set the default generated ID Length.
 * Supports `cluster` (automatically), custom seeds, custom alphabet.
 * Can generate any number of ids without duplicates, even millions per day.
 * Perfect for games, especially if you are concerned about cheating so you don't want an easily guessable id.
 * Apps can be restarted any number of times without any chance of repeating an id.
 * Popular replacement for Mongo ID/Mongoose ID.
 * Works in Node, io.js, and web browsers.
 * Includes [Mocha](http://mochajs.org/) tests.

ShortId-extend does not generate cryptographically secure ids, so don't rely on it to make IDs which are impossible to guess.


### Usage

```js
const shortid = require('shortid-extend');

console.log(shortid.generate());
// PPBqWA9
```

Mongoose Unique Id
```js
_id: {
  'type': String,
  'default': shortid.generate
},
```



### Browser Compatibility

The best way to use `shortid` in the browser is via [browserify](http://browserify.org/) or [webpack](http://webpack.github.io/).

These tools will automatically only include the files necessary for browser compatibility.

All tests will run in the browser as well:

```bash
## build the bundle, then open Mocha in a browser to see the tests run.
$ grunt build open
```



### Example

```bash
~/projects/shortid ❯ node examples/examples.js
eWRhpRV
23TplPdS
46Juzcyx
dBvJIh-H
2WEKaVNO
7oet_d9Z
dogPzIz8
nYrnfYEv
a4vhAoFG
hwX6aOr7
```

### API

```js
var shortid = require('shortid');
```

---------------------------------------
#### `shortid.config(object)`

__Params__ `boolean` disableDefaultAlphabetLength: Disables the default characters length setting.

__Params__ `boolean` disableDefaultIdLength: Disables the default generated ID Length.

__Params__ `number` idLength: **REQUIRED IF disableDefaultIdLength sets to true** Desired ID Length.

__Example__

```js
shortid.config({
  disableDefaultAlphabetLength: true,
  disableDefaultIdLength: true,
  idLength: 6
})

```

---------------------------------------

#### `shortid.generate()`

__Returns__ `string` non-sequential unique id.

__Example__

```js
users.insert({
  _id: shortid.generate(),
  name: '...',
  email: '...'
});
```

---------------------------------------

#### `shortid.characters(string)`

__Default:__ `'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'`

__Returns__ new alphabet as a `string`

__Recommendation:__ If you don't like _ or -, you can to set new characters to use.

__Optional__

Change the characters used.

You must provide a string of all 64 unique characters. Order is not important. (You can overwrite this setting with config object)



If you sets 

The default characters provided were selected because they are url safe.

__Example__

```js
// use $ and @ instead of - and _
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
```

```js
// any 64 unicode characters work, but I wouldn't recommend this.
shortid.characters('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫');
```


---------------------------------------

#### `shortid.isValid(id)`

__Returns__ `boolean`

Check to see if an id is a valid `shortid`. Note: This only means the id _could_ have been generated by `shortid`, it doesn't guarantee it.

__Example__

```js
shortid.isValid('41XTDbE');
// true
```

```js
shortid.isValid('i have spaces');
// false
```

---------------------------------------

#### `shortid.worker(integer)`

__Default:__ `process.env.NODE_UNIQUE_ID || 0`

__Recommendation:__ You typically won't want to change this.

__Optional__

If you are running multiple server processes then you should make sure every one has a unique `worker` id. Should be an integer between 0 and 16.
If you do not do this there is very little chance of two servers generating the same id, but it is theoretically possible
if both are generated in the exact same second and are generating the same number of ids that second and a half-dozen random numbers are all exactly the same.

__Example__

```js
shortid.worker(1);
```

---------------------------------------

#### `shortid.seed(integer)`

__Default:__ `1`

__Recommendation:__ You typically won't want to change this.

__Optional__

Choose a unique value that will seed the random number generator so users won't be able to figure out the pattern of the unique ids. Call it just once in your application before using `shortId` and always use the same value in your application.

Most developers won't need to use this, it's mainly for testing ShortId.

If you are worried about users somehow decrypting the id then use it as a secret value for increased encryption.

__Example__

```js
shortid.seed(1000);
```






### About the Original Author of the module.

Visit your Github page: https://github.com/dylang

### License
Copyright (c) 2016 Dylan Greene, contributors.

Released under the [MIT license](https://tldrlegal.com/license/mit-license).

Screenshots are [CC BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) (Attribution-ShareAlike).
