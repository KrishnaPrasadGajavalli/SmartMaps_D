var usernameresp,tokenresp,statusresp,emailresp;
    (function($){
        function processForm( e ){
            $.ajax({
                url: 'http://localhost:8080/SmartMaps/login/user/loginservice/log',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
              data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    console.log(data);
    					var resp = JSON.parse(data);
    					usernameresp = resp[0]["user_name"];  
    					tokenresp=resp[0]["token"];
    					statusresp=resp[0]["status"];
    					emailresp=resp[0]["email"];
    					var bool=authenticateUser();
    					if(bool)
    						{
    					createCookies();
    					window.location.replace("http://localhost:8080/SmartMaps/userhome.html")
    						}
    					else
    						{
    						document.getElementById("errormsg").style.color="red";
    						document.getElementById("errormsg").innerHTML="Invalid Username or Password";
    						} 
    						
                },
                error: function( jqXhr, textStatus, errorThrown ){
                	console.log("Hi");
                    console.log( errorThrown );
                }
            });

            e.preventDefault();
        }

        $('#my-form').submit( processForm );
    })(jQuery);
    
    function authenticateUser()
    {
    	if((usernameresp=="null") && (tokenresp=="null") && (statusresp=="not_registered") && (emailresp=="null"))
    	{
    		return false;
    	}
    	else
    		{
    		return true;
    		}
    }
    function createCookies()
    {
        var username=usernameresp;
        document.cookie="username="+username;
        var token=tokenresp;
        document.cookie="token="+token;
        var status=statusresp;
        document.cookie="status="+status;
    }