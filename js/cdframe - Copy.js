const NewDateAndTime = new Date().getTime();
document.getElementById("CheckIfClickedOnExecute").innerHTML = "";

$("#MoveAVDLeftRight").click(function(e) {

    var TotW = document.getElementById("AVDFullMenuDiv").clientWidth;

    if (TotW < 45) {
        //document.getElementById('AVDFullMenuDiv').setAttribute("style", "width:342px");
        document.getElementById('AVDFullMenuDiv').style.width = "342px";
        document.getElementById('AllAVDMenusNow').style.display = "block";
        document.getElementById('AVDFullMenuDiv').style.minWidth = "342px";

        document.getElementById("NMoveClass").classList.add('ri-arrow-left-s-fill');
        document.getElementById("NMoveClass").classList.remove('ri-arrow-right-s-fill');

        if (document.getElementById("DashboardPane").style.display == "block") {
            document.getElementById("DASHTopShowChart").click();
            document.getElementById("DASHRightShowChart").click();
        }

    }
    if (TotW > 340) {
        //document.getElementById('AVDFullMenuDiv').setAttribute("style", "width:43px");
        document.getElementById('AVDFullMenuDiv').style.minWidth = "41px";
        document.getElementById('AVDFullMenuDiv').style.width = "41px";
        document.getElementById('AllAVDMenusNow').style.display = "none";

        document.getElementById("NMoveClass").classList.remove('ri-arrow-left-s-fill');
        document.getElementById("NMoveClass").classList.add('ri-arrow-right-s-fill');

        if (document.getElementById("DashboardPane").style.display == "block") {
            document.getElementById("DASHTopShowChart").click();
            document.getElementById("DASHRightShowChart").click();
        }

    }
});


$("#ADAssessmentExportOutput").click(function(e) {

    e.preventDefault();

    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById('ADAssessmentTableNow'); // id of table

    for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, "Data.xls");
    } else //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
    return (sa);


});

$("#AddTenantOneNow").click(function(e) {

    e.preventDefault();
    document.getElementById("AddAzureAVDTenScreen").style.display = "inline-block";
    document.getElementById("AddOfficeTenScreen").style.display = "none";
    document.getElementById("AddADForestScreen").style.display = "none";

    document.getElementById("AddTenantOneNow").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("AddTenantTwoNow").style.background = "white";
    document.getElementById("AddTenantThreeNow").style.background = "white";

    document.getElementById("WhichTargetIsAdding").innerHTML = "AZURE-AVD";
});


$("#AddNewModulesSet").click(function(e) {

    e.preventDefault();
    document.getElementById("AddNewModulesSetMod").style.display = "block";
    document.getElementById("RefAllNewModulesFromServerButton").click();

});

$("#CloseModulesSetModNow").click(function(e) {

    e.preventDefault();
    document.getElementById("AddNewModulesSetMod").style.display = "none";

});

$("#CloseModifyProcModNowSS").click(function(e) {

    e.preventDefault();
    document.getElementById("ModifyProcAgentModSettingsMod").style.display = "none";

});

$("#ChangeExistingTenantButton").click(function(e) {

    e.preventDefault();
    document.getElementById("ChangeTenantForSetMod").style.display = "block";

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETAddNewModuleToAlreadyOpenedSet",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTens = document.getElementById("SelectATenantToBeChangedID");
                var options = document.querySelectorAll('#SelectATenantToBeChangedID option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "AZURE-AVD") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "OFFICE") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "ADFOREST") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11];
                                    CreateTempTens.add(optionR);
                                }

                            }
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

});

$("#ChangeTenantCloseAddNewModuleSetMod").click(function(e) {

    e.preventDefault();
    document.getElementById("ChangeTenantForSetMod").style.display = "none";

});

$("#CloseAddNewModuleSetMod").click(function(e) {

    e.preventDefault();
    document.getElementById("AddNewModulesToSetNowMod").style.display = "none";

});

$("#CloseAddNewModuleSetMod").click(function(e) {

    e.preventDefault();
    document.getElementById("AddNewModulesToSetNowMod").style.display = "none";

});

$("#CloseUpdateModulesInSetWindow").click(function(e) {

    e.preventDefault();
    document.getElementById("UpdateModulesInSetModWin").style.display = "none";

});

$("#AddNewModuleToAlreadyOpenedSet").click(function(e) {

    e.preventDefault();
    document.getElementById("AddNewModulesToSetNowMod").style.display = "block";

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETAddNewModuleToAlreadyOpenedSet",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTens = document.getElementById("SelectTenantForSelectedModulesD");
                var options = document.querySelectorAll('#SelectTenantForSelectedModulesD option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "AZURE-AVD") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "OFFICE") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "ADFOREST") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11];
                                    CreateTempTens.add(optionR);
                                }

                            }
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETGetModToAlreadyOpendSet",
            'userId': userId
        },
        success: function(data) {

            var CreateTempTens = document.getElementById("AvailableModulesNowToBeAddedInSeet");
            var options = document.querySelectorAll('#AvailableModulesNowToBeAddedInSeet option');
            options.forEach(o => o.remove());

            let res = data.message.replaceAll('"', "");

            var rows = res.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");
                if (cells.length > 1) {

                    var newcell = cells[0];

                    var FinalModString = cells[0] + ":" + cells[1] + ":" + cells[4];

                    if (newcell == 'Module') {

                    } else {
                        if (newcell == "" || newcell == null) {} else {

                            var optionR = document.createElement("option");
                            optionR.text = FinalModString;
                            CreateTempTens.add(optionR);

                        }
                    }

                }
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });



});

$("#ClosePowerShellCodeWind").click(function(e) {

    e.preventDefault();
    document.getElementById("AllOtherDataDivONE").style.display = "block";
    document.getElementById("AllOtherDataDivTwo").style.display = "none";

});

$("#EditPowerShellCodeButtonNow").click(function(e) {

    e.preventDefault();
    document.getElementById("AllOtherDataDivONE").style.display = "none";
    document.getElementById("AllOtherDataDivTwo").style.display = "block";

});


$("#AddTenantTwoNow").click(function(e) {

    e.preventDefault();
    document.getElementById("AddAzureAVDTenScreen").style.display = "none";
    document.getElementById("AddOfficeTenScreen").style.display = "inline-block";
    document.getElementById("AddADForestScreen").style.display = "none";

    document.getElementById("AddTenantOneNow").style.background = "white";
    document.getElementById("AddTenantTwoNow").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("AddTenantThreeNow").style.background = "white";

    document.getElementById("WhichTargetIsAdding").innerHTML = "OFFICE";

});

$("#AddTenantThreeNow").click(function(e) {

    document.getElementById("AddAzureAVDTenScreen").style.display = "none";
    document.getElementById("AddOfficeTenScreen").style.display = "none";
    document.getElementById("AddADForestScreen").style.display = "inline-block";

    document.getElementById("AddTenantOneNow").style.background = "white";
    document.getElementById("AddTenantTwoNow").style.background = "white";
    document.getElementById("AddTenantThreeNow").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";

    document.getElementById("WhichTargetIsAdding").innerHTML = "ADFOREST";

});


$("#GenerateAllAssReportNowButton").click(function(e) {

    e.preventDefault();
    document.getElementById("MAINReportDiv").style.display = "block";
    document.getElementById("MAINAssessmentDiv").style.display = "none";

});

$("#CloseReportingPane").click(function(e) {

    e.preventDefault();
    document.getElementById("MAINReportDiv").style.display = "none";
    document.getElementById("MAINAssessmentDiv").style.display = "block";

});

$("#CloseDCModuleCloseAddTenModal").click(function(e) {

    document.getElementById("DCConnectivityMod").style.display = "none";

});

$("#ADDCConnectivityButton").click(function(e) {

    var curforest = document.getElementById("ADForestsTargetList").value;
    document.getElementById("DCConnectivityMod").style.display = "block";
    document.getElementById("ThisADForestToTestCon").innerHTML = "AD Forest: " + curforest;

});

$("#DetailsModCloseAddTenModal").click(function(e) {

    document.getElementById("ShowTestDetailsMod").style.display = "none";

});

$("#SwitchToADAssessmentPanel").click(function(e) {

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("MicrosoftADAssDivData").innerHTML = RCC;

    document.getElementById("ShowCustomModulePaneNow").style.display = "none";
    document.getElementById("ShowMicrosoftADPaneNow").style.display = "block";

    document.getElementById("MSADAssessmentNameNN").innerHTML = "Microsoft Active Directory Assessment";
    document.getElementById("ADDCConnectivityButton").style.display = "block";
    document.getElementById("ADForestDiscoveryButton").style.display = "block";

    $('#SelADForestExecutionCriSel').empty();

    var xLeft = document.getElementById("SelADForestExecutionCriSel");

    var optionR = document.createElement("option");
    optionR.text = "Execute Domain Controller Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute Except Domain Controller Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute Microsoft DHCP Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute All Tests";
    xLeft.add(optionR);

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETSwitchToADAssessmentPanel",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTens = document.getElementById("ADForestsTargetList");
                var options = document.querySelectorAll('#ADForestsTargetList option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {
                                if (WhichTargetNow == "ADFOREST") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11];
                                    CreateTempTens.add(optionR);
                                }

                            }
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    document.getElementById("RefADAssessmentTestsAllButton").click();



});

$("#SwitchToOfficeAssessmentPanel").click(function(e) {

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("MicrosoftADAssDivData").innerHTML = RCC;

    document.getElementById("ShowCustomModulePaneNow").style.display = "none";
    document.getElementById("ShowMicrosoftADPaneNow").style.display = "block";

    document.getElementById("MSADAssessmentNameNN").innerHTML = "Microsoft Office Assessment";
    document.getElementById("ADDCConnectivityButton").style.display = "none";
    document.getElementById("ADForestDiscoveryButton").style.display = "none";

    $('#SelADForestExecutionCriSel').empty();

    var xLeft = document.getElementById("SelADForestExecutionCriSel");

    var optionR = document.createElement("option");
    optionR.text = "Execute All MSOnline Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute All Exchange Online Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute All Microsoft Teams Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute All SharePoint Online Tests";
    xLeft.add(optionR);
    var optionR = document.createElement("option");
    optionR.text = "Execute All OneDrive Tests";
    xLeft.add(optionR);

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETSwitchToOfficeAssessmentPanel",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTens = document.getElementById("ADForestsTargetList");
                var options = document.querySelectorAll('#ADForestsTargetList option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "OFFICE") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8];
                                    CreateTempTens.add(optionR);
                                }
                            }
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    document.getElementById("RefADAssessmentTestsAllButton").click();
});


$("#ShowCDFExecutionLog").click(function(e) {

    document.getElementById("ShowCDLogModal").style.display = "block";
    document.getElementById("RefCDLogExecutionButton").click();

});

$("#ExecutionWindowButton").click(function(e) {

    document.getElementById("ExecutionLogwindowMod").style.display = "block";
    document.getElementById("RefAllExeLogTasks").click();

});


$("#ExecutionWindowCloseRegisterModal").click(function(e) {

    document.getElementById("ExecutionLogwindowMod").style.display = "none";

});

$("#AddNewTenantNowS").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "block";

});

$("#ExeLogCloseRegisterModal").click(function(e) {

    document.getElementById("ShowCDLogModal").style.display = "none";

});


$("#CDAddNewTenant").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ManageAllTargetsPane").style.display = "block";
    document.getElementById("RefAllTenants").click();

});

$("#CDAddNewModule").click(function(e) {

    document.getElementById("ResetAllPanes").click();

    document.getElementById("ManageModulesPaneHere").style.display = "block";
    document.getElementById("RefAllModulesDataHereN").click();

    //document.getElementById("ModuleMonitoringCheckBox").checked = false;
    //document.getElementById("ModuleNotifyOrNot").value = "Disabled";

});

$("#ManageConfigSetsButton").click(function(e) {

    document.getElementById("ResetAllPanes").click();

    document.getElementById("ManageConfigSetPane").style.display = "block";
    document.getElementById("RefAllConfigSetButton").click();

    //document.getElementById("ModuleMonitoringCheckBox").checked = false;
    //document.getElementById("ModuleNotifyOrNot").value = "Disabled";

});

$("#OpenManageViews").click(function(e) {

    document.getElementById("ResetAllPanes").click();

    document.getElementById("ManageViewPaneNow").style.display = "block";
    document.getElementById("RefAllViewsHereNow").click();

    //document.getElementById("ModuleMonitoringCheckBox").checked = false;
    //document.getElementById("ModuleNotifyOrNot").value = "Disabled";

});

$("#ModuleCloseAddTenModal").click(function(e) {

    document.getElementById("AddCDNewScriptMod").style.display = "none";

});

$("#ManagementTemplatesClose").click(function(e) {

    document.getElementById("ManagemenTemplatesMod").style.display = "none";

});

$("#CDAllTemplates").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ManageTemplatesPane").style.display = "block";
    document.getElementById("RefAllNewTemplatesNowFromServer").click();



});

$("#AddNewManageAdmin").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "block";

});

$("#CloseAddTenModal").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "none";

});


$("#CDRegAdmin").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ManageAdminsPane").style.display = "block";
    document.getElementById("RefAllNewAdminsNow").click();

    //document.getElementById("RegisterToSuperNovaModal").style.display = "block";

});

$("#CloseRegisterModal").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "none";

});

$("#RefAllModulesNowButton").click(function(e) {

    // Get All Authorization Template and add to LocalStorage here
    // Auth Template for Admin will be obtained during login.

    document.getElementById("ApplyAuthTemplateNowMod").style.display = "block";

    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];
    var FinalAuthTemplate = "Auth Template";

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAuthTemplateData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ThisLUser': FinalUserNameNow,
            'FinalAuthTemp': FinalAuthTemplate
        },
        success: function(data) {

            if (data.message == "FileNotFound") {} else {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisModOrSetName = cells[1];
                    var ThisModOrSetStatus = cells[2];

                    localStorage.setItem(ThisModOrSetName, ThisModOrSetStatus);
                }
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    keys = Object.keys(localStorage);

    for (i = 0; i < localStorage.length; i++) {
        var ThisModOrOpt = localStorage.key(i);
        var SItem = localStorage.getItem(keys[i])
        var ThisTaskAvaOrNot = SItem.replace(/[\r\n]+/gm, "");

        if (ThisModOrOpt == "OPTION-Manage Modules") {

            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("CDAddNewModule").disabled = true;
                document.getElementById("CDAddNewModule").style.textDecoration = "line-through";
            } else {
                document.getElementById("CDAddNewModule").enabled = true;
                document.getElementById("CDAddNewModule").style.textDecoration = "none";
            }
        }
        if (ThisModOrOpt == "OPTION-Manage Admins") {
            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("CDRegAdmin").disabled = true;
                document.getElementById("CDRegAdmin").style.textDecoration = "line-through";
            } else {
                document.getElementById("CDRegAdmin").enabled = true;
                document.getElementById("CDRegAdmin").style.textDecoration = "none";
            }
        }
        if (ThisModOrOpt == "OPTION-Manage Templates") {
            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("CDAllTemplates").disabled = true;
                document.getElementById("CDAllTemplates").style.textDecoration = "line-through";
            } else {
                document.getElementById("CDAllTemplates").enabled = true;
                document.getElementById("CDAllTemplates").style.textDecoration = "none";
            }
        }
        if (ThisModOrOpt == "OPTION-Manage Targets") {
            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("CDAddNewTenant").disabled = true;
                document.getElementById("CDAddNewTenant").style.textDecoration = "line-through";
            } else {
                document.getElementById("CDAddNewTenant").enabled = true;
                document.getElementById("CDAddNewTenant").style.textDecoration = "none";
            }
        }
        if (ThisModOrOpt == "OPTION-Processing Agent") {
            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("ProcessAgentSetting").disabled = true;
                document.getElementById("ProcessAgentSetting").style.textDecoration = "line-through";
            } else {
                document.getElementById("ProcessAgentSetting").enabled = true;
                document.getElementById("ProcessAgentSetting").style.textDecoration = "none";
            }
        }
        if (ThisModOrOpt == "OPTION-Manage Modules Set") {
            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("OpenModuleSetPaneNow").disabled = true;
                document.getElementById("OpenModuleSetPaneNow").style.textDecoration = "line-through";
            } else {
                document.getElementById("OpenModuleSetPaneNow").enabled = true;
                document.getElementById("OpenModuleSetPaneNow").style.textDecoration = "none";
            }
        }
        if (ThisModOrOpt == "OPTION-Request Module") {
            if (ThisTaskAvaOrNot == "Unavailable") {
                document.getElementById("CDRequestForModule").disabled = true;
                document.getElementById("CDRequestForModule").style.textDecoration = "line-through";
            } else {
                document.getElementById("CDRequestForModule").enabled = true;
                document.getElementById("CDRequestForModule").style.textDecoration = "none";
            }
        }




    }

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadCDPViews', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETGetAllCDModules",
            'userId': userId
        },
        success: function(data) {

            var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>No View Found. Please create Views...</p>'
            document.getElementById("AllViewsDiv").innerHTML = RCC;

            var datatable = document.createElement("table");
            datatable.id = 'CDPViewsTable'
            datatable.setAttribute('class', 'SummaryTableClassforAzModules');

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0];
                var CheckSRow = cells[1];
                var CheckThisModCat = cells[4];

                if (CheckFRow == "" || CheckFRow == null || CheckFRow == "Module") {} else {

                    var row = datatable.insertRow(-1);

                    if (CheckFRow == "View Name") {

                    } else {

                        var ThisViewSetName = "VIEW-" + cells[0];
                        var AddOrNot = "Yes";

                        keys = Object.keys(localStorage);

                        for (t = 0; t < localStorage.length; t++) {
                            var ThisModOrOpt = localStorage.key(t);
                            var SItem = localStorage.getItem(keys[t])
                            var ThisTaskAvaOrNot = SItem.replace(/[\r\n]+/gm, "");

                            if (ThisModOrOpt == ThisViewSetName) {
                                if (ThisTaskAvaOrNot == "Unavailable") {
                                    AddOrNot = "No";
                                }
                            }
                        }

                        var AddOrNot = "Yes";

                        if (AddOrNot == "Yes") {

                            var IconClass = '<i class="fa fa-eye" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 11px;"></i>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = IconClass + cells[0];
                            cell.style.color = "#0c3d68";
                            cell.style.border = "none";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.lineHeight = "19px";
                            cell.style.background = "white";

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var LoadModule = '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:62px; padding:6px;" onclick="LoadSelectedViewFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Load</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = LoadModule;
                            cell.style.width = "70px";
                            cell.style.border = "none";
                            cell.style.background = "white";

                        }
                    }



                }
            }

            var dtable = document.getElementById("AllViewsDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    e.preventDefault();
    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETGetAllCDModules",
            'userId': userId
        },
        success: function(data) {

            var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>No Modules Available...</p>'
            document.getElementById("AllScriptModsDiv").innerHTML = RCC;
            document.getElementById("AllScriptForAVDModules").innerHTML = RCC;
            document.getElementById("AllScriptForActiveDirectoryModules").innerHTML = RCC;
            document.getElementById("AllScriptForOfficeModules").innerHTML = RCC;

            var ConfigSetMods = document.getElementById("ConfigSetModulesNow");
            var options = document.querySelectorAll('#ConfigSetModulesNow option');
            options.forEach(o => o.remove());

            var ViewBox1Mods = document.getElementById("ViewBox1ModulesList");
            var options = document.querySelectorAll('#ViewBox1ModulesList option');
            options.forEach(o => o.remove());

            var ViewBox2Mods = document.getElementById("ViewBox2ModulesList");
            var options = document.querySelectorAll('#ViewBox2ModulesList option');
            options.forEach(o => o.remove());

            var ViewBox3Mods = document.getElementById("ViewBox3ModulesList");
            var options = document.querySelectorAll('#ViewBox3ModulesList option');
            options.forEach(o => o.remove());

            var ViewBox4Mods = document.getElementById("ViewBox4ModulesList");
            var options = document.querySelectorAll('#ViewBox4ModulesList option');
            options.forEach(o => o.remove());

            var datatable = document.createElement("table");
            datatable.id = 'CDModulesTable'
            datatable.setAttribute('class', 'SummaryTableClassforAzModules');

            var datatableB = document.createElement("table");
            datatableB.id = 'AVDModulesTable'
            datatableB.setAttribute('class', 'SummaryTableClassforAzModules');

            var datatableC = document.createElement("table");
            datatableC.id = 'OfficeModulesTable'
            datatableC.setAttribute('class', 'SummaryTableClassforAzModules');

            var datatableD = document.createElement("table");
            datatableD.id = 'OtherModulesTable'
            datatableD.setAttribute('class', 'SummaryTableClassforAzModules');

            var datatableE = document.createElement("table");
            datatableE.id = 'ActiveDirectoryModulesTable'
            datatableE.setAttribute('class', 'SummaryTableClassforAzModules');

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0];
                var CheckSRow = cells[1];
                var CheckThisModCat = cells[4];

                if (CheckFRow == "" || CheckFRow == null || CheckFRow == "Module") {} else {

                    var ModTypeNow = cells[5];
                    if (ModTypeNow == "AD Assessment" || ModTypeNow == "AVD Assessment" || ModTypeNow == "Office 365 Assessment") {} else {
                        if (CheckThisModCat == "Azure Modules") {
                            var row = datatable.insertRow(-1);
                        }
                        if (CheckThisModCat == "AVD Modules") {
                            var row = datatableB.insertRow(-1);
                        }
                        if (CheckThisModCat == "Office 365 Modules") {
                            var row = datatableC.insertRow(-1);
                        }
                        if (CheckThisModCat == "Other Modules") {
                            var row = datatableD.insertRow(-1);
                        }
                        if (CheckThisModCat == "AD Modules") {
                            var row = datatableE.insertRow(-1);
                        }
                    }
                    if (CheckSRow == "Module") {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Load";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                    } else {

                        var optionR = document.createElement("option");
                        optionR.text = cells[0];
                        ConfigSetMods.add(optionR);

                        var optionR = document.createElement("option");
                        optionR.text = cells[0];
                        ViewBox1Mods.add(optionR);

                        var optionR = document.createElement("option");
                        optionR.text = cells[0];
                        ViewBox2Mods.add(optionR);

                        var optionR = document.createElement("option");
                        optionR.text = cells[0];
                        ViewBox3Mods.add(optionR);

                        var optionR = document.createElement("option");
                        optionR.text = cells[0];
                        ViewBox4Mods.add(optionR);

                        var ThisModSetNameNow = "MODULE-" + cells[0];
                        var AddOrNot = "Yes";

                        keys = Object.keys(localStorage);

                        for (t = 0; t < localStorage.length; t++) {
                            var ThisModOrOpt = localStorage.key(t);
                            var SItem = localStorage.getItem(keys[t])
                            var ThisTaskAvaOrNot = SItem.replace(/[\r\n]+/gm, "");

                            if (ThisModOrOpt == ThisModSetNameNow) {
                                if (ThisTaskAvaOrNot == "Unavailable") {
                                    AddOrNot = "No";
                                }
                            }
                        }

                        //alert(AddOrNot);

                        if (AddOrNot == "Yes") {
                            var ModTypeNow = cells[5];
                            if (ModTypeNow == "AD Assessment" || ModTypeNow == "AVD Assessment" || ModTypeNow == "Office 365 Assessment") {
                                AddOrNot = "No";
                            }
                        }
                        if (AddOrNot == "Yes") {

                            var CheckTypeNow = cells[2];
                            var CheckModCatNow = cells[4];

                            if (CheckTypeNow == "Info") {
                                var IconClass = '<i class="fa fa-dot-circle-o" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 11px;"></i>'
                            }
                            if (CheckTypeNow == "Action") {
                                var IconClass = '<i class="fa fa-dot-circle-o" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #d0540a;font-size: 11px;"></i>'
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = IconClass + cells[0];
                            cell.style.color = "#0c3d68";
                            cell.style.border = "none";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.lineHeight = "19px";

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var ModCatRepl = CheckModCatNow.replaceAll(' ', "_");
                            var FinalNData = ReplDataN + ":" + CheckTypeNow + ":" + ModCatRepl;

                            var LoadModule = '<button id = ' + FinalNData + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:62px; padding:6px;" onclick="LoadCurModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Load</button>'
                            var ShowMInfo = '<button id = ' + FinalNData + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:62px; padding:6px;" onclick="ShowInfoForCurModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Info</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = LoadModule;
                            cell.style.width = "70px";
                            cell.style.border = "none";


                            if (CheckThisModCat == "Azure Modules") {
                                var row = datatable.insertRow(-1);
                            }
                            if (CheckThisModCat == "AVD Modules") {
                                var row = datatableB.insertRow(-1);
                            }
                            if (CheckThisModCat == "Office 365 Modules") {
                                var row = datatableC.insertRow(-1);
                            }
                            if (CheckThisModCat == "Other Modules") {
                                var row = datatableD.insertRow(-1);
                            }
                            if (CheckThisModCat == "AD Modules") {
                                var row = datatableE.insertRow(-1);
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Target: " + cells[1];
                            cell.style.background = "white";
                            cell.style.color = "#a6a6a6";
                            cell.style.paddingTop = "0px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = CheckTypeNow;
                            cell.style.background = "white";
                            cell.style.color = "#a6a6a6";
                            cell.style.paddingTop = "0px";
                            cell.style.fontStyle = "italic";

                            if (CheckTypeNow == "Action") {
                                cell.style.color = "#ffb777";
                            }
                        }
                    }



                }
            }

            var dtable = document.getElementById("AllScriptModsDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            var dtable = document.getElementById("AllScriptForAVDModules");
            dtable.innerHTML = "";
            dtable.appendChild(datatableB);

            var dtable = document.getElementById("AllScriptForOfficeModules");
            dtable.innerHTML = "";
            dtable.appendChild(datatableC);

            var dtable = document.getElementById("AllScriptForOtherModules");
            dtable.innerHTML = "";
            dtable.appendChild(datatableD);

            var dtable = document.getElementById("AllScriptForActiveDirectoryModules");
            dtable.innerHTML = "";
            dtable.appendChild(datatableE);

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETLoadCurModuleFunction",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateAddTens = document.getElementById("AddModSelectTenName");
                var options = document.querySelectorAll('#AddModSelectTenName option');
                options.forEach(o => o.remove());

                var CreateTempTens = document.getElementById("RightSideLoadedTens");
                var options = document.querySelectorAll('#RightSideLoadedTens option');
                options.forEach(o => o.remove());

                var ConfigSetTens = document.getElementById("ConfigSetAllTenantsNow");
                var options = document.querySelectorAll('#ConfigSetAllTenantsNow option');
                options.forEach(o => o.remove());

                var ViewBox1Tens = document.getElementById("ViewBox1TenantList");
                var options = document.querySelectorAll('#ViewBox1TenantList option');
                options.forEach(o => o.remove());

                var ViewBox2Tens = document.getElementById("ViewBox2TenantList");
                var options = document.querySelectorAll('#ViewBox2TenantList option');
                options.forEach(o => o.remove());

                var ViewBox3Tens = document.getElementById("ViewBox3TenantList");
                var options = document.querySelectorAll('#ViewBox3TenantList option');
                options.forEach(o => o.remove());

                var ViewBox4Tens = document.getElementById("ViewBox4TenantList");
                var options = document.querySelectorAll('#ViewBox4TenantList option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "AZURE-AVD") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ViewBox1Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ViewBox2Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ViewBox3Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ViewBox4Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ConfigSetTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    CreateTempTens.add(optionR);

                                }
                                if (WhichTargetNow == "OFFICE") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    ViewBox1Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    ViewBox2Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    ViewBox3Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    ViewBox4Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    ConfigSetTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    CreateTempTens.add(optionR);

                                }
                                if (WhichTargetNow == "ADFOREST") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ViewBox1Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ViewBox2Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ViewBox3Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ViewBox4Tens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ConfigSetTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    CreateTempTens.add(optionR);


                                }

                            }
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


    var ThisNewtimeNow = new Date().getTime();
    e.preventDefault();
    $.ajax({
        url: '/CallLoadModulesSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETLoadModulesSet",
            'userId': userId,
            'UserTime': ThisNewtimeNow
        },
        success: function(data) {

            var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>No Sets Available. Please create Sets...</p>'
            document.getElementById("AllModulesSetPaneAssessment").innerHTML = RCC;
            document.getElementById("AllModulesSetPaneDefault").innerHTML = RCC;

            var datatable = document.createElement("table");
            datatable.id = 'ModulesSetTableInFront'
            datatable.setAttribute('class', 'SummaryTableClassforAzModules');

            var datatableA = document.createElement("table");
            datatableA.id = 'AssessmentModulesSetTableInFront'
            datatableA.setAttribute('class', 'SummaryTableClassforAzModules');

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0];
                var CheckSRow = cells[1];
                var CheckThisModCat = cells[4];

                if (CheckFRow == "" || CheckFRow == null || CheckFRow == "Module Set") {} else {

                    if (CheckSRow == "Default Set") {
                        var row = datatable.insertRow(-1);
                    }
                    if (CheckSRow == "Assessment Set") {
                        var row = datatableA.insertRow(-1);
                    }

                    if (CheckSRow == "Module Set") {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                    } else {

                        var ThisModNameNow = "MODULES-SET-" + cells[0];
                        var AddOrNot = "Yes";

                        keys = Object.keys(localStorage);

                        for (t = 0; t < localStorage.length; t++) {
                            var ThisModOrOpt = localStorage.key(t);
                            var SItem = localStorage.getItem(keys[t])
                            var ThisTaskAvaOrNot = SItem.replace(/[\r\n]+/gm, "");

                            if (ThisModOrOpt == ThisModNameNow) {
                                if (ThisTaskAvaOrNot == "Unavailable") {
                                    AddOrNot = "No";
                                }
                            }
                        }


                        if (AddOrNot == "Yes") {

                            var CheckTypeNow = "Info";

                            if (CheckTypeNow == "Info") {
                                var IconClass = '<i class="fa fa-building-o" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #e68b3b;font-size: 15px;"></i>'
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = IconClass + cells[0];
                            cell.style.color = "#0c3d68";
                            cell.style.border = "none";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.lineHeight = "19px";

                            //var WhichModSetTye = cells[1];
                            //var SItem = WhichModSetTye.replace(/[\r\n]+/gm, "");
                            //if (SItem == "false") {
                            WhichModSetTye = "Default Set"
                                //}
                                //if (SItem == "true") {
                                //    WhichModSetTye = "Assessment Set"
                                // }

                            FinalModType = cells[1];
                            var ModTypeFinalNow = FinalModType.replaceAll(' ', "_");

                            FinalAssType = cells[2];
                            var FinalAssTypeNOW = FinalAssType.replaceAll(' ', "_");

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var FinalNData = ReplDataN + ":" + CheckTypeNow + ":" + ModTypeFinalNow + ":" + FinalAssTypeNOW;
                            var LoadModule = '<button id = ' + FinalNData + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:65px; padding:6px;" onclick="LoadModulesSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Load</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = LoadModule;
                            cell.style.width = "70px";
                            cell.style.border = "none";

                            if (cells[1] == "Assessment Set") {
                                var row = datatableA.insertRow(-1);
                                var cell = row.insertCell(-1);
                            }
                            if (cells[1] == "Default Set") {
                                var row = datatable.insertRow(-1);
                                var cell = row.insertCell(-1);
                            }

                            var SItem = cells[2].replace(/[\r\n]+/gm, "");
                            var FinalT = SItem;
                            if (cells[1] == "Assessment Set") {
                                FinalT = "<br>" + '<span style="color: #c48354;font-size: 10px;font-style: italic;">' + SItem + '</span>';
                            }
                            if (cells[1] == "Default Set") {
                                FinalT = "";
                            }

                            cell.innerHTML = "Type: " + cells[1] + FinalT;
                            cell.style.background = "white";
                            cell.style.color = "#a6a6a6";
                            cell.style.paddingTop = "0px";

                            if (cells[1] == "Assessment Set") {

                                cell.style.color = "#a6a6a6";
                                cell.style.fontSize = "11px";
                                cell.style.fontWeight = "500";
                                cell.style.paddingBottom = "20px";

                            }

                        }

                    }


                }
            }

            var dtableA = document.getElementById("AllModulesSetPaneAssessment");
            dtableA.innerHTML = "";
            dtableA.appendChild(datatableA);

            var dtable = document.getElementById("AllModulesSetPaneDefault");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    document.getElementById("ApplyAuthTemplateNowMod").style.display = "none";

});

