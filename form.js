$(document).ready(function(){
    $("form").submit(function() {
        var form_data = $(this).serialise();
        $.ayax({
            type: "POST",
            url: "sendform.php",
            data: form_data,
            success: function() {
                $('.popup').addClass ('active');
                $('.thanks').addClass ('active');
            }
        });
        Event.preventDefault();
    });
});