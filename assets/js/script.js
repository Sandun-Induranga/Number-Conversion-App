$("#txtNumber").on("keypress", function(e) {
    if ($("#cmbInput").val() == 1){
        switch ($("#cmbResult").val()) {
            case "1":
                alert("Decimal")
                break;
        
            case "2":
                alert("Binary")
                break;
        }
    }
});
