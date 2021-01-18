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
            html += "<a style='cursor:pointer;' onclick='ShowDescriptionsRegisterInput(1)' title='Editar'><img src='Content/img/to_do_list_cheked_1.png'/></a>&nbsp;";
            html += "&nbsp;<a style='cursor:pointer;' onclick='InativeDescriptionRegister()' title='Inativar'><img src='Content/img/delete.gif'/></a>";
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

function Register() {
    $.ajax({ url: urlOpenRegister })
}