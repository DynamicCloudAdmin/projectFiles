const LoginBtn = document.getElementById("FirstLoginLoginButton");
$.ajax({
        url: '/ms/authUser',
        type: "GET",
        async: true,
        datatype: "JSON",
        success: function(data) {
            if (data.length == 0) {
                window.location.href = '/';
            }
            document.getElementById('FirstLoginEmail').value = data;
            LoginBtn.click();
            LoginBtn.disabled = true;
            document.getElementById('FirstLoginEmail').disabled = true;
        }
    })
    //ASHISH ADDED CODES

// ALSO NOTICE THE CHANGE ON LOGINBTN (name)
LoginBtn.addEventListener("click", function() {

    document.getElementById("CheckLoginCircle").style.display = "block";

    var EmailIDNow = document.getElementById('FirstLoginEmail').value;
    var PasswordNow = document.getElementById('FirstLoginPassword').value;
    var TRPKey = document.getElementById("TRPKeyN").value;
    var GovOrNot = document.getElementById("LoggingInGOVEnvCheckBox").checked;
    if (GovOrNot == true) {
        var FinalGOVOrNot = "GOV"
    } else {
        var FinalGOVOrNot = "NOGOV"
    }

    PasswordNow = "asdasd"
    if (PasswordNow == "" || EmailIDNow == "") {

        document.getElementById("CheckLoginCircle").style.display = "none";

        var ThisMsg = "Please provide Email ID or regisgter if you have not already registered."
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 5000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
            clearInterval(MyTimerFooter);
        }

    } else {

        if (EmailIDNow == "AUTHTEST") {

            document.getElementById("MENUSwitchToHostsHealth").click();
            document.getElementById("LoginRegisterModal").style.display = "none";
            document.getElementById("DOrNot").innerHTML = "NODEMO";

        } else {
            // e.preventDefault();
            console.log({
                'EmailID': EmailIDNow,
                'Password': PasswordNow,
                'TRPKey': TRPKey,
                'GovOrNot': FinalGOVOrNot
            })
            $.ajax({
                url: '/FirstLogin', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                datatype: "JSON",
                data: {
                    'EmailID': EmailIDNow,
                    'Password': PasswordNow,
                    'TRPKey': TRPKey,
                    'GovOrNot': FinalGOVOrNot
                },
                success: function(data) {

                    if (data.message) {

                        var SItem = data.message.replace(/[\r\n]+/gm, "");
                        var FinalItem = SItem.replaceAll(' ', '');

                        console.log("Response RECD:" + FinalItem);

                        //document.getElementById("PleaseWaitWindow").style.display = "block";

                        var RC = FinalItem.split("-")
                        var CheckThisNow = RC[0];
                        var RetTRPKeyNow = RC[1];
                        document.getElementById("TRPKeyN").value = RetTRPKeyNow;

                        if (CheckThisNow == "Success:NODEMO") {

                            document.getElementById("MENUSwitchToHostsHealth").click();

                            var testuser = document.getElementById("FirstLoginEmail").value;
                            var res = testuser.split("@");
                            var FinalUserNameNow = res[0];

                            document.getElementById("PleaseWaitWindow").style.display = "block";
                            document.getElementById("PleaseWaitWhatAtLogin").innerHTML = "Collecting Tenants..."
                            GlobalTimerToExecuteForAll()

                            document.getElementById("LoggedInUserName").innerHTML = FinalUserNameNow;
                            document.getElementById("LoginRegisterModal").style.display = "none";

                            document.getElementById("RefAllAVDTenNow").click();
                            document.getElementById("DOrNot").innerHTML = "NODEMO";
                            CollectRBACPoliciesFunction()
                            document.getElementById("HOSTAvaSelTenButtonN").click();

                            //RefAllAVDTenNow().then(function (done) {
                            //    document.getElementById("DOrNot").innerHTML = "NODEMO";
                            //  initSocket(RetTRPKeyNow, FinalUserNameNow);
                            //    CollectRBACPoliciesFunction().then(function (ended) {
                            //    document.getElementById("HOSTAvaSelTenButtonN").click();
                            //      console.log("checking host health");
                            //   })
                            //});

                            //GlobalTimerForRefreshingTasks()

                        }
                        if (CheckThisNow == "Success:DEMO") {

                            document.getElementById("FirstLoginBox").style.marginLeft = "-700px";

                            var MyTimerUnblock = setInterval(function() {
                                FunctionUnblockNow()
                            }, 2000);

                            function FunctionUnblockNow() {

                                clearInterval(MyTimerUnblock);
                                document.getElementById("FirstLoginBox").style.display = "none";

                                //var testuser = EmailIDNow;
                                var testuser = document.getElementById("FirstLoginEmail").value;
                                var res = testuser.split("@");
                                var FinalUserNameNow = res[0];

                                document.getElementById("LoggedInUserName").innerHTML = FinalUserNameNow;
                                document.getElementById("LoginRegisterModal").style.display = "none";

                                document.getElementById("MENUSwitchToHostsHealth").click();
                                RefAllAVDTenNow().then(function(done) {
                                    initSocket(TRPKey, FinalUserNameNow);
                                    GlobalTimerToExecuteForAll()
                                })


                            }

                            document.getElementById("DOrNot").innerHTML = "DEMO";
                        }

                        if (CheckThisNow == "TRPKEYDOESNOTMATCH") {

                            document.getElementById("CheckLoginCircle").style.display = "none";

                            var ThisMsg = "Error logging in! TRP Key does not match with Azure ID."
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";

                            var MyTimerFooter = setInterval(function() {
                                FunctionFooterDIV()
                            }, 5000);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                                clearInterval(MyTimerFooter);
                            }
                        }

                        if (CheckThisNow == "NotAuthorized") {

                            document.getElementById("CheckLoginCircle").style.display = "none";

                            var ThisMsg = "Error logging in! Azure ID is not authorized to log in."
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";

                            var MyTimerFooter = setInterval(function() {
                                FunctionFooterDIV()
                            }, 5000);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                                clearInterval(MyTimerFooter);
                            }
                        }

                        if (CheckThisNow == "Failed") {

                            document.getElementById("CheckLoginCircle").style.display = "none";

                            var ThisMsg = "Error logging in! Please register if you have not already registered"
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";

                            var MyTimerFooter = setInterval(function() {
                                FunctionFooterDIV()
                            }, 5000);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                                clearInterval(MyTimerFooter);
                            }
                        }

                        if (CheckThisNow == "NoCustomers") {
                            document.getElementById("CheckLoginCircle").style.display = "none";

                            var ThisMsg = "Error logging in! Please register if you have not already registered"
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";
                            var MyTimerFooter = setInterval(function() {
                                FunctionFooterDIV()
                            }, 5000);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                                clearInterval(MyTimerFooter);
                            }
                        }

                        if (CheckThisNow == "TRIALEXPIRED") {
                            document.getElementById("CheckLoginCircle").style.display = "none";

                            var ThisMsg = "TRIAL EXPIRED!"
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";
                            var MyTimerFooter = setInterval(function() {
                                FunctionFooterDIV()
                            }, 5000);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                                clearInterval(MyTimerFooter);
                            }
                        }

                        document.getElementById("CheckLoginCircle").style.display = "none";


                    } else {
                        document.getElementById("CheckLoginCircle").style.display = "none";

                    }
                },
                error: function() {
                    document.getElementById("CheckLoginCircle").style.display = "none";
                }
            });
        }
    }

});

