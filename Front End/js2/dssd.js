//
//
// loadAllCustomes();
// function loadAllCustomes() {
//
//
//     var selectValues = {
//         "1": "test 1",
//         "2": "test 2"
//     };
//     var $mySelect = $('#customerSelect');
// //
//     $.each(customers, function(key, value) {
//         var $option = $("<option/>", {
//             value: key,
//             text: value
//         });
//         $mySelect.append($option);
//     });
// }
//
//
// $("#customerSelect").click(function () {
//     var selected = $("#customerSelect").val();
//     $("#txtCusID").val(selected);
//
//     if (selected == "C001") {
//         $("#txtCusName").val("Dasun");
//         $("#txtCusAddress").val("Galle");
//         $("#txtCusSalary").val(10000);
//     }
//
//     if (selected == "C002") {
//         $("#txtCusName").val("Malinga");
//         $("#txtCusAddress").val("Colombo");
//         $("#txtCusSalary").val(3000);
//     }
// });
// "";
//



//////////////////////////////////////////////////////////////////////////////////////////
loadAllItems();

function loadAllItems() {
    $("#selectItem").append("<option>I001</option>");
    $("#selectItem").append("<option>I002</option>");
    $("#selectItem").append("<option>I003</option>");
    $("#selectItem").append("<option>I004</option>");
    $("#selectItem").append("<option>I005</option>");
}


$("#selectItem").click(function () {
    var selectedItem = $("#selectItem").val();


    if (selectedItem == "I001") {
        $("#txtDescription").val("Lux");
        $("#txtUnitPrice").val(59.00);
        $("#txtQtyOnHand").val(230);
    }

    if (selectedItem == "I002") {
        $("#txtDescription").val("Clogard");
        $("#txtUnitPrice").val(109.00);
        $("#txtQtyOnHand").val(230);
    }


});

///////////////////////////////////////////////////////////////////////////////////////////


$("#btnadd").click(function () {
    $("#tblOrder tr").off("dblclick");
    var itemCode = $('#selectItem').val();
    var itemName = $("#txtDescription").val();
    var itemPrice = $('#txtUnitPrice').val();
    var buyAmount = $('#qty').val();
    var total = itemPrice * buyAmount;


    var row = "<tr>" +
        "<td>" + itemCode + "</td>" +
        "<td>" + itemName + "</td>" +
        "<td>" + itemPrice + "</td>" +
        "<td>" + buyAmount + "</td>" +
        "<td>" + total + "</td>" +
        "</tr>";


    $("#tblOrder").append(row);
    calculateTotal();

    $("#tblOrder tr").on("dblclick", function () {
        $(this).remove();
        calculateTotal();
    });


});


function calculateTotal() {
    var total = 0;
    var numberofRows = $("#tblOrder tr").length;
    for (var i = 0; i < numberofRows; i++) {
        var t = $("#tblOrder tr:nth-child(" + (i + 1) + ") td:nth-child(5)").text();
        var number = parseFloat(t);
        total = total + number;
    }

    $("#total").text(total);
}





////////////////////////////////////////////////////////////////////////////////////////////

// $(document).ready(function () {
//
//      loadCustomers(0);
//     addTable();
//
//
// });
// initializePagination();
// function initializePagination(){
//
//     var totalPages = parseInt(customers.length/ 5 + (((customers.length % 5) !== 0)? 1: 0));
//     $(".page-item").remove();
//
//     var html = '<li class="page-item"><a class="page-link" href="javascript:void(0)">&laquo;</a></li>';
//
//     for(var i=0;i<totalPages;i++){
//         html+='<li class="page-item"><a class="page-link" href="#">' + (i+1) +'</a></li>'
//     }
//
//     html+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>';
//
//     $(".card-footer .pagination").html(html);
//
//     $(".card-footer .pagination .page-item:first-child").click(function(){
//         loadCustomers(0);
//     });
//
//     $(".card-footer .pagination .page-item:last-child").click(function(){
//         loadCustomers(totalPages - 1);
//     });
//
//     $(".card-footer .pagination .page-item").click(function(){
//         var number = parseInt($(this).find("a").text());
//         if(number){
//             loadCustomers(number-1);
//         }
//     })
//
// }
