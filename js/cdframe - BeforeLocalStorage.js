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

$("#ManageAllSetsNowCC").click(function(e) {

    e.preventDefault();
    document.getElementById("AllModulesSetDivForall").style.display = "block";
    document.getElementById("DivForAddingModulesSet").style.display = "none";

    document.getElementById("RefAllModulesSetHere").click();


});

$("#AddNewModulesSet").click(function(e) {

    e.preventDefault();
    document.getElementById("AllModulesSetDivForall").style.display = "none";
    document.getElementById("DivForAddingModulesSet").style.display = "block";

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

$("#ManageAllNewTenantsNow").click(function(e) {

    document.getElementById("AllTargetDivsAndTenantDiv").style.display = "block";
    document.getElementById("AddNewTenantNowDiv").style.display = "none";

});

$("#AddNewTenantNowS").click(function(e) {

    document.getElementById("AllTargetDivsAndTenantDiv").style.display = "none";
    document.getElementById("AddNewTenantNowDiv").style.display = "block";

});

$("#ExeLogCloseRegisterModal").click(function(e) {

    document.getElementById("ShowCDLogModal").style.display = "none";

});


$("#CDAddNewTenant").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ManageAllTargetsPane").style.display = "block";
    document.getElementById("ManageAllNewTenantsNow").click();
    document.getElementById("RefAllTenants").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Targets/Tenants";

});

$("#CDAddNewModule").click(function(e) {

    document.getElementById("ResetAllPanes").click();

    document.getElementById("ManageModulesPaneHere").style.display = "block";
    document.getElementById("ManageAllDCModulesNow").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Modules";
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

    document.getElementById("ManageAllViewsNowC").click();
    //document.getElementById("RefAllViewsHereNow").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Views";

    //document.getElementById("ModuleMonitoringCheckBox").checked = false;
    //document.getElementById("ModuleNotifyOrNot").value = "Disabled";

});

$("#ModuleCloseAddTenModal").click(function(e) {

    //document.getElementById("AddCDNewScriptMod").style.display = "none";

});

$("#ManagementTemplatesClose").click(function(e) {

    document.getElementById("ManagemenTemplatesMod").style.display = "none";

});

$("#CDAllTemplates").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ManageTemplatesPane").style.display = "block";
    document.getElementById("ManageAllTemplatesNowC").click();
    document.getElementById("RefAllNewTemplatesNowFromServer").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Templates";


});

$("#ManageAllAdministratorsNow").click(function(e) {

    document.getElementById("AllManagedADminsDivNowTable").style.display = "block";
    document.getElementById("AddingANewNewAdminDiv").style.display = "none";

});

$("#AddNewManageAdmin").click(function(e) {

    document.getElementById("AllManagedADminsDivNowTable").style.display = "none";
    document.getElementById("AddingANewNewAdminDiv").style.display = "block";

});

$("#CloseAddTenModal").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "none";

});


$("#CDRegAdmin").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ManageAdminsPane").style.display = "block";
    document.getElementById("ManageAllAdministratorsNow").click();
    document.getElementById("RefAllNewAdminsNow").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Admins";

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

    // Update View Table
    UpdateViewTableInLeftFunction();
    LoadAllTenantsForAllFunction();
    UpdateModulesSetTableInLeftFunction();

    document.getElementById("ApplyAuthTemplateNowMod").style.display = "none";

});

$("#RefAllTenants").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("TenantDIV").innerHTML = GolChakkar;

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



$("#RefAllNewAdminsNow").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("AllManagedADminsDivNowTable").innerHTML = GolChakkar;

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

                    var datatableVSet = document.createElement("table");
                    datatableVSet.id = 'VSetTableForViewsSet'
                    datatableVSet.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        if (CheckFRow == "" || CheckFRow == null) {} else {

                            var row = datatable.insertRow(-1);

                            if (CheckFRow == "ViewName") {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "View Name";
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
                                cell.innerHTML = "View Type";
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
                                cell.innerHTML = "View Module";
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
                                cell.innerHTML = "View Tenant";
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
                                cell.style.width = "80px";

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
                                cell.style.width = "80px";


                            } else {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                if (cells[1] == "Single Column") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align:center;">Single Column</div>'
                                }
                                if (cells[1] == "View Set") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #e2ff7c;font-weight: 600;text-align: center;">View Set</div>'
                                }

                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];

                                var ThisUserToRem = cells[0];
                                var RemoveUser = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveViewNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove View</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = RemoveUser;

                                var ThisUserToRem = cells[0];
                                var EditView = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="EditViewNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Edit View</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = EditView;

                            }
                        }


                    }

                    var dtable = document.getElementById("AllViewsShownDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    // This is for Views when adding View Set

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        if (CheckFRow == "" || CheckFRow == null) {} else {

                            var row = datatableVSet.insertRow(-1);

                            if (CheckFRow == "ViewName") {

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
                                cell.innerHTML = "Add To Set";
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

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                var FinalItemName = cells[0].replaceAll(' ', '_');
                                var ThisUserToRem = FinalItemName;
                                var RemoveUser = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="AddViewToSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Add To Set</button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = RemoveUser;

                            }
                        }


                    }

                    var dtable = document.getElementById("AvaViewDDNTRRTT");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatableVSet);

                    //$('#AllViewsShownDiv tr > *:nth-child(2)').hide();                   


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
                    //document.getElementById("RefCircleNowForAssSet").style.display = "none";
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
                        //document.getElementById("AddNewViewModalNow").style.display = "none";

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

                var ViewSetName = document.getElementById("NewViewSetNameNowAdd").value;
                var ViewSetTenName = document.getElementById("ViewSetTenNameNowD").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var AllHostsValues = [];
                var table, rows, i, x, y, shouldSwitch;
                table = document.getElementById("AlreadyViewSetTableNow");
                rows = table.rows;
                for (i = 1; i < (rows.length); i++) {

                    x = rows[i].getElementsByTagName("td")[0].innerHTML;

                    var ThisNow = x;
                    AllHostsValues.push(ThisNow);
                }

                var res = ViewSetTenName.split(":");
                var FinalTenNameNow = res[0];

                document.getElementById("FootMessageID").innerHTML = "Adding View Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallAddNewViewSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ViewSetName': ViewSetName,
                        'TRPKey': TRPKey,
                        'AllViewsInSet': AllHostsValues,
                        'ViewSetTenName': FinalTenNameNow
                    },
                    success: function(data) {

                        document.getElementById("RefAllViewsHereNow").click();
                        //document.getElementById("AddNewViewModalNow").style.display = "none";
                        UpdateViewTableInLeftFunction();

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
                        //document.getElementById("RefAllModulesNowButton").click();
                        UpdateModulesSetTableInLeftFunction();

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
                var OfficeSharePointAdminURL = document.getElementById("OfficeSharePointAadminURLNow").value;
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
                            'ADUserPAss': ADUserPAss,
                            'SharePointURL': OfficeSharePointAdminURL

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

                                    LoadAllTenantsForAllFunction();
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

        if (WhatAction == "ADDNEWADMIN") {

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

                document.getElementById("ExecutingAssessmentNowForAllCircle").display = "block";
                document.getElementById("MicrosoftADAssDivData").style.display = "none";
                document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "none";
                document.getElementById("ExecuteAssessmentLogDiv").style.display = "block";

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

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";

                        MonitorAssessmentNow();

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
                var ModDesNow = document.getElementById("ModDescriptionHere").value;
                var ModuleDate = document.getElementById("NewModUpdateDate").value;
                var ModuleTarget = document.getElementById("NewModModuleTarget").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var textAreaNow = document.getElementById('CDPCodeBox');
                //var CodeLines = textAreaNow.value.split('\n'); // lines is an array of strings
                //var CodeLines = document.getElementById("CDPCodeBox").value.split('\n');

                var CodeLines = document.getElementById("CDPCodeBox").value;
                var CodeLinesWithCreds = document.getElementById("CDPCodeBoxWithCred").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisMsg = "Adding Module. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallAddNewModule', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ModuleName': ModuleNameNow,
                        'ModuleDate': ModuleDate,
                        'ModDesNow': ModDesNow,
                        'ModuleTarget': ModuleTarget,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'CodeLinesWithCreds': CodeLinesWithCreds
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

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

        if (WhatAction == "UPDATECODEFORMODULE") {

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

                var ThisModName = document.getElementById("SelModCodeNowR").innerHTML;
                var res = ThisModName.split(":");
                var FinalModNameNow = res[1];

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var CodeLines = document.getElementById("ThisCodeToEditForSelMod").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisMsg = "Updating Code for Module..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallUpdateModCodeNow', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 5000000,
                    data: {
                        'ModuleName': FinalModNameNow,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'CodeLines': CodeLines
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

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

        if (WhatAction == "ADDSINGLEVIEW") {

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

                var ViewNameNow = document.getElementById("SingleViewNameNowSS").value;
                var ViewType = "Single Column";
                var ViewModName = document.getElementById("SingleViewModName").innerHTML;
                var ViewTenNAme = document.getElementById("SingleViewTenantName").value;
                var ViewDataType = document.getElementById("SingleViewDataType").value;

                var res = ViewTenNAme.split(":");
                var FinalTenNameNow = res[0];

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var ThisMsg = "Adding Single-Column View. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                $.ajax({
                    url: '/CallAddSingleView', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ViewName': ViewNameNow,
                        'ViewType': ViewType,
                        'ThisUser': FinalUserNameNow,
                        'TRPKey': TRPKey,
                        'ViewTenName': FinalTenNameNow,
                        'ViewDataType': ViewDataType,
                        'ViewModName': ViewModName
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

                        document.getElementById("RefAllViewsHereNow").click();
                        UpdateViewTableInLeftFunction()

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
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

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
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

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

$("#UpdateCurrentCodeForMod").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Are you sure you want to update code for selected Module?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "UPDATECODEFORMODULE";

});

$("#RegisterMeButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add New Administrator under the management of DynamicCloud Admin?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDNEWADMIN";

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
    var MSGNow = "Add View Set to List?"
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

$("#AddSingleViewNowSS").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add new Single-Solumn View?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDSINGLEVIEW";

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

    document.getElementById("RefAllModulesNowButton").click();
    document.getElementById("CDAddNewTenant").click();

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

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("AllModulesTableDivHere").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    e.preventDefault();
    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETForManageModulesTable",
            'userId': FinalUserNameNow
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
                        cell.style.width = "185px";

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
                        cell.style.width = "116px"

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
                        cell.style.textAlign = "center";

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
                        cell.style.textAlign = "center";

                    } else {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];

                        FinalServerName = cells[0];
                        var ReplDataN = FinalServerName.replaceAll(' ', "_");

                        var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #4c4c4c;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveCurrentlySelectedModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Module</button>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = RemoveModuleNow;

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Single Click to Edit PowerShell Code";
                        cell.style.fontSize = "11px";
                        cell.style.fontFamily = "Roboto";
                        cell.style.fontWeight = "500";
                        cell.style.color = "rgb(236, 110, 60)";
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

                    document.getElementById("LoadingCodeCicle").style.display = "block";
                    document.getElementById("SelModCodeNowR").innerHTML = "PowerShell Code:" + ThisModName;

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

                                if (data.message == "FileNotFound") {
                                    document.getElementById("ThisCodeToEditForSelMod").value = "No Code Found";
                                } else {
                                    document.getElementById("ThisCodeToEditForSelMod").value = data.message;
                                }

                                document.getElementById("LoadingCodeCicle").style.display = "none";

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
                            cell.style.width = "146px";

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
                            cell.style.width = "100px";


                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var ThisDivNow = "None";
                            var SItem = cells[1].replace(/[\r\n]+/gm, "");

                            if (SItem == "Authorization Template") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #b9ecf4;font-weight: 600;text-align:center;">Authorization Template</div>'
                            }
                            if (SItem == "Email Template") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #fffeb8;font-weight: 600;text-align: center;">Email Template</div>'
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;

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
                        var result = SItem.match(/Email Template/gi);
                        if (result) {
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

                        var result = SItem.match(/Authorization Template/gi);
                        if (result) {

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

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = "Set Availability";
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
                                                cell.style.width = "110px";

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

                                                FinalServerName = cells[1] + "#" + cells[2];
                                                var ReplDataN = FinalServerName.replaceAll(' ', "_");

                                                var ButtonText = "Available";
                                                if (SItemNow == "Available") {
                                                    ButtonText = "Unavailable";
                                                }
                                                if (SItemNow == "Unavailable") {
                                                    ButtonText = "Available";
                                                }

                                                var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:62px; padding:6px;" onclick="ChangeCurrentStatusOfTemplateFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>' + "SET" + '</button>'
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = RemoveModuleNow;

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

    $("#SearchForViewNameInLog").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ViewProcLogFileTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#SearchModuleNowISView").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ViewModulesTableNow tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

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

$("#SwitchToExeLogTab").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ThisTenant = document.getElementById("RightSideLoadedTens").value;
    var ThisModName = document.getElementById("SelectedScriptNameNow").innerHTML;

    document.getElementById("MicrosoftADAssDivData").style.display = "none";
    document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "none";
    document.getElementById("ExecuteAssessmentLogDiv").style.display = "block";

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var NewRR = ThisTenant.split(":");
    var FinalTenantNow = NewRR[0];

    e.preventDefault();
    $.ajax({
        url: '/GetExecutionLogFile', // This tells server which Route to use OKAYYYY
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
                datatable.id = 'ExecutionLogForModuleTableNow'
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

                }

                var dtable = document.getElementById("ToFillAssessmentExecutionLogDiv");
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

    e.preventDefault();
    $.ajax({
        url: '/GetAssessmentScriptLog', // This tells server which Route to use OKAYYYY
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
                datatable.id = 'AssessmentScriptLogTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var row = datatable.insertRow(-1);

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    var cell = row.insertCell(-1);
                    cell.innerHTML = rows[i];
                    cell.style.width = "120px";

                }

                var dtable = document.getElementById("ToFillAssessmentScriptLogDiv");
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
                                cell.style.fontSize = "13px";
                                ++TotPassed;
                            }
                            if (cells[3] == "Critical") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "13px";
                                ++TotCritical;
                            }
                            if (cells[3] == "High") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "13px";
                                ++TotHigh;
                            }
                            if (cells[3] == "Medium") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "13px";
                                ++TotMedium;
                            }
                            if (cells[3] == "Low") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d9b151";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "13px";
                                ++TotLow;
                            }
                            if (cells[3] == "Not Executed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#47b9e6";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "13px";
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
                                cell.style.fontSize = "12px";
                                ++TotPassed;
                            }
                            if (cells[3] == "Critical") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "red";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "12px";
                                ++TotCritical;
                            }
                            if (cells[3] == "High") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "12px";
                                ++TotHigh;
                            }
                            if (cells[3] == "Medium") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d98451";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "12px";
                                ++TotMedium;
                            }
                            if (cells[3] == "Low") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#d9b151";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "12px";
                                ++TotLow;
                            }
                            if (cells[3] == "Not Executed") {
                                cell.style.fontWeight = "500";
                                cell.style.color = "#47b9e6";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontSize = "12px";
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
            url: '/GetExecutionLogFile', // This tells server which Route to use OKAYYYY
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
                        //document.getElementById("RefAllModulesForAssModulesSet").click();
                        document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
                    } else {

                        document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "block";
                        var datatable = document.createElement("table");
                        datatable.id = 'ExecutionLogForModuleTableNow'
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

                            if (CheckFRow == "ENDOFDATA") {
                                clearInterval(GlobalAssessmentMonitor);
                                //document.getElementById("RefAllModulesForAssModulesSet").click();
                                document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
                            }

                        }

                        var dtable = document.getElementById("ToFillAssessmentExecutionLogDiv");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatable);

                        //document.getElementById("RefAllModulesForAssModulesSet").click();
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
    var ThisRowIndexNow = res[2];

    var FinalTestNow = ThisTest.replaceAll('-', " ");

    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    document.getElementById("TestDetailsDivNow").innerHTML = RCC;

    //document.getElementById("ShowTestDetailsMod").style.display = "block";

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
        //document.getElementById("WhichSetToSearchIn").innerHTML = ThisIDToSkip;

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
    if (ThisIDNow == "ProcessingAgentsPane") {} else {
        document.getElementById("ProcessingAgentsPane").style.display = "none";
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

$("#ShowSetProcessingLogDiv").click(function(e) {

    document.getElementById("AssessmentSetProcAgentDivNow").style.display = "none";
    document.getElementById("SetsProcessingLogDivNN").style.display = "block";

});

$("#ManageAllSetProcAgentS").click(function(e) {

    document.getElementById("AssessmentSetProcAgentDivNow").style.display = "block";
    document.getElementById("SetsProcessingLogDivNN").style.display = "none";

});

$("#AssessmentProcAgentPane").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("AssessmentSetProcAgentPane").style.display = "block";
    document.getElementById("ManageAllSetProcAgentS").click();
    document.getElementById("RefAssessmentSetProcButtonN").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Assessment Sets Processing Agent";


});

