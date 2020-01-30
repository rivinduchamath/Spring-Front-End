//$(document).ready(function () {

  // loadCustomers();
//});

// function loadCustomers() {
 //    $("#tbl-students tbody tr").remove();
 //    var http = new XMLHttpRequest();
 //
 //   // http.setRequestHeader('Content-Type', 'application/json');
 //
 //    http.onreadystatechange = function () {
 //        if (http.status == 200 && http.readyState == 4) {
 //            var customers = JSON.parse(http.responseText);
 //            for (var i = 0; i < customers.length; i++) {
 //
 //                if (i == customers.length) break;
 //
 //                var html = '<tr>' +
 //                    '<td>' + customers[i].id + '</td>' +
 //                    '<td>' + customers[i].name + '</td>' +
 //                    '<td>' + customers[i].address + '</td>' +
 //                    '<td><i class="fa fa-trash"></i></td>' +
 //                    '</tr>';
 //
 //                $("#tbl-students tbody").append(html);
 //            }
 //         //  initializePagination(+http.getResponseHeader("X-Count"));
 //        }
 //    }
 //    http.open('GET', 'http://localhost:8080/pos/api/v1/customers6', true);
 // http.send();




//         $("#tableJson").empty();
//         var ajaxConfig={
//             url:"http://localhost:8080/pos/api/v1/customers6",
//             method:"GET",
//             async:'json'
//         }
//         var i =0;
//         $.ajax(ajaxConfig).done(function (customers,status,jQXHB) {
//             for(var i =0;i< customers.length;i++){
//                 var html = '<tr>' +
//                     '<td>' + customers[i].id + '</td>' +
//                     '<td>' + customers[i].name + '</td>' +
//                     '<td>' + customers[i].address + '</td>' +
//                     '<td><i class="fas fa-trash"></i></td>' +
//                     '</tr>';
//                 $("#tbl-customers tbody").append(html);
//             }
//         }).fail(function (jqXHB ,status,error) {
//             console.log(error)
//         })
// }
// //////////////////////////////////////////////////////////////////////////



// $("#tbl-customers tbody").on('click', "tr td:last-child", function (eventData) {
//     var row = $(this).parents("tr");
//     eventData.stopPropagation();
//     if (confirm("Are you sure whether you want delete this customer?")) {
//         $.ajax({
//             method: 'DELETE',
//             url: 'http://localhost:8080/pos/api/v1/customers?customerId=' + row.find('td:first-child').text(),
//             async: true
//         }).done(function (response, status, jqXHR) {
//             row.remove();
//         }).fail(function (jqXHR, status, error) {
//             console.log(error);
//         });
//     }
// });

// $("#BtnUpdate").on('click', function () {

//     var customer = {
//         id: $('#txtId').val(),
//         name: $('#txtName').val(),
//         address: $('#txtCustomerAddress').val()
//     };

//     var ajaxConfig={
//         url:"http://localhost:8080/pos/api/v1/customers6",
//         method:"PUT",
//         data:customer+"&action=update"
//     }
//     $.ajax(ajaxConfig).done(function (resp) {
//         alert(resp);
//         getAllCustomers();
//     })

//     var i =0;
//     $.ajax(ajaxConfig).done(function (response,status,jQXHB) {

//         var html = '<tr>' +
//             '<td>' + customer.id + '</td>' +
//             '<td>' + customer.name + '</td>' +
//             '<td>' + customer.address + '</td>' +
//             '<td><i class="fas fa-trash"></i></td>' +
//             '</tr>';
//         $("#tbl-customers tbody").append(html);
//         $("#txtId,#txtName,#txtCustomerAddres").val("");
//         $("#txtId").focus();

//     }).fail(function (jqXHB ,status,error) {
//         console.log(error)
//     })

// });
// ///////////////////////////////////////////////////////////////////////////////
// $("#tbl-customers tbody").on('click','tr td i',function(){

