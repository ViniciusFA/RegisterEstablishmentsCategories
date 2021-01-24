var dataTableRegister = undefined;

function GetColsCategory() {
    var colDefs = new Array();

    // column Razao social
    colDefs.push({
        "sName": "CompanyName", "mData": "CompanyName", "sTitle": "Razao social", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.CompanyName == null || row.CompanyName == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.CompanyName;
            }
        }
    });

    // column Nome Fantasia
    colDefs.push({
        "sName": "FantasyName", "mData": "FantasyName", "sTitle": "Nome Fantasia", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.FantasyName == null || row.FantasyName == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.FantasyName;
            }
        }
    });

    // column CNPJ
    colDefs.push({
        "sName": "CNPJ", "mData": "CNPJ", "sTitle": "CNPJ", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.CNPJ == null || row.CNPJ == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.CNPJ;
            }
        }
    });

    // column Agency
    colDefs.push({
        "sName": "Agency", "mData": "Agency", "sTitle": "Agência", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Agency == null || row.Agency == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Agency;
            }
        }
    });

    // column Account
    colDefs.push({
        "sName": "Account", "mData": "Account", "sTitle": "Conta", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Account == null || row.Account == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Account;
            }
        }
    });

    // column E-mail
    colDefs.push({
        "sName": "Email", "mData": "Email", "sTitle": "E-mail", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Email == null || row.Email == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Email;
            }
        }
    });

    // column Address
    colDefs.push({
        "sName": "Address", "mData": "Address", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Address == null || row.Address == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Address;
            }
        }
    });

    // column City
    colDefs.push({
        "sName": "City", "mData": "City", "sTitle": "Cidade", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.City == null || row.City == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.City;
            }
        }
    });

    // column State
    colDefs.push({
        "sName": "State", "mData": "State", "sTitle": "Estado", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.State == null || row.State == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.State;
            }
        }
    });

    // column PhoneNUmber
    colDefs.push({
        "sName": "PhoneNumber", "mData": "PhoneNumber", "sTitle": "Telefone", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.PhoneNumber == null || row.PhoneNumber == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.PhoneNumber;
            }
        }
    });

    // column RegisterDate
    colDefs.push({
        "sName": "RegisterDate", "mData": "RegisterDate", "sTitle": "Data de Cadastro", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.RegisterDate == null || row.RegisterDate == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.RegisterDate;
            }
        }
    });

    // column Category
    colDefs.push({
        "sName": "Category", "mData": "Category", "sTitle": "Categoria", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Category == null || row.Category == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Category;
            }
        }
    });

    // column Status 
    colDefs.push({
        "sName": "Status", "mData": "Status", "sTitle": "Status", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Status == null || row.Status == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Status;
            }
        }
    });

    // column Action
    colDefs.push({
        "mData": "Action", "sTitle": "Ações", "sClass": "text-center", "bSearchable": false, "bSortable": false,
        "mRender": function (data, type, row) {
            var html = "";
            var commandEdit = "Register(" + row.IdSequence + ")";
            var commandDelete = "Delete('" + row.CompanyName + "','" + row.IdSequence + "')";

            html = '<div class="buttonsEditDelete" role="group" aria-label="Small button group">';
            html += '<button type="button" class="btn btn-success" title="Editar Registro" onclick="' + commandEdit + '"><i class="glyphicon glyphicon-pencil"></i></button>'
            html += '&nbsp; <button type="button" class="btn btn-danger" title="Excluir" onclick="' + commandDelete + '"><i class="glyphicon glyphicon-trash"></i></button>';
            html += '</div>';

            return html;
        }
    });

    return colDefs;
}

function InitializaDatatableRegister(tableId) {

    if (urlDataTableRegister == undefined && urlDataTableRegister == '') {
        return;
    }

    var tbGrid = document.getElementById(tableId);

    if ($.fn.DataTable.fnIsDataTable(tbGrid)) {
        return;
    }

    $.fn.dataTable.ext.errMode = 'throw';

    dataTableRegister = $("#" + tableId).dataTable({
        "order": [0, 'asc'],
        "bServerSide": true,
        "bProcessing": true,
        "lengthChange": true,
        "autoWidth": true,
        "serverMethod": "post",
        "info": true,
        "scrollY": 400,
        "scrollX": true,
        "iDisplayLength": "5",
        "sAjaxSource": urlDataTableRegister,
        "fnServerParams": function (aoData) {
            //aoData.push({ "name": "Description", "value": $("#Description").val() });
            //aoData.push({ "name": "Status", "value": $("#Status").val() });
        },
        "sPaginationType": "full_numbers",
        "sDom": '<ltipr>',
        "aoColumns": GetColsCategory()
    });


}

function Register(code) {

    $.ajax({
        url: urlOpenRegister,
        data: { IdSequence: code },
        type: 'POST',
        success: function (result) {

            if (result.Success == undefined) {
                $('#ModalRegisterInput').html(result);
                $('#modal-RegisterInput').modal('show');
            } else {
                ShowMessageError(result.Title, result.MsgReturn);
            }
        }
    });
}