$("#ManageAllViewsProceSagentAg").click(function(e) {

    document.getElementById("ThisIsTheGridForViewSet").style.display = "block";
    document.getElementById("DIVForAllLogsOnlyForViews").style.display = "none";
    document.getElementById("ShowViewProcLogDiv").style.display = "none";
    document.getElementById("ViewScriptLogDiv").style.display = "none";
    document.getElementById("RefAllViesNowForMan").click();
});

$("#ShowViewProcessingLogButton").click(function(e) {

    document.getElementById("ThisIsTheGridForViewSet").style.display = "none";
    document.getElementById("DIVForAllLogsOnlyForViews").style.display = "block";
    document.getElementById("ShowViewProcLogDiv").style.display = "block";
    document.getElementById("ViewScriptLogDiv").style.display = "block";

});

$("#ProcessingForViewBB").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ProcessingAgentPaneForViews").style.display = "block";
    document.getElementById("ManageAllViewsProceSagentAg").click();
    document.getElementById("WhichPaneLoadedNow").innerHTML = "Views Processing Agent";
});

$("#RefAllViesNowForMan").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("ThisIsTheGridForViewSet").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    e.preventDefault();
    $.ajax({
        url: '/LoadAllProcessingViews', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefProcAgentSetData",
            'userId': FinalUserNameNow
        },
        success: function(data) {

            if (data.message) {

                if (data.message == "FileNotFound") {
                    document.getElementById("ResetSettingsForProcAgent").click();
                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'ProcessingViewsDataTable'
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
                                cell.style.width = "99px";

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
                                cell.innerHTML = "Enable/Disable";
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

                                if (cells[4] == "Enabled") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #a6f988;font-weight: 600;text-align:center;">Enabled</div>'
                                }
                                if (cells[4] == "Disabled") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align: center;">Disabled</div>'
                                }

                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                                var WhatToDoNow = "Disable";
                                if (cells[4] == "Enabled") {
                                    WhatToDoNow = "Disable";
                                }
                                if (cells[4] == "Disabled") {
                                    WhatToDoNow = "Enable";
                                }

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];

                                ModuleToModify = cells[0];
                                var ReplDataN = ModuleToModify.replaceAll(' ', "_") + ":" + cells[2].replaceAll(' ', "_") + ":" + cells[3].replaceAll(' ', "_") + ":" + cells[4].replaceAll(' ', "_") + ":" + cells[5].replaceAll(' ', "_");

                                var ModifyNotSettings = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #515050;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:100px; padding:6px;" onclick="ModifyAssessmentSetNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>' + WhatToDoNow + ' </button>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ModifyNotSettings;

                            }
                        }
                    }

                    var dtable = document.getElementById("ThisIsTheGridForViewSet");
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

$("#OpenModuleSetPaneNow").click(function(e) {

    document.getElementById("ResetAllPanes").click();
    document.getElementById("ModulesSetPane").style.display = "block";
    document.getElementById("RefAllModulesSetHere").click();

    document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Modules Sets";

});

$("#RefAssessmentSetProcButtonN").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("AssessmentSetProcAgentDivNow").innerHTML = GolChakkar;

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
                                cell.style.width = "75px";

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

                                if (cells[3] == "Enabled") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #a6f988;font-weight: 600;text-align:center;">Enabled</div>'
                                }
                                if (cells[3] == "Disabled") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align: center;">Disabled</div>'
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

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

$("#ManageAllTemplatesNowC").click(function(e) {

    document.getElementById("AddingANewTemplateDiv").style.display = "none";
    document.getElementById("AllTemplatesDivForTable").style.display = "block";

});

$("#ManageAllDCModulesNow").click(function(e) {

    document.getElementById("AddingANewModuleDivNow").style.display = "none";
    document.getElementById("AllModulesTableDivHere").style.display = "block";
    document.getElementById("EditedModulePCodeNowDiv").style.display = "block";

    document.getElementById("RefAllModulesDataHereN").click();

});

$("#AddNewModuleNow").click(function(e) {

    document.getElementById("AddingANewModuleDivNow").style.display = "block";
    document.getElementById("AllModulesTableDivHere").style.display = "none";
    document.getElementById("EditedModulePCodeNowDiv").style.display = "none";

});

$("#AddNewTemplateNowButtonS").click(function(e) {

    document.getElementById("AddingANewTemplateDiv").style.display = "block";
    document.getElementById("AllTemplatesDivForTable").style.display = "none";

});


