/*Este CSS tambiéns será un chunk que formará parte del bundle y
nos permite ligar el CSS necesario a cada bundle dentro de una variable en el archivo que queramos.
Normalmente lo lógico sería acompañar al modulo JS e in yectar el modulo CSS allá donde se inyecte el de JS. */
const headerCSS = require('./header.css');
console.log(headerCSS);
var title = require('./title');

var header = document.getElementById('header');
header.innerHTML = title;
/*dfdfhghhjggjhsjsfhjhyj
fgjfjfjfhyjfhjfhj
fgjfhjfhyjsfhjghsdjkdghkjk
jkjkghkgkdjgkljgkjgkjgkjgk*/