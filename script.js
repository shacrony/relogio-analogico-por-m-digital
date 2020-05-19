const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let seg = date.getSeconds();
console.log("Hora: " + hr + " Minuto: " + min + " Segundo: " + seg);

let posicaoHr = (hr*360/12)+(min*(360/60)/12);
let posicaoMin = (min*360/60)+(seg*(360/60)/60);
let posicaoSeg = seg*360/60;

function executarRelogio() {
    posicaoHr = posicaoHr+(3/360); /* pegamos a posição da hora existente e este ponteiro move a distancia de 1 hora para 360 a 12,
     ou seja 30 a 3600 segundos, ou seja quantos segundos há em 1 hora (30 sobre 3600) só retirar os zeros e fica 3 sobre 360 */
    
    posicaoMin = posicaoMin+(6/60); /* ja para os minutos pegamos o valor existente da posiçao min e o ponteiro dos minutos move 1seg em 60segs 
    portanto estamos procurando 1/60 dos graus dos ponteiros dos segundos*/
    
    posicaoSeg = posicaoSeg+6;
     /* sabemos que o relogio tem 360º, depois dividimos 360/60 = 6 */

    PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
}

var intervalo = setInterval(executarRelogio, 1000);