$("#AddNewModuleHereButtonN").click(function(e) {

    var ModuleNameNow = document.getElementById("NewModNameNow").value = "";
    var ModuleDate = document.getElementById("NewModUpdateDate").value = "";
    var ModuleTarget = document.getElementById("NewModModuleTarget").value = "";
    var ModuleType = document.getElementById("NewModScriptType").value = "";

    var CodeLines = document.getElementById("CDPCodeBox").value = "";

    //document.getElementById("AddCDNewScriptMod").style.display = "block";

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
    document.getElementById("ViewsPaneSingleCol").style.display = "none";
    document.getElementById("ProcessingAgentPaneForViews").style.display = "none";

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

    document.getElementById("FetchModulesCircleNow").style.display = "block";

    var SelModTypeNow = document.getElementById("AddModWhichTypeNow").value;
    var SelModAssTechNow = document.getElementById("AddModSelectWhichAssTech").value;

    document.getElementById("ShowingModForP").innerHTML = "Showing Modules for: " + SelModTypeNow + " | " + SelModAssTechNow;

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
            datatable.setAttribute('class', 'SummaryTableClassforModulesSet');

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

            document.getElementById("FetchModulesCircleNow").style.display = "none";

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
                            cell.style.width = "111px";

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

                            var SItem = cells[1].replace(/[\r\n]+/gm, "");
                            if (SItem == "Assessment Set") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #b9ecf4;font-weight: 600;text-align:center;">Assessment Set</div>'
                            }
                            if (SItem == "Default Set") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #d8e7ea;font-weight: 600;text-align: center;">Default Set</div>'
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;

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
                                            //cell.contentEditable = true;                                            

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[4];

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

        document.getElementById("MicrosoftADAssDivData").style.display = "block";
        document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "none";

        document.getElementById("WhichPaneLoadedNow").innerHTML = ThisModuleSetToLoad;

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
                                cell.style.color = "#555454";
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
                                cell.style.color = "#555454";

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

            //document.getElementById("MicrosoftADAssDivData").style.display = "none";
            //document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "block";



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

        rows[i].getElementsByTagName("td")[2].innerHTML = ModuleTenantNow;
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

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("MicrosoftADAssDivData").innerHTML = GolChakkar;

    //document.getElementById("RefCircleNowForAssSet").style.display = "block";

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
                var TotNonCompItems = 0;

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var ThisCheckBoxNow = document.getElementById("showcompstatusnow");
                if (ThisCheckBoxNow.checked == true) {

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split("#");

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
                                cell.style.width = "120px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Compliance";
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
                                cell.style.width = "128px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Items";
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

                            } else {

                                var PackModName = cells[0];
                                var PackDes = cells[1];
                                var AssTen = cells[2];
                                var TechCatNow = cells[3];
                                var PackSeverity = cells[4];
                                var PackCompliance = cells[5];
                                var PackIssueText = cells[6];
                                var PackImpactText = cells[7];
                                var PackRecText = cells[8];
                                var PackItems = cells[10];

                                var ThisTextPNow = '<p style="margin-top: -18px;margin-left: 51px;">' + PackModName + '</p>'

                                var ThisFinalText = "[ Category: " + TechCatNow + " | Tenant: " + AssTen + " ]"

                                if (PackSeverity == "High" || PackSeverity == "Medium" || PackSeverity == "Low") {
                                    var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: red;font-size:26px;padding-left: 16px;" aria-hidden="true"></i>'
                                } else {
                                    var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: #0bb20b;font-size:26px;padding-left: 16px;" aria-hidden="true"></i>'
                                }

                                var PackDesEle = '<p style="font-size: 12px;color: #666;text-align: left;padding-top: 0px;margin: 0px;line-height: 14px;padding-left: 17px;padding-bottom: 0px;padding-top: 0px;margin-top: 0px;/*! font-style: italic; */font-weight: 400;margin-right:111px;"><br>' + PackDes + '</p>'

                                var CatAndTen = '<p style="font-size: 11px;display: inline-block;color: #5e5d5c;text-align: left;padding-top: 0px;margin: 0px;  margin-top: 0px;  margin-right: 0px;  margin-left: 0px;line-height: 10px;padding-left: 0px;padding-bottom: 15px;padding-top: 0px;margin-top: 0px;font-style: italic;font-weight: 400;margin-right: 111px;margin-left: 17px;padding-bottom: 10px;background: white;padding-left: 10px;padding-right: 10px;margin-top: 6px;border: 1px solid #b5b2b2;border-radius: 5px;"><br>' + ThisFinalText + '</p>'

                                var cell = row.insertCell(-1);
                                cell.innerHTML = PackIcon + ThisTextPNow;
                                cell.style.width = "600px";
                                cell.style.fontSize = "13px";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontWeight = "500";
                                cell.style.color = "#0c3d68";
                                cell.style.paddingTop = "15px";

                                var ThisDivNowHigh = '<div class = "AllSevAllClass">' + PackSeverity + '</div'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNowHigh;

                                if (cells[4] == "Passed") {
                                    cell.style.color = "green";
                                    ++TotPassed;
                                }
                                if (cells[4] == "Critical") {
                                    cell.style.color = "red";
                                    ++TotCritical;
                                }
                                if (cells[4] == "High") {
                                    cell.style.color = "red";
                                    ++TotHigh;
                                }
                                if (cells[4] == "Medium") {
                                    cell.style.color = "rgb(217, 132, 81)";
                                    ++TotMedium;
                                }
                                if (cells[4] == "Low") {
                                    cell.style.color = "rgb(217, 177, 81)";
                                    ++TotLow;
                                }
                                if (cells[4] == "Not Executed") {
                                    cell.style.color = "rgb(71, 185, 230)";
                                    ++TotNotExecuted;
                                }

                                ++TotModsNow;

                                var ThisDivForComp = '<div class = "AllSevAllClass">' + PackCompliance + '</div'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivForComp;
                                if (PackCompliance == "Non-Compliant") {
                                    cell.style.color = "rgb(217, 81, 81)";
                                    ++TotNonCompItems;
                                }
                                if (PackCompliance == "Compliant") {
                                    cell.style.color = "green";
                                }

                                var PackItemsClass = '<div class = "AllSevAllClassForItems">' + PackItems + '</div'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = PackItemsClass;

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

                                //var cell = row.insertCell(-1);
                                //cell.innerHTML = ExecuteSingle;


                            }
                        }
                    }


                } else {

                    var numbernow = 0;

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split("#");

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
                                cell.style.width = "120px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Compliance";
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
                                cell.style.width = "128px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Items";
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
                                cell.innerHTML = "Impact/Recommendation";
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
                                //cell.style.width = "400px";


                            } else {

                                var PackModName = cells[0];
                                var PackDes = cells[1];
                                var AssTen = cells[2];
                                var TechCatNow = cells[3];
                                var PackSeverity = cells[4];
                                var PackCompliance = cells[5];
                                var PackIssueText = cells[6];
                                var PackImpactText = cells[7];
                                var PackRecText = cells[8];
                                var PackItems = cells[10];

                                //var ThisNowInsert = '<tbody class="labels"><tr><td colspan="5"><label for="management">Management</label><input type="checkbox" name="management" id="management" data-toggle="toggle"></td></tr></tbody>'
                                //var row = datatable.insertRow(-1);
                                //var cell = row.insertCell(-1);
                                //cell.innerHTML = ThisNowInsert;

                                var ThisFinalText = "[ Category: " + TechCatNow + " | Tenant: " + AssTen + " ]"

                                var ThisTextPNow = '<p style="margin-top: -18px;margin-left: 51px;">' + PackModName + '</p>'

                                if (PackSeverity == "High" || PackSeverity == "Medium" || PackSeverity == "Low") {
                                    var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: red;font-size:26px;padding-left: 16px;" aria-hidden="true"></i>'
                                } else {
                                    var PackIcon = '<i class="fa fa-dot-circle-o" style="margin-right: 8px;color: #0bb20b;font-size:26px;padding-left: 16px;" aria-hidden="true"></i>'
                                }

                                var PackDesEle = '<p style="font-size: 12px;color: #666;text-align: left;padding-top: 0px;margin: 0px;line-height: 14px;padding-left: 17px;padding-bottom: 0px;padding-top: 0px;margin-top: 0px;/*! font-style: italic; */font-weight: 400;margin-right:111px;"><br>' + PackDes + '</p>'

                                var CatAndTen = '<p style="font-size: 11px;display: inline-block;color: #5e5d5c;text-align: left;padding-top: 0px;margin: 0px;  margin-top: 0px;  margin-right: 0px;  margin-left: 0px;line-height: 10px;padding-left: 0px;padding-bottom: 15px;padding-top: 0px;margin-top: 0px;font-style: italic;font-weight: 400;margin-right: 111px;margin-left: 17px;padding-bottom: 10px;background: white;padding-left: 10px;padding-right: 10px;margin-top: 6px;border: 1px solid #b5b2b2;border-radius: 5px;"><br>' + ThisFinalText + '</p>'

                                var cell = row.insertCell(-1);
                                cell.innerHTML = PackIcon + ThisTextPNow + PackDesEle + CatAndTen;
                                cell.style.width = "600px";
                                cell.style.fontSize = "13px";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontWeight = "500";
                                cell.style.color = "#0c3d68";
                                cell.style.paddingTop = "15px";

                                var ThisDivNowHigh = '<div class = "AllSevAllClass">' + PackSeverity + '</div'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNowHigh;

                                if (cells[4] == "Passed") {
                                    cell.style.color = "green";
                                    ++TotPassed;
                                }
                                if (cells[4] == "Critical") {
                                    cell.style.color = "red";
                                    ++TotCritical;
                                }
                                if (cells[4] == "High") {
                                    cell.style.color = "red";
                                    ++TotHigh;
                                }
                                if (cells[4] == "Medium") {
                                    cell.style.color = "rgb(217, 132, 81)";
                                    ++TotMedium;
                                }
                                if (cells[4] == "Low") {
                                    cell.style.color = "rgb(217, 177, 81)";
                                    ++TotLow;
                                }
                                if (cells[4] == "Not Executed") {
                                    cell.style.color = "rgb(71, 185, 230)";
                                    ++TotNotExecuted;
                                }

                                ++TotModsNow;

                                var ThisDivForComp = '<div class = "AllSevAllClass">' + PackCompliance + '</div'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivForComp;
                                if (PackCompliance == "Non-Compliant") {
                                    cell.style.color = "rgb(217, 81, 81)";
                                    ++TotNonCompItems;
                                }
                                if (PackCompliance == "Compliant") {
                                    cell.style.color = "green";
                                }

                                var PackItemsClass = '<div class = "AllSevAllClassForItems">' + PackItems + '</div'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = PackItemsClass;

                                var CheckSevNow = cells[4];

                                var NumberToAdd = numbernow;
                                var DPRemoveSpaces = cells[0].replace(/ /g, '-')
                                var ReplDataN = DPRemoveSpaces + ":" + cells[4] + ":" + NumberToAdd;

                                if (CheckSevNow == "Passed") {
                                    var PackIssueTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Remark:</span>' + PackIssueText + '</p>'
                                    var PackImpactTextP = ""
                                    var PackRecTextP = ""
                                } else {
                                    var PackIssueTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Issue:</span>' + PackIssueText + '</p>'
                                    var PackImpactTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Impact:</span>' + PackImpactText + '</p>'
                                    var PackRecTextP = '<p style="margin: 0px;text-align: left;padding-bottom: 10px;padding-top: 10px;line-height: 15px;"><span style="font-size: 12px;color: #464646;font-weight: 600;">Recommendation:</span>' + PackRecText + '</p>'
                                }

                                //var ExeMName = cells[0].replace(/ /g, '_')
                                //var MExeCri = cells[3].replace(/ /g, '_')
                                //var MSetName = document.getElementById("SelectedAssSetNameNow").innerHTML;
                                //var NewMSetName = MSetName.replace(/ /g, '_')
                                //var ExeReplData = ExeMName + ":" + MExeCri + ":" + NewMSetName;

                                var ShowData = PackIssueTextP + PackImpactTextP + PackRecTextP + '<button id = ' + ReplDataN + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:110px; padding:6px;" onclick="ShowDetailsForTestFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Show Details</button>'
                                    //var ExecuteSingle = '<button id = ' + ExeReplData + ' class="CDClassButton" style="cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="ExecuteSingleAssModInSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Execute</button>'

                                if (cells[4] == "Not Executed") {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = "Not Executed";
                                } else {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = ShowData;
                                }

                                ++numbernow;

                                //var cell = row.insertCell(-1);
                                //cell.innerHTML = ExecuteSingle;


                            }
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

                var ThisPNow = '<span style="font-size: 10px;margin-left: 3px;color: #9f9e9e;">Non Compliant</span>'
                document.getElementById("ADAllNonCompNumber").innerHTML = TotNonCompItems + ThisPNow;

                //document.getElementById("RefCircleNowForAssSet").style.display = "none";
                //ApplyTechCatSevNumber();

                var tableRTC = document.getElementById('ADAssessmentTableNow');
                var cells = tableRTC.getElementsByTagName('td');
                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRTC.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {}

                        var rowSelected = tableRTC.getElementsByTagName('tr')[rowId];

                        var FinalRowID = rowId + 1;

                        var table = document.getElementById("ADAssessmentTableNow");
                        var row = table.insertRow(FinalRowID);
                        var cell1 = row.insertCell(0);
                        cell1.innerHTML = "RRRRR";
                        cell1.className = "AllSevAllClassForItems";



                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                //document.getElementById("RefCircleNowForAssSet").style.display = "none";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            //document.getElementById("RefCircleNowForAssSet").style.display = "none";
        }
    });

    //document.getElementById("RefCircleNowForAssSet").style.display = "none";

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
    var SelAssSetTech = document.getElementById("CDAssessmentTypeNow").innerHTML;

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
            'ModSetNameNow': ModSetNameNow,
            'SelAssTechNow': SelAssSetTech
        },
        success: function(data) {
            if (data.message) {

                var CreateTempTens = document.getElementById("SelectedExeCriT");
                var options = document.querySelectorAll('#SelectedExeCriT option');
                options.forEach(o => o.remove());

                var optionR = document.createElement("option");
                optionR.text = "Process All Tests";
                CreateTempTens.add(optionR);

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

                            var IconName = cells[1];

                            var FinalID = cells[0].replaceAll('_', " ");

                            var IconClass = '<i id = ' + '"' + "NONEONE" + '"' + ' class="' + IconName + '" aria-hidden="true" style="padding-right: 4px; background: transparent; padding-top: 0px;color: #313131;font-size: 29px;"></i></br>'
                            var catName = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = IconClass + catName;
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "400";
                            cell.style.lineHeight = "16px";
                            cell.style.color = "black";
                            cell.style.textAlign = "center";
                            cell.style.background = "#b6c7cf";
                            cell.id = FinalID;
                            cell.className = "CATMenucollapsible";

                            //cell.style.width = "160px";
                            if (catName == "Dashboard" || catName == "All Items") {} else {
                                var optionR = document.createElement("option");
                                optionR.text = cells[0];
                                CreateTempTens.add(optionR);
                            }

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
                            //rowsNotSelected[row].style.color = "#666666";
                            //rowsNotSelected[row].style.background = "#b6c7cf";
                            //rowsNotSelected[row].classList.remove('selected');
                        }

                        var rowSelected = tableRT.getElementsByTagName('tr')[rowId];
                        //rowSelected.style.color = "black !Important";
                        //rowSelected.style.background = "white !Important";
                        //rowSelected.className += "selected";

                        var ThisCatName = rowSelected.cells[0].id;
                        var SItem = ThisCatName.replace(/[\r\n]+/gm, "");

                        document.getElementById("SelectedAssCategoryNowF").innerHTML = SItem;

                        var text = SItem;
                        var result = text.match(/Dashboard/gi);

                        document.getElementById("ExecuteAssessmentLogDiv").style.display = "none";

                        if (result) {
                            document.getElementById("MicrosoftADAssDivData").style.display = "none";
                            document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "block";
                            document.getElementById("PrepDashboardNow").click();
                        } else {
                            document.getElementById("MicrosoftADAssDivData").style.display = "block";
                            document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "none";
                            document.getElementById("RefAllModulesForAssModulesSet").click();
                        }


                    }
                }

                document.getElementById("RefAllModulesForAssModulesSet").click();

                SetClassForTableNow()


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                //document.getElementById("RefCircleNowForAssSet").style.display = "none";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            //document.getElementById("RefCircleNowForAssSet").style.display = "none";
        }
    });

    //document.getElementById("RefCircleNowForAssSet").style.display = "none";

});

