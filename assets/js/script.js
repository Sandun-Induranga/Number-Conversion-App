$("#txtNumber").on("keyup", function(e) {
    if ($("#cmbInput").val() == 1){
        switch ($("#cmbResult").val()) {
            case "1":
                console.log(($("#txtNumber").val() >>> 0).toString(2));
                break;
        
            case "2":
                console.log(($("#txtNumber").val() >>> 0).toString(2))
                break;

            case "3":
                console.log(($("#txtNumber").val() >>> 0).toString(8));
                break;
        }
    }
});
