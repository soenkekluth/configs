import decorate from '../../lib/decorators/decorate';
// if (typeof Promise === 'undefined') {
//   window.Promise = require('promise-polyfill');

//   // Rejection tracking prevents a common issue where React gets into an
//   // inconsistent state due to an error, but it gets swallowed by a Promise,
//   // and the user has no idea what causes React's erratic future behavior.
//   // require('promise/lib/rejection-tracking').enable();
//   // window.Promise = require('promise/lib/es6-extensions.js');
// }

if (!String.prototype.trim) {
  decorate(String, 'trim', function trim(origin) {
    if (origin) {
      return origin.call(this);
    }
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  });
}


// fetch() polyfill for making API calls.
// require('whatwg-fetch');
// require('isomorphic-fetch');


// require('object-fit-images');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
// Object.assign = require('object-assign');


// https://github.com/YuzuJS/setImmediate
// https://github.com/kriskowal/asap
// https://github.com/taylorhakes/setAsap

// https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js
