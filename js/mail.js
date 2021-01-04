(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        let valid;  
        valid = validateContact();

        if (valid) {
            $('.send-status').removeClass('wrong-entry');
			form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
        }  else {    
            $('.send-status').addClass('wrong-entry');   
            setTimeout(function () {
                $('.send-status').removeClass('wrong-entry');
            }, 1000);
            
        }
        
    });

		function validateContact() {

			let valid = true; 

			$(".input").css('border-bottom','1px solid #7c7c7c');

			if(!$("#userName").val()) {
				$("#userName").css('border-bottom','1px solid #a72a2a');
				valid = false;
            }
            
            if(!$("#userPhone").val()) {
				$("#userPhone").css('border-bottom','1px solid #a72a2a');
				valid = false;
			}

			if(!$("#userSubject").val()) {
				$("#userSubject").css('border-bottom','1px solid #a72a2a');
				valid = false;
			}

			if(!$("#userEmail").val()) {
				$("#userEmail").css('border-bottom','1px solid #a72a2a');
				valid = false;
			}
			if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
				$("#userEmail").css('border-bottom','1px solid #a72a2a');
				valid = false;
			}
			if(!$("#userMessage").val()) {
				$("#userMessage").css('border-bottom','1px solid #a72a2a');
				valid = false;
			}

			return valid;
		}

})(jQuery);