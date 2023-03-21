/*
 * socket initialization when user logged in
 * All methods that declared as function must be in separate file
 * */
function initSocket(TRPKey, FinalUserNameNow) {
    window.socket = io({
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 99999,
        transports: ["websocket"]
    });

    socket.emit('join', { TRPKey, LUser: FinalUserNameNow });
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
    socket.on('disconnect', function() {
        console.log('disconnected from server');
        socket.emit('join', { TRPKey, LUser: FinalUserNameNow });
    });

    socket.on('message', function(data) {
        console.log("DataRecevied", data);
        if (data && data.message) {
            if (data.type === "RefHostsHealth") {
                if (data.message === "FileNotFound") {
                    if (document.getElementById("WhatToGetFromServer").innerHTML === "NONE") {
                        document.getElementById("CollectingHostsStatusCircle").style.display = "none";
                    }

                } else {
                    GetHostsHealthStatusFunction(data.message)
                    document.getElementById("WhatToGetFromServer").innerHTML = "NONE";
                    document.getElementById("RefAllTaskRunningListButton").click();

                    document.getElementById("CollectingHostsStatusCircle").style.display = "none";
                }
            } else if (data.type === "UserSessionCall") {
                if (data.message === "FileNotFound") {
                    if (document.getElementById("WhatToGetFromServer").innerHTML === "NONE") {
                        document.getElementById("CollectingSessDetCircle").style.display = "none";
                    }
                } else {
                    GetSessManagerDataNFunction(data.message)
                    document.getElementById("WhatToGetFromServer").innerHTML = "NONE";
                    document.getElementById("RefAllTaskRunningListButton").click();

                    document.getElementById("CollectingSessDetCircle").style.display = "none";
                }
            }

        } else {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
        document.getElementById("CollectingHostsStatusCircle").style.display = "none";
    });
    // socket notification updater
    socket.on("notification", function(data) {
        console.log("Notification received", data)
        var datatable = document.createElement("table");
        datatable.id = 'TOPNotificationsTable'
        datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

        if (data.message) {
            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            var totNotsNow = 0

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");
                var row = datatable.insertRow(-1);

                CheckFRow = cells[0];

                if (CheckFRow == "" || CheckFRow == null) {} else {

                    if (CheckFRow == "TASKNAME") {

                        var resall = cells[1].split("#");
                        var FinalTaskStatus = resall[0];
                        var FinalTaskName = resall[1];

                        var TaskRunningPic = '<i class="fa fa-spinner fa-spin" aria-hidden="true" style="margin-right: 7px;font-size: 14px;color: #f00;margin-left: 7px;text-shadow: none;"></i>'
                        var TaskDonePic = '<i class="far fa-check-circle" aria-hidden="true" style="margin-right: 7px;font-size: 14px;color: #05ce05;margin-left: 7px;text-shadow: none;"></i>'
                        var TaskFailedPic = '<i class="fas fa-exclamation-circle" aria-hidden="true" style="margin-right: 7px;font-size: 14px;color: rgb(249, 99, 25);margin-left: 7px;text-shadow: none;"></i>'

                        if (FinalTaskStatus == "Running") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = TaskRunningPic + FinalTaskName
                            cell.style.background = "white";
                            cell.style.fontSize = "12px";
                            cell.style.lineHeight = "20px";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontFamily = "roboto";
                            cell.style.fontWeight = "500";
                            cell.style.color = "#555454";

                            ++totNotsNow;
                        }
                        if (FinalTaskStatus == "Done") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = TaskDonePic + FinalTaskName
                            cell.style.background = "white";
                            cell.style.fontSize = "12px";
                            cell.style.lineHeight = "20px";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontFamily = "roboto";
                            cell.style.fontWeight = "500";
                            cell.style.color = "#555454";

                        }
                        if (FinalTaskStatus == "Failed") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = TaskFailedPic + FinalTaskName
                            cell.style.background = "white";
                            cell.style.fontSize = "12px";
                            cell.style.lineHeight = "20px";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontFamily = "roboto";
                            cell.style.fontWeight = "500";
                            cell.style.color = "#555454";
                        }

                        var GetFurther = FinalTaskName.split(":")
                        var S1 = GetFurther[0];
                        var S2 = GetFurther[1];

                        var DispTaskLog = '<button id = "' + FinalTaskName + '" style="cursor: pointer;background: #e5ffe5;border: 1px solid #c6c6c6;border-radius: 22px;color: #4f4d4d;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right;" onclick="ShowLogForTaskRunningFunc(id)">Log</button>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = DispTaskLog;
                        cell.style.background = "white";
                        cell.style.paddingBottom = "0px";

                        var FinalToAppend = FinalTaskStatus + "#" + FinalTaskName;

                        var DismissTask = '<button id = "' + FinalToAppend + '" style="cursor: pointer;background: white;border: 0px solid #c6c6c6;border-radius: 22px;color: #ff6000;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; font-size:16px;padding:0px; margin:0px;" onclick="DismissTaskFunction(id)">X</button>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = DismissTask;
                        cell.style.background = "white";
                        cell.style.paddingBottom = "0px";
                        cell.style.paddingLeft = "0px";
                        cell.style.paddingRight = "0px";

                        var row = datatable.insertRow(-1);

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.style.background = "white";
                        cell.style.color = "rgb(135, 136, 136)";
                        cell.style.paddingBottom = "25px";
                        cell.style.fontFamily = "Roboto";
                        cell.style.fontSize = "11px";
                        cell.style.lineHeight = "15px";
                        cell.style.paddingLeft = "37px";
                        cell.style.paddingTop = "0px";

                    }
                }
            }
            var dtable = document.getElementById("TaskRunningDataDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            var FinalNumberNow = totNotsNow;
            document.getElementById("NotificationsNumberNow").innerHTML = FinalNumberNow;

            if (FinalNumberNow == 0) {
                document.getElementById("NotRunningC").style.display = "none";
            } else {
                document.getElementById("NotRunningC").style.display = "block";
            }

        } else {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });
    socket.on("SessManagerRefresh", socketEvents.CheckSessFileStatus);
    socket.on("HostHealthRefreshFileStatus", socketEvents.CheckHostHealthFileStatus);
    socket.on("connect", function() {
        socketEvents.CheckHostHealthFileStatus();
    })
}