// });
// ///////////////////////////////////////////////////////////////////////////////
// //
// $("#btnsubmit").click(function () {
//     var customer = {
//         id: $("#txtId").val(),
//         name: $("#txtName").val(),
//         address: $("#txtCustomerAddress").val()
//     };
//     // var http = new XMLHttpRequest();
//     // http.onreadystatechange = function () {
//     //     if (http.readyState == 4) {
//     //         if (http.status == 201) {
//     //             var html = "<tr>" +
//     //                 "<td>"+ customer.id+"</td>" +
//     //                 "<td>"+ customer.name+"</td>" +
//     //                 "<td>"+ customer.address+"</td>" +
//     //                 '<td><i class="fa fa-trash"></i></td>' +
//     //                 "</tr>";
//     //             $("#tbl-customers tbody").append(html);
//     //             $("#txtId, #txtName, #txtCustomerAddress").val("");
//     //             $("#txtId").focus();
//     //         } else {
//     //             console.log("Fail");
//     //         }
//     //     }
//     // };
//     // http.open('POST', 'http://localhost:8080/pos/api/v1/customers', true);
//     // http.setRequestHeader("Content-Type", "application/json");
//     // http.send(JSON.stringify(customer));
//     if (!selectedRow) {
//         var ajaxConfig = {
//             method: 'POST',
//             url: 'http://localhost:8080/pos/api/v1/customers6',
//             async: true,
//             contentType: 'application/json',
//             data: JSON.stringify(customer)
//         };
//         $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
//             var html = "<tr>" +
//                 "<td>" + customer.id + "</td>" +
//                 "<td>" + customer.name + "</td>" +
//                 "<td>" + customer.address + "</td>" +
//                 '<td><i class="fa fa-trash"></i></td>' +
//                 "</tr>";
//             $("#tbl-customers tbody").append(html);
//             $("#txtId, #txtName, #txtCustomerAddress").val("");
//             $("#txtId").focus();
//         }).fail(function (jqXHR, status, error) {
//             console.log(error);
//         });
//     } else {
//         var ajaxConfig = {
//             method: 'PUT',
//             url: 'http://localhost:8080/pos/api/v1/customers',
//             async: true,
//             contentType: 'application/json',
//             data: JSON.stringify(customer)
//         };
//         $.ajax(ajaxConfig).done(function (response, status, jqXHR) {
//             selectedRow.find("td:nth-child(2)").text(customer.name);
//             selectedRow.find("td:nth-child(3)").text(customer.address);
//         }).fail(function (jqXHR, status, error) {
//             console.log(error);
//         }).always(function(){
//             $("#btnClear").click();
//         });
//     }
// });


// //
// // // /////////////////////////////////////////////
// // $("#btnsubmit").on('click',function() {
// //     var http = new XMLHttpRequest();
// //
// //     http.onreadystatechange = function () {
// //         if (http.readyState == 4 && http.status == 200) {
// //         }
// //     };
// //     http.open('POST','http://localhost:8080/pos/api/v1/customers6', true);
// //     http.setRequestHeader('Content-Type', 'application/json');
// //
// //     var customer = {
// //         "id": $('#txtId').val(),
// //         "name": $('#txtName').val(),
// //         "address": $('#txtCustomerAddress').val()
// //     };
// //     http.send(JSON.stringify(customer));
// //
// // });




// function initializePagination(totalElements){

//     var totalPages = parseInt(totalElements/ 5 + (((totalElements % 5) !== 0)? 1: 0));
//     $(".page-item").remove();

//     var html = '<li class="page-item"><a class="page-link" href="javascript:void(0)">&laquo;</a></li>';

//     for(var i=0;i<totalPages;i++){
//         html+='<li class="page-item"><a class="page-link" href="#">' + (i+1) +'</a></li>'
//     }

//     html+='<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>';

//     $(".card-footer .pagination").html(html);

//     $(".card-footer .pagination .page-item:first-child").click(function(){
//         loadCustomers(0);
//     });

//     $(".card-footer .pagination .page-item:last-child").click(function(){
//         loadCustomers(totalPages - 1);
//     });

//     $(".card-footer .pagination .page-item").click(function(){
//         var number = parseInt($(this).find("a").text());
//         if(number){
//             loadCustomers(number-1);
//         }
//     })

//}
