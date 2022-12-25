$("#txtNumber").on("keyup", function() {

    switch ($("#cmbInput").val()) {
        case "1":
            switch ($("#cmbResult").val()) {
                case "1":
                    $("#txtResult").val($("#txtNumber").val());
                    break;
            
                case "2":
                    $("#txtResult").val(($("#txtNumber").val() >>> 0).toString(2));
                    break;
    
                case "3":
                    $("#txtResult").val(($("#txtNumber").val() >>> 0).toString(8));
                    break;
    
                case "4":
                    $("#txtResult").val(parseInt($("#txtNumber").val()).toString(16));
                    break;
            }
            break;
    
        case "2":

            let res = parseInt($("#txtNumber").val(), 2);

            switch ($("#cmbResult").val()) {

                case "1":
                    $("#txtResult").val(res);
                    break;
            
                case "2":
                    $("#txtResult").val($("#txtNumber").val());
                    break;
    
                case "3":
                    $("#txtResult").val((res >>> 0).toString(8));
                    break;
    
                case "4":
                    $("#txtResult").val(parseInt(res).toString(16));
                    break;
            }

            break;

        case "2":

        res = parseInt($("#txtNumber").val(), 8);

        switch ($("#cmbResult").val()) {

            case "1":
                $("#txtResult").val(res);
                break;
            
            case "2":
                $("#txtResult").val($("#txtNumber").val());
                break;
    
            case "3":
                $("#txtResult").val((res >>> 0).toString(8));
                break;
    
            case "4":
                $("#txtResult").val(parseInt(res).toString(16));
                break;
        }

        break;
}

});