function Save() {

        if ($('#FormRegisterInput').valid()) {

            var CategoryName = $('#CategoryDDL').val();
            var phoneNumber = $('#PhoneNumber').val();
            var companyName = $('#CompanyName').val();
            var registerDate = $('#RegisterDate').val();
            var cnpj = $('#CNPJ').val();
            var statusId = $('#StatusDDL').val();

            if (Validations(companyName, cnpj, CategoryName, phoneNumber, registerDate, statusId) == false) {

                document.getElementById("divMessageFieldsRequired").style.display = "block";
            } else {
                document.getElementById("divMessageFieldsRequired").style.display = "none";

                var form = $("#FormRegisterInput").serialize();

                $.ajax({
                    url: urlSaveRegister,
                    data: form,
                    type: 'POST',
                    success: function (result) {
                        if (result.Success == true) {
                            $('#modal-RegisterInput').modal('hide');
                            RefreshDatatable();
                            ShowMessageSuccess(result.Title, result.MsgReturn)
                        } else {
                            ShowMessageError(result.Title, result.MsgReturn);
                        }
                    }
                });
            }
        }
        else
        {
            var email = $('#Email').val();
            if (email != undefined && email != "") {
                document.getElementById("divMessageFieldsRequired").innerHTML = "*** Email inválido.";
                document.getElementById("divMessageFieldsRequired").style.display = "block";
            }
        }
}

function Validations(companyName, CNPJ, CategoryName, phoneNumber, dataRegister, statusId) {

    if (companyName == undefined || companyName == "") {
        document.getElementById("divMessageFieldsRequired").innerHTML = "*** Razão Social é orbigatório.";
        return false;
    }

    if (CNPJ == undefined || CNPJ == "") {
        document.getElementById("divMessageFieldsRequired").innerHTML = "*** CNPJ é orbigatório.";
        return false;
    }
    else {
        if (validatorCnpj(CNPJ) == false) {
            document.getElementById("divMessageFieldsRequired").innerHTML = "*** CNPJ Inexistente.";
            return false;
        }
    }
    
    if (CategoryName == undefined || CategoryName == "" || CategoryName == "0") {
        document.getElementById("divMessageFieldsRequired").innerHTML = "*** Selecione uma categoria.";
        return false;
    } else if (CategoryName == '4' && (phoneNumber == undefined || phoneNumber == "")) {
        document.getElementById("divMessageFieldsRequired").innerHTML = "*** Telefone obrigatório para o estabelecimento Supermercado.";
        return false;
    }

    if (dataRegister != undefined && dataRegister != "") {
        if (validatorData(dataRegister) == false) {
            document.getElementById("divMessageFieldsRequired").innerHTML = "*** Data de Cadastro inválida.";
            return false;
        }
    }

    //"0" = Selecione
    if (statusId == undefined || statusId == "" || statusId == "0") {
        document.getElementById("divMessageFieldsRequired").innerHTML = "*** Selecione um status.";
        return false;
    }

}

function Delete(EstablishmentName, EstablishmentCode) {

    bootbox.confirm({
        size: 'medium',
        title: 'Confirma Exclusão',
        message: 'Deseja realmente <b>excluir</b> o estabelecimento <b>' + EstablishmentName + '</b>?',
        buttons: {
            confirm: {
                label: 'Sim',
                className: 'btn-success'
            },
            cancel: {
                label: 'Não',
                className: 'btn-danger'
            }
        },
        callback: function (result) {

            if (result) {

                $.ajax({
                    url: urlDeleteRegister,
                    data: { IdEstablishment: EstablishmentCode },
                    type: 'POST',
                    success: function (response) {

                        if (response.Success == true) {
                            RefreshDatatable();
                            ShowMessageSuccess(response.Title, response.MsgReturn)
                        } else {
                            ShowMessageError(response.Title, response.MsgReturn);
                        }

                    }
                });
            }

        }
    });
}

function RefreshDatatable() {
    dataTableRegister.fnDraw();
}

function ClearFields() {
    $("#CompanyName").val('');
    $("#FantasyName").val('');
    $("#CNPJ").val('');
    $("#Email").val('');
    $("#Address").val('');
    $("#City").val('');
    $("#State").val('');
    $("#PhoneNumber").val('');
    $("#RegisterDate").val('');
    $("#CategoryDDL").val('');
    $("#StatusDDL").val('');
    $("#Agency").val('');
    $("#Account").val('');
}

function GoBackMenu() {
    window.location.href = urlIndexMenu;
}

function validatorCnpj(str) {
    str = str.replace('.', '');
    str = str.replace('.', '');
    str = str.replace('.', '');
    str = str.replace('-', '');
    str = str.replace('/', '');
    cnpj = str;
    var number, digits, sum, i, result, pos, size, digits_equal;
    digits_equal = 1;
    if (cnpj.length < 14 && cnpj.length < 15)
        return false;
    for (i = 0; i < cnpj.length - 1; i++)
        if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
            digits_equal = 0;
            break;
        }
    if (!digits_equal) {
        size = cnpj.length - 2
        number = cnpj.substring(0, size);
        digits = cnpj.substring(size);
        sum = 0;
        pos = size - 7;
        for (i = size; i >= 1; i--) {
            sum += number.charAt(size - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
            return false;
        size = size + 1;
        number = cnpj.substring(0, size);
        sum = 0;
        pos = size - 7;
        for (i = size; i >= 1; i--) {
            sum += number.charAt(size - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1))
            return false;

        return true;
    }
    else
        return false;
}

//validations with range between year of the 1000 and 2999.
function validatorData(str) {
    var date = str;
    var ardt = new Array;
    var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
    ardt = date.split("/");
    erro = false;
    if (date.search(ExpReg) == -1) {
        erro = true;
    }
    else if (((ardt[1] == 4) || (ardt[1] == 6) || (ardt[1] == 9) || (ardt[1] == 11)) && (ardt[0] > 30))
        erro = true;
    else if (ardt[1] == 2) {
        if ((ardt[0] > 28) && ((ardt[2] % 4) != 0))
            erro = true;
        if ((ardt[0] > 29) && ((ardt[2] % 4) == 0))
            erro = true;
    }
    if (erro) {
        return false;
    }
    return true;
}
