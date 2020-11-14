$(document).ready(

    function () {
        // event handlers
        $("#tabs a").click(showTab);
        $("input").change(orderPizza);
        $("#name").change(doSomething);
        $("#address").change(doSomething2);
        $("#phone").change(doSomething3);


        function doSomething() {

            var output = $("#name").val();

            $("#confirmName").text(output);

        }

        function doSomething2() {

            var output2 = $("#address").val();

            $("#confirmAddress").text(output2);

        }

        function doSomething3() {

            var output3 = $("#phone").val();

            $("#confirmNumber").text(output3);

        }



        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }




        function orderPizza() {

            var checkedBoxes = $("input[name=meatTopping]:checked");
            var totalMeats = checkedBoxes.length;

            var meatTotal = totalMeats * 1.50;







            var checkedBoxes2 = $("input[name=topping]:checked");
            var numSelected = checkedBoxes2.length;
            var veggieTotal = numSelected * 1;


            var checkedBox3 = $("input[name=crust]:checked");


            var checkedBox4 = $("input[name=size]:checked");



            var deliveryFee = 2;



            var productSummary = "         ";



            var subtotal = 0;


            checkedBoxes.each(function() {
                // add the price to the total variable
                subtotal += $(this).data("price");

                // concatenate the value attribute to the string variable
                productSummary += jQuery(this).val();

                productSummary += " ";




            });

            var productSummary2 = "         ";
            var subtotal2 = 0;
                 checkedBoxes2.each(function() {
                    subtotal2 += $(this).data("price");
                    productSummary2 += jQuery(this).val();
                    productSummary2 += " ";
                 });


                    var selectedButton = $("input[name=size]:checked");


                    var crustCost = selectedButton.data("crust");

                    var orderTotal = veggieTotal + meatTotal + crustCost + deliveryFee;

                    var salesTax = orderTotal * 0.051;

                    var grandTotal = orderTotal + salesTax;

                    $("#crust").text(checkedBox3.val());
                    $("#meats").text(productSummary);
                    $("#veggies").text(productSummary2);
                    $("#summary").text(checkedBox4.val());
                     $("#fee").text("$" + deliveryFee.toFixed(2));

                     $("#salesTax").text("$" + salesTax.toFixed(2));
                    $("#grandTotal").text("$" + grandTotal.toFixed(2));

        }
    });