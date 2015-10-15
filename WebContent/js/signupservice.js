var usernameresp,tokenresp,statusresp;
    (function($){
        function processForm( e ){
            $.ajax({
            	//Change ur corresponding url here
                url: 'http://localhost:8080/SmartMaps/login/user/loginservice/log',
                dataType: 'application/x-www-form-urlencoded',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
              data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    console.log(data);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });

            e.preventDefault();
        }
        //Form Name --> signup
        $('#signup').submit( processForm );
    })(jQuery);