$("#RefAllTenants").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllTenants",
            'userId': userId

        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // represents allowed column 1 and 3 in index form

                var table = document.createElement("table");
                table.id = 'AllOfficeTenantsTable'
                table.setAttribute('class', 'SummaryTableClass');
                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        var newcell = cells[0];
                        var checksevnow = cells[2];
                        var thistestnowall = cells[4];

                        if (newcell == 'Unique Name') {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Unique Name";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Tenant Type";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "User Name/SPN";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Password";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Subscription ID";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Tenant ID";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";


                        } else {

                            var CheckWhichTarget = cells[7];
                            var FinalUserName = cells[7];
                            var FinalPassNow = cells[8];

                            if (CheckWhichTarget == "OFFICE") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[8];
                                cell.style.textAlign = "left";

                                FinalUserName = cells[13];
                                FinalPassNow = cells[14];

                            }
                            if (CheckWhichTarget == "AZURE-AVD") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.style.textAlign = "left";

                                FinalUserName = cells[2];
                                FinalPassNow = cells[3];

                            }
                            if (CheckWhichTarget == "ADFOREST") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[11];
                                cell.style.textAlign = "left";

                                FinalUserName = cells[15];
                                FinalPassNow = cells[16];

                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = CheckWhichTarget;
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = FinalUserName;
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "NOTSHOWN";
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[5];
                            cell.style.textAlign = "left";

                            var ShowData = document.createElement("BUTTON");
                            ShowData.innerHTML = "Remove Tenant";
                            ShowData.id = "TestSPN";
                            ShowData.style.fontSize = "11px";
                            ShowData.style.background = "white";
                            ShowData.style.borderRadius = "8px";
                            ShowData.style.fontWeight = "500";
                            ShowData.style.border = "1px solid";
                            ShowData.style.padding = "8px";
                            ShowData.style.cursor = "pointer";
                            ShowData.style.letterSpacing = "0px";
                            ShowData.style.color = "rgb(6, 115, 168)";

                            var thisbuttonid = cells[0] + "_" + cells[7] + "_" + cells[4];
                            let thisreplShowData = thisbuttonid.replaceAll(' ', '');
                            ShowData.id = thisreplShowData;
                            ShowData.onclick = function() {
                                TestSPNFunction(this);
                            };
                            var cell0 = row.insertCell(-1);
                            cell0.appendChild(ShowData);
                            cell0.style.borderBottom = "0px solid #666666"
                            cell0.setAttribute('class', 'SummaryTDClass');
                            cell0.style.textAlign = "left";

                        }

                    }
                }
                var dvCSV = document.getElementById("TenantDIV");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);

            } else {
                //alert("You must connect to CloudNovaDesk");
            }

        },
        error: function() {
            //alert("You must connect to Office 365");
        }
    });


});


function TestSPNFunction(element) {

    var DemoOrNot = document.getElementById("DOrNot").innerHTML;
    if (DemoOrNot == "DEMO") {
        var ThisMsg = "Task is not available in Demo Mode!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
            clearInterval(MyTimerFooter);
        }

    } else {

        ThisButtonID = element.id

        var str = ThisButtonID;
        var res = str.split("_");
        var TenName = res[0];
        var SPNGuid = res[1];
        var GAAccount = res[2];

        document.getElementById("TestSPNModalForm").style.display = "block";

        document.getElementById("SPNTestThisTenSelected").innerHTML = "Tenant :" + TenName;
        document.getElementById("SPNTestThisSPNGuidSelected").innerHTML = "SPN GUID :" + SPNGuid;

        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/SendSPNTestFile', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'SPNGUIDNow': SPNGuid,
                'ThisTenNow': TenName,
                'TRPKey': TRPKey
            },
            success: function(data) {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var datatable = document.createElement("table");
                datatable.id = 'SPNSubResultTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    var newcell = cells[0];

                    var row = datatable.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }

                var dtable = document.getElementById("SPNResultDIV");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            },
            error: function() {
                alert("Error");
            }
        });

    }

}


$("#TestSPNNowFromTableID").click(function(e) {

    var TenNameNow = document.getElementById("SPNTestThisTenSelected").innerHTML;
    var str = TenNameNow;
    var res = str.split(":");
    var FinalTenName = res[1];

    var SPNGuid = document.getElementById("SPNTestThisSPNGuidSelected").innerHTML;
    var str = SPNGuid;
    var res = str.split(":");
    var FinalSPNGuid = res[1];

    var TRPKey = document.getElementById("TRPKeyN").value;

    if (FinalSPNGuid == "" || FinalSPNGuid == null) {
        swal("Error", "SPN GUID is Empty!", "error");
    } else {

        document.getElementById("TestingSPNCircleB").style.display = "block";

        // Now pass Tenant Values here
        e.preventDefault()
        $.ajax({
            url: '/TestSPNCredsFromTable', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            data: {
                'SPNGUIDNow': FinalSPNGuid,
                'ThisTenNow': FinalTenName,
                'TRPKey': TRPKey
            },
            success: function(data) {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var datatable = document.createElement("table");
                datatable.id = 'SPNSubResultTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    var newcell = cells[0];

                    var row = datatable.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }

                var dtable = document.getElementById("SPNResultDIV");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            },
            error: function() {
                alert("Error");
                document.getElementById("TestingSPNCircleB").style.display = "none";
            }
        });

        document.getElementById("TestingSPNCircleB").style.display = "none";
    }


});

$("#CloseSPNModal").click(function(e) {

    document.getElementById("TestSPNModalForm").style.display = "none";

});


function EditDetFunction(element) {

    var DemoOrNot = document.getElementById("DOrNot").innerHTML;
    if (DemoOrNot == "DEMO") {
        var ThisMsg = "Task is not available in Demo Mode!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
            clearInterval(MyTimerFooter);
        }

    } else {

        ThisButtonID = element.id

        var str = ThisButtonID;
        var res = str.split("_");
        var TenName = res[0];
        var SPNGuid = res[1];

        document.getElementById("EditDetailsDiv").style.display = "block";

        document.getElementById("EditTenThisTenSelected").innerHTML = "Tenant :" + TenName;
        var TRPKey = document.getElementById("TRPKeyN").value;

        const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form

        $.ajax({
            url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETGetAllCDModules",
                'userId': userId
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    let res = data.message.replaceAll('"', "");

                    var rows = res.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split("#");
                        if (cells.length > 1) {

                            var ThisTenName = cells[0];
                            if (ThisTenName == ThisButtonID) {

                                document.getElementById("EditSPNGUID").value = cells[7];
                                document.getElementById("EditSPNPass").value = cells[8];
                                document.getElementById("EditSPNSUBID").value = cells[9];
                                document.getElementById("EditSPNTenantID").value = cells[10];
                                document.getElementById("EditTenAzWorkspaceID").value = cells[14];
                                document.getElementById("EditTenLogAnaID").value = cells[15];
                                document.getElementById("EditTenSharedKeyN").value = cells[16];

                            }

                        }
                    }

                } else {
                    alert("You must connect to CloudNovaDesk");
                }
            },
            error: function() {
                alert("You must connect to CloudNovaDesk");
            }
        });

    }
}

$("#CloseEditDetModal").click(function(e) {

    document.getElementById("EditDetailsDiv").style.display = "none";

});

$("#ACCTenNameDIV").click(function(e) {

    document.getElementById("ACCNameDivHideShow").style.display = "block";
    document.getElementById("ACCTenAccountsDivHideShow").style.display = "none";
    document.getElementById("ACCTenDatabaseOPTHideShow").style.display = "none";
    document.getElementById("AccTenRegOptHideShow").style.display = "none";

    document.getElementById("ACCTenNameDIV").style.background = "#ececec";
    document.getElementById("ACCTenNameDIV").style.color = "white";

    document.getElementById("ACCTenAccountsDiv").style.background = "white";
    document.getElementById("ACCTenOptionsDiv").style.background = "white";
    document.getElementById("ACCTenRegistrationsDiv").style.background = "white";



});

$("#ACCTenAccountsDiv").click(function(e) {

    document.getElementById("ACCNameDivHideShow").style.display = "none";
    document.getElementById("ACCTenAccountsDivHideShow").style.display = "block";
    document.getElementById("ACCTenDatabaseOPTHideShow").style.display = "none";
    document.getElementById("AccTenRegOptHideShow").style.display = "none";

    document.getElementById("ACCTenNameDIV").style.background = "white";
    document.getElementById("ACCTenAccountsDiv").style.background = "#ececec";
    document.getElementById("ACCTenAccountsDiv").style.color = "white";
    document.getElementById("ACCTenOptionsDiv").style.background = "white";
    document.getElementById("ACCTenRegistrationsDiv").style.background = "white";

});

$("#SaveTenAllDetButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save Tenant Details?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVETENDET";




});


$("#ACCTenOptionsDiv").click(function(e) {

    document.getElementById("ACCNameDivHideShow").style.display = "none";
    document.getElementById("ACCTenAccountsDivHideShow").style.display = "none";
    document.getElementById("ACCTenDatabaseOPTHideShow").style.display = "block";
    document.getElementById("AccTenRegOptHideShow").style.display = "none";

    document.getElementById("ACCTenNameDIV").style.background = "white";
    document.getElementById("ACCTenAccountsDiv").style.background = "white";
    document.getElementById("ACCTenOptionsDiv").style.background = "#ececec";
    document.getElementById("ACCTenOptionsDiv").style.color = "white";
    document.getElementById("ACCTenRegistrationsDiv").style.background = "white";

});


$("#ACCTenRegistrationsDiv").click(function(e) {

    document.getElementById("ACCNameDivHideShow").style.display = "none";
    document.getElementById("ACCTenAccountsDivHideShow").style.display = "none";
    document.getElementById("ACCTenDatabaseOPTHideShow").style.display = "none";
    document.getElementById("AccTenRegOptHideShow").style.display = "block";

    document.getElementById("ACCTenNameDIV").style.background = "white";
    document.getElementById("ACCTenAccountsDiv").style.background = "white";
    document.getElementById("ACCTenOptionsDiv").style.background = "white";
    document.getElementById("ACCTenRegistrationsDiv").style.background = "#ececec";
    document.getElementById("ACCTenRegistrationsDiv").style.color = "white";

});

// START: LOADING ALL TENANTS IN WVD PANE
{
    $("#RefAllAVDTenNow").click(function(e) {

        var TRPKey = document.getElementById("TRPKeyN").value;

        e.preventDefault();
        $.ajax({
            url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETRefAllAVDTenNow",
                'userId': userId
            },
            success: function(data) {

                if (data.message) { // That means if there is data available
                    const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                    var CreateTempTens = document.getElementById("TemplateTenAppliesTo");
                    var options = document.querySelectorAll('#TemplateTenAppliesTo option');
                    options.forEach(o => o.remove());

                    var XAVDTenList = document.getElementById("AVDTempCreateAllTenList");
                    var options = document.querySelectorAll('#AVDTempCreateAllTenList option');
                    options.forEach(o => o.remove());

                    var LoginTens = document.getElementById("AllTensAtLogin");
                    var options = document.querySelectorAll('#AllTensAtLogin option');
                    options.forEach(o => o.remove());

                    var PolCondTenList = document.getElementById("SelectedPolPolTenant");
                    var options = document.querySelectorAll('#SelectedPolPolTenant option');
                    options.forEach(o => o.remove());

                    var AllPolTenList = document.getElementById("AllPoliciiesTenList");
                    var options = document.querySelectorAll('#AllPoliciiesTenList option');
                    options.forEach(o => o.remove());

                    var AllCaptureTens = document.getElementById("CaptureImageManTenList");
                    var options = document.querySelectorAll('#CaptureImageManTenList option');
                    options.forEach(o => o.remove());

                    var AllImageTens = document.getElementById("AVDImageManagerTenList");
                    var options = document.querySelectorAll('#AVDImageManagerTenList option');
                    options.forEach(o => o.remove());

                    var AllRiskTens = document.getElementById("AVDRiskAndCompTenList");
                    var options = document.querySelectorAll('#AVDRiskAndCompTenList option');
                    options.forEach(o => o.remove());

                    var AllNotActionTens = document.getElementById("NotAndActionTenList");
                    var options = document.querySelectorAll('#NotAndActionTenList option');
                    options.forEach(o => o.remove());

                    var ProfManTens = document.getElementById("ProfManagerTenListNH");
                    var options = document.querySelectorAll('#ProfManagerTenListNH option');
                    options.forEach(o => o.remove());

                    var AllMonTens = document.getElementById("MONAvaTenList");
                    var options = document.querySelectorAll('#MONAvaTenList option');
                    options.forEach(o => o.remove());

                    var AssTens = document.getElementById("ManageAssTenListNV");
                    var options = document.querySelectorAll('#ManageAssTenListNV option');
                    options.forEach(o => o.remove());

                    var ProfileTens = document.getElementById("SelectProfileServerTenantN");
                    var options = document.querySelectorAll('#SelectProfileServerTenantN option');
                    options.forEach(o => o.remove());

                    var CostTens = document.getElementById("CostAnalyzerTens");
                    var options = document.querySelectorAll('#CostAnalyzerTens option');
                    options.forEach(o => o.remove());

                    var NotTens = document.getElementById("NOTSetSelTenant");
                    var options = document.querySelectorAll('#NOTSetSelTenant option');
                    options.forEach(o => o.remove());

                    var xLeft = document.getElementById("AllAVDTensListed");
                    var options = document.querySelectorAll('#AllAVDTensListed option');
                    options.forEach(o => o.remove());

                    var DashTens = document.getElementById("DASHAvaTenListNS");
                    var options = document.querySelectorAll('#DASHAvaTenListNS option');
                    options.forEach(o => o.remove());

                    var HostHTens = document.getElementById("HOSTHAvaTenListN");
                    var options = document.querySelectorAll('#HOSTHAvaTenListN option');
                    options.forEach(o => o.remove());

                    var H24HoursTen = document.getElementById("H24HoursAvaTenListND");
                    var options = document.querySelectorAll('#H24HoursAvaTenListND option');
                    options.forEach(o => o.remove());

                    var AVDDeplTens = document.getElementById("DEPLAVDAvaTenListND");
                    var options = document.querySelectorAll('#DEPLAVDAvaTenListND option');
                    options.forEach(o => o.remove());

                    var SessMTenList = document.getElementById("SessManagerAavaTenListN");
                    var options = document.querySelectorAll('#SessManagerAavaTenListN option');
                    options.forEach(o => o.remove());

                    let res = data.message.replaceAll('"', "");

                    var rows = res.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split("#");
                        if (cells.length > 1) {

                            var newcell = cells[0];

                            var ThisStrNow = newcell;
                            var NewStrNow = ThisStrNow.substring(0, 3);

                            if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                                if (newcell == "" || newcell == null) {} else {

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    NotTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    xLeft.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    DashTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    HostHTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    H24HoursTen.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AVDDeplTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    SessMTenList.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    CostTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    ProfileTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AssTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AllMonTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    ProfManTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AllNotActionTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AllRiskTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AllImageTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AllCaptureTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    AllPolTenList.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    PolCondTenList.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    LoginTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    XAVDTenList.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    CreateTempTens.add(optionR);

                                }
                            }

                        }
                    }

                    var ThisTenSelected = document.getElementById("AllTensAtLogin").value
                    document.getElementById("AllAVDTensListed").value = ThisTenSelected;

                    var ThisTenSelected = document.getElementById("AllAVDTensListed").value;
                    document.getElementById("SelectedAVDTenNow").innerHTML = "Target :" + ThisTenSelected;

                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("SuperNovaStatusID").style.color = "red";
                }


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }
        });
    });
}
// END: LOADING ALL AVD TENANTS IN AVD PANE


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
    var TRPKeyReg = document.getElementById("TRPKeyN").value;

    var CopyPolFrom = "User";
    var CopyFromValue = "NONE";

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

                        document.getElementById("RefAllNewAdminsNow").click();

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

$("#RefAllNewAdminsNow").click(function(e) {

    var ProceedOrNot = "Yes";

    if (ProceedOrNot == "Yes") {

        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/LoadRBACUsers', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETRefAllNewAdminsNow",
                'userId': userId
            },
            success: function(data) {

                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'RBACUsersTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        if (CheckFRow == "" || CheckFRow == null) {} else {

                            var row = datatable.insertRow(-1);

                            if (CheckFRow == "Email ID") {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Authorization Template";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Modify Template";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Remove";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                            } else {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];

                                cells[2] = "Not Assigned";
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];

                                var ReplAuthName = cells[2].replaceAll(' ', "_");
                                var ThisUserToRem = cells[0] + ":" + ReplAuthName;
                                var ModifyAuthTemplate = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="ModifyCurrentTemplateForAdminFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Modify Template</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ModifyAuthTemplate;

                                var ThisUserToRem = cells[0];
                                var RemoveUser = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveAdminFunctionNow(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Admin</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = RemoveUser;

                            }
                        }


                    }

                    var dtable = document.getElementById("AllManagedADminsDivNowTable");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);


                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });

    }
});


$("#RefAllViewsHereNow").click(function(e) {

    var ProceedOrNot = "Yes";

    if (ProceedOrNot == "Yes") {

        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/CallLoadCDPViews', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETRefAllNewAdminsNow",
                'userId': userId
            },
            success: function(data) {

                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ViewsTableNowForOther'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        if (CheckFRow == "" || CheckFRow == null) {} else {

                            var row = datatable.insertRow(-1);

                            if (CheckFRow == "View Name") {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 1 Module";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 1 Tenant";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 1 Type";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 2 Module";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 2 Tenant";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 2 Type";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 3 Module";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 3 Tenant";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 3 Type";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 4 Module";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 4 Tenant";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Box 4 Type";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Remove";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";


                            } else {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[7];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[8];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[9];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[10];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[11];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[12];

                                var ThisUserToRem = cells[0];
                                var RemoveUser = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveAdminFunctionNow(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove View</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = RemoveUser;

                            }
                        }


                    }

                    var dtable = document.getElementById("AllViewsShownDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    var tableRT = document.getElementById('ViewsTableNowForOther');
                    var cells = tableRT.getElementsByTagName('td');
                    for (var i = 0; i < cells.length; i++) {
                        // Take each cell
                        var cell = cells[i];
                        // do something on onclick event for cell
                        cell.onclick = function() {
                            // Get the row id where the cell exists

                            document.getElementById("AddNewViewModalNow").style.display = "block";

                            var rowId = this.parentNode.rowIndex;
                            var rowsNotSelected = tableRT.getElementsByTagName('tr');
                            for (var row = 0; row < rowsNotSelected.length; row++) {
                                rowsNotSelected[row].style.color = "#666666";
                                rowsNotSelected[row].style.background = "white";
                                rowsNotSelected[row].classList.remove('selected');
                            }

                            var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                            rowSelected.style.color = "black";
                            rowSelected.style.background = "#B1EDFF";
                            rowSelected.className += "selected";

                            var ThisViewName = rowSelected.cells[0].innerHTML;
                            var SItem = ThisViewName.replace(/[\r\n]+/gm, "");

                            var ViewBox1Module = rowSelected.cells[1].innerHTML;
                            var ViewBox1Tenant = rowSelected.cells[2].innerHTML;
                            var ViewBox1Type = rowSelected.cells[3].innerHTML;

                            var ViewBox2Module = rowSelected.cells[4].innerHTML;
                            var ViewBox2Tenant = rowSelected.cells[5].innerHTML;
                            var ViewBox2Type = rowSelected.cells[6].innerHTML;

                            var ViewBox3Module = rowSelected.cells[7].innerHTML;
                            var ViewBox3Tenant = rowSelected.cells[8].innerHTML;
                            var ViewBox3Type = rowSelected.cells[9].innerHTML;

                            var ViewBox4Module = rowSelected.cells[10].innerHTML;
                            var ViewBox4Tenant = rowSelected.cells[11].innerHTML;
                            var ViewBox4Type = rowSelected.cells[12].innerHTML;

                            document.getElementById("NewViewSetNameNowAdd").value = SItem;

                            document.getElementById("ViewBox1ModulesList").value = ViewBox1Module;
                            document.getElementById("ViewBox1TenantList").value = ViewBox1Tenant;
                            document.getElementById("ViewBox1Type").value = ViewBox1Type;

                            document.getElementById("ViewBox2ModulesList").value = ViewBox2Module;
                            document.getElementById("ViewBox2TenantList").value = ViewBox2Tenant;
                            document.getElementById("ViewBox2Type").value = ViewBox2Type;

                            document.getElementById("ViewBox3ModulesList").value = ViewBox3Module;
                            document.getElementById("ViewBox3TenantList").value = ViewBox3Tenant;
                            document.getElementById("ViewBox3Type").value = ViewBox3Type;

                            document.getElementById("ViewBox4ModulesList").value = ViewBox4Module;
                            document.getElementById("ViewBox4TenantList").value = ViewBox4Tenant;
                            document.getElementById("ViewBox4Type").value = ViewBox4Type;


                        }
                    }


                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });

    }
});

$("#RefAllExeLogTasks").click(function(e) {

    var ProceedOrNot = "Yes";

    if (ProceedOrNot == "Yes") {

        var TRPKey = document.getElementById("TRPKeyN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/CallLoadCurrentlyExecutingFile', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'ThisLUser': FinalUserNameNow,
                "type": "SOCKETRefAllExeLogTasks",
                'userId': userId
            },
            success: function(data) {

                if (data.message == "FileNotFound") {
                    var InsertC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 74%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>No Execution is in progress...</p>'
                    document.getElementById("AllExecutionTasksWindowDiv").innerHTML = InsertC;

                } else {
                    var datatable = document.createElement("table");
                    datatable.id = 'CurrentlyExecutionTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "Time") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];

                            //var ThisUserToRem = cells[0];
                            //var RemoveUser = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: #000;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:120px; padding:6px;" onclick="RemoveAppNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove User</button>'

                            //var cell = row.insertCell(-1);
                            //cell.innerHTML = RemoveUser;

                        }



                    }

                    var dtable = document.getElementById("AllExecutionTasksWindowDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);



                }


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });

    }
});

