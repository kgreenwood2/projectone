$(document). ready(
    function() {
        // event handlers
        $("#calculateFee").click(calculateFee);


        // other functions
        function calculateFee()
        {

            // get all input from boxes and parse to number data type
            var numOfBooks = $("#numOfBooks").val();
            numOfBooks = parseFloat(numOfBooks);

            var daysLate = $("#daysLate").val();
            daysLate = parseFloat(daysLate * 0.25);



            var numOfDVDs = $("#numOfDVDs").val();
            numOfDVDs = parseFloat(numOfDVDs);

            var daysLateDVD = $("#daysLateDVD").val();
            daysLateDVD = parseFloat(daysLateDVD * 0.50);



            // calculate cost and time


            var totalCostDVD = numOfDVDs * daysLateDVD ;

            var totalBooks = numOfBooks * daysLate;

            var totalCost = totalBooks + totalCostDVD;



            // put output into paragraphs


            $("#costOutput").text(`Your total late fees are $ ${totalCost.toFixed(2)} `);


        }

    }
);

$(document). ready(
    function() {
        // event handlers
        $("#calculateSplit ").click(calculateSplit);


        // other functions
        function calculateSplit()
        {

            // get all input from boxes and parse to number data type
            var numOfPizzas = $("#numOfPizzas").val();
            numOfPizzas = parseFloat(numOfPizzas * 15);

            var amountOfToppings = $("#amountOfToppings").val();
            amountOfToppings = parseFloat(amountOfToppings * 1.25);



            var numOfPeople = $("#numOfPeople").val();
            numOfPeople = parseFloat(numOfPeople);




            // calculate cost and time


            var totalCost = numOfPizzas + amountOfToppings;

            var costSplit = totalCost / numOfPeople;




            // put output into paragraphs


            $("#splitOutput").text(`Your total for this bill is $ ${costSplit.toFixed(2)} `);


        }

    }
);