$("#PrepDashboardNow").click(function(e) {

    //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    //document.getElementById("MicrosoftADAssDivData").innerHTML = RCC;

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("ASSShowOnlyDataDIV").innerHTML = GolChakkar;
    document.getElementById("AssOnlyForAllDataDiv").innerHTML = GolChakkar;

    document.getElementById("AssOnlyForAllDataDiv").style.display = "block";

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ModSetNameNow = document.getElementById("SelectedAssSetNameNow").innerHTML;
    var SelAssSetTech = document.getElementById("CDAssessmentTypeNow").innerHTML;

    document.getElementById("SelectedAssCategoryNowF").innerHTML = "NONE";

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    e.preventDefault();
    $.ajax({
        url: '/GetDashboardFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            'ThisLUser': FinalUserNameNow,
            'ModSetNameNow': ModSetNameNow,
            'SelAssTechNow': SelAssSetTech
        },
        success: function(data) {
            if (data.message) {

                var datatable = "";

                var datatableONLY = document.createElement("table");
                datatableONLY.id = 'AssOnlyTableForChart'
                datatableONLY.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    var row = datatableONLY.insertRow(-1);

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        if (CheckFRow == "AVDCat") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Category";
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
                            cell.innerHTML = "Issues";
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

                            var CatName = cells[0];
                            var IconName = cells[1];
                            var TotTests = cells[2];
                            var TotHighRisks = cells[3];
                            var TotMediumRisks = cells[4];
                            var TotLowRisks = cells[5];
                            var TotPassed = cells[6];
                            var TotNonCompliant = cells[7];
                            var TotAllIssues = cells[8];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = CatName;
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "400";
                            cell.style.lineHeight = "16px";
                            cell.style.color = "black";
                            cell.style.textAlign = "center";
                            cell.style.background = "#b6c7cf";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = TotAllIssues;
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "400";
                            cell.style.lineHeight = "16px";
                            cell.style.color = "black";
                            cell.style.textAlign = "center";
                            cell.style.background = "#b6c7cf";

                            var thisString = ` <div>
                            <div style="float: left;margin-right: 10px;width: 300px;background: #374760;box-shadow: 4px 4px 5px #e1e2e3;border-radius: 9px;margin-bottom:10px;">
                            <div style="width: 100px;background: white;padding: 10px;height: 52px;float: left;padding-left:0px;padding-right:0px;height: 172px;border-right: 1px solid #ddd9d9;">    
                              <div style="/*! margin: 0 auto; */margin-top: 46px;">
                              <i class="fa fa-dashboard" aria-hidden="true" style="padding-right: 4px; background: transparent; padding-top: 0px;color: black;font-size: 30px;margin-left: 32px;"></i><br><p style="color: black;/*! margin-left: 31px; */font-size: 12px;text-align: center;margin-top: 0px;">THISCAT</p>
                              </div>
                              </div>
                            <div style="width: 191px;background: white;padding: 10px;height: 52px;float: left;padding-left:0px;padding-right:0px;height: 172px;border-right: 0px solid #ddd9d9;">
                              
                              
                              <div style="/*! margin: 0 auto; */margin-top: 1px;padding-left: 10px;background: #f2f2f2;padding-top: 4px;padding-bottom: 4px;margin-right: 10px;margin-left: 10px;/*! border-radius: 100px; */">
                              <p style="color: #646161;/*! margin-left: 31px; */font-size: 11px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;font-weight: 600;">TESTS</p>
                            <p style="color: black;/*! margin-left: 31px; */font-size: 29px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;float: right;padding-top: 4px;padding-right: 10px;">2000</p>
                              </div>
                            <div style="/*! margin: 0 auto; */margin-top: 1px;padding-left: 10px;background: #f2f2f2;padding-top: 4px;padding-bottom: 4px;margin-right: 10px;margin-left: 10px;/*! border-radius: 100px; */">
                              <p style="color: #646161;/*! margin-left: 31px; */font-size: 11px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;font-weight: 600;">HIGH</p>
                            <p style="color: black;/*! margin-left: 31px; */font-size: 29px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;float: right;padding-top: 4px;padding-right: 10px;color:red;">3000</p>
                              </div>
                            <div style="/*! margin: 0 auto; */margin-top: 1px;padding-left: 10px;background: #f2f2f2;padding-top: 4px;padding-bottom: 4px;margin-right: 10px;margin-left: 10px;/*! border-radius: 100px; */">
                              <p style="color: #646161;/*! margin-left: 31px; */font-size: 11px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;font-weight: 600;">MEDIUM</p>
                            <p style="color: black;/*! margin-left: 31px; */font-size: 29px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;float: right;padding-top: 4px;padding-right: 10px;color:#f28535;">4000</p>
                              </div>
                            <div style="/*! margin: 0 auto; */margin-top: 1px;padding-left: 10px;background: #f2f2f2;padding-top: 4px;padding-bottom: 4px;margin-right: 10px;margin-left: 10px;/*! border-radius: 100px; */">
                              <p style="color: #646161;/*! margin-left: 31px; */font-size: 11px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;font-weight: 600;">NON-COMPLIANT</p>
                            <p style="color: black;/*! margin-left: 31px; */font-size: 29px;text-align: left;margin-top: 0px;line-height: 18px;margin: 0px;padding-bottom: 6px;display: inline-block;float: right;padding-top: 4px;padding-right: 10px;color:#dd0c0c;">5000</p>
                              </div>
                              </div>
                            </div>
                            </div>`

                            var Thistext = thisString;
                            var result = Thistext.replace("fa fa-dashboard", IconName).replace("THISCAT", CatName).replace("2000", TotTests).replace("3000", TotHighRisks).replace("4000", TotMediumRisks).replace("5000", TotNonCompliant);

                            datatable = datatable + result;
                            //cell.style.width = "160px";

                            var dtable = document.getElementById("AssOnlyForAllDataDiv");
                            dtable.innerHTML = datatable;

                        }
                    }
                }

                var dRCtable = document.getElementById("ASSShowOnlyDataDIV");
                dRCtable.innerHTML = "";
                dRCtable.appendChild(datatableONLY);

                var StartColNumner = "0";
                var EndColNumner = "1";
                var ChartTypeNow = "column";

                try {
                    Highcharts.chart('ASSShowOnlyChartDIV', {
                        data: {
                            table: 'AssOnlyTableForChart',
                            startColumn: StartColNumner,
                            endColumn: EndColNumner
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
                } catch (e) {}

                document.getElementById("ASSShowOnlyDataDIV").style.display = "none";
                document.getElementById("ASSShowOnlyChartDIV").style.display = "block";



            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                //document.getElementById("RefCircleNowForAssSet").style.display = "none";
            }
        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            //document.getElementById("RefCircleNowForAssSet").style.display = "none";
        }
    });

    //document.getElementById("RefCircleNowForAssSet").style.display = "none";

});

$("#ManageAllViewsNowC").click(function(e) {

    document.getElementById("AllViewsWithDataDiv").style.display = "block";
    document.getElementById("AddingANewViewDiv").style.display = "none";
    document.getElementById("RefAllViewsHereNow").click();


});

$("#AddNewviewNowMultiCol").click(function(e) {

    document.getElementById("AllViewsWithDataDiv").style.display = "none";
    document.getElementById("AddingANewViewDiv").style.display = "block";
    document.getElementById("AddingANewViewDivSingle").style.display = "none";

});

$("#AddNewviewNow").click(function(e) {

    document.getElementById("AllViewsWithDataDiv").style.display = "none";
    document.getElementById("AddingANewViewDiv").style.display = "none";
    document.getElementById("AddingANewViewDivSingle").style.display = "block";

    CollectAllModulesForView()

});

$("#CloseViewSetExeLogD").click(function(e) {

    document.getElementById("ShowViewSetLogDivNow").style.display = "none";
    document.getElementById("ViewSetTopLogDiv").style.display = "none";
    document.getElementById("AllViewsFromSetToFillDiv").style.display = "block";

});

