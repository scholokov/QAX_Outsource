/* Submit text to Telegram */
$('form').submit(function (e) {
    tokenID = '1641718929:AAEtb8TbjPCEA7rZ9IGybfRasb0M-afeeNk';
    chatID = '-1001474814527';
    e.preventDefault();
    $.ajax({
        url: 'https://api.telegram.org/bot1641718929:AAEtb8TbjPCEA7rZ9IGybfRasb0M-afeeNk' + '/sendMessage',
        method: 'POST',
        data: {
            chat_id: '-1001474814527',
            text: 'Hi!\nI`m QAX Camp bot.\nPlease read message below.\nSomebody wait your answer!\n\nName: ' + $('#name_input').val() + '\nPhone: ' + $('#phone_input').val() + '\nComment: ' + $('#comment_input').val()
        },
        success: function () {
            alert('your message has been sent!');
        }
    });
});