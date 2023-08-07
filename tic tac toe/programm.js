/* Создаём 9 блоков с помощью js */
for ( i=0; i< 9; i++ ) {
    document.getElementById ('game').innerHTML += '<div class="block"></div>';
}
//Добавляем ход, с чего нажинается игра 

var hod = 0;

// 1. Делаем проверку, что мы нажали на конкретный блок //
// 2. Делаем поочередный ход

let block = document.getElementById ("game");
block.addEventListener ('click' , function (event) {
    console.log (event);                                              
     if (event.target && event.target.className == 'block') { 
        if ( hod%2 == 0 ){                                      //Если ход будет чётным, то есть 0,2,4,6, соответственно делится на 2, будет ход нолика.          
    event.target.innerHTML = '0'                                // для этого элемента(event.target) меняем html значение на 0
        }                                                      // event.target нажимаемый обьект 
    else {
        event.target.innerHTML = 'x'
        }
        
hod ++;                                                      //Чтобы ход менялся, т.е первый игрок ходил, потом второй
    }
    checkWinner();
    }
    
)
let checkWinner = () =>{
    var allblock = document.getElementsByClassName('block');
    //Условия для победы, для крестиков 
    if( allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x' ) {alert("Победили крестики")}
    if( allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x' ) {alert("Победили крестики")}
    //Условия для победы, для ноликов
    if( allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0' ) {alert("Победили нолики")}
    if( allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0' ) {alert("Победили нолики")}
}
