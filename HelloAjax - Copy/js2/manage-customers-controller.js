$(document).ready(function () {

   loadCustomers();
});
var selectedRow = null;
function loadCustomers() {

        $("#tableJson").empty();
        var ajaxConfig={
            url:"http://localhost:8080/api/v1/customers",
            method:"GET",
            async:'json'
        }
        var i =0;
        $.ajax(ajaxConfig).done(function (customers,status,jQXHB) {
            for(var i =0;i< customers.length;i++){
                var html = '<tr>' +
                    '<td>' + customers[i].id + '</td>' +
                    '<td>' + customers[i].name + '</td>' +
                    '<td>' + customers[i].address + '</td>' +
                    '<td><i class="fas fa-trash"></i></td>' +
                    '</tr>';
                $("#tbl-customers tbody").append(html);
            }
        }).fail(function (jqXHB ,status,error) {
            console.log(error)
        })
}
//////////////////////////////////////////////////////////////////////////



$("#tbl-customers tbody").on('click', "tr td:last-child", function (eventData) {
    var row = $(this).parents("tr");
    eventData.stopPropagation();
    if (confirm("Are you sure whether you want delete this customer?")) {
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:8080/api/v1/customers?customerId=' + row.find('td:first-child').text(),
            async: true
        }).done(function (response, status, jqXHR) {
            row.remove();
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        });
    }
});

///////////////////////////////////////////////////////////////////////////////
$("#tbl-customers tbody").on('click','tr td i',function(){

});
///////////////////////////////////////////////////////////////////////////////
//
$("#btnsubmit").click(function () {
    var customer = {
        id: $("#txtId").val(),
        name: $("#txtName").val(),
        address: $("#txtCustomerAddress").val()
    };

    if (!selectedRow) {
        var ajaxConfig = {
            method: 'POST',
            url: 'http://localhost:8080/api/v1/customers',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify(customer)
        };
        $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
            var html = "<tr>" +
                "<td>" + customer.id + "</td>" +
                "<td>" + customer.name + "</td>" +
                "<td>" + customer.address + "</td>" +
                '<td><i class="fa fa-trash"></i></td>' +
                "</tr>";
            $("#tbl-customers tbody").append(html);
            $("#txtId, #txtName, #txtCustomerAddress").val("");
            $("#txtId").focus();
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        });
    } else {
        var ajaxConfig = {
            method: 'PUT',
            url: 'http://localhost:8080/api/v1/customers'+id,
            async: true,
            contentType: 'application/json',
            data: JSON.stringify(customer)
        };
        $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
            selectedRow.find("td:nth-child(2)").text(customer.name);
            selectedRow.find("td:nth-child(3)").text(customer.address);
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        }).always(function(){
            $("#btnClear").click();
        });
    }
});


////////////////////////////////////////////

$("#tbl-customers tbody").on('click', "tr td:last-child", function (eventData) {
    var row = $(this).parents("tr");
    eventData.stopPropagation();
    if (confirm("Are you sure whether you want delete this customer?")) {
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:8080/api/v1/customers/'+row.find('td:first-child').val(),
            async: true
        }).done(function (response, status, jqXHR) {
            row.remove();
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        });
    }
});

$("#tbl-customers tbody").on('click', 'tr', function () {
    selectedRow = $(this);
    $("#txtId").val($(this).find("td:first-child").text());
    $("#txtName").val($(this).find("td:nth-child(2)").text());
    $("#txtCustomerAddress").val($(this).find("td:nth-child(3)").text());
    $("#txtId").attr("disabled", 'true');
    $("#tbl-customers tbody tr").removeClass('row-selected');
    selectedRow.addClass('row-selected');
});

$("#btnClear").click(function(){
    $("#txtId, #txtName, #txtCustomerAddress").val("");
    $("#txtId").attr('disabled',false);
    $("#tbl-customers tbody tr").removeClass('row-selected');
    selectedRow = null;
    $("#txtId").focus();
});


function initializePagination(totalElements){

    var totalPages = parseInt(totalElements/ 5 + (((totalElements % 5) !== 0)? 1: 0));
    $(".page-item").remove();

    var html = '<li class="page-item"><a class="page-link" href="javascript:void(0)">&laquo;</a></li>';

    for(var i=0;i<totalPages;i++){
        html+='<li class="page-item"><a class="page-link" href="#">' + (i+1) +'</a></li>'
    }

    html+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>';

    $(".card-footer .pagination").html(html);

    $(".card-footer .pagination .page-item:first-child").click(function(){
        loadCustomers(0);
    });

    $(".card-footer .pagination .page-item:last-child").click(function(){
        loadCustomers(totalPages - 1);
    });

    $(".card-footer .pagination .page-item").click(function(){
        var number = parseInt($(this).find("a").text());
        if(number){
            loadCustomers(number-1);
        }
    })

}