/* DOM event
//set 3s click moi thuc hien event
var eBtn = document.querySelector('#btn');

setTimeout(function(){
    eBtn.onclick = function() {
        console.log('log1');

        var doz = function() {
             console.log('log11');
        };
       
        var do2 = function() {
            console.log('log2');
       };
       var do3 = function() {
        console.log('log3');

   };
    doz();
    do2();
    do3();
    }
},3000);

//thuc hien truoc sau 5s khong click duoc nua(khong nhap event)

eBtn.onclick = function() {
    console.log('log1');

    var doz = function() {
         console.log('log11');
    };
   
    var do2 = function() {
        console.log('log2');
   };
   var do3 = function() {
    console.log('log3');

};
doz();
do2();
do3();
}

setTimeout(function() {
    eBtn.onclick = function(){

    }
},5000);
*/

var eBtn = document.querySelector('#btn');
function viec1() {
    console.log('viec 1');
}
function viec2() {
    console.log('viec 2');
}

eBtn.addEventListener('click', viec1);
eBtn.addEventListener('click', viec2);
setTimeout(() => {
    eBtn.removeEventListener('click', viec1);
}, 3000);
