$(function () {
	$('#validName').hide();
	$("#errorName").hide();
	$('#validEmail').hide();
	$("#errorEmail").hide();
	$("#enterName").hide()
	$("#enterEmail").hide()
	var error_name = false;
	var error_email = false;
	$("#name").focusout(function () {
		check_name();
	});
	$("#email").focusout(function () {
		check_email();
	});
	function check_name() {
		var name_length = $("#name").val().length;
		var patternName = new RegExp(/^[a-zA-Zа-яА-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]+$/i);
		if (name_length < 2 || name_length > 50 || !patternName.test($("#name").val())) {
			$("#name").css({ "border-color": "red", "color": "red", "box-shadow": "none" });
			$("#errorName").show();
			$("#validName").hide();
			$("#enterName").hide();
			error_name = true;
		} else {
			$("#name").css({ "border-color": "green", "color": "green", "box-shadow": "none" });
			$("#errorName").hide();
			$("#validName").show();
			$("#enterName").hide();
		}
	}
	var patternEmail = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i)
	function check_email() {
		if (!patternEmail.test($("#email").val())) {
			$("#email").css({ "border-color": "red", "color": "red", "box-shadow": "none" });
			$("#errorEmail").show();
			$("#validEmail").hide();
			$("#enterEmail").hide();
			error_name = true;
		} else {
			$("#email").css({ "border-color": "green", "color": "green", "box-shadow": "none" });
			$("#errorEmail").hide();
			$("#validEmail").show();
			$("#enterEmail").hide();
		}
	}
	$("#sendMail").on("click", function () {
		var testName = check_name();
		var testEmail = check_email();
		var errorM = $("#errorSending")
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#message").val();
		if (name == "") {
			$('#name').css('border-color', 'red');
			$("#enterName").show();
			$("#errorName").hide();
			return false;
		} else if (email == "") {
			$('#email').css('border-color', 'red');
			$("#enterEmail").show();
			$("#errorEmail").hide();
			return false;
		}
		Email.send({
			SecureToken: "d694b3af-9be7-4ca8-a285-05a8b271046a",
			To: 'qax2021@gmail.com',
			From: "scholokov@gmail.com",
			Subject: "New mail from QAX",
			Body: "And this is the body"
		}).then(
			message => alert(message)
		);
		$.ajax({
			/*
			data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
			sending: function () {
				Email.send({
					SecureToken: "d694b3af-9be7-4ca8-a285-05a8b271046a",
					To: 'scholokov@gmail.com',
					From: "scholokov@gmail.com",
					Subject: "New mail from QAX",
					Body: "And this is the body"
				)
			}}*/
		})

	})
})

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };