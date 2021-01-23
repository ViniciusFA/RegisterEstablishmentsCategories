$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function MasksInitialize() {
    
    $('.defaultRootCNPJMask').mask('00.000.000');

    $('.defaultTelefoneMask').mask('000.00000.0000');

    $('.defaultNumberMask').mask('9999999999');

    $('.shorterNumberMask').mask('999999');

    $('.3DigitNumberMask').mask('999');

    $('.defaultYearMask').mask('0000');

    $('.defaultPercentMask').mask('999');
   
}

function StartMultiselect() {
    $.each($('.multiselect'), function () {
        ConfiguraMultiselect(this);
    });
}

function ConfiguraMultiselect(element) {
    $(element).multiselect({
        includeSelectAllOption: false,
        nonSelectedText: 'No items selected',
        nSelectedText: 'selecteds',
        allSelectedText: 'All selecteds'
    });
}

function InicializaUnobtrusiveValidation(control) {
    $.validator.unobtrusive.parse(control);
    ValidationIgnore();
}

function ValidationIgnore() {
    if (($("[id^='form']")).length > 0) {
        for (var i = 0; i < ($("[id^='form']")).length; i++) {
            if ($(($("[id^='form']"))[i]).data("validator") != null) {
                $(($("[id^='form']"))[i]).data("validator").settings.ignore = ".data-val-ignore, :hidden:not(.hdnvalidate)"
            }
        }
    }
}

function ValidaEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function DatePickerRange(controlStart, controlEnd, intervalDays) {

    DatePickerPadrao(controlStart);
    DatePickerPadrao(controlEnd);

    controlStart.on("dp.change", function (e) {

        var inicio = moment(controlStart.val(), 'DD/MM/YYYY');
        var fim = moment(controlEnd.val(), 'DD/MM/YYYY');

        if (e.date != false) {

            var data = e.date.add(intervalDays, 'days').format("DD/MM/YYYY");

            if (controlEnd.val() == '' || inicio.diff(fim, 'days') >= 0) {
                controlEnd.val(data);
            }
        }
        else {
            controlEnd.val('');
        }
    });
    controlEnd.on("dp.change", function (e) {

        var inicio = moment(controlStart.val(), 'DD/MM/YYYY');
        var fim = moment(controlEnd.val(), 'DD/MM/YYYY');

        if (e.date != false) {

            var data = e.date.add(intervalDays * -1, 'days').format("DD/MM/YYYY");

            if (controlStart.val() == '' || fim.diff(inicio, 'days') <= 0) {
                controlStart.val(data);
            }
        }
        else {
            controlStart.val('');
        }
    });
}

function DatePickerPadrao(control) {
    control.datetimepicker(
        {
            locale: 'pt-BR',
            format: 'DD/MM/YYYY'
        });
}

function DatePickerFiltroProgramacaoEsquerda(control) {
    control.datetimepicker(
        {
            locale: 'pt-BR',
            format: 'DD/MM/YYYY',
            widgetPositioning: {
                vertical: 'top',
                horizontal: 'right'
            }
        });
}

function HandleBeforeSend(xhr, title, MessageSessaoExpirada) {
    if (CheckExpiredSession()) {
        ShowMessageError(title, MessageSessaoExpirada);

        if (xhr != null)
            xhr.abort();

        setTimeout(function () { location.reload(true); }, 6500);
    }
}

function HabilitaScrollLinks() {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this).attr('href');
        if (target !== '#') {
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $(target).offset().top - 90
                }, 500);
            }
        }
    });
}

function DefaultDataTables(control) {
    var dataTable = $(control).dataTable({
        searching: false,
        pageLength: 5,
        lengthChange: false
    });

    return dataTable;
}

function DataTablesServerSide(url, controle, colunas, dados, colunasDef) {

    var dataTable = $(controle).DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": url,
        destroy: true,
        searching: false,
        lengthChange: false,
        paging: true,
        ordering: true,
        data: dados,
        columns: colunas,
        columnDefs: colunasDef,
        autoWidth: false,
        order: []
    });
}

function DataTablesAjaxPagination(controle, colunas, dados, colunasDef, pagesLength, cabecalho) {

    if ($.fn.DataTable.isDataTable(controle)) {
        $(controle).empty();
    }

    if (pagesLength == "")
        pagesLength = 15;

    var dataTable = $(controle).DataTable({
        destroy: true,
        searching: false,
        pageLength: pagesLength,
        lengthChange: false,
        paging: true,
        ordering: true,
        data: dados,
        columns: colunas,
        columnDefs: colunasDef,
        autoWidth: false,
        order: []
    });
    
    return dataTable;
}

function DataTablesAjaxScroll(control, colunas, dados, colunasDef) {
    var dataTable = $(control).dataTable({
        destroy: true,
        searching: false,
        scrollCollapse: true,
        lengthChange: false,
        paging: false,
        ordering: true,
        data: dados,
        columns: colunas,
        columnDefs: colunasDef,
        autoWidth: false
    });

    return dataTable;
}

function DataTableRazorPaging(control, pagesLength) {
    var dataTable = $(control).dataTable({
        destroy: true,
        searching: false,
        pageLength: pagesLength,
        lengthChange: false,
        paging: true,
        ordering: true,
        autoWidth: false
    });
    return dataTable;
}

function DataTableRazorNoPaging(control) {
    var dataTable = $(control).dataTable({
        destroy: true,
        searching: false,
        lengthChange: false,
        paging: false,
        ordering: true,
        autoWidth: false,
        scrollY: "550px",
        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            leftColumns: 1
        }
    });
    return dataTable;
}

function DataTablesAjaxScrollHeight(control, colunas, dados, colunasDef, height) {

    var dataTable = $(control).dataTable({
        destroy: true,
        searching: false,
        lengthChange: false,
        paging: false,
        ordering: true,
        autoWidth: false,
        scrollY: height,
        scrollX: true,
        scrollCollapse: true,
        data: dados,
        columns: colunas,
        columnDefs: colunasDef,
        "bAutoWidth": false
    });

    $(control + "_wrapper").find(".dataTables_scrollHeadInner").css({ "width": "100%" });
    $(control + "_wrapper").find(".dataTables_scrollHeadInner").find(".table").css({ "width": "100%" });
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw();

    return dataTable;
}

function DefaultDataTablesOpcoes(control, opcoes) {
    var dataTable = $(control).dataTable(opcoes);

    return dataTable;
}

function modalPopUp(urlAction, param) {
    $.ajax({
        url: urlAction,
        data: param,
        type: 'POST',
        success: function (content) {
            $('#modalContent').html(content);
            $('#modalPartialView').modal('show');
        }
    });
}

function modalClose() {
    $('#modalPartialView').modal('hide');
}

function LoadDivJqueryAjaxGet(url, data, divControl) {
    $.ajax({
        url: url,
        data: data,
        type: 'GET',
        success: function (content) {
            divControl.html(content);
        }
    });
}

function LoadDivJqueryAjaxPost(url, data, divControl) {
    $.ajax({
        async: false,
        url: url,
        data: data,
        type: 'POST',
        success: function (content) {
            divControl.html(content);
        }
    });
}

function LoadDivJqueryAjaxPostAsync(url, data, divControl) {
    $.ajax({
        url: url,
        data: data,
        type: 'POST',
        success: function (content) {
            divControl.html(content);
        }
    });
}

