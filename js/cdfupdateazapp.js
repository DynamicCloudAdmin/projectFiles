$("#LogOnToAppWithPassButton").click(function(e) {

    document.getElementById('CheckAppPasswordNowCircle').style.display = "block";

    var EntAppPass = document.getElementById('EntAppPassToOpen').value;

    if (EntAppPass == "") {

        alert("Please enter application access password!");

    } else {

        var allGoodOrNot = "No";

        // e.preventDefault();
        $.ajax({
            url: '/CallCheckAppEntPass', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            datatype: "JSON",
            data: {
                'EntAppPass': EntAppPass
            },
            success: function(data) {

                if (data.message) {

                    document.getElementById("CheckAppPasswordNowCircle").style.display = "none";

                    var SItem = data.message.replace(/[\r\n]+/gm, "");
                    var FinalItem = SItem.replaceAll(' ', '');

                    if (FinalItem == "OK") {
                        document.getElementById("RegisterAppDModBox").style.display = "block";
                        document.getElementById("CheckAppPassNowMod").style.display = "none";
                        allGoodOrNot = "Yes";
                    }

                    if (FinalItem == "FAILED") {

                        alert("Incorrect password!");
                    }


                } else {
                    document.getElementById("CheckAppPasswordNowCircle").style.display = "none";

                }
            },
            error: function() {
                document.getElementById("CheckAppPasswordNowCircle").style.display = "none";
            }
        });

        if (allGoodOrNot == "Yes") {

            // e.preventDefault();
            $.ajax({
                url: '/CallGetAuthIDNow', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                datatype: "JSON",
                data: {
                    'EntAppPass': EntAppPass
                },
                success: function(data) {

                    if (data.message == "FileNotFound") {

                        console.log("AuthIDNotFound");

                    } else {

                        var SItem = data.message.replace(/[\r\n]+/gm, "");

                        var res = SItem.split(";");
                        var FinalTenID = res[0];
                        var FinalClientID = res[1];
                        var FinalSec = res[2];
                        var AppRedirectURI = res[3];

                        document.getElementById("YourAppClientID").value = FinalClientID;
                        document.getElementById("YourClientIDSecHere").value = FinalSec;
                        document.getElementById("YourClientIDTenantIDHere").value = FinalTenID;
                        document.getElementById("EntRedirectURIHere").value = AppRedirectURI;



                    }

                },
                error: function() {
                    document.getElementById("CheckAppPasswordNowCircle").style.display = "none";
                }
            });


        }
    }



});

$("#RegisterNewUserIDButton").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "block";
    document.getElementById("RegisterToSuperNovaModal").style.zIndex = "56";

});



$("#RegisterAppButtonNowDD").click(function(e) {

    var FinalClientIDNow = document.getElementById('YourAppClientID').value;
    var FinalSecNow = document.getElementById('YourClientIDSecHere').value;
    var FinalTenIDNow = document.getElementById('YourClientIDTenantIDHere').value;
    var RedirectURI = document.getElementById('EntRedirectURIHere').value;

    document.getElementById("LoginToTenantCircleRegisterApp").style.display = "block";

    if (FinalClientIDNow == "" || FinalSecNow == "" || FinalTenIDNow == "" || RedirectURI == "") {

        alert("Please enter all fields!");

    } else {

        // e.preventDefault();
        $.ajax({
            url: '/CallRegisterAppID', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            datatype: "JSON",
            data: {
                'FinalClientIDNow': FinalClientIDNow,
                'FinalSecNow': FinalSecNow,
                'FinalTenIDNow': FinalTenIDNow,
                'RedirectURI': RedirectURI
            },
            success: function(data) {

                if (data.message) {

                    document.getElementById("LoginToTenantCircleRegisterApp").style.display = "none";

                    var SItem = data.message.replace(/[\r\n]+/gm, "");
                    var FinalItem = SItem.replaceAll(' ', '');

                    if (FinalItem == "ALREADY") {

                    }

                    if (FinalItem == "SUCCESS") {

                        alert("Azure App has been registered successfully! Please navigate to application URL.");

                    }

                    document.getElementById("LoginToTenantCircleRegisterApp").style.display = "none";


                } else {
                    document.getElementById("LoginToTenantCircleRegisterApp").style.display = "none";

                }
            },
            error: function() {
                document.getElementById("LoginToTenantCircleRegisterApp").style.display = "none";
            }
        });
    }
});

document.getElementById("RegisterMeButton").addEventListener("click", function() {

    document.getElementById("RegCircleFScreen").style.display = "block";

    var EmailIDNow = document.getElementById('RegisterEmailID').value;
    var YourCompany = document.getElementById('YourCompanyName').value;
    var YourTelNumber = document.getElementById('YourTelNumber').value;
    var YourAzureID = document.getElementById("AzureLoginIDForReg").value;
    var TRPKeyReg = document.getElementById("RegTRPKeyNow").value;

    var CopyPolFrom = "User";
    var CopyFromValue = "NONE";

    var ProceedOrNot = "Yes"

    if (YourAzureID == "" || TRPKeyReg == "") {

        alert("Please provide all inputs!")
        ProceedOrNot = "No"
    }

    if (ProceedOrNot == "Yes") {
        // e.preventDefault();
        $.ajax({
            url: '/RegisterMECall', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            datatype: "JSON",
            data: {
                'EmailID': EmailIDNow,
                'YourAzureID': YourAzureID,
                'YourCompany': YourCompany,
                'YourTelNumber': YourTelNumber,
                'TRPKeyReg': TRPKeyReg,
                'CopyPolFrom': CopyPolFrom,
                'CopyFromValue': CopyFromValue
            },
            success: function(data) {

                if (data.message) {

                    var SItem = data.message.replace(/[\r\n]+/gm, "");
                    var FinalItem = SItem.replaceAll(' ', '');

                    console.log("Response RECD:" + FinalItem);
                    if (FinalItem == "Success") {

                        document.getElementById("RegCircleFScreen").style.display = "none";
                        alert("Registered Successfully!");
                    }
                    if (FinalItem == "Failed") {

                        document.getElementById("RegCircleFScreen").style.display = "none";
                        alert("Failed to register. Please use a different Email ID or Try again.");
                    }

                } else {
                    swal("Error", "Error", "error");

                }
            },
            error: function() {
                swal("Error", "Error Logging In...", "error");
            }
        });

    }

});

$("#CloseRegisterModal").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "none";

});