const Recaptcha = require('express-recaptcha').Recaptcha;
const recaptcha = new Recaptcha('6LftCZEUAAAAAGMpTzqFZZXkf3IXMuK8rpIM1Jyx', '6LftCZEUAAAAAHIZjV8o9qqQGXzW4FH6U0eP4rwR', {callback:'cb'});


console.log('Recaptcha class');
console.log(Recaptcha);
console.log('==========================');
console.log('Recaptcha object');
console.log(recaptcha);