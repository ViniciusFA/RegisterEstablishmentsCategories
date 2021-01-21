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
    $("#CategoryDDL").val('');
    $("#StatusDDL").val('');
    $("#Agency").val('');
    $("#Account").val('');   
}

function GoBackMenu() {
    window.location.href = urlIndexMenu;
}
