$("#SetAppPasswordNowButton").click(function(e) {

    var AppPassNow = document.getElementById('AppPasswordNow').value;
    var ConfirmPassNow = document.getElementById('ConfirmClientPasswordNow').value;

    if (AppPassNow == "" || ConfirmPassNow == "") {
        alert("Please enter password!");
    } else {
        document.getElementById("AppPassScreenCircle").style.display = "block";

        $.ajax({
            url: '/CallSetAppPassowrd', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            datatype: "JSON",
            data: {
                'AppPassNow': AppPassNow,
                'ConfirmPassNow': ConfirmPassNow
            },
            success: function(data) {

                if (data.message) {

                    document.getElementById("AppPassScreenCircle").style.display = "none";
                    alert("Password has been set. Please refresh this page!")

                } else {
                    document.getElementById("AppPassScreenCircle").style.display = "none";

                }
            },
            error: function() {
                document.getElementById("AppPassScreenCircle").style.display = "none";
            }
        });
    }
});