// START: CONFIRM DIA BOX
{

    $("#CancelCancel").click(function(e) {
        document.getElementById("ConfirmDBox").style.display = "none";
        e.preventDefault();
        var WhatAction = document.getElementById("ActionDoWhat").innerHTML;

        if (WhatAction == "ENABLEPROACTIVEMON") {
            document.getElementById("EnableProactiveMonitoringCheckBox").checked = false;

        }

    });

    $("#ConfirmYESYES").click(function(e) {

        e.preventDefault();
        document.getElementById("ConfirmDBox").style.display = "none";

        var WhatAction = document.getElementById("ActionDoWhat").innerHTML;

        if (WhatAction == "REMOVE_MODULENOW") {

            document.getElementById("FootMessageID").innerHTML = "Removing...Please wait...";
            document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
            document.getElementById("GettingReadyID").style.display = "initial";

            var TRPKey = document.getElementById("TRPKeyN").value;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            var ss = document.getElementById("ForMultiStringID").innerHTML;
            var rr = ss.split(":");
            var FinalModToRemoveNow = rr[0];
            var WhatToRemove = rr[1];

            e.preventDefault();
            $.ajax({
                url: '/CallRemoveSomething', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'ThisLUser': FinalUserNameNow,
                    'ModToRemove': FinalModToRemoveNow,
                    'WhatToRemove': WhatToRemove
                },
                success: function(data) {

                    if (WhatToRemove == "MODULE") {
                        document.getElementById("RefAllModulesDataHereN").click();
                    }
                    if (WhatToRemove == "TEMPLATE") {
                        document.getElementById("RefAllNewTemplatesNowFromServer").click();
                    }
                    if (WhatToRemove == "ADMIN") {
                        document.getElementById("RefAllModulesDataHereN").click();
                    }
                    if (WhatToRemove == "MODULESET") {
                        document.getElementById("RefAllModulesSetHere").click();
                    }

                    document.getElementById("FootMessageID").innerHTML = "Removing...Please wait...";
                    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                    document.getElementById("GettingReadyID").style.display = "initial";

                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("SuperNovaStatusID").style.color = "red";
                    document.getElementById("RefCircleNowForAssSet").style.display = "none";
                }
            });


        }


        if (WhatAction == "UPDATEMODULESSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisModName = document.getElementById("ThisModAddUName").value;
                var TRPKey = document.getElementById("TRPKeyN").value;

                var AllHostsValues = [];
                var table, rows, i, x, y, shouldSwitch;
                table = document.getElementById("AllModulesSetTableNowS");
                rows = table.rows;
                for (i = 1; i < (rows.length); i++) {

                    x = rows[i].getElementsByTagName("td")[0].innerHTML;

                    var ThisNow = x.split('"');
                    var ThisIDNow = ThisNow[1];
                    var CheckThisHost = document.getElementById(ThisIDNow).checked;

                    var ThisModNameInTable = rows[i].getElementsByTagName("td")[1].innerHTML;
                    var ThisTarget = rows[i].getElementsByTagName("td")[2].innerHTML;
                    var ThisCategory = rows[i].getElementsByTagName("td")[3].innerHTML;
                    var ThisTenant = rows[i].getElementsByTagName("td")[4].innerHTML;

                    var AllIDsNow = ThisModNameInTable + ":" + ThisTarget + ":" + ThisCategory + ":" + ThisTenant;

                    if (CheckThisHost == true) {
                        AllHostsValues.push(AllIDsNow);
                    }
                }

                var FinalHostValuesNow = AllHostsValues.join('\r\n');

                document.getElementById("FootMessageID").innerHTML = "Adding Modules Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallUpdateExistingModulesSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModName': ThisModName,
                        'TRPKey': TRPKey,
                        'AllHostsValues': FinalHostValuesNow
                    },
                    success: function(data) {

                        document.getElementById("RefAllModulesSetHere").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "SAVEMODULESETNOW") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisModName = document.getElementById("OpenedModSetNameNow").innerHTML;
                var TRPKey = document.getElementById("TRPKeyN").value;

                var AllHostsValues = [];
                var table, rows, i, x, y, shouldSwitch;
                table = document.getElementById("ModulesSetAttrTableNowD");
                rows = table.rows;
                for (i = 1; i < (rows.length); i++) {

                    var ThisModNameInTable = rows[i].getElementsByTagName("td")[0].innerHTML;
                    var ThisTarget = rows[i].getElementsByTagName("td")[1].innerHTML;
                    var ThisCategory = rows[i].getElementsByTagName("td")[2].innerHTML;
                    var ThisTenant = rows[i].getElementsByTagName("td")[3].innerHTML;

                    var AllIDsNow = ThisModNameInTable + ":" + ThisTarget + ":" + ThisCategory + ":" + ThisTenant;

                    AllHostsValues.push(AllIDsNow);

                }

                var FinalHostValuesNow = AllHostsValues.join('\r\n');

                document.getElementById("FootMessageID").innerHTML = "Saving Modules Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/SaveExistingModulesSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModName': ThisModName,
                        'TRPKey': TRPKey,
                        'AllHostsValues': FinalHostValuesNow
                    },
                    success: function(data) {

                        //document.getElementById("RefAllModulesSetHere").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "UPDATEVIEWNOW") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ViewNameNow = document.getElementById("NewViewSetNameNowAdd").value;

                var ViewBox1Module = document.getElementById("ViewBox1ModulesList").value;
                var res = document.getElementById("ViewBox1TenantList").value.split(":");
                var ViewBox1Tenant = res[0];
                var ViewBox1Type = document.getElementById("ViewBox1TypeList").value;

                var ViewBox2Module = document.getElementById("ViewBox2ModulesList").value;
                var res = document.getElementById("ViewBox2TenantList").value.split(":");
                var ViewBox2Tenant = res[0];
                var ViewBox2Type = document.getElementById("ViewBox2TypeList").value;

                var ViewBox3Module = document.getElementById("ViewBox3ModulesList").value;
                var res = document.getElementById("ViewBox3TenantList").value.split(":");
                var ViewBox3Tenant = res[0];
                var ViewBox3Type = document.getElementById("ViewBox3TypeList").value;

                var ViewBox4Module = document.getElementById("ViewBox4ModulesList").value;
                var res = document.getElementById("ViewBox4TenantList").value.split(":");
                var ViewBox4Tenant = res[0];
                var ViewBox4Type = document.getElementById("ViewBox4TypeList").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                document.getElementById("FootMessageID").innerHTML = "Adding View...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallUpdateViewSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ViewNameNow': ViewNameNow,
                        'TRPKey': TRPKey,
                        'ViewBox1Module': ViewBox1Module,
                        'ViewBox1Tenant': ViewBox1Tenant,
                        'ViewBox1Type': ViewBox1Type,
                        'ViewBox2Module': ViewBox2Module,
                        'ViewBox2Tenant': ViewBox2Tenant,
                        'ViewBox2Type': ViewBox2Type,
                        'ViewBox3Module': ViewBox3Module,
                        'ViewBox3Tenant': ViewBox3Tenant,
                        'ViewBox3Type': ViewBox3Type,
                        'ViewBox4Module': ViewBox4Module,
                        'ViewBox4Tenant': ViewBox4Tenant,
                        'ViewBox4Type': ViewBox4Type
                    },
                    success: function(data) {

                        document.getElementById("RefAllViewsHereNow").click();
                        document.getElementById("AddNewViewModalNow").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "ADDNEWCONFIGSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ConfigSetName = document.getElementById("ThisConfigSetNameNow").value;

                var ConfigSetModulesNow = document.getElementById("ConfigSetModulesNow").value;
                var ConfigSetAllTenantsNow = document.getElementById("ConfigSetAllTenantsNow").value;
                var ConfigSetConditionNow = document.getElementById("ConfigSetConditionNow").value;
                var ConfigSetEmailTemplate = document.getElementById("ConfigSetEmailTemplate").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                document.getElementById("FootMessageID").innerHTML = "Adding Config Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallAddNewViewSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ConfigSetName': ConfigSetName,
                        'TRPKey': TRPKey,
                        'ConfigSetModulesNow': ConfigSetModulesNow,
                        'ConfigSetAllTenantsNow': ConfigSetAllTenantsNow,
                        'ConfigSetConditionNow': ConfigSetConditionNow,
                        'ConfigSetEmailTemplate': ConfigSetEmailTemplate
                    },
                    success: function(data) {

                        document.getElementById("RefAllConfigSetButton").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "ADDNEWVIEWSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ViewNameNow = document.getElementById("NewViewSetNameNowAdd").value;

                var ViewBox1Module = document.getElementById("ViewBox1ModulesList").value;
                var res = document.getElementById("ViewBox1TenantList").value.split(":");
                var ViewBox1Tenant = res[0];
                var ViewBox1Type = document.getElementById("ViewBox1TypeList").value;

                var ViewBox2Module = document.getElementById("ViewBox2ModulesList").value;
                var res = document.getElementById("ViewBox2TenantList").value.split(":");
                var ViewBox2Tenant = res[0];
                var ViewBox2Type = document.getElementById("ViewBox2TypeList").value;

                var ViewBox3Module = document.getElementById("ViewBox3ModulesList").value;
                var res = document.getElementById("ViewBox3TenantList").value.split(":");
                var ViewBox3Tenant = res[0];
                var ViewBox3Type = document.getElementById("ViewBox3TypeList").value;

                var ViewBox4Module = document.getElementById("ViewBox4ModulesList").value;
                var res = document.getElementById("ViewBox4TenantList").value.split(":");
                var ViewBox4Tenant = res[0];
                var ViewBox4Type = document.getElementById("ViewBox4TypeList").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                document.getElementById("FootMessageID").innerHTML = "Adding View...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallAddNewViewSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ViewNameNow': ViewNameNow,
                        'TRPKey': TRPKey,
                        'ViewBox1Module': ViewBox1Module,
                        'ViewBox1Tenant': ViewBox1Tenant,
                        'ViewBox1Type': ViewBox1Type,
                        'ViewBox2Module': ViewBox2Module,
                        'ViewBox2Tenant': ViewBox2Tenant,
                        'ViewBox2Type': ViewBox2Type,
                        'ViewBox3Module': ViewBox3Module,
                        'ViewBox3Tenant': ViewBox3Tenant,
                        'ViewBox3Type': ViewBox3Type,
                        'ViewBox4Module': ViewBox4Module,
                        'ViewBox4Tenant': ViewBox4Tenant,
                        'ViewBox4Type': ViewBox4Type
                    },
                    success: function(data) {

                        document.getElementById("RefAllViewsHereNow").click();
                        document.getElementById("AddNewViewModalNow").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "ADDMODULESSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisModName = document.getElementById("ThisModAddUName").value;
                var TRPKey = document.getElementById("TRPKeyN").value;
                var CDAssTypeNow = document.getElementById("AddModSelectWhichAssTech").value;
                var SelModTypeNow = document.getElementById("AddModWhichTypeNow").value;

                var ThisModAssOrNot = "false";
                if (SelModTypeNow == "Assessment Set") {
                    var ThisModAssOrNot = "true";
                }

                var AllHostsValues = [];
                var table, rows, i, x, y, shouldSwitch;
                table = document.getElementById("AllModulesSetTableNowS");
                rows = table.rows;
                for (i = 1; i < (rows.length); i++) {

                    x = rows[i].getElementsByTagName("td")[0].innerHTML;

                    var ThisNow = x.split('"');
                    var ThisIDNow = ThisNow[1];
                    var CheckThisHost = document.getElementById(ThisIDNow).checked;

                    var ThisModNameInTable = rows[i].getElementsByTagName("td")[1].innerHTML;
                    var ThisCategory = rows[i].getElementsByTagName("td")[2].innerHTML;
                    var ThisModDes = rows[i].getElementsByTagName("td")[3].innerHTML;
                    var ThisTenant = document.getElementById("AddModSelectTenName").value;

                    var AllIDsNow = ThisModNameInTable + ":" + ThisCategory + ":" + ThisTenant + ":" + ThisModDes;

                    if (CheckThisHost == true) {
                        AllHostsValues.push(AllIDsNow);
                    }
                }

                var FinalHostValuesNow = AllHostsValues.join('\r\n');
                var IsAssModSet = ThisModAssOrNot;

                document.getElementById("FootMessageID").innerHTML = "Adding Modules Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallAddNewModulesSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModName': ThisModName,
                        'TRPKey': TRPKey,
                        'AllHostsValues': FinalHostValuesNow,
                        'IsAssModSet': ThisModAssOrNot,
                        'AssTypeNow': CDAssTypeNow
                    },
                    success: function(data) {

                        document.getElementById("RefAllModulesSetHere").click();
                        document.getElementById("RefAllModulesNowButton").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "UPDATEDISCOVERYCONFIG") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
                var TRPKey = document.getElementById("TRPKeyN").value;

                var AllHostsValues = [];
                var table, rows, i, x, y, shouldSwitch;
                table = document.getElementById("DiscoveryAVDDataTAbleNow");
                rows = table.rows;
                for (i = 1; i < (rows.length); i++) {

                    x = rows[i].getElementsByTagName("td")[0].innerHTML;

                    var ThisNow = x.split('"');
                    var ThisIDNow = ThisNow[1];
                    var CheckThisHost = document.getElementById(ThisIDNow).checked;

                    var ThisHostPoolNow = rows[i].getElementsByTagName("td")[1].innerHTML;
                    var ThisResGroupNow = rows[i].getElementsByTagName("td")[2].innerHTML;
                    var ThisHostNow = rows[i].getElementsByTagName("td")[3].innerHTML;
                    var ThisVMStatus = rows[i].getElementsByTagName("td")[4].innerHTML;

                    var AllIDsNow = ThisHostPoolNow + ":" + ThisResGroupNow + ":" + ThisHostNow + ":" + ThisVMStatus;

                    if (CheckThisHost == true) {
                        AllHostsValues.push(AllIDsNow);
                    }
                }

                var FinalHostValuesNow = AllHostsValues.join('\r\n');

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var AVDAssAllHostsValues = [];
                var table, rows, i, x, y, shouldSwitch;
                table = document.getElementById("AVDDiscoveryItemsTable");
                rows = table.rows;
                for (i = 1; i < (rows.length); i++) {

                    x = rows[i].getElementsByTagName("td")[0].innerHTML;

                    var ThisNow = x.split('"');
                    var ThisIDNow = ThisNow[1];
                    var CheckThisHost = document.getElementById(ThisIDNow).checked;

                    var ThisAssItemNow = rows[i].getElementsByTagName("td")[1].innerHTML;

                    var AllIDsNow = ThisAssItemNow;

                    if (CheckThisHost == true) {
                        var NewIDNow = "True:" + AllIDsNow;
                        AVDAssAllHostsValues.push(NewIDNow);
                    } else {
                        var NewIDNow = "False:" + AllIDsNow;
                        AVDAssAllHostsValues.push(NewIDNow);
                    }
                }

                var FinalAVDAssAllHostsValues = AVDAssAllHostsValues.join('\r\n');

                document.getElementById("FootMessageID").innerHTML = "Updating Discovery Config...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallUpdateDiscConfig', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModulesSet': ThisModulesSet,
                        'TRPKey': TRPKey,
                        'AllHostsValues': FinalHostValuesNow,
                        'ThisLUser': FinalUserNameNow,
                        'FinalAVDAssAllHostsValues': FinalAVDAssAllHostsValues,
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "SAVESETTINGSNOWFORADMIN") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Admin Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";

                var convertedIntoArrayForActivePolicies = [];
                $("table#RBACUsersTable tr").each(function() {
                    var rowDataArray = [];
                    var actualData = $(this).find('td');
                    if (actualData.length > 0) {
                        actualData.each(function() {
                            rowDataArray.push($(this).text());
                        });
                        convertedIntoArrayForActivePolicies.push(rowDataArray);
                    }
                });

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                e.preventDefault();
                $.ajax({
                    url: '/CallSaveAdminSettingsNow', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: false,
                    timeout: 50000,
                    data: {
                        'TempData': convertedIntoArrayForActivePolicies,
                        'ThisLUser': FinalUserNameNow,
                        'TRPKey': TRPKey
                    },
                    success: function(data) {
                        if (data.message) {

                            var SItem = data.message.replace(/[\r\n]+/gm, "");
                            var FinalItem = SItem.replaceAll(' ', '');

                            if (FinalItem == "Success") {

                                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

                            }

                        } else {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }
                });
            }

        }

        if (WhatAction == "RESETASSPROCSETTINGS") {

            var TRPKey = document.getElementById("TRPKeyN").value;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            e.preventDefault();
            $.ajax({
                url: '/CallResetAssessmentProcData', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'ThisLUser': FinalUserNameNow
                },
                success: function(data) {
                    if (data.message) {

                        document.getElementById("RefAssessmentSetProcButtonN").click();

                    } else {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }
                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("SuperNovaStatusID").style.color = "red";
                }
            });

        }

        if (WhatAction == "RESETPROCSETTINGS") {

            var TRPKey = document.getElementById("TRPKeyN").value;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            e.preventDefault();
            $.ajax({
                url: '/CallResetProcAgentData', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'ThisLUser': FinalUserNameNow
                },
                success: function(data) {
                    if (data.message) {

                        document.getElementById("RefProcAgentSetData").click();

                    } else {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }
                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("SuperNovaStatusID").style.color = "red";
                }
            });

        }

        if (WhatAction == "SAVESETTINGSNOWASSSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";

                var convertedIntoArrayForActivePolicies = [];
                $("table#AssessmentSetProcTable tr").each(function() {
                    var rowDataArray = [];
                    var actualData = $(this).find('td');
                    if (actualData.length > 0) {
                        actualData.each(function() {
                            rowDataArray.push($(this).text());
                        });
                        convertedIntoArrayForActivePolicies.push(rowDataArray);
                    }
                });

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                e.preventDefault();
                $.ajax({
                    url: '/CallSaveAssProcAgentSettings', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: false,
                    timeout: 50000,
                    data: {
                        'TempData': convertedIntoArrayForActivePolicies,
                        'ThisLUser': FinalUserNameNow,
                        'TRPKey': TRPKey
                    },
                    success: function(data) {
                        if (data.message) {

                            var SItem = data.message.replace(/[\r\n]+/gm, "");
                            var FinalItem = SItem.replaceAll(' ', '');

                            if (FinalItem == "Success") {

                                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

                            }

                        } else {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }
                });
            }

        }

        if (WhatAction == "SAVESETTINGSNOW") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Processing Agent Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";

                var convertedIntoArrayForActivePolicies = [];
                $("table#ProcAgentTableNow tr").each(function() {
                    var rowDataArray = [];
                    var actualData = $(this).find('td');
                    if (actualData.length > 0) {
                        actualData.each(function() {
                            rowDataArray.push($(this).text());
                        });
                        convertedIntoArrayForActivePolicies.push(rowDataArray);
                    }
                });

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                e.preventDefault();
                $.ajax({
                    url: '/CallSaveProcAgentSettings', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: false,
                    timeout: 50000,
                    data: {
                        'TempData': convertedIntoArrayForActivePolicies,
                        'ThisLUser': FinalUserNameNow,
                        'TRPKey': TRPKey
                    },
                    success: function(data) {
                        if (data.message) {

                            var SItem = data.message.replace(/[\r\n]+/gm, "");
                            var FinalItem = SItem.replaceAll(' ', '');

                            if (FinalItem == "Success") {

                                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

                            }

                        } else {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }
                });
            }

        }

        if (WhatAction == "SAVETEMPATTR") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var AllOk = "Ok"

                if (AllOk == "Ok") {

                    var ThisMsg = "Saving Current Template. Please Wait..."
                    document.getElementById("FootMessageID").innerHTML = ThisMsg;
                    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                    document.getElementById("GettingReadyID").style.display = "none";

                    var convertedIntoArray = [];
                    $("table#AuthAttrTable tr").each(function() {
                        var rowDataArray = [];
                        var actualData = $(this).find('td');
                        if (actualData.length > 0) {
                            actualData.each(function() {
                                rowDataArray.push($(this).text());
                            });
                            convertedIntoArray.push(rowDataArray);
                        }
                    });

                    var SelTempNow = document.getElementById("SelTempNameAndType").innerHTML;
                    var res = SelTempNow.split(":");
                    var FinalTemName = res[0];
                    var FinalTempType = res[1];

                    var TempData = convertedIntoArray;

                    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                    var res = ThisLUserNow.split("@");
                    var FinalUserNameNow = res[0];

                    var TRPKey = document.getElementById("TRPKeyN").value;

                    e.preventDefault();
                    $.ajax({
                        url: '/SaveTempSettings', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: true,
                        timeout: 50000,
                        data: {
                            'SelTempNow': FinalTemName,
                            'TempTypeNow': FinalTempType,
                            'TempData': TempData,
                            'ThisLUser': FinalUserNameNow,
                            'TRPKey': TRPKey
                        },
                        success: function(data) {
                            if (data.message) {

                                var SItem = data.message.replace(/[\r\n]+/gm, "");
                                var FinalItem = SItem.replaceAll(' ', '');

                                if (FinalItem == "Success") {

                                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

                                }

                            } else {
                                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                            }
                        },
                        error: function() {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    });

                }
            }

        }


        if (WhatAction == "ADDTENANT") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                document.getElementById("AddTenantCircle").style.display = "block";

                var TRPKeyNow = document.getElementById("TRPKeyN").value;
                var TenUName = document.getElementById("fname").value;

                var SPNDispName = document.getElementById("SPNDisplayName").value;
                var SPNGUID = document.getElementById("SPNGUID").value;
                var SPNPass = document.getElementById("SPNPass").value;
                var SPNSubID = document.getElementById("SPNSUBID").value;
                var SPNTenID = document.getElementById("SPNTenantID").value;

                var WhichTargetNow = document.getElementById("WhichTargetIsAdding").innerHTML;
                var OfficeTenUName = document.getElementById("OfficeTenantUName").value;
                var OfficeTenDomName = document.getElementById("OfficeTenantDomainName").value;
                var OfficeTenLICID = document.getElementById("OfficeTenLicensneID").value;

                var ADForestFQDN = document.getElementById("ADForestFQDNNow").value;
                var ADForestLIC = document.getElementById("ADForestLicenseNow").value;

                var OfficeUserName = document.getElementById("OfficeGlobalReaderAccountNameNow").value;
                var OfficePassword = document.getElementById("OfficeGlobalReaderPAsswordNow").value;
                var ADUserName = document.getElementById("ADForestCredUser").value;
                var ADUserPAss = document.getElementById("ADForestEntUSerPass").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var ProceedOrNot = "Yes";

                if (WhichTargetNow == "AZURE-AVD") {
                    if (TenUName == "" || SPNGUID == "" || SPNPass == "" || SPNSubID == "" || SPNTenID == "") {

                        ProceedOrNot = "No";
                        document.getElementById("AddTenantCircle").style.display = "none";

                        var ThisMsg = "Please provide all inputs."
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                            clearInterval(MyTimerFooter);
                        }
                    }
                }
                if (WhichTargetNow == "OFFICE") {
                    if (OfficeTenUName == "" || OfficeTenDomName == "" || OfficeTenLICID == "") {

                        ProceedOrNot = "No";
                        document.getElementById("AddTenantCircle").style.display = "none";

                        var ThisMsg = "Please provide all inputs."
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                            clearInterval(MyTimerFooter);
                        }
                    }
                }
                if (WhichTargetNow == "ADFOREST") {
                    if (ADForestFQDN == "" || ADForestLIC == "") {

                        ProceedOrNot = "No";
                        document.getElementById("AddTenantCircle").style.display = "none";

                        var ThisMsg = "Please provide all inputs."
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                            clearInterval(MyTimerFooter);
                        }
                    }
                }

                if (ProceedOrNot == "Yes") {
                    // Now pass Tenant Values here
                    $.ajax({
                        url: '/AddNewTenantNow', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: false,
                        timeout: 50000,
                        data: {
                            'TenNameNow': TenUName,
                            'TenSPNGuid': SPNGUID,
                            'WhichTargetNow': WhichTargetNow,
                            'OfficeTenUName': OfficeTenUName,
                            'OfficeTenDomName': OfficeTenDomName,
                            'OfficeTenLICID': OfficeTenLICID,
                            'ADForestFQDN': ADForestFQDN,
                            'ADForestLIC': ADForestLIC,
                            'TenSPNPass': SPNPass,
                            'TenSPNSubID': SPNSubID,
                            'TenSPNTenID': SPNTenID,
                            'ThisLUser': FinalUserNameNow,
                            'SPNDispName': SPNDispName,
                            'TRPKeyNow': TRPKeyNow,
                            'OfficeUserName': OfficeUserName,
                            'OfficePassword': OfficePassword,
                            'ADUserName': ADUserName,
                            'ADUserPAss': ADUserPAss

                        },
                        success: function(data) {

                            var SItem = data.message.replace(/[\r\n]+/gm, "");
                            var FinalItem = SItem.replaceAll(' ', '');

                            //alert("R" + FinalItem + "R");

                            if (data.message) {
                                if (FinalItem == "TenantAlready") {

                                    document.getElementById("AddTenantCircle").style.display = "none";

                                    var ThisMsg = "Tenant by Same Name already exists!"
                                    document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                                    document.getElementById("GettingReadyID").style.display = "none";
                                    var MyTimerFooter = setInterval(function() {
                                        FunctionFooterDIV()
                                    }, 5000);

                                    function FunctionFooterDIV() {
                                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                                        clearInterval(MyTimerFooter);
                                    }

                                }
                                if (FinalItem == "TenantAdded") {

                                    document.getElementById("AddTenantCircle").style.display = "none";

                                    document.getElementById("RefAllTenants").click();
                                    document.getElementById("RefAllAVDTenNow").click();
                                    document.getElementById("AddTenantModalToDispAndClose").style.display = "none";

                                    var ThisMsg = "Tenant has been added successfully!"
                                    document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                                    document.getElementById("GettingReadyID").style.display = "none";
                                    var MyTimerFooter = setInterval(function() {
                                        FunctionFooterDIV()
                                    }, 5000);

                                    function FunctionFooterDIV() {
                                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                                        clearInterval(MyTimerFooter);
                                    }

                                }

                                var ThisMsg = "Tenant has been added successfully!"
                                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                                document.getElementById("GettingReadyID").style.display = "none";
                                var MyTimerFooter = setInterval(function() {
                                    FunctionFooterDIV()
                                }, 5000);

                                function FunctionFooterDIV() {
                                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                                    clearInterval(MyTimerFooter);
                                }

                                document.getElementById("RefAllTenants").click();

                            } else {
                                document.getElementById("AddTenantCircle").style.display = "none";

                                alert("Error adding Tenant");
                            }
                        },
                        error: function() {
                            document.getElementById("AddTenantCircle").style.display = "none";
                            alert("Error adding Tenant");
                        }
                    });
                }

            }
        }

        if (WhatAction == "EXECUTEMODULESET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Executing Modules Set...</p>'
                //document.getElementById("SelectedModulesInSetDataDiv").innerHTML = RCC;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var ThisModuleSetNow = document.getElementById("LoadedModulesSetName").innerHTML;

                var TRPKey = document.getElementById("TRPKeyN").value;

                $.ajax({
                    url: '/CallExecuteModuleSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModSetName': ThisModuleSetNow,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey
                    },
                    success: function(data) {

                        document.getElementById("SelectedModulesInSetDataDiv").innerHTML = "";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("RefCDFModuleDataForTenant").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "EXECUTEMODULE") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Executing...</p>'
                document.getElementById("UserSessDetailsDiv").innerHTML = RCC;

                var ThisString = document.getElementById("ForMultiStringID").innerHTML;

                var res = ThisString.split(":");
                var ThisModName = res[0];
                var ThisModTenant = res[1];

                var ThisTenant = ThisModTenant
                var FinalTenSelected = ThisTenant

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                $.ajax({
                    url: '/ExecuteSelectedModuleNow', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisTenant': FinalTenSelected,
                        'ThisModName': ThisModName,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'userId': userId
                    },
                    success: function(data) {

                        document.getElementById("UserSessDetailsDiv").innerHTML = "";

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                        document.getElementById("RefCDFModuleDataForTenant").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "AVDDEXECUTEASSESSMENTFORMODULESSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "block";

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
                var ThisAssTypeNow = document.getElementById("CDAssessmentTypeNow").innerHTML;
                var SelCri = document.getElementById("SelectedExeCriT").value;

                var ExeAllOrOne = "ALL"
                var ExeModNameNow = "NONE"
                var ExeModCRI = "NONE"

                var ThisMsg = "AVD Discovery is in progress. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallAVDDiscoveryNow', // This tells server which Route to use OKAYYYY
                    // url: '/JustCallScript', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 5000000,
                    data: {
                        'ThisModulesSet': ThisModulesSet,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'AssessmentTypeNow': ThisAssTypeNow,
                        'SelCri': SelCri,
                        'ExeAllOrOne': ExeAllOrOne,
                        'ExeModNameNow': ExeModNameNow,
                        'ExeModCRI': ExeModCRI
                    },
                    success: function(data) {

                        document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "none";

                        CheckAVDDiscoveryStatusFunction();

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "EXECUTEASSESSMENTFORMODULESSET") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
                var ThisAssTypeNow = document.getElementById("CDAssessmentTypeNow").innerHTML;
                var SelCri = document.getElementById("SelectedExeCriT").value;

                var ExeAllOrOne = "ALL"
                var ExeModNameNow = "NONE"
                var ExeModCRI = "NONE"

                var ThisMsg = "Processing Script. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallAssessmentForModulesSet', // This tells server which Route to use OKAYYYY
                    // url: '/JustCallScript', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 500000,
                    data: {
                        'ThisModulesSet': ThisModulesSet,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'AssessmentTypeNow': ThisAssTypeNow,
                        'SelCri': SelCri,
                        'ExeAllOrOne': ExeAllOrOne,
                        'ExeModNameNow': ExeModNameNow,
                        'ExeModCRI': ExeModCRI
                    },
                    success: function(data) {

                        document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "block";

                        MonitorAssessmentNow();

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "EXECUTEASSESSMENT") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "block";
                var ThisString = document.getElementById("ForMultiStringID").innerHTML;

                var res = ThisString.split(":");
                var WhichAssessment = res[0];
                var WhichTarget = res[1];
                var WhatToExecute = res[2];
                var SelectedCred = res[3];

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisMsg = "Processing Script. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallExecuteAssessment', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 500000,
                    data: {
                        'WhichAssessment': WhichAssessment,
                        'WhichTarget': WhichTarget,
                        'WhatToExecute': WhatToExecute,
                        'SelectedCred': SelectedCred,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey
                    },
                    success: function(data) {

                        MonitorAssessmentNow();

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "ADDNEWMODULE") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                var ModuleNameNow = document.getElementById("NewModNameNow").value;
                var ModuleDate = document.getElementById("NewModUpdateDate").value;
                var ModuleTarget = document.getElementById("NewModModuleTarget").value;
                var ModuleType = document.getElementById("NewModScriptType").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var textAreaNow = document.getElementById('CDPCodeBox');
                //var CodeLines = textAreaNow.value.split('\n'); // lines is an array of strings
                //var CodeLines = document.getElementById("CDPCodeBox").value.split('\n');

                var CodeLines = document.getElementById("CDPCodeBox").value;
                var CodeLinesWithCreds = document.getElementById("CDPCodeBoxWithCred").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ModuleTypeAssOrNot = document.getElementById("ModuleTypeNowSS").value;

                var ThisMsg = "Adding Module. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                var ModCat = document.getElementById("ModuleCategoryNow").value;
                var ModDesNow = document.getElementById("ModDescriptionHere").value;

                var PassedText = document.getElementById("ModuleNowTestPassedBox").value;
                var IssueText = document.getElementById("ModuleNowTestIssueBox").value;
                var ImpactText = document.getElementById("ModuleNowTestImpactBox").value;
                var RecText = document.getElementById("ModuleNowTestRecBox").value;

                var TechCat = document.getElementById("ModuleTechnologyCategoryNow").value;

                $.ajax({
                    url: '/CallAddNewModule', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ModuleName': ModuleNameNow,
                        'ModuleDate': ModuleDate,
                        'ModuleTarget': ModuleTarget,
                        'ModuleType': ModuleType,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'CodeLines': CodeLines,
                        'ModCat': ModCat,
                        'ModuleTypeAssOrNot': ModuleTypeAssOrNot,
                        'ModDesNow': ModDesNow,
                        'CodeLinesWithCreds': CodeLinesWithCreds,
                        'PassedText': PassedText,
                        'IssueText': IssueText,
                        'ImpactText': ImpactText,
                        'RecText': RecText,
                        'TechCat': TechCat
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        document.getElementById("AddCDNewScriptMod").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "EDITEXISTINGMODULE") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                var ModuleNameNow = document.getElementById("NewModNameNow").value;
                var ModuleDate = document.getElementById("NewModUpdateDate").value;
                var ModuleTarget = document.getElementById("NewModModuleTarget").value;
                var ModuleTypeInfoOrAction = document.getElementById("NewModScriptType").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var ModCat = document.getElementById("ModuleCategoryNow").value;

                var ModuleType = document.getElementById("ModuleTypeNowSS").value;

                var textAreaNow = document.getElementById('CDPCodeBox');
                //var CodeLines = textAreaNow.value.split('\n'); // lines is an array of strings
                //var CodeLines = document.getElementById("CDPCodeBox").value.split('\n');

                var CodeLines = document.getElementById("CDPCodeBox").value;
                var CodeLinesWithCred = document.getElementById("CDPCodeBoxWithCred").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ModDesNow = document.getElementById("ModDescriptionHere").value;

                var PassedText = document.getElementById("ModuleNowTestPassedBox").value;
                var IssueText = document.getElementById("ModuleNowTestIssueBox").value;
                var ImpactText = document.getElementById("ModuleNowTestImpactBox").value;
                var RecText = document.getElementById("ModuleNowTestRecBox").value;

                var TechCat = document.getElementById("ModuleTechnologyCategoryNow").value;

                var ThisMsg = "Saving Changes. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallEditModuleChanges', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 5000000,
                    data: {
                        'ModuleName': ModuleNameNow,
                        'ModuleDate': ModuleDate,
                        'ModuleTarget': ModuleTarget,
                        'ModuleTypeInfoOrAction': ModuleTypeInfoOrAction,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'CodeLines': CodeLines,
                        'ModCat': ModCat,
                        'ModuleType': ModuleType,
                        'CodeLinesWithCred': CodeLinesWithCred,
                        'ModDesNow': ModDesNow,
                        'PassedText': PassedText,
                        'IssueText': IssueText,
                        'ImpactText': ImpactText,
                        'RecText': RecText,
                        'TechCat': TechCat
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        document.getElementById("AddCDNewScriptMod").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "ADDTEMPLATE") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                var TemplateNameNow = document.getElementById("ThisUTemplteName").value;
                var TemplateType = document.getElementById("ThisUTemplateType").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];


                var ThisMsg = "Adding Template. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallAddNewTemplate', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'TemplateName': TemplateNameNow,
                        'TemplateType': TemplateType,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        document.getElementById("AddCDNewScriptMod").style.display = "none";

                        document.getElementById("RefAllNewTemplatesNowFromServer").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }

        if (WhatAction == "RESETTEMPLATENOW") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    clearInterval(MyTimerFooter);
                }

            } else {


                var ThisT = document.getElementById("SelTempNameAndType").innerHTML;

                var res = ThisT.split(":");
                var TemplateNameNow = res[0];
                var TemplateType = res[1];

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var ThisMsg = "Resetting Template. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallResetTemplateNow', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'TemplateName': TemplateNameNow,
                        'TemplateType': TemplateType,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        document.getElementById("AddCDNewScriptMod").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    }
                });



            }
        }



    });
}
// END: CONFIRM DIA BOX

$("#SaveAllAdminPaneSettingsButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save Settings for Admins?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVESETTINGSNOWFORADMIN";

});


$("#SaveSettingsForProcAgent").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save Settings?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVESETTINGSNOW";

});

$("#AddTenantNowButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add Tenant under the management of SuperNova?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDTENANT";

});

$("#CreateNewConfigSetButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add New Config Set?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDNEWCONFIGSET";

});

$("#AddNewViewNowButtonS").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add New View?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDNEWVIEWSET";

});

$("#UpdateViewNowButtonSS").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Update View?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "UPDATEVIEWNOW";

});

$("#UpdateFSLogixHostsNow").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Update Discovery Configuration?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "UPDATEDISCOVERYCONFIG";

});

$("#AddNewModulesSetButtonNow").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Do you want to add new Modules Set?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDMODULESSET";

});

$("#SaveModulesSetNow").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Do you want Save Modules Set?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVEMODULESETNOW";

});

$("#ExecuteAllModulesInModulesSet").click(function(e) {

    e.preventDefault();
    var ThisModSetNow = document.getElementById("LoadedModulesSetName").innerHTML;

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Execute Modules Set?: " + ThisModSetNow;
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "EXECUTEMODULESET";
    //document.getElementById("ForMultiStringID").innerHTML = ThisModNow + ":" + ThisTenantNow;

});

$("#ExecuteSelModuleNow").click(function(e) {

    var ThisModNow = document.getElementById("SelectedScriptNameNow").innerHTML;
    var ThisTen = document.getElementById("RightSideLoadedTens").value;
    var res = ThisTen.split(":");
    var ThisTenantNow = res[0];

    document.getElementById("ForMultiStringID").innerHTML = ThisModNow + ":" + ThisTenantNow;

    var DemoOrNot = document.getElementById("DOrNot").innerHTML;
    if (DemoOrNot == "DEMO") {
        var ThisMsg = "Task is not available in Demo Mode!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            clearInterval(MyTimerFooter);
        }

    } else {


        var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Executing...</p>'
        document.getElementById("UserSessDetailsDiv").innerHTML = RCC;

        var ThisString = document.getElementById("ForMultiStringID").innerHTML;

        var res = ThisString.split(":");
        var ThisModName = res[0];
        var ThisModTenant = res[1];

        var ThisTenant = ThisModTenant
        var FinalTenSelected = ThisTenant

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/ExecuteSelectedModuleNow', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'ThisTenant': FinalTenSelected,
                'ThisModName': ThisModName,
                'ThisUser': FinalUserNameNow,
                'TRPKey': TRPKey,
                'userId': userId
            },
            success: function(data) {

                document.getElementById("UserSessDetailsDiv").innerHTML = "";

                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                document.getElementById("GettingReadyID").style.display = "none";

                document.getElementById("RefCDFModuleDataForTenant").click();

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                document.getElementById("GettingReadyID").style.display = "none";

            }
        });



    }

});

$("#ExecuteADForestTestsNowButton").click(function(e) {

    var WhichAssessment = document.getElementById("MSADAssessmentNameNN").innerHTML;
    var WhichTarget = document.getElementById("ADForestsTargetList").value;
    var WhatToExecute = document.getElementById("SelADForestExecutionCriSel").value;
    var SelectedCred = document.getElementById("SelWhichCredToUseForExe").value;

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Execute " + WhichAssessment + " for Target: " + WhichTarget + " Selected: " + WhatToExecute + " ?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "EXECUTEASSESSMENT";
    document.getElementById("ForMultiStringID").innerHTML = WhichAssessment + ":" + WhichTarget + ":" + WhatToExecute + ":" + SelectedCred;

});

function ExecuteSingleAssModInSetFunction(ThisData) {
    //var ExeReplData = ExeMName + ":" + MExeCri + ":" + NewMSetName;

    var res = ThisData.split(":");
    var ModNameNow = res[0];
    var ModCri = res[1];
    var MSetName = res[2];

    var NewModNameNow = ModNameNow.replaceAll('_', " ");
    var NewModCri = ModCri.replaceAll('_', " ");

    var DemoOrNot = document.getElementById("DOrNot").innerHTML;
    if (DemoOrNot == "DEMO") {
        var ThisMsg = "Task is not available in Demo Mode!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            clearInterval(MyTimerFooter);
        }

    } else {

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var TRPKey = document.getElementById("TRPKeyN").value;

        var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
        var ThisAssTypeNow = document.getElementById("CDAssessmentTypeNow").innerHTML;
        var SelCri = document.getElementById("SelectedExeCriT").value;

        var ExeAllOrOne = "SINGLE"
        var ExeModNameNow = NewModNameNow
        var ExeModCRI = NewModCri

        var ThisMsg = "Executing Module. Please Wait..."
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "block";

        $.ajax({
            url: '/CallAssessmentForModulesSet', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 500000,
            data: {
                'ThisModulesSet': ThisModulesSet,
                'ThisUser': FinalUserNameNow,
                'TRPKey': TRPKey,
                'AssessmentTypeNow': ThisAssTypeNow,
                'SelCri': SelCri,
                'ExeAllOrOne': ExeAllOrOne,
                'ExeModNameNow': ExeModNameNow,
                'ExeModCRI': ExeModCRI
            },
            success: function(data) {

                document.getElementById("RefAllModulesForAssModulesSet").click();

                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                document.getElementById("GettingReadyID").style.display = "none";

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                document.getElementById("GettingReadyID").style.display = "none";

            }
        });



    }


};


$("#StartAVDDiscoveryNowPlease").click(function(e) {

    var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
    var SelC = document.getElementById("SelectedExeCriT").value;

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Start AVD Environment Discovery ?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "AVDDEXECUTEASSESSMENTFORMODULESSET";
    //document.getElementById("ForMultiStringID").innerHTML = WhichAssessment + ":" + WhichTarget + ":" + WhatToExecute + ":" + SelectedCred;

});

$("#ExecuteAssessmentSetNowForAllMods").click(function(e) {

    var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
    var SelC = document.getElementById("SelectedExeCriT").value;

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Execute Assessment Modules in Modules Set: " + ThisModulesSet + " for Criteria: " + SelC + " ?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "EXECUTEASSESSMENTFORMODULESSET";
    //document.getElementById("ForMultiStringID").innerHTML = WhichAssessment + ":" + WhichTarget + ":" + WhatToExecute + ":" + SelectedCred;

});

$("#AddNewTemplateNow").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add New Template?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDTEMPLATE";

});

$("#AddNewModToListNowButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add Module to Cloud Dynamic Framework?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDNEWMODULE";

});

$("#UpdateaExistingModuleButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Edit Module and Save Changes?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "EDITEXISTINGMODULE";

});

function myFunction() {

    var modal = document.getElementById("LoginRegisterModal");
    modal.style.display = "none";

    //document.getElementById("RefAllModulesNowButton").click();

}

$("#RefCDFModuleDataForTenant").click(function(e) {

    e.preventDefault();

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("UserSessDetailsDiv").innerHTML = RCC;

    var ScriptNameNow = document.getElementById("SelectedScriptNameNow").innerHTML;

    var ThisType = document.getElementById("HandleEntryHidden").innerHTML;

    var ThisT = document.getElementById("RightSideLoadedTens").value;
    var res = ThisT.split(":");
    var ThisTenant = res[0];

    document.getElementById("SelectedAVDTenNow").innerHTML = "Target: " + ThisTenant;

    var FinalTenSelected = ThisTenant

    var ThisModName = ScriptNameNow
    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/LoadSelectedModuleData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'ThisTenant': FinalTenSelected,
            'ThisModName': ThisModName,
            'ThisUser': FinalUserNameNow,
            'TRPKey': TRPKey,
            "type": "SOCKETRefCDFModuleDataForTenant",
            'userId': userId
        },
        success: function(data) {
            if (data.message == "FileNotFound") {

                var InsertC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>Module has not been executed for Selected Tenant...</p>'
                document.getElementById("UserSessDetailsDiv").innerHTML = InsertC;

                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                document.getElementById("GettingReadyID").style.display = "none";

                document.getElementById("ExecuteSelModuleNow").click();

            } else {

                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ModuleDataTableForAllMods'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var TotRowsNow = 0;

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckIfBlank = cells[0]
                        var ThisLastRefDate = cells[1];

                        if (CheckIfBlank == "LASTREFDATE") {
                            document.getElementById("SessManagerLastRefDate").innerHTML = ThisLastRefDate;
                        } else {
                            if (ThisType == "Info") {
                                if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                    var row = datatable.insertRow(-1);

                                    ++TotRowsNow;

                                    for (var j = 0; j < cells.length; j++) {
                                        var CheckIfBlank = cells[0]
                                        if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];

                                            if (TotRowsNow == 1) {

                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";
                                            }

                                        }
                                    }
                                }
                            }

                            if (CheckIfBlank == "Action") {
                                // Then code according to action script

                            }
                        }

                    }

                    var dtable = document.getElementById("UserSessDetailsDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    document.getElementById("GettingReadyID").style.display = "none";

                } else {

                    document.getElementById("UserSessDetailsDiv").innerHTML = "";

                }



            }



        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            document.getElementById("GettingReadyID").style.display = "none";

        }
    });
});

function RightSideLoadedTensSwitchToFunction() {

    document.getElementById("RefCDFModuleDataForTenant").click();

}

function LoadCurModuleFunction(ThisIDAndInfo) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ShowCustomModulePaneNow").style.display = "block";

    //var HandleString = ThisProfTen + ":" + ThisTenShare + ":" + cells[3]
    var ThisModName = ThisIDAndInfo;

    var res = ThisIDAndInfo.split(":");
    var ThisID = res[0];
    var ThisType = res[1];
    var ThisModTypeNow = res[2];

    var ReplModeNow = ThisID.replaceAll('_', " ");
    var LoadedModule = document.getElementById("SelectedScriptNameNow").innerHTML;

    if (LoadedModule == ReplModeNow) {

    } else {

        document.getElementById("HandleEntryHidden").innerHTML = ThisType;

        var ThisTenNow = document.getElementById("RightSideLoadedTens").value;
        document.getElementById("SelectedAVDTenNow").innerHTML = "Target: " + ThisTenNow;

        document.getElementById("SelectedScriptNameNow").innerHTML = ReplModeNow

        var ThisTenant = document.getElementById("RightSideLoadedTens").value;
        var FinalTenSelected = ThisTenant

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var TRPKey = document.getElementById("TRPKeyN").value;

        var ProceedOrNot = "No";

        if (ThisModTypeNow == "Azure" || ThisModTypeNow == "AVD_Modules") {
            document.getElementById("WhichTenantToSelectNow").innerHTML = "Select Azure Tenant";
        }
        if (ThisModTypeNow == "Office_365_Modules") {
            document.getElementById("WhichTenantToSelectNow").innerHTML = "Select Office 365 Tenant";
        }
        if (ThisModTypeNow == "AD_Modules") {
            document.getElementById("WhichTenantToSelectNow").innerHTML = "Select AD Forest";
        }

        var ThisVal = $('#RightSideLoadedTens option').length;
        if (ThisVal > 0) {} else {
            ProceedOrNot = "Yes"
        }

        if (ProceedOrNot == "Yes") {

            /*
            $.ajax({
                url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: false,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    "type": "SOCKETLoadCurModuleFunction",
                    'userId': userId
                },
                success: function(data) {

                    if (data.message) { // That means if there is data available
                        const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                        var CreateTempTens = document.getElementById("RightSideLoadedTens");
                        var options = document.querySelectorAll('#RightSideLoadedTens option');
                        options.forEach(o => o.remove());

                        let res = data.message.replaceAll('"', "");

                        var rows = res.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split("#");
                            if (cells.length > 1) {

                                var newcell = cells[0];

                                var ThisStrNow = newcell;
                                var NewStrNow = ThisStrNow.substring(0, 3);
                                var WhichTargetNow = cells[7];

                                if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                                    if (newcell == "" || newcell == null) {} else {

                                        if (WhichTargetNow == "AZURE-AVD") {
                                            var optionR = document.createElement("option");
                                            optionR.text = cells[0] + ":AZURE TENANT";
                                            CreateTempTens.add(optionR);
                                        }
                                        if (WhichTargetNow == "OFFICE") {
                                            var optionR = document.createElement("option");
                                            optionR.text = cells[8] + ":OFFICE TENANT";
                                            CreateTempTens.add(optionR);
                                        }
                                        if (WhichTargetNow == "ADFOREST") {
                                            var optionR = document.createElement("option");
                                            optionR.text = cells[11] + ":AD FOREST";
                                            CreateTempTens.add(optionR);
                                        }

                                    }
                                }

                            }
                        }

                    } else {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                    }


                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("SuperNovaStatusID").style.color = "red";
                }
            });
            */
        }
        //document.getElementById("RefCDFModuleDataForTenant").click();
    }
}

