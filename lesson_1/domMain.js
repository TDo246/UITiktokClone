

// var collection = document.getElementsByClassName("example");
// console.log(collection);



//   var listBox1 = document.querySelector('.box-1');//get element
//   console.log(listBox1);
//   console.log(listBox1.getElementsByTagName('li'));

// var getH2 = document.querySelector('h2');

// //console.log(getH2);
//  getH2.setAttribute('id', 'idH2');//cach 1
//  console.log(getH2);

// var head = document.querySelector('h1');
// console.log(head);

//innerText , textContent

/*
var getInnertext = document.querySelector('.box-1');
//console.log(getInnertext);
console.log(getInnertext.innerText)
console.log(getInnertext.textContent)// hien thi cac the co trong box-1 vd: xuong dong, span,..


*/
/**
 //innerHTML va outerHTML

var getParagraph = document.querySelector('.box-1');
getParagraph.innerHTML = '<h1> H1 in class Box-1 </>'
console.log(getParagraph.querySelector('h1').innerText);
 */
/**
 //DOM event
var headingH1 = document.querySelectorAll('h1');

for(var i = 0;i<headingH1.length;i++) {
    headingH1[i].onclick = function(event) {
        console.log(event.target);
    }
}


// headingH1.onclick = function(event) {
//     console.log(event.target);
// }
 */
/**
 //get data to Form
 */

 /**
  * 
  var inputElement = document.querySelector('input[type="text"]');

 inputElement.oninput = function(event) {
    console.log(event.target.value);
 }

 var inputChecked = document.querySelector('input[type="checkbox"]');
 inputChecked.onchange = function(event) {
     console.log(event.target.checked);
 }
 var inputSelect = document.querySelector('select');
 inputSelect.onchange = function(event) {
     console.log(event.target);
 }
  */
 

 //var aEvent = document.querySelector('a');//same line 77
 var aEvent = document.links;

for(var i = 0; i<aEvent.length;i++) {
    aEvent[i].onclick = function(event) {
        if(!event.target.href.startsWith('https://www.youtube.com')){
            
           event.preventDefault();
        }
    }
}


//khongg cho sự nỗi bọt của event ra thẻ bên ngoài dùng e.stopPropagation()