function Validator(options) {
   var formElement = document.querySelector(options.form);
   
   //console.log(formElement);
   if(formElement) {
      options.rules.forEach( function (rule) {
          var inputElement = formElement.querySelector(rule.selector)
          var errorElement = inputElement.parentElement.querySelector('.form-message')
          if(inputElement) {
              inputElement.onblur = function () {
                 // console.log('Blur'+rule.selector);

                 var errorMess = rule.test(inputElement.value);
                 //console.log(errorMess);
                 if (errorMess) {
                     errorElement.innerText = errorMess;
                     inputElement.parentElement.classList.add('invalid')
                 } else {
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')

                 }
              }
          }
      })
   }
}



Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined :"Vui long nhap truong nay!"
        }
    };
   
}
Validator.isEmail = function (selector) {
  return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value)? undefined : "Truong nay phai la email!"
        }
    };
}
