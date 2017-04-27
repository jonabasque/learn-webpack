/*Este CSS tambiéns será un chunk que formará parte del bundle y
nos permite ligar el CSS necesario a cada bundle dentro de una variable en el archivo que queramos.
Normalmente lo lógico sería acompañar al modulo JS e in yectar el modulo CSS allá donde se inyecte el de JS. */
const headerCSS = require('css/index/header.css');
const mainCSS = require('css/index/main.css');
console.log(headerCSS);

import IMAGE from './image';

var titlePartial = require('./title');

var title = document.getElementById('title');
title.innerHTML = titlePartial;

var header = document.getElementById('header');
header.innerHTML = IMAGE;
/*dfdfhghhjggjhsjsfhjhyj
fgjfjfjfhyjfhjfhj
fgjfhjfhyjsfhjghsdjkdghkjk
jkjkghkgkdjgkljgkjgkjgkjgk*/