$("#ModuleCloseViewMod").click(function(e) {

    //document.getElementById("AddNewViewModalNow").style.display = "none";
    SingleViewViewTypeChartFunction();

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

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("SingleViewDATATable").innerHTML = GolChakkar;
    document.getElementById("SingleViewCHARTOnly").innerHTML = GolChakkar;

    document.getElementById("SingleViewCHARTOnly").style.display = "none";
    document.getElementById("ChartDiv1Now").style.display = "none";
    document.getElementById("ShowViewLogDivNow").style.display = "none";
    document.getElementById("SingleViewDATATable").style.display = "block";
    document.getElementById("TopLogDiv").style.display = "none";

    var str = ThisModToRemove;
    var res = str.split(":");
    var ThisViewNameNowww = res[0];
    var FinalViewType = res[1];

    var CurrentView = document.getElementById("LoadedViewName").innerHTML;
    var FinalViewName = ThisViewNameNowww.replaceAll('_', " ");

    document.getElementById("ResetAllPanes").click();

    if (FinalViewType == "View_Set") {
        document.getElementById("ViewsPane").style.display = "block";

        document.getElementById("ShowViewSetLogDivNow").style.display = "none";
        document.getElementById("ViewSetTopLogDiv").style.display = "none";
        document.getElementById("AllViewsFromSetToFillDiv").style.display = "block";

        document.getElementById("WhichPaneLoadedNow").innerHTML = FinalViewName;
        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
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

                    var datatable = "";

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var n = 0;

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var ThisViewName = cells[0];

                        if (ThisViewName == "" || ThisViewName == null) {} else {

                            if (ThisViewName == FinalViewName) {


                                var thisString = ` <div id="ID_VIEWSETNAME" style="transition: 2.3s; width: 73px;height: 38px;margin-top: 13px;margin-left: 0px;border: 1px solid #d5d5d5;border-radius: 0px;padding: 10px;box-shadow: none;padding-top: 2px;float: left;padding-bottom: 24px;" class="AllDivsAnimationNow">
                                <div style="background: #37475f;border-radius: 5px;margin-top: -11px;height: 26px;">
<i class="fa fa-eye" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 25px;color:white;padding-left: 5px;padding-bottom: 7px;"></i>
<p id="ID_WHICHMODULE" style="font-size: 9px;padding: 0px;margin: 0px;background: #37475f;color: white;text-align: left;text-transform: uppercase;font-weight: 700;border-radius: 5px;margin-top: -26px;padding-left: 40px;/*! display: inline-block; */">VIEW_SETMODULENAME</p>
<button id="ID_VIEWMENU" class="OfficeButton AllDivsAnimationNow" style="
padding: 0px;
padding-left: 10px;
padding-right: 10px; /*! border: 2px solid #ca7d2c; */
background: white;
font-size: 12px;
font-family: 'Calibri';
margin-left: 0px;
float: none;
padding-bottom: 8px;
margin-left: 10px;
margin: 0px;
margin-left: 0px;
float: right; /*! margin-bottom: 10px; */
border: 0px solid #585959 !important;
margin-right: 0px;
padding-bottom: 3px;
margin-top: 1px;
margin-left: 0px;
border-radius: 5px !important;
margin-top: 3px;
margin-top: 1px;
margin-right: 1px;
background: black;
color: white !important;
padding: 0px;
background: transparent !important;
margin-top: -22px;
">
<i class="ri-menu-line" aria-hidden="true" style="padding-right: 10px; padding-top: 5px;font-size: 19px;color: white;"></i>
</button>
<button id="ID_VIEWREFRESH" onclick="ViewSetRefreshButtonFunction()" class="OfficeButton AllDivsAnimationNow" style="
padding: 0px;
padding-left: 10px;
padding-right: 10px; /*! border: 2px solid #ca7d2c; */
background: white;
font-size: 12px;
font-family: 'Calibri';
margin-left: 0px;
float: none;
padding-bottom: 8px;
margin-left: 10px;
margin: 0px;
margin-left: 0px;
float: right; /*! margin-bottom: 10px; */
border: 0px solid #585959 !important;
margin-right: 0px;
padding-bottom: 3px;
margin-top: 1px;
margin-left: 0px;
border-radius: 5px !important;
margin-top: 3px;
margin-top: 1px;
margin-right: 1px;
background: black;
color: white !important;
padding: 0px;
background: transparent !important;
margin-top: -22px;
">
<i class="ri-restart-line" aria-hidden="true" style="padding-right: 10px; padding-top: 5px;font-size: 19px;color: white;"></i>
</button>
  
  
</div>

<div id="ID_VPANEL" style="display: none; height: 176px; border: 1px solid rgb(217, 216, 216); width: 300px; overflow: hidden; border-radius: 0px;background: white;position: fixed;z-index: 99;right: 0;margin-right: 12px;box-shadow: 1px 1px 1px #dadddf;border-radius: 0px 5px 5px 5px;" class="AllDivsAnimationNow" data-highcharts-chart="3">

<div style="display: inline-block;float: none;border-bottom: 2px solid #dfdbdb;width: 100%;height: 64px;" class="AllDivsAnimationNow">

                                    
<p id="ID_VIEWLASTUPDATED" style="margin: 0px;font-size: 8px;font-family: &quot;Roboto&quot;;font-weight: 500;color: #8c8c8c;padding-top: 3px;padding-left: 7px;display: block;background: white;border-radius: 0px !important;padding-bottom: 3px;padding-left: 10px;padding-right: 10px;border-bottom: 1px solid #dbd2d2;height: 22px;" class="AllDivsAnimationNow">VIEWMODLASTUPDATED
                                    </p>

                                    <p id="SSS" style="margin: 0px;font-size: 10px;font-family: &quot;Roboto&quot;;font-weight: 500;color: #5e5d5d;padding-top: 13px;padding-left: 7px;display: inline-block;" class="AllDivsAnimationNow">View Type</p>


                                    <select name="ID_VIEWTYPENOW" id="ID_VIEWTYPENOW" onchange="ViewSetChangeDataTypeFunction()" style="
width: 42px;
padding: 4px;
font-size: 11px;
color: black;
border: none;
border-radius: 0px; /*! box-shadow: 0px 1px 1px #a8acae; */ /*! background: linear-gradient(90deg, rgb(167, 172, 174) 0%, rgb(227, 188, 114) 12%, rgb(228, 237, 240) 58%); */
/*! background: linear-gradient( to bottom, #3cf 0%, #fff 100% ); */
display: inline-block;
margin-bottom: 5px;
margin: 0 auto;
border: 1px solid #cbcdce;
border-radius: 5px; /*! display: inline; */ /*! float: right; */
height: 29px;
background: white;
cursor: pointer;
border-radius: 8px;
margin-right: 0px;
float: none;
box-shadow: none;
padding-top: 2px;
height: 23px;
font-size: 11px !important;
margin-top: 2px;
padding-left: 2px;
padding-right: 2px;
font-size: 10px !important;
border: 2px solid #32bfea !important;
" class="SelectClassForAllSelects">
<option>Chart</option><option>Data</option>
</select>
<p id="SSS" style="margin: 0px;font-size: 10px;font-family: &quot;Roboto&quot;;font-weight: 500;color: #5e5d5d;padding-top: 13px;padding-left: 7px;display: inline-block;" class="AllDivsAnimationNow">Height</p>
<input name="ID_VIEWHEIGHT" id="ID_VIEWHEIGHT" onchange="ViewSetHeightFunction()" style="
width: 33px;
padding: 4px;
font-size: 11px;
color: black;
border: none;
border-radius: 0px; /*! box-shadow: 0px 1px 1px #a8acae; */ /*! background: linear-gradient(90deg, rgb(167, 172, 174) 0%, rgb(227, 188, 114) 12%, rgb(228, 237, 240) 58%); */
/*! background: linear-gradient( to bottom, #3cf 0%, #fff 100% ); */
display: inline-block;
margin-bottom: 5px;
margin: 0 auto;
border: 1px solid #cbcdce;
border-radius: 5px; /*! display: inline; */ /*! float: right; */
height: 29px;
background: white;
cursor: pointer;
border-radius: 8px;
margin-right: 0px;
float: none;
box-shadow: none;
padding-top: 3px;
height: 28px;
font-size: 11px !important;
margin-top: 2px;
padding-left: 4px;
padding-right: 4px;
text-align: center;
height: 23px;
font-size: 11px !important;
margin-top: 2px;
padding-left: 2px;
padding-right: 2px;
font-size: 10px !important;
border: 2px solid #32bfea !important;
" class="SelectClassForAllSelects">
<p id="SSS" style="margin: 0px;font-size: 10px;font-family: &quot;Roboto&quot;;font-weight: 500;color: #5e5d5d;padding-top: 13px;padding-left: 7px;display: inline-block;" class="AllDivsAnimationNow">Width</p>
<input name="ID_VIEWWIDTH" id="ID_VIEWWIDTH" onchange="ViewSetWidthFunction()" style="
width: 33px;
padding: 4px;
font-size: 11px;
color: black;
border: none;
border-radius: 0px; /*! box-shadow: 0px 1px 1px #a8acae; */ /*! background: linear-gradient(90deg, rgb(167, 172, 174) 0%, rgb(227, 188, 114) 12%, rgb(228, 237, 240) 58%); */
/*! background: linear-gradient( to bottom, #3cf 0%, #fff 100% ); */
display: inline-block;
margin-bottom: 5px;
margin: 0 auto;
border: 1px solid #cbcdce;
border-radius: 5px; /*! display: inline; */ /*! float: right; */
height: 29px;
background: white;
cursor: pointer;
border-radius: 8px;
margin-right: 0px;
float: none;
box-shadow: none;
padding-top: 3px;
height: 28px;
font-size: 11px !important;
margin-top: 2px;
padding-left: 4px;
padding-right: 4px;
text-align: center;
height: 23px;
font-size: 11px !important;
margin-top: 2px;
padding-left: 2px;
padding-right: 2px;
font-size: 10px !important;
border: 2px solid #32bfea !important;
" class="SelectClassForAllSelects">




                                    



                                </div>
<div id="ID_CHARTTOPDIV" style="background: #f0f0f0; height: 110px; border-bottom: 1px solid rgb(234, 227, 227); display: block;padding-top: 0px;" class="AllDivsAnimationNow">
                                    <p style="margin: 0px;font-size: 10px;font-family: &quot;Roboto&quot;;border-bottom: 1px solid #cac4c4;text-align: center;color: #514e4e;height: 27px;font-weight: 500;background: #f0e6e6;padding-top: 4px;margin-bottom: 10px;">FOR CHARTING</p>
<p style="margin: 0px;font-size: 11px;font-family: &quot;Roboto&quot;;color: #717171;padding-left: 7px;padding-top: 7px;display: inline-block;" class="AllDivsAnimationNow">Start Column:</p>
                                    <input type="text" id="ID_STARTCOL" name="ID_STARTCOL" placeholder="80" style="display: inline-block;width: 28px;padding: 0px;/*! padding-left: 9px; */text-align: center;">
                                    <p style="margin: 0px;font-size: 11px;font-family: &quot;Roboto&quot;;color: #717171;padding-left: 7px;padding-top: 7px;display: inline-block;" class="AllDivsAnimationNow">End Column:</p>
                                    <input type="text" id="ID_ENDCOL" name="ID_ENDCOL" placeholder="90" style="display: inline-block;width: 28px;padding: 0px;/*! padding-left: 9px; */text-align: center;">

                                    <div style="display: inline-block;float: none;margin-top: 14px;" class="AllDivsAnimationNow">

                                        <p id="SSS" style="margin: 0px;font-size: 10px;font-family: &quot;Roboto&quot;;/*! font-weight: 500; *//*! color: #5e5d5d; */padding-top: 8px;padding-left: 7px;display: inline-block;margin: 0px;font-size: 11px;font-family: &quot;Roboto&quot;;color: #717171;padding-left: 7px;padding-top: 7px;display: inline-block;" class="AllDivsAnimationNow">Chart Type</p>

                                        <select name="ID_CHARTTYPE" id="ID_CHARTTYPE" onchange="ViewSetChangeChartTypeFunction()" style="
                                              width: 58px;
                                              padding: 4px;
                                              font-size: 11px;
                                              color: black;
                                              border: none;
                                              border-radius: 0px; /*! box-shadow: 0px 1px 1px #a8acae; */ /*! background: linear-gradient(90deg, rgb(167, 172, 174) 0%, rgb(227, 188, 114) 12%, rgb(228, 237, 240) 58%); */
                                              /*! background: linear-gradient( to bottom, #3cf 0%, #fff 100% ); */
                                              display: inline-block;
                                              margin-bottom: 5px;
                                              margin: 0 auto;
                                              border: 1px solid #32bfea;
                                              border-radius: 5px; /*! display: inline; */ /*! float: right; */
                                              height: 26px;
                                              background: white;
                                              cursor: pointer;
                                              border-radius: 8px;
                                              margin-right: 10px;
                                              box-shadow: none;
                                              margin-left: 8px;
                                              padding-top: 0px;
                                              " class="SelectClassForAllSelects">
                            <option>pie</option><option>column</option>
                                              </select>


                                    </div>



                                    <button id="ID_UPDATECHART" onclick="ViewSetChartUpdateFunction()" class="OfficeButton AllDivsAnimationNow" style="
    padding: 1px;
    padding-left: 5px;
    padding-right: 5px; /*! border: 2px solid #ca7d2c; */
    background: white;
    font-size: 12px;
    font-family: 'Calibri';
    margin-left: 0px;
    float: none;
    padding-bottom: 8px;
    margin-left: 10px;
    margin: 0px;
    margin-left: 0px;
    float: right; /*! margin-bottom: 10px; */
    border: 1px solid #cac8c8 !important;
    margin-right: 0px;
    padding-bottom: 3px;
    margin-top: 1px;
    margin-left: 10px;
    border-radius: 5px !important;
    margin-top: 2px;
    margin-right: 5px;
    background: white !important;
    /*! border-top: 0px !important; */
    /*! border-left: 0px !important; */
    /*! border-right: 0px !important; */
    box-shadow: ne;
    margin-top: 15px;
    ">
    <i class="far fa-check-circle" aria-hidden="true" style="padding-right: 5px; padding-top: 5px"></i>Update Chart
    </button>

                                </div>
</div>

                                <div id="ID_VIEWTABLE" style="background: white; height: 327px; overflow: auto; display: block;width: 100%;height: 100%;" class="AllDivsAnimationNow"></div>
                                
                                <div id="ID_VIEWCHARTDIV" style="display: none; height: 100%; border-right: 0px solid rgb(217, 216, 216); width: 100%; overflow: hidden; border-radius: 0px 0px 50px;background: white;" class="AllDivsAnimationNow" data-highcharts-chart="3"></div>

                            </div>`

                                var ViewModName = cells[2];
                                var ViewTenName = cells[3];
                                var ViewDataType = cells[4];
                                var ViewStartCol = cells[5];
                                var ViewEndCol = cells[6];
                                var ViewChartType = cells[7];

                                var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                                var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");

                                var ModuleAndTen = ViewModName + " [ " + ViewTenName + " ]";

                                var SPViewName = FinalViewName.replaceAll(' ', "_");

                                var VLastRefID = SPViewName + ":LASTREF" + ":" + n.toString();
                                var VChartDataTypeID = SPViewName + ":DATATYPE" + ":" + n.toString();
                                var VChartTypeID = SPViewName + ":CHARTTYPE" + ":" + n.toString();
                                var VStartColID = SPViewName + ":STARTCOLID" + ":" + n.toString();
                                var VEndColID = SPViewName + ":ENDCOLID" + ":" + n.toString();
                                var VChartUpdateID = SPViewName + ":CHARTUPDATE" + ":" + n.toString();
                                var VDataRefButtonID = SPViewName + ":DATAREFRESH" + ":" + n.toString();
                                var VChartDivID = SPViewName + ":CHARTDIV" + ":" + n.toString();
                                var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + n.toString();
                                var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + n.toString();
                                var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + n.toString();
                                var ViewWidthNow = SPViewName + ":WIDTH" + ":" + n.toString();
                                var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + n.toString();
                                var ViewMenuID = SPViewName + ":VIEWMENU" + ":" + n.toString();
                                var ViewPanelID = SPViewName + ":VPANEL" + ":" + n.toString();

                                var Thistext = thisString;
                                var result = Thistext.replaceAll("VIEW_SETMODULENAME", ModuleAndTen).replaceAll("80", ViewStartCol)
                                    .replaceAll("90", ViewEndCol).replaceAll("ID_VIEWLASTUPDATED", VLastRefID).replaceAll("ID_CHARTTYPE", VChartTypeID)
                                    .replaceAll("ID_STARTCOL", VStartColID).replaceAll("ID_ENDCOL", VEndColID).replaceAll("ID_UPDATECHART", VChartUpdateID)
                                    .replaceAll("ID_VIEWREFRESH", VDataRefButtonID).replaceAll("ID_VIEWCHARTDIV", VChartDivID).replaceAll("ID_CHARTTOPDIV", VChartTopDivID)
                                    .replaceAll("ID_VIEWTABLE", VDataTableDivID).replaceAll("ID_VIEWTYPENOW", VChartDataTypeID)
                                    .replaceAll("ID_VIEWHEIGHT", ViewHeightNow).replaceAll("ID_VIEWWIDTH", ViewWidthNow)
                                    .replaceAll("ID_VIEWSETNAME", ViewSETNameDivID).replaceAll("ID_VIEWMENU", ViewMenuID)
                                    .replaceAll("ID_VPANEL", ViewPanelID);
                                //var result = Thistext;

                                localStorage.setItem("ViewPaneID", ViewPanelID);


                                datatable = datatable + result;
                                //cell.style.width = "160px";
                                ++n;


                                //document.getElementById("SingleViewRefNowAllButton").click();

                            }
                        }
                    }

                    var dtable = document.getElementById("AllViewsFromSetToFillDiv");
                    dtable.innerHTML = datatable;

                    AddEventsAndDataToViewSetFunction(FinalViewName);

                    // Here get the data file for View and fill in table
                    //CollectViewDataFileNow()

                } else {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }



            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });


    }

    if (FinalViewType == "Single_Column") {

        document.getElementById("ViewsPaneSingleCol").style.display = "block";

        document.getElementById("WhichPaneLoadedNow").innerHTML = FinalViewName;
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

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var ThisViewName = cells[0];

                        if (ThisViewName == "" || ThisViewName == null) {} else {

                            if (ThisViewName == FinalViewName) {

                                var ViewModName = cells[2];
                                var ViewTenName = cells[3];
                                var ViewDataType = cells[4];
                                var ViewStartCol = cells[5];
                                var ViewEndCol = cells[6];
                                var ViewChartType = cells[7];

                                var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                                var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");

                                document.getElementById("SelectedViewSingleTenAndModName").innerHTML = ViewModName + ":" + ViewTenName;
                                document.getElementById("SingleViewViewTypeChart").value = SItem;

                                document.getElementById("SingleViewColChartNumber").value = ViewStartCol;
                                document.getElementById("SingleViewColChartNumberEnd").value = ViewEndCol;
                                document.getElementById("SingleViewChartTypeNowSS").value = FinalChartType;

                                //document.getElementById("SingleViewRefNowAllButton").click();

                            }
                        }
                    }

                    // Here get the data file for View and fill in table

                    CollectViewDataFileNow()

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
        } catch (e) {}
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
    //document.getElementById("AddNewViewModalNow").style.display = "block";


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

