$(function(){
    $("form[name='registration']").validate({
        rules: {

            name : "required",

            email :{
                required: true,
                email: true
            },

            password : {
                required: true,
                minlength: 5
            },

            confirmpassword : {
                required: true,
                minlength:5,
                equalTo : "#password"
            }
        },

        messages: {
            name: "Please enter your name",
        
            email : {
                required: "Please enter your email",
                email : "Please enter a valid email"
            },
        
            password : {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirmpassword: {
                required: "Please re-enter your password",
                minlength: "Your password must be at least 5 characters long",
                equalTo : "Please enter the same password as above"
            }
        }
    });
});