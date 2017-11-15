$(function () {
    var fields = $('#form1 :input').change(calculate)
    $("#form1 option").text(function(i,t){
        if (this.value!=="0") 
            return t + " - " + this.value
    })

    function calculate() {
        var price = 0;
        fields.each(function () {
            price += +$(this).val();
        })
        $('#price').html(price.toFixed(2));
        $('#attendees').html(price.toFixed(2));
        $('#transport').html(price.toFixed(2));
        $('#labour').html(price.toFixed(2));
    }
})