$("#UpdateChartNowForSingleView").click(function(e) {

    SingleViewViewTypeChartFunction()

});


$("#ProcSaveAssessmentSetButtonNow").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save Settings?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVESETTINGSNOWASSSET";

});

$("#CloseViewExeLogD").click(function(e) {

    SingleViewViewTypeChartFunction();

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


function ShowCompStatusFunction() {
    // Check Status here and load logs

    document.getElementById("RefAllModulesForAssModulesSet").click();

}

var myList = document.getElementsByTagName("div");
for (i = 0; i < myList.length; i++) {
    //it does work
    myList[i].classList.add("AllDivsAnimationNow");
}
var myList = document.getElementsByTagName("p");
for (i = 0; i < myList.length; i++) {
    //it does work
    myList[i].classList.add("AllDivsAnimationNow");
}
var myList = document.getElementsByTagName("tr");
for (i = 0; i < myList.length; i++) {
    //it does work
    myList[i].classList.add("AllDivsAnimationNow");
}
var myList = document.getElementsByTagName("td");
for (i = 0; i < myList.length; i++) {
    //it does work
    myList[i].classList.add("AllDivsAnimationNow");
}
var myList = document.getElementsByTagName("button");
for (i = 0; i < myList.length; i++) {
    //it does work
    myList[i].classList.add("AllDivsAnimationNow");
}
var myList = document.getElementsByTagName("select");
for (i = 0; i < myList.length; i++) {
    //it does work
    myList[i].classList.add("SelectClassForAllSelects");
}

function SetClassForTableNow() {


}

function CollectAllModulesForView() {

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    document.getElementById("RefCircleForViewModuless").style.display = "inline-block";

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallPrepareModFileForView', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETGetModToAlreadyOpendSet",
            'userId': FinalUserNameNow
        },
        success: function(data) {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ViewModulesTableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

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

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                        }
                    }
                }

                var dtable = document.getElementById("SingleViewAllModulesNowD");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                document.getElementById("RefCircleForViewModuless").style.display = "none";

                var tableRTNN = document.getElementById('ViewModulesTableNow');
                var cells = tableRTNN.getElementsByTagName('td');
                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRTNN.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {
                            rowsNotSelected[row].style.color = "#666666";
                            rowsNotSelected[row].style.background = "white";
                            rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = tableRTNN.getElementsByTagName('tr')[rowId];
                        rowSelected.style.color = "black";
                        rowSelected.style.background = "#B1EDFF";
                        rowSelected.className += "selected";

                        var ThisModNameNow = rowSelected.cells[0].innerHTML;

                        var SItem = ThisModNameNow.replace(/[\r\n]+/gm, "");
                        document.getElementById("SingleViewModName").innerHTML = SItem;

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

}

