
function EnterLogin() {

    var viewModel = $("#LoginForm").serialize();

    if ($('#LoginForm').valid()) {
        $.ajax({
            url: urlEnterLogin,
            data: viewModel,
            type: 'POST',
            success: function (result) {
                if (result == "true") {
                    window.location.href = urlIndexMenu;
                } else {
                    console.log(document.getElementById("messageValidationError").innerHTML);
                    document.getElementById("messageValidationError").innerHTML = "*** Usuário ou senha inválido.";
                    document.getElementById("messageValidationError").style.display = "block";
                }
            }
        });   
    }        
}

