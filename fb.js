$(document).ready(function() {
    $("#sign-upform").validate({
        rules: {
            fname: {
                required: true,
                maxlength: 6
            },
            sname: {
                required: true
            },
            emailaddress: {
                required: true,
                email: true
            },
            pswrd: {
                minlength: 6
            },
            day: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            },
            gender: {
                required: true
            },
            repswrd: {
                required: true,
                equalTo:"[name='psswrd']"
            }
        },
        messages: {
            fname: {
                required: "enter first name",
                minlength: "enter at least 4 characters"
            }

            
        }
    });
});


