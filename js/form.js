/* Submit text to Telegram */
$('form').submit(function (e) {
    tokenID = sessionStorage.getItem('tokenID');
    chatID = sessionStorage.getItem('chatID');
    envName = sessionStorage.getItem('envName');
    
    var comment = document.getElementById("comment_input").innerText;
  
    /* var brversion_text = "Browser:" + platform.name +
      " v" + platform.version +
      " on " + platform.os; */
  
    /*
    '\nBrowser: ' + platform.name + ' v' + platform.version +
    '\nOS: ' + platform.os + */
  
    var sum_text = 'Hi!\nI`m QAX bot.\n' +
      'Enviroment: ' + envName +
      '\n\n' +
      'Name: ' + $('#name_input').val() +
      '\nPhone: ' + $('#phone_input').val() +
      '\nComment: ' + comment;   /* +  
      '\nBrowser: ' + platform.name + " v" + platform.version +
      '\nOS: ' + platform.os;
      */

    e.preventDefault();
    $.ajax({
        url: 'https://api.telegram.org/bot' + tokenID + '/sendMessage',
        method: 'POST',
        data: {
            chat_id: chatID,
            text: sum_text
        },
        success: function () {
            document.getElementById("write_to_us").setAttribute("class", "no-display");
            document.getElementById("write_to_us-thanks-block").setAttribute("class", "");

            /* alert('your message has been sent!'); */
        }
    });
});


function countDigits(n) {
    for (var i = 0; n > 1; i++) {
        n /= 10;
    }
    return i;
}


