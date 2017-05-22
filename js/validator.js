$('document').ready(function() {

    $('#kektusz').validate({
        rules: {
            name: 'required',
            'name': {
                required: true
            },
            'email': {
                required: true
            },
            'waypoints': {
                required: true
            }
        },
        errorClass: 'error',
        errorElement: 'p',
        errorPlacement: function(error, element) {
            if (element.attr("type") == "radio") {
                error.insertBefore(element);
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.extend($.validator.messages, {
        required: "*mandatory field"
    });

});