$("#RefAllModulesDataHereN").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETForManageModulesTable",
            'userId': userId
        },
        success: function(data) {

            var datatable = document.createElement("table");
            datatable.id = 'ManageModulesTable'
            datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            var TotDefMods = 0;
            var TotOfficeMods = 0;
            var TotADMods = 0;
            var TotAVDMods = 0;

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0];
                var CheckSRow = cells[1];

                if (CheckFRow == "" || CheckFRow == null) {

                } else {

                    var row = datatable.insertRow(-1);

                    if (CheckFRow == "Module") {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[4];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module Type";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Technology Category";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Description";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "200px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Edit Module";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                    } else {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[4];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[5];

                        if (cells[7] == "" || cells[7] == null) {
                            var TCat = "none"
                        } else {
                            var TCat = cells[7].replace(/[\r\n]+/gm, "");
                        }

                        var cell = row.insertCell(-1);
                        cell.innerHTML = TCat;

                        if (cells[5] == "Default Module") {
                            ++TotDefMods;
                        }
                        if (cells[5] == "Office 365 Assessment") {
                            ++TotOfficeMods;
                        }
                        if (cells[5] == "AVD Assessment") {
                            ++TotAVDMods;
                        }
                        if (cells[5] == "AD Assessment") {
                            ++TotADMods;
                        }

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[6];
                        cell.style.lineHeight = "14px";

                        FinalServerName = cells[0];
                        var ReplDataN = FinalServerName.replaceAll(' ', "_");

                        var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #4c4c4c;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveCurrentlySelectedModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Module</button>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = RemoveModuleNow;

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Single Click to Edit Module";
                        cell.style.fontSize = "14px";
                        cell.style.fontFamily = "Roboto";
                        cell.style.fontWeight = "500";
                        cell.style.color = "#e18d42";
                        cell.style.fontStyle = "italic";
                        cell.style.textAlign = "center";
                        cell.style.lineHeight = "16px";


                    }
                }
            }

            var dtable = document.getElementById("AllModulesTableDivHere");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            var tableRT = document.getElementById('ManageModulesTable');
            var cells = tableRT.getElementsByTagName('td');
            for (var i = 0; i < cells.length; i++) {
                // Take each cell
                var cell = cells[i];
                // do something on onclick event for cell
                cell.onclick = function() {
                    // Get the row id where the cell exists

                    document.getElementById("AddCDNewScriptMod").style.display = "block";

                    var rowId = this.parentNode.rowIndex;
                    var rowsNotSelected = tableRT.getElementsByTagName('tr');
                    for (var row = 0; row < rowsNotSelected.length; row++) {
                        rowsNotSelected[row].style.color = "#666666";
                        rowsNotSelected[row].style.background = "white";
                        rowsNotSelected[row].classList.remove('selected');
                    }

                    var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                    rowSelected.style.color = "black";
                    rowSelected.style.background = "#B1EDFF";
                    rowSelected.className += "selected";

                    var ThisModName = rowSelected.cells[0].innerHTML;
                    var SItem = ThisModName.replace(/[\r\n]+/gm, "");

                    var ModTarget = rowSelected.cells[1].innerHTML;
                    var ModType = rowSelected.cells[2].innerHTML;
                    var ModDate = rowSelected.cells[3].innerHTML;
                    var ModCategory = rowSelected.cells[4].innerHTML;
                    var ModuleType = rowSelected.cells[5].innerHTML;
                    var TechCatNow = rowSelected.cells[6].innerHTML;
                    var ModDesNow = rowSelected.cells[7].innerHTML;

                    document.getElementById("NewModNameNow").value = ThisModName;
                    document.getElementById("NewModUpdateDate").value = ModDate;
                    document.getElementById("NewModModuleTarget").value = ModTarget;
                    document.getElementById("NewModScriptType").value = ModType;
                    document.getElementById("ModuleCategoryNow").value = ModCategory;
                    document.getElementById("ModuleTypeNowSS").value = ModuleType;
                    document.getElementById("ModDescriptionHere").value = ModDesNow;
                    document.getElementById("ModuleTechnologyCategoryNow").value = TechCatNow;

                    var TRPKey = document.getElementById("TRPKeyN").value;
                    $.ajax({
                        url: '/CallGetModDetails', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: false,
                        timeout: 50000,
                        data: {
                            'TRPKey': TRPKey,
                            'ThisModName': ThisModName
                        },
                        success: function(data) {
                            if (data.message) {

                            } else {
                                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                            }
                        },
                        error: function() {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    });

                    $.ajax({
                        url: '/CallGetModDetailsWithoutCred', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: false,
                        timeout: 50000,
                        data: {
                            'TRPKey': TRPKey,
                            'ThisModName': ThisModName
                        },
                        success: function(data) {
                            if (data.message) {

                                if (data.message == "FileNotFound") {
                                    document.getElementById("CDPCodeBox").value = "No Code Found";
                                } else {
                                    document.getElementById("CDPCodeBox").value = data.message;
                                }

                            } else {
                                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                            }
                        },
                        error: function() {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    });

                    $.ajax({
                        url: '/CallGetModDetailsWithCred', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: false,
                        timeout: 50000,
                        data: {
                            'TRPKey': TRPKey,
                            'ThisModName': ThisModName
                        },
                        success: function(data) {
                            if (data.message) {

                                if (data.message == "FileNotFound") {
                                    document.getElementById("CDPCodeBoxWithCred").value = "No Code Found";
                                } else {
                                    document.getElementById("CDPCodeBoxWithCred").value = data.message;
                                }

                            } else {
                                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                            }
                        },
                        error: function() {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    });

                    $.ajax({
                        url: '/CallGetDPDashFile', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: false,
                        timeout: 50000,
                        data: {
                            'TRPKey': TRPKey,
                            'ThisModName': ThisModName
                        },
                        success: function(data) {
                            if (data.message) {

                                if (data.message == "FileNotFound") {

                                    document.getElementById("ModuleNowTestPassedBox").value = "No Text Found";
                                    document.getElementById("ModuleNowTestIssueBox").value = "No Text Found";
                                    document.getElementById("ModuleNowTestImpactBox").value = "No Text Found";
                                    document.getElementById("ModuleNowTestRecBox").value = "No Text Found";

                                } else {

                                    let res = data.message.replaceAll('"', "");
                                    var rows = res.split("\n");

                                    for (var i = 0; i < rows.length; i++) {
                                        var cells = rows[i].split(",");

                                        var CheckFRow = cells[0];
                                        var CheckSRow = cells[1];

                                        if (CheckFRow == "PASSEDTEXT") {
                                            document.getElementById("ModuleNowTestPassedBox").value = CheckSRow;
                                        }
                                        if (CheckFRow == "ISSUETEXT") {
                                            document.getElementById("ModuleNowTestIssueBox").value = CheckSRow;
                                        }
                                        if (CheckFRow == "IMPACTTEXT") {
                                            document.getElementById("ModuleNowTestImpactBox").value = CheckSRow;
                                        }
                                        if (CheckFRow == "RECTEXT") {
                                            document.getElementById("ModuleNowTestRecBox").value = CheckSRow;
                                        }

                                    }
                                }

                            } else {
                                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                            }
                        },
                        error: function() {
                            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        }
                    });

                }
            }

            document.getElementById("TotDefModulesHere").innerHTML = TotDefMods;
            document.getElementById("TotADAssModulesHere").innerHTML = TotADMods;
            document.getElementById("TotOfficeAssModulesHere").innerHTML = TotOfficeMods;
            document.getElementById("TotAVDAssModulesHere").innerHTML = TotAVDMods;

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});


$("#RefAllNewTemplatesNowFromServer").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAllTemplates', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewTemplatesNowFromServer",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'TemplatesTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "TemplateName") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            FinalServerName = cells[0] + "#" + cells[1];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:130px; padding:6px;" onclick="RemoveCurrentTemplateFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Template</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("AllTemplatesDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var tableRT = document.getElementById('TemplatesTable');
                var cells = tableRT.getElementsByTagName('td');
                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRT.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {
                            rowsNotSelected[row].style.color = "#666666";
                            rowsNotSelected[row].style.background = "white";
                            rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                        rowSelected.style.color = "black";
                        rowSelected.style.background = "#B1EDFF";
                        rowSelected.className += "selected";

                        //var rr = tableRT.insertRow(rowId + 1);
                        //var cell = rr.insertCell();
                        //cell.innerHTML = "THIS";

                        var TemplateName = rowSelected.cells[0].innerHTML;
                        var TemplateType = rowSelected.cells[1].innerHTML;

                        document.getElementById("SelTempNameAndType").innerHTML = TemplateName + ":" + TemplateType;

                        var SItem = TemplateType.replace(/[\r\n]+/gm, "");

                        if (SItem == "Email Template") {

                            document.getElementById("SetAllUnAvailable").style.display = "none";
                            document.getElementById("SetAllAvailableTasks").style.display = "none";

                            var TRPKey = document.getElementById("TRPKeyN").value;
                            $.ajax({
                                url: '/LoadEmailTemplatesAttr', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: false,
                                timeout: 50000,
                                data: {
                                    'TRPKey': TRPKey,
                                    'TemplateName': TemplateName,
                                    'TemplateType': TemplateType
                                },
                                success: function(data) {
                                    if (data.message) {

                                        var datatable = document.createElement("table");
                                        datatable.id = 'EmailTemplateAttrTable'
                                        datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                                        let res = data.message.replaceAll('"', "");
                                        var rows = res.split("\n");

                                        for (var i = 0; i < rows.length; i++) {
                                            var cells = rows[i].split(",");

                                            var CheckFRow = cells[0];
                                            var CheckSRow = cells[1];

                                            if (CheckFRow == "TemplateName") {
                                                var row = datatable.insertRow(-1);

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[1];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";
                                                cell.style.width = "125px";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";
                                                cell.style.width = "200px";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[3];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";
                                            }

                                            if (CheckFRow == TemplateName) {
                                                var row = datatable.insertRow(-1);

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[1];
                                                cell.style.background = "aliceblue";
                                                cell.style.width = "200px";
                                                cell.style.fontWeight = "500";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.contentEditable = true;

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[3];

                                            }

                                        }

                                        var dtable = document.getElementById("TemplateAttrDiv");
                                        dtable.innerHTML = "";
                                        dtable.appendChild(datatable);

                                    } else {
                                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                    }
                                },
                                error: function() {
                                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                }
                            });

                        }

                        if (SItem == "Authorization Template") {

                            document.getElementById("SetAllUnAvailable").style.display = "block";
                            document.getElementById("SetAllAvailableTasks").style.display = "block";

                            var TRPKey = document.getElementById("TRPKeyN").value;
                            $.ajax({
                                url: '/LoadAuthTemplateAttr', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: false,
                                timeout: 50000,
                                data: {
                                    'TRPKey': TRPKey,
                                    'TemplateName': TemplateName,
                                    'TemplateType': TemplateType
                                },
                                success: function(data) {
                                    if (data.message) {

                                        var datatable = document.createElement("table");
                                        datatable.id = 'AuthAttrTable'
                                        datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                                        let res = data.message.replaceAll('"', "");
                                        var rows = res.split("\n");

                                        for (var i = 0; i < rows.length; i++) {
                                            var cells = rows[i].split(",");

                                            var CheckFRow = cells[0];
                                            var CheckSRow = cells[1];

                                            if (CheckFRow == "TemplateName") {

                                                var row = datatable.insertRow(-1);
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[1];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";

                                            }

                                            if (CheckFRow == TemplateName) {
                                                var row = datatable.insertRow(-1);

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[1];
                                                cell.style.width = "400px";
                                                cell.style.fontWeight = "500";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];

                                                var SItemNow = cells[2].replace(/[\r\n]+/gm, "");

                                                if (SItemNow == "Unavailable") {
                                                    cell.style.color = "#ff6000"
                                                }
                                                if (SItemNow == "Available") {
                                                    cell.style.color = "green"
                                                }

                                            }

                                        }

                                        var dtable = document.getElementById("TemplateAttrDiv");
                                        dtable.innerHTML = "";
                                        dtable.appendChild(datatable);


                                        var tableRTAuth = document.getElementById('AuthAttrTable');
                                        var cells = tableRTAuth.getElementsByTagName('td');
                                        for (var i = 0; i < cells.length; i++) {
                                            // Take each cell
                                            var cell = cells[i];
                                            // do something on onclick event for cell
                                            cell.onclick = function() {
                                                // Get the row id where the cell exists

                                                var rowId = this.parentNode.rowIndex;
                                                var rowsNotSelected = tableRTAuth.getElementsByTagName('tr');
                                                for (var row = 0; row < rowsNotSelected.length; row++) {
                                                    rowsNotSelected[row].style.color = "#666666";
                                                    rowsNotSelected[row].style.background = "white";
                                                    rowsNotSelected[row].classList.remove('selected');
                                                }

                                                var rowSelected = tableRTAuth.getElementsByTagName('tr')[rowId];
                                                rowSelected.style.color = "black";
                                                rowSelected.style.background = "#B1EDFF";
                                                rowSelected.className += "selected";

                                                var ThisTaskAvaNow = rowSelected.cells[1].innerHTML;

                                                if (ThisTaskAvaNow == "Available") {
                                                    rowSelected.cells[1].innerHTML = "Unavailable"
                                                    rowSelected.cells[1].style.color = "#ff6000";

                                                } else {
                                                    rowSelected.cells[1].innerHTML = "Available"
                                                    rowSelected.cells[1].style.color = "green";
                                                }

                                                //document.getElementById("UpdateTasksNumberNow").click();

                                                // ModifyRBACTaskNowForUserFunction(ThisUserNow, ThisTenantNow, ThisTaskNow, ThisTaskAvaNow, ThisTaskTypeNow)

                                            }
                                        }


                                    } else {
                                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                    }
                                },
                                error: function() {
                                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                }
                            });

                        }
                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

$(document).ready(function() {

    $("#SearchModInProcessingAgentPane").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ProcAgentTableNow tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#ManageModulesSearchModInProcessingAgentPane").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ManageModulesTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#ManageSetSearchModInProcessingAgentPane").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ModuleDataTableForAllModsModulesSet tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#AssessmentSetSearchInGridNow").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ADAssessmentTableNow tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});

$(document).ready(function() {
    $("#SearchInAllDataGrid").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ModuleDataTableForAllMods tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function() {

    $("#searchUserSessTable").on("keyup", function() {

        var WhichSetToCheck = document.getElementById("WhichSetToSearchIn").innerHTML;

        var value = $(this).val().toLowerCase();

        if (WhichSetToCheck == "AllViewsDiv") {
            $("#CDPViewsTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }

        if (WhichSetToCheck == "AllScriptModsDiv") {
            $("#CDModulesTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }
        if (WhichSetToCheck == "AllScriptForAVDModules") {
            $("#AVDModulesTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }
        if (WhichSetToCheck == "AllScriptForActiveDirectoryModules") {
            $("#ActiveDirectoryModulesTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }
        if (WhichSetToCheck == "AllScriptForOfficeModules") {
            $("#OfficeModulesTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }
        if (WhichSetToCheck == "AllScriptForOtherModules") {
            $("#OtherModulesTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }

    });


});

$(document).ready(function() {
    $("#SearchInADAssessmentDiv").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ADAssessmentTableNow tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$("#ShowCDFExecutionLog").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ThisTenant = document.getElementById("RightSideLoadedTens").value;
    var ThisModName = document.getElementById("SelectedScriptNameNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var NewRR = ThisTenant.split(":");
    var FinalTenantNow = NewRR[0];

    e.preventDefault();
    $.ajax({
        url: '/CallLoadModuleLog', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ThisTenant': FinalTenantNow,
            'ThisModName': ThisModName,
            'ThisLUser': FinalUserNameNow
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ExecutionLogForModuleTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var row = datatable.insertRow(-1);

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    var cell = row.insertCell(-1);
                    cell.innerHTML = cells[0];
                    cell.style.width = "120px";

                    var cell = row.insertCell(-1);
                    cell.innerHTML = cells[1];

                }

                var dtable = document.getElementById("ModuleExecutionLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

$("#RefADAssessmentTestsAllButton").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ThisTenant = document.getElementById("ADForestsTargetList").value;
    var WhichAssessment = document.getElementById("MSADAssessmentNameNN").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    e.preventDefault();
    $.ajax({
        url: '/CallLoadADTests', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ThisTenant': ThisTenant,
            'ThisLUser': FinalUserNameNow,
            'WhichAssessment': WhichAssessment
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ADAssessmentTableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                var TotNotExecuted = 0;
                var TotPassed = 0;
                var TotCritical = 0;
                var TotHigh = 0;
                var TotMedium = 0;
                var TotLow = 0;
                var TotInError = 0;
                var TotModsNow = 0;

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (WhichAssessment == "Microsoft Active Directory Assessment") {

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "AD Test") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "200px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "117px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "100px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "100px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Details";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "left";
                            cell.style.width = "200px";
                            cell.style.textAlign = "center";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Execute";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "100px";
                            cell.style.textAlign = "center";


                        } else {

                            var PackDes = cells[5];
                            var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: #0bb20b;" aria-hidden="true"></i>'
                            var PackDesEle = '<p style="font-size: 12px;color: #666;text-align: left;padding-top: 0px;margin: 0px;line-height: 14px;padding-left: 17px;padding-bottom: 15px;padding-top: 0px;margin-top: 0px;/*! font-style: italic; */font-weight: 400;margin-right:111px;"><br>' + PackDes + '</p>'

                            var PackIssueText = cells[6];

                            ++TotModsNow;

                            var cell = row.insertCell(-1);
                            cell.innerHTML = PackIcon + cells[0] + PackDesEle;
                            cell.style.width = "600px";
                            cell.style.fontSize = "13px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.color = "#0c3d68";
                            cell.style.paddingTop = "15px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];

                            if (cells[3] == "Passed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#0bc80b";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotPassed;
                            }
                            if (cells[3] == "Critical") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotCritical;
                            }
                            if (cells[3] == "High") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotHigh;
                            }
                            if (cells[3] == "Medium") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotMedium;
                            }
                            if (cells[3] == "Low") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d9b151";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotLow;
                            }
                            if (cells[3] == "Not Executed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#47b9e6";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotNotExecuted;
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];

                            var DPRemoveSpaces = cells[0].replace(/ /g, '-')
                            var ReplDataN = DPRemoveSpaces + ":" + cells[3];
                            var PackIssueTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;">' + PackIssueText + '</p>'
                            var ShowData = PackIssueTextP + '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:110px; padding:6px;" onclick="ShowDetailsForTestFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Show Details</button>'
                            var ExecuteSingle = '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="LoadCurModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Execute</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ShowData;

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ExecuteSingle;


                        }
                    }

                    if (WhichAssessment == "Microsoft Office Assessment") {
                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "Office Test") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "200px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "117px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "100px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Details";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "200px";
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Execute";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "100px";
                            cell.style.textAlign = "center";


                        } else {

                            var PackIssueText = cells[5];
                            var PackDes = cells[4];
                            var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: #0bb20b;" aria-hidden="true"></i>'
                            var PackDesEle = '<p style="font-size: 12px;color: #666;text-align: left;padding-top: 0px;margin: 0px;line-height: 14px;padding-left: 17px;padding-bottom: 15px;padding-top: 0px;margin-top: 0px;/*! font-style: italic; */font-weight: 400;margin-right:111px;"><br>' + PackDes + '</p>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = PackIcon + cells[0] + PackDesEle;
                            cell.style.width = "600px";
                            cell.style.fontSize = "13px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.color = "#0c3d68";
                            cell.style.paddingTop = "15px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];

                            if (cells[3] == "Passed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#0bc80b";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotPassed;
                            }
                            if (cells[3] == "Critical") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotCritical;
                            }
                            if (cells[3] == "High") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotHigh;
                            }
                            if (cells[3] == "Medium") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotMedium;
                            }
                            if (cells[3] == "Low") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d9b151";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotLow;
                            }
                            if (cells[3] == "Not Executed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#47b9e6";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotNotExecuted;
                            }

                            var DPRemoveSpaces = cells[0].replace(/ /g, '-')
                            var ReplDataN = DPRemoveSpaces + ":" + cells[3];
                            var PackIssueTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;">' + PackIssueText + '</p>'

                            if (PackIssueText == "" || PackIssueText == null) {
                                var ShowData = '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:110px; padding:6px;" onclick="ShowDetailsForTestFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Show Details</button>'
                            } else {
                                var ShowData = PackIssueTextP + '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:110px; padding:6px;" onclick="ShowDetailsForTestFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Show Details</button>'
                            }
                            var ExecuteSingle = '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="LoadCurModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Execute</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ShowData;

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ExecuteSingle;


                        }
                    }
                }

                var dtable = document.getElementById("MicrosoftADAssDivData");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Modules</span>'
                document.getElementById("TotModulesInSetN").innerHTML = TotModsNow + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Critical</span>'
                document.getElementById("ADAllCriticalNumber").innerHTML = TotCritical + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">High</span>'
                document.getElementById("ADAllHighNumber").innerHTML = TotHigh + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Medium</span>'
                document.getElementById("ADAllMediumNumber").innerHTML = TotMedium + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">In Error</span>'
                document.getElementById("ADAllInErrorNumber").innerHTML = TotInError + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Low</span>'
                document.getElementById("ADAllLowNumber").innerHTML = TotLow + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Passed</span>'
                document.getElementById("ADAllPassedNumber").innerHTML = TotPassed + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Not Executed</span>'
                document.getElementById("ADAllNotExecutedNumber").innerHTML = TotNotExecuted + ThisPNow;

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});


function MonitorAssessmentNow() {
    // Check Status here and load logs

    var GlobalAssessmentMonitor = setInterval(function() {
        CheckAssessmentMonitoringFunction()
    }, 30000);

    function CheckAssessmentMonitoringFunction() {

        // Check if AssessmentStart.START file exists

        var TRPKey = document.getElementById("TRPKeyN").value;
        var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
        var SelCRI = document.getElementById("SelectedExeCriT").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/CallCheckAssessmentStartedFile', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'ThisModulesSet': ThisModulesSet,
                'SelCRI': SelCRI,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) {
                    if (data.message == "FileNotFound") {
                        clearInterval(GlobalAssessmentMonitor);
                        document.getElementById("RefAllModulesForAssModulesSet").click();
                        document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
                    } else {
                        document.getElementById("RefAllModulesForAssModulesSet").click();
                    }

                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
                }
            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
            }
        });

    }

}

function CheckAVDDiscoveryStatusFunction() {
    // Check Status here and load logs

    var GlobalAssessmentMonitorForAVDDiscovery = setInterval(function() {
        CheckGlobalDiscoveryAssessmentFileNow()
    }, 30000);

    function CheckGlobalDiscoveryAssessmentFileNow() {

        // Check if AssessmentStart.START file exists

        var TRPKey = document.getElementById("TRPKeyN").value;
        var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;
        var SelCRI = document.getElementById("SelectedExeCriT").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/CallCheckAVDDiscoveryFile', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'ThisModulesSet': ThisModulesSet,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) {
                    if (data.message == "FileNotFound") {
                        clearInterval(GlobalAssessmentMonitorForAVDDiscovery);
                        FillAVDDiscoveryDataNow(data.message);
                        document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "none";
                    } else {
                        FillAVDDiscoveryDataNow(data.message);
                    }

                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "none";
                }
            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "none";
            }
        });

    }

}

function EnableDisableBackRefForCurModule(ThisModuleNow) {


}

function ShowDetailsForTestFunction(ThisTest) {

    var res = ThisTest.split(":");
    var ThisTest = res[0];
    var ThisTestSev = res[1];

    var FinalTestNow = ThisTest.replaceAll('-', " ");

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("TestDetailsDivNow").innerHTML = RCC;

    document.getElementById("ShowTestDetailsMod").style.display = "block";

    document.getElementById("TestDetailsNowForSelectedOne").innerHTML = "Test: " + ThisTest;

    var TRPKey = document.getElementById("TRPKeyN").value;
    //var WhichAssessment = document.getElementById("MSADAssessmentNameNN").innerHTML;
    //var WhichTarget = document.getElementById("ADForestsTargetList").value;

    var ModSetName = document.getElementById("SelectedAssSetNameNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallLoadTestDetailsNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            //'WhichAssessment': WhichAssessment,
            //'WhichTarget': WhichTarget,
            'ThisLUser': FinalUserNameNow,
            'ThisTest': FinalTestNow,
            'ThisTestSev': ThisTestSev,
            'ModSetName': ModSetName
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'TestDetailsTableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var IssueNow = "";
                var ImpactNow = "";
                var RecNow = "";

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var row = datatable.insertRow(-1);
                    var CheckRowNow = 0;

                    for (var j = 0; j < cells.length; j++) {
                        var CheckIfBlank = cells[0]
                        if (CheckIfBlank == "ISSUENOW") {
                            IssueNow = cells[1];
                        }
                        if (CheckIfBlank == "IMPACTNOW") {
                            ImpactNow = cells[1];
                        }
                        if (CheckIfBlank == "RECOMMENDATIONNOW") {
                            RecNow = cells[1];
                        }
                        if (CheckIfBlank == "" || CheckIfBlank == null || CheckIfBlank == "ISSUENOW" || CheckIfBlank == "IMPACTNOW" || CheckIfBlank == "RECOMMENDATIONNOW") {} else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[j];


                        }
                    }
                }

                var dtable = document.getElementById("TestDetailsDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                document.getElementById("TestIssueBox").value = IssueNow;
                document.getElementById("TestImpactBox").value = ImpactNow;
                document.getElementById("TestRecBox").value = RecNow;


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {

        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var ThisIDNow = content.id;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        var ThisIDToSkip = ThisIDNow
        CollapseAllNowFunction(ThisIDNow);
        document.getElementById("WhichSetToSearchIn").innerHTML = ThisIDToSkip;

    });
}

function CollapseAllNowFunction(ThisIDNow) {

    if (ThisIDNow == "AllScriptModsDiv") {} else {
        document.getElementById("AllScriptModsDiv").style.display = "none";
    }
    if (ThisIDNow == "AllScriptForAVDModules") {} else {
        document.getElementById("AllScriptForAVDModules").style.display = "none";
    }

    if (ThisIDNow == "AllScriptForActiveDirectoryModules") {} else {
        document.getElementById("AllScriptForActiveDirectoryModules").style.display = "none";
    }

    if (ThisIDNow == "AllScriptForOfficeModules") {} else {
        document.getElementById("AllScriptForOfficeModules").style.display = "none";
    }
    if (ThisIDNow == "AllScriptForOtherModules") {} else {
        document.getElementById("AllScriptForOtherModules").style.display = "none";
    }
    if (ThisIDNow == "AllModulesSetPaneAssessment") {} else {
        document.getElementById("AllModulesSetPaneAssessment").style.display = "none";
    }
    if (ThisIDNow == "AllModulesSetPaneDefault") {} else {
        document.getElementById("AllModulesSetPaneDefault").style.display = "none";
    }
    if (ThisIDNow == "DynamicSetingsPane") {} else {
        document.getElementById("DynamicSetingsPane").style.display = "none";
    }
    if (ThisIDNow == "AllViewsDiv") {} else {
        document.getElementById("AllViewsDiv").style.display = "none";
    }


}
$("#RightSideEmailOutput").click(function(e) {


    e.preventDefault();

    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById('ModuleDataTableForAllMods'); // id of table

    for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, "Data.xls");
    } else //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
    return (sa);


});

$("#ResetSettingsForProcAgent").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Reset Settings?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RESETPROCSETTINGS";


});

$("#ResetAssessmentSetButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Reset Settings?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RESETASSPROCSETTINGS";


});

$("#ProcessAgentSetting").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ProcessingAgentPane").style.display = "block";
    document.getElementById("RefProcAgentSetData").click();

});

$("#AssessmentProcAgentPane").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("AssessmentSetProcAgentPane").style.display = "block";
    document.getElementById("RefAssessmentSetProcButtonN").click();

});

$("#OpenModuleSetPaneNow").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ModulesSetPane").style.display = "block";
    document.getElementById("RefAllModulesSetHere").click();

});

$("#RefAssessmentSetProcButtonN").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAssessmentProcAgent', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefProcAgentSetData",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                if (data.message == "FileNotFound") {
                    document.getElementById("ResetSettingsForProcAgent").click();
                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'AssessmentSetProcTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        // $STR = "Assessment Set, Assessment Type, Tenant, Run Every Day At, Notification Condition, Email Template"

                        if (CheckFRow == "" || CheckFRow == null) {} else {

                            var row = datatable.insertRow(-1);

                            if (CheckFRow == "Assessment Set") {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[7];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Edit";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";
                                cell.style.width = "150px";


                            } else {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];

                                if (cells[3] == "Enabled") {
                                    cell.style.color = "#48b70a";
                                    cell.style.fontWeight = "500";
                                    cell.style.fontFamily = "Roboto";
                                }
                                if (cells[3] == "Disabled") {
                                    cell.style.color = "red";
                                    cell.style.fontWeight = "500";
                                    cell.style.fontFamily = "Roboto";
                                }

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[7];

                                ModuleToModify = cells[0];
                                var ReplDataN = ModuleToModify.replaceAll(' ', "_") + ":" + cells[2].replaceAll(' ', "_") + ":" + cells[3].replaceAll(' ', "_") + ":" + cells[4].replaceAll(' ', "_") + ":" + cells[5].replaceAll(' ', "_") + ":" + cells[6].replaceAll(' ', "_") + ":" + cells[7].replaceAll(' ', "_");

                                var ModifyNotSettings = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #515050;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:100px; padding:6px;" onclick="ModifyAssessmentSetNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Modify</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ModifyNotSettings;

                            }
                        }
                    }

                    var dtable = document.getElementById("AssessmentSetProcAgentDivNow");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});


$("#RefProcAgentSetData").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadProcAgentData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefProcAgentSetData",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                if (data.message == "FileNotFound") {
                    document.getElementById("ResetSettingsForProcAgent").click();
                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'ProcAgentTableNow'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        //$STR = "Module, Target, Tenant, Background Refresh, Notification, Notify When, Notify Hour, Email Template"

                        if (CheckFRow == "" || CheckFRow == null) {} else {

                            var row = datatable.insertRow(-1);

                            if (CheckFRow == "Module") {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[7];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Notification Settings";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";
                                cell.style.width = "150px";


                            } else {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];

                                if (cells[3] == "Enabled") {
                                    cell.style.color = "#48b70a";
                                    cell.style.fontWeight = "500";
                                    cell.style.fontFamily = "Roboto";
                                }
                                if (cells[3] == "Disabled") {
                                    cell.style.color = "red";
                                    cell.style.fontWeight = "500";
                                    cell.style.fontFamily = "Roboto";
                                }

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[7];

                                ModuleToModify = cells[0];
                                var ReplDataN = ModuleToModify.replaceAll(' ', "_") + ":" + cells[2] + ":" + cells[3] + ":" + cells[4] + ":" + cells[5] + ":" + cells[6] + ":" + cells[7];

                                var ModifyNotSettings = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #515050;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:100px; padding:6px;" onclick="ModifyNotificationSettingFuncForCurMod(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Modify</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ModifyNotSettings;

                            }
                        }
                    }

                    var dtable = document.getElementById("AllProcessingAgentDivDataHere");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    var tableRT = document.getElementById('ProcAgentTableNow');
                    var cells = tableRT.getElementsByTagName('td');
                    for (var i = 0; i < cells.length; i++) {
                        // Take each cell
                        var cell = cells[i];
                        // do something on onclick event for cell
                        cell.onclick = function() {
                            // Get the row id where the cell exists

                            var rowId = this.parentNode.rowIndex;
                            var rowsNotSelected = tableRT.getElementsByTagName('tr');
                            for (var row = 0; row < rowsNotSelected.length; row++) {
                                rowsNotSelected[row].style.color = "#666666";
                                rowsNotSelected[row].style.background = "white";
                                rowsNotSelected[row].classList.remove('selected');
                            }
                            var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                            rowSelected.style.color = "black";
                            rowSelected.style.background = "#B1EDFF";
                            rowSelected.className += "selected";

                            var TemplateName = rowSelected.cells[0].innerHTML;
                            var TemplateType = rowSelected.cells[1].innerHTML;

                            var SItem = TemplateType.replace(/[\r\n]+/gm, "");


                        }
                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});