$("#RegisterNewUserIDButton").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "block";
    document.getElementById("RegisterToSuperNovaModal").style.zIndex = "56";

});

$("#CloseRegisterModal").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "none";

});


document.getElementById("RegisterMeButton").addEventListener("click", function() {

    document.getElementById("RegCircleFScreen").style.display = "block";

    var EmailIDNow = document.getElementById('RegisterEmailID').value;
    var YourCompany = document.getElementById('YourCompanyName').value;
    var YourTelNumber = document.getElementById('YourTelNumber').value;
    var YourAzureID = document.getElementById("AzureLoginIDForReg").value;
    var TRPKeyReg = document.getElementById("TRPKeyN").value; // Get this TRP Key from already logged in user.    

    var CopyPolFrom = "User";
    var CopyFromValue = "Nothing";

    var ProceedOrNot = "Yes"

    if (YourAzureID == "" || TRPKeyReg == "") {

        document.getElementById("RegCircleFScreen").style.display = "none";

        var ThisMsg = "Please provide all inputs."
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
            clearInterval(MyTimerFooter);
        }

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

                        document.getElementById("RefAllRBACUsers").click();

                        var ThisMsg = "Registered Successfully!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 2000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                            clearInterval(MyTimerFooter);

                            document.getElementById("RegisterToSuperNovaModal").style.display = "block";
                            document.getElementById("FirstLoginEmail").value = YourAzureID;

                        }

                    }
                    if (FinalItem == "Failed") {

                        document.getElementById("RegCircleFScreen").style.display = "none";

                        var ThisMsg = "Failed to register. Please use a different Email ID or Try again."
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
                            clearInterval(MyTimerFooter);
                        }

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