function Validator (options) {
    var selectionRules = {};
   // console.log(selectionRules);
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage ;
                var rules = selectionRules[rule.selector];
        console.log(rules);
        for(var i = 0; i<rules.length;i++) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

       if(errorMessage) {
            errorElement.innerText  = errorMessage; 
            inputElement.parentElement.classList.add('invalid');
       } else {
        errorElement.innerText  = " "; 
        inputElement.parentElement.classList.remove('invalid');
       }
    }


     var formElement = document.querySelector(options.form);   
     if(formElement) {
        formElement.onsubmit = function (event){
             event.preventDefault();

             options.rules.forEach(function (rule){
               var inputElement = formElement.querySelector(rule.selector);

                validate(inputElement, rule);
             })
        }




        options.rules.forEach(function (rule) {
           // console.log(rule.selector);// kiem tra lay du lieu fullname cua form-1
          // console.log(selectionRules[rule.selector]);
        
           if (Array.isArray(selectionRules[rule.selector])){
           //  console.log('this is array');
            selectionRules[rule.selector].push(rule.test);
         }else{
           // console.log('this is not array');

            selectionRules[rule.selector] = [rule.test];
         }
         
           
           var inputElement = formElement.querySelector(rule.selector);
            //console.log(inputElement); kiem tra co dien fullname chua
             if(inputElement) {

                
                 inputElement.onblur = function () {
                    //truong hop blur ra ngoai o input

                     //value: inputElement.value
                     //test func: rule.test de liem tra value  
                   validate(inputElement, rule);
                    //truong hop dang nhap du lieu
                   inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                        errorElement.innerText  = " "; 
                        inputElement.parentElement.classList.remove('invalid');

                   }

                 }
             }
        });
        console.log(selectionRules);
     }
}

//dinh nghia rules
Validator.isRequired = function (selector,message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui long nhap truong nay' 
        }
    };

}
Validator.isEmail = function (selector,message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message ||'Truong nay la email';
        }
    };


}

Validator.minLength = function(selector, min,message) {
   return {
    selector: selector,
    test: function (value) {
        return value.length >= min ? undefined : message || `Vui long nhap toi thieu ${min} ky tu`
    }
   }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Gia tri nhap vao khong chinh xac'
        }
    }
}






// function Validator(options) {

//     //show and hide message
//     function validate (inputElement1, rule) {

//         var errorElement1 = inputElement1.parentElement.querySelector('.form-message');
        
//         var errorMessage1 = rule.test(inputElement1.value);
                    

//         if (errorMessage1) {
//             errorElement1.innerText = errorMessage1;
//             inputElement1.parentElement.classList.add('invalid');

//         } else{
//             errorElement1.innerText = '';
//             inputElement1.parentElement.classList.remove('invalid');


//         }
//     }



//     var formElement1 = document.querySelector(options.form);
//     if (formElement1) {
//         options.rules.forEach(function (rule) {
//             // console.log(rule.selector);

//             var inputElement1 = formElement1.querySelector(rule.selector);
//             console.log(inputElement1);
//             if (inputElement1) {
//                 //trường blur ra khoi ô input
//                 inputElement1.onblur = function () {
//                     validate(inputElement1, rule);
//                 }
//                 //xoa  hiện lỗi khi đang nhập vao o input
//                 inputElement1.oninput = function () {
//                     var errorElement1 = inputElement1.parentElement.querySelector(options.errorSelector);
//                     errorElement1.innerText = '';
//                     inputElement1.parentElement.classList.remove('invalid'); 
//                 }
//             }


//         });
//     }

// }


// //rules

// Validator.isString = function (selector) {
//     return {
//         selector: selector,
//         test: function (value) {
//             return value.trim() ? undefined : 'vui long nhap lai'
//         }
//     }
// }

// Validator.isGmail = function (selector) {
//     return {
//         selector: selector,
//         test: function (value) {
//             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return regex.test(value) ? undefined :'Truong nay phai la email';
//         }
//     }
// }