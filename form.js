$(document).ready(function()
{
        $("#submit").click(function()
        {
                $("#erconts").fadeIn(500);
                $.ajax(
                {
                    type: "POST",
                    url: "sendform.php", // Адрес обработчика
                    data: $("#form1").serialize(),
                    error:function()
                    {
                            $("#erconts").html("Произошла ошибка!");
                    },
                    beforeSend: function()
                    {
                            $("#erconts").html("Отправляем данные...");
                    },
                    success: function(result)
                    {
                            $("#erconts").html(result);
                            checkThis();
                    }
                });
        return false;
        });
});