$("#txtNumber").on("keyup", function(e) {

    switch ($("#cmbInput")) {
        case "1":
            switch ($("#cmbResult").val()) {
                case "1":
                    console.log($("#txtNumber").val());
                    break;
            
                case "2":
                    console.log(($("#txtNumber").val() >>> 0).toString(2));
                    break;
    
                case "3":
                    console.log(($("#txtNumber").val() >>> 0).toString(8));
                    break;
    
                case "4":
                    console.log(parseInt($("#txtNumber").val()).toString(16));
                    break;
            }
            break;
    
            case "2":
                switch ($("#cmbResult").val()) {
                    case "1":
                        console.log($("#txtNumber").val());
                        break;
                
                    case "2":
                        console.log(($("#txtNumber").val() >>> 0).toString(2));
                        break;
        
                    case "3":
                        console.log(($("#txtNumber").val() >>> 0).toString(8));
                        break;
        
                    case "4":
                        console.log(parseInt($("#txtNumber").val()).toString(16));
                        break;
                }
                break;
    }

});
