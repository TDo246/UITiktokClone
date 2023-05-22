
/**
 import logger from '../logger/index.js';

import {
    type_error,
    type_log,
    type_warn
} from './logger/constant.js';

//console.log(logger);
logger('Test message...!',type_warn);
 */

/**
 var filedName = 'new name';
var filedPrice = 'price';

const course = {
    [filedName]: 'JS',
    [filedPrice]: 1000
}
console.log(course);
 */

/**
 //===Rest parameters: lấy phần còn lại sau '...' rest(...)
//rest vs parameter
function restPara(a, b,...para) {
    console.log(a);
    console.log(b);
    console.log(para);
};
//restPara(1,2,3,4,5,6,7);

//rest vs object * chú ý ({ ,...getInfor}):theo cùng loai dữ liệu đưa vào


function myInfor({name, ...getInfor}){
    console.log(name);
    console.log(getInfor);
}
 myInfor({
    name: 'Thanh Do',
    price: 1000,
    description: 'description content'
});

//lam viec voi mang

function getElementArray([a, b, c,...getElement]) {
    console.log(getElement);
}
getElementArray([1,2,3,4,5,6,7,9,10]);
 */

/** Spread(...array[])
 * var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    var array3 = [...array1,...array2];
    console.log(array3);
 */

/** //Spread(): nối mảng, object
  
 var object1 = {
    name: 'Thanh Do'
};
var object2 = {
    age: 20
}
var object3 = {...object1,...object2};

console.log(object3);

//ket hop rest() vs spread()
 var arrayLanguage =['Js', 'ruby','PHP','Java'];
function logger(...rest) {
    for(var i = 0; i< rest.length; i++){
        console.log(rest[i]);
    }
}
logger(...arrayLanguage);

 */
/** Destructuring 
 var array1 = ['Thanh Do', 2, 3];
  var [a,...rest] = array1;
  console.log(rest);

  var object = {
      name: 'Thanh Do',
      age: 20,
      address: 'An Giang',
      children:{
        name :'thanh do'
      }
  }
//đổi tên cho name 'thanh do' khi trùng vs name 'Thanh Do'  
var {name, age, address,children: {name:childrenName}} = object;
console.log(childrenName);
 */
