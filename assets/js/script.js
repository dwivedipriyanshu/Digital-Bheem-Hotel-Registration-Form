
    $(document).ready(function () {
        $("#room_type, #total_no_days").change(function (e) {
            e.preventDefault();
            calculateTotalAmount();
        });

        $("input[name='amenities[]']").change(function (e) {
            e.preventDefault();
            calculateTotalAmount();
        });

        $("#advance_payment").keyup(function (e) {
            e.preventDefault();
            calculateTotalAmount();
        });

        function calculateTotalAmount() {
            var room_price = $('#room_type').val();
            var total_no_days = $('#total_no_days').val();
            var total_room = room_price * total_no_days;

            var amenitiesTotal = 0;
            $("input[name='amenities[]']:checked").each(function () {
                amenitiesTotal += parseInt($(this).val());
            });

            var total_person = $('#total_Persons').val();
            var other_charges = 0;

            if (total_person > '2') {
                other_charges = (Number(total_person) - 2) * total_no_days * 1000;
            }

            var advance_payment = Number($('#advance_payment').val());
            var total_amount = total_room + amenitiesTotal + other_charges;

            if (advance_payment > total_amount) {
                alert("Advance Payment is Greater than the Balance Amount");
            } else {
                var balance_amount = total_amount - advance_payment;
                $('#balance_amount').val(balance_amount);
            }
        }
    });