window.socketEvents = {
    CheckSessFileStatus: function() {
        document.getElementById("CollectingSessDetCircle").style.display = "block";

        var SelTen = document.getElementById("SessManagerAavaTenListN").value;
        document.getElementById("SelectedAVDTenNow").innerHTML = "Tenant :" + SelTen;

        var ThisTenant = document.getElementById("SessManagerAavaTenListN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var TRPKey = document.getElementById("TRPKeyN").value;
        if (socket) {
            socket.emit('CheckSessFileStatus', { TRPKey, ThisLUser: FinalUserNameNow, ThisTen: ThisTenant }, function(data) {
                if (data.message) {

                    if (data.message === "FileNotFound") {
                        if (document.getElementById("WhatToGetFromServer").innerText === "NONE") {
                            document.getElementById("CollectingSessDetCircle").style.display = "none";
                        }
                    } else {
                        GetSessManagerDataNFunction(data.message)
                        document.getElementById("WhatToGetFromServer").innerHTML = "NONE";
                        document.getElementById("CollectingSessDetCircle").style.display = "none";
                    }
                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }
            });
        }
    },
    RefHostsHealth: function() {
        document.getElementById("CollectingHostsStatusCircle").style.display = "block";

        var DemoOrNot = document.getElementById("DOrNot").innerHTML;
        if (DemoOrNot === "DEMO") {
            document.getElementById("FootMessageID").innerHTML = "Task is not available in Demo Mode!";
            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
            document.getElementById("GettingReadyID").style.display = "none";
            var MyTimerFooter = setInterval(function() {
                FunctionFooterDIV()
            }, 3000);

            function FunctionFooterDIV() {
                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                clearInterval(MyTimerFooter);
            }

            document.getElementById("CollectingHostsStatusCircle").style.display = "none";
        } else {

            document.getElementById("NotRunningC").style.display = "block";

            document.getElementById("SwitchToHostPoolsStatusNN").click();

            var ThisTen = document.getElementById("HOSTHAvaTenListN").value;
            console.log("==========================================>", ThisTen)
            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var ThisLUser = res[0];

            var TRPKey = document.getElementById("TRPKeyN").value;
            if (socket) {
                socket.emit("RefHostsHealth", { ThisTen, ThisLUser, TRPKey }, function(data) {
                    if (data.message) {
                        document.getElementById("WhatToGetFromServer").innerHTML = "HOSTHEALTHITEMS";
                    } else {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }
                    document.getElementById("CollectingHostsStatusCircle").style.display = "none";
                })
            } else {
                document.getElementById("CollectingHostsStatusCircle").style.display = "none";
            }
        }
    },
    CheckHostHealthFileStatus: function() {

        document.getElementById("CollectingHostsStatusCircle").style.display = "block";

        var SelTen = document.getElementById("HOSTHAvaTenListN").value;
        document.getElementById("SelectedAVDTenNow").innerHTML = "Tenant :" + SelTen;

        var ThisTen = document.getElementById("HOSTHAvaTenListN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var ThisLUser = res[0];

        var TRPKey = document.getElementById("TRPKeyN").value;
        if (socket) {
            socket.emit("CheckHostHealthFileStatus", { ThisTen, ThisLUser, TRPKey }, function(data) {
                if (data.message) {

                    if (data.message === "FileNotFound") {
                        if (document.getElementById("WhatToGetFromServer").innerHTML === "NONE") {}

                    } else {
                        GetHostsHealthStatusFunction(data.message)
                        document.getElementById("WhatToGetFromServer").innerHTML = "NONE";
                        // document.getElementById("RefAllTaskRunningListButton").click();
                    }

                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }
                document.getElementById("CollectingHostsStatusCircle").style.display = "none";
            })
        } else {

            document.getElementById("CollectingHostsStatusCircle").style.display = "none";
        }
    }
};