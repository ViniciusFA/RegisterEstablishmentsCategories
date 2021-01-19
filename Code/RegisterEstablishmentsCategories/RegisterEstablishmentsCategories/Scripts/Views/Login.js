

function EnterLogin() {

    var viewModel = $("#LoginForm").serialize();

    $.ajax({
        url: urlEnterLogin,
        data: viewModel,
        type: 'POST',
        success: function (result) {
            if (result == "true") {
                window.location.href = urlIndexMenu;
                ShowToastError("teste");
            }
            else {
                ShowToastSuccess('@Resource.Global.ResGlobal.InsertSucessGeneric');

            }
        }
    });    
        
}