$(function () {

    var name_input = $("#name_input");
    var name_line = $("#name_input");
    var error_message_name_empty = $("#error_message_name_empty");
    var error_message_name_short = $("#error_message_name_short");
    var error_message_name_long = $("#error_message_name_long");
    var error_message_name_only_numbers = $("#error_message_name_only_numbers");
    
    
    var email_input = $("#email_input");
    var email_line = $("#email_input");
    var error_message_email_empty = $("#error_message_email_empty");
    var error_message_email_invalid = $("#error_message_email_invalid");
    var error_message_email_long = $("#error_message_email_long");
    
    var phone_input = $("#phone_input");
    var phone_line = $("#phone_input");
    
    var comment_input = $("#comment_input");
    var comment_line = $("#comment_input");

    var error_message_phone_empty = $("#error_message_phone_empty");
    var error_message_phone_short = $("#error_message_phone_short");
    var error_message_phone_long = $("#error_message_phone_long");
    var error_message_phone_only_numbers = $("#error_message_phone_only_numbers");
    
    var button_send = $("#button_send");

    error_message_name_empty.hide();
    error_message_name_short.hide();
    error_message_name_long.hide();
    error_message_name_only_numbers.hide();
    
    error_message_email_empty.hide();
    error_message_email_invalid.hide();
    error_message_email_long.hide();    
    
    error_message_phone_empty.hide();
    error_message_phone_short.hide();
    error_message_phone_long.hide();
    error_message_phone_only_numbers.hide();
    
    //Functions for lines in form 
    name_input.focus(function () {
        name_line.css({ "border-width": "1px" });
    });
    name_input.focusout(function () {
        name_line.css({ "border-width": "1px" });
        check_name();
    });
    phone_input.focus(function () {
        phone_line.css({ "border-width": "1px" });
    });
    phone_input.focusout(function () {
        phone_line.css({ "border-width": "1px" });
        check_phone();
    });
    email_input.focus(function () {
        email_line.css({ "border-width": "1px" });
    });
    email_input.focusout(function () {
        email_line.css({ "border-width": "1px" });
        check_email();
    });
    comment_input.focus(function () {
        comment_line.css({ "border-width": "1px" });
    });
    comment_input.focusout(function () {
        comment_line.css({ "border-width": "1px" });
    });

    //Validation for name
    function check_name() {
        var name_length = name_input.val().length;
        var patternName = new RegExp(/^[a-zA-Zа-яА-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ðіїІ '-]+$/i);
        let name = patternName.test(name_input.val());

        console.log('name-length: ' + name_length);
        console.log('name-correctness: ' + name);
        
        if (name_length == 0) {
            name_line.css({ "border-color": "red" });
            error_message_name_empty.show();
            error_message_name_short.hide();
            error_message_name_long.hide();
            error_message_name_only_numbers.hide();
            return false;
        } 
        else if (name ==  false) {
            name_line.css({ "border-color": "red" });
            error_message_name_only_numbers.show();
            error_message_name_empty.hide();
            error_message_name_short.hide();
            error_message_name_long.hide();
            return false;
        } 
        else if (name_length > 30) {
            name_line.css({ "border-color": "red" });
            error_message_name_long.show();
            error_message_name_empty.hide();
            error_message_name_short.hide();
            error_message_name_only_numbers.hide();
            return false;
        } 
        else if (name_length < 2) {
            name_line.css({ "border-color": "red" });
            error_message_name_short.show();
            error_message_name_empty.hide();
            error_message_name_long.hide();
            error_message_name_only_numbers.hide();
            return false;
        }           
        else {
            name_line.css({ "border-color": "#B9B6B6" });
            error_message_name_empty.hide();
            error_message_name_short.hide();
            error_message_name_long.hide();
            error_message_name_only_numbers.hide();
            return true;
        };
    };

    //Validation for email or phone
    function check_email() {
        var patternEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
        let email = patternEmail.test(email_input.val());
        var email_length = email_input.val().length;
        
        console.log('email-length: ' + email_length);
        console.log('email-correctness: ' + email);

        if (email_length ==  0) {
            email_line.css({ "border-color": "red" });
            error_message_email_empty.show();
            error_message_email_invalid.hide();
            error_message_email_long.hide();   
            return true;
        } else if (email_length > 50) {
            email_line.css({ "border-color": "red" });
            error_message_email_empty.hide();
            error_message_email_invalid.hide();
            error_message_email_long.show();   
            return true;
        } else if (email ==  false) {
            email_line.css({ "border-color": "red" });
            error_message_email_empty.hide();
            error_message_email_invalid.show();
            error_message_email_long.hide();   
            return true;
        } else {
            email_line.css({ "border-color": "#B9B6B6" });
            error_message_email_empty.hide();
            error_message_email_invalid.hide();
            error_message_email_long.hide();   
            return false;
        };       
    };

    function check_phone() {
        var patternPhone = new RegExp(/((\+)?\b(38)?(0[\d-]{2}))([\d-]{5,8})([\d-]{2})/);
        let phone = patternPhone.test(phone_input.val());
        var phone_length = countDigits(phone_input.val());
        
        console.log('phone-length: ' + phone_length);
        console.log('phone-correctness: ' + phone);
        var phone_length_all = phone_input.val().length;

        if (phone_length_all == 0) {
            phone_line.css({ "border-color": "red" });
            error_message_phone_empty.show();
            error_message_phone_short.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return false;
        } 
        else if (phone ==  false) {
            phone_line.css({ "border-color": "red" });
            error_message_phone_only_numbers.show();
            error_message_phone_empty.hide();
            error_message_phone_short.hide();
            error_message_phone_long.hide();
            return false;
        } 
        else if (phone_length > 30) {
            phone_line.css({ "border-color": "red" });
            error_message_phone_long.show();
            error_message_phone_empty.hide();
            error_message_phone_short.hide();
            error_message_phone_only_numbers.hide();
            return false;
        } 
        else if (phone_length < 2) {
            phone_line.css({ "border-color": "red" });
            error_message_phone_short.show();
            error_message_phone_empty.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return false;
        }           
        else {
            phone_line.css({ "border-color": "#B9B6B6" });
            error_message_phone_empty.hide();
            error_message_phone_short.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return true;
        };
    };
        

    //Validation for email or phone
    /*
    function check_email_phone() {
        var patternEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
        var patternPhone = new RegExp(/((\+)?\b(38)?(0[\d-]{2}))([\d-]{5,8})([\d-]{2})/);
        let email = patternEmail.test(phone_input.val());
        let phone = patternPhone.test(phone_input.val());
        var phone_length = countDigits(phone_input.val());

        if (phone && phone_length == 12) {
            phone_line.css({ "border-color": "white" });
            error_message_phone.hide();
            button_send.removeAttr("disabled", "disabled");
            return true;
        } else if (email) {
            phone_line.css({ "border-color": "white" });
            error_message_phone.hide();
            button_send.removeAttr("disabled", "disabled");
            return true;
        } else {
            phone_line.css({ "border-color": "red" });
            error_message_phone.show();
            button_send.attr("disabled", "disabled");
            return false;
        };
    };
    */
        

    var textarea = document.getElementsByTagName('textarea')[0];

    /*
     error in console
    
      textarea.addEventListener('keydown', resize);
    */

    function resize() {
        var el = this;
        setTimeout(function () {
            el.style.cssText = 'height:23px; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 1);
    }


});//end


