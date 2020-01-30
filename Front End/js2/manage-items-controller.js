$(document).ready(function () {

    loadItems();
});
var selectedRow = null;
function loadItems() {

        $("#tableJson").empty();
        var ajaxConfig={
            url:"http://localhost:8080/api/v1/items",
            method:"GET",
            async:'json'
        }
        var i =0;
        $.ajax(ajaxConfig).done(function (itemd,status,jQXHB) {
            for(var i =0;i< itemd.length;i++){
                var html = '<tr>' +
                    '<td>' + itemd[i].code + '</td>' +
                    '<td>' + itemd[i].description + '</td>' +
                    '<td>' + itemd[i].unitPrice + '</td>' +
                    '<td>' + itemd[i].qtyOnHand + '</td>' +
                    '<td><i class="fas fa-trash"></i></td>' +
                    '</tr>';
                $("#item tbody").append(html);
            }
        }).fail(function (jqXHB ,status,error) {
            console.log(error)
        })
}
//////////////////////////////////////////////////////////////////////////



$("#item tbody").on('click', "tr td:last-child", function (eventData) {
    var row = $(this).parents("tr");
    eventData.stopPropagation();
    if (confirm("Are you sure whether you want delete this Item?")) {
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:8080/api/v1/items/' + row.find('td:first-child').text(),
            async: true
        }).done(function (response, status, jqXHR) {
            row.remove();
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        });
    }
});

///////////////////////////////////////////////////////////////////////////////
$("#item tbody").on('click','tr td i',function(){

});
///////////////////////////////////////////////////////////////////////////////
//
$("#btnsubmit").click(function () {
    var item = {
        code: $("#itemCode").val(),
        description: $("#itemDesc").val(),
        unitPrice: $("#unitPrice").val(),
        qtyOnHand: $("#qtyOnHand").val()
    };

    if (!selectedRow) {
        var ajaxConfig = {
            method: 'POST',
            url: 'http://localhost:8080/api/v1/items',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify(item)
        };
        $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
            var html = "<tr>" +
                "<td>" + item.code + "</td>" +
                "<td>" + item.description + "</td>" +
                "<td>" + item.unitPrice + "</td>" +
                "<td>" + item.qtyOnHand + "</td>" +
                '<td><i class="fa fa-trash"></i></td>' +
                "</tr>";
            $("#item tbody").append(html);
            $("#itemCode, #itemDesc, #unitPrice ,#qtyOnHand").val("");
            $("#itemCode").focus();
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        });
    } else {
        var ajaxConfig = {
            method: 'PUT',
            url: 'http://localhost:8080/api/1/items',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify(item)
        };
        $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
            selectedRow.find("td:nth-child(2)").text(item.description);
            selectedRow.find("td:nth-child(3)").text(item.unitPrice);
            selectedRow.find("td:nth-child(4)").text(item.qtyOnHand);
        }).fail(function (jqXHR, status, error) {
            console.log(error);
        }).always(function(){
            $("#btnClear").click();
        });
    }
});


////////////////////////////////////////////

// $("#item tbody").on('click', "tr td:last-child", function (eventData) {
//     var row = $(this).parents("tr");
//     eventData.stopPropagation();
//     if (confirm("Are you sure whether you want delete this customer?")) {
//         $.ajax({
//             method: 'DELETE',
//             url: 'http://localhost:8080/pos/api/v1/customers6?customerId=' + row.find('td:first-child').text(),
//             async: true
//         }).done(function (response, status, jqXHR) {
//             row.remove();
//         }).fail(function (jqXHR, status, error) {
//             console.log(error);
//         });
//     }
// });

$("#item tbody").on('click', 'tr', function () {
    selectedRow = $(this);
    $("#itemCode").val($(this).find("td:first-child").text());
    $("#itemDesc").val($(this).find("td:nth-child(2)").text());
    $("#unitPrice").val($(this).find("td:nth-child(3)").text());
    $("#qtyOnHand").val($(this).find("td:nth-child(4)").text());
    $("#itemCode").attr("disabled", 'true');
    $("#item tbody tr").removeClass('row-selected');
    selectedRow.addClass('row-selected');
});

$("#btnClear").click(function(){
    $("#itemCode, #itemDesc, #qtyOnHand, #unitPrice").val("");
    $("#itemCode").attr('disabled',false);
    $("#item tbody tr").removeClass('row-selected');
    selectedRow = null;
    $("#itemCode").focus();
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