function ModifyCurrentTemplateForAdminFunction(ThisAdminNow) {

    document.getElementById("ModifyAdminAuthTemplateMod").style.display = "block";

    var res = ThisAdminNow.split(":");
    var FinalAdminName = res[0];
    var FinalAuthTempName = res[1];

    var ReplAuthTempName = FinalAuthTempName.replaceAll('_', " ");
    document.getElementById("ThisIsSelectedAdminNow").innerHTML = FinalAdminName;
    document.getElementById("ThisIsCurrentAuthTemplate").innerHTML = ReplAuthTempName;

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallLoadAllTemplates', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETModifyCurrentTemplateForAdminFunction",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var xLeft = document.getElementById("SelectANewTemplateAuth");
                $('#SelectANewTemplateAuth').empty();

                var datatable = document.createElement("table");
                datatable.id = 'TemplatesTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    var SItem = CheckSRow.replace(/[\r\n]+/gm, "");

                    if (SItem == "Authorization Template") {
                        var optionR = document.createElement("option");
                        optionR.text = cells[0];
                        xLeft.add(optionR);
                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


    document.getElementById("SelectANewTemplateAuth").value = ReplAuthTempName;


}

function ModifyNotificationSettingFuncForCurMod(ThisModNow) {

    document.getElementById("ModifyProcAgentModSettingsMod").style.display = "block";

    //var HandleString = ThisProfTen + ":" + ThisTenShare + ":" + cells[3]    

    var res = ThisModNow.split(":");
    var FinalModNameNow = res[0];
    var ReplModeNow = FinalModNameNow.replaceAll('_', " ");
    var FinalModTenant = res[1];
    var FinalModBackRef = res[2];
    var FinalModNotifyOrNot = res[3];
    var FinalModNotifyWhen = res[4];
    var FinalModNotifyHour = res[5];
    var FinalModNotifyTemplate = res[6];

    document.getElementById("ThisIstheTenantForModule").innerHTML = FinalModTenant;
    document.getElementById("ThisIsTheModuleNameForTenant").innerHTML = ReplModeNow;
    document.getElementById("ModEnabledOrDisabledBox").value = FinalModBackRef;
    document.getElementById("ModuleNotifyOrNotForProcAgent").value = FinalModNotifyOrNot;
    document.getElementById("ModuleNotifyWhenForProcAgent").value = FinalModNotifyWhen;
    document.getElementById("ModuleNotifyHourNowForProcAgent").value = FinalModNotifyHour;

    $.ajax({
        url: '/CallLoadAllTemplates', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewTemplatesNowFromServer",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var xLeft = document.getElementById("ModuleNotifyEmailTemplateForProcAgent");

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var SItem = CheckSRow.replace(/[\r\n]+/gm, "");
                        if (SItem == "Email Template") {
                            var optionR = document.createElement("option");
                            optionR.text = CheckFRow;
                            xLeft.add(optionR);
                        }
                    }
                }

                document.getElementById("ModuleNotifyEmailTemplateForProcAgent").value = FinalModNotifyTemplate;

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

}


$("#ModifyActivePolicyForPoolNowButtonForProcAgent").click(function(e) {


    var ThisTenForModNow = document.getElementById("ThisIstheTenantForModule").innerHTML;
    var ThisModForTenNow = document.getElementById("ThisIsTheModuleNameForTenant").innerHTML;
    var ThisBackRefEnaOrDis = document.getElementById("ModEnabledOrDisabledBox").value;
    var ThisNotifyOrNot = document.getElementById("ModuleNotifyOrNotForProcAgent").value;
    var ThisNotifyWhen = document.getElementById("ModuleNotifyWhenForProcAgent").value;
    var ThisNotifyHour = document.getElementById("ModuleNotifyHourNowForProcAgent").value;
    var ThisNotifyEmailTemplate = document.getElementById("ModuleNotifyEmailTemplateForProcAgent").value;

    e.preventDefault();
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("ProcAgentTableNow");
    rows = table.rows;
    for (i = 0; i < (rows.length); i++) {

        FileModName = rows[i].getElementsByTagName("td")[0].innerHTML;
        FileModTenant = rows[i].getElementsByTagName("td")[2].innerHTML;

        if (FileModName == ThisModForTenNow) {
            if (FileModTenant == ThisTenForModNow) {
                rows[i].getElementsByTagName("td")[3].innerHTML = ThisBackRefEnaOrDis;
                if (ThisBackRefEnaOrDis == "Enabled") {
                    rows[i].getElementsByTagName("td")[3].style.color = "#48b70a"
                }
                if (ThisBackRefEnaOrDis == "Disabled") {
                    rows[i].getElementsByTagName("td")[3].style.color = "Red"
                }
                rows[i].getElementsByTagName("td")[4].innerHTML = ThisNotifyOrNot;
                rows[i].getElementsByTagName("td")[5].innerHTML = ThisNotifyWhen;
                rows[i].getElementsByTagName("td")[6].innerHTML = ThisNotifyHour;
                rows[i].getElementsByTagName("td")[7].innerHTML = ThisNotifyEmailTemplate;
            }
        }
    }

    document.getElementById("ModifyProcAgentModSettingsMod").style.display = "none";

});

$("#ApplySelectedAuthTempForCurAdmin").click(function(e) {

    var ThisAdminName = document.getElementById("ThisIsSelectedAdminNow").innerHTML;
    var ThisAuthTemplate = document.getElementById("SelectANewTemplateAuth").value;

    e.preventDefault();
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("RBACUsersTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        FileAdminName = rows[i].getElementsByTagName("td")[0].innerHTML;
        if (FileAdminName == ThisAdminName) {
            rows[i].getElementsByTagName("td")[2].innerHTML = ThisAuthTemplate;
        }
    }

    document.getElementById("ModifyAdminAuthTemplateMod").style.display = "none";

});

$("#AuthTemplateModCloseModifyProcModNowSS").click(function(e) {

    document.getElementById("ModifyAdminAuthTemplateMod").style.display = "none";

});

$("#AddNewTemplateNowButtonS").click(function(e) {

    document.getElementById("ManagemenTemplatesMod").style.display = "block";

});


$("#AddNewModuleHereButtonN").click(function(e) {

    var ModuleNameNow = document.getElementById("NewModNameNow").value = "";
    var ModuleDate = document.getElementById("NewModUpdateDate").value = "";
    var ModuleTarget = document.getElementById("NewModModuleTarget").value = "";
    var ModuleType = document.getElementById("NewModScriptType").value = "";

    var CodeLines = document.getElementById("CDPCodeBox").value = "";

    document.getElementById("AddCDNewScriptMod").style.display = "block";

});

$("#ResetAllPanes").click(function(e) {

    document.getElementById("ShowCustomModulePaneNow").style.display = "none";
    document.getElementById("ProcessingAgentPane").style.display = "none";
    document.getElementById("ManageModulesPaneHere").style.display = "none";
    document.getElementById("ManageAdminsPane").style.display = "none";
    document.getElementById("ManageTemplatesPane").style.display = "none";
    document.getElementById("ManageAllTargetsPane").style.display = "none";
    document.getElementById("ModulesSetPane").style.display = "none";
    document.getElementById("ExecuteModulesSetPane").style.display = "none";
    document.getElementById("ShowMicrosoftADPaneNow").style.display = "none";
    document.getElementById("ViewsPane").style.display = "none";
    document.getElementById("ManageViewPaneNow").style.display = "none";
    document.getElementById("ManageConfigSetPane").style.display = "none";
    document.getElementById("AssessmentSetProcAgentPane").style.display = "none";

    //document.getElementById("ShowMicrosoftADPaneNow").style.display = "none";

});

$("#SetAllAvailableTasks").click(function(e) {

    e.preventDefault()

    var table, rows, i, x;
    table = document.getElementById("AuthAttrTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[1].innerHTML = "Available"
        rows[i].getElementsByTagName("td")[1].style.color = "green";
    }

});

$("#SetAllUnAvailable").click(function(e) {

    e.preventDefault()

    var table, rows, i, x;
    table = document.getElementById("AuthAttrTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[1].innerHTML = "Unavailable"
        rows[i].getElementsByTagName("td")[1].style.color = "rgb(255, 96, 0)";
    }

});

$("#SaveTempAttrNowSS").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save Template Attributes?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVETEMPATTR";

});


$("#RefAllNewModulesFromServerButton").click(function(e) {

    //document.getElementById("ThisIsAnAssessmentModulesSet").checked = false;

    var SelModTypeNow = document.getElementById("AddModWhichTypeNow").value;
    var SelModAssTechNow = document.getElementById("AddModSelectWhichAssTech").value;

    var userId = document.getElementById("LoggedInUserName").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;
    e.preventDefault();

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewModulesFromServerButton",
            'userId': userId,
            'SelModTypeNow': SelModTypeNow,
            'SelModAssTechNow': SelModAssTechNow
        },
        success: function(data) {

            var datatable = document.createElement("table");
            datatable.id = 'AllModulesSetTableNowS'
            datatable.setAttribute('class', 'SummaryTableClassforAzModules');

            var DefTen = document.getElementById("RightSideLoadedTens").value;

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0];
                var CheckSRow = cells[1];
                var CheckThisModCat = cells[4];

                if (CheckFRow == "" || CheckFRow == null) {} else {
                    var row = datatable.insertRow(-1);

                    if (CheckFRow == "Module") {

                        var ThisMarkUnAll = '<input id="MarkAllModulesInGrid" type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;"></input>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = ThisMarkUnAll;
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.textAlign = "Center";
                        cell.style.width = "12px";
                        cell.style.paddingLeft = "0px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "190px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "300px";

                    } else {

                        var ResRepl = cells[0].replaceAll(' ', "_");
                        var ReplTarget = cells[1].replaceAll(' ', "_");

                        ThisDataS = ResRepl + ":" + ReplTarget;
                        var HostCheckBox = '<input id=' + ThisDataS + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                        var cell = row.insertCell(-1);
                        cell.innerHTML = HostCheckBox;
                        cell.style.textAlign = "left";
                        cell.style.width = "25px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.textAlign = "left";
                        cell.style.width = "400px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.style.textAlign = "left";
                        cell.style.width = "120px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.style.textAlign = "left";
                        cell.style.width = "300px";

                    }



                }
            }

            var dtable = document.getElementById("AllModulesSetModulesDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            AddTenantsToBoxFunction()

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

$("#RefAllModulesSetHere").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAllModulesSetNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllModulesSetHere",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'AllModulesSetTableDDNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {
                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "Module Set") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Set Type";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "99px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveModulesSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("AllModulesSetDivNowForAllMod");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var tableRT = document.getElementById('AllModulesSetTableDDNow');
                var cells = tableRT.getElementsByTagName('td');
                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRT.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {
                            rowsNotSelected[row].style.color = "#666666";
                            rowsNotSelected[row].style.background = "white";
                            rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                        rowSelected.style.color = "black";
                        rowSelected.style.background = "#B1EDFF";
                        rowSelected.className += "selected";

                        var TemplateName = rowSelected.cells[0].innerHTML;

                        document.getElementById("OpenedModSetNameNow").innerHTML = TemplateName;

                        var TRPKey = document.getElementById("TRPKeyN").value;
                        $.ajax({
                            url: '/LoadModulesSetAttrNow', // This tells server which Route to use OKAYYYY
                            type: 'POST',
                            async: false,
                            timeout: 50000,
                            data: {
                                'TRPKey': TRPKey,
                                'TemplateName': TemplateName,
                                "type": "SOCKETLoadAllModulesSetAttrNN",
                                'userId': userId
                            },
                            success: function(data) {

                                if (data.message) {

                                    var datatable = document.createElement("table");
                                    datatable.id = 'ModulesSetAttrTableNowD'
                                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                                    let res = data.message.replaceAll('"', "");
                                    var rows = res.split("\n");

                                    for (var i = 0; i < rows.length; i++) {
                                        var cells = rows[i].split(",");

                                        var CheckFRow = cells[0];
                                        var CheckSRow = cells[1];

                                        if (CheckFRow == "Module Set") {

                                            var row = datatable.insertRow(-1);
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[1];
                                            cell.style.backgroundColor = "white";
                                            cell.style.color = "#066d95";
                                            cell.style.textAlign = "left";
                                            cell.style.letterSpacing = "0px";
                                            cell.style.fontWeight = "600";
                                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                            cell.style.position = "sticky";
                                            cell.style.zIndex = "22";
                                            cell.style.top = "0px";
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.width = "371px";

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[2];
                                            cell.style.backgroundColor = "white";
                                            cell.style.color = "#066d95";
                                            cell.style.textAlign = "left";
                                            cell.style.letterSpacing = "0px";
                                            cell.style.fontWeight = "600";
                                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                            cell.style.position = "sticky";
                                            cell.style.zIndex = "22";
                                            cell.style.top = "0px";
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.width = "115px";

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[3];
                                            cell.style.backgroundColor = "white";
                                            cell.style.color = "#066d95";
                                            cell.style.textAlign = "left";
                                            cell.style.letterSpacing = "0px";
                                            cell.style.fontWeight = "600";
                                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                            cell.style.position = "sticky";
                                            cell.style.zIndex = "22";
                                            cell.style.top = "0px";
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.width = "115px";

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[4];
                                            cell.style.backgroundColor = "white";
                                            cell.style.color = "#066d95";
                                            cell.style.textAlign = "left";
                                            cell.style.letterSpacing = "0px";
                                            cell.style.fontWeight = "600";
                                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                            cell.style.position = "sticky";
                                            cell.style.zIndex = "22";
                                            cell.style.top = "0px";
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";

                                        }

                                        if (CheckFRow == TemplateName) {
                                            var row = datatable.insertRow(-1);

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[1];
                                            cell.style.width = "200px";
                                            cell.style.fontWeight = "500";

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[2];

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[3];

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[4];
                                            cell.contentEditable = true;
                                            cell.style.background = "white";


                                        }

                                    }

                                    var dtable = document.getElementById("ModulesSetAttrDiv");
                                    dtable.innerHTML = "";
                                    dtable.appendChild(datatable);

                                } else {
                                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                }

                            },
                            error: function() {
                                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                            }
                        });


                    }
                }



            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

function ApplyATenantNowInGridB(ThisIDAndInfo) {

    var ReplModName = ThisIDAndInfo.replaceAll('_', " ");
    var SelTenNow = document.getElementById(ThisIDAndInfo).value;

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[1].innerHTML;

        if (x == ReplModName) {
            rows[i].getElementsByTagName("td")[5].innerHTML = SelTenNow;
        }
    }


};

function LoadModulesSetFunction(ThisIDAndInfo) {

    var res = ThisIDAndInfo.split(":");
    var ThisModuleSetToLoad = res[0];
    var ModuleTypeNow = res[2];
    var AssessmentTypeNow = res[3];

    var ReplSetName = ThisModuleSetToLoad.replaceAll('_', " ");
    var AlreadyLoaded = document.getElementById("SelectedAssSetNameNow").innerHTML;

    if (ReplSetName == AlreadyLoaded) {

    } else {

        var RRAssName = AssessmentTypeNow.replaceAll('_', " ");
        document.getElementById("CDAssessmentTypeNow").innerHTML = RRAssName;

        if (ModuleTypeNow == "Default_Set") {

            document.getElementById("ResetAllPanes").click();
            document.getElementById("ExecuteModulesSetPane").style.display = "block";

            var ReplSetName = ThisModuleSetToLoad.replaceAll('_', " ");

            document.getElementById("LoadedModulesSetName").innerHTML = ReplSetName;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            var TRPKey = document.getElementById("TRPKeyN").value;

            $.ajax({
                url: '/LoadModulesSetAttrNow', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'TemplateName': ReplSetName,
                    "type": "SOCKETLoadModulesSetFunction",
                    'userId': userId
                },
                success: function(data) {

                    if (data.message) {

                        var datatable = document.createElement("table");
                        datatable.id = 'ModulesSetAllModNamesTable'
                        datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");

                            var CheckFRow = cells[0];
                            var CheckSRow = cells[1];

                            if (CheckFRow == "Module Set") {
                                var row = datatable.insertRow(-1);

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";
                                cell.style.width = "0px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Module";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";
                                cell.style.width = "371px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Tenant";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "#066d95";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0px";
                                cell.style.fontSize = "12px";
                                cell.style.fontFamily = "Calibri";
                                cell.style.width = "115px";

                            }

                            if (CheckFRow == ReplSetName) {
                                var row = datatable.insertRow(-1);

                                var IconClass = '<i class="fa fa-dot-circle-o" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 15px;"></i>'

                                var cell = row.insertCell(-1);
                                cell.innerHTML = IconClass;

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];
                                cell.style.width = "200px";
                                cell.style.color = "rgb(12, 61, 104)";
                                cell.style.fontWeight = "400";
                                cell.style.fontSize = "11px";
                                cell.style.fontFamily = "roboto";
                                cell.style.fontWeight = "400";
                                cell.style.lineHeight = "14px";
                                cell.style.paddingLeft = "0px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];
                                //cell.style.color = "rgb(2, 127, 202)";
                                cell.style.fontWeight = "500";
                                cell.style.fontFamily = "Roboto";

                                FinalServerName = cells[1];
                                var ReplDataN = FinalServerName.replaceAll(' ', "_");
                                var FinalNData = ReplDataN + ":" + cells[4];
                                var ExecuteModule = '<button id = ' + FinalNData + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:94px; padding:6px;" onclick="ExecuteSelectedModuleInSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Execute</button>'

                                //var cell = row.insertCell(-1);
                                //cell.innerHTML = ExecuteModule;
                                //cell.style.width = "120px";

                            }

                        }

                        var CheckThisNow = document.getElementById("CheckIfClickedOnExecute").innerHTML;

                        if (CheckThisNow == "YES") {} else {

                            var dtable = document.getElementById("AllModulesInSelectedModulesSetDiv");
                            dtable.innerHTML = "";
                            dtable.appendChild(datatable);

                            var tableRT = document.getElementById('ModulesSetAllModNamesTable');
                            var cells = tableRT.getElementsByTagName('td');
                            for (var i = 0; i < cells.length; i++) {
                                // Take each cell
                                var cell = cells[i];
                                // do something on onclick event for cell
                                cell.onclick = function() {
                                    // Get the row id where the cell exists

                                    var rowId = this.parentNode.rowIndex;
                                    var rowsNotSelected = tableRT.getElementsByTagName('tr');
                                    for (var row = 0; row < rowsNotSelected.length; row++) {
                                        rowsNotSelected[row].style.color = "#666666";
                                        rowsNotSelected[row].style.background = "white";
                                        rowsNotSelected[row].classList.remove('selected');
                                    }
                                    var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                                    rowSelected.style.color = "black";
                                    rowSelected.style.background = "#B1EDFF";
                                    rowSelected.className += "selected";

                                    var ThisModName = rowSelected.cells[1].innerHTML;
                                    var ThisModTen = rowSelected.cells[2].innerHTML;

                                    var SItem = ThisModTen.replace(/[\r\n]+/gm, "");

                                    document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML = ThisModName + ":" + SItem;
                                    document.getElementById("ButtonFillDataInModule").click();


                                }
                            }
                        }


                    } else {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    }

                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }
            });

        }

        if (ModuleTypeNow == "Assessment_Set") {

            $('#SelectedExeCriT').empty();

            document.getElementById("ResetAllPanes").click();
            document.getElementById("ShowMicrosoftADPaneNow").style.display = "block";

            var ReplSetName = ThisModuleSetToLoad.replaceAll('_', " ");
            document.getElementById("SelectedAssSetNameNow").innerHTML = ReplSetName;

            if (RRAssName == "Office 365 Assessment") {
                var xLeft = document.getElementById("SelectedExeCriT");

                var optionR = document.createElement("option");
                optionR.text = "All MSOnline Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All Exchange Online Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All Microsoft Teams Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All SharePoint Online Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All OneDrive Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All Modules";
                xLeft.add(optionR);

                document.getElementById("AVDDiscoveryPaneLaunch").style.display = "none";
            }
            if (RRAssName == "AVD Assessment") {
                var xLeft = document.getElementById("SelectedExeCriT");

                var optionR = document.createElement("option");
                optionR.text = "All Session Host Modules";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All Session Host VM Security Modules";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All FSLogix Configuration Modules";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All Profile Share Modules";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "All Modules";
                xLeft.add(optionR);

                document.getElementById("AVDDiscoveryPaneLaunch").style.display = "block";

            }
            if (RRAssName == "AD Assessment") {
                var xLeft = document.getElementById("SelectedExeCriT");

                var optionR = document.createElement("option");
                optionR.text = "Execute Domain Controller Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "Execute Except Domain Controller Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "Execute Microsoft DHCP Tests";
                xLeft.add(optionR);
                var optionR = document.createElement("option");
                optionR.text = "Execute All AD Tests";
                xLeft.add(optionR);

                document.getElementById("AVDDiscoveryPaneLaunch").style.display = "none";
            }

            document.getElementById("RefAndGetAllCatNow").click();

        }
    }
}


$("#ApplySelTenToAllCheckedMods").click(function(e) {

    var ThisTen = document.getElementById("ModulesSetTenNowSelN").value;

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;

        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        var CheckThisHost = document.getElementById(ThisIDNow).checked;
        if (CheckThisHost == true) {

            rows[i].getElementsByTagName("td")[4].innerHTML = ThisTen;

        }
    }

});

$("#UnCheckAllModulesInListNow").click(function(e) {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        document.getElementById(ThisIDNow).checked = false;
    }

    UpdateSelModNumber()

});

$("#CheckAllModulesInListNow").click(function(e) {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        document.getElementById(ThisIDNow).checked = true;
    }

    UpdateSelModNumber()

});


$("#RefSelectedModuleDataInSetButton").click(function(e) {

    document.getElementById("CheckIfClickedOnExecute").innerHTML = "YES";

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Updating...</p>'
    document.getElementById("SelectedModulesInSetDataDiv").innerHTML = RCC;

    var ThisModuleAndTen = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;

    var res = ThisModuleAndTen.split(":");
    var ThisModName = res[0];
    var ThisModTenant = res[1];
    var ReplModName = ThisModName;
    var ThisTenant = ThisModTenant
    var FinalTenSelected = ThisTenant

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/ExecuteSelectedModuleNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'ThisTenant': FinalTenSelected,
            'ThisModName': ReplModName,
            'ThisUser': FinalUserNameNow,
            'TRPKey': TRPKey,
            "type": "SOCKETRefSelectedModuleDataInSetButton",
            'userId': userId
        },
        success: function(data) {

            document.getElementById("SelectedModulesInSetDataDiv").innerHTML = "";

            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            document.getElementById("GettingReadyID").style.display = "none";

            document.getElementById("ButtonFillDataInModule").click();
            document.getElementById("CheckIfClickedOnExecute").innerHTML = "";

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            document.getElementById("GettingReadyID").style.display = "none";

        }
    });

});


$("#ButtonFillDataInModule").click(function(e) {

    e.preventDefault();

    //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    //document.getElementById("SelectedModulesInSetDataDiv").innerHTML = RCC;

    var ScriptNameNow = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;
    var res = ScriptNameNow.split(":");
    var FinalModNameNow = res[0];
    var FinalTenNameNow = res[1];

    var ThisType = document.getElementById("HandleEntryHidden").innerHTML;
    var ThisType = "Info";

    var FinalTenSelected = FinalTenNameNow

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/LoadSelectedModuleData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'ThisTenant': FinalTenSelected,
            'ThisModName': FinalModNameNow,
            'ThisUser': FinalUserNameNow,
            'TRPKey': TRPKey,
            "type": "SOCKETButtonFillDataInModule",
            'userId': userId
        },
        success: function(data) {

            if (data.message == "FileNotFound") {

                var InsertC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>Module has not been executed for Selected Tenant...</p>'
                document.getElementById("SelectedModulesInSetDataDiv").innerHTML = InsertC;

                document.getElementById("RefSelectedModuleDataInSetButton").click();

            } else {
                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ModuleDataTableForAllModsModulesSet'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var TotRowsNow = 0;

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckIfBlank = cells[0]
                        var ThisLastRefDate = cells[1];

                        if (CheckIfBlank == "LASTREFDATE") {
                            document.getElementById("ModuleSetLastModuleRefDate").innerHTML = "Last Refreshed: " + ThisLastRefDate;
                        } else {
                            if (ThisType == "Info") {
                                if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                    var row = datatable.insertRow(-1);

                                    ++TotRowsNow;

                                    for (var j = 0; j < cells.length; j++) {
                                        var CheckIfBlank = cells[0]
                                        if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];

                                            if (TotRowsNow == 1) {

                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";
                                            }

                                        }
                                    }
                                }
                            }

                            if (CheckIfBlank == "Action") {
                                // Then code according to action script



                            }

                        }
                    }

                    var dtable = document.getElementById("SelectedModulesInSetDataDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                    document.getElementById("GettingReadyID").style.display = "none";

                } else {

                    document.getElementById("UserSessDetailsDiv").innerHTML = "";

                }

            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            document.getElementById("GettingReadyID").style.display = "none";

        }
    });
});


function AddTenantsToBoxFunction() {

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETAddTenantsToBoxFunction",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTens = document.getElementById("AddModSelectTenName");
                var options = document.querySelectorAll('#AddModSelectTenName option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "AZURE-AVD") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "OFFICE") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "ADFOREST") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11];
                                    CreateTempTens.add(optionR);
                                }

                            }
                        }

                    }
                }



            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

}


