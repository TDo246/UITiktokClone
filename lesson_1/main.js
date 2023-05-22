//alert('Hello javaSCript')
/**
 * -confirm: hien thong bao
 * confirm('Ban tren 18 tuoi')
 * -prompt: hien thi khung input de nhap du lieu
 * prompt('nhap so tuoi cua ban')
 * -setTimeout: set time(ms) thuc hien trong function(){} --chay 1lan
 * setTimeout(function() {
    alert('hello')
    },1000)
*-setInterval(function(){}) : set time(ms) thuc hien lai function(){}-chay nhieu lan
 setInterval(function() {
    console.log('hello')
},1000)
 */



/**
 * var a = 6;
    var out = a--;
    alert('a: '+ a);
    alert('out: '+out);
 */
//có 6 giá trị dịch sang bol là null: 0, false, ' ' & "", undefined, NaN, null.
// var num = 2<1;
// if(num) {
//     console.log('tra ve if');
// } else {
//     console.log('tra ve else')
// }
/*

var myFunction = function() {
    alert('Display myFunction');
}
myFunction(); // call function


var myObject = {
    name: 'Thanh Do',
    age: 20
}
console.log(myObject);

var array = ["CT", "VL", "AG"];
console.log(array);
*/
// Crl +D de chon nhieu ky tu giong nhau
/*
function writeLog() { //arguments have only on function
   var myString = "";
    for(var param in arguments){
        myString += param+ '- ' 
    }
    console.log(myString)
}
writeLog('a','b','c','d','e');

*/

/*
//
//add emailKey
    var emailKey= 'email';
    var myInfor = {
        name: 'Thanh Do', 
        Class: 'SE',
        Age: 20,
        [emailKey]: 'ntd@gmail.com'
    }
    delete myInfor.Age; //delete key Age
    var ageKey='Age';
    console.log(myInfor[ageKey]);
    console.log(myInfor);
*/ 
/*
//constructor
*/

/**
 function User(lastname, firtsname,age) {
    this.lastname = lastname;
    this.firtsname = firtsname;
    this.age =age;
    this.getname = function() {
        return this.firtsname +' '+this.lastname;
    }
}
User.prototype.ClassName = 'SE';
//create function getClass  with prototype
User.prototype.getClassName = function() {
    return this.ClassName;
}


var author = new User('Thanh', 'Do', 22);
var user = new User('nguyen', 'thanh', 20);
// console.log(author);
// console.log(user);
console.log(user.getClassName());
//---prototype---huong dan su duunf line 89, 91-93

 */
/*
    //keyWork search gg: javaScript date object mozilla

var date = new Date();
var day = date.getDay();
var month= date.getMonth();
var year = date.getFullYear();

console.log(`${day}/${month}/${year}`);
*/

//toan tu 3ngoi
// var a = 3;
// var result = a>0 ? 'a lon hon 0' : 'a nho hon khong';
// //neu dung dieu kien thi lay gtri sau '?' else thi lay sau ':'
// console.log(result);


/*

//for-in
var myInfor = {
    name: 'Thanh Do', 
    Class: 'SE',
    Age: 20
}
for(var key in myInfor) {
    //console.log(key); get key
    console.log(myInfor[key]);// get value
}

//for-of
var language = [
    'java',
    'ruby',
    'js'
]
for (var key of language) {
    console.log(key);
}
*/
/*
var number = [
    [1, 2],
    [3, 4], 
    [5, 6]
]

for (var i = 0; i< number.length; i++) {
    for(var j = 0; j<number[i].length; j++) {
        console.log(number[i][j]);
    }    


//    console.log(number[i]);
}

*/

/*


var courses = [
    {
       id: 1,
       name: 'thanhdo',
       age: 20,
       cots: 200
    },
    {
        id: 2,
        name: 'than',
        age: 22,
        cots: 200
     },
     {
        id: 3,
        name: 'than',
        age: 23,
        cots: 200
     },
     {
        id: 4,
        name: 'do',
        age: 24,
        cots: 200
     }
]

//foreach()
courses.forEach(function(course, index){// call back
    console.log(index,course);
})


//every() != some():do function khi da xet dieu kien xong(dieu kien duoc xet nhu && , xet tu dau khi sai se break).
var isFree = courses.every(function(course, index) {
    return course.cots >100;
})
 console.log(isFree);

 //note find(): +return course.name ==='do';    -tim duoc gtri dung dau tien roi break;
 
 //filter(): tim tat ca gtri dung voi dieu kien.
 

function courseUpdate(course) {
    return {
        id: course.id,
        name: `Nguyen ${course.name}`,
        age: course.age,
        cots: course.cots
    }
}
var newCourses = courses.map(courseUpdate);
console.log(newCourses);
 

*/



/*
//
    var courses = [
        'JS', 
        'PHP', 
        'Ruby'
    ];

    Array.prototype.map2 = function(callback) {
        var Arraylenght = this.length;
        var output = [];
        for(var i = 0;  i< Arraylenght; i++) {
            var result = callback(this[i], i);
            console.log('result:',result);
            output.push(result);

        }
        return output;
    };

    var html = courses.map2(function(course, index){
        //console.log(index,course);
        return `<<${course}>>`
    });

    console.log(html.join(' '));

--------cach 2------

    var html=courses.map(function(course){
        return `${course}`;
    });

    console.log(html.join(' '));
*/
/*
var language = [
    'java', 
    'js',
    'c'
]
 language.length = 10;
 console.log('for-of:');// have elements undefined
for (var i of language) {
   
    console.log(i);
}
console.log('for-in');
for(var j in language) {//don't have elements undefined-- duyet trong prototype
   
    console.log(language[j]);
}

*/
/*
//defined foreach();
Array.prototype.foreach2 = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) { 
            callback(index, this[index],this);
        }
    }
}

var language = [
    'java', 
    'js',
    'c'
];

language.foreach2(function(course, index, array) {
    console.log(index, course, array);
});


// Defined filter()
Array.prototype.filter2 = function(callback) {
    var arrayOut = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)) { 
            var check = callback(index, this[index],this);
            if(check){
                arrayOut.push(this[index]);
            }
            
        }
    }
    return arrayOut;
}

var language = [
    'java', 
    'js',
    'c',
    'java'
];

var output = language.filter2(function(index, lang, array) {
    return lang === 'java';
});

console.log(output);
*/

//defined some();

var myInfor = [
    {
    name: 'Thanh Do', 
    Class: 'SE',
    Age: 20
},
{
    name: ' Do', 
    Class: 'SE',
    Age: 22
},
{
    name: 'Thanh Do', 
    Class: 'SE',
    Age: 20
}
];

/*
//defined some()
    Array.prototype.some2 = function(callback) {
        var Out = false;
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
            Out = callback(index, this[index], this);
            break;
            }
        }
        return Out;
    }


    var output = myInfor.some2(function(index, infor, array){
        return infor.Age ===20;
    });
    console.log(output);

    Array.prototype.every2 = function(callback) {
    var Out = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
           var result = callback(index, this[index], this);
           if(!result){
            Out = false;
           }
        }
    }
    return Out;
}


var output = myInfor.every2(function(index, infor, array){
    return infor.Age ===20;
});
console.log(output);
*/

//==============DOM=============


