$(document).ready(function () {

     loadCustomers();


});

function loadCustomers() {

    $("#tableJson").empty();
    var ajaxConfig={
        url:"http://localhost:8080/pos/api/v1/customers6",
        method:"GET",
        async:'json'
    }

    ////////////////////////////////////
    $.ajax(ajaxConfig).done(function (customers,status,jQXHB) {
        for(var i =0;i< customers.length;i++){
            if (i == customers.length) break;
            var html = '<option>'+ customers[i].name+'</option>';
            $("#customerSelect").append(html);
        }
    }).fail(function (jqXHB ,status,error) {
        console.log(error)
    });
}
// $("#customerSelect").click(function () {
//     var selected = $("#customerSelect").val();
//
//     for (var i = 0; i < ( customers.length); i++) {
//         if (i == customers.length) break;
//
//         if(selected == customers[i].id){
//             var nn =customers[i].name;
//             $("#txtCusName").val(nn);
//             break;
//         }
//     }
// });
///////////////////////////////////////////////////////////////////////////////////////

function loadAllItems(page) {



    var startingIndex = (page * 5);
    for (var i = startingIndex; i < (startingIndex + 5); i++) {

        if (i == items.length) break;

        var  html = '<option>'+items[i].code+'</option>';

        $("#selectItem").append(html);
    }

}
$("#selectItem").click(function () {
    var selected = $("#selectItem").val();

    for (var i = 0; i < ( 5); i++) {
        if (i == items.length) break;


        if(selected == items[i].code){
            var v1 =items[i].description;
            $("#txtDescription").val(v1);
            var v2 =items[i].utPrice;
            $("#txtUnitPrice").val(v2);
            var v3 =items[i].qty;
            $("#txtQtyOnHand").val(v3);
            break;
        }
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
     //
     // var  bol =myCheck(itemCode);
     //
     // if(bol = false){
     //     return;
     // }

    var row = "<tr>" +
        "<td>" + itemCode + "</td>" +
        "<td>" + itemName + "</td>" +
        "<td>" + itemPrice + "</td>" +
        "<td>" + buyAmount + "</td>" +
        "<td>" + total + "</td>" +
        '<td><div><i class="fa fa-trash"></i></div></td>' +
        "</tr>";

//Add to table
      app(row);

    $("#tblOrder tr td:last-child div").off("click");
    $("#tblOrder tr td:last-child div").click(function(){
        if (confirm("Are you sure whether you want to delete this Student?")){
            $(this).parents("tr").fadeOut(1000, function(){
                $(this).remove();
            });
        }
        calculateTotal()
    });


});
function saveOrders (page) {

    $("#placeOrder").click(function () {

        var numberofRows = $("#tblOrder tr").length;
        var odId = $("#odNo").text();

        for (var i = 0; i < numberofRows; i++) {
            var itemid = $("#tblOrder tr:nth-child(" + (i + 1) + ") td:nth-child(1)").text();
            var price = $("#tblOrder tr:nth-child(" + (i + 1) + ") td:nth-child(3)").text();
            var qty = $("#tblOrder tr:nth-child(" + (i + 1) + ") td:nth-child(4)").text();
            var tota = $("#tblOrder tr:nth-child(" + (i + 1) + ") td:nth-child(5)").text();

            if (i > 0) {
                list.push({
                    orderId: odId,
                    itemId: itemid,
                    uprice: price,
                    orqty: qty,
                    total: tota

                });
            }
        }
        console.log(list);
        changeODNo();

    });
}





function app(a) {
    $("#tblOrder").append(a);
    calculateTotal();
}

function calculateTotal() {
    var total = 0;
    var numberofRows = $("#tblOrder tr").length;
    for (var i = 1; i < numberofRows; i++) {
        var t = $("#tblOrder tr:nth-child("+(i+1)+") td:nth-child(5)").text();
        var number = parseFloat(t);
        total = total + number;
    }

    $("#total").text(total);
}

var s = list.length;
var last = customers[s-1].id;
$("#odNo").text(last);
//
// function myCheck(selectId){
//     var numberofRows = $("#tblOrder tr").length;
//     var itemCode = $('#selectItem').val();
//     var itemName = $("#txtDescription").val();
//     var itemPrice = $('#txtUnitPrice').val();
//     var total = itemPrice * buyAmount;
//     for (var i = 0; i < numberofRows; i++) {
//         var id = $("#tblOrder tr:nth-child("+(i+1)+") td:nth-child(1)").text();
//
//
//          if(selectId ==  id){
//             var oldqty = $("#tblOrder tr:nth-child("+(i+1)+") td:nth-child(4)").text();
//
//             var buyAmount = $('#qty').val();
//             buyAmount= parseInt(buyAmount);
//             oldqty=parseInt(oldqty);
//
//             var buyAmount = oldqty+buyAmount;
//
//
//
//
//              var row = "<tr>" +
//                  "<td>" + itemCode + "</td>" +
//                  "<td>" + itemName + "</td>" +
//                  "<td>" + itemPrice + "</td>" +
//                  "<td>" + buyAmount + "</td>" +
//                  "<td>" + total + "</td>" +
//                  '<td><i class="fa fa-trash"></i></td>' +
//                  "</tr>";
//
//
//
//              $("#tblOrder").append(row);
//              calculateTotal();
//              return false;
//          }
//     }
// }
