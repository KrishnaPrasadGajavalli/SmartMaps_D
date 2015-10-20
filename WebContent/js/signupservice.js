(function($){
        function processForm( e ){
            $.ajax({
                url: 'http://localhost:8080/SmartMaps/signup/user/register',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
              data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    console.log(data);
                    var resp = JSON.parse(data);
					registrationresp = resp[0]["registration"];  
					var bool=checkResponse();
					if(bool)
						{
						document.getElementById("errormsg1").style.color="green";
						document.getElementById("errormsg1").innerHTML="Successfully registered.";
						document.getElementById("user-name").value="";
						document.getElementByName("email").value="";
						}
					else
						{
						document.getElementById("errormsg1").style.color="red";
						document.getElementById("errormsg1").innerHTML="Email already exits";
						}
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });

            e.preventDefault();
        }
        $('#signup').submit( processForm );
    })(jQuery);

function checkResponse()
{
	if(registrationresp=="already_registered")
		{
		return false;
		}
	else
		{
		return true;
		}
		}