function SingleViewViewTypeChartFunction() {

    var ValCheck = document.getElementById("SingleViewViewTypeChart").value;

    if (ValCheck == "Both") {

        document.getElementById("SingleViewCHARTOnly").style.display = "block";
        document.getElementById("ChartDiv1Now").style.display = "block";
        document.getElementById("SingleViewDATATable").style.display = "block";
        document.getElementById("ShowViewLogDivNow").style.display = "none";
        document.getElementById("TopLogDiv").style.display = "none";

        document.getElementById("ChartDiv1Now").style.width = "51%";
        document.getElementById("SingleViewCHARTOnly").style.width = "51%";
        document.getElementById("SingleViewDATATable").style.width = "49%";

        document.getElementById("UpdateChartNowForSingleView").click();

    }

    if (ValCheck == "Data") {

        document.getElementById("SingleViewCHARTOnly").style.display = "none";
        document.getElementById("ChartDiv1Now").style.display = "none";
        document.getElementById("SingleViewDATATable").style.display = "block";
        document.getElementById("ShowViewLogDivNow").style.display = "none";
        document.getElementById("TopLogDiv").style.display = "none";

        document.getElementById("ChartDiv1Now").style.width = "100%";
        document.getElementById("SingleViewCHARTOnly").style.width = "100%";
        document.getElementById("SingleViewDATATable").style.width = "100%";
    }

    if (ValCheck == "Chart") {

        document.getElementById("SingleViewCHARTOnly").style.display = "block";
        document.getElementById("ChartDiv1Now").style.display = "block";
        document.getElementById("SingleViewDATATable").style.display = "none";
        document.getElementById("ShowViewLogDivNow").style.display = "none";
        document.getElementById("TopLogDiv").style.display = "none";

        document.getElementById("ChartDiv1Now").style.width = "100%";
        document.getElementById("SingleViewCHARTOnly").style.width = "100%";
        document.getElementById("SingleViewDATATable").style.width = "100%";

        var ColStartNumner = document.getElementById("SingleViewColChartNumber").value;
        var ColEndNumner = document.getElementById("SingleViewColChartNumberEnd").value;
        var ChartTypeNow = document.getElementById("SingleViewChartTypeNowSS").value;

        try {
            Highcharts.chart('SingleViewCHARTOnly', {
                data: {
                    table: 'SingleViewDATATable',
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


function CollectViewSetDataFileNow() {

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    $.ajax({
        url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
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

                var datatable = "";

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var n = 0;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisViewName = cells[0];
                    if (ThisViewName == "" || ThisViewName == null) {} else {

                        if (ThisViewName == FinalViewName) {

                            var ViewModName = cells[2];
                            var ViewTenName = cells[3];
                            var ViewDataType = cells[4];
                            var ViewStartCol = cells[5];
                            var ViewEndCol = cells[6];
                            var ViewChartType = cells[7];

                            var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                            var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");

                            var ModuleAndTen = ViewModName + " [ " + ViewTenName + " ]";

                            var SPViewName = FinalViewName.replaceAll(' ', "_");

                            var VLastRefID = SPViewName + ":LASTREF" + ":" + n.toString();
                            var VChartDataTypeID = SPViewName + ":DATATYPE" + ":" + n.toString();
                            var VChartTypeID = SPViewName + ":CHARTTYPE" + ":" + n.toString();
                            var VStartColID = SPViewName + ":STARTCOLID" + ":" + n.toString();
                            var VEndColID = SPViewName + ":ENDCOLID" + ":" + n.toString();
                            var VChartUpdateID = SPViewName + ":CHARTUPDATE" + ":" + n.toString();
                            var VDataRefButtonID = SPViewName + ":DATAREFRESH" + ":" + n.toString();
                            var VChartDivID = SPViewName + ":CHARTDIV" + ":" + n.toString();
                            var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + n.toString();
                            var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + n.toString();

                            var FinalModName = ViewModName;
                            var FinalViewTenant = ViewTenName;
                            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                            var res = ThisLUserNow.split("@");
                            var FinalUserNameNow = res[0];

                            // HERE you need to collect Data file for view module
                            var TRPKey = document.getElementById("TRPKeyN").value;
                            $.ajax({
                                url: '/CallGetViewSetDataFile', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: true,
                                timeout: 50000,
                                data: {
                                    'TRPKey': TRPKey,
                                    "type": "SOCKETGetModToAlreadyOpendSet",
                                    'userId': FinalUserNameNow,
                                    'FinalModName': FinalModName,
                                    'FinalViewTenant': FinalViewTenant,
                                    'FinalViewName': FinalViewName
                                },
                                success: function(data) {

                                    if (data.message) {

                                        if (data.message == "FileNotFound") {
                                            // Refresh View to collect data...

                                            var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">View has not been executed or not refreshed. Please click on Refresh icon to refresh data or wait for Background Refresh to trigger.</p></div>'
                                            document.getElementById(VChartDivID).innerHTML = ViewNoDataDiv;
                                            document.getElementById(VDataTableDivID).innerHTML = ViewNoDataDiv;
                                            SingleViewViewTypeChartFunction()

                                        } else {

                                            var r = 0;
                                            var datatable = document.createElement("table");
                                            var FinalTableID = 'LoadedViewDataTableNow' + r.toString();
                                            datatable.id = FinalTableID
                                            datatable.setAttribute('class', 'FixedTableForViews');

                                            let res = data.message.replaceAll('"', "");
                                            var rows = res.split("\n");

                                            var TotRowsNow = 0;

                                            for (var i = 0; i < rows.length; i++) {
                                                var cells = rows[i].split(",");

                                                var CheckFRow = cells[0];
                                                var CheckSRow = cells[1];

                                                var LastRefDateNow = "";
                                                if (CheckFRow == "LASTREFDATE") {
                                                    LastRefDateNow = cells[1];
                                                    document.getElementById(VLastRefID).innerHTML = "Last Updated: " + LastRefDateNow;
                                                } else {

                                                    ++TotRowsNow;
                                                    var row = datatable.insertRow(-1);

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

                                            var dtable = document.getElementById("SingleViewDATATable");
                                            dtable.innerHTML = "";
                                            dtable.appendChild(datatable);
                                            ++r;
                                            SingleViewViewTypeChartFunction()

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

                            ++n;

                            //document.getElementById("SingleViewRefNowAllButton").click();

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

function CollectViewDataFileNow() {

    var ThisViewData = document.getElementById("SelectedViewSingleTenAndModName").innerHTML;
    var res = ThisViewData.split(":");
    var FinalModName = res[0];
    var FinalViewTenant = res[1];

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    //document.getElementById("RefCircleForViewModuless").style.display = "inline-block";

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallGetViewNameDataFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETGetModToAlreadyOpendSet",
            'userId': FinalUserNameNow,
            'FinalModName': FinalModName,
            'FinalViewTenant': FinalViewTenant,
            'FinalViewName': FinalViewName
        },
        success: function(data) {

            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...

                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">View has not been executed or not refreshed. Please click on Refresh icon to refresh data or wait for Background Refresh to trigger.</p></div>'

                    document.getElementById("SingleViewCHARTOnly").style.display = "none";
                    document.getElementById("ChartDiv1Now").style.display = "none";
                    document.getElementById("ShowViewLogDivNow").style.display = "none";
                    document.getElementById("SingleViewDATATable").style.display = "block";
                    document.getElementById("TopLogDiv").style.display = "none";

                    document.getElementById("SingleViewDATATable").innerHTML = ViewNoDataDiv;

                    SingleViewViewTypeChartFunction()


                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'LoadedViewDataTableNow'
                    datatable.setAttribute('class', 'FixedTableForViews');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var TotRowsNow = 0;

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var LastRefDateNow = "";
                        if (CheckFRow == "LASTREFDATE") {
                            LastRefDateNow = cells[1];
                            document.getElementById("ViewLastUpdatedDateNow").innerHTML = "Last Updated: " + LastRefDateNow;
                        } else {


                            ++TotRowsNow;
                            var row = datatable.insertRow(-1);

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

                    var dtable = document.getElementById("SingleViewDATATable");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    SingleViewViewTypeChartFunction()

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

}

$("#SaveSingleViewNowForAll").click(function(e) {

    document.getElementById("FootMessageID").innerHTML = "Saving View Settings...Please wait";
    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var StartColumnChart1 = document.getElementById("SingleViewColChartNumber").value;
    var EndColumnChart1 = document.getElementById("SingleViewColChartNumberEnd").value;
    var ChartBoxChartType1 = document.getElementById("SingleViewChartTypeNowSS").value;
    var DataOrChart = document.getElementById("SingleViewViewTypeChart").value;

    $.ajax({
        url: '/CallSaveSingleViewSettings', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'ViewNameNow': FinalViewName,
            'StartColumnChart1': StartColumnChart1,
            'EndColumnChart1': EndColumnChart1,
            'ChartBoxChartType1': ChartBoxChartType1,
            'DataOrChart': DataOrChart
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

$("#SaveViewSetForAll").click(function(e) {

    document.getElementById("FootMessageID").innerHTML = "Saving View Set Settings...Please wait";
    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var datatable = "";

    $.ajax({
        url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
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

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var n = 0;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisViewName = cells[0];

                    if (ThisViewName == "" || ThisViewName == null) {} else {

                        if (ThisViewName == FinalViewName) {

                            var ViewModName = cells[2];
                            var ViewTenName = cells[3];
                            var ViewDataType = cells[4];
                            var ViewStartCol = cells[5];
                            var ViewEndCol = cells[6];
                            var ViewChartType = cells[7];

                            var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                            var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");

                            var ModuleAndTen = ViewModName + " [ " + ViewTenName + " ]";
                            var SPViewName = FinalViewName.replaceAll(' ', "_");

                            var VLastRefID = SPViewName + ":LASTREF" + ":" + n.toString();
                            var VChartDataTypeID = SPViewName + ":DATATYPE" + ":" + n.toString();
                            var VChartTypeID = SPViewName + ":CHARTTYPE" + ":" + n.toString();
                            var VStartColID = SPViewName + ":STARTCOLID" + ":" + n.toString();
                            var VEndColID = SPViewName + ":ENDCOLID" + ":" + n.toString();
                            var VChartUpdateID = SPViewName + ":CHARTUPDATE" + ":" + n.toString();
                            var VDataRefButtonID = SPViewName + ":DATAREFRESH" + ":" + n.toString();
                            var VChartDivID = SPViewName + ":CHARTDIV" + ":" + n.toString();
                            var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + n.toString();
                            var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + n.toString();
                            var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + n.toString();
                            var ViewWidthNow = SPViewName + ":WIDTH" + ":" + n.toString();
                            var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + n.toString();

                            //ViewSet,ViewType,ViewModule,ViewTenant,ViewDataType,StartColNumber,EndColNumber,ChartType,SetWidth,SetHeight

                            var ASetNameNow = FinalViewName;
                            var AViewTypeNow = "View Set";
                            var AViewModule = ViewModName
                            var AViewTenant = ViewTenName;
                            var AViewDataType = document.getElementById(VChartDataTypeID).value;
                            var AStartColNumber = document.getElementById(VStartColID).value;
                            var AEndColNumber = document.getElementById(VEndColID).value;
                            var AChartType = document.getElementById(VChartTypeID).value;
                            var ASetWidth = document.getElementById(ViewSETNameDivID).clientWidth;
                            var ASetHeight = document.getElementById(ViewSETNameDivID).clientHeight;

                            var result = ASetNameNow + "," + AViewTypeNow + "," + AViewModule + "," + AViewTenant + "," + AViewDataType + "," + AStartColNumber + "," + AEndColNumber + "," + AChartType + "," + ASetWidth + "," + ASetHeight + "\r\n";
                            datatable = datatable + result;
                            //cell.style.width = "160px";
                            ++n;

                            //document.getElementById("SingleViewRefNowAllButton").click();

                        }
                    }
                }

                // Here get the data file for View and fill in table
                //CollectViewDataFileNow()

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }



        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

    $.ajax({
        url: '/CallSaveViewSetSettings', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'ViewSetName': FinalViewName,
            'datatable': datatable
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

$("#ShowLogsForViewNow").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("ShowViewLogDivNow").innerHTML = GolChakkar;

    document.getElementById("SingleViewCHARTOnly").style.display = "none";
    document.getElementById("ChartDiv1Now").style.display = "none";
    document.getElementById("ShowViewLogDivNow").style.display = "block";
    document.getElementById("TopLogDiv").style.display = "block";
    document.getElementById("SingleViewDATATable").style.display = "none";

    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var ThisViewData = document.getElementById("SelectedViewSingleTenAndModName").innerHTML;
    var res = ThisViewData.split(":");
    var FinalModName = res[0];
    var FinalViewTenant = res[1];

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;

    $.ajax({
        url: '/CallCheckViewLogFileNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ViewName': FinalViewName,
            'FinalModName': FinalModName,
            'ThisLUser': FinalUserNameNow,
            'FinalViewTenant': FinalViewTenant
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ViewLogsDataTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var row = datatable.insertRow(-1);

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    var cell = row.insertCell(-1);
                    cell.innerHTML = rows[i];

                }

                var dtable = document.getElementById("ShowViewLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);


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


});

$("#ShowLogsForViewSetNow").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("ShowViewSetLogDivNow").innerHTML = GolChakkar;

    document.getElementById("ShowViewSetLogDivNow").style.display = "block";
    document.getElementById("ViewSetTopLogDiv").style.display = "block";
    document.getElementById("AllViewsFromSetToFillDiv").style.display = "none";

    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var ThisViewData = document.getElementById("SelectedViewSingleTenAndModName").innerHTML;
    var res = ThisViewData.split(":");
    var FinalModName = res[0];
    var FinalViewTenant = res[1];

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;

    $.ajax({
        url: '/CallCheckViewSetLogFileNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ViewName': FinalViewName,
            'FinalModName': FinalModName,
            'ThisLUser': FinalUserNameNow,
            'FinalViewTenant': FinalViewTenant
        },
        success: function(data) {
            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ViewSetLogsDataTableForSet'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var row = datatable.insertRow(-1);

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    var cell = row.insertCell(-1);
                    cell.innerHTML = rows[i];

                }

                var dtable = document.getElementById("ShowViewSetLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);


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


});

$("#SingleViewRefNowAllButton").click(function(e) {

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("SingleViewDATATable").innerHTML = GolChakkar;
    document.getElementById("SingleViewCHARTOnly").innerHTML = GolChakkar;

    document.getElementById("RefCircleWhenExecutingView").style.display = "block";

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallExecuteSingleView', // This tells server which Route to use OKAYYYY
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

                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                MonitorSingleViewExecution();

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

});


function MonitorSingleViewExecution() {
    // Check Status here and load logs

    var GlobalAssessmentMonitorView = setInterval(function() {
        CheckAssessmentMonitoringFunctionView()
    }, 3000);

    function CheckAssessmentMonitoringFunctionView() {

        var TRPKey = document.getElementById("TRPKeyN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var ThisViewData = document.getElementById("SelectedViewSingleTenAndModName").innerHTML;
        var res = ThisViewData.split(":");
        var FinalModName = res[0];
        var FinalViewTenant = res[1];

        var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;

        //document.getElementById("ShowLogsForViewNow").click();

        $.ajax({
            url: '/CallCheckViewLogFileNow', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'ViewName': FinalViewName,
                'FinalModName': FinalModName,
                'ThisLUser': FinalUserNameNow,
                'FinalViewTenant': FinalViewTenant
            },
            success: function(data) {
                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ViewLogsDataTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        if (CheckFRow == "VIEWEXECUTED") {
                            clearInterval(GlobalAssessmentMonitorView);
                            CollectViewDataFileNow();
                            document.getElementById("RefCircleWhenExecutingView").style.display = "none";
                        } else {

                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);
                            cell.innerHTML = rows[i];

                        }
                    }

                    var dtable = document.getElementById("ShowViewLogDivNow");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

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

function UpdateViewTableInLeftFunction() {

    var userId = "null";

    var TRPKey = document.getElementById("TRPKeyN").value;
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

                    if (CheckFRow == "ViewName") {

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

                            var IconClass = '<i class="fa fa-eye" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 11px;color:white;"></i>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = IconClass + cells[0];
                            cell.style.color = "#dfdddd";
                            cell.style.border = "none";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.lineHeight = "19px";
                            cell.style.background = "#2a394f";
                            cell.style.width = "200px";

                            FinalServerName = cells[0] + ":" + cells[1];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var LoadModule = '<button id = ' + ReplDataN + ' class="CDClassButton" style="background:#054071 !important; color:White !Important;cursor: pointer;background: white;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:62px; padding:6px;" onclick="LoadSelectedViewFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Load</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = LoadModule;
                            cell.style.width = "70px";
                            cell.style.border = "none";
                            cell.style.color = "#dfdddd";
                            cell.style.background = "#2a394f";

                            var FinalT = "NA";
                            if (cells[1] == "View Set") {
                                FinalT = '<span style="color: #d9742b;font-size: 10px;font-style: normal;border: 1px solid #fbfbfb;border-radius: 100px;padding-left: 5px;padding-right: 5px;background: #2a394f;box-shadow: 1px 1px 1px #dee1e3;">View Set</span>'
                            } else {
                                FinalT = '<span style="color: #c48354;font-size: 10px;font-style: italic;">' + cells[1] + '</span>';
                            }

                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);

                            cell.innerHTML = "Type: " + FinalT;
                            cell.style.color = "#a6a6a6";
                            cell.style.paddingTop = "0px";
                            cell.style.background = "#2a394f";
                            cell.style.width = "200px";

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





}

function UpdateModulesSetTableInLeftFunction() {

    var ThisNewtimeNow = new Date().getTime();
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
                        cell.style.backgroundColor = "#2a394f";
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
                            cell.style.color = "#dfdddd";
                            cell.style.border = "none";
                            cell.style.paddingBottom = "0px";
                            cell.style.fontSize = "11px";
                            cell.style.fontFamily = "Roboto";
                            cell.style.fontWeight = "500";
                            cell.style.lineHeight = "19px";
                            cell.style.background = "#2a394f";

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
                            var LoadModule = '<button id = ' + FinalNData + ' class="CDClassButton" style="cursor: pointer;color: White !Important!; background: #2a394f !important;border: 2px solid #686868;border-radius: 5px;color: white;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:65px; padding:6px; color:White !Important;" onclick="LoadModulesSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Load</button>'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = LoadModule;
                            cell.style.width = "70px";
                            cell.style.border = "none";
                            cell.style.background = "#2a394f";
                            cell.style.color = "white";

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
                            cell.style.color = "#a6a6a6";
                            cell.style.paddingTop = "0px";
                            cell.style.background = "#2a394f";

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

}

function LoadAllTenantsForAllFunction() {

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

                var ViewSetTenants = document.getElementById("ViewSetTenNameNowD");
                var options = document.querySelectorAll('#ViewSetTenNameNowD option');
                options.forEach(o => o.remove());

                var SingleViewTenantName = document.getElementById("SingleViewTenantName");
                var options = document.querySelectorAll('#SingleViewTenantName option');
                options.forEach(o => o.remove());

                var CreateAddTens = document.getElementById("AddModSelectTenName");
                var options = document.querySelectorAll('#AddModSelectTenName option');
                options.forEach(o => o.remove());

                var CreateTempTens = document.getElementById("RightSideLoadedTens");
                var options = document.querySelectorAll('#RightSideLoadedTens option');
                options.forEach(o => o.remove());

                var ConfigSetTens = document.getElementById("ConfigSetAllTenantsNow");
                var options = document.querySelectorAll('#ConfigSetAllTenantsNow option');
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
                                    ConfigSetTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    CreateTempTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    SingleViewTenantName.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ViewSetTenants.add(optionR);

                                }
                                if (WhichTargetNow == "OFFICE") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    ConfigSetTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    CreateTempTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[8] + ":OFFICE TENANT";
                                    SingleViewTenantName.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[9] + ":OFFICE TENANT";
                                    ViewSetTenants.add(optionR);


                                }
                                if (WhichTargetNow == "ADFOREST") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ConfigSetTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    CreateTempTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ViewSetTenants.add(optionR);


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

function AddViewToSetFunction(ThisID) {

    var FinalItemName = ThisID;
    var ThisViewNow = FinalItemName.replaceAll('_', ' ');

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AlreadyViewSetTableNow");
    rows = table.rows;
    var FoundOrNot = "No";
    for (i = 1; i < (rows.length); i++) {

        var xItem = rows[i].getElementsByTagName("td")[0].innerHTML;
        if (xItem == ThisViewNow) {
            FoundOrNot = "Yes";
        }
    }

    if (FoundOrNot == "No") {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        cell1.innerHTML = ThisViewNow;

        var ThisUserToRem = ThisViewNow;
        var RemoveUser = '<button id = ' + ThisUserToRem + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveViewFromSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove From Set</button>'
        var cell = row.insertCell(-1);
        cell.innerHTML = RemoveUser;

    }

}

function RemoveViewFromSetFunction(ThisID) {


}

function ChangeCurrentStatusOfTemplateFunction(ThisID) {

    var ThisTextNow = ThisID;
    var res = ThisTextNow.split("#");
    var ThisItemName = res[0];
    var ThisItemAva = res[1];

    var FinalItemName = ThisItemName.replaceAll('_', ' ');

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AuthAttrTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        var xItem = rows[i].getElementsByTagName("td")[0].innerHTML;
        if (xItem == FinalItemName) {

            var CurrentValue = rows[i].getElementsByTagName("td")[1].innerHTML;

            if (CurrentValue == "Available") {
                rows[i].getElementsByTagName("td")[1].innerHTML = "Unavailable"
                rows[i].getElementsByTagName("td")[1].style.color = "#ff6000";
            }
            if (CurrentValue == "Unavailable") {

                rows[i].getElementsByTagName("td")[1].innerHTML = "Available"
                rows[i].getElementsByTagName("td")[1].style.color = "green";
            }

        }

    }




}

function CallUpdateChartFunctionNowView() {
    document.getElementById("UpdateChartNowForSingleView").click();


}


$("#ShowViewProcessingLogButton").click(function(e) {

    document.getElementById("ThisIsTheGridForViewSet").style.display = "none";
    document.getElementById("DIVForAllLogsOnlyForViews").style.display = "block";
    document.getElementById("ShowViewProcLogDiv").style.display = "block";
    document.getElementById("ViewScriptLogDiv").style.display = "block";

    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("ShowViewProcLogDiv").innerHTML = GolChakkar;
    document.getElementById("ViewScriptLogDiv").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallGetViewProcLogFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey
        },
        success: function(data) {
            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...
                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">Background Refresh for Views has not been executed yet.</p></div>'
                    document.getElementById("ShowViewProcLogDiv").innerHTML = ViewNoDataDiv;


                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'ViewProcLogFileTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var row = datatable.insertRow(-1);

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = rows[i];

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");

                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Final View Result: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Final View Result: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                    }

                    var dtable = document.getElementById("ShowViewProcLogDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);
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

    $.ajax({
        url: '/CallGetViewScriptLog', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey
        },
        success: function(data) {
            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...
                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">Background Refresh for Views has not been executed yet.</p></div>'
                    document.getElementById("ViewScriptLogDiv").innerHTML = ViewNoDataDiv;

                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'ViewProcLogFileTableScript'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var row = datatable.insertRow(-1);

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = rows[i];

                    }

                    var dtable = document.getElementById("ViewScriptLogDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);
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


});

$("#TriggerBackgroundRefViews").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    document.getElementById("FootMessageID").innerHTML = "Background Refresh for Views Triggered...";
    document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    e.preventDefault();
    $.ajax({
        url: '/CallTriggerViewBackRef', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey
        },
        success: function(data) {

            //document.getElementById("RefAllModulesSetHere").click();

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        },
        complete: function(xrh, status) {

            document.getElementById("FootMessageID").innerHTML = "Background Refresh for Views Triggered...";
            document.getElementById("GettingReadyID").style.display = "none";
            setTimeout(function() {
                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
            }, 1500);
        }
    });

});


function AddEventsAndDataToViewSetFunction(ThisModToRemove) {

    var FinalViewName = ThisModToRemove;

    $.ajax({
        url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
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

                var datatable = "";

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var n = 0;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisViewName = cells[0];

                    if (ThisViewName == "" || ThisViewName == null) {} else {

                        if (ThisViewName == FinalViewName) {

                            var ViewModName = cells[2];
                            var ViewTenName = cells[3];
                            var ViewDataType = cells[4];
                            var ViewStartCol = cells[5];
                            var ViewEndCol = cells[6];
                            var ViewChartType = cells[7];
                            var SetWidthNow = cells[8];
                            var SetHeightNow = cells[9];

                            var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                            var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");

                            var ModuleAndTen = ViewModName + " [ " + ViewTenName + " ]";

                            var SPViewName = FinalViewName.replaceAll(' ', "_");

                            var VLastRefID = SPViewName + ":LASTREF" + ":" + n.toString();
                            var VChartDataTypeID = SPViewName + ":DATATYPE" + ":" + n.toString();
                            var VChartTypeID = SPViewName + ":CHARTTYPE" + ":" + n.toString();
                            var VStartColID = SPViewName + ":STARTCOLID" + ":" + n.toString();
                            var VEndColID = SPViewName + ":ENDCOLID" + ":" + n.toString();

                            // buttons here
                            var VChartUpdateID = SPViewName + ":CHARTUPDATE" + ":" + n.toString();
                            var VDataRefButtonID = SPViewName + ":DATAREFRESH" + ":" + n.toString();
                            var VChartDivID = SPViewName + ":CHARTDIV" + ":" + n.toString();
                            var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + n.toString();
                            var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + n.toString();

                            var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + n.toString();
                            var ViewWidthNow = SPViewName + ":WIDTH" + ":" + n.toString();
                            var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + n.toString();

                            var ViewMenuID = SPViewName + ":VIEWMENU" + ":" + n.toString();
                            var ViewPanelID = SPViewName + ":VPANEL" + ":" + n.toString();

                            //alert(VLastRefID);

                            document.getElementById(VLastRefID).innerHTML = "Not Updated";
                            document.getElementById(VChartDataTypeID).value = ViewDataType;
                            document.getElementById(VChartTypeID).value = ViewChartType;
                            document.getElementById(VStartColID).value = ViewStartCol;
                            document.getElementById(VEndColID).value = ViewEndCol;

                            var SItem = SetHeightNow.replace(/[\r\n]+/gm, "");

                            var FinalNewHeightNow = SItem + "px";
                            var FinalWidthNow = SetWidthNow + "px";
                            document.getElementById(ViewHeightNow).value = SItem;
                            document.getElementById(ViewWidthNow).value = SetWidthNow;

                            document.getElementById(ViewSETNameDivID).style.width = FinalWidthNow;
                            document.getElementById(ViewSETNameDivID).style.height = FinalNewHeightNow;

                            //document.getElementById(VChartUpdateID).addEventListener("click", ViewSetChartUpdateFunction(VChartUpdateID));
                            //document.getElementById(VDataRefButtonID).addEventListener("click", ViewSetRefreshButtonFunction(VDataRefButtonID));
                            //document.getElementById(VChartDataTypeID).addEventListener("onchange", ViewSetChangeDataTypeFunction(VChartDataTypeID));
                            //document.getElementById(VChartTypeID).addEventListener("onchange", ViewSetChangeChartTypeFunction(VChartTypeID));

                            document.getElementById(ViewMenuID).addEventListener("click", function(e) {
                                e.preventDefault();

                                var ThisEventID = e.currentTarget.id;

                                //var ThisEventID = e.target.getAttribute('id');
                                //alert(ThisEventID);

                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                // Creating Divs for view:
                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                var ViewMenuID = SPViewName + ":VIEWMENU" + ":" + nNumber;
                                var ViewPanelID = SPViewName + ":VPANEL" + ":" + nNumber;

                                var GetDispType = document.getElementById(ViewPanelID).style.display;
                                if (GetDispType == "block") {
                                    document.getElementById(ViewPanelID).style.display = "none";
                                } else {
                                    document.getElementById(ViewPanelID).style.display = "block";
                                }

                            }, false);;

                            ++n;

                            //document.getElementById("SingleViewRefNowAllButton").click();

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

function ViewSetChangeChartTypeFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var ThisNumberNow = ThisEventID;
    var res = ThisNumberNow.split(":");
    var GotViewNameWithUScore = res[0];
    var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
    var FinalNumberNow = res[1];

    alert(FinalViewName);
    alert(FinalNumberNow);

    // Creating Divs for view:
    var n = FinalNumberNow;
    SPViewName = GotViewNameWithUScore;
    var VChartDivID = SPViewName + "_CHARTDIV" + ":" + n;
    var VChartTopDivID = SPViewName + "_CHARTTOPDIV" + ":" + n;
    var VDataTableDivID = SPViewName + "_DATATABLE" + ":" + n;

    var ChartTypeNow = document.getElementById(ThisEventID).value;
    if (ChartTypeNow == "pie") {
        alert("pie");
    }
    if (ChartTypeNow == "column") {
        alert("column");
    }


}

function ViewSetHeightFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var ThisNumberNow = ThisEventID;
    var res = ThisNumberNow.split(":");
    var GotViewNameWithUScore = res[0];
    var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
    var FinalNumberNow = res[2];

    // Creating Divs for view:
    var n = FinalNumberNow;
    SPViewName = GotViewNameWithUScore;
    var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + n.toString();
    var ViewWidthNow = SPViewName + ":WIDTH" + ":" + n.toString();
    var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + n.toString();

    var CurHeightNow = document.getElementById(ViewHeightNow).value;
    var CurWidthNow = document.getElementById(ViewWidthNow).value;

    var FinalHNow = CurHeightNow + "px";
    document.getElementById(ViewSETNameDivID).style.height = FinalHNow;

}

function ViewSetWidthFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var ThisNumberNow = ThisEventID;
    var res = ThisNumberNow.split(":");
    var GotViewNameWithUScore = res[0];
    var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
    var FinalNumberNow = res[2];

    // Creating Divs for view:
    var n = FinalNumberNow;
    SPViewName = GotViewNameWithUScore;
    var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + n.toString();
    var ViewWidthNow = SPViewName + ":WIDTH" + ":" + n.toString();
    var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + n.toString();

    var CurHeightNow = document.getElementById(ViewHeightNow).value;
    var CurWidthNow = document.getElementById(ViewWidthNow).value;

    var FinalHNow = CurWidthNow + "px";
    document.getElementById(ViewSETNameDivID).style.width = FinalHNow;


}

function ViewSetMenuFunction(e) {

    var ThisEventID = e.target.getAttribute("id");
    alert(ThisEventID);

    var ThisNumberNow = ThisEventID;
    var res = ThisNumberNow.split(":");
    var GotViewNameWithUScore = res[0];
    var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
    var FinalNumberNow = res[2];

    // Creating Divs for view:
    var n = FinalNumberNow;
    SPViewName = GotViewNameWithUScore;

    var ViewMenuID = SPViewName + ":VIEWMENU" + ":" + n;

    var GetDispType = document.getElementById(ViewMenuID).style.display;
    if (GetDispType == "block") {
        document.getElementById(ViewMenuID).style.display = "none";
    } else {
        document.getElementById(ViewMenuID).style.display = "block";
    }
}

function ViewSetChangeDataTypeFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var ThisNumberNow = ThisEventID;
    var res = ThisNumberNow.split(":");
    var GotViewNameWithUScore = res[0];
    var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
    var FinalNumberNow = res[2];

    // Creating Divs for view:
    var n = FinalNumberNow;
    SPViewName = GotViewNameWithUScore;
    var VChartDivID = SPViewName + ":CHARTDIV" + ":" + n;
    var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + n;
    var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + n;

    var DataTypeNow = document.getElementById(ThisEventID).value;
    if (DataTypeNow == "Data") {
        document.getElementById(VDataTableDivID).style.display = "block";
        document.getElementById(VChartTopDivID).style.display = "block";
        document.getElementById(VChartDivID).style.display = "none";
    }
    if (DataTypeNow == "Chart") {
        document.getElementById(VDataTableDivID).style.display = "none";
        document.getElementById(VChartTopDivID).style.display = "block";
        document.getElementById(VChartDivID).style.display = "block";
    }



}

function ViewSetChartUpdateFunction() {

    var ThisEventID = event.target.getAttribute("id");
    alert(ThisEventID);

}

function ViewSetRefreshButtonFunction(e) {

    var ThisEventID = event.target.getAttribute("id");
    alert(ThisEventID);

}


$("#RefreshCompleteViewSet").click(function(e) {

    // First add GolChakkar to all
    var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 100px;height: 200px;"><span id="RefCircleNowForAssSet" style="color: red; float: right; margin-top: 6px; font-weight: 600; display: block; margin-right: 10px;"><i class="fa fa-circle-o-notch fa-spin " aria-hidden="true" style="margin-right:
    7px; font-size: 25px; 
    font-weight: 600;
      "></i></span></div>`

    document.getElementById("ViewSetRefCircleWhenExecutingView").style.display = "block";

    var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    $.ajax({
        url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
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

                var datatable = "";

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var n = 0;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisViewName = cells[0];

                    if (ThisViewName == "" || ThisViewName == null) {} else {

                        if (ThisViewName == FinalViewName) {

                            var ViewModName = cells[2];
                            var ViewTenName = cells[3];
                            var ViewDataType = cells[4];
                            var ViewStartCol = cells[5];
                            var ViewEndCol = cells[6];
                            var ViewChartType = cells[7];

                            var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                            var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");

                            var ModuleAndTen = ViewModName + " [ " + ViewTenName + " ]";

                            var SPViewName = FinalViewName.replaceAll(' ', "_");

                            var VLastRefID = SPViewName + ":LASTREF" + ":" + n.toString();
                            var VChartDataTypeID = SPViewName + ":DATATYPE" + ":" + n.toString();
                            var VChartTypeID = SPViewName + ":CHARTTYPE" + ":" + n.toString();
                            var VStartColID = SPViewName + ":STARTCOLID" + ":" + n.toString();
                            var VEndColID = SPViewName + ":ENDCOLID" + ":" + n.toString();
                            var VChartUpdateID = SPViewName + ":CHARTUPDATE" + ":" + n.toString();
                            var VDataRefButtonID = SPViewName + ":DATAREFRESH" + ":" + n.toString();
                            var VChartDivID = SPViewName + ":CHARTDIV" + ":" + n.toString();
                            var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + n.toString();
                            var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + n.toString();

                            document.getElementById(VChartDivID).innerHTML = GolChakkar;
                            document.getElementById(VDataTableDivID).innerHTML = GolChakkar;

                            ++n;

                            //document.getElementById("SingleViewRefNowAllButton").click();

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

    // Here send for Execution...

    var FinalViewSetName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallExecuteViewSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'FinalViewSetName': FinalViewSetName
        },
        success: function(data) {

            if (data.message) {

                document.getElementById("ThisMSGFooter").style.marginLeft = "-1000px";
                MonitorSingleViewSetExecution();

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

});



function MonitorSingleViewSetExecution() {
    // Check Status here and load logs

    var GlobalAssessmentMonitorViewSet = setInterval(function() {
        CheckAssessmentMonitoringFunctionViewSet()
    }, 3000);

    function CheckAssessmentMonitoringFunctionViewSet() {

        var TRPKey = document.getElementById("TRPKeyN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var ThisViewData = document.getElementById("SelectedViewSingleTenAndModName").innerHTML;
        var res = ThisViewData.split(":");
        var FinalModName = res[0];
        var FinalViewTenant = res[1];

        var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;

        //document.getElementById("ShowLogsForViewNow").click();

        $.ajax({
            url: '/CallCheckViewSetLogFileNow', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'ViewName': FinalViewName,
                'FinalModName': FinalModName,
                'ThisLUser': FinalUserNameNow,
                'FinalViewTenant': FinalViewTenant
            },
            success: function(data) {

                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ViewSetLogsDataTableForSet'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        if (CheckFRow == "VIEWEXECUTED") {
                            clearInterval(GlobalAssessmentMonitorViewSet);
                            CollectViewSetDataFileNow();
                            document.getElementById("ViewSetRefCircleWhenExecutingView").style.display = "none";
                        } else {

                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);
                            cell.innerHTML = rows[i];

                        }
                    }

                    var dtable = document.getElementById("ShowViewSetLogDivNow");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

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