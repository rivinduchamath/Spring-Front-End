// $(document).ready(function () {

//     initializePagination();
//     loadItems(0);
//     lastItemCode();
//     function lastItemCode() {
//         var itemCode = items.length + 1;
//         if (itemCode < 10) {
//             nextId = "I00" + itemCode;
//             $("#itemCode").val(nextId)

//         } else if (itemCode < 100) {
//             nextId = "I0" + itemCode;
//             $("#itemCode").val(nextId)

//         } else {
//             nextId = "I" + itemCode;
//             $("#itemCode").val(nextId)

//         }
//     }
// })

// function loadItems(page) {

//     $("#item tbody tr").remove();


//     var startingIndex = (page * 5);

//     for (var i = startingIndex; i < (startingIndex + 5); i++) {
//         if (i == items.length) break;
//         var html = "<tr>" +
//             "<td>" + items[i].code + "</td> " +
//             "<td>" + items[i].description + "</td> " +
//             "<td>" + items[i].utPrice + "</td>" +
//             "<td>" + items[i].qty + "</td>" +
//             " <td><i class='fa fa-trash'></i> </td> " +
//             "</tr>";
//         $("#item tbody").append(html);

//     }

// }

// function initializePagination() {
//     var totalPages = parseInt(items.length / 5 + (((items.length % 5) != 0) ? 1 : 0));
//     $(".page-item").remove();

//     var html = '<li class="page-item"><a class="page-link" href="javascript:void(0)">&laquo;</a></li>';
//     for (var i = 0; i < totalPages; i++) {
//         html += '<li class="page-item"><a class="page-link" href="#">' + (i + 1) + '</a></li>'
//     }

//     html += '<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>';

//     $(".pagination").html(html);

//     $(".pagination .page-item:first-child").click(function () {
//         loadItems(0);
//     });

//     $(".pagination .page-item:last-child").click(function () {
//         loadItems(totalPages - 1);
//     });

//     $(".pagination .page-item").click(function () {
//         var number = parseInt($(this).find("a").text());
//         if (number) {
//             loadItems(number - 1);
//         }
//     });


// }
// $(".saveitem").on('click', function () {

//     var html = "<tr>" +
//         "<td>" + $("#itemCode").val() + "</td> " +
//         "<td>" + $("#itemDesc").val() + "</td> " +
//         "<td>" +$("#unitPrice").val() + "</td>" +
//         "<td>" + $("#qtyOnHand").val()  + "</td>" +
//         " <td><i class='fa fa-trash'></i> </td> " +
//         "</tr>";
//     $("#item tbody").append(html);

//     lastItemCode();

// });
// $("#item").on('click', 'tbody tr td i', function () {

//     var del = $(this).closest("tr");
//     if (confirm('Are you want to delete?')) {

//         del.fadeOut(1000).remove();
//     }

// });
// $(".clearitem").on('click',function () {

//     $("#itemDesc").val('').attr("placeholder", "Item Description");
//     $("#itemDesc").focus();
//     $("#unitPrice").val('').attr("placeholder", "Unit Price");
//     $("#qtyOnHand").val('').attr("placeholder", "Qunatity on Hand");
// })
