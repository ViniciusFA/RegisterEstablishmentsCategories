var dataTableRegister = undefined;

function GetColsRegister() {
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
        "sName": "City", "mData": "City", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
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
        "sName": "State", "mData": "State", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
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
        "sName": "PhoneNumber", "mData": "PhoneNumber", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
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
        "sName": "RegisterDate", "mData": "RegisterDate", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
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
        "sName": "Category", "mData": "Category", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
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
        "sName": "Status", "mData": "Status", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.Status == null || row.Status == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.Status;
            }
        }
    });

    // column AgencyAccount
    colDefs.push({
        "sName": "AgencyAccount", "mData": "AgencyAccount", "sTitle": "Endereço", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.AgencyAccount == null || row.AgencyAccount == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.AgencyAccount;
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

    dataTableRegister= $("#" + tableId).dataTable({
        "order": [0, 'asc'],
        "bServerSide": true,
        "bProcessing": true,
        "lengthChange": false,
        "autoWidth": false,
        "serverMethod": "post",
        "info": true,
        "scrollY": 390,
        "scrollX": true,
        "iDisplayLength": "10",
        "sAjaxSource": urlDataTableRegister,
        "fnServerParams": function (aoData) {
            //aoData.push({ "name": "Description", "value": $("#Description").val() });
            //aoData.push({ "name": "Status", "value": $("#Status").val() });
        },
        "sPaginationType": "full_numbers",
        "sDom": '<ltipr>',
        "aoColumns": GetColsRegister()
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
    $("#Category").val('');
    $("#Status").val('');
    $("#AgencyAccount").val('');    
}

function GoBackMenu() {
    window.location.href = urlIndexMenu;
}

function MasksInitialize() {

    //$('.defaultTelefoneMask').mask('000.00000.0000');

}