$("#UpdateSetRefAllNewModulesFromServerButton").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;
    e.preventDefault();

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETUpdateSetRefAllNewModulesFromServerButton",
            'userId': userId
        },
        success: function(data) {

            var datatable = document.createElement("table");
            datatable.id = 'UpdateSetAllModulesSetTableNowS'
            datatable.setAttribute('class', 'SummaryTableClassforAzModules');

            var DefTen = document.getElementById("RightSideLoadedTens").value;

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0];
                var CheckSRow = cells[1];
                var CheckThisModCat = cells[4];

                if (CheckFRow == "" || CheckFRow == null) {} else {

                    var row = datatable.insertRow(-1);

                    if (CheckFRow == "Module") {

                        var ThisMarkUnAll = '<input id="MarkAllModulesInGrid" type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;"></input>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = ThisMarkUnAll;
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.textAlign = "Center";
                        cell.style.width = "40px";
                        cell.style.paddingLeft = "0px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "300px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[4];
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Tenant";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "111px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Apply Tenant";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";

                    } else {

                        var ResRepl = cells[0].replaceAll(' ', "_");
                        var ReplTarget = cells[1].replaceAll(' ', "_");
                        var ReplCat = cells[4].replaceAll(' ', "_");
                        var ReplTen = DefTen.replaceAll(' ', "_");

                        ThisDataS = ResRepl + ":" + ReplTarget + ":" + ReplCat + ":" + ReplTen;
                        var HostCheckBox = '<input id=' + ThisDataS + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                        var cell = row.insertCell(-1);
                        cell.innerHTML = HostCheckBox;
                        cell.style.textAlign = "left";
                        cell.style.width = "25px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.style.textAlign = "left";
                        cell.style.width = "400px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.style.textAlign = "left";
                        cell.style.width = "120px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[4];
                        cell.style.textAlign = "left";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = DefTen;
                        cell.style.textAlign = "left";

                        var DefTenBox = '<select id=' + ResRepl + ' onfocus="UpdateSetAddTenantsToBoxFunction(id)" onchange="UpdateSetApplyATenantNowInGridB(id)" style="width: 152px;padding: 4px;font-size: 11px;color: black;margin-bottom: 5px;margin: 0 auto;border: 1px solid #b5b5b5;border-radius: 5px;height: 29px;background: white;cursor: pointer;border-radius: 5px;"></select>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = DefTenBox;


                    }



                }
            }

            var dtable = document.getElementById("UpdateSETAllModulesSetModulesDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

$("#UpdateSetUnCheckAllModulesInListNow").click(function(e) {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("UpdateSetAllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        document.getElementById(ThisIDNow).checked = false;
    }

});

$("#UpdateSETCheckAllModulesInListNow").click(function(e) {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("UpdateSetAllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        document.getElementById(ThisIDNow).checked = true;
    }

});

$("#ApplyTenantUpdateNowForceButton").click(function(e) {

    var ModuleTenantNow = document.getElementById("SelectATenantToBeChangedID").value;

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("ModulesSetAttrTableNowD");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        rows[i].getElementsByTagName("td")[3].innerHTML = ModuleTenantNow;
    }

    document.getElementById("ChangeTenantForSetMod").style.display = "none";

});

$("#UpdateNowForceButton").click(function(e) {

    var ThisModuleAndOther = document.getElementById("AvailableModulesNowToBeAddedInSeet").value;
    var ModuleTenantNow = document.getElementById("SelectTenantForSelectedModulesD").value;

    var resOne = ThisModuleAndOther.split(':');
    var ModuleNameNow = resOne[0];
    var ModTarget = resOne[1];
    var ModCategory = resOne[2];

    table = document.getElementById("ModulesSetAttrTableNowD");

    var row = table.insertRow(-1);

    var cell = row.insertCell(-1);
    cell.innerHTML = ModuleNameNow;
    var cell = row.insertCell(-1);
    cell.innerHTML = ModTarget;
    var cell = row.insertCell(-1);
    cell.innerHTML = ModCategory;
    var cell = row.insertCell(-1);
    cell.innerHTML = ModuleTenantNow;

});

function UpdateSetAddTenantsToBoxFunction(x) {

    ThisSelEle = x;

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/LoadAllTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETUpdateSetAddTenantsToBoxFunction",
            'userId': userId
        },
        success: function(data) {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTens = document.getElementById(ThisSelEle);
                var options = document.querySelectorAll('#ThisSelEle option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");

                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[7];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "AZURE-AVD") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "OFFICE") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8];
                                    CreateTempTens.add(optionR);
                                }
                                if (WhichTargetNow == "ADFOREST") {
                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11];
                                    CreateTempTens.add(optionR);
                                }

                            }
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

}

function UpdateSetApplyATenantNowInGridB(ThisIDAndInfo) {

    var ReplModName = ThisIDAndInfo.replaceAll('_', " ");
    var SelTenNow = document.getElementById(ThisIDAndInfo).value;

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[1].innerHTML;

        if (x == ReplModName) {
            rows[i].getElementsByTagName("td")[4].innerHTML = SelTenNow;
        }
    }

};

$("#ShowWithCredCodeButton").click(function(e) {

    document.getElementById("WhichPCodeN").innerHTML = "PowerShell Code With Credentials"
    document.getElementById("CDPCodeBox").style.display = "none";
    document.getElementById("CDPCodeBoxWithCred").style.display = "block";

});

$("#ShowWithoutCredCodeButton").click(function(e) {

    document.getElementById("WhichPCodeN").innerHTML = "PowerShell Code Without Credentials"
    document.getElementById("CDPCodeBox").style.display = "block";
    document.getElementById("CDPCodeBoxWithCred").style.display = "none";

});

$("#ApplySelectedModSButton").click(function(e) {

    document.getElementById("UnCheckAllModulesInListNow").click();

    var SelModAssTypeNow = document.getElementById("SelectWhichModAssToApply").value;

    var WhichOneToCheck = ""

    if (SelModAssTypeNow == "Office 365 Assessment Modules") {
        WhichOneToCheck = "Office 365 Assessment";
    }
    if (SelModAssTypeNow == "AVD Assessment Modules") {
        WhichOneToCheck = "AVD Assessment";
    }
    if (SelModAssTypeNow == "AD Assessment Modules") {
        WhichOneToCheck = "AD Assessment";
    }
    if (SelModAssTypeNow == "Azure Assessment Modules") {
        WhichOneToCheck = "Azure Assessment";
    }
    if (SelModAssTypeNow == "DHCP Assessment Modules") {
        WhichOneToCheck = "DHCP Assessment";
    }
    if (SelModAssTypeNow == "Default Set Modules") {
        WhichOneToCheck = "Default Module";
    }

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[4].innerHTML;

        if (x == WhichOneToCheck) {

            s = rows[i].getElementsByTagName("td")[0].innerHTML;
            var ThisNow = s.split('"');
            var ThisIDNow = ThisNow[1];
            document.getElementById(ThisIDNow).checked = true;
        }
    }

    UpdateSelModNumber()

});


$("#ResetAllAttrAuthButton").click(function(e) {

    var ThisTemplateNow = document.getElementById("SelTempNameAndType").innerHTML;

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Do you want to reset Current Template?: " + ThisTemplateNow
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RESETTEMPLATENOW";

});

var TRPKey = document.getElementById("TRPKeyN").value;
var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
var res = ThisLUserNow.split("@");
var FinalUserNameNow = res[0];

var userId = `${TRPKey}-${FinalUserNameNow}`;


$("#RefAllModulesForAssModulesSet").click(function(e) {

    //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    //document.getElementById("MicrosoftADAssDivData").innerHTML = RCC;

    document.getElementById("RefCircleNowForAssSet").style.display = "block";

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ModSetNameNow = document.getElementById("SelectedAssSetNameNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var SelectedCatNow = document.getElementById("SelectedAssCategoryNowF").innerHTML;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAssessmentSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            'ThisLUser': FinalUserNameNow,
            'ModeSetNameNow': ModSetNameNow,
            'SelectedCatNow': SelectedCatNow
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ADAssessmentTableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                var TotNotExecuted = 0;
                var TotPassed = 0;
                var TotCritical = 0;
                var TotHigh = 0;
                var TotMedium = 0;
                var TotLow = 0;
                var TotInError = 0;
                var TotModsNow = 0;

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "Module Name") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Module";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Tenant";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "200px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Technology Category";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "200px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Target";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "200px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Severity";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "117px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Details";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "left";
                            cell.style.width = "200px";
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Execute";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";
                            cell.style.width = "100px";
                            cell.style.textAlign = "center";


                        } else {

                            var TechCatNow = cells[8];

                            var PackDes = cells[1];
                            var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: #0bb20b;" aria-hidden="true"></i>'
                            var PackDesEle = '<p style="font-size: 12px;color: #666;text-align: left;padding-top: 0px;margin: 0px;line-height: 14px;padding-left: 17px;padding-bottom: 15px;padding-top: 0px;margin-top: 0px;/*! font-style: italic; */font-weight: 400;margin-right:111px;"><br>' + PackDes + '</p>'

                            var PackIssueText = cells[5];
                            var PackImpactText = cells[6];
                            var PackRecText = cells[7];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = PackIcon + cells[0] + PackDesEle;
                            cell.style.width = "600px";
                            cell.style.fontSize = "13px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.color = "#0c3d68";
                            cell.style.paddingTop = "15px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];

                            var SItem = TechCatNow.replace(/[\r\n]+/gm, "");
                            var cell = row.insertCell(-1);
                            cell.innerHTML = SItem;

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];

                            if (cells[4] == "Passed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#0bc80b";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotPassed;
                            }
                            if (cells[4] == "Critical") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotCritical;
                            }
                            if (cells[4] == "High") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "rgb(217, 81, 81)";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotHigh;
                            }
                            if (cells[4] == "Medium") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotMedium;
                            }
                            if (cells[4] == "Low") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d9b151";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotLow;
                            }
                            if (cells[4] == "Not Executed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#47b9e6";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "15px";
                                ++TotNotExecuted;
                            }

                            ++TotModsNow;

                            var CheckSevNow = cells[4];

                            var DPRemoveSpaces = cells[0].replace(/ /g, '-')
                            var ReplDataN = DPRemoveSpaces + ":" + cells[4];

                            if (CheckSevNow == "Passed") {
                                var PackIssueTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Remark:</span>' + PackIssueText + '</p>'
                                var PackImpactTextP = ""
                                var PackRecTextP = ""
                            } else {
                                var PackIssueTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Issue:</span>' + PackIssueText + '</p>'
                                var PackImpactTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Impact:</span>' + PackImpactText + '</p>'
                                var PackRecTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Recommendation:</span>' + PackRecText + '</p>'
                            }

                            var ExeMName = cells[0].replace(/ /g, '_')
                            var MExeCri = cells[3].replace(/ /g, '_')
                            var MSetName = document.getElementById("SelectedAssSetNameNow").innerHTML;
                            var NewMSetName = MSetName.replace(/ /g, '_')
                            var ExeReplData = ExeMName + ":" + MExeCri + ":" + NewMSetName;

                            var ShowData = PackIssueTextP + PackImpactTextP + PackRecTextP + '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:110px; padding:6px;" onclick="ShowDetailsForTestFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Show Details</button>'
                            var ExecuteSingle = '<button id = ' + ExeReplData + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="ExecuteSingleAssModInSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Execute</button>'

                            if (cells[4] == "Not Executed") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Not Executed";
                            } else {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ShowData;
                            }
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ExecuteSingle;


                        }
                    }
                }

                var dtable = document.getElementById("MicrosoftADAssDivData");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Modules</span>'
                document.getElementById("TotModulesInSetN").innerHTML = TotModsNow + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Critical</span>'
                document.getElementById("ADAllCriticalNumber").innerHTML = TotCritical + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">High</span>'
                document.getElementById("ADAllHighNumber").innerHTML = TotHigh + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Medium</span>'
                document.getElementById("ADAllMediumNumber").innerHTML = TotMedium + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">In Error</span>'
                document.getElementById("ADAllInErrorNumber").innerHTML = TotInError + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Low</span>'
                document.getElementById("ADAllLowNumber").innerHTML = TotLow + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Passed</span>'
                document.getElementById("ADAllPassedNumber").innerHTML = TotPassed + ThisPNow;

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Not Executed</span>'
                document.getElementById("ADAllNotExecutedNumber").innerHTML = TotNotExecuted + ThisPNow;

                document.getElementById("RefCircleNowForAssSet").style.display = "none";

                ApplyTechCatSevNumber();

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("RefCircleNowForAssSet").style.display = "none";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("RefCircleNowForAssSet").style.display = "none";
        }
    });

    document.getElementById("RefCircleNowForAssSet").style.display = "none";

});

function FillAVDDiscoveryDataNow(ThisDataNow) {

    var datatable = document.createElement("table");
    datatable.id = 'DiscoveryAVDDataTAbleNow'
    datatable.setAttribute('class', 'SummaryTableClassforAzModulesForAVDDis');

    var datatableA = document.createElement("table");
    datatableA.id = 'AVDDiscoveryItemsTable'
    datatableA.setAttribute('class', 'SummaryTableClassforAzModules');

    let res = ThisDataNow.replaceAll('"', "");
    var rows = res.split("\n");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(",");

        var CheckFRow = cells[0];
        var CheckSRow = cells[1];
        var CheckThisModCat = cells[4];

        if (CheckFRow == "ASSCONFIG") {

            if (CheckFRow == "" || CheckFRow == null) {} else {
                var row = datatableA.insertRow(-1);

                if (CheckSRow == "CheckedOrNot") {

                    var cell = row.insertCell(-1);
                    cell.innerHTML = "";
                    cell.style.backgroundColor = "white";
                    cell.style.color = "#066d95";
                    cell.style.textAlign = "left";
                    cell.style.letterSpacing = "0px";
                    cell.style.fontWeight = "600";
                    cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                    cell.style.position = "sticky";
                    cell.style.zIndex = "22";
                    cell.style.top = "0px";
                    cell.style.fontSize = "12px";
                    cell.style.fontFamily = "Calibri";
                    cell.style.width = "10px";

                    var cell = row.insertCell(-1);
                    cell.innerHTML = "Assessment Item";
                    cell.style.backgroundColor = "white";
                    cell.style.color = "#066d95";
                    cell.style.textAlign = "left";
                    cell.style.letterSpacing = "0px";
                    cell.style.fontWeight = "600";
                    cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                    cell.style.position = "sticky";
                    cell.style.zIndex = "22";
                    cell.style.top = "0px";
                    cell.style.fontSize = "12px";
                    cell.style.fontFamily = "Calibri";
                    cell.style.width = "100px";


                } else {

                    var ReplTarget = cells[1].replaceAll(' ', "_");
                    ThisDataS = ReplTarget;
                    var HostCheckBox = '<input id=' + ThisDataS + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                    var cell = row.insertCell(-1);
                    cell.innerHTML = HostCheckBox;
                    cell.style.textAlign = "left";
                    cell.style.width = "25px";

                    var cell = row.insertCell(-1);
                    cell.innerHTML = cells[2];
                    cell.style.textAlign = "left";
                    cell.style.width = "400px";

                }
            }

        } else {

            if (CheckFRow == "TOTPOOLS" || CheckFRow == "TOTHOSTS") {

                if (CheckFRow == "TOTPOOLS") {
                    document.getElementById("DiscoveryTotPools").innerHTML = "Host Pools: " + CheckSRow;
                }
                if (CheckFRow == "TOTHOSTS") {
                    document.getElementById("DiscoveryTotHosts").innerHTML = "Session Hosts: " + CheckSRow;
                }

            } else {

                if (CheckFRow == "" || CheckFRow == null) {} else {
                    var row = datatable.insertRow(-1);

                    if (CheckSRow == "HostPool") {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "40px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Host Pool";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "190px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Resource Group";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Session Host";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "VM Status";
                        cell.style.backgroundColor = "white";
                        cell.style.color = "#066d95";
                        cell.style.textAlign = "left";
                        cell.style.letterSpacing = "0px";
                        cell.style.fontWeight = "600";
                        cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                        cell.style.position = "sticky";
                        cell.style.zIndex = "22";
                        cell.style.top = "0px";
                        cell.style.fontSize = "12px";
                        cell.style.fontFamily = "Calibri";
                        cell.style.width = "111px";

                    } else {

                        var ResRepl = cells[0].replaceAll(' ', "_");
                        var ReplTarget = cells[1].replaceAll(' ', "_");
                        var ReplCat = cells[3].replaceAll(' ', "_");

                        ThisDataS = ResRepl + ":" + ReplTarget + ":" + ReplCat;
                        var HostCheckBox = '<input id=' + ThisDataS + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                        var cell = row.insertCell(-1);
                        cell.innerHTML = HostCheckBox;
                        cell.style.textAlign = "left";
                        cell.style.width = "25px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.style.textAlign = "left";
                        cell.style.width = "200px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.style.textAlign = "left";
                        cell.style.width = "120px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];
                        cell.style.textAlign = "left";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[4];
                        cell.style.textAlign = "left";

                    }
                }
            }
        }
    }

    var dtable = document.getElementById("FSLogixHostsDivAllModulesSetModulesDiv");
    dtable.innerHTML = "";
    dtable.appendChild(datatable);

    var dtable = document.getElementById("AVDAssessmentInputsDiv");
    dtable.innerHTML = "";
    dtable.appendChild(datatableA);

};

$("#RefAndGetAllCatNow").click(function(e) {

    //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    //document.getElementById("MicrosoftADAssDivData").innerHTML = RCC;

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ModSetNameNow = document.getElementById("SelectedAssSetNameNow").innerHTML;

    document.getElementById("SelectedAssCategoryNowF").innerHTML = "NONE";

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    e.preventDefault();
    $.ajax({
        url: '/GetAssessmentCatFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            'ThisLUser': FinalUserNameNow,
            'ModSetNameNow': ModSetNameNow
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'AssessmentCategoryTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "Category") {

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.lineHeight = "16px";
                            cell.style.color = "#034f6c";
                            cell.style.width = "160px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.fontSize = "20px";

                        }
                    }
                }

                var dtable = document.getElementById("AllCategoriesForModulesSet");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var tableRT = document.getElementById('AssessmentCategoryTable');
                var cells = tableRT.getElementsByTagName('td');
                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRT.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {
                            rowsNotSelected[row].style.color = "#666666";
                            rowsNotSelected[row].style.background = "white";
                            rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                        rowSelected.style.color = "black";
                        rowSelected.style.background = "#B1EDFF";
                        rowSelected.className += "selected";

                        var ThisCatName = rowSelected.cells[0].innerHTML;
                        var SItem = ThisCatName.replace(/[\r\n]+/gm, "");
                        document.getElementById("SelectedAssCategoryNowF").innerHTML = SItem;
                        document.getElementById("RefAllModulesForAssModulesSet").click();

                    }
                }

                document.getElementById("RefAllModulesForAssModulesSet").click();


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("RefCircleNowForAssSet").style.display = "none";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("RefCircleNowForAssSet").style.display = "none";
        }
    });

    document.getElementById("RefCircleNowForAssSet").style.display = "none";

});

$("#AddNewviewNow").click(function(e) {

    document.getElementById("AddNewViewModalNow").style.display = "block";

});

$("#ModuleCloseViewMod").click(function(e) {

    document.getElementById("AddNewViewModalNow").style.display = "none";

});

$("#ClearSeearchRes").click(function(e) {

    document.getElementById("searchUserSessTable").value = "";

});

$("#ExportSetAssessmentSummary").click(function(e) {

    e.preventDefault();

    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById('ADAssessmentTableNow'); // id of table

    for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, "Data.xls");
    } else //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
    return (sa);

});

function UpdateSelModNumber() {
    var TotModsSelectedNow = 0;

    var AllHostsValues = [];
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AllModulesSetTableNowS");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;

        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        var CheckThisHost = document.getElementById(ThisIDNow).checked;

        var ThisModNameInTable = rows[i].getElementsByTagName("td")[1].innerHTML;

        var AllIDsNow = ThisModNameInTable;

        if (CheckThisHost == true) {
            AllHostsValues.push(AllIDsNow);
            ++TotModsSelectedNow;
        }
    }

    document.getElementById("TotModSelectedNowSS").innerHTML = "Total Selected: " + TotModsSelectedNow;
}


function RemoveCurrentlySelectedModuleFunction(ThisModToRemove) {

    var FinalModToRemove = ThisModToRemove.replaceAll('_', " ");
    var CheckWhatToRemove = "MODULE";

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Remove Module: " + FinalModToRemove + " ?";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "REMOVE_MODULENOW";
    document.getElementById("ForMultiStringID").innerHTML = FinalModToRemove + ":" + CheckWhatToRemove;

}


function RemoveCurrentTemplateFunction(ThisModToRemove) {

    var FinalModToRemove = ThisModToRemove.replaceAll('_', " ");
    var CheckWhatToRemove = "TEMPLATE";

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Remove Template: " + FinalModToRemove + " ?";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "REMOVE_MODULENOW";
    document.getElementById("ForMultiStringID").innerHTML = FinalModToRemove + ":" + CheckWhatToRemove;

}

function RemoveAdminFunctionNow(ThisModToRemove) {

    var FinalModToRemove = ThisModToRemove.replaceAll('_', " ");
    var CheckWhatToRemove = "ADMIN";

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Remove Admin: " + FinalModToRemove + " ?";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "REMOVE_MODULENOW";
    document.getElementById("ForMultiStringID").innerHTML = FinalModToRemove + ":" + CheckWhatToRemove;

}

function LoadSelectedViewFunction(ThisModToRemove) {

    var CurrentView = document.getElementById("LoadedViewName").innerHTML;
    var FinalViewName = ThisModToRemove.replaceAll('_', " ");

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ViewsPane").style.display = "block";

    if (FinalViewName == CurrentView) {

    } else {

        document.getElementById("LoadedViewName").innerHTML = FinalViewName;
        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/CallLoadCDPViews', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETRefAllNewAdminsNow",
                'userId': userId
            },
            success: function(data) {

                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ViewsTableNowForOther'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var ThisViewName = cells[0];

                        if (ThisViewName == "" || ThisViewName == null) {} else {

                            if (ThisViewName == FinalViewName) {

                                var ViewBox1Module = cells[1];
                                var ViewBox1Tenant = cells[2];
                                var ViewBox1Type = cells[3];
                                var ViewBox2Module = cells[4];
                                var ViewBox2Tenant = cells[5];
                                var ViewBox2Type = cells[6];
                                var ViewBox3Module = cells[7];
                                var ViewBox3Tenant = cells[8];
                                var ViewBox3Type = cells[9];
                                var ViewBox4Module = cells[10];
                                var ViewBox4Tenant = cells[11];
                                var ViewBox4Type = cells[12];

                                document.getElementById("ViewOneModuleNameAndTenant1").innerHTML = "Module: " + ViewBox1Module + " [ " + ViewBox1Tenant + " ]"
                                document.getElementById("ViewOneTypeNow1").value = ViewBox1Type;

                                document.getElementById("ViewOneModuleNameAndTenant2").innerHTML = "Module: " + ViewBox2Module + " [ " + ViewBox2Tenant + " ]"
                                document.getElementById("ViewOneTypeNow2").value = ViewBox2Type;

                                document.getElementById("ViewOneModuleNameAndTenant3").innerHTML = "Module: " + ViewBox3Module + " [ " + ViewBox3Tenant + " ]"
                                document.getElementById("ViewOneTypeNow3").value = ViewBox3Type;

                                document.getElementById("ViewOneModuleNameAndTenant4").innerHTML = "Module: " + ViewBox4Module + " [ " + ViewBox4Tenant + " ]"
                                document.getElementById("ViewOneTypeNow4").value = ViewBox4Type;


                            }
                        }
                    }

                    var dtable = document.getElementById("AllViewsShownDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);


                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }



            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });

        document.getElementById("ViewOneChartDataDiv1").style.display = "block";
        document.getElementById("ViewOneChartNow1").style.display = "none";
        document.getElementById("ChartDiv1Now").style.display = "none";

        document.getElementById("ViewOneChartDataDiv2").style.display = "block";
        document.getElementById("ViewOneChartNow2").style.display = "none";
        document.getElementById("ChartDiv2Now").style.display = "none";

        document.getElementById("ViewOneChartDataDiv3").style.display = "block";
        document.getElementById("ViewOneChartNow3").style.display = "none";
        document.getElementById("ChartDiv3Now").style.display = "none";

        document.getElementById("ViewOneChartDataDiv4").style.display = "block";
        document.getElementById("ViewOneChartNow4").style.display = "none";
        document.getElementById("ChartDiv4Now").style.display = "none";

        $.ajax({
            url: '/CallGetViewSettings', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETRefAllNewAdminsNow",
                'userId': userId
            },
            success: function(data) {

                if (data.message) {

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var ThisViewName = cells[0];

                        if (ThisViewName == "" || ThisViewName == null) {} else {

                            if (ThisViewName == FinalViewName) {

                                //$STR = "View Name,DataOrChart1,DataOrChart2,DataOrChart3,DataOrChart4,
                                //StartColumnChart1,StartColumnChart2,StartColumnChart3,StartColumnChart4,
                                //EndColumnChart1,EndColumnChart2,EndColumnChart3,EndColumnChart4,
                                //ChartBoxChartType1,ChartBoxChartType2,ChartBoxChartType3,ChartBoxChartType4"

                                var DataOrChart1 = cells[1];
                                var DataOrChart2 = cells[2];
                                var DataOrChart3 = cells[3];
                                var DataOrChart4 = cells[4];

                                var StartColumnChart1 = cells[5];
                                var StartColumnChart2 = cells[6];
                                var StartColumnChart3 = cells[7];
                                var StartColumnChart4 = cells[8];

                                var EndColumnChart1 = cells[9];
                                var EndColumnChart2 = cells[10];
                                var EndColumnChart3 = cells[11];
                                var EndColumnChart4 = cells[12];

                                var ChartBoxChartType1 = cells[13];
                                var ChartBoxChartType2 = cells[14];
                                var ChartBoxChartType3 = cells[15];
                                var ChartBoxChartType4 = cells[16];

                                document.getElementById("ViewOneTypeNow1").value = DataOrChart1;
                                document.getElementById("ViewOneTypeNow2").value = DataOrChart2;
                                document.getElementById("ViewOneTypeNow3").value = DataOrChart3;
                                document.getElementById("ViewOneTypeNow4").value = DataOrChart4;

                                document.getElementById("StartColumnChart1").value = StartColumnChart1;
                                document.getElementById("StartColumnChart2").value = StartColumnChart2;
                                document.getElementById("StartColumnChart3").value = StartColumnChart3;
                                document.getElementById("StartColumnChart4").value = StartColumnChart4;

                                document.getElementById("EndColumnChart1").value = EndColumnChart1;
                                document.getElementById("EndColumnChart2").value = EndColumnChart2;
                                document.getElementById("EndColumnChart3").value = EndColumnChart3;
                                document.getElementById("EndColumnChart4").value = EndColumnChart4;

                                document.getElementById("ChartBoxChartType1").value = ChartBoxChartType1;
                                document.getElementById("ChartBoxChartType2").value = ChartBoxChartType2;
                                document.getElementById("ChartBoxChartType3").value = ChartBoxChartType3;
                                document.getElementById("ChartBoxChartType4").value = ChartBoxChartType4;

                            }
                        }
                    }

                    document.getElementById("FillViewDataButton").click();

                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }



            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });
    }

}

function RemoveModulesSetFunction(ThisModToRemove) {

    var FinalModToRemove = ThisModToRemove.replaceAll('_', " ");
    var CheckWhatToRemove = "MODULESET";

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Remove Module Set: " + FinalModToRemove + " ?";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "REMOVE_MODULENOW";
    document.getElementById("ForMultiStringID").innerHTML = FinalModToRemove + ":" + CheckWhatToRemove;


}

