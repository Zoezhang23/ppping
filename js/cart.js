$(function() {
    cal();
    //checked 
    $('.checkall').change(function() {
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    })
    $('.j-checkbox').change(function() {
        if ($(".j-checkbox:checked").length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', $(this).prop('checked'));
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    });
    //increase item
    $('.increment').click(function() {
            var num = $(this).siblings('.itxt').val();
            num++;
            $(this).siblings('.itxt').val(num);
            //according the structure to use the relationship
            // parent().parent() = parents('p-num')
            var pri = $(this).parents('.p-num').siblings('.p-price').html().substr(1);

            $(this).parents('.p-num').siblings('.p-sum').html('€' + (num * pri).toFixed(2));
            cal();
        })
        //decrease item
    $('.decrement').click(function() {
            var num = $(this).siblings('.itxt').val();
            if (num == 1) {
                return false;
            }
            num--;
            $(this).siblings('.itxt').val(num);
            //according the structure to use the relationship
            var pri = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
            $(this).parents('.p-num').siblings('.p-sum').html('€' + (num * pri).toFixed(2));
            cal();
        })
        //change the number 
    $('.itxt').change(function() {
            var num = $(this).val();
            var pri = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
            $(this).parents('.p-num').siblings('.p-sum').html('€' + (num * pri).toFixed(2));
            cal();
        })
        // cal the total picese
    function cal() {
        var item = 0;
        var totPri = 0;
        $('.itxt').each(function(index, ele) {
            item += parseInt($(ele).val());
        });
        $('.amount-sum em').html(item);
        $('.p-sum').each(function(index, ele) {
            totPri += parseFloat($(ele).html().substr(1));
        })
        $('.price-sum em').html('€' + totPri.toFixed(2));
    }
    // remove products
    $('.p-action').click(function() {

        // $(this).siblings('.p-num').find('.itxt').val(0);
        // $(this).siblings('.p-sum').html("€0");

        $(this).parents('.cart-item').remove();
        cal();

    })
    $('.remove-batch').click(function() {
        // $(".j-checkbox:checked").parent().siblings('.p-num').find('.itxt').val(0);
        // $(".j-checkbox:checked").parent().siblings('.p-sum').html("€0");

        $(".j-checkbox:checked").parents('.cart-item').remove();
        cal();

    })
    $('.clear-all').click(function() {
        // $('.itxt').val(0);
        // $('.p-sum').html("€0");

        $('.cart-item-list').empty();
        cal();
    })
})