$(document).ready(function(){
    do_login();
});

//function do_login() {
    $("#login").click(function () {
        var email = $('#email').val();
        var password = $('#password').val();
        var data =  $("#login_form").serialize();
		alert(email);
		alert(password);
        if(email != "" && password != ""){
            $.ajax({
                type: 'post',
                url: 'https://localhost/login.php',
                data: data,
                success: function(response){
                    if(response == "success"){
                        console.log("yehey!");
                        window.location.href = "welcome.html";
                    }else{
                        alert("sayup uy");
                    }
                }
            });
        }else{
            alert("Please fill in ");
        }
		  return false;
    });
  
//}