$("#RefCurrentlyOpenedVNowS").click(function(e) {

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var FinalViewName = document.getElementById("LoadedViewName").innerHTML;

    var TRPKey = document.getElementById("TRPKeyN").value;

    document.getElementById("ExecutingRefViewNowSSCircle").style.display = "block";

    $.ajax({
        url: '/CallExecuteEntireView', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'FinalViewName': FinalViewName
        },
        success: function(data) {

            if (data.message) {
                if (data.message == "ViewExecuted") {

                    document.getElementById("ExecutingRefViewNowSSCircle").style.display = "none";
                    document.getElementById("FillViewDataButton").click();

                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });


});


$("#FillViewDataButton").click(function(e) {

    var FinalViewName = document.getElementById("LoadedViewName").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("ViewOneChartDataDiv1").innerHTML = RCC;
    document.getElementById("ViewOneChartDataDiv2").innerHTML = RCC;
    document.getElementById("ViewOneChartDataDiv3").innerHTML = RCC;
    document.getElementById("ViewOneChartDataDiv4").innerHTML = RCC;

    $.ajax({
        url: '/CallLoadCDPViewData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'ViewNameNow': FinalViewName
        },
        success: function(data) {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ViewBox1TableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                var datatableA = document.createElement("table");
                datatableA.id = 'ViewBox2TableNow'
                datatableA.setAttribute('class', 'SummaryTableClassforAzBilling');

                var datatableB = document.createElement("table");
                datatableB.id = 'ViewBox3TableNow'
                datatableB.setAttribute('class', 'SummaryTableClassforAzBilling');

                var datatableC = document.createElement("table");
                datatableC.id = 'ViewBox4TableNow'
                datatableC.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");
                var LastRefData = "";

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ForWhichView = cells[0];
                    var CheckNextString = cells[1];

                    if (CheckNextString == "LASTREFDATE") {

                        LastRefData = cells[2];

                    } else {
                        if (ForWhichView == "" || ForWhichView == null) {} else {

                            if (ForWhichView == "VBOX1") {
                                var row = datatable.insertRow(-1);
                            }
                            if (ForWhichView == "VBOX2") {
                                var row = datatableA.insertRow(-1);
                            }
                            if (ForWhichView == "VBOX3") {
                                var row = datatableB.insertRow(-1);
                            }
                            if (ForWhichView == "VBOX4") {
                                var row = datatableC.insertRow(-1);
                            }

                            var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>Not Updated...</p>'
                            var SItem = CheckNextString.replace(/[\r\n]+/gm, "");

                            if (SItem == "FILENOTFOUND") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = RCC;
                            } else {
                                for (var j = 1; j < cells.length; j++) {
                                    var CheckIfBlank = cells[0]

                                    if (CheckIfBlank == "" || CheckIfBlank == null) {} else {
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                    }
                                }
                            }
                        }
                    }

                }

                var dtable = document.getElementById("ViewOneChartDataDiv1");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var dtable = document.getElementById("ViewOneChartDataDiv2");
                dtable.innerHTML = "";
                dtable.appendChild(datatableA);

                var dtable = document.getElementById("ViewOneChartDataDiv3");
                dtable.innerHTML = "";
                dtable.appendChild(datatableB);

                var dtable = document.getElementById("ViewOneChartDataDiv4");
                dtable.innerHTML = "";
                dtable.appendChild(datatableC);

                document.getElementById("ViewLastRefDataNow").innerHTML = "Refreshed: " + LastRefData;

                ViewOneTypeNowFunction1()
                ViewOneTypeNowFunction2()
                ViewOneTypeNowFunction3()
                ViewOneTypeNowFunction4()


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

});

function ViewOneTypeNowFunction1() {

    var ValCheck = document.getElementById("ViewOneTypeNow1").value;

    if (ValCheck == "Data") {

        document.getElementById("ViewOneChartDataDiv1").style.display = "block";
        document.getElementById("ViewOneChartNow1").style.display = "none";
        document.getElementById("ChartDiv1Now").style.display = "none";

    }

    if (ValCheck == "Chart") {

        document.getElementById("ViewOneChartDataDiv1").style.display = "none";
        document.getElementById("ViewOneChartNow1").style.display = "block";
        document.getElementById("ChartDiv1Now").style.display = "block";

        var ColStartNumner = document.getElementById("StartColumnChart1").value;
        var ColEndNumner = document.getElementById("EndColumnChart1").value;
        var ChartTypeNow = document.getElementById("ChartBoxChartType1").value;

        try {
            Highcharts.chart('ViewOneChartNow1', {
                data: {
                    table: 'ViewBox1TableNow',
                    startColumn: ColStartNumner,
                    endColumn: ColEndNumner
                },
                chart: {
                    type: ChartTypeNow
                },
                title: {
                    text: ''
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },

                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    }
                }
            });
        } catch (e) {

        }
    }
}

function ViewOneTypeNowFunction2() {

    var ValCheck = document.getElementById("ViewOneTypeNow2").value;

    if (ValCheck == "Data") {

        document.getElementById("ViewOneChartDataDiv2").style.display = "block";
        document.getElementById("ViewOneChartNow2").style.display = "none";
        document.getElementById("ChartDiv2Now").style.display = "none";

    }

    if (ValCheck == "Chart") {

        document.getElementById("ViewOneChartDataDiv2").style.display = "none";
        document.getElementById("ViewOneChartNow2").style.display = "block";
        document.getElementById("ChartDiv2Now").style.display = "block";

        var ColStartNumner = document.getElementById("StartColumnChart2").value;
        var ColEndNumner = document.getElementById("EndColumnChart2").value;
        var ChartTypeNow = document.getElementById("ChartBoxChartType2").value;

        try {
            Highcharts.chart('ViewOneChartNow2', {
                data: {
                    table: 'ViewBox2TableNow',
                    startColumn: ColStartNumner,
                    endColumn: ColEndNumner
                },
                chart: {
                    type: ChartTypeNow
                },
                title: {
                    text: ''
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },

                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    }
                }
            });
        } catch (e) {

        }
    }

}

function ViewOneTypeNowFunction3() {

    var ValCheck = document.getElementById("ViewOneTypeNow3").value;

    if (ValCheck == "Data") {

        document.getElementById("ViewOneChartDataDiv3").style.display = "block";
        document.getElementById("ViewOneChartNow3").style.display = "none";
        document.getElementById("ChartDiv3Now").style.display = "none";

    }

    if (ValCheck == "Chart") {

        document.getElementById("ViewOneChartDataDiv3").style.display = "none";
        document.getElementById("ViewOneChartNow3").style.display = "block";
        document.getElementById("ChartDiv3Now").style.display = "block";

        var ColStartNumner = document.getElementById("StartColumnChart3").value;
        var ColEndNumner = document.getElementById("EndColumnChart3").value;
        var ChartTypeNow = document.getElementById("ChartBoxChartType3").value;

        try {
            Highcharts.chart('ViewOneChartNow3', {
                data: {
                    table: 'ViewBox3TableNow',
                    startColumn: ColStartNumner,
                    endColumn: ColEndNumner
                },
                chart: {
                    type: ChartTypeNow
                },
                title: {
                    text: ''
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },

                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    }
                }
            });
        } catch (e) {

        }
    }

}

function ViewOneTypeNowFunction4() {

    var ValCheck = document.getElementById("ViewOneTypeNow4").value;

    if (ValCheck == "Data") {

        document.getElementById("ViewOneChartDataDiv4").style.display = "block";
        document.getElementById("ViewOneChartNow4").style.display = "none";
        document.getElementById("ChartDiv4Now").style.display = "none";

    }

    if (ValCheck == "Chart") {

        document.getElementById("ViewOneChartDataDiv4").style.display = "none";
        document.getElementById("ViewOneChartNow4").style.display = "block";
        document.getElementById("ChartDiv4Now").style.display = "block";

        var ColStartNumner = document.getElementById("StartColumnChart4").value;
        var ColEndNumner = document.getElementById("EndColumnChart4").value;
        var ChartTypeNow = document.getElementById("ChartBoxChartType4").value;

        try {
            Highcharts.chart('ViewOneChartNow4', {
                data: {
                    table: 'ViewBox4TableNow',
                    startColumn: ColStartNumner,
                    endColumn: ColEndNumner
                },
                chart: {
                    type: ChartTypeNow
                },
                title: {
                    text: ''
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },

                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    }
                }
            });
        } catch (e) {

        }
    }


}

$("#UpdateChartNow1Button").click(function(e) {

    ViewOneTypeNowFunction1()

});
$("#UpdateChartNow2Button").click(function(e) {

    ViewOneTypeNowFunction2()

});
$("#UpdateChartNow3Button").click(function(e) {

    ViewOneTypeNowFunction3()
});

$("#ModuleCloseConfigSet").click(function(e) {

    document.getElementById("AddNewConfigSetMod").style.display = "none";

});

$("#AddNewConfigSetButton").click(function(e) {

    document.getElementById("AddNewConfigSetMod").style.display = "block";
    document.getElementById("FetchAllEmailTemplatesNowButton").click();

});


$("#UpdateChartNow4Button").click(function(e) {

    ViewOneTypeNowFunction4()

});

$("#SaveViewSettingsButton").click(function(e) {

    document.getElementById("FootMessageID").innerHTML = "Saving View Settings...Please wait...";
    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var FinalViewName = document.getElementById("LoadedViewName").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var ViewOneTypeNow1 = document.getElementById("ViewOneTypeNow1").value;
    var ViewOneTypeNow2 = document.getElementById("ViewOneTypeNow2").value;
    var ViewOneTypeNow3 = document.getElementById("ViewOneTypeNow3").value;
    var ViewOneTypeNow4 = document.getElementById("ViewOneTypeNow4").value;

    var StartColumnChart1 = document.getElementById("StartColumnChart1").value;
    var StartColumnChart2 = document.getElementById("StartColumnChart2").value;
    var StartColumnChart3 = document.getElementById("StartColumnChart3").value;
    var StartColumnChart4 = document.getElementById("StartColumnChart4").value;

    var EndColumnChart1 = document.getElementById("EndColumnChart1").value;
    var EndColumnChart2 = document.getElementById("EndColumnChart2").value;
    var EndColumnChart3 = document.getElementById("EndColumnChart3").value;
    var EndColumnChart4 = document.getElementById("EndColumnChart4").value;

    var ChartBoxChartType1 = document.getElementById("ChartBoxChartType1").value;
    var ChartBoxChartType2 = document.getElementById("ChartBoxChartType2").value;
    var ChartBoxChartType3 = document.getElementById("ChartBoxChartType3").value;
    var ChartBoxChartType4 = document.getElementById("ChartBoxChartType4").value;

    $.ajax({
        url: '/CallSaveViewSettings', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'ViewNameNow': FinalViewName,
            'ViewOneTypeNow1': ViewOneTypeNow1,
            'ViewOneTypeNow2': ViewOneTypeNow2,
            'ViewOneTypeNow3': ViewOneTypeNow3,
            'ViewOneTypeNow4': ViewOneTypeNow4,
            'StartColumnChart1': StartColumnChart1,
            'StartColumnChart2': StartColumnChart2,
            'StartColumnChart3': StartColumnChart3,
            'StartColumnChart4': StartColumnChart4,
            'EndColumnChart1': EndColumnChart1,
            'EndColumnChart2': EndColumnChart2,
            'EndColumnChart3': EndColumnChart3,
            'EndColumnChart4': EndColumnChart4,
            'ChartBoxChartType1': ChartBoxChartType1,
            'ChartBoxChartType2': ChartBoxChartType2,
            'ChartBoxChartType3': ChartBoxChartType3,
            'ChartBoxChartType4': ChartBoxChartType4,
        },
        success: function(data) {

            if (data.message) {

                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

});


function ModifyCurrentlySelectedViewFunction(id) {
    document.getElementById("AddNewViewModalNow").style.display = "block";


}


$("#RefAllConfigSetButton").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAllConfigSets', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewTemplatesNowFromServer",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ConfigSetsTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "ConfigSet") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.style.backgroundColor = "white";
                            cell.style.color = "#066d95";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0px";
                            cell.style.fontSize = "12px";
                            cell.style.fontFamily = "Calibri";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];

                            FinalServerName = cells[0] + "#" + cells[1];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:130px; padding:6px;" onclick="RemoveCurrentTemplateFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("AllConfigSetsDivTable");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var tableRT = document.getElementById('ConfigSetsTable');
                var cells = tableRT.getElementsByTagName('td');
                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRT.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {
                            rowsNotSelected[row].style.color = "#666666";
                            rowsNotSelected[row].style.background = "white";
                            rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                        rowSelected.style.color = "black";
                        rowSelected.style.background = "#B1EDFF";
                        rowSelected.className += "selected";

                        var ConfigSetName = rowSelected.cells[0].innerHTML;
                        var ConfigSetModule = rowSelected.cells[1].innerHTML;
                        var ConfigSetTenant = rowSelected.cells[2].innerHTML;

                        var SItem = ConfigSetTenant.replace(/[\r\n]+/gm, "");
                        document.getElementById("OpenedConfigSetNow").innerHTML = ConfigSetName + ":" + ConfigSetModule + ":" + SItem;

                        document.getElementById("RefConfigSetDataNowButton").click();


                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

});


$("#FetchAllEmailTemplatesNowButton").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAllTemplates', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewTemplatesNowFromServer",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                $('#ConfigSetEmailTemplate').empty();

                var xLeft = document.getElementById("ConfigSetEmailTemplate");

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var TempalteType = cells[1];
                    var SItem = TempalteType.replace(/[\r\n]+/gm, "");

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        if (SItem == "Email Template") {

                            var optionR = document.createElement("option");
                            optionR.text = CheckFRow;
                            xLeft.add(optionR);

                        } else {



                        }
                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

});

$("#FetchDataButtonForconfigSet").click(function(e) {

    var ThisDataNow = document.getElementById("OpenedConfigSetNow").innerHTML;
    var res = ThisDataNow.split(":");
    var ConfigSetName = res[0];
    var ConfigSetModule = res[1];
    var ConfigSetTenant = res[2];

    var DemoOrNot = document.getElementById("DOrNot").innerHTML;
    if (DemoOrNot == "DEMO") {
        var ThisMsg = "Task is not available in Demo Mode!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            clearInterval(MyTimerFooter);
        }

    } else {

        document.getElementById("FetchCircleNow").style.display = "block";

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/FetchConfigSetData', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'ThisTenant': ConfigSetTenant,
                'ThisModName': ConfigSetModule,
                'ConfigSetName': ConfigSetName,
                'ThisUser': FinalUserNameNow,
                'TRPKey': TRPKey,
                'userId': userId
            },
            success: function(data) {

                document.getElementById("FetchCircleNow").style.display = "none";
                document.getElementById("RefConfigSetDataNowButton").click();

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                document.getElementById("GettingReadyID").style.display = "none";

            }
        });



    }

});


$("#RefConfigSetDataNowButton").click(function(e) {

    e.preventDefault();

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("MangeCofnigSetDivDD").innerHTML = RCC;

    var ThisDataNow = document.getElementById("OpenedConfigSetNow").innerHTML;
    var res = ThisDataNow.split(":");
    var ConfigSetName = res[0];
    var ConfigSetModule = res[1];
    var ConfigSetTenant = res[2];

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/LoadConfigSetData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'ThisTenant': ConfigSetTenant,
            'ThisModName': ConfigSetModule,
            'ConfigSetName': ConfigSetName,
            'ThisUser': FinalUserNameNow,
            'TRPKey': TRPKey,
            "type": "SOCKETRefCDFModuleDataForTenant",
            'userId': userId
        },
        success: function(data) {
            if (data.message == "FileNotFound") {

                var InsertC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>Please fetch Config Set Data...</p>'
                document.getElementById("MangeCofnigSetDivDD").innerHTML = InsertC;

            } else {

                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ConfigSetDataTableNow'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var TotRowsNow = 0;
                    var ThisType = "Info";

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckIfBlank = cells[0]
                        var ThisLastRefDate = cells[1];

                        if (CheckIfBlank == "LASTREFDATE") {
                            document.getElementById("SessManagerLastRefDate").innerHTML = ThisLastRefDate;
                        } else {
                            if (ThisType == "Info") {
                                if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                    var row = datatable.insertRow(-1);

                                    ++TotRowsNow;

                                    for (var j = 0; j < cells.length; j++) {
                                        var CheckIfBlank = cells[0]
                                        if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];

                                            if (TotRowsNow == 1) {

                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "#066d95";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid rgb(204, 200, 200)";
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0px";
                                                cell.style.fontSize = "12px";
                                                cell.style.fontFamily = "Calibri";
                                            }

                                        }
                                    }
                                }
                            }

                            if (CheckIfBlank == "Action") {
                                // Then code according to action script

                            }
                        }

                    }

                    var dtable = document.getElementById("MangeCofnigSetDivDD");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                } else {

                    document.getElementById("UserSessDetailsDiv").innerHTML = "";

                }



            }



        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            document.getElementById("GettingReadyID").style.display = "none";

        }
    });
});

$("#ModuleAddSelectOne").click(function(e) {

    e.preventDefault();
    document.getElementById("SelectedModuleOne").style.display = "block";
    document.getElementById("SelectedModuleTwo").style.display = "none";
    document.getElementById("SelectedModuleThree").style.display = "none";
    document.getElementById("SelectedModuleFour").style.display = "none";
    document.getElementById("SelectedModuleFive").style.display = "none";

    document.getElementById("ModuleAddSelectOne").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("ModuleAddSelectTwo").style.background = "white";
    document.getElementById("ModuleAddSelectThree").style.background = "white";
    document.getElementById("ModuleAddSelectFour").style.background = "white";
    document.getElementById("ModuleAddSelectFive").style.background = "white";

});

$("#ModuleAddSelectTwo").click(function(e) {

    e.preventDefault();
    document.getElementById("SelectedModuleOne").style.display = "none";
    document.getElementById("SelectedModuleTwo").style.display = "block";
    document.getElementById("SelectedModuleThree").style.display = "none";
    document.getElementById("SelectedModuleFour").style.display = "none";
    document.getElementById("SelectedModuleFive").style.display = "none";

    document.getElementById("ModuleAddSelectTwo").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("ModuleAddSelectOne").style.background = "white";
    document.getElementById("ModuleAddSelectThree").style.background = "white";
    document.getElementById("ModuleAddSelectFour").style.background = "white";
    document.getElementById("ModuleAddSelectFive").style.background = "white";

});

$("#ModuleAddSelectThree").click(function(e) {

    e.preventDefault();
    document.getElementById("SelectedModuleOne").style.display = "none";
    document.getElementById("SelectedModuleTwo").style.display = "none";
    document.getElementById("SelectedModuleThree").style.display = "none";
    document.getElementById("SelectedModuleFour").style.display = "block";
    document.getElementById("SelectedModuleFive").style.display = "none";

    document.getElementById("ModuleAddSelectThree").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("ModuleAddSelectOne").style.background = "white";
    document.getElementById("ModuleAddSelectTwo").style.background = "white";
    document.getElementById("ModuleAddSelectFour").style.background = "white";
    document.getElementById("ModuleAddSelectFive").style.background = "white";

});

$("#ModuleAddSelectFour").click(function(e) {

    e.preventDefault();
    document.getElementById("SelectedModuleOne").style.display = "none";
    document.getElementById("SelectedModuleTwo").style.display = "none";
    document.getElementById("SelectedModuleThree").style.display = "block";
    document.getElementById("SelectedModuleFour").style.display = "none";
    document.getElementById("SelectedModuleFive").style.display = "none";

    document.getElementById("ModuleAddSelectFour").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("ModuleAddSelectOne").style.background = "white";
    document.getElementById("ModuleAddSelectTwo").style.background = "white";
    document.getElementById("ModuleAddSelectThree").style.background = "white";
    document.getElementById("ModuleAddSelectFive").style.background = "white";

});

$("#ModuleAddSelectFive").click(function(e) {

    e.preventDefault();
    document.getElementById("SelectedModuleOne").style.display = "none";
    document.getElementById("SelectedModuleTwo").style.display = "none";
    document.getElementById("SelectedModuleThree").style.display = "none";
    document.getElementById("SelectedModuleFour").style.display = "none";
    document.getElementById("SelectedModuleFive").style.display = "block";

    document.getElementById("ModuleAddSelectFive").style.background = "rgb(236, 236, 236) none repeat scroll 0% 0%";
    document.getElementById("ModuleAddSelectOne").style.background = "white";
    document.getElementById("ModuleAddSelectTwo").style.background = "white";
    document.getElementById("ModuleAddSelectThree").style.background = "white";
    document.getElementById("ModuleAddSelectFour").style.background = "white";

});

$("#CloseAssessmentSetProcSetNow").click(function(e) {

    document.getElementById("ModifyProcAsessmentAgentSet").style.display = "none";

});

$("#ResetCatAssFilterNow").click(function(e) {

    document.getElementById("SelectedAssCategoryNowF").innerHTML = "NONE";
    document.getElementById("RefAllModulesForAssModulesSet").click();

});

function ApplyTechCatSevNumber() {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AssessmentCategoryTable");
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {

        ThisCatNow = rows[i].getElementsByTagName("td")[0].innerHTML;

        var CatNumberNow = 0;

        var tableNew, rowsNew, iNew, xNew, yNew, shouldSwitchNew;
        tableNew = document.getElementById("ADAssessmentTableNow");
        rowsNew = tableNew.rows;
        for (iNew = 1; iNew < (rowsNew.length - 1); iNew++) {

            FileCatNow = rowsNew[iNew].getElementsByTagName("td")[2].innerHTML;
            var SevNow = rowsNew[iNew].getElementsByTagName("td")[4].innerHTML;

            if (FileCatNow == ThisCatNow) {

                if (SevNow == "Critical" || SevNow == "High" || SevNow == "Medium" || SevNow == "Low") {
                    ++CatNumberNow;
                }
            }
        }
        rows[i].getElementsByTagName("td")[1].innerHTML = CatNumberNow;
        if (CatNumberNow == 0) {} else {
            rows[i].getElementsByTagName("td")[1].style.color = "red";
        }
    }
}

function ModifyAssessmentSetNowFunction(ThisModNow) {

    document.getElementById("ModifyProcAsessmentAgentSet").style.display = "block";

    //MDF_Office_365_Assessment:NEWMDFTenant:Disabled:None:None:Do_Not_Notify:None
    var res = ThisModNow.split(":");
    var AssSetNameNow = res[0];
    var FinalAssSetNameNow = AssSetNameNow.replaceAll('_', " ");

    var TenantName = res[1];
    var FinalTenantName = TenantName.replaceAll('_', " ");

    var ExecutionNow = res[2];
    var FinalExecutionNow = ExecutionNow.replaceAll('_', " ");

    var ExeDayNow = res[3];
    var FinalExeDayNow = ExeDayNow.replaceAll('_', " ");
    var ExeHourNow = res[4];
    var FinalExeHourNow = ExeHourNow.replaceAll('_', " ");
    var NotConditionNow = res[5];
    var FinalNotConditionNow = NotConditionNow.replaceAll('_', " ");

    var EmailTempNow = res[6];
    var FinalEmailTempNow = EmailTempNow.replaceAll('_', " ");

    document.getElementById("ThisAssessmentSetFromGridNow").innerHTML = FinalAssSetNameNow;
    document.getElementById("ThisAssessmentSetTenNowInGrid").innerHTML = FinalTenantName;

    document.getElementById("AsseProcSetModuleNotifyOrNotForProcAgent").value = FinalExecutionNow;
    document.getElementById("AsseProcSetModuleNotifyWhenForProcAgent").value = FinalExeDayNow;
    document.getElementById("AsseProcSetModuleNotifyHourNowForProcAgent").value = FinalExeHourNow;
    document.getElementById("AssProcNotificationConditionNow").value = FinalNotConditionNow;

    $.ajax({
        url: '/CallLoadAllTemplates', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewTemplatesNowFromServer",
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var xLeft = document.getElementById("AsseProcSetModuleNotifyEmailTemplateForProcAgent");

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var SItem = CheckSRow.replace(/[\r\n]+/gm, "");
                        if (SItem == "Email Template") {
                            var optionR = document.createElement("option");
                            optionR.text = CheckFRow;
                            xLeft.add(optionR);
                        }
                    }
                }

                document.getElementById("AsseProcSetModuleNotifyEmailTemplateForProcAgent").value = FinalEmailTempNow;

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });
}

$("#ApplySetInProcAssSetButton").click(function(e) {

    var ThisSetNameNow = document.getElementById("ThisAssessmentSetFromGridNow").innerHTML;
    var ThisSetTenNow = document.getElementById("ThisAssessmentSetTenNowInGrid").innerHTML;

    var ThisSetFinalExecution = document.getElementById("AsseProcSetModuleNotifyOrNotForProcAgent").value;
    var ThisExeDay = document.getElementById("AsseProcSetModuleNotifyWhenForProcAgent").value;
    var ThisExeHour = document.getElementById("AsseProcSetModuleNotifyHourNowForProcAgent").value;
    var ThisExeCondition = document.getElementById("AssProcNotificationConditionNow").value;
    var ThisEmailTemplate = document.getElementById("AsseProcSetModuleNotifyEmailTemplateForProcAgent").value;

    e.preventDefault();
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AssessmentSetProcTable");
    rows = table.rows;
    for (i = 0; i < (rows.length); i++) {

        FileModName = rows[i].getElementsByTagName("td")[0].innerHTML;
        FileModTenant = rows[i].getElementsByTagName("td")[2].innerHTML;

        if (FileModName == ThisSetNameNow) {

            rows[i].getElementsByTagName("td")[3].innerHTML = ThisSetFinalExecution;
            if (ThisSetFinalExecution == "Enabled") {
                rows[i].getElementsByTagName("td")[3].style.color = "#48b70a"
            }
            if (ThisSetFinalExecution == "Disabled") {
                rows[i].getElementsByTagName("td")[3].style.color = "Red"
            }

            rows[i].getElementsByTagName("td")[4].innerHTML = ThisExeDay;
            rows[i].getElementsByTagName("td")[5].innerHTML = ThisExeHour;
            rows[i].getElementsByTagName("td")[6].innerHTML = ThisExeCondition;
            rows[i].getElementsByTagName("td")[7].innerHTML = ThisEmailTemplate;

        }
    }
    document.getElementById("ModifyProcAsessmentAgentSet").style.display = "none";
});

$("#CloseAVDdiscoveryButton").click(function(e) {

    document.getElementById("AVDDiscoveryPaneN").style.display = "none";
});

$("#AVDDiscoveryPaneLaunch").click(function(e) {

    document.getElementById("AVDDiscoveryPaneN").style.display = "block";

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ThisModulesSet = document.getElementById("SelectedAssSetNameNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallCheckAVDDiscoveryFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ThisModulesSet': ThisModulesSet,
            'ThisLUser': FinalUserNameNow
        },
        success: function(data) {
            if (data.message) {
                if (data.message == "FileNotFound") {
                    FillAVDDiscoveryDataNow(data.message);
                } else {
                    FillAVDDiscoveryDataNow(data.message);
                }

            } else {
                document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "none";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ExecutingDiscoveryPleaseWaitCircle").style.display = "none";
        }
    });
});

$("#ProcSaveAssessmentSetButtonNow").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save Settings?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVESETTINGSNOWASSSET";

});

$("#FSLogixHostsUnCheckAllModulesInListNow").click(function(e) {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("DiscoveryAVDDataTAbleNow");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        document.getElementById(ThisIDNow).checked = false;
    }

});

$("#FSLogixHostsCheckAllModulesInListNow").click(function(e) {

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("DiscoveryAVDDataTAbleNow");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        document.getElementById(ThisIDNow).checked = true;
    }

});