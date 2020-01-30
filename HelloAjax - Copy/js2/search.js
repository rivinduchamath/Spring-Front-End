loadAllCustomes();

function loadAllCustomes() {
    $("#customerSelect").append("<option>C001</option>");
    $("#customerSelect").append("<option>C002</option>");
    $("#customerSelect").append("<option>C003</option>");
    $("#customerSelect").append("<option>C004</option>");
    $("#customerSelect").append("<option>C005</option>");
}


$("#customerSelect").click(function () {
    var selected = $("#customerSelect").val();
    $("#txtCusID").val(selected);

    if (selected == "C001") {
        $("#txtCusName").val("Dasun");
        $("#txtCusAddress").val("Galle");
        $("#txtCusSalary").val(10000);
    }

    if (selected == "C002") {
        $("#txtCusName").val("Malinga");
        $("#txtCusAddress").val("Colombo");
        $("#txtCusSalary").val(3000);
    }
});
"";

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
    $("#txtCode").val(selectedItem);


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


$("#btnPlaceOrder").click(function () {
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

    $("#tblOrder tr").on("dblclick",function () {
        $(this).remove();
        calculateTotal();
    });



});


function calculateTotal() {
    var total = 0;
    var numberofRows = $("#tblOrder tr").length;
    for (var i = 0; i < numberofRows; i++) {
        var t = $("#tblOrder tr:nth-child("+(i+1)+") td:nth-child(5)").text();
        var number = parseFloat(t);
        total = total + number;
    }

    $("#total").text(total);
}


