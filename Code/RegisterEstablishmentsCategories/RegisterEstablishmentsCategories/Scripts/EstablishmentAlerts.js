function ShowMessageError(title, message) {
    $('#title').html(title);
    $('#message').html(message);
    $("#alertType").attr('class', '');
    $('#alertType').addClass('alert alert-dismissible alert-danger');
    $('#modalAlert').modal('show');
}

function ShowMessageAlert(title, message) {
    $('#title').html(title);
    $('#message').html(message);
    $("#alertType").attr('class', '');
    $('#alertType').addClass('alert alert-dismissible alert-warning');
    $('#modalAlert').modal('show');
}

function ShowMessageSuccess(title, message) {
    $('#title').html(title);
    $('#message').html(message);
    $("#alertType").attr('class', '');
    $('#alertType').addClass('alert alert-dismissible alert-success');
    $('#modalAlert').modal('show');
}