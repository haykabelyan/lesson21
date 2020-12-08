//RegEx

// 21-19-1999
var text = '21-19-1999';
var pattern = /\d{1,2}-\d{1,2}-\d{4}/;
console.log( pattern.test(text) );

var text = '+374 (99) 35-33-13';
var pattern = /\+374 \(\d{2}\) \d{2}-\d{2}-\d{2}\b/;
console.log( pattern.test(text) );

var text = 'index.html';
var pattern = /\w\.html/;
console.log( pattern.test(text) );

var text = 'hayk@mail.info';
var pattern = /\b[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}\b/;
console.log( pattern.test(text) );