function Masks() {
    $('.defaultMoneyMask').mask('000t000t000d00'.replace(/t/g, '.').replace('d', ','), { reverse: true });
    $('.reducedMoneyMask').mask('00.000,00', { reverse: true });
    $('.MiddleMoneyMask').mask('00.000.000,00', { reverse: true });
    $('.moneyMask').mask('000.000,00', { reverse: true });

    var SPMaskBehavior = function (val) {
        return val.length > 14 ? '00.000.000/0000-00' : '000.000.000-009999';
    },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('.defaultCPFMask').mask(SPMaskBehavior, spOptions);

    $('.defaultRootCNPJMask').mask('00.000.000');

    $('.defaultCPFMask2').mask('000.000.000-00');

    $('.defaultCNPJMask2').mask('00.000.000/0000-00', { reverse: true });

    $('.defaultNumberMask').mask('9999999999');

    $('.shorterNumberMask').mask('999999');

    $('.2DigitNumberMask').mask('99');

    $('.3DigitNumberMask').mask('999');

    $('.3DigitNumberMask').mask("S000", {
        translation: {
            'S': {
                pattern: /-/,
                optional: true
            }
        }
    });

    $('.3DigitPositiveNumberMask').mask('999');

    $('.4DigitNumberMask').mask('9999');

    $('.6DigitNumberMask').mask('999999');

    $('.8DigitNumberMask').mask('99999999');

    $('.10DigitNumberMask').mask('9999999999');

    $('.11DigitNumberMask').mask('99999999999');

    $('.15DigitNumberMask').mask('999999999999999');

    $('.19DigitNumberMask').mask('9999999999999999999');

    $('.20DigitNumberMask').mask('99999999999999999999');

    $('.CreditCardNumber').mask('0000 0000 0000 0000');

    $('.defaultYearMask').mask('0000');

    $('.defaultPercentMask').mask('999');

    $('.defaultCEPMask').mask('99999999');

    $('.defaultCelularMask').mask('99999999999');

    $('.defaultTelefoneMask').mask('9999999999');
    
    var initialTimeOptions = {
        onKeyPress: function (val, e, field, options) {
            if (field.val().substring(0, 1) == '2') {
                $(field).mask('00:00', twoBasedTimeOptions);
            }
            else {
                $(field).mask('00:00', otherTimeOptions);
            }
        }, "placeholder": "HH:MM", 'translation': {
            2: { pattern: /[0-2*]/ },
            0: { pattern: /[0-9*]/ },
        }
    },
        twoBasedTimeOptions = {
            onKeyPress: function (val, e, field, options) {
                $(field).mask('00:00', initialTimeOptions);
                if (field.val().substring(0, 1) == '2') {
                    $(field).mask('12:34', twoBasedTimeOptions);
                }
                else {
                    $(field).mask('12:34', otherTimeOptions);
                }
            }, "placeholder": "HH:MM", 'translation': {
                1: { pattern: /[0-2*]/ },
                2: { pattern: /[0-3*]/ },
                3: { pattern: /[0-5*]/ },
                4: { pattern: /[0-9*]/ }
            }
        },
        otherTimeOptions = {
            onKeyPress: function (val, e, field, options) {
                $(field).mask('00:00', initialTimeOptions);
                if (field.val().substring(0, 1) == '2') {
                    $(field).mask('12:34', twoBasedTimeOptions);
                }
                else {
                    $(field).mask('12:34', otherTimeOptions);
                }
            }, "placeholder": "HH:MM", 'translation': {
                1: { pattern: /[0-2*]/ },
                2: { pattern: /[0-9*]/ },
                3: { pattern: /[0-5*]/ },
                4: { pattern: /[0-9*]/ }
            }
        };

    $('.defaultTimeMask').bind('cut copy paste drop', function () { return false; }).mask('20:00', initialTimeOptions);
    
    var initialSecondsOptions = {
        onKeyPress: function (val, e, field, options) {
            if (field.val().substring(0, 1) == '2') {
                $(field).mask('00:00:00', twoBasedSecondsOptions);
            }
            else {
                $(field).mask('00:00:00', otherSecondsOptions);
            }
        }, "placeholder": "HH:MM", 'translation': {
            2: { pattern: /[0-2*]/ },
            0: { pattern: /[0-9*]/ },
        }
    },
        twoBasedSecondsOptions = {
            onKeyPress: function (val, e, field, options) {
                $(field).mask('00:00:00', initialSecondsOptions);
                if (field.val().substring(0, 1) == '2') {
                    $(field).mask('12:34:34', twoBasedSecondsOptions);
                }
                else {
                    $(field).mask('12:34:34', otherSecondsOptions);
                }
            }, "placeholder": "HH:MM", 'translation': {
                1: { pattern: /[0-2*]/ },
                2: { pattern: /[0-3*]/ },
                3: { pattern: /[0-5*]/ },
                4: { pattern: /[0-9*]/ }
            }
        },
        otherSecondsOptions = {
            onKeyPress: function (val, e, field, options) {
                $(field).mask('00:00:00', initialSecondsOptions);
                if (field.val().substring(0, 1) == '2') {
                    $(field).mask('12:34:34', twoBasedSecondsOptions);
                }
                else {
                    $(field).mask('12:34:34', otherSecondsOptions);
                }
            }, "placeholder": "HH:MM", 'translation': {
                1: { pattern: /[0-2*]/ },
                2: { pattern: /[0-9*]/ },
                3: { pattern: /[0-5*]/ },
                4: { pattern: /[0-9*]/ }
            }
        };

    $('.defaultTimeCompleteMask').bind('cut copy paste drop', function () { return false; }).mask('20:00:00', initialSecondsOptions);

    $('.defaultDateMask').mask('99/99/9999');

    $('.defaultPhoneMask').mask('(00) 00000-0009');

    $('.defaultCelPhoneMask').mask('(00) 00000-0009');
    $('.defaultPhone2Mask').mask('(00) 00000-0009');

    $('.defaultRGMask').mask('99.999.999-9')

    $('.defaultAlturaMask').mask('9,99');

    $('.defaultDecimal2dot2').mask('99,99');

    $('.defaultDecimal2dot1').mask('99,9');

    $('.defaultDecimal2dot1n').mask('Z99,9', {

        translation: {
            '0': { pattern: /\d/ },
            '9': { pattern: /\d/, optional: true },
            'Z': { pattern: /[\-\+]/, optional: true }
        }
    });

    $('.defaultDecimal3dot1').mask('999,9');

    $('.defaultPesoMask').mask('999,99');

    $('.qtdNecessariaMask').mask('0999,9999');
    
    $('.defaultPlateMask').mask('SSS-0000');

    $('.defaultPlateMask').keyup(function () {
        this.value = this.value.toLocaleUpperCase();
    });

    $('.defaultLetters').keyup(function () {
        this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ ]/g, '');
    });

    $('.defaultLongitudeMask').mask('7099.9999999999999', {
        'translation': {
            7: { pattern: /[\d+-]/ }
        }
    });
    $('.defaultLatitudeMask').mask('799.9999999999999', {
        'translation': {
            7: { pattern: /[\d+-]/ }
        }
    });
}

