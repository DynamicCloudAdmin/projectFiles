document.getElementById("LoginNowButton").addEventListener("click", function() {

    document.getElementById("LoginToTenantCircle").style.display = "block";

    var FirstEmailID = document.getElementById("FirstLoginEmail").value;
    var EmailIDNow = document.getElementById('email').value;
    var PasswordNow = document.getElementById('password').value;
    var SelTenNow = document.getElementById('AllTensAtLogin').value;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var CheckType = document.getElementById("TenAllowUsingTenAcc").checked;
    if (CheckType == true) {
        var WhichOpt = "TenAccess"
    } else {
        var WhichOpt = "WithoutTenAccess"
    }

    if (PasswordNow == "" || EmailIDNow == "") {

        document.getElementById("LoginToTenantCircle").style.display = "none";

        var ThisMsg = "Please provide all inputs before you can log in."
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 5000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
            clearInterval(MyTimerFooter);
        }

    } else {

        // e.preventDefault();
        $.ajax({
            url: '/LoginCustomer', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            datatype: "JSON",
            data: {
                'EmailID': EmailIDNow,
                'Password': PasswordNow,
                'SelTenNow': SelTenNow,
                'WhichOpt': WhichOpt,
                'FirstEmailID': FirstEmailID,
                'TRPKey': TRPKey
            },
            success: function(data) {

                if (data.message) {

                    var SItem = data.message.replace(/[\r\n]+/gm, "");
                    var FinalItem = SItem.replaceAll(' ', '');

                    if (FinalItem == "Success") {

                        document.getElementById("LoginToTenantCircle").style.display = "none";

                        //var testuser = EmailIDNow;
                        var testuser = document.getElementById("FirstLoginEmail").value;
                        var res = testuser.split("@");
                        var FinalUserNameNow = res[0];

                        document.getElementById("LoggedInUserName").innerHTML = FinalUserNameNow;
                        document.getElementById("LoginRegisterModal").style.display = "none";

                        //GetReadyStatusFunction(EmailIDNow)
                        //document.getElementById("RefAllAVDTenNow").click();
                        //document.getElementById("RefAllTaskRunningListButton").click();                        
                        //document.getElementById("MENUSwitchToHostsHealth").click();
                        //document.getElementById("RefAllAVDTenNow").click();

                        //GlobalTimerToExecuteForAll()
                    }

                    if (FinalItem == "Failed") {
                        swal("Info", "Error logging in!", "error");
                        document.getElementById("LoginToTenantCircle").style.display = "none";

                    }
                    if (FinalItem == "NoTenants") {
                        swal("Info", "Please register a Tenant under the management of SuperNova.", "error");
                        document.getElementById("LoginToTenantCircle").style.display = "none";

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

function GetReadyStatusFunction(element) {

    var ThisEmailIDNow = element
    var ThisMsg = "Collecting Info & Status. Please Wait..."
    document.getElementById("FootMessageID").innerHTML = ThisMsg;
    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
    document.getElementById("GettingReadyID").style.display = "block";

    var myTimerCheckReadyStatus = setInterval(function() { FuncGetReady() }, 1000);

    function FuncGetReady() {

        $.ajax({
            url: '/CheckGettingReadyFile', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'EmailID': ThisEmailIDNow
            },
            success: function(data) {
                if (data.message) {

                    var SItem = data.message.replace(/[\r\n]+/gm, "");
                    var FinalItem = SItem.replaceAll(' ', '');

                    if (FinalItem == "ReadyNow") {
                        // Let timer run to collect                                                 
                        clearInterval(myTimerCheckReadyStatus); // Clear Timer here to ensure it doesn't run once again and then append below data
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                    }


                } else {
                    alert("Connection to CloudNova is unavailable");
                }
            },
            error: function() {
                alert("Connection to CloudNova is unavailable");
            }
        });


    }

}

$("#AddNewTenantFromLogin").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "block";
    document.getElementById("AddTenantModalToDispAndClose").style.zIndex = "24";

    document.getElementById("TenUsingGOVCloud").checked = false;
    document.getElementById("DBManagedSP").checked = true;
    document.getElementById("DBManagedTenant").checked = false;

    document.getElementById("ConUserNameNew").value = "NOT NEEDED";
    document.getElementById("GlobalPassNow").value = "NOT NEEDED";

});