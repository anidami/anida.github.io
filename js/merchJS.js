
$(document).ready(function() {
    $('#ticketSelectionForm').submit(function(e) {
        e.preventDefault();
        let merchType = $('#merchType').val();
        let quantity = $('#quantity').val();


        let totalPrice = calculateTotalPrice(merchType, quantity);
        alert('Thank you for your purchase! Total Price: $' + totalPrice.toFixed(2));
    });

    function calculateTotalPrice(merchType, quantity, ) {

        let totalPrice = 0;
        let discount = 0;
        switch (merchType) {
            case 'book':
                totalPrice = 30;
                break;
            case 't-shirt':
                totalPrice = 80;
                break;
            case 'overalls':
                totalPrice = 150;
                break;
        }


        let finalPrice = (totalPrice * quantity);

        return alert('Merch purchase successful!\nTotal Price: $' + totalPrice + '\nFinal Price: $' + finalPrice);
    }
});