function LimitaMaxLenghtTextArea(control, tamanhoMaximo) {
    var text = $(control).val();
    var textLength = text.length;
    if (textLength > tamanhoMaximo) {
        $(control).val(text.substring(0, (tamanhoMaximo - 1)));
    }
}

function LoadPopover(url, params) {

    var content = '';

    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (result) {
            content = result;
        }
    });

    return content;
}

function GetImpression(htmlContentimpress) {
    var contentAserImpresso = htmlContentimpress;
    var contentOriginal = $("body").html();
    $("body").html(contentAserImpresso);
    window.print();
    $("body").html(contentOriginal);
}

function AutoCompleteDefault(campoTexto, campoId, url, functionName) {
    $(campoTexto).typeahead({
        hint: true,
        highlight: true,
        minLength: 2
        , source: function (request, response) {
            $(campoTexto).addClass('loadingAutoComplete');
            $.ajax({
                url: url,
                data: "{ 'prefix': '" + request + "'}",
                dataType: "json",
                type: "POST",
                global: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    items = [];
                    map = {};
                    $.each(data, function (i, item) {
                        var id = item.Value;
                        var name = item.Text;
                        map[name] = { id: id, name: name };
                        items.push(item.Text);
                    });
                    response(items);
                    $(".dropdown-menu").css("height", "auto");
                    $(campoTexto).removeClass('loadingAutoComplete');
                },
                error: function (response) {
                    $(campoTexto).removeClass('loadingAutoComplete');
                    alert(response.responseText);
                },
                failure: function (response) {
                    $(campoTexto).removeClass('loadingAutoComplete');
                    alert(response.responseText);
                }
            });
        },
        updater: function (item) {
            $(campoId).val(map[item].id);

            if (functionName != "") {
                var fn = window[functionName];
                if (typeof fn === "function") fn();
            }

            return item;
        }
    }).on('keydown', function (e) {
        $(campoId).val("");
    });
}

function ToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);

    if (results != null) {
        var dt = new Date(parseFloat(results[1]));
        return pad2(dt.getDate()) + "/" + (pad2(dt.getMonth() + 1)) + "/" + dt.getFullYear();
    } else {
        var dt = new Date(value);
        return pad2(dt.getDate()) + "/" + (pad2(dt.getMonth() + 1)) + "/" + dt.getFullYear();
    }

}

function ToJavaScriptDateHour(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);

    if (results != null) {
        var dt = new Date(parseFloat(results[1]));
        return pad2(dt.getDate()) + "/" + (pad2(dt.getMonth() + 1)) + "/" + dt.getFullYear() + " " + pad2(dt.getHours()) + ":" + pad2(dt.getMinutes()) + ":" + pad2(dt.getSeconds());
    }
    else {
        var dt = new Date(value);
        return pad2(dt.getDate()) + "/" + (pad2(dt.getMonth() + 1)) + "/" + dt.getFullYear() + " " + pad2(dt.getHours()) + ":" + pad2(dt.getMinutes()) + ":" + pad2(dt.getSeconds());
    }

}
