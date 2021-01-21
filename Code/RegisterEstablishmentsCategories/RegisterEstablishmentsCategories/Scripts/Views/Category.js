var dataTableCategory = undefined;

function GetColsCategory() {
    var colDefs = new Array();

    // column CategoryName
    colDefs.push({
        "sName": "CategoryName", "mData": "CategoryName", "sTitle": "Nome da Categoria", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.CategoryName == null || row.CategoryName == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.CategoryName;
            }
        }
    });

    // column CreateDate
    colDefs.push({
        "sName": "CreateDate", "mData": "CreateDate", "sTitle": "Data de Criação", "sClass": "text-center", "bSortable": false,
        "mRender": function (data, type, row) {
            if (row == null || row.CreateDate == null || row.CreateDate == '') {
                return '<i class="glyphicon glyphicon-minus"></i>';
            } else {
                return row.CreateDate;
            }
        }
    });    

    // column Action
    colDefs.push({
        "mData": "Action", "sTitle": "Ações", "sClass": "text-center", "bSearchable": false, "bSortable": false,
        "mRender": function (data, type, row) {
            var html = "";
            var commandEdit = "RegisterCategory(" + row.IdSequence + ")";
            var commandDelete = "Delete('" + row.CategoryName + "','" + row.IdSequence + "')";

            html = '<div class="buttonsEditDelete" role="group" aria-label="Small button group">';
            html += '<button type="button" class="btn btn-success" title="Editar Registro" onclick="' + commandEdit + '"><i class="glyphicon glyphicon-pencil"></i></button>'
            html += '&nbsp; <button type="button" class="btn btn-danger" title="Excluir" onclick="' + commandDelete + '"><i class="glyphicon glyphicon-trash"></i></button>';
            html += '</div>';

            return html;
        }
    });

    return colDefs;
}

function InitializaDatatableCategory(tableId) {

    if (urlDataTableCategory == undefined && urlDataTableCategory == '') {
        return;
    }

    var tbGrid = document.getElementById(tableId);

    if ($.fn.DataTable.fnIsDataTable(tbGrid)) {
        return;
    }

    $.fn.dataTable.ext.errMode = 'throw';

    dataTableCategory = $("#" + tableId).dataTable({
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
        "sAjaxSource": urlDataTableCategory,
        "fnServerParams": function (aoData) {
            //aoData.push({ "name": "Description", "value": $("#Description").val() });
            //aoData.push({ "name": "Status", "value": $("#Status").val() });
        },
        "sPaginationType": "full_numbers",
        "sDom": '<ltipr>',
        "aoColumns": GetColsCategory()
    });

}

function RegisterCategory(code) {

    $.ajax({
        url: urlOpenModalCategory,
        data: { IdSequence : code },
        type: 'POST',
        success: function (response) {
            if (response.Success == undefined) {
                $('#ModalCategoriesInput').html(response);
                $('#modal-CategoryInput').modal('show');
            } else {
                ShowMessageError(response.Title, response.MsgReturn);
            }
        }
    });
}

function SaveCategory() {
    var form = $("#FormCategoryInput").serialize();

    $.ajax({
        url: urlSaveCategory,
        data: form,
        type: 'POST',
        success: function (result) {
            if (result.Success == true) {
                $('#modal-CategoryInput').modal('hide');
                RefreshDatatable();
                ShowMessageSuccess(result.Title, result.MsgReturn)
            } else {
                ShowMessageError(result.Title, result.MsgReturn);
            }
        }
    });
}

function RefreshDatatable() {
    dataTableCategory.fnDraw();
}

function Delete(name, code) {
    console.log(name);
    console.log(code);

    bootbox.confirm({
        size: 'medium',
        title: 'Confirma Exclusão',
        message: 'Deseja realmente <b>excluir</b> o estabelecimento <b>' + name + '</b>?',
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
                    url: urlDeleteCategory,
                    data: { IdSequence: code },
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

function ClearFields() {
    $('#CategoryName').val('');
}

function GoBackMenu() {
    window.location.href = urlIndexMenu;
}
