var VIEWDetailsArray = "";

var GolChakkar = `<div style="margin-left: auto;margin-right: auto;width: 31px;height: 23px;"><p class="Newloader"></p></div>`
var NewGolChakkar = '<div style="margin-left: auto;margin-right: auto;width: 80px;height: 93px;"><p class="lds-hourglass"></p></div>'
var ChatGPTImg = '<div style="margin-left: auto;margin-right: auto;width: 20%;height: 100px;"><img src="/images/ChatGPT.png" class="features-img-one wow fadeInDown" alt="Features Image" style="visibility: visible; animation-name: fadeInDown; max-width: 103%; padding-top: 1px;margin-top: 15px;"><p>Powered By ChatGPT</p></div>'

const NewDateAndTime = new Date().getTime();
document.getElementById("CheckIfClickedOnExecute").innerHTML = "";

var GlobalIntervalForAllLogs = setInterval(function() {
    LoadAllLogsFunctionForInterval()
}, 10000);

function LoadAllLogsFunctionForInterval() {

    var WhichLogToLoad = document.getElementById("IntervalTriggerOPT").innerHTML;
    if (WhichLogToLoad == "NONE") {
        // DO NOTHING
    }

    if (WhichLogToLoad == "SINGLE_COL") {

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
            timeout: 5000,
            data: {
                'TRPKey': TRPKey,
                'ViewName': FinalViewName,
                'FinalModName': FinalModName,
                'ThisLUser': FinalUserNameNow,
                'FinalViewTenant': FinalViewTenant,
                'type': "SocketCall-LoadLogForSingleColumnForExecuting",
                'userId': userId
            },
            success: function(data) {

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
            }
        });

    }
}

$("#MoveAVDLeftRight").click(function(e) {

    var TotW = document.getElementById("AVDFullMenuDiv").clientWidth;

    if (TotW < 45) {
        //document.getElementById('AVDFullMenuDiv').setAttribute("style", "width:342px");
        document.getElementById('AVDFullMenuDiv').style.width = "342px";
        document.getElementById('AVDFullMenuDiv').style.minWidth = "342px";
        //document.getElementById("HideShowviewSetTop").style.display = "none";

        document.getElementById("NMoveClass").classList.add('ri-arrow-left-s-fill');
        document.getElementById("NMoveClass").classList.remove('ri-arrow-right-s-fill');

        document.getElementById("AuthTempAppliedOrNotID").style.display = "block"
        document.getElementById("RefOnlyAllVSetsButAllViesOnnly").style.display = "block";
        document.getElementById("RefOnlyAllVSetsBut").style.display = "block";
        document.getElementById("RefOnlyAllVSetsButAssSetsNow").style.display = "block";
        document.getElementById("RefOnlyDefSetNowAL").style.display = "block";

    }
    if (TotW > 340) {
        //document.getElementById('AVDFullMenuDiv').setAttribute("style", "width:43px");
        document.getElementById('AVDFullMenuDiv').style.minWidth = "41px";
        document.getElementById('AVDFullMenuDiv').style.width = "41px";
        //document.getElementById("HideShowviewSetTop").style.display = "none";

        document.getElementById("NMoveClass").classList.remove('ri-arrow-left-s-fill');
        document.getElementById("NMoveClass").classList.add('ri-arrow-right-s-fill');

        document.getElementById("AuthTempAppliedOrNotID").style.display = "none"
        document.getElementById("RefOnlyAllVSetsButAllViesOnnly").style.display = "none";
        document.getElementById("RefOnlyAllVSetsBut").style.display = "none";
        document.getElementById("RefOnlyAllVSetsButAssSetsNow").style.display = "none";
        document.getElementById("RefOnlyDefSetNowAL").style.display = "none";


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

    if (document.getElementById("AllModulesSetDivForall").style.display == "block") {} else {


        e.preventDefault();
        document.getElementById("AllModulesSetDivForall").style.display = "block";
        document.getElementById("DivForAddingModulesSet").style.display = "none";

        document.getElementById("RefAllModulesSetHere").click();
    }

});

$("#AddNewModulesSet").click(function(e) {

    if (document.getElementById("DivForAddingModulesSet").style.display == "block") {} else {


        e.preventDefault();
        document.getElementById("AllModulesSetDivForall").style.display = "none";
        document.getElementById("DivForAddingModulesSet").style.display = "block";

        document.getElementById("RefAllNewModulesFromServerButton").click();
    }
});

$("#DefSetCloseViewSetExeLogD").click(function(e) {

    e.preventDefault();
    document.getElementById("DefSetViewSetTopLogDiv").style.display = "none";
    document.getElementById("DefSetShowViewSetLogDivNow").style.display = "none";
    document.getElementById("ThisToShowWhenClickedOnDTable").style.display = "block";

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

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    document.getElementById("WhenAddingNewRefCircleForViewModuless").style.display = "inline-block";

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "Socket-Call-DCModulesONE",
            'userId': userId
        },
        success: function(data) {

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
    if (document.getElementById("ManageAllTargetsPane").style.display == "block") {} else {
        document.getElementById("ResetAllPanes").click();
        document.getElementById("ManageAllTargetsPane").style.display = "block";
        document.getElementById("ManageAllNewTenantsNow").click();
        document.getElementById("RefAllTenants").click();

        document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Targets/Tenants";
    }
});

$("#CDAddNewModule").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {

        if (document.getElementById("ManageModulesPaneHere").style.display == "block") {

        } else {


            document.getElementById("ResetAllPanes").click();
            document.getElementById("ManageModulesPaneHere").style.display = "block";
            document.getElementById("ManageAllDCModulesNow").click();

            document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Modules";
            //document.getElementById("ModuleMonitoringCheckBox").checked = false;
            //document.getElementById("ModuleNotifyOrNot").value = "Disabled";
        }
    }
});

$("#ManageConfigSetsButton").click(function(e) {

    document.getElementById("ResetAllPanes").click();

    document.getElementById("ManageConfigSetPane").style.display = "block";
    document.getElementById("RefAllConfigSetButton").click();

    //document.getElementById("ModuleMonitoringCheckBox").checked = false;
    //document.getElementById("ModuleNotifyOrNot").value = "Disabled";

});

$("#OpenManageViews").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {


        if (document.getElementById("ManageViewPaneNow").style.display == "block") {} else {
            document.getElementById("ResetAllPanes").click();

            document.getElementById("ManageViewPaneNow").style.display = "block";

            document.getElementById("ManageAllViewsNowC").click();
            //document.getElementById("RefAllViewsHereNow").click();

            document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Views";

            //document.getElementById("ModuleMonitoringCheckBox").checked = false;
            //document.getElementById("ModuleNotifyOrNot").value = "Disabled";
        }
    }
});

$("#ModuleCloseAddTenModal").click(function(e) {

    //document.getElementById("AddCDNewScriptMod").style.display = "none";

});

$("#ManagementTemplatesClose").click(function(e) {

    document.getElementById("ManagemenTemplatesMod").style.display = "none";

});

$("#CDAllTemplates").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {


        if (document.getElementById("ManageTemplatesPane").style.display == "block") {} else {

            document.getElementById("ResetAllPanes").click();
            document.getElementById("ManageTemplatesPane").style.display = "block";
            document.getElementById("ManageAllTemplatesNowC").click();
            document.getElementById("RefAllNewTemplatesNowFromServer").click();

            document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Templates";
        }
    }
});

$("#ManageAllAdministratorsNow").click(function(e) {

    document.getElementById("AllManagedADminsDivNowTable").style.display = "block";
    document.getElementById("AddingANewNewAdminDiv").style.display = "none";

});

$("#AddNewManageAdmin").click(function(e) {

    document.getElementById("AllManagedADminsDivNowTable").style.display = "none";
    document.getElementById("AddingANewNewAdminDiv").style.display = "block";

    var CurTRPKeyNow = document.getElementById("TRPKeyN").value;
    document.getElementById("RegTRPKeyNow").value = CurTRPKeyNow;

});

$("#CloseAddTenModal").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "none";

});


$("#CDRegAdmin").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {

        if (document.getElementById("ManageAdminsPane").style.display == "block") {

        } else {


            document.getElementById("ResetAllPanes").click();
            document.getElementById("ManageAdminsPane").style.display = "block";
            document.getElementById("ManageAllAdministratorsNow").click();
            document.getElementById("RefAllNewAdminsNow").click();

            document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Admins";
        }
        //document.getElementById("RegisterToSuperNovaModal").style.display = "block";
    }
});

$("#CloseRegisterModal").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "none";

});

$("#RefAllModulesNowButton").click(function(e) {

    // Get All Authorization Template and add to LocalStorage here
    // Auth Template for Admin will be obtained during login.

    localStorage.clear();

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

                var datatable = document.createElement("table");
                datatable.id = 'RBACDataTableID'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    var newcell = cells[0];

                    var row = datatable.insertRow(-1);
                    var cell = row.insertCell(-1);
                    cell.innerHTML = rows[i];
                }

                var dtable = document.getElementById("RBACTemplateTableDIV");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

    // Set all options here:

    var TmpAppOrNot = "No";

    var tablec, rowsc, ic, x, y, shouldSwitch;
    tablec = document.getElementById("RBACDataTableID");
    if (tablec == null) {} else {
        rowsc = tablec.rows;
        for (ic = 1; ic < (rowsc.length); ic++) {

            var ThisDataNow = rowsc[ic].getElementsByTagName("td")[0].innerHTML;
            if (ThisDataNow == "" || ThisDataNow == null) {} else {
                var res = ThisDataNow.split(",");
                var EntryType = res[1];
                var EntryName = res[2];
                var EntryStatus = res[3];
                var ButtonNameNow = res[4];
                var FinalButtonNameNow = ButtonNameNow.replace(/[\r\n]+/gm, "");

                TmpAppOrNot = res[0];

                if (EntryType == "OPTION") {
                    if (EntryStatus == "Unavailable") {
                        document.getElementById(FinalButtonNameNow).disabled = true;
                        document.getElementById(FinalButtonNameNow).style.textDecoration = "line-through";
                    } else {
                        document.getElementById(FinalButtonNameNow).enabled = true;
                        document.getElementById(FinalButtonNameNow).style.textDecoration = "none";
                    }
                }
                if (EntryType == "PANEL") {
                    if (EntryStatus == "Unavailable") {
                        document.getElementById(FinalButtonNameNow).style.display = "none";
                    } else {
                        document.getElementById(FinalButtonNameNow).style.display = "block";
                    }
                }

                if (TmpAppOrNot == "DEFOPTION") {
                    var HideOrshowLeftPanelNow = res[1];
                    var DefToLoadNow = res[2];
                    var DefNametoLoadNow = res[3];
                    var DefNameFinalString = res[4];

                    if (HideOrshowLeftPanelNow == "false") {
                        document.getElementById("AVDFullMenuDiv").style.display = "block";
                    }
                    if (HideOrshowLeftPanelNow == "true") {
                        document.getElementById("AVDFullMenuDiv").style.display = "none";
                    }
                    if (DefToLoadNow == "Not Selected") {} else {

                        document.getElementById("InitialScreenPane").style.display = "none";

                        if (DefToLoadNow == "View") {

                            LoadSelectedViewFunction(DefNameFinalString);
                        }
                        if (DefToLoadNow == "View Set") {

                            LoadSelectedViewFunction(DefNameFinalString);
                        }
                        if (DefToLoadNow == "Assessment Set") {

                            LoadModulesSetFunction(DefNameFinalString);
                        }
                        if (DefToLoadNow == "Default Set") {

                            LoadModulesSetFunction(DefNameFinalString);
                        }

                    }
                }

            }
        }
    }
    if (TmpAppOrNot == "") {
        document.getElementById("AuthTempAppliedOrNotID").innerHTML = "AuthTemplate: NOT Applied";
    } else {
        document.getElementById("AuthTempAppliedOrNotID").innerHTML = "AuthTemplate: APPLIED";
    }
    // Update View Table
    //UpdateViewTableInLeftFunction();
    LoadAllTenantsForAllFunction();
    //UpdateModulesSetTableInLeftFunction();

    document.getElementById("ApplyAuthTemplateNowMod").style.display = "none";

});







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
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }

    } else {


        document.getElementById("TenantDIVAttr").innerHTML = GolChakkar;

        ThisButtonID = element;
        var str = ThisButtonID;
        var res = str.split(":");
        var TenName = res[0];
        var TenType = res[1];
        var FinalTenName = TenName.replaceAll("_", " ");

        document.getElementById("ThisIsTenantThatNeedsTobeEdited").innerHTML = FinalTenName + ":" + TenType;
        document.getElementById("TenantNameWhichWasLoded").innerHTML = FinalTenName;
        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/LoadAllTenantsDet', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            data: {
                'TRPKey': TRPKey,
                "type": "CallSocket-LoadTenDetFile",
                'userId': userId,
                'TenName': FinalTenName,
                'TenType': TenType
            },
            success: function(data) {

            },
            error: function() {
                //alert("You must connect to CloudNovaDesk");
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

$("#RegisterNewUserIDButton").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "block";
    document.getElementById("RegisterToSuperNovaModal").style.zIndex = "56";

});

$("#CloseRegisterModal").click(function(e) {

    document.getElementById("RegisterToSuperNovaModal").style.display = "none";

});



$("#RefAllNewAdminsNow").click(function(e) {

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
                "type": "Socket-Call-AllAdminsONE",
                'userId': userId
            },
            success: function(data) {


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });

    }
});


$("#RefAllViewsHereNow").click(function(e) {

    document.getElementById("AllViewsShownDiv").innerHTML = GolChakkar;

    var ProceedOrNot = "Yes";

    if (ProceedOrNot == "Yes") {

        var TRPKey = document.getElementById("TRPKeyN").value;

        var FinalViewName = "NONE";
        $.ajax({
            url: '/CallLoadCDPViews', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                "type": "Socket-LoadSingleColumnViewTWO",
                'userId': userId,
                'FinalViewName': FinalViewName
            },
            success: function(data) {

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
            document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                    document.getElementById("GettingReadyID").style.display = "initial";

                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisNow = document.getElementById("ThisLoadedMSetNR").innerHTML;
                var res = ThisNow.split("|");
                var FinalModSetName = res[0];
                var FinalModSetType = res[1];

                var TRPKey = document.getElementById("TRPKeyN").value;

                var convertedIntoArray = [];
                $("table#ModulesSetAttrTableNowD tr").each(function() {
                    var rowDataArray = [];
                    var actualData = $(this).find('td');
                    if (actualData.length > 0) {
                        actualData.each(function() {
                            rowDataArray.push($(this).text());
                        });
                        convertedIntoArray.push(rowDataArray);
                    }
                });

                var FinalHostValuesNow = convertedIntoArray;

                document.getElementById("FootMessageID").innerHTML = "Saving Modules Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/SaveExistingModulesSet', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModName': FinalModSetName,
                        'ThisModType': FinalModSetType,
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
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "FACTORYRESETCALL") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var TRPKey = document.getElementById("TRPKeyN").value;

                document.getElementById("FootMessageID").innerHTML = "Factory Reset is in progress. Please Wait...";
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "initial";

                $.ajax({
                    url: '/CallFactoryReset', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    timeout: 50000,
                    data: {
                        'ThisModName': ThisModName,
                        'TRPKey': TRPKey,
                        'AllHostsValues': FinalHostValuesNow,
                        'IsAssModSet': ThisModAssOrNot,
                        'AssTypeNow': SelModTypeNow
                    },
                    success: function(data) {

                        document.getElementById("RefAllModulesNowButton").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisModName = document.getElementById("ThisModAddUName").value;
                var TRPKey = document.getElementById("TRPKeyN").value;
                var SelModTypeNow = document.getElementById("AddModSelectWhichAssTech").value;

                var FinalTenName = document.getElementById("AddModSelectTenName").value;

                var convertedIntoArray = [];
                $("table#AllModulesSetTableNowS tr").each(function() {
                    var rowDataArray = [];
                    var actualData = $(this).find('td');
                    if (actualData.length > 0) {
                        actualData.each(function() {
                            rowDataArray.push($(this).text());
                        });
                        convertedIntoArray.push(rowDataArray);
                    }
                });

                var FinalHostValuesNow = convertedIntoArray;

                var ThisModAssOrNot = "";
                if (SelModTypeNow == "Default Set") {
                    ThisModAssOrNot = "Default Set"
                } else {
                    ThisModAssOrNot = SelModTypeNow;
                }

                document.getElementById("FootMessageID").innerHTML = "Adding Modules Set...Please wait...";
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                        'AssTypeNow': ThisModAssOrNot,
                        'FinalTenName': FinalTenName
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
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        }, 1500);
                    }
                });

            }

        }

        if (WhatAction == "UPDATETENINFONOW") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                ThisButtonID = document.getElementById("ThisIsTenantThatNeedsTobeEdited").innerHTML;
                var str = ThisButtonID;
                var res = str.split(":");
                var TenName = res[0];
                var TenType = res[1];
                var FinalTenName = TenName.replaceAll("_", " ");
                var FinalTenType = TenType.replaceAll("_", " ");

                var WholeStringNow = "";

                var convertedIntoArrayForActivePolicies = [];
                $("table#EditTenDetTableNow tr").each(function() {
                    var rowDataArray = [];
                    var actualData = $(this).find('td');
                    if (actualData.length > 0) {
                        actualData.each(function() {
                            rowDataArray.push($(this).text());
                        });
                        convertedIntoArrayForActivePolicies.push(rowDataArray);
                    }
                });
                WholeStringNow = convertedIntoArrayForActivePolicies;

                var TRPKey = document.getElementById("TRPKeyN").value;

                $.ajax({
                    url: '/CallUpdateTenInfoNow', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: true,
                    data: {
                        'TRPKey': TRPKey,
                        'WholeStringNow': WholeStringNow,
                        'TenName': FinalTenName,
                        'TenType': FinalTenType
                    },
                    success: function(data) {
                        if (data.message) { // That means if there is data available

                            var ThisMsg = "Tenant Information were updated successfully!"
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";
                            var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                                clearInterval(MyTimerFooter);
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

        if (WhatAction == "UPDATEDISCOVERYCONFIG") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                    },
                    complete: function(xrh, status) {

                        document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
                        document.getElementById("GettingReadyID").style.display = "none";
                        setTimeout(function() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Admin Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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

        if (WhatAction == "RemoveSingleItemNow") {

            var TRPKey = document.getElementById("TRPKeyN").value;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            var ThisActionNowS = document.getElementById("ForMultiStringID").innerHTML;
            var res = ThisActionNowS.split(":");
            var ThisActionNow = res[0];
            var ThisObjectName = res[1];
            var OneMoreObject = res[2];

            if (ThisActionNow == "RemoveModule") {
                var ThisTempNameNow = document.getElementById("OpenedModSetNameNow").innerHTML;
                ThisObjectName = ThisObjectName + "#" + ThisTempNameNow;
            }

            var ThisMsg = "Removing. Please Wait..."
            document.getElementById("FootMessageID").innerHTML = ThisMsg;
            document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
            document.getElementById("GettingReadyID").style.display = "none";

            e.preventDefault();
            $.ajax({
                url: '/CallRemoveASingleItem', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'ThisLUser': FinalUserNameNow,
                    'ThisActionNow': ThisActionNow,
                    'ThisObjectName': ThisObjectName,
                    'OneMoreObj': OneMoreObject
                },
                success: function(data) {
                    if (data.message) {

                        if (ThisActionNow == "RemoveView") {
                            UpdateViewTableInLeftFunction();
                            document.getElementById("RefAllViewsHereNow").click();
                        }

                        if (ThisActionNow == "RemoveTemplate") {
                            document.getElementById("RefAllNewTemplatesNowFromServer").click();
                        }

                        if (ThisActionNow == "RemoveModuleSet") {
                            document.getElementById("RefAllModulesSetHere").click();
                            UpdateModulesSetTableInLeftFunction();
                        }
                        if (ThisActionNow == "RemoveAdmin") {
                            document.getElementById("RefAllNewAdminsNow").click();
                        }
                        if (ThisActionNow == "RemoveTenant") {
                            LoadAllTenantsForAllFunction();
                        }
                        if (ThisActionNow == "RemoveSingleModule") {

                            UpdateTableWhenAModuleIsRemovedFromSet();
                        }
                        if (ThisActionNow == "RemoveAViewFromViewsSet") {

                            UpdateTableWhenAViewIsRemovedFromViewSetFunction();
                        }


                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";


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

        if (WhatAction == "RemoveActionForAll") {

            var TRPKey = document.getElementById("TRPKeyN").value;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            var ThisActionNow = document.getElementById("ForMultiStringID").innerHTML;

            var ThisMsg = "Removing. Please Wait..."
            document.getElementById("FootMessageID").innerHTML = ThisMsg;
            document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
            document.getElementById("GettingReadyID").style.display = "none";

            e.preventDefault();
            $.ajax({
                url: '/CallRemoveActionForAll', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'ThisLUser': FinalUserNameNow,
                    'ThisActionNow': ThisActionNow
                },
                success: function(data) {
                    if (data.message) {

                        if (ThisActionNow == "RemoveAdmins") {
                            document.getElementById("RefAllNewAdminsNow").click();
                        }
                        if (ThisActionNow == "RemoveTemplates") {
                            document.getElementById("RefAllNewTemplatesNowFromServer").click();
                        }
                        if (ThisActionNow == "RemoveTenants") {
                            //document.getElementById("RefAllTenants").click();
                            LoadAllTenantsForAllFunction();
                        }
                        if (ThisActionNow == "RemoveSets") {
                            document.getElementById("RefAllModulesSetHere").click();
                            UpdateModulesSetTableInLeftFunction();
                        }
                        if (ThisActionNow == "RemoveViews") {
                            UpdateViewTableInLeftFunction();
                            document.getElementById("RefAllViewsHereNow").click();
                        }

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

                        var ThisMsg = "SUCCESS!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
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

        if (WhatAction == "RESETVIEWPROCSETTINGS") {

            var TRPKey = document.getElementById("TRPKeyN").value;

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            e.preventDefault();
            $.ajax({
                url: '/CallResetVIEWProcSetting', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'TRPKey': TRPKey,
                    'ThisLUser': FinalUserNameNow
                },
                success: function(data) {
                    if (data.message) {

                        document.getElementById("RefAllViesNowForMan").click();

                        var ThisMsg = "Settings have been reset successfully!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
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

                        var ThisMsg = "Settings have been reset successfully!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";

                var convertedIntoArrayForActivePolicies = [];
                $("table#ProcessingViewsDataTable tr").each(function() {
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
                    url: '/CallSaveViewProcSettings', // This tells server which Route to use OKAYYYY
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

                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
        if (WhatAction == "SAVESETTINGSNOWASSSETFORSet") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                    url: '/CallSavePROCAgentSettings', // This tells server which Route to use OKAYYYY
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

                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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

        if (WhatAction == "SAVEVIEWPROCSETTINGS") {

            var DemoOrNot = document.getElementById("DOrNot").innerHTML;
            if (DemoOrNot == "DEMO") {
                var ThisMsg = "Task is not available in Demo Mode!"
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisMsg = "Saving Processing Agent Settings. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var AllOk = "Ok"

                if (AllOk == "Ok") {

                    var ThisMsg = "Saving Current Template. Please Wait..."
                    document.getElementById("FootMessageID").innerHTML = ThisMsg;
                    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                    var WhichTempTypeNow = "Email Template";
                    var SelTempNow = document.getElementById("SelTempNameAndType").innerHTML;

                    var result = SelTempNow.match(/Authorization Template/gi);
                    if (result) {
                        var WhichTempTypeNow = "Authorization Template";
                    }
                    var result = SelTempNow.match(/Email Template/gi);
                    if (result) {
                        var WhichTempTypeNow = "Email Template";
                    }

                    var res = SelTempNow.split(":");
                    var FinalTemName = res[0];
                    var FinalTempType = res[1];

                    var TempData = convertedIntoArray;

                    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                    var res = ThisLUserNow.split("@");
                    var FinalUserNameNow = res[0];

                    var TRPKey = document.getElementById("TRPKeyN").value;

                    var HideOrShowLeftPanel = document.getElementById("AllTitlesItemIDHideLeftPanel").checked;
                    var DefToLoad = document.getElementById("DefLoadNameNewModModuleTarget").value;
                    var DefNameToLoad = document.getElementById("TypeItemNameWhichPModuleName").value;

                    e.preventDefault();
                    $.ajax({
                        url: '/SaveTempSettings', // This tells server which Route to use OKAYYYY
                        type: 'POST',
                        async: true,
                        timeout: 50000,
                        data: {
                            'SelTempNow': FinalTemName,
                            'TempTypeNow': WhichTempTypeNow,
                            'TempData': TempData,
                            'ThisUserNow': FinalUserNameNow,
                            'TRPKey': TRPKey,
                            'HideOrShowLeftPanel': HideOrShowLeftPanel,
                            'DefToLoad': DefToLoad,
                            'DefNameToLoad': DefNameToLoad
                        },
                        success: function(data) {
                            if (data.message) {

                                var SItem = data.message.replace(/[\r\n]+/gm, "");
                                var FinalItem = SItem.replaceAll(' ', '');

                                if (FinalItem == "Success") {

                                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() {
                            FunctionFooterDIV()
                        }, 3000);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

                            document.getElementById("AddTenantCircle").style.display = "none";
                            if (data.message) {
                                if (FinalItem == "TenantAlready") {

                                    document.getElementById("AddTenantCircle").style.display = "none";

                                    var ThisMsg = "Tenant by Same Name already exists!"
                                    document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                    document.getElementById("GettingReadyID").style.display = "none";
                                    var MyTimerFooter = setInterval(function() {
                                        FunctionFooterDIV()
                                    }, 5000);

                                    function FunctionFooterDIV() {
                                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                    document.getElementById("GettingReadyID").style.display = "none";
                                    var MyTimerFooter = setInterval(function() {
                                        FunctionFooterDIV()
                                    }, 5000);

                                    function FunctionFooterDIV() {
                                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                                        clearInterval(MyTimerFooter);
                                    }
                                }

                                document.getElementById("INTTotTens").innerHTML == "1"
                                LoadAllTenantsForAllFunction();
                                UpdateModulesSetTableInLeftFunction();

                                var ThisMsg = "Tenant has been added successfully!"
                                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                document.getElementById("GettingReadyID").style.display = "none";
                                var MyTimerFooter = setInterval(function() {
                                    FunctionFooterDIV()
                                }, 5000);

                                function FunctionFooterDIV() {
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

                                document.getElementById("INTTOTAdmins").innerHTML = "1";
                                document.getElementById("RegCircleFScreen").style.display = "none";
                                document.getElementById("RefAllNewAdminsNow").click();

                                var ThisMsg = "Registered Successfully!"
                                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                document.getElementById("GettingReadyID").style.display = "none";
                                var MyTimerFooter = setInterval(function() {
                                    FunctionFooterDIV()
                                }, 2000);

                                function FunctionFooterDIV() {
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                                    clearInterval(MyTimerFooter);

                                    document.getElementById("RegisterToSuperNovaModal").style.display = "block";
                                    //document.getElementById("FirstLoginEmail").value = YourAzureID;

                                }
                            }
                            if (FinalItem == "Failed") {

                                document.getElementById("RegCircleFScreen").style.display = "none";

                                var ThisMsg = "Failed to register. Please use a different Email ID or Try again."
                                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                document.getElementById("GettingReadyID").style.display = "none";
                                var MyTimerFooter = setInterval(function() {
                                    FunctionFooterDIV()
                                }, 3000);

                                function FunctionFooterDIV() {
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                                    clearInterval(MyTimerFooter);
                                }

                            }
                            var result = FinalItem.match(/TRPNotValid/gi);
                            if (result) {

                                document.getElementById("RegCircleFScreen").style.display = "none";

                                var ThisMsg = "Failed to register. CDPKey is not valid."
                                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                document.getElementById("GettingReadyID").style.display = "none";
                                var MyTimerFooter = setInterval(function() {
                                    FunctionFooterDIV()
                                }, 3000);

                                function FunctionFooterDIV() {
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("RefCDFModuleDataForTenant").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";

                        document.getElementById("RefCDFModuleDataForTenant").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";

                        MonitorAssessmentNow();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ModuleNameNow = document.getElementById("NewModNameNow").value;
                var ModDesNow = document.getElementById("ModDescriptionHere").value;
                var ModuleDate = document.getElementById("NewModUpdateDate").value;
                var ModuleTarget = document.getElementById("NewModModuleTarget").value;
                var PModuleName = document.getElementById("WhichPModuleName").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var CodeLinesWithCreds = document.getElementById("CDPCodeBoxWithCred").value;

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisMsg = "Adding Module. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "block";

                var PSModToLoad = document.getElementById("WhichPModuleName").value;
                var PSConString = document.getElementById("ModuleConnectionStringNow").value;

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
                        'CodeLinesWithCreds': CodeLinesWithCreds,
                        'PModuleName': PModuleName,
                        'PSModToLoad': PSModToLoad,
                        'PSConString': PSConString
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

                var IsCheckedOrNot = document.getElementById("ApplicableAllTitlesItemIDHideLeftPanel").checked;
                var WhichTenToSelectA = document.getElementById("WhichTenToSelectA").innerHTML;

                var ThisMsg = "Adding Single-Column View. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                        'ViewModName': ViewModName,
                        'IsCheckedOrNot': IsCheckedOrNot,
                        'WhichTenToSelectA': WhichTenToSelectA
                    },
                    success: function(data) {

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

                        document.getElementById("RefAllViewsHereNow").click();
                        UpdateViewTableInLeftFunction()

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

                        document.getElementById("RefAllNewTemplatesNowFromServer").click();

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                document.getElementById("GettingReadyID").style.display = "none";
                var MyTimerFooter = setInterval(function() {
                    FunctionFooterDIV()
                }, 3000);

                function FunctionFooterDIV() {
                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    clearInterval(MyTimerFooter);
                }

            } else {

                var ThisT = document.getElementById("ForMultiStringID").innerHTML;

                var res = ThisT.split("#");
                var TemplateNameNow = res[0].replaceAll("_", " ");
                var TemplateType = res[1].replaceAll("_", " ");

                var TRPKey = document.getElementById("TRPKeyN").value;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var ThisMsg = "Resetting Template. Please Wait..."
                document.getElementById("FootMessageID").innerHTML = ThisMsg;
                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        //document.getElementById("AddCDNewScriptMod").style.display = "none";

                    },
                    error: function() {
                        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                        document.getElementById("SuperNovaStatusID").style.color = "red";
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

    var OkOrNot = "OK";

    var ThisCheck = document.getElementById("AzureLoginIDForReg").value;
    if (ThisCheck == null || ThisCheck == "") {
        OkOrNot = "NO";
    }
    var ThisCheck = document.getElementById("RegTRPKeyNow").value;
    if (ThisCheck == null || ThisCheck == "") {
        OkOrNot = "NO";
    }

    if (OkOrNot == "NO") {
        var ThisMsg = "Please provide all inputs!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }
    }

    if (OkOrNot == "OK") {

        document.getElementById("ConfirmDBox").style.display = "block";
        var MSGNow = "Add New Administrator under the management of DynamicCloud Admin?"
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDNEWADMIN";
    }
});

$("#AddTenantNowButton").click(function(e) {

    var OkOrNot = "OK";

    var WhichTarget = document.getElementById("WhichTargetIsAdding").innerHTML;
    if (WhichTarget == "AZURE-AVD") {

        var ThisCheck = document.getElementById("fname").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("SPNDisplayName").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("SPNGUID").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("SPNPass").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("SPNSUBID").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("SPNTenantID").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
    }
    if (WhichTarget == "OFFICE") {

        var ThisCheck = document.getElementById("OfficeTenantUName").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("OfficeTenantDomainName").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("OfficeTenLicensneID").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("OfficeGlobalReaderAccountNameNow").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("OfficeGlobalReaderPAsswordNow").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
        var ThisCheck = document.getElementById("OfficeSharePointAadminURLNow").value;
        if (ThisCheck == null || ThisCheck == "") {
            OkOrNot = "NO";
        }
    }

    if (OkOrNot == "NO") {
        var ThisMsg = "Please provide all inputs!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    }

    if (OkOrNot == "OK") {

        document.getElementById("ConfirmDBox").style.display = "block";
        var MSGNow = "Add Tenant under the management of DynamicCloudAdmin?"
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDTENANT";
    }
});

$("#CreateNewConfigSetButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Add New Config Set?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "ADDNEWCONFIGSET";

});

$("#AddNewViewNowButtonS").click(function(e) {

    var ThisCheck = document.getElementById("NewViewSetNameNowAdd").value;
    var OkOrNot = "OK";

    var TotNow = 0;
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("AlreadyViewSetTableNow");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {
        x = rows[i].getElementsByTagName("td")[0].innerHTML;
        ++TotNow;
    }

    if (TotNow == 0 || ThisCheck == null) {
        OkOrNot = "NO";
    }

    if (OkOrNot == "NO") {
        var ThisMsg = "Please provide all inputs!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    }

    if (OkOrNot == "OK") {
        document.getElementById("ConfirmDBox").style.display = "block";
        var MSGNow = "Add View Set to List?"
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDNEWVIEWSET";
    }

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

$("#FactoryResetButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "ARE YOU SURE YOU WANT TO FACTORY RESET? FACTORY RESET WILL DELETE ALL DATA!"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "FACTORYRESETCALL";

});

$("#AddNewModulesSetButtonNow").click(function(e) {

    var OkOrNot = "OK";

    var ThisCheck = document.getElementById("ThisModAddUName").value;
    if (ThisCheck == null || ThisCheck == "") {
        OkOrNot = "NO";
    }

    var ThisCheck = document.getElementById("AddModSelectTenName").value;
    if (ThisCheck == null || ThisCheck == "") {
        OkOrNot = "NO";
    }

    if (OkOrNot == "NO") {
        var ThisMsg = "Please provide all inputs!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }
    }

    if (OkOrNot == "OK") {

        document.getElementById("ConfirmDBox").style.display = "block";
        var MSGNow = "Do you want to create new Modules Set?"
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDMODULESSET";
    }

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
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                document.getElementById("GettingReadyID").style.display = "none";

                document.getElementById("RefCDFModuleDataForTenant").click();

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                document.getElementById("GettingReadyID").style.display = "none";

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

    var OkOrNot = "OK";

    var ThisCheck = document.getElementById("SingleViewNameNowSS").value;
    var ModName = document.getElementById("SingleViewModName").innerHTML;

    if (ModName == null || ModName == "" || ThisCheck == null || ThisCheck == "") {
        OkOrNot = "NO";
    }

    var SelTenNow = document.getElementById("SingleViewTenantName").value;
    var SItem = SelTenNow.replace(/[\r\n]+/gm, "");

    if (document.getElementById("WhichTenToSelectA").innerHTML == "Select Office Tenant") {
        var result = SItem.match(/OFFICE TENANT/gi);
        if (result) {} else {
            OkOrNot = "No";
        }
    }
    if (document.getElementById("WhichTenToSelectA").innerHTML == "Select Azure Tenant") {
        var result = SItem.match(/AZURE TENANT/gi);
        if (result) {} else {
            OkOrNot = "No";
        }
    }

    if (OkOrNot == "No") {
        var ThisMsg = "Please provide all inputs or select required Tenant!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }
    }

    if (OkOrNot == "OK") {

        if (document.getElementById("ApplicableAllTitlesItemIDHideLeftPanel").checked == true) {
            var MSGNow = "You have selected to create Single Column View for each Applicable Tenants. Add new Single-Solumn View?"
        } else {
            var MSGNow = "Add new Single-Solumn View?"
        }

        document.getElementById("ConfirmDBox").style.display = "block";
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDSINGLEVIEW";
    }
});

$("#AddNewTemplateNow").click(function(e) {

    var ThisCheck = document.getElementById("ThisUTemplteName").value;
    var OkOrNot = "OK";

    if (ThisCheck == null || ThisCheck == "") {
        OkOrNot = "NO";
    }

    if (OkOrNot == "NO") {
        var ThisMsg = "Please provide all inputs!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    }

    if (OkOrNot == "OK") {

        document.getElementById("ConfirmDBox").style.display = "block";
        var MSGNow = "Add New Template?"
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDTEMPLATE";
    }
});

$("#AddNewModToListNowButton").click(function(e) {

    var OkOrNot = "OK";

    var ThisCheck = document.getElementById("NewModNameNow").value;
    if (ThisCheck == "" || ThisCheck == null) {
        OkOrNot = "NO";
    }
    var ThisCheck = document.getElementById("ModDescriptionHere").value;
    if (ThisCheck == "" || ThisCheck == null) {
        OkOrNot = "NO";
    }

    if (OkOrNot == "NO") {
        var ThisMsg = "Please provide all inputs!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    }

    if (OkOrNot == "OK") {

        document.getElementById("ConfirmDBox").style.display = "block";
        var MSGNow = "Add Module to Cloud Dynamic Framework?"
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "ADDNEWMODULE";
    }

});

$("#UpdateaExistingModuleButton").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Edit Module and Save Changes?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "EDITEXISTINGMODULE";

});


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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    document.getElementById("GettingReadyID").style.display = "none";

                } else {

                    document.getElementById("UserSessDetailsDiv").innerHTML = "";

                }



            }



        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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


    var CurFilter = document.getElementById("FilterModToDisplay").value;
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
            "type": "Socket-Call-DCModulesTWO",
            'userId': userId
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});


$("#RefAllNewTemplatesNowFromServer").click(function(e) {

    document.getElementById("AllTemplatesDiv").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAllTemplates', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SocketCall-INITTemplates",
            'userId': userId
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

$(document).ready(function() {

    $("#SearchinSingleColumnSBoxD").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#LoadedViewDataTableNowSingleColumn tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#SerachinDefSetSTableNowSSSData").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ModuleDataTableForAllModsModulesSet tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#AddSeleModSearchModuleNowISView").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#SelectPSModulesTableNow tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#WhenAddingNewSearchModuleNowISView").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ViewModulesTableNowWhenAdding tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#ManageSetSearchModInProcessingAgentPane").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ModulesSetAllModNamesTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#SearchViewInAgentProc").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ProcessingViewsDataTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#AssSetSearchBarNow").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#AssessmentSetProcTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#SearchWhenAddingViewSet").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#VSetTableForViewsSet tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

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
    if (ThisIDNow == "AllViewsSETSDiv") {} else {
        document.getElementById("AllViewsSETSDiv").style.display = "none";
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

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {

        document.getElementById("ResetAllPanes").click();
        document.getElementById("ProcessingAgentPane").style.display = "block";
        document.getElementById("RefProcAgentSetData").click();
    }
});

$("#ShowSetProcessingLogDiv").click(function(e) {

    document.getElementById("ShowingWhichVLogNowForProcSetSS").innerHTML = "Showing Logs for Assessment Sets Processing";
    var CheckWhichLog = "Showing Logs for Assessment Sets Processing";

    document.getElementById("AssessmentSetProcAgentDivNow").style.display = "none";
    document.getElementById("SetsProcessingLogDivNN").style.display = "block";

    document.getElementById("ShowViewProcLogDivFORSet").innerHTML = GolChakkar;
    document.getElementById("ViewLogForAssessmentScript").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallGetAssessmentSetProcLogFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog
        },
        success: function(data) {
            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...
                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">Background Refresh for Assessment Sets has not been executed yet.</p></div>'
                    document.getElementById("ShowViewProcLogDivFORSet").innerHTML = ViewNoDataDiv;

                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'AssessmentSetProcLogFileTable'
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
                        var result = SItem.match(/Processing Assessment Set:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing Assessment Set:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:/gi);
                        if (result) {
                            cell.style.background = "rgb(17, 118, 249)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/EXECUTING MODULE NOW:/gi);
                        if (result) {
                            cell.style.background = "rgb(2, 69, 155)";
                            cell.style.color = "white";
                        }

                        var result = SItem.match(/ASSESSMENT SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }


                    }

                    var dtable = document.getElementById("ShowViewProcLogDivFORSet");
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

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallGetAssessmentSetScriptLog', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog,
            'ThisLUser': FinalUserNameNow
        },
        success: function(data) {
            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...
                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">Background Refresh for Assessment Sets has not been executed yet.</p></div>'
                    document.getElementById("ViewLogForAssessmentScript").innerHTML = ViewNoDataDiv;

                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'AssessmentSetProcLogFileTableScript'
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

                    var dtable = document.getElementById("ViewLogForAssessmentScript");
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

$("#ShowDefSetProcessingLogDiv").click(function(e) {

    document.getElementById("ShowingWhichVLogNowForProcSetSS").innerHTML = "Showing Logs for Default Sets Processing";
    var CheckWhichLog = "Showing Logs for Default Sets Processing";

    document.getElementById("AssessmentSetProcAgentDivNow").style.display = "none";
    document.getElementById("SetsProcessingLogDivNN").style.display = "block";

    document.getElementById("ShowViewProcLogDivFORSet").innerHTML = GolChakkar;
    document.getElementById("ViewLogForAssessmentScript").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallGetAssessmentSetProcLogFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog
        },
        success: function(data) {
            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...
                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">Background Refresh for Assessment Sets has not been executed yet.</p></div>'
                    document.getElementById("ShowViewProcLogDivFORSet").innerHTML = ViewNoDataDiv;

                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'AssessmentSetProcLogFileTable'
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
                        var result = SItem.match(/Processing Assessment Set:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing Assessment Set:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Executing Module:/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }



                    }

                    var dtable = document.getElementById("ShowViewProcLogDivFORSet");
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

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallGetAssessmentSetScriptLog', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog,
            'ThisLUser': FinalUserNameNow
        },
        success: function(data) {
            if (data.message) {

                if (data.message == "FileNotFound") {
                    // Refresh View to collect data...
                    var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">Background Refresh for Assessment Sets has not been executed yet.</p></div>'
                    document.getElementById("ViewLogForAssessmentScript").innerHTML = ViewNoDataDiv;

                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'AssessmentSetProcLogFileTableScript'
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

                    var dtable = document.getElementById("ViewLogForAssessmentScript");
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


$("#ManageAllSetProcAgentS").click(function(e) {

    if (document.getElementById("AssessmentSetProcAgentDivNow").style.display == "block") {} else {


        document.getElementById("AssessmentSetProcAgentDivNow").style.display = "block";
        document.getElementById("SetsProcessingLogDivNN").style.display = "none";
    }
});

$("#AssessmentProcAgentPane").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {


        if (document.getElementById("AssessmentSetProcAgentPane").style.display == "block") {} else {

            document.getElementById("ResetAllPanes").click();
            document.getElementById("AssessmentSetProcAgentPane").style.display = "block";
            document.getElementById("ManageAllSetProcAgentS").click();
            document.getElementById("RefAssessmentSetProcButtonN").click();

            document.getElementById("WhichPaneLoadedNow").innerHTML = "Sets Processing Agent";
        }
    }

});

$("#ManageAllViewsProceSagentAg").click(function(e) {

    if (document.getElementById("ThisIsTheGridForViewSet").style.display == "block") {} else {

        document.getElementById("ThisIsTheGridForViewSet").style.display = "block";
        document.getElementById("DIVForAllLogsOnlyForViews").style.display = "none";
        document.getElementById("ShowViewProcLogDiv").style.display = "none";
        document.getElementById("ViewScriptLogDiv").style.display = "none";
        document.getElementById("RefAllViesNowForMan").click();
        document.getElementById("ShowingWhichVLogNow").style.display = "none";
    }
});

$("#ProcessingForViewBB").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {

        if (document.getElementById("ProcessingAgentPaneForViews").style.display == "block") {} else {
            document.getElementById("ResetAllPanes").click();
            document.getElementById("ProcessingAgentPaneForViews").style.display = "block";
            document.getElementById("ManageAllViewsProceSagentAg").click();
            document.getElementById("WhichPaneLoadedNow").innerHTML = "Views Processing Agent";
        }
    }
});

$("#RefAllViesNowForMan").click(function(e) {


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
            "type": "SocketOne-LoadViewProcAgentONE",
            'userId': userId
        },
        success: function(data) {



        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });


});

$("#OpenModuleSetPaneNow").click(function(e) {

    if (document.getElementById("INTTotTens").innerHTML == "0" || document.getElementById("INTTOTAdmins").innerHTML == "0") {

        var ThisMsg = "Please add atleast one Tenant and Admin under DynamicCloudAdmin!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }


    } else {


        if (document.getElementById("ModulesSetPane").style.display == "block") {} else {

            document.getElementById("ResetAllPanes").click();
            document.getElementById("ModulesSetPane").style.display = "block";
            document.getElementById("RefAllModulesSetHere").click();

            document.getElementById("WhichPaneLoadedNow").innerHTML = "Manage Modules Sets";
        }
    }
});

$("#RefAssessmentSetProcButtonN").click(function(e) {


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
            "type": "SocketCall-LoadProcAgentONE",
            'userId': userId
        },
        success: function(data) {


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
            "type": "SocketCall-TemplatesTWO",
            'userId': userId
        },
        success: function(data) {


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
            "type": "SocketCall-TemplatesTHREE",
            'userId': userId
        },
        success: function(data) {

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

            var NotAss = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f4cfb9;font-weight: 600;text-align:center;width: 100px;">Not Assigned</div>'
            var AssTmpName = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #b9ecf4;font-weight: 600;text-align:center;width: 150px;">' + ThisAuthTemplate + '</div>'

            if (ThisAuthTemplate == "Not Assigned") {
                WhichOneToAdd = NotAss;
            } else {
                WhichOneToAdd = AssTmpName;
            }

            rows[i].getElementsByTagName("td")[2].innerHTML = WhichOneToAdd;

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

    if (document.getElementById("MAINNOWAllModulesTableDivHere").style.display == "block") {} else {


        document.getElementById("AddingANewModuleDivNow").style.display = "none";
        document.getElementById("MAINNOWAllModulesTableDivHere").style.display = "block";
        document.getElementById("EditedModulePCodeNowDiv").style.display = "block";

        document.getElementById("RefAllModulesDataHereN").click();
    }
});

$("#AddNewModuleNow").click(function(e) {

    document.getElementById("AddingANewModuleDivNow").style.display = "block";
    document.getElementById("MAINNOWAllModulesTableDivHere").style.display = "none";
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
    document.getElementById("InitialScreenPane").style.display = "none";

    //document.getElementById("ShowMicrosoftADPaneNow").style.display = "none";

});

$("#SetAllAvailableTasks").click(function(e) {

    e.preventDefault()

    var table, rows, i, x;
    table = document.getElementById("AuthAttrTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[2].innerHTML = "Available"
        rows[i].getElementsByTagName("td")[2].style.color = "green";
    }

});

$("#SetAllUnAvailable").click(function(e) {

    e.preventDefault()

    var table, rows, i, x;
    table = document.getElementById("AuthAttrTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[2].innerHTML = "Unavailable"
        rows[i].getElementsByTagName("td")[2].style.color = "rgb(255, 96, 0)";
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

    var SelModTypeNow = document.getElementById("AddModSelectWhichAssTech").value;

    //document.getElementById("ShowingModForP").innerHTML = "Showing Modules for: " + SelModTypeNow;

    var TRPKey = document.getElementById("TRPKeyN").value;
    e.preventDefault();

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "Socket-Call-DCModulesTHREE",
            'userId': userId,
            'SelModTypeNow': SelModTypeNow
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

});

$("#RefAllModulesSetHere").click(function(e) {


    document.getElementById("AllModulesSetDivNowForAllMod").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    e.preventDefault();
    $.ajax({
        url: '/CallLoadAllModulesSetNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SocketCall-LoadModuleSetsONE",
            'userId': userId
        },
        success: function(data) {


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
    if (document.getElementById("WhichPaneLoadedNow").innerHTML == ReplSetName) {} else {

        document.getElementById("MicrosoftADAssDivData").style.display = "block";
        document.getElementById("MicrosoftADAssDivDataDashboard").style.display = "none";

        document.getElementById("WhichPaneLoadedNow").innerHTML = ReplSetName;

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
                    "type": "SocketCall-LoadDefaultSetONE",
                    'userId': userId
                },
                success: function(data) {


                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                }
            });

        }

        if (ModuleTypeNow == "Assessment_Set") {

            document.getElementById("ResetAllPanes").click();
            document.getElementById("WhichOnewasLoadedSetOrSetView").innerHTML = "ASSSET";
            var ThisIDNowForLoad = ReplSetName;
            FinallyLoadViewSetPaneFunction(ThisIDNowForLoad);

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

    e.preventDefault();

    var ScriptNameNow = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;
    var res = ScriptNameNow.split(":");
    var FinalModNameNow = res[0];
    var FinalTenNameNow = res[1];
    var FinalModTargetNow = res[2];
    var FinalTenTargetNow = res[3];

    var AllOkOrNo = "OK";
    if (FinalModTargetNow == FinalTenTargetNow) {} else {

        AllOkOrNo = 'NO'
        var ThisMsg = "Module and Tenant targets do not match. Cannot execute!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 2500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }
    }

    if (AllOkOrNo == "OK") {

        document.getElementById("DefSetViewSetTopLogDiv").style.display = "none";
        document.getElementById("DefSetShowViewSetLogDivNow").style.display = "none";
        document.getElementById("ThisToShowWhenClickedOnDTable").style.display = "block";

        document.getElementById("CheckIfClickedOnExecute").innerHTML = "YES";
        document.getElementById("SelectedModulesInSetDataDiv").innerHTML = GolChakkar;

        var ThisDefSetName = document.getElementById("WhichPaneLoadedNow").innerHTML;
        var ThisModuleAndTen = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;

        var res = ThisModuleAndTen.split(":");
        var ThisModName = res[0];
        var ThisModTenant = res[1];

        var FinalViewSetName = document.getElementById("WhichPaneLoadedNow").innerHTML;
        var TRPKey = document.getElementById("TRPKeyN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var WhichSetType = "DEFSET";

        e.preventDefault();
        $.ajax({
            url: '/CallExecuteViewSet', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 500000,
            data: {
                'TRPKey': TRPKey,
                "type": "SOCKETRefAllNewAdminsNow",
                'userId': FinalUserNameNow,
                'FinalViewSetName': FinalViewSetName,
                'ThisSetTypeNow': WhichSetType,
                'ThisModuleName': ThisModName,
                'FinalTenSelected': ThisModTenant
            },
            success: function(data) {

                if (data.message) {

                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    MonitorSingleDefSetExecutionFunction();

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

$("#ButtonFillDataInModule").click(function(e) {

    e.preventDefault();

    document.getElementById("DefSetViewSetTopLogDiv").style.display = "none";
    document.getElementById("DefSetShowViewSetLogDivNow").style.display = "none";
    document.getElementById("ThisToShowWhenClickedOnDTable").style.display = "block";

    //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    //document.getElementById("SelectedModulesInSetDataDiv").innerHTML = RCC;

    var ScriptNameNow = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;
    var res = ScriptNameNow.split(":");
    var FinalModNameNow = res[0];
    var FinalTenNameNow = res[1];
    var FinalModTargetNow = res[2];
    var FinalTenTargetNow = res[3];

    var AllOkOrNo = "OK";
    if (FinalModTargetNow == FinalTenTargetNow) {} else {
        AllOkOrNo = 'NO'
        var ThisNow = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;line-height: 41px;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #f24d4d;" aria-hidden="true"></i><br><br><span style="color: #a84407;border: 3px solid black;padding: 10px;">Error. Module and Tenant Targets do not match. Cannot execute! You MUST change Tenant from Sets Manager</span></p>'
        document.getElementById("SelectedModulesInSetDataDiv").innerHTML = ThisNow;
    }

    if (AllOkOrNo == "OK") {

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
                "type": "SocketCall-LoadDefaultSetModuleData",
                'userId': userId
            },
            success: function(data) {


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                document.getElementById("GettingReadyID").style.display = "none";

            }
        });
    }
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
            "type": "Socket-Call-DCModulesFOUR",
            'userId': userId
        },
        success: function(data) {

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
    var ThisNow = ModuleTenantNow.split(':');
    var FinalTenNow = ThisNow[0];

    var FinalOneNow = '<div style="border: 2px solid #ddd6d6;height: 44px;background: white;border-radius: 5px;"><p style="text-align: center;">' + FinalTenNow + '</p></div>'
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("ModulesSetAttrTableNowD");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        rows[i].getElementsByTagName("td")[2].innerHTML = FinalOneNow;
    }

    document.getElementById("ChangeTenantForSetMod").style.display = "none";

    document.getElementById("ThisMSGFooter").style.marginBottom = "0px";
    document.getElementById("FootMessageID").innerHTML = "Tenant has been applied.";
    document.getElementById("GettingReadyID").style.display = "none";
    setTimeout(function() {
        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
    }, 1500);

});

$("#UpdateNowForceButton").click(function(e) {

    var SetNow = document.getElementById("ThisLoadedMSetNR").innerHTML;
    var res = SetNow.split("|");
    var SetName = res[0];
    var SetType = res[1];

    if (SetType == "Default Set" || SetType == "Assessment Set") {

        var ThisModuleAndOther = document.getElementById("ThisSelModWhenAddingToAlSet").innerHTML;
        var ModuleTenantNow = document.getElementById("SelectTenantForSelectedModulesD").value;

        var resOne = ThisModuleAndOther.split(':');
        var ModuleNameNow = resOne[0];
        var ModTarget = resOne[1];

        var AllGoodOrNot = "No";
        if (document.getElementById("WhichTenToSelectAWhenAddingSingle").innerHTML == "Select Office Tenant") {
            var result = ModuleTenantNow.match(/OFFICE TENANT/gi);
            if (result) {
                AllGoodOrNot = "Yes"
            }
        }
        if (document.getElementById("WhichTenToSelectAWhenAddingSingle").innerHTML == "Select Azure Tenant") {
            var result = ModuleTenantNow.match(/AZURE TENANT/gi);
            if (result) {
                AllGoodOrNot = "Yes"
            }
        }

        if (AllGoodOrNot == "No") {
            document.getElementById("ThisMSGFooter").style.marginBottom = "0px";
            document.getElementById("FootMessageID").innerHTML = "Please select required Tenant!";
            document.getElementById("GettingReadyID").style.display = "none";
            setTimeout(function() {
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }

        if (AllGoodOrNot == "Yes") {

            var ResTwo = ModuleTenantNow.split(':');
            var FinalModTenNameNow = ResTwo[0];

            table = document.getElementById("ModulesSetAttrTableNowD");

            var row = table.insertRow(-1);

            var cell = row.insertCell(-1);
            cell.innerHTML = ModuleNameNow;

            if (SetType == "Default Set" || SetType == "Assessment Set") {
                var SItem = ModTarget.replace(/[\r\n]+/gm, "");
                if (SItem == "Azure") {
                    var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                    var cell = row.insertCell(-1);
                    cell.innerHTML = ThisDivNow;

                }
                if (SItem == "All Office") {
                    var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                    var cell = row.insertCell(-1);
                    cell.innerHTML = ThisDivNow;
                }
            }

            var ThisDivNow = '<div style="border: 2px solid #ddd6d6;height: 44px;background: white;border-radius: 5px;"><p style="text-align: center;">' + FinalModTenNameNow + '</p></div>'
            var cell = row.insertCell(-1);
            cell.innerHTML = ThisDivNow;
            cell.contentEditable = true;

            FinalServerName = SetName + ":" + ModuleNameNow;
            var ReplDataN = FinalServerName.replaceAll(' ', "_");
            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveItemFromSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
            var cell = row.insertCell(-1);
            cell.innerHTML = RemoveModuleNow;


            //Adding Module here
            var FinalModSetName = SetName;
            var FinalModSetType = SetType;
            var FinalModName = ModuleNameNow;
            var FinalModTenant = FinalModTenNameNow;

            var TRPKey = document.getElementById("TRPKeyN").value;

            document.getElementById("FootMessageID").innerHTML = "Adding Module...Please wait...";
            document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
            document.getElementById("GettingReadyID").style.display = "initial";

            $.ajax({
                url: '/CallAddASingleModuleInSet', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                timeout: 50000,
                data: {
                    'FinalModSetName': FinalModSetName,
                    'FinalModSetType': FinalModSetType,
                    'FinalModName': FinalModName,
                    'FinalModTenant': FinalModTenant,
                    'FinalModTarget': ModTarget,
                    'TRPKey': TRPKey
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
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    }, 1500);
                }
            });

            document.getElementById("AddNewModulesToSetNowMod").style.display = "none";

            document.getElementById("ThisMSGFooter").style.marginBottom = "0px";
            document.getElementById("FootMessageID").innerHTML = "Module has been added to set.";
            document.getElementById("GettingReadyID").style.display = "none";
            setTimeout(function() {
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }
    }

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


function ResetCurrentTemplateNow(ThisOne) {

    var ThisNow = ThisOne.split('#');
    var ThisTempName = ThisNow[0];

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Do you want to reset Current Template?: " + ThisTempName
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RESETTEMPLATENOW";
    document.getElementById("ForMultiStringID").innerHTML = ThisOne;

}

var TRPKey = document.getElementById("TRPKeyN").value;
var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
var res = ThisLUserNow.split("@");
var FinalUserNameNow = res[0];

var userId = FinalUserNameNow;


$("#RefAllModulesForAssModulesSet").click(function(e) {

    //var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-spinner fa-spin" style="font-size:55px;margin-right: 10px;color: #ff6c00;" aria-hidden="true"></i><br>Loading...</p>'
    //document.getElementById("MicrosoftADAssDivData").innerHTML = RCC;

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

    if (document.getElementById("AllViewsWithDataDiv").style.display == "block") {

    } else {
        document.getElementById("AllViewsWithDataDiv").style.display = "block";
        document.getElementById("AddingANewViewDiv").style.display = "none";
        document.getElementById("RefAllViewsHereNow").click();
    }

});

$("#AddNewviewNowMultiCol").click(function(e) {

    if (document.getElementById("AddingANewViewDiv").style.display == "block") {} else {


        document.getElementById("AllViewsWithDataDiv").style.display = "none";
        document.getElementById("AddingANewViewDiv").style.display = "block";
        document.getElementById("AddingANewViewDivSingle").style.display = "none";
    }
});

$("#AddNewviewNow").click(function(e) {

    if (document.getElementById("AddingANewViewDivSingle").style.display == "block") {} else {


        document.getElementById("AllViewsWithDataDiv").style.display = "none";
        document.getElementById("AddingANewViewDiv").style.display = "none";
        document.getElementById("AddingANewViewDivSingle").style.display = "block";

        CollectAllModulesForView()
    }
});

$("#DefSetRefreshViewLogForViewSetNN").click(function(e) {

    document.getElementById("DefaultSetExeLogButton").click();

});

$("#RefreshViewLogForViewSetNN").click(function(e) {

    document.getElementById("ShowLogsForViewSetNow").click();
    var ThisDivNow = "ShowViewSetLogDivNow";
    var ThisTableNow = "ViewSetLogsDataTableForSet";


});

$("#CloseViewSetExeLogD").click(function(e) {

    document.getElementById("ShowViewSetLogDivNow").style.display = "none";
    document.getElementById("ViewSetTopLogDiv").style.display = "none";
    document.getElementById("AllViewsFromSetToFillDiv").style.display = "block";

    ViewSetViewTypeChartFunction();

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


function EditCodeForSelectedModNow(ThisModToRemove) {

    var FinalModToRemove = ThisModToRemove.replaceAll('_', " ");

    var ThisModName = FinalModToRemove;
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
            'ThisModName': ThisModName,
            'type': "CallSocket-LoadSelModuleCode",
            'userId': userId
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

    var FinalModName = FinalModToRemove;

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "Socket-Call-DCModulesFIVE",
            'userId': FinalUserNameNow,
            'FinalModName': FinalModName
        },
        success: function(data) {


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });



}


function LoadSelectedViewFunction(ThisModToRemove) {

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

    if (FinalViewType == "View_Set") {

        if (document.getElementById("WhichPaneLoadedNow").innerHTML == FinalViewName) {} else {

            document.getElementById("SingleViewDATATable").innerHTML = GolChakkar;
            document.getElementById("SingleViewCHARTOnly").innerHTML = GolChakkar;

            document.getElementById("WhichPaneLoadedNow").innerHTML = FinalViewName;
            document.getElementById("WhichOnewasLoadedSetOrSetView").innerHTML = "VIEWSET";
            //var FinalToLoadNow = FinalViewName + ":View Set";
            document.getElementById("ResetAllPanes").click();
            FinallyLoadViewSetPaneFunction(FinalViewName);
        }
    }

    if (FinalViewType == "Single_Column") {

        if (document.getElementById("WhichPaneLoadedNow").innerHTML == FinalViewName) {} else {

            document.getElementById("SingleViewDATATable").innerHTML = GolChakkar;
            document.getElementById("SingleViewCHARTOnly").innerHTML = GolChakkar;

            document.getElementById("ResetAllPanes").click();
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
                    "type": "Socket-LoadSingleColumnViewONE",
                    'userId': userId,
                    'FinalViewName': FinalViewName
                },
                success: function(data) {

                },
                error: function() {
                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                },
                complete: function(xrh, status) {

                },

            });
        }

    }
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
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() {
            FunctionFooterDIV()
        }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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

function EnableDisableCurrentViewFunction(ThisID) {

    var FinalItemName = ThisID.replaceAll('_', ' ');

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("ProcessingViewsDataTable");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        FileAdminName = rows[i].getElementsByTagName("td")[0].innerHTML;
        if (FileAdminName == FinalItemName) {

            ThisCheckNow = rows[i].getElementsByTagName("td")[4].innerHTML;

            var result = ThisCheckNow.match(/Enabled/gi);
            if (result) {
                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align: center;">Disabled</div>'
                rows[i].getElementsByTagName("td")[4].innerHTML = ThisDivNow;
            }
            var result = ThisCheckNow.match(/Disabled/gi);

            if (result) {
                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #a6f988;font-weight: 600;text-align:center;">Enabled</div>'
                rows[i].getElementsByTagName("td")[4].innerHTML = ThisDivNow;
            }

        }
    }

}

function ModifyAssessmentSetNowFunction(ThisModNow) {

    document.getElementById("ModifyProcAsessmentAgentSet").style.display = "block";

    //MDF_Office_365_Assessment:NEWMDFTenant:Disabled:None:None:Do_Not_Notify:None
    var res = ThisModNow.split(":");
    var AssSetNameNow = res[0];
    var FinalAssSetNameNow = AssSetNameNow.replaceAll('_', " ");

    //AVD_Assessment_MDF:Disabled:None:None:Do_Not_Notify:Do_Not_Notify
    var ExecutionNow = res[1];
    var EnabledOrDisabled = ExecutionNow.replaceAll('_', " ");

    var ExeDayNow = res[2];
    var FinalExeDayNow = ExeDayNow.replaceAll('_', " ");

    var ExeHourNow = res[3];
    var FinalExeHourNow = ExeHourNow.replaceAll('_', " ");

    var NotConditionNow = res[4];
    var FinalNotConditionNow = NotConditionNow.replaceAll('_', " ");

    var EmailTempNow = res[5];
    var FinalEmailTempNow = EmailTempNow.replaceAll('_', " ");

    //var SetTypeNow = res[6];
    //var FinalSetTypeNow = SetTypeNow.replaceAll('_', " ");

    if (FinalExeDayNow == "Not Applicable") {
        document.getElementById("WhichDefOrAssSetNowMSG").style.display = "inline-block";
    } else {
        document.getElementById("WhichDefOrAssSetNowMSG").style.display = "none";
    }

    document.getElementById("ThisAssessmentSetFromGridNow").innerHTML = FinalAssSetNameNow;
    document.getElementById("ThisAssessmentSetTenNowInGrid").innerHTML = "Not Available here";

    document.getElementById("AsseProcSetModuleNotifyOrNotForProcAgent").value = EnabledOrDisabled;
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
            "type": "SocketCall-TemplatesFOuR",
            'userId': userId
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });
}

$("#ApplySetInProcAssSetButton").click(function(e) {

    var ThisSetNameNow = document.getElementById("ThisAssessmentSetFromGridNow").innerHTML;
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

        if (FileModName == ThisSetNameNow) {

            if (ThisSetFinalExecution == "Enabled") {
                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #a6f988;font-weight: 600;text-align:center;">Enabled</div>'
            }
            if (ThisSetFinalExecution == "Disabled") {
                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align: center;">Disabled</div>'
            }

            rows[i].getElementsByTagName("td")[2].innerHTML = ThisDivNow;
            rows[i].getElementsByTagName("td")[3].innerHTML = ThisExeDay;
            rows[i].getElementsByTagName("td")[4].innerHTML = ThisExeHour;
            rows[i].getElementsByTagName("td")[5].innerHTML = ThisExeCondition;
            rows[i].getElementsByTagName("td")[6].innerHTML = ThisEmailTemplate;

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
    document.getElementById("ActionDoWhat").innerHTML = "SAVESETTINGSNOWASSSETFORSet";

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
var myList = document.getElementsByTagName("input");
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
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "Socket-Call-DCModulesSIX",
            'userId': FinalUserNameNow
        },
        success: function(data) {


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

}

function ViewSetViewTypeChartFunction() {

    var tablec, rowsc, ic, x, y, shouldSwitch;
    tablec = document.getElementById("ViewsIDTableNow");
    rowsc = tablec.rows;
    for (ic = 1; ic < (rowsc.length); ic++) {

        ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;

        var ThisArrData = ThisNameNowRR;
        if (ThisArrData == null || ThisArrData == "") {} else {

            var res = ThisArrData.split(",");
            var nCheckWhatNow = res[0];

            if (nCheckWhatNow == "EXECUTION") {
                // that means it is a view storaged in local storage

                var nViewModuleNow = res[1];
                var nViewTenName = res[2];
                var nVChartIDDiv = res[3];
                var nVTableIDDiv = res[4];
                var nVTableIDDivFinal = nVTableIDDiv.replace(/[\r\n]+/gm, "");
                var nLastRefID = res[5];
                var nStartColID = res[6];
                var nEndColID = res[7];
                var nChartTypeID = res[8];
                var nDataTypeID = res[9];

                var ViewFinalModNameNow = nViewModuleNow;
                var ViewFinalTenNameNow = nViewTenName;
                var ViewFinalTableDivIDNow = nVTableIDDivFinal;
                var ViewFinalChartDivIDNow = nVChartIDDiv;
                var ViewFinalLastRefID = nLastRefID;

                var ValCheck = document.getElementById(nDataTypeID).value;

                if (ValCheck == "Data") {

                    document.getElementById(ViewFinalTableDivIDNow).style.display = "block";
                    document.getElementById(ViewFinalChartDivIDNow).style.display = "none";
                }

                if (ValCheck == "Chart") {

                    document.getElementById(ViewFinalTableDivIDNow).style.display = "none";
                    document.getElementById(ViewFinalChartDivIDNow).style.display = "block";

                    var ColStartNumner = document.getElementById(nStartColID).value;
                    var ColEndNumner = document.getElementById(nEndColID).value;
                    var ChartTypeNow = document.getElementById(nChartTypeID).value;

                    var FinalModAndTenName = nViewModuleNow + " [ " + nViewTenName + " ]";

                    if (ChartTypeNow == "stacked") {
                        try {
                            Highcharts.chart(ViewFinalChartDivIDNow, {
                                data: {
                                    table: ViewFinalTableDivIDNow,
                                    startColumn: ColStartNumner
                                        //endColumn: ColEndNumner
                                },
                                chart: {
                                    type: 'column'
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'bottom',
                                    verticalAlign: 'middle',
                                    itemMarginTop: 10,
                                    itemMarginBottom: 10
                                },
                                title: {
                                    text: ''
                                },
                                /*xAxis: {
                                    categories: allcat
                                },*/

                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: 'Items'
                                    },
                                    stackLabels: {
                                        enabled: true,
                                        style: {
                                            fontWeight: '400',
                                            color: ( // theme
                                                Highcharts.defaultOptions.title.style &&
                                                Highcharts.defaultOptions.title.style.color
                                            ) || 'gray',
                                            fontFamily: "Roboto",
                                            fontSize: '10px'
                                        }
                                    }

                                },
                                legend: {
                                    enabled: false,
                                    align: 'right',
                                    x: 30,
                                    verticalAlign: 'middle',
                                    y: 100,
                                    floating: true,
                                    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                    borderColor: 'white',
                                    borderWidth: 0,
                                    shadow: false
                                },
                                tooltip: {
                                    headerFormat: '<b>{point.x}</b><br/>',
                                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                },
                                plotOptions: {
                                    column: {
                                        stacking: 'normal',
                                        dataLabels: {
                                            enabled: true
                                        }
                                    }
                                },
                                /*series: sdata*/

                            });
                        } catch (e) {

                        }
                    } else {
                        try {
                            Highcharts.chart(ViewFinalChartDivIDNow, {
                                data: {
                                    table: ViewFinalTableDivIDNow,
                                    startColumn: ColStartNumner,
                                    endColumn: ColEndNumner
                                },
                                chart: {
                                    type: ChartTypeNow
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'bottom',
                                    verticalAlign: 'middle',
                                    itemMarginTop: 10,
                                    itemMarginBottom: 10
                                },
                                title: {
                                    text: ''
                                },
                                /*xAxis: {
                                    categories: allcat
                                },*/
                                xAxis: {
                                    labels: {
                                        style: {
                                            color: '#827a7a',
                                            fontSize: '10px',
                                            fontFamily: 'Roboto',
                                            fontWeight: '400'
                                        }
                                    }
                                },
                                yAxis: {
                                    labels: {
                                        style: {
                                            color: '#827a7a',
                                            fontSize: '10px',
                                            fontFamily: 'Roboto',
                                            fontWeight: '400'
                                        }
                                    }
                                },
                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: 'Items'
                                    },
                                    stackLabels: {
                                        enabled: true,
                                        style: {
                                            fontWeight: '400',
                                            fontSize: "10px",
                                            fontFamily: "Roboto",
                                            color: '#827a7a'
                                        }
                                    }
                                },
                                legend: {
                                    enabled: false,
                                    align: 'right',
                                    x: 30,
                                    verticalAlign: 'middle',
                                    y: 100,
                                    floating: true,
                                    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                    borderColor: 'white',
                                    borderWidth: 0,
                                    shadow: false
                                },
                                tooltip: {
                                    headerFormat: '<b>{point.x}</b><br/>',
                                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                },
                                plotOptions: {
                                    column: {
                                        stacking: 'normal',
                                        dataLabels: {
                                            enabled: true
                                        }
                                    }
                                },
                                /*series: sdata*/

                            });
                        } catch (e) {

                        }

                    }

                }
            }
        }
    }

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

        if (ChartTypeNow == "stacked") {
            try {
                Highcharts.chart("SingleViewCHARTOnly", {
                    data: {
                        table: 'SingleViewDATATable',
                        startColumn: ColStartNumner
                            //endColumn: ColEndNumner
                    },
                    chart: {
                        type: 'column'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'bottom',
                        verticalAlign: 'middle',
                        itemMarginTop: 10,
                        itemMarginBottom: 10
                    },
                    title: {
                        text: ''
                    },
                    /*xAxis: {
                        categories: allcat
                    },*/

                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Items'
                        },
                        stackLabels: {
                            enabled: true,
                            style: {
                                fontWeight: '400',
                                fontFamily: "Roboto",
                                fontSize: '10px',
                                color: ( // theme
                                    Highcharts.defaultOptions.title.style &&
                                    Highcharts.defaultOptions.title.style.color
                                ) || 'gray'
                            }
                        }
                    },
                    xAxis: {
                        labels: {
                            style: {
                                color: '#827a7a',
                                fontSize: '10px',
                                fontFamily: 'Roboto',
                                fontWeight: '400'
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                        align: 'right',
                        x: 30,
                        verticalAlign: 'middle',
                        y: 100,
                        floating: true,
                        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                        borderColor: 'white',
                        borderWidth: 0,
                        shadow: false
                    },
                    tooltip: {
                        headerFormat: '<b>{point.x}</b><br/>',
                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    /*series: sdata*/

                });
            } catch (e) {

            }
        } else {
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
                    legend: {
                        layout: 'vertical',
                        align: 'bottom',
                        verticalAlign: 'middle',
                        itemMarginTop: 10,
                        itemMarginBottom: 10
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        labels: {
                            style: {
                                color: '#827a7a',
                                fontSize: '10px',
                                fontFamily: 'Roboto',
                                fontWeight: '400'
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Items'
                        },
                        stackLabels: {
                            enabled: true,
                            style: {
                                fontWeight: '400',
                                fontFamily: "Roboto",
                                fontSize: '10px',
                                color: ( // theme
                                    Highcharts.defaultOptions.title.style &&
                                    Highcharts.defaultOptions.title.style.color
                                ) || 'gray'
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                        align: 'right',
                        x: 30,
                        verticalAlign: 'middle',
                        y: 100,
                        floating: true,
                        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                        borderColor: 'white',
                        fontSize: "10px",
                        borderWidth: 0,
                        shadow: false
                    },
                    tooltip: {
                        headerFormat: '<b>{point.x}</b><br/>',
                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    /*series: sdata*/

                });
            } catch (e) {

            }

        }


    }


}


function CollectViewSetDataFileNow() {

    var r = 0;
    var tablec, rowsc, ic, x, y, shouldSwitch;
    tablec = document.getElementById("ViewsIDTableNow");
    rowsc = tablec.rows;
    for (ic = 1; ic < (rowsc.length); ic++) {

        ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;

        var ThisArrData = ThisNameNowRR;
        if (ThisArrData == null || ThisArrData == "") {} else {

            var res = ThisArrData.split(",");
            var nCheckWhatNow = res[0];

            if (nCheckWhatNow == "EXECUTION") {
                // that means it is a view storaged in local storage

                var nViewModuleNow = res[1];
                var nViewTenName = res[2];
                var nVChartIDDiv = res[3];
                var nVTableIDDiv = res[4];
                var nVTableIDDivFinal = nVTableIDDiv.replace(/[\r\n]+/gm, "");
                var nLastRefID = res[5];

                var ViewFinalModNameNow = nViewModuleNow;
                var ViewFinalTenNameNow = nViewTenName;
                var ViewFinalTableDivIDNow = nVTableIDDivFinal;
                var ViewFinalChartDivIDNow = nVChartIDDiv;
                var ViewFinalLastRefID = nLastRefID;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];

                var FinalViewName = document.getElementById("WhichPaneLoadedNow").innerHTML;

                // HERE you need to collect Data file for view module
                var TRPKey = document.getElementById("TRPKeyN").value;
                $.ajax({
                    url: '/CallGetViewSetDataFile', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: false,
                    timeout: 5000,
                    data: {
                        'TRPKey': TRPKey,
                        "type": "SocketCall-LoadViewSetTHREE",
                        'userId': userId,
                        'FinalModName': ViewFinalModNameNow,
                        'FinalViewTenant': ViewFinalTenNameNow,
                        'FinalViewName': FinalViewName,
                        'DataUserID': FinalUserNameNow,
                        'ViewFinalTableDivIDNow': ViewFinalTableDivIDNow,
                        'ViewFinalChartDivIDNow': ViewFinalChartDivIDNow,
                        'ViewFinalLastRefID': ViewFinalLastRefID,
                        'ThisR': r

                    },
                    success: function(data) {

                        if (data.message) {

                            if (data.message == "FileNotFound") {
                                // Refresh View to collect data...

                                var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 211px;height: 45px;background: #f7f7f7;padding: 2px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 6px; font-weight: 600; display: block; margin-right: -3px;margin-left: 10px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">View has not been executed.</p></div>'
                                document.getElementById(ViewFinalChartDivIDNow).innerHTML = ViewNoDataDiv;
                                document.getElementById(ViewFinalTableDivIDNow).innerHTML = ViewNoDataDiv;

                                document.getElementById(ViewFinalChartDivIDNow).style.display = "none";
                                document.getElementById(ViewFinalTableDivIDNow).style.display = "block";

                                ViewSetViewTypeChartFunction();

                            } else {

                                var datatable = document.createElement("table");
                                var FinalTableID = 'LoadedViewDataTableNow' + r.toString();
                                datatable.id = FinalTableID
                                datatable.setAttribute('class', 'AUTOTableForViews');

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
                                        document.getElementById(ViewFinalLastRefID).innerHTML = "Last Updated: " + LastRefDateNow;
                                    } else {

                                        ++TotRowsNow;
                                        var row = datatable.insertRow(-1);

                                        for (var j = 0; j < cells.length; j++) {
                                            var CheckIfBlank = cells[0]
                                            if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                                var SItem = cells[j].replace(/[\r\n]+/gm, "");
                                                var FinalToAppend = SItem;

                                                if (SItem == " High") {
                                                    FinalToAppend = '<div class="AllViewHighTEXTClass"><i class="fa fa-times-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>High</div>'
                                                }
                                                if (SItem == " Passed") {
                                                    FinalToAppend = '<div class="AllViewPassedTEXTClass"><i class="fa fa-check-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>Passed</div>'
                                                }
                                                if (SItem == " Medium") {
                                                    FinalToAppend = '<div class="AllViewMediumTEXTClass"><i class="fa fa-times-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>Medium</div>'
                                                }
                                                if (SItem == " Low") {
                                                    FinalToAppend = '<div class="AllViewLowTEXTClass"><i class="fa fa-times-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>Low</div>'
                                                }
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = FinalToAppend;

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

                                var dtable = document.getElementById(ViewFinalTableDivIDNow);
                                dtable.innerHTML = "";
                                dtable.appendChild(datatable);

                                var TotNow = 0;
                                var tablecRR, rowscRR, icR, x, y, shouldSwitch;
                                tablecRR = document.getElementById(FinalTableID);
                                if (tablecRR == null) {} else {
                                    rowscRR = tablecRR.rows;
                                    for (icR = 1; icR < (rowscRR.length); icR++) {
                                        ++TotNow;
                                    }
                                }

                                if (TotNow == 0) {
                                    var InsertC = '<div style="margin-left: auto;margin-right: auto;width: 211px;height: 45px;background: #f7f7f7;padding: 2px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 6px; font-weight: 600; display: block; margin-right: -3px;margin-left: 10px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">View has not been executed.</p></div>'
                                    document.getElementById(ViewFinalTableDivIDNow).innerHTML = InsertC;
                                }

                                ViewSetViewTypeChartFunction();

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

                // Ensure Table number is incremented
                ++r;
            }
        }
    }

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
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SocketCall-LoadSingleViewDATA",
            'userId': userId,
            'FinalModName': FinalModName,
            'FinalViewTenant': FinalViewTenant,
            'FinalViewName': FinalViewName,
            'UserForData': FinalUserNameNow
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        },
        complete: function(xrh, status) {

        }
    });

}

$("#SaveSingleViewNowForAll").click(function(e) {

    document.getElementById("FootMessageID").innerHTML = "Saving View Settings...Please wait";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
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
                            var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + n.toString();
                            var MAINPanelTitleCheckBox = SPViewName + ":TITLE_CHECKBOX" + ":" + n.toString();

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
                            var TitleCheckBox = document.getElementById(MAINPanelTitleCheckBox).checked;

                            var result = ASetNameNow + "," + AViewTypeNow + "," + AViewModule + "," + AViewTenant + "," + AViewDataType + "," + AStartColNumber + "," + AEndColNumber + "," + AChartType + "," + ASetWidth + "," + ASetHeight + "," + TitleCheckBox + "\r\n";
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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

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

    var IsDetChecked = document.getElementById("ShowDetLogCBox").checked;
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
            'FinalViewTenant': FinalViewTenant,
            'type': "SocketCall-LoadLogForSingleColumnForLoading",
            'userId': userId
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
            document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
        }
    });


});

$("#ShowLogsForViewSetNow").click(function(e) {

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

                var KeepAddingOrNot = "Yes";
                if (data.message == "No Logs Found") {
                    KeepAddingOrNot = "No"
                }
                var datatable = document.createElement("table");
                datatable.id = 'ViewSetLogsDataTableForSet'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                //let res = data.message.replaceAll('"', "");
                var rows = data.message.split("\n");

                var NowLn = (rows.length - 1);
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

                    var SItem = rows[i].replace(/[\r\n]+/gm, "");
                    var result = SItem.match(/Processing View:/gi);
                    if (result) {
                        cell.style.background = "#bce0ff";
                        cell.style.color = "black";
                    }

                    var SItem = rows[i].replace(/[\r\n]+/gm, "");
                    var result = SItem.match(/Checking:/gi);
                    if (result) {
                        cell.style.background = "#bce0ff";
                        cell.style.color = "black";
                    }

                    var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                    if (result) {
                        cell.style.background = "rgb(188, 255, 192)";
                        cell.style.color = "black";
                    }

                    var result = SItem.match(/END: MODULE CODE/gi);
                    if (result) {
                        cell.style.background = "rgb(255, 213, 188)";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/START: MODULE CODE/gi);
                    if (result) {
                        cell.style.background = "rgb(255, 213, 188)";
                        cell.style.color = "black";
                    }

                    var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                    if (result) {
                        cell.style.background = "rgb(255, 210, 188)";
                        cell.style.color = "black";
                    }

                    var result = SItem.match(/Executing Module:/gi);
                    if (result) {
                        cell.style.background = "rgb(255, 210, 188)";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/VIEW SET:DISABLED/gi);
                    if (result) {
                        cell.style.background = "rgb(247, 131, 105)";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/VIEW SET:ENABLED/gi);
                    if (result) {
                        cell.style.background = "rgb(157, 244, 132)";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/Error Occured/gi);
                    if (result) {
                        cell.style.background = "rgb(247, 60, 17)";
                        cell.style.color = "white";
                    }
                    var result = SItem.match(/Loading SUCCESS:/gi);
                    if (result) {
                        cell.style.background = "#09d009";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/Failed Loading:/gi);
                    if (result) {
                        cell.style.background = "#fd9369";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/Processing Connection String:/gi);
                    if (result) {
                        cell.style.background = "black";
                        cell.style.color = "white";
                    }
                    var result = SItem.match(/Connection Success/gi);
                    if (result) {
                        cell.style.background = "#09d009";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/Failed to Connect/gi);
                    if (result) {
                        cell.style.background = "#fd9369";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/Error:/gi);
                    if (result) {
                        cell.style.background = "#fd9369";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/Connection String:/gi);
                    if (result) {
                        cell.style.background = "#fde4c8";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/ModulesToLoad:/gi);
                    if (result) {
                        cell.style.background = "#76f7d8";
                        cell.style.color = "black";
                    }
                    var result = SItem.match(/ASSESSMENT SET:/gi);
                    if (result) {
                        cell.style.background = "rgb(17, 118, 249)";
                        cell.style.color = "white";
                    }
                    var result = SItem.match(/EXECUTING MODULE:/gi);
                    if (result) {
                        cell.style.background = "rgb(2, 69, 155)";
                        cell.style.color = "black";
                    }


                }

                var dtable = document.getElementById("ShowViewSetLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                //var elem = document.getElementById("ViewSetLogsDataTableForSet");
                //window.scrollTo(0, elem.offsetHeight);

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

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
    document.getElementById("IntervalTriggerOPT").innerHTML = "SINGLE_COL";

}

function UpdateViewTableInLeftFunction() {

    var FinalViewName = "NONE";
    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/CallLoadCDPViews', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "Socket-LoadSingleColumnViewTHREE",
            'userId': userId,
            'FinalViewName': FinalViewName
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });





}

function UpdateModulesSetTableInLeftFunction() {

    var TotDefSets = 0;
    var TotAssSets = 0;

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

            if (data.message == "FileNotFound") {
                var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Sets Available. Please create Sets...<span style="color: white;">When you add a Tenant an Office 365 Asessment Set will be added.</span></p>'
                document.getElementById("AllModulesSetPaneAssessment").innerHTML = RCC;
                var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Default Sets Available. Please create Default Sets...</p>'
                document.getElementById("AllModulesSetPaneDefault").innerHTML = RCC;

            } else {

                var datatable = document.createElement("table");
                datatable.id = 'ModulesSetTableInFront'
                datatable.setAttribute('class', 'LeftPaneModulesViewsTableAuto');

                var datatableA = document.createElement("table");
                datatableA.id = 'AssessmentModulesSetTableInFront'
                datatableA.setAttribute('class', 'LeftPaneModulesViewsTableAuto');

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
                            ++TotDefSets;
                        }
                        if (CheckSRow == "Assessment Set") {
                            var row = datatableA.insertRow(-1);
                            ++TotAssSets;
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

                            var ThisModNameNow = cells[0];
                            var AddOrNot = "Yes";

                            var tablec, rowsc, ic, x, y, shouldSwitch;
                            tablec = document.getElementById("RBACDataTableID");
                            if (tablec == null) {} else {
                                rowsc = tablec.rows;
                                for (ic = 1; ic < (rowsc.length); ic++) {

                                    var ThisDataNow = rowsc[ic].getElementsByTagName("td")[0].innerHTML;
                                    if (ThisDataNow == "" || ThisDataNow == null) {} else {

                                        var resn = ThisDataNow.split(",");
                                        var EntryType = resn[1];
                                        var EntryName = resn[2];
                                        var EntryStatus = resn[3];

                                        if (EntryType == "Assessment Set" || EntryType == "Default Set") {
                                            if (EntryName == ThisModNameNow) {
                                                if (EntryStatus == "Unavailable") {
                                                    AddOrNot = "No";
                                                } else {
                                                    AddOrNot = "Yes";
                                                }
                                            }
                                        }
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
                                cell.style.color = "rgb(193, 192, 192)";
                                cell.style.border = "none";
                                cell.style.paddingBottom = "0px";
                                cell.style.fontSize = "11px";
                                cell.style.fontFamily = "Roboto";
                                cell.style.fontWeight = "500";
                                cell.style.lineHeight = "19px";
                                cell.style.background = "#2a394f";
                                cell.style.width = "234px";
                                cell.style.maxWidth = "234px";

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

                if (TotDefSets == 0) {
                    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Default Sets Available. Please create Default Sets...</p>'
                    document.getElementById("AllModulesSetPaneDefault").innerHTML = RCC;
                }
                if (TotAssSets == 0) {
                    var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Sets Available. Please create Sets...<span style="color: white;">When you add a Tenant an Office 365 Asessment Set will be added.</span></p>'
                    document.getElementById("AllModulesSetPaneAssessment").innerHTML = RCC;
                }

            }

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
            "type": "SocketCall-LoadTenantsONE",
            'userId': userId
        },
        success: function(data) {

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

        var xItem = rows[i].getElementsByTagName("td")[1].innerHTML;
        if (xItem == FinalItemName) {

            var CurrentValue = rows[i].getElementsByTagName("td")[2].innerHTML;
            var SItem = CurrentValue.replace(/[\r\n]+/gm, "");
            if (SItem == "Available") {
                rows[i].getElementsByTagName("td")[2].innerHTML = "Unavailable"
                rows[i].getElementsByTagName("td")[2].style.color = "#ff6000";
            }
            if (SItem == "Unavailable") {

                rows[i].getElementsByTagName("td")[2].innerHTML = "Available"
                rows[i].getElementsByTagName("td")[2].style.color = "green";
            }

        }

    }




}

function CallUpdateChartFunctionNowView() {
    document.getElementById("UpdateChartNowForSingleView").click();


}


$("#ShowViewProcessingLogButton").click(function(e) {

    document.getElementById("ShowingWhichVLogNow").style.display = "block";
    document.getElementById("ShowingWhichVLogNow").innerHTML = "Showing Log for Single Column Processing";
    var CheckWhichLog = "Showing Log for Single Column Processing";

    document.getElementById("ThisIsTheGridForViewSet").style.display = "none";
    document.getElementById("DIVForAllLogsOnlyForViews").style.display = "block";
    document.getElementById("ShowViewProcLogDiv").style.display = "block";
    document.getElementById("ViewScriptLogDiv").style.display = "block";

    document.getElementById("ShowViewProcLogDiv").innerHTML = GolChakkar;
    document.getElementById("ViewScriptLogDiv").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallGetViewProcLogFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog
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

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Executing Module:/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Loading SUCCESS:/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed Loading:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing Connection String:/gi);
                        if (result) {
                            cell.style.background = "black";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Connection Success/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed to Connect/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Connection String:/gi);
                        if (result) {
                            cell.style.background = "#fde4c8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ModulesToLoad:/gi);
                        if (result) {
                            cell.style.background = "#76f7d8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:/gi);
                        if (result) {
                            cell.style.background = "rgb(17, 118, 249)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/EXECUTING MODULE:/gi);
                        if (result) {
                            cell.style.background = "rgb(2, 69, 155)";
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

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallGetViewScriptLog', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog,
            'ThisLUser': FinalUserNameNow
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


$("#ShowViewSetsProcessingLogButton").click(function(e) {

    document.getElementById("ShowingWhichVLogNow").style.display = "block";
    document.getElementById("ShowingWhichVLogNow").innerHTML = "Showing Log for View Sets Processing";
    var CheckWhichLog = "Showing Log for View Sets Processing";

    document.getElementById("ThisIsTheGridForViewSet").style.display = "none";
    document.getElementById("DIVForAllLogsOnlyForViews").style.display = "block";
    document.getElementById("ShowViewProcLogDiv").style.display = "block";
    document.getElementById("ViewScriptLogDiv").style.display = "block";

    document.getElementById("ShowViewProcLogDiv").innerHTML = GolChakkar;
    document.getElementById("ViewScriptLogDiv").innerHTML = GolChakkar;

    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallGetViewProcLogFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog
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

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Executing Module:/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Loading SUCCESS:/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed Loading:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing Connection String:/gi);
                        if (result) {
                            cell.style.background = "black";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Connection Success/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed to Connect/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Connection String:/gi);
                        if (result) {
                            cell.style.background = "#fde4c8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ModulesToLoad:/gi);
                        if (result) {
                            cell.style.background = "#76f7d8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:/gi);
                        if (result) {
                            cell.style.background = "rgb(17, 118, 249)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/EXECUTING MODULE:/gi);
                        if (result) {
                            cell.style.background = "rgb(2, 69, 155)";
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

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/CallGetViewScriptLog', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'CheckWhichLog': CheckWhichLog,
            'ThisLUser': FinalUserNameNow
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
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var WhichOneOnly = "VIEWS";

    e.preventDefault();
    $.ajax({
        url: '/CallTriggerViewBackRef', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'WhichOneOnly': WhichOneOnly
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }
    });

});

$("#TriggerBackgroundRefViewsSets").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    document.getElementById("FootMessageID").innerHTML = "Background Refresh for View Sets Triggered...";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var WhichOneOnly = "VIEWSSET";

    e.preventDefault();
    $.ajax({
        url: '/CallTriggerViewBackRef', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'WhichOneOnly': WhichOneOnly
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }
    });

});

$("#TriggerSetsBackgroundRefViews").click(function(e) {

    var TRPKey = document.getElementById("TRPKeyN").value;

    document.getElementById("FootMessageID").innerHTML = "Background Refresh for Assessment Sets Triggered...";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var WhichOneOnly = "ASSESSMENTSET";

    e.preventDefault();
    $.ajax({
        url: '/CallTriggerAssessmentSetsBackRef', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'WhichOneOnly': WhichOneOnly
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }
    });

});


function AddEventsAndDataToViewSetFunction(ThisModToRemove) {

    var FinalViewName = ThisModToRemove;

    //VIEWDetailsArray = "";

    $.ajax({
        url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SocketCall-LoadViewSetTWO",
            'userId': userId,
            'FinalViewName': FinalViewName
        },
        success: function(data) {

            if (data.message) {

                var datatableVIEW = document.createElement("table");
                datatableVIEW.id = 'ViewsIDTableNow'
                datatableVIEW.setAttribute('class', 'SummaryTableClassforFIXEDTable');

                var datatable = "";

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var nID = 0;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisViewName = cells[0];

                    if (ThisViewName == "" || ThisViewName == null) {} else {

                        if (ThisViewName == FinalViewName) {

                            var row = datatableVIEW.insertRow(-1);

                            var ViewModName = cells[2];
                            var ViewTenName = cells[3];
                            var ViewDataType = cells[4];
                            var ViewStartCol = cells[5];
                            var ViewEndCol = cells[6];
                            var ViewChartType = cells[7];
                            var SetWidthNow = cells[8];
                            var SetHeightNow = cells[9];
                            var TitleCheckBox = cells[10];

                            var SItem = ViewDataType.replace(/[\r\n]+/gm, "");
                            var FinalChartType = ViewChartType.replace(/[\r\n]+/gm, "");
                            var ModuleAndTen = ViewModName + " [ " + ViewTenName + " ]";

                            var SPViewName = FinalViewName.replaceAll(' ', "_");

                            var VLastRefID = SPViewName + ":LASTREF" + ":" + nID.toString();
                            var VChartDataTypeID = SPViewName + ":DATATYPE" + ":" + nID.toString();
                            var VChartTypeID = SPViewName + ":CHARTTYPE" + ":" + nID.toString();
                            var VStartColID = SPViewName + ":STARTCOLID" + ":" + nID.toString();
                            var VEndColID = SPViewName + ":ENDCOLID" + ":" + nID.toString();
                            // buttons here
                            var VChartUpdateID = SPViewName + ":CHARTUPDATE" + ":" + nID.toString();
                            var VDataRefButtonID = SPViewName + ":DATAREFRESH" + ":" + nID.toString();
                            var VChartDivID = SPViewName + ":CHARTDIV" + ":" + nID.toString();
                            var VChartTopDivID = SPViewName + ":CHARTTOPDIV" + ":" + nID.toString();
                            var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + nID.toString();
                            var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + nID.toString();
                            var ViewWidthNow = SPViewName + ":WIDTH" + ":" + nID.toString();
                            var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + nID.toString();
                            var ViewMenuID = SPViewName + ":VIEWMENU" + ":" + nID.toString();
                            var ViewPanelID = SPViewName + ":VPANEL" + ":" + nID.toString();
                            var MAINPanelTitle = SPViewName + ":PANELTITLE" + ":" + nID.toString();
                            var MAINPanelTitleCheckBox = SPViewName + ":TITLE_CHECKBOX" + ":" + nID.toString();
                            var MAINPanelUPDownID = SPViewName + ":MAINUPDOWN" + ":" + nID.toString();
                            var MAINSetExpandID = SPViewName + ":MAINEXPAND" + ":" + nID.toString();
                            var MAINMenuPanelCloseID = SPViewName + ":CLOSEPANEL" + ":" + nID.toString();
                            var LogButtonID = SPViewName + ":LOGBUTTON" + ":" + nID.toString();
                            var LogButtonDIVID = SPViewName + ":LOGBUTTONDIV" + ":" + nID.toString();
                            var ExcelIconButtonID = SPViewName + ":EXCELBUTTON" + ":" + nID.toString();
                            var SearchDivShorOrNotID = SPViewName + ":SEARCHDIV" + ":" + nID.toString();
                            var SearchInputBoxID = SPViewName + ":SEARCHBOX" + ":" + nID.toString();

                            result = "VIEWNOW:FinalViewModName" + "," + ViewModName + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:FinalViewTenName" + "," + ViewTenName + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:ViewPaneID" + "," + ViewPanelID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:ViewMenuID" + "," + ViewMenuID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:ViewSETNameDivID" + "," + ViewSETNameDivID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:ViewWidthNow" + "," + ViewWidthNow + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:ViewHeightNow" + "," + ViewHeightNow + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VDataTableDivID" + "," + VDataTableDivID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VChartTopDivID" + "," + VChartTopDivID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VChartDivID" + "," + VChartDivID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VDataRefButtonID" + "," + VDataRefButtonID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VChartUpdateID" + "," + VChartUpdateID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VEndColID" + "," + VEndColID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VStartColID" + "," + VStartColID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VChartTypeID" + "," + VChartTypeID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VChartDataTypeID" + "," + VChartDataTypeID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var row = datatableVIEW.insertRow(-1);
                            result = "VIEWNOW:VLastRefID" + "," + VLastRefID + "\r\n";
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            var StrNew = VStartColID + "," + VEndColID + "," + VChartTypeID + "," + VChartDataTypeID + "," + VChartUpdateID + "," + VChartTypeID + "," + ViewSETNameDivID + "," + MAINPanelTitle + "," + MAINPanelTitleCheckBox + "," + MAINPanelUPDownID + "," + MAINSetExpandID + "," + LogButtonID + "," + LogButtonDIVID + "," + ExcelIconButtonID + "," + SearchDivShorOrNotID + "," + SearchInputBoxID;
                            var row = datatableVIEW.insertRow(-1);
                            result = "EXECUTION," + ViewModName + "," + ViewTenName + "," + VChartDivID + "," + VDataTableDivID + "," + VLastRefID + "," + StrNew;
                            var cell = row.insertCell(-1);
                            cell.innerHTML = result;

                            //console.log(VIEWDetailsArray);

                            //alert(VLastRefID);

                            document.getElementById(VLastRefID).innerHTML = "Not Updated";
                            document.getElementById(VChartDataTypeID).value = ViewDataType;
                            document.getElementById(VChartTypeID).value = ViewChartType;
                            document.getElementById(VStartColID).value = ViewStartCol;
                            document.getElementById(VEndColID).value = ViewEndCol;

                            if (TitleCheckBox == "false") {
                                document.getElementById(MAINPanelTitleCheckBox).checked = false;
                            }
                            if (TitleCheckBox == "true") {
                                document.getElementById(MAINPanelTitleCheckBox).checked = true;
                            }

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

                            document.getElementById(SearchDivShorOrNotID).addEventListener("keyup", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                //var ThisEventID = e.target.getAttribute('id');                               
                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                var SearchInputBoxID = SPViewName + ":SEARCHBOX" + ":" + nNumber;
                                var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + nNumber;





                            }, false);;

                            document.getElementById(ExcelIconButtonID).addEventListener("click", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                //var ThisEventID = e.target.getAttribute('id');                               
                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                var TableIDOfView = "LoadedViewDataTableNow" + nNumber;
                                console.log(TableIDOfView);

                                var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
                                var textRange;
                                var j = 0;
                                tab = document.getElementById(TableIDOfView); // id of table

                                for (j = 0; j < tab.rows.length; j++) {
                                    tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
                                    //tab_text=tab_text+"</tr>";
                                }

                                tab_text = tab_text + "</table>";
                                //tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
                                //tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
                                //tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

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



                            }, false);;

                            document.getElementById(LogButtonID).addEventListener("click", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                console.log(ThisEventID);

                                //var ThisEventID = e.target.getAttribute('id');                               
                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                var ViewPanelID = SPViewName + ":VPANEL" + ":" + nNumber;

                                var LogButtonDIVID = SPViewName + ":LOGBUTTONDIV" + ":" + nNumber;
                                var VChartDivID = SPViewName + ":CHARTDIV" + ":" + nNumber;
                                var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + nNumber;

                                if (document.getElementById(LogButtonDIVID).style.display == "block") {

                                    document.getElementById(LogButtonDIVID).style.display = "none";

                                } else {

                                    document.getElementById(LogButtonDIVID).style.display = "block";
                                    var FinalViewModuleName = "";
                                    var FinalViewTenantName = "";

                                    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                                    var res = ThisLUserNow.split("@");
                                    var FinalUserNameNow = res[0];

                                    var tablec, rowsc, ic, x, y, shouldSwitch;
                                    tablec = document.getElementById("ViewsIDTableNow");
                                    rowsc = tablec.rows;
                                    for (ic = 1; ic < (rowsc.length); ic++) {

                                        ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;
                                        var ThisArrData = ThisNameNowRR;
                                        if (ThisArrData == null || ThisArrData == "") {} else {

                                            var res = ThisArrData.split(",");
                                            var nCheckWhatNow = res[0];

                                            if (nCheckWhatNow == "EXECUTION") {
                                                // that means it is a view storaged in local storage

                                                var nViewModuleNow = res[1];
                                                var nViewTenName = res[2];
                                                var nThisButtonID = res[17];
                                                console.log(nThisButtonID);

                                                if (nThisButtonID == ThisEventID) {
                                                    FinalViewModuleName = nViewModuleNow;
                                                    FinalViewTenantName = nViewTenName;
                                                }
                                            }
                                        }

                                    }

                                    // Here now fetch log file:

                                    $.ajax({
                                        url: '/CallOnlyGetModuleLogFile', // This tells server which Route to use OKAYYYY
                                        type: 'POST',
                                        async: false,
                                        timeout: 50000,
                                        data: {
                                            'TRPKey': TRPKey,
                                            'ViewName': SPViewName,
                                            'FinalModName': FinalViewModuleName,
                                            'ThisLUser': FinalUserNameNow,
                                            'FinalViewTenant': FinalViewTenantName
                                        },
                                        success: function(data) {

                                            if (data.message) {

                                                var datatable = document.createElement("table");
                                                datatable.id = 'ViewSetLogsDataTableForSetForInsideView'
                                                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                                                let res = data.message.replaceAll('"', "");
                                                var rows = res.split("\n");

                                                for (var i = 0; i < rows.length; i++) {
                                                    var cells = rows[i].split(",");

                                                    var CheckFRow = cells[0];
                                                    if (CheckFRow == "VIEWEXECUTED") {


                                                    } else {

                                                        var row = datatable.insertRow(-1);
                                                        var cell = row.insertCell(-1);
                                                        cell.innerHTML = rows[i];

                                                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                                                        var result = SItem.match(/Processing View:/gi);
                                                        if (result) {
                                                            cell.style.background = "#bce0ff";
                                                            cell.style.color = "black";
                                                        }

                                                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                                                        var result = SItem.match(/Processing View:/gi);
                                                        if (result) {
                                                            cell.style.background = "#bce0ff";
                                                            cell.style.color = "black";
                                                        }

                                                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                                                        var result = SItem.match(/Checking:/gi);
                                                        if (result) {
                                                            cell.style.background = "#bce0ff";
                                                            cell.style.color = "black";
                                                        }

                                                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(188, 255, 192)";
                                                            cell.style.color = "black";
                                                        }

                                                        var result = SItem.match(/END: MODULE CODE/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(255, 213, 188)";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/START: MODULE CODE/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(255, 213, 188)";
                                                            cell.style.color = "black";
                                                        }

                                                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(255, 210, 188)";
                                                            cell.style.color = "black";
                                                        }

                                                        var result = SItem.match(/Executing Module:/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(255, 210, 188)";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/VIEW SET:DISABLED/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(247, 131, 105)";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/VIEW SET:ENABLED/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(157, 244, 132)";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/Error Occured/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(247, 60, 17)";
                                                            cell.style.color = "white";
                                                        }
                                                        var result = SItem.match(/Loading SUCCESS:/gi);
                                                        if (result) {
                                                            cell.style.background = "#09d009";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/Failed Loading:/gi);
                                                        if (result) {
                                                            cell.style.background = "#fd9369";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/Processing Connection String:/gi);
                                                        if (result) {
                                                            cell.style.background = "black";
                                                            cell.style.color = "white";
                                                        }
                                                        var result = SItem.match(/Connection Success/gi);
                                                        if (result) {
                                                            cell.style.background = "#09d009";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/Failed to Connect/gi);
                                                        if (result) {
                                                            cell.style.background = "#fd9369";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/Error:/gi);
                                                        if (result) {
                                                            cell.style.background = "#fd9369";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/Connection String:/gi);
                                                        if (result) {
                                                            cell.style.background = "#fde4c8";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/ModulesToLoad:/gi);
                                                        if (result) {
                                                            cell.style.background = "#76f7d8";
                                                            cell.style.color = "black";
                                                        }
                                                        var result = SItem.match(/ASSESSMENT SET:/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(17, 118, 249)";
                                                            cell.style.color = "white";
                                                        }
                                                        var result = SItem.match(/EXECUTING MODULE NOW:/gi);
                                                        if (result) {
                                                            cell.style.background = "rgb(2, 69, 155)";
                                                            cell.style.color = "white";
                                                        }


                                                    }
                                                }

                                                var dtable = document.getElementById(LogButtonDIVID);
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



                            }, false);;

                            document.getElementById(MAINMenuPanelCloseID).addEventListener("click", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                //var ThisEventID = e.target.getAttribute('id');                               
                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                var ViewPanelID = SPViewName + ":VPANEL" + ":" + nNumber;

                                document.getElementById(ViewPanelID).style.display = "none";


                            }, false);;

                            document.getElementById(MAINSetExpandID).addEventListener("click", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                //var ThisEventID = e.target.getAttribute('id');                               
                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                var VDataTableDivID = SPViewName + ":DATATABLE" + ":" + nNumber;

                                var CurrentViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + nNumber;
                                console.log("Current: " + CurrentViewSETNameDivID);

                                var tablec, rowsc, ic, x, y, shouldSwitch;
                                tablec = document.getElementById("ViewsIDTableNow");
                                rowsc = tablec.rows;
                                for (ic = 1; ic < (rowsc.length); ic++) {

                                    ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;

                                    var ThisArrData = ThisNameNowRR;
                                    if (ThisArrData == null || ThisArrData == "") {} else {

                                        var res = ThisArrData.split(",");
                                        var nCheckWhatNow = res[0];

                                        if (nCheckWhatNow == "EXECUTION") {
                                            // that means it is a view storaged in local storage
                                            var ViewSetInGridID = res[12];
                                            console.log(ViewSetInGridID);

                                            if (ViewSetInGridID == CurrentViewSETNameDivID) {
                                                var CurHeightNow = document.getElementById(CurrentViewSETNameDivID).style.height;
                                                if (CurHeightNow == "200px") {

                                                    document.getElementById(CurrentViewSETNameDivID).style.height = "800px";
                                                    document.getElementById(CurrentViewSETNameDivID).style.width = "800px";

                                                    setTimeout(function() {

                                                        document.getElementById(CurrentViewSETNameDivID).style.height = "auto";
                                                        document.getElementById(CurrentViewSETNameDivID).style.width = "auto";

                                                    }, 900);

                                                } else {
                                                    document.getElementById(CurrentViewSETNameDivID).style.height = "200px";
                                                    document.getElementById(CurrentViewSETNameDivID).style.width = "200px";
                                                }

                                            } else {
                                                document.getElementById(ViewSetInGridID).style.height = "200px";
                                                document.getElementById(ViewSetInGridID).style.width = "200px";
                                            }
                                        }
                                    }
                                }

                            }, false);;

                            document.getElementById(MAINPanelUPDownID).addEventListener("click", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                //var ThisEventID = e.target.getAttribute('id');                               
                                var ThisNumberNow = ThisEventID;
                                var res = ThisNumberNow.split(":");
                                var GotViewNameWithUScore = res[0];
                                var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
                                var FinalNumberNow = res[2];

                                var nNumber = FinalNumberNow;
                                SPViewName = GotViewNameWithUScore;

                                //EMAILComplianceVIEWSET:HEIGHT:0
                                var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + nNumber;
                                var VIEWPaneHeightDivID = SPViewName + ":HEIGHT" + ":" + nNumber;

                                var CurHeightNow = document.getElementById(VIEWPaneHeightDivID).value;

                                if (document.getElementById(ViewSETNameDivID).style.height == "30px") {
                                    var FinalHNow = CurHeightNow + "px";
                                    document.getElementById(ViewSETNameDivID).style.height = FinalHNow;
                                } else {
                                    var FinalHNow = "30px";
                                    document.getElementById(ViewSETNameDivID).style.height = FinalHNow;
                                }


                            }, false);;

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

                            document.getElementById(VDataRefButtonID).addEventListener("click", function(e) {
                                e.preventDefault();
                                var ThisEventID = e.currentTarget.id;

                                //alert(ThisEventID);

                                document.getElementById("FootMessageID").innerHTML = "Function not available in this version...";
                                document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                                document.getElementById("GettingReadyID").style.display = "initial";

                                setTimeout(function() {
                                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                                }, 1500);


                            }, false);;

                            ++nID;

                            //document.getElementById("SingleViewRefNowAllButton").click();

                        }
                    }
                }

                var dtableR = document.getElementById("ViewIDsTableDiv");
                dtableR.innerHTML = "";
                dtableR.appendChild(datatableVIEW);


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        },
        complete: function(xrh, status) {


        }
    });

}

function ViewSetChangeChartTypeFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var tablec, rowsc, ic, x, y, shouldSwitch;
    tablec = document.getElementById("ViewsIDTableNow");
    rowsc = tablec.rows;
    for (ic = 1; ic < (rowsc.length); ic++) {

        ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;

        var ThisArrData = ThisNameNowRR;
        if (ThisArrData == null || ThisArrData == "") {} else {

            var res = ThisArrData.split(",");
            var nCheckWhatNow = res[0];

            if (nCheckWhatNow == "EXECUTION") {
                // that means it is a view storaged in local storage

                var nViewModuleNow = res[1];
                var nViewTenName = res[2];
                var nVChartIDDiv = res[3];
                var nVTableIDDiv = res[4];
                var nVTableIDDivFinal = nVTableIDDiv.replace(/[\r\n]+/gm, "");
                var nLastRefID = res[5];
                var nStartColID = res[6];
                var nEndColID = res[7];
                var nChartTypeID = res[8];
                var nDataTypeID = res[9];
                var nChartUpdateID = res[10];
                var nChartTypeIDNew = res[11];

                if (nChartTypeIDNew == ThisEventID) {

                    var ViewFinalModNameNow = nViewModuleNow;
                    var ViewFinalTenNameNow = nViewTenName;
                    var ViewFinalTableDivIDNow = nVTableIDDivFinal;
                    var ViewFinalChartDivIDNow = nVChartIDDiv;
                    var ViewFinalLastRefID = nLastRefID;

                    var ValCheck = document.getElementById(nDataTypeID).value;

                    if (ValCheck == "Data") {

                        document.getElementById(ViewFinalTableDivIDNow).style.display = "block";
                        document.getElementById(ViewFinalChartDivIDNow).style.display = "none";
                    }

                    if (ValCheck == "Chart") {

                        document.getElementById(ViewFinalTableDivIDNow).style.display = "none";
                        document.getElementById(ViewFinalChartDivIDNow).style.display = "block";

                        var ColStartNumner = document.getElementById(nStartColID).value;
                        var ColEndNumner = document.getElementById(nEndColID).value;
                        var ChartTypeNow = document.getElementById(nChartTypeID).value;

                        var FinalModAndTenName = nViewModuleNow + " [ " + nViewTenName + " ]";

                        if (ChartTypeNow == "stacked") {
                            try {
                                Highcharts.chart(ViewFinalChartDivIDNow, {
                                    data: {
                                        table: ViewFinalTableDivIDNow,
                                        startColumn: ColStartNumner
                                            //endColumn: ColEndNumner
                                    },
                                    chart: {
                                        type: 'column'
                                    },
                                    legend: {
                                        layout: 'vertical',
                                        align: 'bottom',
                                        verticalAlign: 'middle',
                                        itemMarginTop: 10,
                                        itemMarginBottom: 10
                                    },
                                    title: {
                                        text: ''
                                    },
                                    /*xAxis: {
                                        categories: allcat
                                    },*/

                                    yAxis: {
                                        min: 0,
                                        title: {
                                            text: 'Items/Issues'
                                        },
                                        stackLabels: {
                                            enabled: true,
                                            style: {
                                                fontWeight: '400',
                                                fontFamily: "Roboto",
                                                fontSize: '10px',
                                                color: ( // theme
                                                    Highcharts.defaultOptions.title.style &&
                                                    Highcharts.defaultOptions.title.style.color
                                                ) || 'gray'
                                            }
                                        }
                                    },
                                    legend: {
                                        enabled: false,
                                        align: 'right',
                                        x: 30,
                                        verticalAlign: 'middle',
                                        y: 100,
                                        floating: true,
                                        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                        borderColor: 'white',
                                        borderWidth: 0,
                                        shadow: false
                                    },
                                    tooltip: {
                                        headerFormat: '<b>{point.x}</b><br/>',
                                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                    },
                                    plotOptions: {
                                        column: {
                                            stacking: 'normal',
                                            dataLabels: {
                                                enabled: true
                                            }
                                        }
                                    },
                                    /*series: sdata*/

                                });
                            } catch (e) {

                            }
                        } else {
                            try {
                                Highcharts.chart(ViewFinalChartDivIDNow, {
                                    data: {
                                        table: ViewFinalTableDivIDNow,
                                        startColumn: ColStartNumner,
                                        endColumn: ColEndNumner
                                    },
                                    chart: {
                                        type: ChartTypeNow
                                    },
                                    legend: {
                                        layout: 'vertical',
                                        align: 'bottom',
                                        verticalAlign: 'middle',
                                        itemMarginTop: 10,
                                        itemMarginBottom: 10
                                    },
                                    title: {
                                        text: ''
                                    },
                                    /*xAxis: {
                                        categories: allcat
                                    },*/

                                    yAxis: {
                                        min: 0,
                                        title: {
                                            text: 'Items/Issues'
                                        },
                                        stackLabels: {
                                            enabled: true,
                                            style: {
                                                fontWeight: 'bold',
                                                color: ( // theme
                                                    Highcharts.defaultOptions.title.style &&
                                                    Highcharts.defaultOptions.title.style.color
                                                ) || 'gray'
                                            }
                                        }
                                    },
                                    legend: {
                                        enabled: false,
                                        align: 'right',
                                        x: 30,
                                        verticalAlign: 'middle',
                                        y: 100,
                                        floating: true,
                                        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                        borderColor: 'white',
                                        borderWidth: 0,
                                        shadow: false
                                    },
                                    tooltip: {
                                        headerFormat: '<b>{point.x}</b><br/>',
                                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                    },
                                    plotOptions: {
                                        column: {
                                            stacking: 'normal',
                                            dataLabels: {
                                                enabled: true
                                            }
                                        }
                                    },
                                    /*series: sdata*/

                                });
                            } catch (e) {

                            }

                        }



                    }
                }
            }
        }
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

function ProcessTitleCheckBoxFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var ThisNumberNow = ThisEventID;
    var res = ThisNumberNow.split(":");
    var GotViewNameWithUScore = res[0];
    var FinalViewName = GotViewNameWithUScore.replaceAll('_', ' ');
    var FinalNumberNow = res[2];

    // Creating Divs for view:
    var n = FinalNumberNow;
    SPViewName = GotViewNameWithUScore;
    var MAINPanelTitle = SPViewName + ":PANELTITLE" + ":" + n;
    var MAINPanelTitleCheckBox = SPViewName + ":TITLE_CHECKBOX" + ":" + n;

    if (document.getElementById(MAINPanelTitleCheckBox).checked == true) {
        document.getElementById(MAINPanelTitle).style.display = "none";
    }
    if (document.getElementById(MAINPanelTitleCheckBox).checked == false) {
        document.getElementById(MAINPanelTitle).style.display = "block";
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

    var vSearchDivNow = SPViewName + ":SEARCHDIV" + ":" + n;

    var DataTypeNow = document.getElementById(ThisEventID).value;
    if (DataTypeNow == "Data") {
        document.getElementById(VDataTableDivID).style.display = "block";
        //document.getElementById(VChartTopDivID).style.display = "block";
        document.getElementById(VChartDivID).style.display = "none";
        document.getElementById(vSearchDivNow).style.display = "block";
    }
    if (DataTypeNow == "Chart") {
        document.getElementById(VDataTableDivID).style.display = "none";
        //document.getElementById(VChartTopDivID).style.display = "block";
        document.getElementById(VChartDivID).style.display = "block";
        document.getElementById(vSearchDivNow).style.display = "none";
    }
}


function ViewSetChartUpdateFunction() {

    var ThisEventID = event.target.getAttribute("id");

    var tablec, rowsc, ic, x, y, shouldSwitch;
    tablec = document.getElementById("ViewsIDTableNow");
    rowsc = tablec.rows;
    for (ic = 1; ic < (rowsc.length); ic++) {

        ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;

        var ThisArrData = ThisNameNowRR;
        if (ThisArrData == null || ThisArrData == "") {} else {

            var res = ThisArrData.split(",");
            var nCheckWhatNow = res[0];

            if (nCheckWhatNow == "EXECUTION") {
                // that means it is a view storaged in local storage

                var nViewModuleNow = res[1];
                var nViewTenName = res[2];
                var nVChartIDDiv = res[3];
                var nVTableIDDiv = res[4];
                var nVTableIDDivFinal = nVTableIDDiv.replace(/[\r\n]+/gm, "");
                var nLastRefID = res[5];
                var nStartColID = res[6];
                var nEndColID = res[7];
                var nChartTypeID = res[8];
                var nDataTypeID = res[9];
                var nChartUpdateID = res[10];

                if (nChartUpdateID == ThisEventID) {

                    var ViewFinalModNameNow = nViewModuleNow;
                    var ViewFinalTenNameNow = nViewTenName;
                    var ViewFinalTableDivIDNow = nVTableIDDivFinal;
                    var ViewFinalChartDivIDNow = nVChartIDDiv;
                    var ViewFinalLastRefID = nLastRefID;

                    var ValCheck = document.getElementById(nDataTypeID).value;

                    if (ValCheck == "Data") {

                        document.getElementById(ViewFinalTableDivIDNow).style.display = "block";
                        document.getElementById(ViewFinalChartDivIDNow).style.display = "none";
                    }

                    if (ValCheck == "Chart") {

                        document.getElementById(ViewFinalTableDivIDNow).style.display = "none";
                        document.getElementById(ViewFinalChartDivIDNow).style.display = "block";

                        var ColStartNumner = document.getElementById(nStartColID).value;
                        var ColEndNumner = document.getElementById(nEndColID).value;
                        var ChartTypeNow = document.getElementById(nChartTypeID).value;

                        var FinalModAndTenName = nViewModuleNow + " [ " + nViewTenName + " ]";

                        if (ChartTypeNow == "stacked") {
                            try {
                                Highcharts.chart(ViewFinalChartDivIDNow, {
                                    data: {
                                        table: ViewFinalTableDivIDNow,
                                        startColumn: ColStartNumner
                                            //endColumn: ColEndNumner
                                    },
                                    chart: {
                                        type: 'column'
                                    },
                                    legend: {
                                        layout: 'vertical',
                                        align: 'bottom',
                                        verticalAlign: 'middle',
                                        itemMarginTop: 10,
                                        itemMarginBottom: 10
                                    },
                                    title: {
                                        text: ''
                                    },
                                    /*xAxis: {
                                        categories: allcat
                                    },*/

                                    yAxis: {
                                        min: 0,
                                        title: {
                                            text: 'Items'
                                        },
                                        stackLabels: {
                                            enabled: true,
                                            style: {
                                                fontWeight: '400',
                                                fontFamily: "Roboto",
                                                fontSize: '10px',
                                                color: ( // theme
                                                    Highcharts.defaultOptions.title.style &&
                                                    Highcharts.defaultOptions.title.style.color
                                                ) || 'gray'
                                            }
                                        }
                                    },
                                    legend: {
                                        enabled: false,
                                        align: 'right',
                                        x: 30,
                                        verticalAlign: 'middle',
                                        y: 100,
                                        floating: true,
                                        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                        borderColor: 'white',
                                        borderWidth: 0,
                                        shadow: false
                                    },
                                    tooltip: {
                                        headerFormat: '<b>{point.x}</b><br/>',
                                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                    },
                                    plotOptions: {
                                        column: {
                                            stacking: 'normal',
                                            dataLabels: {
                                                enabled: true
                                            }
                                        }
                                    },
                                    /*series: sdata*/

                                });
                                chart.xAxis[0].labelGroup.element.childNodes.forEach(function(label) {
                                    label.style.cursor = "pointer";
                                    label.onclick = function() {
                                        alert('You clicked on ' + this.textContent);
                                    }
                                });
                            } catch (e) {

                            }
                        } else {
                            try {
                                Highcharts.chart(ViewFinalChartDivIDNow, {
                                    data: {
                                        table: ViewFinalTableDivIDNow,
                                        startColumn: ColStartNumner,
                                        endColumn: ColEndNumner
                                    },
                                    chart: {
                                        type: ChartTypeNow
                                    },
                                    legend: {
                                        layout: 'vertical',
                                        align: 'bottom',
                                        verticalAlign: 'middle',
                                        itemMarginTop: 10,
                                        itemMarginBottom: 10
                                    },
                                    title: {
                                        text: ''
                                    },
                                    /*xAxis: {
                                        categories: allcat
                                    },*/

                                    yAxis: {
                                        min: 0,
                                        title: {
                                            text: 'Items/Issues'
                                        },
                                        stackLabels: {
                                            enabled: true,
                                            style: {
                                                fontWeight: 'bold',
                                                color: ( // theme
                                                    Highcharts.defaultOptions.title.style &&
                                                    Highcharts.defaultOptions.title.style.color
                                                ) || 'gray'
                                            }
                                        }
                                    },
                                    legend: {
                                        enabled: false,
                                        align: 'right',
                                        x: 30,
                                        verticalAlign: 'middle',
                                        y: 100,
                                        floating: true,
                                        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                        borderColor: 'white',
                                        borderWidth: 0,
                                        shadow: true
                                    },
                                    tooltip: {
                                        headerFormat: '<b>{point.x}</b><br/>',
                                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                    },
                                    plotOptions: {
                                        column: {
                                            stacking: 'normal',
                                            dataLabels: {
                                                enabled: true
                                            }
                                        }
                                    },
                                    /*series: sdata*/

                                });
                                chart.xAxis[0].labelGroup.element.childNodes.forEach(function(label) {
                                    label.style.cursor = "pointer";
                                    label.onclick = function() {
                                        alert('You clicked on ' + this.textContent);
                                    }
                                });
                            } catch (e) {

                            }

                        }
                    }
                }
            }
        }
    }


}


$("#RefreshCompleteViewSet").click(function(e) {

    // First add GolChakkar to all

    //VIEWNOW:ViewHeightNow,DynamicView_Set:HEIGHT:5
    document.getElementById("ViewSetRefCircleWhenExecutingView").style.display = "block";

    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("ViewsIDTableNow");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        ThisNameNowRR = rows[i].getElementsByTagName("td")[0].innerHTML;

        var ThisArrData = ThisNameNowRR;
        if (ThisArrData == null || ThisArrData == "") {} else {

            console.log(ThisArrData);
            var res = ThisArrData.split(",");
            console.log(res);
            var ThisItemName = res[0];
            var SItemID = res[1].replace(/[\r\n]+/gm, "");

            var SItemFinalID = SItemID.replace(/[\r\n]+/gm, "");

            var CheckStorageNow = ThisItemName;
            var res = CheckStorageNow.split(":");
            var FinalCheckTypeNow = res[0];
            var FinalCheckViewIDNow = res[1];

            //console.log(ThisItemName + "AND" + SItemFinalID);

            //alert("r" + FinalCheckTypeNow + "r");

            if (FinalCheckTypeNow == "VIEWNOW") {
                // that means it is a view storaged in local storage
                //alert("HERE Now" + SItemFinalID);

                if (FinalCheckViewIDNow == "VDataTableDivID") {
                    document.getElementById(SItemFinalID).innerHTML = GolChakkar;
                    //console.log(SItemFinalID);
                }
                if (FinalCheckViewIDNow == "VChartDivID") {
                    document.getElementById(SItemFinalID).innerHTML = GolChakkar;
                    //console.log(SItemFinalID);
                }
            }
        }
    }

    // Here send for Execution...

    var FinalViewSetName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var WhichSetType = document.getElementById("WhichOnewasLoadedSetOrSetView").innerHTML;

    $.ajax({
        url: '/CallExecuteViewSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewAdminsNow",
            'userId': FinalUserNameNow,
            'FinalViewSetName': FinalViewSetName,
            'ThisSetTypeNow': WhichSetType
        },
        success: function(data) {

            if (data.message) {

                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
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
    }, 30000);

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

                    var NowLn = (rows.length - 1);

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var KeepAddingOrNot = "Yes";

                        if (CheckFRow == "VIEWEXECUTED") {
                            clearInterval(GlobalAssessmentMonitorViewSet);
                            CollectViewSetDataFileNow();
                            document.getElementById("ViewSetRefCircleWhenExecutingView").style.display = "none";
                            document.getElementById("CloseViewSetExeLogD").click();
                            KeepAddingOrNot = "No";

                        } else {

                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);
                            cell.innerHTML = rows[i];

                            var SItem = rows[i].replace(/[\r\n]+/gm, "");
                            var result = SItem.match(/Processing View:/gi);
                            if (result) {
                                cell.style.background = "#bce0ff";
                                cell.style.color = "black";
                            }

                            var SItem = rows[i].replace(/[\r\n]+/gm, "");
                            var result = SItem.match(/Processing View:/gi);
                            if (result) {
                                cell.style.background = "#bce0ff";
                                cell.style.color = "black";
                            }

                            var SItem = rows[i].replace(/[\r\n]+/gm, "");
                            var result = SItem.match(/Checking:/gi);
                            if (result) {
                                cell.style.background = "#bce0ff";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                            if (result) {
                                cell.style.background = "rgb(188, 255, 192)";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/END: MODULE CODE/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 213, 188)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/START: MODULE CODE/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 213, 188)";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 210, 188)";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/Executing Module:/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 210, 188)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/VIEW SET:DISABLED/gi);
                            if (result) {
                                cell.style.background = "rgb(247, 131, 105)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/VIEW SET:ENABLED/gi);
                            if (result) {
                                cell.style.background = "rgb(157, 244, 132)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Error Occured/gi);
                            if (result) {
                                cell.style.background = "rgb(247, 60, 17)";
                                cell.style.color = "white";
                            }
                            var result = SItem.match(/Loading SUCCESS:/gi);
                            if (result) {
                                cell.style.background = "#09d009";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Failed Loading:/gi);
                            if (result) {
                                cell.style.background = "#fd9369";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Processing Connection String:/gi);
                            if (result) {
                                cell.style.background = "black";
                                cell.style.color = "white";
                            }
                            var result = SItem.match(/Connection Success/gi);
                            if (result) {
                                cell.style.background = "#09d009";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Failed to Connect/gi);
                            if (result) {
                                cell.style.background = "#fd9369";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Error:/gi);
                            if (result) {
                                cell.style.background = "#fd9369";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Connection String:/gi);
                            if (result) {
                                cell.style.background = "#fde4c8";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/ModulesToLoad:/gi);
                            if (result) {
                                cell.style.background = "#76f7d8";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/ASSESSMENT SET:/gi);
                            if (result) {
                                cell.style.background = "rgb(17, 118, 249)";
                                cell.style.color = "white";
                            }
                            var result = SItem.match(/EXECUTING MODULE NOW:/gi);
                            if (result) {
                                cell.style.background = "rgb(2, 69, 155)";
                                cell.style.color = "white";
                            }


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

function GoLeftRightInDefSetNowFunction() {

    var TotW = document.getElementById("AllModulesInSelectedModulesSetDiv").clientWidth;
    console.log(TotW);

    if (TotW > 400) {
        //document.getElementById('AVDFullMenuDiv').setAttribute("style", "width:342px");
        document.getElementById('AllModulesInSelectedModulesSetDiv').style.width = "10%";
    } else {
        document.getElementById('AllModulesInSelectedModulesSetDiv').style.width = "35%";
    }

};

$("#GoLeftForModPaneAndRight").click(function(e) {

    e.preventDefault();

    var TotW = document.getElementById("MAINNOWAllModulesTableDivHere").clientWidth;
    console.log(TotW);

    if (TotW > 680) {
        //document.getElementById('AVDFullMenuDiv').setAttribute("style", "width:342px");
        document.getElementById('MAINNOWAllModulesTableDivHere').style.width = "10%";
        document.getElementById("ThisDivtoHideOrShowForModule").style.display = "none";
    } else {
        document.getElementById('MAINNOWAllModulesTableDivHere').style.width = "48%";
        document.getElementById("ThisDivtoHideOrShowForModule").style.display = "inline-block";
    }

});

$("#CloseAllVPaneMenu").click(function(e) {

    document.getElementById("ALLID_VPANEL").style.display = "none";

});

$("#PullMenuForAllViewSet").click(function(e) {

    var ThisVisOrNot = document.getElementById("ALLID_VPANEL").style.display;
    if (ThisVisOrNot == "block") {
        document.getElementById("ALLID_VPANEL").style.display = "none";
    } else {
        document.getElementById("ALLID_VPANEL").style.display = "block";
    }

});



$("#ApplyNowViewSetForAllViews").click(function(e) {

    e.preventDefault();
    var TTR = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var SPViewName = TTR.replaceAll(' ', "_");

    var nNumberNow = 0;

    var tablec, rowsc, ic, x, y, shouldSwitch;
    tablec = document.getElementById("ViewsIDTableNow");
    rowsc = tablec.rows;
    for (ic = 1; ic < (rowsc.length); ic++) {

        ThisNameNowRR = rowsc[ic].getElementsByTagName("td")[0].innerHTML;

        var ThisArrData = ThisNameNowRR;
        if (ThisArrData == null || ThisArrData == "") {
            console.log("IT IS NULL");
        } else {

            var res = ThisArrData.split(",");
            var nCheckWhatNow = res[0];

            if (nCheckWhatNow == "EXECUTION") {
                // that means it is a view storaged in local storage               
                var nViewModuleNow = res[1];
                var nViewTenName = res[2];
                var nVChartIDDiv = res[3];
                var nVTableIDDiv = res[4];
                var nVTableIDDivFinal = nVTableIDDiv.replace(/[\r\n]+/gm, "");
                var nLastRefID = res[5];
                var nStartColID = res[6];
                var nEndColID = res[7];
                var nChartTypeID = res[8];
                var nDataTypeID = res[9];
                var nChartUpdateID = res[10];
                var nChartTypeIDNew = res[11];
                var ViewSetNameDivID = res[12];
                var MAINTitleID = res[13];
                var TitleCheckBoxID = res[14];

                var VIEWPaneHeightDivID = SPViewName + ":HEIGHT" + ":" + nNumberNow.toString();
                var VIEWPaneWidthDivID = SPViewName + ":WIDTH" + ":" + nNumberNow.toString();

                var VSerachDivID = SPViewName + ":SEARCHDIV" + ":" + nNumberNow.toString();

                // First apply width and height
                // next show data or chart
                // next hide or show title
                // apply chart ones.

                //var ViewHeightNow = SPViewName + ":HEIGHT" + ":" + n.toString();
                //var ViewWidthNow = SPViewName + ":WIDTH" + ":" + n.toString();
                //console.log(MAINTitleID);

                var TitleHideOrShow = "Show"
                if (document.getElementById("AllTitlesItemID").checked == true) {
                    TitleHideOrShow = "Hide"
                }

                if (TitleHideOrShow == "Show") {
                    document.getElementById(MAINTitleID).style.display = "block";
                    document.getElementById(TitleCheckBoxID).checked = false;
                }
                if (TitleHideOrShow == "Hide") {
                    document.getElementById(MAINTitleID).style.display = "none";
                    document.getElementById(TitleCheckBoxID).checked = true;
                }

                //var ViewSETNameDivID = SPViewName + ":VIEWSETNAME" + ":" + nNumberNow.toString();

                var CurHeightNow = document.getElementById("ALLID_VIEWHEIGHT").value;
                var CurWidthNow = document.getElementById("ALLID_VIEWWIDTH").value;
                document.getElementById(VIEWPaneHeightDivID).value = CurHeightNow;
                document.getElementById(VIEWPaneWidthDivID).value = CurWidthNow;

                var FinalHNow = CurHeightNow + "px";
                document.getElementById(ViewSetNameDivID).style.height = FinalHNow;
                var FinalWNow = CurWidthNow + "px";
                document.getElementById(ViewSetNameDivID).style.width = FinalWNow;

                var ValCheck = document.getElementById("ALLID_VIEWTYPENOW").value;
                document.getElementById(nDataTypeID).value = ValCheck;

                if (ValCheck == "Data") {
                    document.getElementById(nVTableIDDivFinal).style.display = "block";
                    document.getElementById(nVChartIDDiv).style.display = "none";
                    document.getElementById(VSerachDivID).style.display = "block";

                }
                if (ValCheck == "Chart") {
                    document.getElementById(nVTableIDDivFinal).style.display = "none";
                    document.getElementById(nVChartIDDiv).style.display = "block";
                    document.getElementById(VSerachDivID).style.display = "none";
                }

                if (ValCheck == "Chart") {

                    var ColStartNumner = document.getElementById("ALLID_STARTCOL").value;
                    var ColEndNumner = document.getElementById("ALLID_ENDCOL").value;
                    var ChartTypeNow = document.getElementById("ALLID_CHARTTYPE").value;

                    document.getElementById(nStartColID).value = ColStartNumner;
                    document.getElementById(nEndColID).value = ColEndNumner;
                    document.getElementById(nChartTypeID).value = ChartTypeNow;

                    var FinalModAndTenName = nViewModuleNow + " [ " + nViewTenName + " ]";

                    ViewFinalChartDivIDNow = nVChartIDDiv;
                    ViewFinalTableDivIDNow = nVTableIDDivFinal;

                    console.log(ViewFinalChartDivIDNow);
                    console.log(ChartTypeNow);
                    console.log(ViewFinalTableDivIDNow);

                    if (ChartTypeNow == "stacked") {
                        try {
                            Highcharts.chart(ViewFinalChartDivIDNow, {
                                data: {
                                    table: ViewFinalTableDivIDNow,
                                    startColumn: ColStartNumner
                                        //endColumn: ColEndNumner
                                },
                                chart: {
                                    type: 'column'
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'bottom',
                                    verticalAlign: 'middle',
                                    itemMarginTop: 10,
                                    itemMarginBottom: 10
                                },
                                title: {
                                    text: ''
                                },
                                /*xAxis: {
                                    categories: allcat
                                },*/

                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: 'Items'
                                    },
                                    stackLabels: {
                                        enabled: true,
                                        style: {
                                            fontWeight: '400',
                                            color: ( // theme
                                                Highcharts.defaultOptions.title.style &&
                                                Highcharts.defaultOptions.title.style.color
                                            ) || 'gray',
                                            fontFamily: "Roboto",
                                            fontSize: '10px'
                                        }
                                    }
                                },
                                legend: {
                                    enabled: false,
                                    align: 'right',
                                    x: 30,
                                    verticalAlign: 'middle',
                                    y: 100,
                                    floating: true,
                                    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                    borderColor: 'white',
                                    borderWidth: 0,
                                    shadow: false
                                },
                                tooltip: {
                                    headerFormat: '<b>{point.x}</b><br/>',
                                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                },
                                plotOptions: {
                                    column: {
                                        stacking: 'normal',
                                        dataLabels: {
                                            enabled: true
                                        }
                                    }
                                },
                                /*series: sdata*/

                            });
                        } catch (e) {

                        }
                    } else {
                        try {
                            Highcharts.chart(ViewFinalChartDivIDNow, {
                                data: {
                                    table: ViewFinalTableDivIDNow,
                                    startColumn: ColStartNumner,
                                    endColumn: ColEndNumner
                                },
                                chart: {
                                    type: ChartTypeNow
                                },
                                legend: {
                                    layout: 'vertical',
                                    align: 'bottom',
                                    verticalAlign: 'middle',
                                    itemMarginTop: 10,
                                    itemMarginBottom: 10
                                },
                                title: {
                                    text: ''
                                },
                                xAxis: {
                                    labels: {
                                        style: {
                                            color: '#827a7a',
                                            fontSize: '10px',
                                            fontFamily: 'Roboto',
                                            fontWeight: '400'
                                        }
                                    }
                                },
                                yAxis: {
                                    labels: {
                                        style: {
                                            color: '#827a7a',
                                            fontSize: '10px',
                                            fontFamily: 'Roboto',
                                            fontWeight: '400'
                                        }
                                    }
                                },
                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: 'Items'
                                    },
                                    stackLabels: {
                                        enabled: true,
                                        style: {
                                            fontWeight: '400',
                                            fontSize: "10px",
                                            fontFamily: "Roboto",
                                            color: '#827a7a',
                                            color: ( // theme
                                                Highcharts.defaultOptions.title.style &&
                                                Highcharts.defaultOptions.title.style.color
                                            ) || 'gray'
                                        }
                                    }
                                },
                                legend: {
                                    enabled: false,
                                    align: 'right',
                                    x: 30,
                                    verticalAlign: 'middle',
                                    y: 100,
                                    floating: true,
                                    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                                    borderColor: 'white',
                                    borderWidth: 0,
                                    shadow: false
                                },
                                tooltip: {
                                    headerFormat: '<b>{point.x}</b><br/>',
                                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                                },
                                plotOptions: {
                                    column: {
                                        stacking: 'normal',
                                        dataLabels: {
                                            formatter: function() {
                                                const point = this.point;
                                                return '<span style="color: ' + point.color + '">' +
                                                    point.name + ': ' + point.y + '%</span>';
                                            }
                                        }
                                    }
                                },
                                /*series: sdata*/

                            });
                        } catch (e) {

                        }

                    }

                }

                ++nNumberNow;
            }
        }

    }


});

function GetAllModulesbasedOnModTypeFuncftion() {
    document.getElementById("RefAllNewModulesFromServerButton").click();
}

function FinallyLoadViewSetPaneFunction(ThisToLoad) {

    document.getElementById("FootMessageID").innerHTML = "Loading...";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    FinalViewName = ThisToLoad;

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
            "type": "SocketCall-LoadViewSetONE",
            'userId': userId,
            'FinalViewName': FinalViewName
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        },
        complete: function(FinalViewName) {

            //alert(FinalViewName);
            //AddEventsAndDataToViewSetFunction(FinalViewName);
        }
    });


    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";



}

function RemoveAViewFromViewSet(ThisOBJ) {

    var TargetObjWithAll = ThisOBJ
    var str = ThisOBJ;
    var res = str.split(":");
    var ThisFinalViewNow = res[1];
    var FromThisViewSet = res[0];

    var FinalViewName = ThisFinalViewNow.replaceAll("_", " ");
    var FinalViewSetName = FromThisViewSet.replaceAll("_", " ");

    MSGNow = "Remove View from View Set: " + FinalViewName;
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveAViewFromViewsSet:" + FinalViewSetName + ":" + FinalViewName;

}

function RemoveItemFromSetFunction(ThisOBJ) {

    var TargetObjWithAll = ThisOBJ
    var str = ThisOBJ;
    var res = str.split(":");
    var ThisFinalViewNow = res[1];
    var FromThisViewSet = res[0];

    var FinalViewName = ThisFinalViewNow.replaceAll("_", " ");
    var FinalViewSetName = FromThisViewSet.replaceAll("_", " ");

    MSGNow = "Remove Module from Set: " + FinalViewName;
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveSingleModule:" + FinalViewSetName + ":" + FinalViewName;

}

function RemoveCurrentlySelectedModuleFunction(ThisobjectToRemove) {


    var ThisobjectToRemove = ThisobjectToRemove.replaceAll("_", " ");
    if (ThisobjectToRemove == "Office 365 Compliance and Severity View-OVERALL" || ThisobjectToRemove == "Office 365 Compliance and Severity Dashboard View-OVERALL") {

        var ThisMsg = "Cannot remove System Modules!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";

        setTimeout(function() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
        }, 1500);

    } else {


        MSGNow = "Remove current Module from list: " + ThisobjectToRemove;
        document.getElementById("ConfirmDBox").style.display = "block";
        document.getElementById("TakeActionMSG").innerHTML = MSGNow;
        document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
        document.getElementById("ForMultiStringID").innerHTML = "RemoveModuleFromDCModules:" + ThisobjectToRemove;
    }
}

function RemoveCurrentTenantFunction(ThisobjectToRemove) {

    var ThisobjectToRemove = ThisobjectToRemove.replaceAll("_", " ");
    MSGNow = "Remove current Tenant from list: " + ThisobjectToRemove;
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveTenant:" + ThisobjectToRemove;

}

function RemoveViewNowFunction(ThisobjectToRemove) {

    var ThisobjectToRemove = ThisobjectToRemove.replaceAll("_", " ");
    MSGNow = "Remove current view from list: " + ThisobjectToRemove;
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveView:" + ThisobjectToRemove;

}

function RemoveAdminFunctionNow(ThisObjectToRemove) {

    var ThisObjectToRemove = ThisObjectToRemove.replaceAll("_", " ");
    MSGNow = "Remove current Admin from list: " + ThisObjectToRemove;
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveAdmin:" + ThisObjectToRemove;

}

function RemoveCurrentTemplateFunction(ThisobjectToRemove) {

    var ThisobjectToRemove = ThisobjectToRemove.replaceAll("_", " ");
    MSGNow = "Remove current Template from list: " + ThisobjectToRemove;
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveSingleItemNow";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveTemplate:" + ThisobjectToRemove;
}

$("#RemoveAllAdminsNowFromList").click(function(e) {

    MSGNow = "Remove All managed Admins from the list?"
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveActionForAll";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveAdmins";

});
$("#RemoveAllTemplatesNow").click(function(e) {

    MSGNow = "Remove All Templates?"
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveActionForAll";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveTemplates";

});
$("#RemoveAllTenTargetsNow").click(function(e) {

    MSGNow = "Remove All Managed Tenants/Targets?"
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveActionForAll";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveTenants";

});
$("#RemoveAllModulesSetN").click(function(e) {

    MSGNow = "Remove All Managed Sets?"
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveActionForAll";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveSets";

});
$("#RemoveAllViessNow").click(function(e) {

    MSGNow = "Remove All Managed Views?"
    document.getElementById("ConfirmDBox").style.display = "block";
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RemoveActionForAll";
    document.getElementById("ForMultiStringID").innerHTML = "RemoveViews";

});

$("#ResetSetForAllVies").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Reset Settings for all views processing?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "RESETVIEWPROCSETTINGS";


});


$("#SaveSettingsNowForViewProcAg").click(function(e) {

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Save View Processing Settings?"
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "SAVESETTINGSNOWASSSET";

});

$("#RefAllTenants").click(function(e) {

    document.getElementById("TenantDIV").innerHTML = GolChakkar;
    LoadAllTenantsForAllFunction();

});


function TestSPNFunction(element) {

    var DemoOrNot = document.getElementById("DOrNot").innerHTML;
    if (DemoOrNot == "DEMO") {
        var ThisMsg = "Task is not available in Demo Mode!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 3000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }

    } else {

        ThisButtonID = element;

        var str = ThisButtonID;
        var res = str.split(":");
        var TenName = res[0];
        var TenType = res[1];

        var ThisMsg = "Testing...Please wait..."
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";

        var TRPKey = document.getElementById("TRPKeyN").value;

        $.ajax({
            url: '/CallTestAccountsForTenant', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenName': TenName,
                'TenType': TenType,
                'TRPKey': TRPKey
            },
            success: function(data) {

                var SItem = data.message.replace(/[\r\n]+/gm, "");
                var FinalItem = SItem.replaceAll(' ', '');

                if (data.message) {
                    if (FinalItem == "Failed") {

                        var ThisMsg = "FAILED!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
                        }

                    }
                    if (FinalItem == "Success") {


                        var ThisMsg = "SUCCESS!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
                        }

                    }
                } else {

                    var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                    function FunctionFooterDIV() {
                        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                        clearInterval(MyTimerFooter);
                    }

                }


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

$("#AddNewViewToSetButtonNow").click(function(e) {

    document.getElementById("AddViewToViewSetPanel").style.display = "block";

});
$("#CloseAddToViewSetNow").click(function(e) {

    document.getElementById("AddViewToViewSetPanel").style.display = "none";

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

function FilterModulesNowFunction() {

    document.getElementById("RefAllModulesDataHereN").click();
}


$("#ApplyOrAddToCurrentViewSet").click(function(e) {

    document.getElementById("FootMessageID").innerHTML = "Adding View to View Set...Please wait...";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    var ThisViewName = document.getElementById("AvailableviewsForAllNow").value;
    var ThisViewTenant = document.getElementById("AvailableTenantsForAllNowWhenAdding").value;

    var resOne = ThisViewTenant.split(':');
    var FinalTenantName = resOne[0];

    table = document.getElementById("LoadedVSetTableNow");
    var row = table.insertRow(-1);

    var cell = row.insertCell(-1);
    cell.innerHTML = ThisViewName;
    var cell = row.insertCell(-1);
    cell.innerHTML = FinalTenantName;

    var ViewSetName = document.getElementById("ThisSelectedViewSetNowIn").innerHTML;

    FinalServerName = ViewSetName + ":" + ThisViewName;
    var ReplDataN = FinalServerName.replaceAll(' ', "_");
    var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveAViewFromViewSet(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
    var cell = row.insertCell(-1);
    cell.innerHTML = RemoveModuleNow;

    // Here Save also...

    var ViewSetName = document.getElementById("ThisSelectedViewSetNowIn").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    $.ajax({
        url: '/CallUpdateExistingViewSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'ViewSetName': ViewSetName,
            'TRPKey': TRPKey,
            'ThisViewName': ThisViewName,
            'FinalTenantName': FinalTenantName
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
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }
    });



});

function UpdateTableWhenAViewIsRemovedFromViewSetFunction() {

    var ThisViewName = document.getElementById("ThisSelectedViewSetNowIn").innerHTML;

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'userId': userId
        },
        success: function(data) {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'LoadedVSetTableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "ViewSet") {

                        var row = datatable.insertRow(-1);

                        var cell = row.insertCell(-1);
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "371px";
                        cell.innerHTML = "View Name";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "View Tenant";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                    }

                    if (CheckFRow == ThisViewName) {
                        var row = datatable.insertRow(-1);

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.style.width = "200px";
                        cell.style.fontWeight = "500";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];

                        FinalServerName = ThisViewName + ":" + cells[2];
                        var ReplDataN = FinalServerName.replaceAll(' ', "_");
                        var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveAViewFromViewSet(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = RemoveModuleNow;

                    }

                }

                var dtable = document.getElementById("ThisSelectedVSetDivNowTRR");
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

function UpdateTableWhenAModuleIsRemovedFromSet() {

    var ThisNowCheck = document.getElementById("ThisLoadedMSetNR").innerHTML;
    var res = ThisNowCheck.split("|");

    var TemplateName = res[0];
    var TempTypeNow = res[1];

    var text = TempTypeNow;
    var result = text.match(/Default Set/gi);
    if (result) {
        document.getElementById("OpenedModSetNameNow").innerHTML = TemplateName;

        var TRPKey = document.getElementById("TRPKeyN").value;
        $.ajax({
            url: '/LoadModulesSetAttrNow', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'TemplateName': TemplateName,
                "type": "Socket-CallUpdateModSetTableWhenRemoved",
                'userId': userId
            },
            success: function(data) {

            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });
    }

    var result = text.match(/Assessment Set/gi);
    if (result) {
        document.getElementById("OpenedModSetNameNow").innerHTML = TemplateName;

        var TRPKey = document.getElementById("TRPKeyN").value;
        $.ajax({
            url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 50000,
            data: {
                'TRPKey': TRPKey,
                'TemplateName': TemplateName,
                "type": "Socket-CallUpdateModSetTableWhenRemovedForAssSet",
                'userId': userId
            },
            success: function(data) {


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });
    }

}

$("#DefaultSetExeLogButton").click(function(e) {

    document.getElementById("DefSetViewSetTopLogDiv").style.display = "block";
    document.getElementById("DefSetShowViewSetLogDivNow").style.display = "block";
    document.getElementById("ThisToShowWhenClickedOnDTable").style.display = "none";

    var ThisModuleAndTen = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;

    var res = ThisModuleAndTen.split(":");
    var ThisModName = res[0];
    var ThisModTenant = res[1];

    var FinalViewSetName = document.getElementById("WhichPaneLoadedNow").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var WhichSetType = "DEFSET";

    e.preventDefault();
    $.ajax({
        url: '/CallDefSetModuleLogFile', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 500000,
        data: {
            'TRPKey': TRPKey,
            "type": "SocketCall-LoadDefaultSetModuleLOG",
            'ThisLUser': FinalUserNameNow,
            'FinalViewSetName': FinalViewSetName,
            'ThisSetTypeNow': WhichSetType,
            'ThisModuleName': ThisModName,
            'FinalTenSelected': ThisModTenant,
            'userId': userId
        },
        success: function(data) {


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });

})


$("#LogoutUserNowButton").click(function(e) {
    e.preventDefault();
    $.ajax({
        url: '/Userlogout', // This tells server which Route to use OKAYYYY
        type: 'GET',
        async: true,
        success: function(data) {
            console.log(data);
            window.location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=https://devcloudnovadesk.azurewebsites.net"
        }
    })
})

function AddToSPFieldFunction() {
    var thisdom = document.getElementById("OfficeTenantDomainName").value;

    //https://DynamicPacksNet-Admin.SharePoint.com

    var FormedAdd = "https://" + thisdom + "-Admin.SharePoint.com"
    document.getElementById("OfficeSharePointAadminURLNow").value = FormedAdd;
}





function MonitorSingleDefSetExecutionFunction() {
    // Check Status here and load logs

    var GlobalSingleDefSetMonitorViewSet = setInterval(function() {
        CheckDefSetSingleFunctionViewSet()
    }, 3000);

    function CheckDefSetSingleFunctionViewSet() {

        var ThisModuleAndTen = document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML;

        var res = ThisModuleAndTen.split(":");
        var ThisModName = res[0];
        var ThisModTenant = res[1];

        var FinalViewSetName = document.getElementById("WhichPaneLoadedNow").innerHTML;
        var TRPKey = document.getElementById("TRPKeyN").value;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        var WhichSetType = "DEFSET";

        $.ajax({
            url: '/CallDefSetModuleLogFile', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            timeout: 500000,
            data: {
                'TRPKey': TRPKey,
                "type": "SocketCall-LoadDefaultSetModuleLOGForExecution",
                'ThisLUser': FinalUserNameNow,
                'FinalViewSetName': FinalViewSetName,
                'ThisSetTypeNow': WhichSetType,
                'ThisModuleName': ThisModName,
                'FinalTenSelected': ThisModTenant,
                'userId': userId
            },
            success: function(data) {

                if (data.message == "FileNotFound") {
                    var ThisNow = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Logs Found. Module in Default Set has not been executed.</span></p>'
                    document.getElementById("DefSetShowViewSetLogDivNow").innerHTML = ThisNow;

                } else {

                    var datatable = document.createElement("table");
                    datatable.id = 'SingleDefSetModuleLogTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var NowLn = (rows.length - 1);

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        if (CheckFRow == "DEFSETMODULEEXECUTED") {
                            clearInterval(GlobalSingleDefSetMonitorViewSet);
                            document.getElementById("ButtonFillDataInModule").click();
                            //document.getElementById("SingleDefSetModuleLogDiv").style.display = "none";

                        } else {

                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);

                            cell.innerHTML = rows[i];

                            var SItem = rows[i].replace(/[\r\n]+/gm, "");
                            var result = SItem.match(/Processing View:/gi);
                            if (result) {
                                cell.style.background = "#bce0ff";
                                cell.style.color = "black";
                            }

                            var SItem = rows[i].replace(/[\r\n]+/gm, "");
                            var result = SItem.match(/Processing View:/gi);
                            if (result) {
                                cell.style.background = "#bce0ff";
                                cell.style.color = "black";
                            }

                            var SItem = rows[i].replace(/[\r\n]+/gm, "");
                            var result = SItem.match(/Checking:/gi);
                            if (result) {
                                cell.style.background = "#bce0ff";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                            if (result) {
                                cell.style.background = "rgb(188, 255, 192)";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/END: MODULE CODE/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 213, 188)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/START: MODULE CODE/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 213, 188)";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 210, 188)";
                                cell.style.color = "black";
                            }

                            var result = SItem.match(/Executing Module:/gi);
                            if (result) {
                                cell.style.background = "rgb(255, 210, 188)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/VIEW SET:DISABLED/gi);
                            if (result) {
                                cell.style.background = "rgb(247, 131, 105)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/VIEW SET:ENABLED/gi);
                            if (result) {
                                cell.style.background = "rgb(157, 244, 132)";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Error Occured/gi);
                            if (result) {
                                cell.style.background = "rgb(247, 60, 17)";
                                cell.style.color = "white";
                            }
                            var result = SItem.match(/Loading SUCCESS:/gi);
                            if (result) {
                                cell.style.background = "#09d009";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Failed Loading:/gi);
                            if (result) {
                                cell.style.background = "#fd9369";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Processing Connection String:/gi);
                            if (result) {
                                cell.style.background = "black";
                                cell.style.color = "white";
                            }
                            var result = SItem.match(/Connection Success/gi);
                            if (result) {
                                cell.style.background = "#09d009";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Failed to Connect/gi);
                            if (result) {
                                cell.style.background = "#fd9369";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Error:/gi);
                            if (result) {
                                cell.style.background = "#fd9369";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/Connection String:/gi);
                            if (result) {
                                cell.style.background = "#fde4c8";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/ModulesToLoad:/gi);
                            if (result) {
                                cell.style.background = "#76f7d8";
                                cell.style.color = "black";
                            }
                            var result = SItem.match(/ASSESSMENT SET:/gi);
                            if (result) {
                                cell.style.background = "rgb(17, 118, 249)";
                                cell.style.color = "white";
                            }
                            var result = SItem.match(/EXECUTING MODULE:/gi);
                            if (result) {
                                cell.style.background = "rgb(2, 69, 155)";
                                cell.style.color = "black";
                            }


                        }
                    }

                    var dtable = document.getElementById("DefSetShowViewSetLogDivNow");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }


            },
            error: function() {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        });


    }

}






$("#QueryChatGPTButton").click(function(e) {

    var NewChakkarNow = NewGolChakkar + ChatGPTImg;
    document.getElementById("searchChatGPTScriptContNow").innerHTML = NewChakkarNow;

    var gptprompt = document.getElementById("ThisOneToSeaerchForCHATGPT").value;
    e.preventDefault();
    $.ajax({
        url: '/openaigpt3', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        data: {
            'gptprompt': gptprompt,
        },
        success: function(data) {

            //console.log(data.text);
            if (data.text) {
                var array = data.text.split("\n");

                //console.log(array);

                var datatable = document.createElement("table");
                datatable.id = 'ChatGPTResultTableNow'
                datatable.setAttribute('class', 'AUTOTableForViews');

                let res = array;
                var rows = res;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i]

                    if (rows[i] == "" || rows[i] == null) {} else {
                        var row = datatable.insertRow(-1);
                        var cell = row.insertCell(-1);
                        cell.innerHTML = rows[i];
                    }

                }

                var dtable = document.getElementById("searchChatGPTScriptContNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);
            } else {
                var SomeErrors = '<div style="margin-left: auto;margin-right: auto;width: 159px;height: 28px;color: red;font-size: 28px;"><p>Some Errors!</p></div><div style="margin-left: auto;margin-right: auto;width: 20%;height: 100px;"><img src="/images/ChatGPT.png" class="features-img-one wow fadeInDown" alt="Features Image" style="visibility: visible; animation-name: fadeInDown; max-width: 103%; padding-top: 1px;margin-top: 15px;"><p>Powered By ChatGPT</p></div>'
                document.getElementById("searchChatGPTScriptContNow").innerHTML = SomeErrors;
            }

        }
    })
});

$("#IDPickModulesToBeSelectedDiv").click(function(e) {

    document.getElementById("ShowAddSelModWindowsNow").style.display = "block";
    e.preventDefault();

    var userId = document.getElementById("LoggedInUserName").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;
    e.preventDefault();

    var SelectedTargetNow = document.getElementById("NewModModuleTarget").value;

    document.getElementById("ssRRssRefCircleForViewModuless").style.display = "inline-block";

    $.ajax({
        url: '/CallLoadPSModToSelect', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewModulesFromServerButton"
        },
        success: function(data) {

            var datatable = document.createElement("table");
            datatable.id = 'SelectPSModulesTableNow'
            datatable.setAttribute('class', 'SummaryTableClassforModulesSet');

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0].replace(/[\r\n]+/gm, "");
                var CheckSRow = cells[1];

                if (CheckFRow == "" || CheckFRow == null) {} else {

                    if (CheckFRow == "ModuleName") {

                        var row = datatable.insertRow(-1);

                        var ThisMarkUnAll = '<input id="MarkAllModulesInGrid" type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;"></input>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = ThisMarkUnAll;
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "29px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "PowerShell Module";
                        cell.className = "TABLEHeaderClass";

                    } else {

                        var SItem = cells[3].replace(/[\r\n]+/gm, "");

                        var row = datatable.insertRow(-1);

                        var ResRepl = cells[0].replaceAll(' ', "_");
                        var HostCheckBox = '<input id=' + ResRepl + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                        var cell = row.insertCell(-1);
                        cell.innerHTML = HostCheckBox;
                        cell.style.textAlign = "left";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];

                    }
                }
            }

            var dtable = document.getElementById("AddSelModNowDIVNN");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            //AddTenantsToBoxFunction()

            document.getElementById("ssRRssRefCircleForViewModuless").style.display = "none";

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

});

$("#CloseSSSModuleCloseViewMod").click(function(e) {

    document.getElementById("ShowAddSelModWindowsNow").style.display = "none";

});

$("#ConStringCloseSSSModuleCloseViewMod").click(function(e) {

    document.getElementById("ShowconStringDBox").style.display = "none";

});

$("#AddSelectedModToList").click(function(e) {

    //datatable = datatable + result;

    var datatable = "";

    var AllHostsValues = [];
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("SelectPSModulesTableNow");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;

        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        var CheckThisHost = document.getElementById(ThisIDNow).checked;

        var ThisModNameNow = rows[i].getElementsByTagName("td")[1].innerHTML;
        var AllIDsNow = ThisModNameNow + "#";

        if (CheckThisHost == true) {
            datatable = datatable + AllIDsNow;
        }
    }

    var FinalHostValuesNow = datatable;
    //console.log(FinalHostValuesNow);
    document.getElementById("WhichPModuleName").value = datatable;
    document.getElementById("ShowAddSelModWindowsNow").style.display = "none";

});


$("#RefOnlyAllVSetsButAllViesOnnly").click(function(e) {

    UpdateViewTableInLeftFunction();

});

$("#RefOnlyAllVSetsButAssSetsNow").click(function(e) {

    UpdateModulesSetTableInLeftFunction();

});

$("#RefOnlyDefSetNowAL").click(function(e) {

    UpdateModulesSetTableInLeftFunction();

});

$("#RefOnlyAllVSetsBut").click(function(e) {

    UpdateViewTableInLeftFunction();

});

$("#ConvertSCriptNowForUser").click(function(e) {

    var convertedIntoArray = [];
    $("table#ChatGPTResultTableNow tr").each(function() {
        var rowDataArray = [];
        var actualData = $(this).find('td');
        if (actualData.length > 0) {
            actualData.each(function() {
                rowDataArray.push($(this).text());
            });
            convertedIntoArray.push(rowDataArray);
        }
    });

    var FinalHostValuesNow = convertedIntoArray;
    var TRPKey = document.getElementById("TRPKeyN").value;

    document.getElementById("FootMessageID").innerHTML = "Converting Script. Please wait...";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    e.preventDefault();
    $.ajax({
        url: '/CallConvertChatGPTSCript', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'AllHostsValues': FinalHostValuesNow
        },
        success: function(data) {

            //var array = data.message.split("\n");
            document.getElementById("CDPCodeBoxWithCred").value = data.message;
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        },
        complete: function(xrh, status) {

            document.getElementById("FootMessageID").innerHTML = status.toUpperCase() + "!";
            document.getElementById("GettingReadyID").style.display = "none";
            setTimeout(function() {
                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            }, 1500);
        }
    });


})

function CheckModTenTargetTypeNow() {

    var ThisModuleAndOther = document.getElementById("AvailableModulesNowToBeAddedInSeet").value;
    var ModuleTenantNow = document.getElementById("SelectTenantForSelectedModulesD").value;

    var resOne = ThisModuleAndOther.split(':');
    var ModuleNameNow = resOne[0];
    var FinalModuleTargetNow = resOne[1];

    var SItem = FinalModuleTargetNow.replace(/[\r\n]+/gm, "");
    var result = SItem.match(/Azure/gi);
    if (result) {
        document.getElementById("WhichTenToSelectAWhenAddingSingle").innerHTML = "Select Azure Tenant";
    }
    var result = SItem.match(/Office/gi);
    if (result) {
        document.getElementById("WhichTenToSelectAWhenAddingSingle").innerHTML = "Select Office Tenant";
    }

}

$("#IDPickModulesToBeSelectedDivNEW").click(function(e) {

    document.getElementById("ShowconStringDBox").style.display = "block";
    e.preventDefault();

    var userId = document.getElementById("LoggedInUserName").innerHTML;
    var TRPKey = document.getElementById("TRPKeyN").value;
    e.preventDefault();

    var SelectedTargetNow = document.getElementById("NewModModuleTarget").value;

    document.getElementById("ConssRRssRefCircleForViewModuless").style.display = "inline-block";

    $.ajax({
        url: '/CallLoadConString', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "SOCKETRefAllNewModulesFromServerButton"
        },
        success: function(data) {

            var datatable = document.createElement("table");
            datatable.id = 'SelectPSModulesTableNowConString'
            datatable.setAttribute('class', 'SummaryTableClassforModulesSet');

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split("#");

                var CheckFRow = cells[0].replace(/[\r\n]+/gm, "");
                var CheckSRow = cells[1];

                if (CheckFRow == "" || CheckFRow == null) {} else {

                    if (CheckFRow == "ConString") {

                        var row = datatable.insertRow(-1);

                        var ThisMarkUnAll = '<input id="MarkAllModulesInGrid" type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;"></input>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = ThisMarkUnAll;
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "29px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Connection String";
                        cell.className = "TABLEHeaderClass";

                    } else {

                        var row = datatable.insertRow(-1);

                        var ResRepl = cells[0].replaceAll(' ', "_");
                        var HostCheckBox = '<input id=' + ResRepl + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                        var cell = row.insertCell(-1);
                        cell.innerHTML = HostCheckBox;
                        cell.style.textAlign = "left";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];

                    }
                }
            }

            var dtable = document.getElementById("ConStringAddSelModNowDIVNN");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            //AddTenantsToBoxFunction()

            document.getElementById("ConssRRssRefCircleForViewModuless").style.display = "none";

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        }
    });

});


$("#ShowModDetIfAlreadyAvailable").click(function(e) {

    var ThisMsg = "Loading...."
    document.getElementById("FootMessageID").innerHTML = ThisMsg;
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "none";

    var FinalModName = document.getElementById("NewModNameNow").value;

    $.ajax({
        url: '/CallLoadCDModules', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            "type": "Socket-Call-DCModulesSEVEN",
            'userId': FinalUserNameNow,
            'FinalModName': FinalModName
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            document.getElementById("SuperNovaStatusID").style.color = "red";
        },
        complete: function(xrh, status) {

            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";

        }
    });

    var TRPKey = document.getElementById("TRPKeyN").value;
    e.preventDefault();
    $.ajax({
        url: '/CallGetModDetails', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'ThisModName': FinalModName,
            'type': "CallSocket-LoadModuleCodeNowInAnotherBox",
            'userId': userId
        },
        success: function(data) {

        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });


});
$("#SelConSAddSelectedModToList").click(function(e) {

    //datatable = datatable + result;

    var datatable = "";

    var AllHostsValues = [];
    var table, rows, i, x, y, shouldSwitch;
    table = document.getElementById("SelectPSModulesTableNowConString");
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {

        x = rows[i].getElementsByTagName("td")[0].innerHTML;

        var ThisNow = x.split('"');
        var ThisIDNow = ThisNow[1];
        var CheckThisHost = document.getElementById(ThisIDNow).checked;

        var ThisModNameNow = rows[i].getElementsByTagName("td")[1].innerHTML;
        var AllIDsNow = ThisModNameNow + "#";

        if (CheckThisHost == true) {
            datatable = datatable + AllIDsNow;
        }
    }

    var FinalHostValuesNow = datatable;
    //console.log(FinalHostValuesNow);
    document.getElementById("ModuleConnectionStringNow").value = datatable;
    document.getElementById("ShowconStringDBox").style.display = "none";

});

$("#TestSPNButton").click(function(e) {

    var SPNGUID = document.getElementById("SPNGUID").value;
    var SPNPass = document.getElementById("SPNPass").value;
    var SPNSUBID = document.getElementById("SPNSUBID").value;
    var SPNTenantID = document.getElementById("SPNTenantID").value;
    var TRPKey = document.getElementById("TRPKeyN").value;

    if (SPNGUID == "" || SPNGUID == null) {

        var ThisMsg = "Please fill all details!"
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
            clearInterval(MyTimerFooter);
        }

    } else {

        document.getElementById("TestingSPNCircleA").style.display = "block";

        // Now pass Tenant Values here
        $.ajax({
            url: '/TestSPNCreds', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'SPNGUIDNow': SPNGUID,
                'SPNPassNow': SPNPass,
                'SPNSubIDNow': SPNSUBID,
                'SPNTenIDNow': SPNTenantID,
                'TRPKey': TRPKey
            },
            success: function(data) {

                var SItem = data.message.replace(/[\r\n]+/gm, "");
                var FinalItem = SItem.replaceAll(' ', '');

                if (data.message) {
                    if (FinalItem == "Failed") {
                        document.getElementById("TestingSPNCircleA").style.display = "none";

                        var ThisMsg = "FAILED!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
                        }

                    }
                    if (FinalItem == "Success") {

                        document.getElementById("TestingSPNCircleA").style.display = "none";

                        var ThisMsg = "SUCCESS!"
                        document.getElementById("FootMessageID").innerHTML = ThisMsg;
                        document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                        document.getElementById("GettingReadyID").style.display = "none";
                        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 1500);

                        function FunctionFooterDIV() {
                            document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                            clearInterval(MyTimerFooter);
                        }


                    }
                } else {
                    document.getElementById("TestingSPNCircleA").style.display = "none";

                }
            },
            error: function() {
                alert("Error");
                document.getElementById("TestingSPNCircleA").style.display = "none";
            }
        });

        document.getElementById("TestingSPNCircleA").style.display = "none";
    }
});


$("#RemoveAllViesFromExSet").click(function(e) {

    var ThisToReset = '<table id="AlreadyViewSetTableNow" class="SummaryTableClassforAzBilling"><tbody><tr class="AllDivsAnimationNow"><td style="background-color: white; color: rgb(6, 109, 149); text-align: left; letter-spacing: 0px; font-weight: 600; border-bottom: 2px solid rgb(204, 200, 200); position: sticky; z-index: 22; top: 0px; font-size: 12px; font-family: Calibri;" class="AllDivsAnimationNow">ViewName</td><td style="background-color: white; color: rgb(6, 109, 149); text-align: left; letter-spacing: 0px; font-weight: 600; border-bottom: 2px solid rgb(204, 200, 200); position: sticky; z-index: 22; top: 0px; font-size: 12px; font-family: Calibri;width:100px;text-align: center;"class="AllDivsAnimationNow">Remove From Set</td></tr></tbody></table>'
    document.getElementById("AllAddedViewsInSetDiv").innerHTML = ThisToReset;

});

$("#ExportColsTableFromSView").click(function(e) {

    e.preventDefault();

    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById('LoadedViewDataTableNowSingleColumn'); // id of table

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

$("#DefaultSetExeExportButton").click(function(e) {

    e.preventDefault();

    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange;
    var j = 0;
    tab = document.getElementById('ModuleDataTableForAllModsModulesSet'); // id of table

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


$("#ModuleTestBoxButton").click(function(e) {

    document.getElementById("FootMessageID").innerHTML = "Function not available in this version...";
    document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
    document.getElementById("GettingReadyID").style.display = "initial";

    setTimeout(function() {
        document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
    }, 1500);

});

$("#ApplicableAllTitlesItemIDHideLeftPanel").click(function(e) {

    if (document.getElementById("ApplicableAllTitlesItemIDHideLeftPanel").checked == true) {
        document.getElementById("SingleViewTenantName").style.textDecoration = "line-through";
    } else {
        document.getElementById("SingleViewTenantName").style.textDecoration = "none";
    }


});



function checkwhichonenow() {

    $(".cat1").hide();
}


$("#PullMenuForcolToHideDispForDefault").click(function(e) {

    e.preventDefault();
    document.getElementById("ColHideShowPanelNowDivForDefSet").style.display = "block";
});
$("#CloseShowHideColPaneForDefSet").click(function(e) {

    e.preventDefault();
    document.getElementById("ColHideShowPanelNowDivForDefSet").style.display = "none";
});

$("#UploadCancelButton").click(function(e) {

    document.getElementById("FileUploadBox").style.display = "none";

});

$("#UploadAssResultToServer").click(function(e) {

    document.getElementById("FileUploadBox").style.display = "block";

});



$("#UpdaetNowLoadedNTEOTen").click(function(e) {

    var ThisNow = document.getElementById("ThisIsTenantThatNeedsTobeEdited").innerHTML;
    var res = ThisNow.split(":")
    var ThisTenName = res[0];
    var ThisTenType = res[1];

    document.getElementById("ConfirmDBox").style.display = "block";
    var MSGNow = "Do you want to update Tenant Information for Tenant: " + ThisTenName;
    document.getElementById("TakeActionMSG").innerHTML = MSGNow;
    document.getElementById("ActionDoWhat").innerHTML = "UPDATETENINFONOW";

});

$(document).ready(function() {
    $('#uploadForm').submit(function() {
        $("#UploadstatusNow").empty().text("File is uploading...");

        $(this).ajaxSubmit({

            error: function(xhr) {
                status('Error: ' + xhr.status);
            },

            success: function(response) {
                console.log(response)
                $("#UploadstatusNow").empty().text(response);
            }
        });

        return false;
    });
});

function ShowHideColFunctionNowForDetSet(ThisID) {

    var ThisNN = ThisID.split(":");
    var FinalVNumber = ThisNN[1];

    var v = FinalVNumber;
    $('#ModuleDataTableForAllModsModulesSet tr > *:nth-child(' + v + ')').toggle();

}


function ShowHideColFunctionNow(ThisID) {

    var ThisNN = ThisID.split(":");
    var FinalVNumber = ThisNN[1];

    var v = FinalVNumber;
    $('#LoadedViewDataTableNowSingleColumn tr > *:nth-child(' + v + ')').toggle();

}




$("#PullMenuForcolToHideDisp").click(function(e) {

    document.getElementById("ColHideShowPanelNowDiv").style.display = "block";

});
$("#CloseShowHideColPane").click(function(e) {

    document.getElementById("ColHideShowPanelNowDiv").style.display = "none";

});

$("#ShowDetLogCBox").click(function(e) {

    document.getElementById("ShowLogsForViewNow").click();

});

$("#ViewSetShowDetLogCBox").click(function(e) {

    document.getElementById("RefreshViewLogForViewSetNN").click();

});



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Socket Thing STARTS here
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var socket = io({
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 99999
});

var TRPKey = document.getElementById("TRPKeyN").value;
var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
var res = ThisLUserNow.split("@");
var FinalUserNameNow = res[0];
var userId = FinalUserNameNow;

function myFunction() {

    // Get user logged in User email now
    $.ajax({
        url: '/ms/authUser',
        type: "GET",
        async: false,
        datatype: "JSON",
        success: function(data) {
            if (data.length == 0) {
                window.location.href = '/';
            }
            document.getElementById("LoggedInUserName").innerHTML = data;
        }
    })

    var EmailIDNow = document.getElementById("LoggedInUserName").innerHTML;
    // Get user logged in User TRPKey here
    $.ajax({
        url: '/FirstLogin', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        datatype: "JSON",
        data: {
            'EmailID': EmailIDNow
        },
        success: function(data) {

            if (data.message) {

                var SItem = data.message.replace(/[\r\n]+/gm, "");
                var FinalItem = SItem.replaceAll(' ', '');
                console.log("Response RECD:" + FinalItem);

                var RC = FinalItem.split("-")
                var CheckThisNow = RC[0];
                var RetTRPKeyNow = RC[1];
                document.getElementById("TRPKeyN").value = RetTRPKeyNow;

            }
        },
        error: function() {}
    });

    var TRPKey = document.getElementById("TRPKeyN").value;
    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];
    var userId = FinalUserNameNow;

    // Here collect Stats and other things
    document.getElementById("InitialScreenPane").style.display = "block";
    document.getElementById("InitCircleNow").style.display = "block";
    document.getElementById("RefAllModulesNowButton").click();
    // Here collects Stats

    var TRPKey = document.getElementById("TRPKeyN").value;
    $.ajax({
        url: '/CallCollectStats', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: true,
        timeout: 50000,
        data: {
            'TRPKey': TRPKey,
            'userId': userId,
            'type': "SocketCALL-LoadStats"
        },
        success: function(data) {


        },
        error: function() {
            document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
        }
    });
    //document.getElementById("CDAddNewTenant").click();

}

socket.emit('join', { userId: userId });
socket.on('disconnect', function() {

    socket.emit('join', { userId: userId });
});

socket.on('message', function(data) {

    if (data && data.message) {

        if (data.type === "SocketCALL-LoadStats") {

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var ThisItem = cells[0];
                var ThisValue = cells[1];

                if (ThisItem == "Total Default Sets") {
                    document.getElementById("INTTotDefSets").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Assessment Sets") {
                    document.getElementById("INTTotAssSets").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Views") {
                    document.getElementById("iNTTOTviews").innerHTML = ThisValue;
                }
                if (ThisItem == "Total View Sets") {
                    document.getElementById("INTTotVSets").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Auth Templates") {
                    document.getElementById("INTTotAuthTemps").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Email Templates") {
                    document.getElementById("INTTotEmailTemps").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Tech Modules") {
                    document.getElementById("INTTotModules").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Admins") {
                    document.getElementById("INTTOTAdmins").innerHTML = ThisValue;
                }
                if (ThisItem == "Total Tenants") {
                    document.getElementById("INTTotTens").innerHTML = ThisValue;
                }

            }

            document.getElementById("InitCircleNow").style.display = "none";

        }

        if (data.type === "SocketCall-TemplatesTHREE") {

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

        }

        if (data.type === "SocketCall-TemplatesFOUR") {

            if (data.message) {

                var ViewSetTenants = document.getElementById("AsseProcSetModuleNotifyEmailTemplateForProcAgent");
                var options = document.querySelectorAll('#AsseProcSetModuleNotifyEmailTemplateForProcAgent option');
                options.forEach(o => o.remove());

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
        }

        if (data.type === "SocketCall-TemplatesTWO") {

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
                    if (CheckFRow == "" || CheckFRow == null) {

                    } else {

                        var CheckSRow = cells[1];

                        var SItem = CheckSRow.replace(/[\r\n]+/gm, "");

                        if (SItem == "Authorization Template") {
                            var optionR = document.createElement("option");
                            optionR.text = cells[0];
                            xLeft.add(optionR);
                        }
                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        }

        if (data.type === "SocketCall-INITTemplates") {

            if (data.message == "FileNotFound") {
                var ThisNow = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: none; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;text-align: center;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;text-align: center;">Not Templates Created Yet!</p></div>'
                document.getElementById("AllTemplatesDiv").innerHTML = ThisNow;

            } else {


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

                        if (CheckFRow == "TemplateName") {

                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";
                            cell.style.width = "146px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "100px";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Reset";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "100px";
                            cell.style.cursor = "pointer";


                        } else {

                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.cursor = "pointer";

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
                            cell.style.cursor = "pointer";

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:130px; padding:6px;" onclick="RemoveCurrentTemplateFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Template</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;
                            cell.style.cursor = "pointer";

                            FinalServerName = cells[0] + "#" + SItem;
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var ResetCurTemp = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:130px; padding:6px;" onclick="ResetCurrentTemplateNow(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Reset Template</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ResetCurTemp;
                            cell.style.cursor = "pointer";

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
                                    'TemplateType': TemplateType,
                                    'type': "CallSocket-GetEmailTemplateAttr",
                                    'userId': userId
                                },
                                success: function(data) {

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
                                    'TemplateType': TemplateType,
                                    'type': "CallSocket-GetAuthTempATTR",
                                    'userId': userId
                                },
                                success: function(data) {

                                },
                                error: function() {
                                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                }
                            });

                        }
                    }
                }

            }

        }

        if (data.type === "Socket-LoadSingleColumnViewONE") {

            if (data.message) {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var FinalViewName = data.FinalViewName;

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

        }

        if (data.type === "Socket-LoadSingleColumnViewTWO") {

            if (data.message == "FileNotFound") {
                var ThisNow = '<div id="AllViewsDiv" style="display: block; overflow: auto; margin-left: 20px;" class="AllDivsAnimationNow"><p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No View Found. Please create Views...</span></p></div>'
                document.getElementById("AllViewsShownDiv").innerHTML = ThisNow;

            } else {

                var AllViewsInBox = document.getElementById("AvailableviewsForAllNow");
                var options = document.querySelectorAll('#AvailableviewsForAllNow option');
                options.forEach(o => o.remove());

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
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "300px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "View Type";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "15%";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "View Module";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "500px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "View Tenant";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "100px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "80px";


                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.cursor = "pointer";

                            if (cells[1] == "Single Column") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align:center;">Single Column</div>'
                                var optionR = document.createElement("option");
                                optionR.text = cells[0];
                                AllViewsInBox.add(optionR);
                            }
                            if (cells[1] == "View Set") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #e2ff7c;font-weight: 600;text-align: center;">View Set</div>'

                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;
                            cell.style.cursor = "pointer";

                            if (cells[1] == "View Set") {
                                var TotViewsDivNow = '<div style="background: white;width: 92px;text-align: center;padding: 5px;border: 1px solid #cac5c5;border-radius: 7px;font-weight: 600;color: #757171;box-shadow: 2px 1px 4px #bbc0c4;">' + cells[2] + '</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = TotViewsDivNow;
                            } else {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];
                            }
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];
                            cell.style.cursor = "pointer";

                            var ThisUserToRem = cells[0];
                            var FinalItemName = ThisUserToRem.replaceAll(' ', '_');
                            var RemoveUser = '<button id = ' + FinalItemName + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #555454;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveViewNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove View</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveUser;
                            cell.style.cursor = "pointer";

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
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Add To Set";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "100px";
                            cell.style.textAlign = "center";

                        } else {

                            if (CheckSRow == "Single Column") {

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

                }

                var dtable = document.getElementById("AvaViewDDNTRRTT");
                dtable.innerHTML = "";
                dtable.appendChild(datatableVSet);

                //$('#AllViewsShownDiv tr > *:nth-child(2)').hide();                   


                var tableRT = document.getElementById('ViewsTableNowForOther');
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

                        var ThisViewName = rowSelected.cells[0].innerHTML;
                        var ThisVTypeNow = rowSelected.cells[1].innerHTML;

                        var text = ThisVTypeNow;
                        var result = text.match(/View Set/gi);
                        if (result) {
                            document.getElementById("ThisSelectedViewSetNowIn").innerHTML = ThisViewName;

                            var TRPKey = document.getElementById("TRPKeyN").value;
                            $.ajax({
                                url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: false,
                                timeout: 50000,
                                data: {
                                    'TRPKey': TRPKey,
                                    'userId': userId
                                },
                                success: function(data) {

                                    if (data.message) {

                                        var datatable = document.createElement("table");
                                        datatable.id = 'LoadedVSetTableNow'
                                        datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                                        let res = data.message.replaceAll('"', "");
                                        var rows = res.split("\n");

                                        for (var i = 0; i < rows.length; i++) {
                                            var cells = rows[i].split(",");

                                            var CheckFRow = cells[0];
                                            var CheckSRow = cells[1];

                                            if (CheckFRow == "ViewSet") {

                                                var row = datatable.insertRow(-1);

                                                var cell = row.insertCell(-1);
                                                cell.className = "TABLEHeaderClass";
                                                cell.style.width = "371px";
                                                cell.innerHTML = "View Name";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = "View Tenant";
                                                cell.className = "TABLEHeaderClass";
                                                cell.style.width = "115px";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = "Remove";
                                                cell.className = "TABLEHeaderClass";
                                                cell.style.width = "115px";

                                            }

                                            if (CheckFRow == ThisViewName) {
                                                var row = datatable.insertRow(-1);

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.width = "200px";
                                                cell.style.fontWeight = "500";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[3];

                                                FinalServerName = ThisViewName + ":" + cells[2];
                                                var ReplDataN = FinalServerName.replaceAll(' ', "_");
                                                var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveAViewFromViewSet(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = RemoveModuleNow;

                                            }

                                        }

                                        var dtable = document.getElementById("ThisSelectedVSetDivNowTRR");
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
                        } else {

                            var ThisMsg = "You can only edit a View Set"
                            document.getElementById("FootMessageID").innerHTML = ThisMsg;
                            document.getElementById("ThisMSGFooter").style.marginBottom = "00px";
                            document.getElementById("GettingReadyID").style.display = "none";
                            var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 3000);

                            function FunctionFooterDIV() {
                                document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                                clearInterval(MyTimerFooter);
                            }

                        }


                    }
                }





            }


        }

        if (data.type === "Socket-LoadSingleColumnViewTHREE") {

            if (data.message == "FileNotFound") {
                var RCC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No View Found. Please create Views...</span></p>'
                document.getElementById("AllViewsDiv").innerHTML = RCC;
                document.getElementById("AllViewsSETSDiv").innerHTML = RCC;


            } else {

                var datatableSET = document.createElement("table");
                datatableSET.id = 'CDPViewsSETTable'
                datatableSET.setAttribute('class', 'LeftPaneModulesViewsTableAuto');

                var datatable = document.createElement("table");
                datatable.id = 'CDPViewsTable'
                datatable.setAttribute('class', 'LeftPaneModulesViewsTableAuto');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];
                    var CheckThisModCat = cells[4];

                    var CheckVTypeNow = cells[1];

                    if (CheckVTypeNow == "Single Column") {

                        if (CheckFRow == "" || CheckFRow == null || CheckFRow == "Module") {} else {

                            if (CheckFRow == "ViewName") {

                            } else {

                                var row = datatable.insertRow(-1);

                                var ThisViewSetName = cells[0];
                                var AddOrNot = "Yes";

                                var tablec, rowsc, ic, x, y, shouldSwitch;
                                tablec = document.getElementById("RBACDataTableID");
                                if (tablec == null) {} else {

                                    rowsc = tablec.rows;
                                    for (ic = 1; ic < (rowsc.length); ic++) {

                                        var ThisDataNow = rowsc[ic].getElementsByTagName("td")[0].innerHTML;
                                        if (ThisDataNow == "" || ThisDataNow == null) {} else {

                                            var resn = ThisDataNow.split(",");
                                            var EntryType = resn[1];
                                            var EntryName = resn[2];
                                            var EntryStatus = resn[3];

                                            if (EntryType == "VIEW/VIEW SET") {
                                                if (EntryName == ThisViewSetName) {
                                                    if (EntryStatus == "Unavailable") {
                                                        AddOrNot = "No";
                                                    } else {
                                                        AddOrNot = "Yes";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (AddOrNot == "Yes") {

                                    var IconClass = '<i class="fa fa-eye" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 11px;color:white;"></i>'

                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = IconClass + cells[0];
                                    cell.style.color = "rgb(193, 192, 192)";
                                    cell.style.border = "none";
                                    cell.style.paddingBottom = "0px";
                                    cell.style.fontSize = "11px";
                                    cell.style.fontFamily = "Roboto";
                                    cell.style.fontWeight = "500";
                                    cell.style.lineHeight = "19px";
                                    cell.style.background = "#2a394f";
                                    cell.style.width = "234px";
                                    cell.style.maxWidth = "234px";

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
                                    //cell.style.width = "200px";

                                }
                            }



                        }
                    }

                    if (CheckVTypeNow == "View Set") {

                        if (CheckFRow == "" || CheckFRow == null || CheckFRow == "Module") {} else {

                            if (CheckFRow == "ViewName") {

                            } else {

                                var row = datatableSET.insertRow(-1);

                                var ThisViewSetName = cells[0];
                                var AddOrNot = "Yes";

                                var tablec, rowsc, ic, x, y, shouldSwitch;
                                tablec = document.getElementById("RBACDataTableID");
                                if (tablec == null) {} else {
                                    rowsc = tablec.rows;
                                    for (ic = 1; ic < (rowsc.length); ic++) {

                                        var ThisDataNow = rowsc[ic].getElementsByTagName("td")[0].innerHTML;
                                        if (ThisDataNow == "" || ThisDataNow == null) {} else {

                                            var resn = ThisDataNow.split(",");
                                            var EntryType = resn[1];
                                            var EntryName = resn[2];
                                            var EntryStatus = resn[3];

                                            if (EntryType == "VIEW/VIEW SET") {
                                                if (EntryName == ThisViewSetName) {
                                                    if (EntryStatus == "Unavailable") {
                                                        AddOrNot = "No";
                                                    } else {
                                                        AddOrNot = "Yes";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (AddOrNot == "Yes") {

                                    var IconClass = '<i class="fa fa-eye" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 11px;color:white;"></i>'

                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = IconClass + cells[0];
                                    cell.style.color = "rgb(193, 192, 192)";
                                    cell.style.border = "none";
                                    cell.style.paddingBottom = "0px";
                                    cell.style.fontSize = "11px";
                                    cell.style.fontFamily = "Roboto";
                                    cell.style.fontWeight = "500";
                                    cell.style.lineHeight = "19px";
                                    cell.style.background = "#2a394f";
                                    cell.style.width = "234px";
                                    cell.style.maxWidth = "234px";

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

                                    var row = datatableSET.insertRow(-1);
                                    var cell = row.insertCell(-1);

                                    cell.innerHTML = "Type: " + FinalT;
                                    cell.style.color = "#a6a6a6";
                                    cell.style.paddingTop = "0px";
                                    cell.style.background = "#2a394f";
                                    //cell.style.width = "200px";

                                }
                            }



                        }
                    }
                }

                var dtable = document.getElementById("AllViewsDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                var dtable = document.getElementById("AllViewsSETSDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatableSET);
            }
        }

        if (data.type === "SocketCall-LoadSingleViewDATA") {

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

                    let res = data.message;
                    var rows = res.split("\n");
                    var TotRowsNow = 0;

                    var AllColCheckBoxes = "";
                    var ColNumberNow = 1;

                    var datatable = document.createElement("table");
                    datatable.id = 'LoadedViewDataTableNowSingleColumn'

                    var IsACompSetView = "No";
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var CheckFRow = cells[2];
                        if (CheckFRow == "Severity") {
                            IsACompSetView = "Yes";
                        }
                    }

                    if (IsACompSetView == "Yes") {
                        datatable.setAttribute('class', 'FixedTableForViewsONLYForAssessment');
                    } else {
                        datatable.setAttribute('class', 'FixedTableForViews');
                    }

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var LastRefDateNow = "";
                        if (CheckFRow == "LASTREFDATE") {
                            LastRefDateNow = cells[1];
                            document.getElementById("ViewLastUpdatedDateNow").innerHTML = "Last Updated: " + LastRefDateNow;
                        } else {

                            var ThisClassName = cells[0];

                            ++TotRowsNow;
                            var row = datatable.insertRow(-1);
                            row.setAttribute('class', ThisClassName);

                            for (var j = 0; j < cells.length; j++) {
                                var CheckIfBlank = cells[0]
                                if (CheckIfBlank == "" || CheckIfBlank == null) {} else {

                                    var SItem = cells[j].replace(/[\r\n]+/gm, "");
                                    var FinalToAppend = SItem;

                                    if (SItem == " High") {
                                        FinalToAppend = '<div class="AllViewHighTEXTClass"><i class="fa fa-times-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>High</div>'
                                    }
                                    if (SItem == " Passed") {
                                        FinalToAppend = '<div class="AllViewPassedTEXTClass"><i class="fa fa-check-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>Passed</div>'
                                    }
                                    if (SItem == " Medium") {
                                        FinalToAppend = '<div class="AllViewMediumTEXTClass"><i class="fa fa-times-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>Medium</div>'
                                    }
                                    if (SItem == " Low") {
                                        FinalToAppend = '<div class="AllViewLowTEXTClass"><i class="fa fa-times-circle" style="font-size: 12px;margin-right: 5px;" aria-hidden="true"></i>Low</div>'
                                    }
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = FinalToAppend;

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

                                        var ThisNameNow = FinalToAppend;
                                        var ReplDataN = ThisNameNow.replaceAll(' ', "_") + ":" + ColNumberNow.toString();
                                        var ThisCDiv = '<div style="border: 0px solid #dbd4d4;border-radius: 5px;margin-top: 10px;margin-top: 2px;width: 100%;height: 23px;margin-left: 23px;background: white;margin-left: 0;margin-right: auto;box-shadow: none !important;" class="AllDivsAnimationNow"><input type="checkbox" onclick="ShowHideColFunctionNow(id)" checked = "true" id="ID_REPLCHECKBOX" name="ID_REPLCHECKBOX" value="Boat" style="margin-left: 11px;font-size: 12px;float: none;font-size: 11px !important;height: 13px;box-shadow: none !important;" class="SelectClassForAllSelects"><label for="ID_REPLCHECKBOX" style="margin: 0px;padding: 0px;padding-left: 3px;font-size: 12px;color: #686565;font-weight: 600;margin-left: auto;margin-right: auto;">THISTITLENAME</label></div>'
                                        var Thistext = ThisCDiv;

                                        var result = Thistext.replaceAll("ID_REPLCHECKBOX", ReplDataN).replaceAll("THISTITLENAME", FinalToAppend);

                                        AllColCheckBoxes = AllColCheckBoxes + result;
                                        ++ColNumberNow;

                                    }


                                }
                            }
                        }
                    }

                    var dtable = document.getElementById("SingleViewDATATable");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("AllCheckBoxesDivNow").innerHTML = AllColCheckBoxes;

                    var TotNow = 0;
                    var tablec, rowsc, ic, x, y, shouldSwitch;
                    tablec = document.getElementById("LoadedViewDataTableNowSingleColumn");
                    if (tablec == null) {} else {
                        rowsc = tablec.rows;
                        for (ic = 1; ic < (rowsc.length); ic++) {
                            ++TotNow;
                        }
                    }

                    if (TotNow == 0) {
                        var ViewNoDataDiv = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: left; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i><br></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;">View has not been executed or not refreshed. Please click on Refresh icon to refresh data or wait for Background Refresh to trigger.</p></div>'
                        document.getElementById("SingleViewDATATable").innerHTML = ViewNoDataDiv;
                    }

                    SingleViewViewTypeChartFunction()

                }
            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }



        }

        if (data.type === "Socket-Call-DCModulesONE") {

            if (data.message) {

                var datatable = document.createElement("table");
                datatable.id = 'ViewModulesTableNowWhenAdding'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {} else {

                        var row = datatable.insertRow(-1);

                        if (CheckFRow == "DynamicPack") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "117px";

                        } else {

                            var SItem = cells[1].replace(/[\r\n]+/gm, "");

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.cursor = "pointer";

                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

                        }
                    }
                }

                var dtable = document.getElementById("WhenAddingNewSingleViewAllModulesNowD");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

                document.getElementById("WhenAddingNewRefCircleForViewModuless").style.display = "none";

                var tableRTNN = document.getElementById('ViewModulesTableNowWhenAdding');
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
                        var FinalModNameNow = ThisModNameNow.replace(/[\r\n]+/gm, "");
                        var ThisModType = rowSelected.cells[1].innerHTML;
                        var FinalModTargetNow = ThisModType.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

                        var ThisModType = rowSelected.cells[1].innerHTML;
                        var SItem = ThisModType.replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Azure/gi);
                        if (result) {
                            document.getElementById("WhichTenToSelectAWhenAddingSingle").innerHTML = "Select Azure Tenant";
                            document.getElementById("ThisSelModWhenAddingToAlSet").innerHTML = FinalModNameNow + ":Azure";
                        }
                        var result = SItem.match(/Office/gi);
                        if (result) {
                            document.getElementById("WhichTenToSelectAWhenAddingSingle").innerHTML = "Select Office Tenant";
                            document.getElementById("ThisSelModWhenAddingToAlSet").innerHTML = FinalModNameNow + ":All Office";
                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }



        }

        if (data.type === "Socket-Call-DCModulesTWO") {

            var CurFilter = document.getElementById("FilterModToDisplay").value;

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

                    if (CheckFRow == "DynamicPack") {

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[0];
                        cell.className = "TABLEHeaderClass";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "86px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module Type";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "86px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Edit Module";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "100px";

                    } else {

                        var SItem = cells[4].replace(/[\r\n]+/gm, "");
                        var DoOrNot = "No";
                        if (CurFilter == "All Modules") {
                            DoOrNot = "Yes";
                        } else {
                            if (SItem == CurFilter) {
                                DoOrNot = "Yes";
                            }
                        }
                        if (DoOrNot == "Yes") {
                            ModNameID = cells[0];
                            var FinalModNameID = ModNameID.replaceAll(' ', "_");

                            var SItem = cells[4].replace(/[\r\n]+/gm, "");
                            if (SItem == "Default Set") {
                                var ModDes = cells[3];
                                var FinalEntNow = '<div id = ' + FinalModNameID + ' style="line-height: 14px;font-size: 12px;font-weight: 500;padding-left: 8px;">' + cells[0] + '</div><br><div style="margin-left: 6px;margin-right: 10px;font-weight: 400;color: #7d7d7a;line-height: 12px;font-style: italic;"><span style="background: transparent;/*! margin-left: 10px; */padding-right: 10px;">' + ModDes + '</span></div>'
                            } else {
                                var ModDes = cells[3];
                                var FinalEntNow = '<div id = ' + FinalModNameID + ' style="line-height: 14px;font-size: 12px;font-weight: 500;color: #066d95;padding-left: 8px;">' + cells[0] + '</div><br><div style="margin-left: 6px;margin-right: 10px;font-weight: 400;color: #7d7d7a;line-height: 12px;font-style: italic;"><span style="background: transparent;/*! margin-left: 10px; */padding-right: 10px;">' + ModDes + '</span></div>'
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = FinalEntNow;
                            cell.id = FinalModNameID;

                            var SItem = cells[1].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #4c4c4c;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:130px; padding:6px;" onclick="RemoveCurrentlySelectedModuleFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Module</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                            var EditCodeForMod = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #4c4c4c;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 0px; margin-top: 0px;outline:none;float:none; width:89px; padding:6px;" onclick="EditCodeForSelectedModNow(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Edit Code</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = EditCodeForMod;
                        }
                    }
                }
            }

            var dtable = document.getElementById("AllModulesTableDivHere");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            document.getElementById("TotDefModulesHere").innerHTML = TotDefMods;
            document.getElementById("TotADAssModulesHere").innerHTML = TotADMods;
            document.getElementById("TotOfficeAssModulesHere").innerHTML = TotOfficeMods;
            document.getElementById("TotAVDAssModulesHere").innerHTML = TotAVDMods;

        }

        if (data.type === "Socket-Call-DCModulesTHREE") {


            var SelModTypeNow = document.getElementById("AddModSelectWhichAssTech").value;

            var datatable = document.createElement("table");
            datatable.id = 'AllModulesSetTableNowS'
            datatable.setAttribute('class', 'SummaryTableClassforModulesSet');

            var DefTen = document.getElementById("RightSideLoadedTens").value;

            let res = data.message.replaceAll('"', "");
            var rows = res.split("\n");

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(",");

                var CheckFRow = cells[0].replace(/[\r\n]+/gm, "");
                var CheckSRow = cells[1];
                var CheckThisModCat = cells[4];

                if (CheckFRow == "" || CheckFRow == null) {} else {

                    var ModTypeNow = cells[4].replace(/[\r\n]+/gm, "");

                    if (CheckFRow == "DynamicPack") {

                        var row = datatable.insertRow(-1);

                        var ThisMarkUnAll = '<input id="MarkAllModulesInGrid" type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;"></input>'
                        var cell = row.insertCell(-1);
                        cell.innerHTML = ThisMarkUnAll;
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "29px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module";
                        cell.className = "TABLEHeaderClass";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[1];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "100px";

                        var cell = row.insertCell(-1);
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "300px";
                        cell.innerHTML = "Description";

                    } else {

                        if (ModTypeNow == SelModTypeNow) {

                            var row = datatable.insertRow(-1);

                            var ResRepl = cells[0].replaceAll(' ', "_");
                            var ReplTarget = cells[1].replaceAll(' ', "_");

                            ThisDataS = ResRepl + ":" + ReplTarget;
                            var HostCheckBox = '<input id=' + ThisDataS + ' type="checkbox" style="cursor: pointer;border: 1px solid black;border-radius: 10px;">'

                            var cell = row.insertCell(-1);
                            cell.innerHTML = HostCheckBox;
                            cell.style.textAlign = "left";
                            cell.style.width = "33px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.textAlign = "left";
                            cell.style.width = "400px";

                            var SItem = cells[1].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                                cell.style.textAlign = "left";
                                cell.style.width = "120px";
                                cell.style.lineHeight = "14px";

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                                cell.style.textAlign = "left";
                                cell.style.width = "120px";
                                cell.style.lineHeight = "14px";
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];
                            cell.style.textAlign = "left";
                            cell.style.width = "300px";
                            cell.style.color = "#555454";
                            cell.style.fontStyle = "italic";
                            cell.style.lineHeight = "14px";



                        }

                    }
                }
            }

            var dtable = document.getElementById("AllModulesSetModulesDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);

            //AddTenantsToBoxFunction()

            document.getElementById("FetchModulesCircleNow").style.display = "none";



        }

        if (data.type === "Socket-Call-DCModulesFOUR") {

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



                    }



                }
            }

            var dtable = document.getElementById("UpdateSETAllModulesSetModulesDiv");
            dtable.innerHTML = "";
            dtable.appendChild(datatable);



        }
        if (data.type === "Socket-Call-DCModulesFIVE") {

            FinalModName = data.FinalModName;
            if (data.message) {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {

                    } else {
                        var SItem = cells[0].replace(/[\r\n]+/gm, "");
                        var ThisConString = cells[6].replace(/[\r\n]+/gm, "");
                        if (SItem == FinalModName) {
                            document.getElementById("WhenEditingNewModNameNow").value = cells[0];
                            document.getElementById("WhenEditingWhichPModuleName").value = cells[5];
                            document.getElementById("WhenEditingModuleConnectionStringNow").value = ThisConString;
                            document.getElementById("WhenEditingNewModModuleTarget").value = cells[1];
                            document.getElementById("WhenEditingModDescriptionHere").value = cells[3];

                        }

                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }



        }

        if (data.type === "Socket-Call-DCModulesSIX") {

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

                        if (CheckFRow == "DynamicPack") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "117px";

                        } else {

                            var SItem = cells[1].replace(/[\r\n]+/gm, "");

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.cursor = "pointer";

                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

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

                        var ThisModType = rowSelected.cells[1].innerHTML;
                        var SItem = ThisModType.replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Azure/gi);
                        if (result) {
                            document.getElementById("WhichTenToSelectA").innerHTML = "Select Azure Tenant";
                        }
                        var result = SItem.match(/Office/gi);
                        if (result) {
                            document.getElementById("WhichTenToSelectA").innerHTML = "Select Office Tenant";
                        }



                    }
                }

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        }

        if (data.type === "Socket-Call-DCModulesSEVEN") {

            FinalModName = data.FinalModName;
            if (data.message) {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckFRow == null) {

                    } else {
                        var SItem = cells[0].replace(/[\r\n]+/gm, "");
                        var ThisConString = cells[6].replace(/[\r\n]+/gm, "");
                        if (SItem == FinalModName) {
                            document.getElementById("ModDescriptionHere").value = cells[3];
                            document.getElementById("WhichPModuleName").value = cells[5];
                            document.getElementById("ModuleConnectionStringNow").value = ThisConString;
                            document.getElementById("NewModModuleTarget").value = cells[1];

                        }


                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        }

        if (data.type === "Socket-Call-AllAdminsONE") {

            if (data.message == "FileNotFound") {
                var ThisNow = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Admins found. Please add admins...</span></p>'
                document.getElementById("AllManagedADminsDivNowTable").innerHTML = ThisNow;

            } else {

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
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Authorization Template";
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Modify Template";
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.className = "TABLEHeaderClass";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];

                            var WhichOneToAdd = "";
                            var NotAss = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f4cfb9;font-weight: 600;text-align:center;width: 100px;">Not Assigned</div>'
                            var AssTmpName = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #b9ecf4;font-weight: 600;text-align:center;width: 150px;">' + cells[2] + '</div>'

                            var SItem = cells[2].replace(/[\r\n]+/gm, "");
                            var FinalTempNameNow = SItem;

                            if (FinalTempNameNow == "Not Assigned") {
                                WhichOneToAdd = NotAss;
                            } else {
                                WhichOneToAdd = AssTmpName;
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = WhichOneToAdd;

                            var ReplAuthName = cells[2].replaceAll(' ', "_");
                            var ThisUserToRem = cells[0] + ":" + ReplAuthName;
                            var ModifyAuthTemplate = '<button id = ' + ThisUserToRem + ' class = "TABLEButtonsClass" onclick="ModifyCurrentTemplateForAdminFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Modify Template</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ModifyAuthTemplate;

                            var ThisUserToRem = cells[0];
                            var RemoveUser = '<button id = ' + ThisUserToRem + ' class = "TABLEButtonsClass" onclick="RemoveAdminFunctionNow(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove Admin</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveUser;

                        }
                    }


                }

                var dtable = document.getElementById("AllManagedADminsDivNowTable");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            }


        }

        if (data.type === "SocketCall-LoadTenantsONE") {

            if (data.message) { // That means if there is data available
                const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // represents allowed column 1 and 3 in index form                                        

                var CreateTempTensNew = document.getElementById("SelectTenantForSelectedModulesD");
                var options = document.querySelectorAll('#SelectTenantForSelectedModulesD option');
                options.forEach(o => o.remove());

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


                var AllChangeModTenants = document.getElementById("SelectATenantToBeChangedID");
                var options = document.querySelectorAll('#SelectATenantToBeChangedID option');
                options.forEach(o => o.remove());

                var AllChangeModTenantsA = document.getElementById("AvailableTenantsForAllNowWhenAdding");
                var options = document.querySelectorAll('#AvailableTenantsForAllNowWhenAdding option');
                options.forEach(o => o.remove());

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var newcell = cells[0];

                        var ThisStrNow = newcell;
                        var NewStrNow = ThisStrNow.substring(0, 3);
                        var WhichTargetNow = cells[1];

                        if (newcell == 'Unique Name' || NewStrNow == "EOI") {} else {
                            if (newcell == "" || newcell == null) {} else {

                                if (WhichTargetNow == "AZURE-AVD") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    CreateTempTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    SingleViewTenantName.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    ViewSetTenants.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    CreateAddTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    AllChangeModTenants.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    AllChangeModTenantsA.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":AZURE TENANT";
                                    CreateTempTensNew.add(optionR);

                                }
                                if (WhichTargetNow == "OFFICE") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    CreateTempTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    SingleViewTenantName.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    ViewSetTenants.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    CreateAddTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    AllChangeModTenants.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    AllChangeModTenantsA.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    CreateTempTensNew.add(optionR);


                                }
                                if (WhichTargetNow == "ADFOREST") {

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    CreateTempTens.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[11] + ":AD FOREST";
                                    ViewSetTenants.add(optionR);

                                    var optionR = document.createElement("option");
                                    optionR.text = cells[0] + ":OFFICE TENANT";
                                    CreateAddTens.add(optionR);

                                }

                            }
                        }

                    }
                }

                var table = document.createElement("table");
                table.id = 'AllOfficeTenantsTable'
                table.setAttribute('class', 'SummaryTableClass');

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        var newcell = cells[0];
                        var checksevnow = cells[2];
                        var thistestnowall = cells[4];

                        if (newcell == 'Unique Name') {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Tenant Name";
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Tenant Type";
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Test Account";
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove Tenant";
                            cell.style.cursor = "pointer";
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Edit Details";
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";

                        } else {


                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.textAlign = "left";

                            var ThisTenNameDivOFFICE = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 68px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 23px;padding-bottom: 3px;"></i>OFFICE</div>'
                            var ThisTenDivAzure = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 68px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 23px;padding-bottom: 3px;"></i>AZURE-AVD</div>'

                            var cell = row.insertCell(-1);
                            if (cells[1] == "OFFICE") {
                                cell.innerHTML = ThisTenNameDivOFFICE;
                            }
                            if (cells[1] == "AZURE-AVD") {
                                cell.innerHTML = ThisTenDivAzure;
                            }
                            cell.style.textAlign = "center";

                            var ThisTenNameNow = cells[0].replaceAll(" ", "_");

                            var FinalIDToAdd = cells[0].replaceAll(" ", "_") + ":" + cells[1].replaceAll(" ", "_");
                            var ButTestAccountID = '<button id="' + FinalIDToAdd + '"' + ' class = "TableButtonHoverClass" onclick="TestSPNFunction(id)" style="font-size: 11px; background: white; border-radius: 8px; font-weight: 500; border: 1px solid; padding: 8px; cursor: pointer; letter-spacing: 0px; color: rgb(6, 115, 168);">Test Accounts</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ButTestAccountID;
                            cell.style.cursor = "pointer";

                            var ButTestAccountID = '<button id="' + ThisTenNameNow + '"' + ' class = "TableButtonHoverClass" onclick="RemoveCurrentTenantFunction(id)" style="font-size: 11px; background: white; border-radius: 8px; font-weight: 500; border: 1px solid; padding: 8px; cursor: pointer; letter-spacing: 0px; color: rgb(6, 115, 168);">Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ButTestAccountID;
                            cell.style.cursor = "pointer";

                            var FinalIDToAdd = cells[0].replaceAll(" ", "_") + ":" + cells[1].replaceAll(" ", "_");
                            var ButTestAccountID = '<button id="' + FinalIDToAdd + '"' + ' class = "TableButtonHoverClass" onclick="EditDetFunction(id)" style="font-size: 11px; background: white; border-radius: 8px; font-weight: 500; border: 1px solid; padding: 8px; cursor: pointer; letter-spacing: 0px; color: rgb(6, 115, 168);">Edit Details</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ButTestAccountID;
                            cell.style.cursor = "pointer";

                        }

                    }
                }
                var dvCSV = document.getElementById("TenantDIV");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("SuperNovaStatusID").style.color = "red";
            }


        }

        if (data.type === "SocketCall-LoadModuleSetsONE") {

            if (data.message == "FileNotFound") {
                var ThisNow = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: none; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;text-align: center;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;text-align: center;">No Modules Sets Created Yet!</p></div>'
                document.getElementById("AllModulesSetDivNowForAllMod").innerHTML = ThisNow;

            } else {


                var datatable = document.createElement("table");
                datatable.id = 'AllModulesSetTableDDNow'
                datatable.setAttribute('class', 'TableForModulesSetNow');

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
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "182px";
                            cell.style.maxWidth = "182px";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Set Type";
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "111px";
                            cell.style.cursor = "pointer";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Remove";
                            cell.className = "TABLEHeaderClass";
                            cell.style.cursor = "pointer";


                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.style.cursor = "pointer";

                            var SItem = cells[1].replace(/[\r\n]+/gm, "");
                            if (SItem == "Assessment Set") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #b9ecf4;font-weight: 600;text-align:center;">Assessment Set</div>'
                            }
                            if (SItem == "Default Set") {
                                var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #d8e7ea;font-weight: 600;text-align: center;">Default Set</div>'
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;
                            cell.style.cursor = "pointer";

                            FinalServerName = cells[0];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveModulesSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;
                            cell.style.cursor = "pointer";

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
                        var TempTypeNow = rowSelected.cells[1].innerHTML;

                        var text = TempTypeNow;
                        var result = text.match(/Default Set/gi);
                        if (result) {
                            document.getElementById("ThisLoadedMSetNR").innerHTML = TemplateName + "|" + "Default Set";
                        } else {
                            document.getElementById("ThisLoadedMSetNR").innerHTML = TemplateName + "|" + "Assessment Set";
                        }

                        var text = TempTypeNow;
                        var result = text.match(/Default Set/gi);
                        if (result) {
                            document.getElementById("OpenedModSetNameNow").innerHTML = TemplateName;

                            var TRPKey = document.getElementById("TRPKeyN").value;
                            $.ajax({
                                url: '/LoadModulesSetAttrNow', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: true,
                                timeout: 50000,
                                data: {
                                    'TRPKey': TRPKey,
                                    'TemplateName': TemplateName,
                                    "type": "SocketCall-LoadDefSetAllModules",
                                    'userId': userId
                                },
                                success: function(data) {

                                },
                                error: function() {
                                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                }
                            });
                        }

                        var result = text.match(/Assessment Set/gi);
                        if (result) {
                            document.getElementById("OpenedModSetNameNow").innerHTML = TemplateName;

                            var TRPKey = document.getElementById("TRPKeyN").value;
                            $.ajax({
                                url: '/CallLoadViewSet', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: true,
                                timeout: 50000,
                                data: {
                                    'TRPKey': TRPKey,
                                    'TemplateName': TemplateName,
                                    "type": "SocketCall-GetAssessmentSetModulesNow",
                                    'userId': userId
                                },
                                success: function(data) {

                                },
                                error: function() {
                                    document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                                }
                            });
                        }

                    }
                }


            }


        }

        if (data.type === "SocketCall-LoadProcAgentONE") {

            if (data.message) {

                if (data.message == "FileNotFound") {
                    var ThisNow = '<div style="margin-left: auto;margin-right: auto;width: 311px;height: 111px;background: #f7f7f7;padding: 19px;border-radius: 0px 0px 30px 30px;"><p id="RefCircleNowForAssSet" style="color: #fb713b; float: none; margin-top: 19px; font-weight: 600; display: block; margin-right: -3px;text-align: center;"><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:16px; font-size: 25px; font-weight: 600;"></i></p><p style="margin: 0px;margin-top: 7px;font-size: 12px;color: #575555;text-align: left;font-style: italic;text-align: center;">Please create Sets first!</p></div>'
                    document.getElementById("AssessmentSetProcAgentDivNow").innerHTML = ThisNow;

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

                            if (CheckFRow == "Set Name") {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.className = "TABLEHeaderClass";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];
                                cell.className = "TABLEHeaderClass";
                                cell.style.width = "116px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];
                                cell.className = "TABLEHeaderClass";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];
                                cell.style.width = "75px";
                                cell.className = "TABLEHeaderClass";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];
                                cell.className = "TABLEHeaderClass";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];
                                cell.className = "TABLEHeaderClass";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];
                                cell.className = "TABLEHeaderClass";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Edit";
                                cell.className = "TABLEHeaderClass";
                                cell.style.width = "150px";


                            } else {

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];

                                ThisAssSetDiv = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #b9ecf4;font-weight: 600;text-align:center;">Assessment Set</div>'
                                ThisDefSetDiv = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #d8e7ea;font-weight: 600;text-align: center;">Default Set</div>'
                                var cell = row.insertCell(-1);
                                if (cells[1] == "Assessment Set") {
                                    cell.innerHTML = ThisAssSetDiv;
                                }
                                if (cells[1] == "Default Set") {
                                    cell.innerHTML = ThisDefSetDiv;
                                }


                                if (cells[2] == "Enabled") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #a6f988;font-weight: 600;text-align:center;">Enabled</div>'
                                }
                                if (cells[2] == "Disabled") {
                                    var ThisDivNow = '<div style="background: white;padding: 7px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #ffe3d5;font-weight: 600;text-align: center;">Disabled</div>'
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                                cell.style.width = "71px";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[5];

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[6];

                                ModuleToModify = cells[0];
                                var ReplDataN = ModuleToModify.replaceAll(' ', "_") + ":" + cells[2].replaceAll(' ', "_") + ":" + cells[3].replaceAll(' ', "_") + ":" + cells[4].replaceAll(' ', "_") + ":" + cells[5].replaceAll(' ', "_") + ":" + cells[6].replaceAll(' ', "_") + ":" + cells[1].replaceAll(' ', "_");

                                var ModifyNotSettings = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #515050;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:100px; padding:6px;" onclick="ModifyAssessmentSetNowFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Modify</button>'
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


        }
        if (data.type === "SocketOne-LoadViewProcAgentONE") {

            if (data.message == "FileNotFound") {
                var RCNow = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Views or View Sets have been created yet. Please create.</span></p>'
                document.getElementById("ThisIsTheGridForViewSet").innerHTML = RCNow;

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
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "113px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "99px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[5];
                            cell.className = "TABLEHeaderClass";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = "Enable/Disable";
                            cell.className = "TABLEHeaderClass";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var SingColDiv = '<div style="margin-left: auto;margin-right: auto;display: inline-block;"><span style="color: #2d2b2b;/*! font-size: 10px; */font-style: normal;border: 1px solid #8c8686;border-radius: 10px;padding-left: 12px;padding-right: 12px;background: #ffe3d5;box-shadow: navajowhite;padding-top: 5px;padding-bottom: 5px;font-weight: 500;">Single Column</span></div>'
                            var SetDiv = '<div style="margin-left: auto;margin-right: auto;"><span style="color: #2d2b2b;/*! font-size: 10px; */font-style: normal;border: 1px solid #8c8686;border-radius: 10px;padding-left: 12px;padding-right: 12px;background: #e2ff7c;box-shadow: navajowhite;padding-top: 5px;padding-bottom: 5px;font-weight: 500;">View Set</span></div>'

                            if (cells[1] == "Single Column") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = SingColDiv;
                            }
                            if (cells[1] == "View Set") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = SetDiv;
                            }

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
                            var ReplDataN = ModuleToModify.replaceAll(' ', "_");

                            var ModifyNotSettings = '<button id = ' + ReplDataN + ' class = "TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #515050;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:none; width:100px; padding:6px;" onclick="EnableDisableCurrentViewFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>' + "SET" + ' </button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ModifyNotSettings;

                        }
                    }
                }

                var dtable = document.getElementById("ThisIsTheGridForViewSet");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            }


        }

        if (data.type === "SocketCall-LoadViewSetONE") {

            if (data.message) {

                var FinalViewName = data.FinalViewName;

                var datatable = "";

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var n = 0;

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var ThisViewName = cells[0];

                    if (ThisViewName == "" || ThisViewName == null) {} else {

                        //alert("R" + ThisViewName + "R" + FinalViewName);

                        if (ThisViewName == FinalViewName) {

                            //alert("R" + ThisViewName + "R" + FinalViewName);


                            var thisString = `<div id="ID_VIEWSETNAME" class="AllDivsAnimationNow ID_ClassVIEWSETNAMEClass">
                            <div class="ID_ClassVIEWSETNAMEBelowClass">

<div style="display: inline-block;float: left;">
<i class="fa fa-eye" aria-hidden="true" style="padding-right: 4px; padding-top: 0px;color: #0c3d68;font-size: 25px;color:white;padding-left: 5px;padding-bottom: 7px;"></i>
</div>

<button id="ID_MENUEXPAND" class="OfficeButton AllDivsAnimationNow ID_ClassMENUNowClasses" style="border: none !important;background: transparent !important;">
<i class="fa fa-expand" aria-hidden="true" style="padding-right: 10px; padding-top: 8px;font-size: 15px;color: white;"></i>
</button>
<button id="ID_MENUUPDOWN" class="OfficeButton AllDivsAnimationNow ID_ClassMENUNowClasses" style="border: none !important;background: transparent !important;">
<i class="fas fa-sort-numeric-up-alt" aria-hidden="true" style="padding-right: 10px; padding-top: 7px;font-size: 16px;color: white;"></i>
</button>
<button id="ID_VIEWMENU" class="OfficeButton AllDivsAnimationNow ID_ClassMENUNowClasses" style="border: none !important;background: transparent !important;">
<i class="ri-menu-line" aria-hidden="true" style="padding-right: 10px; padding-top: 5px;font-size: 19px;color: white;"></i>
</button>
<button id="ID_VIEWREFRESH" class="OfficeButton AllDivsAnimationNow ID_ClassMENUNowClasses" style="border: none !important;background: transparent !important;">
<i class="ri-restart-line" aria-hidden="true" style="padding-right: 10px; padding-top: 5px;font-size: 19px;color: #1ee0f4;"></i>
</button>
<button id="ID_SHOWLOGBUTTON" class="ID_ClassShowLButton AllDivsAnimationNow" style="float: right;"><i class="fa fa-building-o AllDivsAnimationNow" aria-hidden="true" style="padding-right: 2px; padding-top: 0px;font-size: 16px;color: white;font-weight: 400;"></i>
</button>
<button id="ID_EXCELBUTTON" class="ID_ClassShowLButton AllDivsAnimationNow" style="float: right;"><i class="fa fa-file-excel-o AllDivsAnimationNow" aria-hidden="true" style="padding-right: 2px; padding-top: 0px;font-size: 16px;color: #9ef297;font-weight: 400;"></i>
</button>



</div>

<div id="ID_VPANEL" class="ID_ClassVPANELClass AllDivsAnimationNow" data-highcharts-chart="3" style="display: none;">

<div class="ID_AfterVPanelClass AllDivsAnimationNow">

                                
<p id="ID_VIEWLASTUPDATED" class="ID_ClassLastUpdatedClass AllDivsAnimationNow">VIEWMODLASTUPDATED</p>
<p id="ID_CLOSEPANELMENU" class="ID_ClassClosePanlClass">X</p>

                                <p id="SSS" class="ID_DownClassDown AllDivsAnimationNow">View Type</p><select name="ID_VIEWTYPENOW" id="ID_VIEWTYPENOW" onchange="ViewSetChangeDataTypeFunction()" class="ID_ClassChartTypeClass SelectClassForAllSelects" style="float: none;box-shadow: none !important;">
<option>Chart</option><option>Data</option>
</select>
<p id="SSS" class="ID_ClassHNameClass AllDivsAnimationNow">Height</p>
<input name="ID_VIEWHEIGHT" id="ID_VIEWHEIGHT" onchange="ViewSetHeightFunction()" class="ID_ClassInputBoxClass SelectClassForAllSelects" style="float: none;box-shadow: none !important;">
<p id="SSS" class="ID_ClassHNameClass AllDivsAnimationNow">Width</p>
<input name="ID_VIEWWIDTH" id="ID_VIEWWIDTH" onchange="ViewSetWidthFunction()" class="ID_ClassInputBoxClass SelectClassForAllSelects" style="float: none;box-shadow: none !important;">




                                



                            </div>
<div id="ID_CHARTTOPDIV" class="ID_ClassChartDivClass AllDivsAnimationNow">
                                <p style="margin: 0px;font-size: 10px;font-family: &quot;Roboto&quot;;border-bottom: 1px solid #cac4c4;text-align: center;color: #514e4e;height: 27px;font-weight: 500;background: #f0e6e6;padding-top: 4px;margin-bottom: 10px;">FOR CHARTING</p>
<p class="ID_ClassHNameClass AllDivsAnimationNow">Start Column:</p>
                                <input type="text" id="ID_STARTCOL" name="ID_STARTCOL" placeholder="80" style="display: inline-block;width: 28px;padding: 0px;/*! padding-left: 9px; */text-align: center;">
                                <p class="ID_ClassHNameClass AllDivsAnimationNow">End Column:</p>
                                <input type="text" id="ID_ENDCOL" name="ID_ENDCOL" placeholder="90" style="display: inline-block;width: 28px;padding: 0px;/*! padding-left: 9px; */text-align: center;"><div style="display: inline-block;float: none;margin-top: 14px;" class="AllDivsAnimationNow">

                                    <p id="SSS" class="ID_ClassHNameClass AllDivsAnimationNow" style="padding-top: 2px;">Chart Type</p>

                                    <select name="ID_CHARTTYPE" id="ID_CHARTTYPE" onchange="ViewSetChangeChartTypeFunction()" class="ID_ClassInputBoxClass SelectClassForAllSelects" style="width: 70px;">
                        <option>pie</option><option>column</option><option>stacked</option>
                                          </select>


                                </div>



                                <button id="ID_UPDATECHART" onclick="ViewSetChartUpdateFunction()" class="ID_ClassButtonUpdateCClass OfficeButton AllDivsAnimationNow" style="height: 29px;padding-bottom: 5px;padding-top: 2px;border-radius: 5px !important;">
<i class="far fa-check-circle" aria-hidden="true" style="padding-right: 5px; padding-top: 5px"></i>Update Chart
</button>

            </div>
            <div class="ID_ClassANewOneDown">
<div style="float: left;"><input type="checkbox" class="ID_ClassInputBoxClass" id="vehicle3" name="vehicle3" value="Boat" style="margin-left: 9px;font-size: 12px;width: 13px;display: inline-block;" onclick="ProcessTitleCheckBoxFunction()"></div><div style="display: inline-block;"><label for="vehicle3" style="margin: 0px;padding: 0px;padding-left: 3px;font-size: 12px;color: #686565;font-weight: 600;margin-left: auto;margin-right: auto;padding-left: 10px;display: inline-block;padding-top: 5px;">Hide main title</label></div>  

</div>
</div>

                            <div id="ID_TIT_LE" class="ID_ClassTIT_LEClass">

<p id="ID_WHICHMODULE" class="ID_ClassWhichModuleClass">VIEW_SETMODULENAME</p>
</div>
<div id="ID_ThisShowOrNot" class="select-tenant AllDivsAnimationNow" style="margin-top: -2px; display:none;">
                                                            

                                                            <input type="text" id="ID_SEARCHINTABLE" placeholder="Type to search..." class="ID_SearchClassForAll">
                                                            
                                                            
                                                            











                                                        </div>
<div id="ID_VIEWTABLE" class="AllDivsAnimationNow ID_ClassVIEWTABLEClass"></div>
<div id="ID_LOGVNOWTABLE" class="AllDivsAnimationNow ID_ClassVIEWTABLEClassForLog" style="display: none;"></div>
                            
                            <div id="ID_VIEWCHARTDIV" class="AllDivsAnimationNow ID_ClassVIEWCHARTDIVClass" data-highcharts-chart="3"></div>

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
                            var MAINPanelTitle = SPViewName + ":PANELTITLE" + ":" + n.toString();
                            var MAINPanelTitleCheckBox = SPViewName + ":TITLE_CHECKBOX" + ":" + n.toString();
                            var MAINPanelUPDownID = SPViewName + ":MAINUPDOWN" + ":" + n.toString();
                            var MAINSetExpandID = SPViewName + ":MAINEXPAND" + ":" + n.toString();
                            var MAINMenuPanelCloseID = SPViewName + ":CLOSEPANEL" + ":" + n.toString();
                            var LogButtonID = SPViewName + ":LOGBUTTON" + ":" + n.toString();
                            var LogButtonDIVID = SPViewName + ":LOGBUTTONDIV" + ":" + n.toString();
                            var ExcelIconButtonID = SPViewName + ":EXCELBUTTON" + ":" + n.toString();
                            var SearchDivShorOrNotID = SPViewName + ":SEARCHDIV" + ":" + n.toString();
                            var SearchInputBoxID = SPViewName + ":SEARCHBOX" + ":" + n.toString();

                            var Thistext = thisString;
                            var result = Thistext.replaceAll("VIEW_SETMODULENAME", ModuleAndTen).replaceAll("80", ViewStartCol)
                                .replaceAll("90", ViewEndCol).replaceAll("ID_VIEWLASTUPDATED", VLastRefID).replaceAll("ID_CHARTTYPE", VChartTypeID)
                                .replaceAll("ID_STARTCOL", VStartColID).replaceAll("ID_ENDCOL", VEndColID).replaceAll("ID_UPDATECHART", VChartUpdateID)
                                .replaceAll("ID_VIEWREFRESH", VDataRefButtonID).replaceAll("ID_VIEWCHARTDIV", VChartDivID).replaceAll("ID_CHARTTOPDIV", VChartTopDivID)
                                .replaceAll("ID_VIEWTABLE", VDataTableDivID).replaceAll("ID_VIEWTYPENOW", VChartDataTypeID)
                                .replaceAll("ID_VIEWHEIGHT", ViewHeightNow).replaceAll("ID_VIEWWIDTH", ViewWidthNow)
                                .replaceAll("ID_VIEWSETNAME", ViewSETNameDivID).replaceAll("ID_VIEWMENU", ViewMenuID)
                                .replaceAll("ID_VPANEL", ViewPanelID).replaceAll("ID_TIT_LE", MAINPanelTitle).replaceAll("vehicle3", MAINPanelTitleCheckBox)
                                .replaceAll("ID_MENUUPDOWN", MAINPanelUPDownID).replaceAll("ID_MENUEXPAND", MAINSetExpandID)
                                .replaceAll("ID_CLOSEPANELMENU", MAINMenuPanelCloseID).replaceAll("ID_SHOWLOGBUTTON", LogButtonID)
                                .replaceAll("ID_LOGVNOWTABLE", LogButtonDIVID).replaceAll("ID_EXCELBUTTON", ExcelIconButtonID)
                                .replaceAll("ID_ThisShowOrNot", SearchDivShorOrNotID).replaceAll("ID_SEARCHINTABLE", SearchInputBoxID);
                            //var result = Thistext;

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
                CollectViewSetDataFileNow();


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        }

        if (data.type === "SocketCall-LoadViewSetTWO_NOTUSED") {

            var FinalViewName = data.FinalViewName;


        }


        if (data.type === "SocketCall-LoadViewSetTHREE_NOTDONE") {

            var ViewFinalTableDivIDNow = data.ViewFinalTableDivIDNow;
            var ViewFinalChartDivIDNow = data.ViewFinalChartDivIDNow;
            var ViewFinalLastRefID = data.ViewFinalLastRefID;
            var r = data.ThisR;
            console.log(ViewFinalTableDivIDNow);
            console.log(ViewFinalChartDivIDNow);
            console.log(ViewFinalLastRefID);
            console.log(r);



        }

        if (data.type === "SocketCall-LoadLogForSingleColumnForExecuting") {

            if (data.message) {

                var IsDetChecked = document.getElementById("ShowDetLogCBox").checked;

                var datatable = document.createElement("table");
                datatable.id = 'ViewLogsDataTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                var ThisDateToAddAndTime = NewDateAndTime.toString();
                var ThisDateToAddAndTime = 0;

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];

                    if (CheckFRow == "VIEWEXECUTED") {
                        document.getElementById("IntervalTriggerOPT").innerHTML = "NONE";
                        CollectViewDataFileNow();
                        document.getElementById("RefCircleWhenExecutingView").style.display = "none";
                    } else {

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var ThisNowDate = '<span style="background: green;padding: 4px;color: white;font-size: 10px;font-weight: 600;margin-right:7px; border-radius: 6px;/*! border: 1px solid black !important; */">' + ThisDateToAddAndTime.toString() + '</span>'
                        if (IsDetChecked == true) {
                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisNowDate + rows[i];
                        } else {
                            if (CheckFRow == "BASIC") {
                                var row = datatable.insertRow(-1);
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisNowDate + rows[i];
                            }

                        }

                        ++ThisDateToAddAndTime;
                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Executing Module:/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Loading SUCCESS:/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed Loading:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing Connection String:/gi);
                        if (result) {
                            cell.style.background = "black";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Connection Success/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed to Connect/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Connection String:/gi);
                        if (result) {
                            cell.style.background = "#fde4c8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ModulesToLoad:/gi);
                        if (result) {
                            cell.style.background = "#76f7d8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:/gi);
                        if (result) {
                            cell.style.background = "rgb(17, 118, 249)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/EXECUTING MODULE:/gi);
                        if (result) {
                            cell.style.background = "rgb(2, 69, 155)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing CATEGORY:/gi);
                        if (result) {
                            cell.style.background = "#0c9be1";
                            cell.style.color = "black";
                        }


                    }
                }

                var dtable = document.getElementById("ShowViewLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
            }


        }

        if (data.type === "SocketCall-LoadLogForSingleColumnForLoading") {

            if (data.message) {

                var IsDetChecked = document.getElementById("ShowDetLogCBox").checked;

                var datatable = document.createElement("table");
                datatable.id = 'ViewLogsDataTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                var ThisDateToAddAndTime = NewDateAndTime.toString();
                var ThisDateToAddAndTime = 0;

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];

                    if (CheckFRow == "VIEWEXECUTED") {

                    } else {

                        var CheckFRow = cells[0];
                        var CheckSRow = cells[1];

                        var ThisNowDate = '<span style="background: green;padding: 4px;color: white;font-size: 10px;font-weight: 600;margin-right:7px; border-radius: 6px;/*! border: 1px solid black !important; */">' + ThisDateToAddAndTime.toString() + '</span>'
                        if (IsDetChecked == true) {
                            var row = datatable.insertRow(-1);
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisNowDate + rows[i];
                        } else {
                            if (CheckFRow == "BASIC") {
                                var row = datatable.insertRow(-1);
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisNowDate + rows[i];
                            }

                        }

                        ++ThisDateToAddAndTime;

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Executing Module:/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Loading SUCCESS:/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed Loading:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing Connection String:/gi);
                        if (result) {
                            cell.style.background = "black";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Connection Success/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed to Connect/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Connection String:/gi);
                        if (result) {
                            cell.style.background = "#fde4c8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ModulesToLoad:/gi);
                        if (result) {
                            cell.style.background = "#76f7d8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:/gi);
                        if (result) {
                            cell.style.background = "rgb(17, 118, 249)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/EXECUTING MODULE:/gi);
                        if (result) {
                            cell.style.background = "rgb(2, 69, 155)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing CATEGORY:/gi);
                        if (result) {
                            cell.style.background = "#0c9be1";
                            cell.style.color = "black";
                        }


                    }
                }

                var dtable = document.getElementById("ShowViewLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
                document.getElementById("ExecutingAssessmentNowForAllCircle").style.display = "none";
            }


        }
        if (data.type === "SocketCall-LoadDefaultSetONE") {

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
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "0px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "371px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module Target";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Tenant";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Tenant Target";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                    } else {


                        if (CheckFRow == "" || CheckFRow == null) {

                        } else {


                            var row = datatable.insertRow(-1);

                            var SItem = cells[2].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var IconClass = '<i class="fa fa-dot-circle-o" aria-hidden="true" style="padding-right: 0px; padding-top: 0px;color: #4d8ee1;font-size: 16px;font-weight: 900;border: 2px solid black;border-radius: 100px;"></i>'
                            }
                            if (SItem == "All Office") {
                                var IconClass = '<i class="fa fa-dot-circle-o" aria-hidden="true" style="padding-right: 0px; padding-top: 0px;color: #e17e4d;font-size: 16px;font-weight: 900;border: 2px solid black;border-radius: 100px;"></i>'
                            }

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
                            cell.style.cursor = "pointer";

                            var SItem = cells[2].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];
                            //cell.style.color = "rgb(2, 127, 202)";
                            cell.style.fontWeight = "500";
                            cell.style.fontFamily = "Roboto";
                            cell.style.color = "#555454";
                            cell.style.cursor = "pointer";

                            var SItem = cells[7].replace(/[\r\n]+/gm, "");
                            if (SItem == "AZURE-AVD") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "OFFICE") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }
                        }
                    }

                }

                var CheckThisNow = document.getElementById("CheckIfClickedOnExecute").innerHTML;

                if (CheckThisNow == "YES") {} else {

                    var dtable = document.getElementById("AllModulesInSelectedModulesSetDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    var FinalDataNow = '<button id="GoLeftRightInDefSetNow" onclick="GoLeftRightInDefSetNowFunction()" class="AllManageButtonClass AllDivsAnimationNow" style="margin-top: -25px;font-size: 12px !important;height: 19px;top: 15px;position: fixed;/*! left: 0; */right: -9px;bottom: 0;"><i class="fa fa-arrows-h AllManageButtonIconClass" aria-hidden="true" style="padding-right: 0px; padding-top: 2px;color: #575555;font-size: 16px;padding-bottom: 5px;border: 1px solid #a6a2a2;height: 20px;margin-top: 5px;background: white;padding-left: 2px;padding-right: 2px;border-radius: 5px;"></i></button>'
                    document.getElementById("AllModulesInSelectedModulesSetDiv").innerHTML += FinalDataNow;

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
                            var ThisModTen = rowSelected.cells[3].innerHTML;

                            document.getElementById("CurrentDefSetLoadedN").innerHTML = ThisModName;
                            var ThisModTargetNow = rowSelected.cells[2].innerHTML;
                            var ThisTenTargetNow = rowSelected.cells[4].innerHTML;

                            var FinalModTargetNow = "";
                            var FinalTenTargetNow = "";

                            var result = ThisModTargetNow.match(/Azure/gi);
                            if (result) {
                                FinalModTargetNow = "AZURE";
                            }
                            var result = ThisModTargetNow.match(/Office/gi);
                            if (result) {
                                FinalModTargetNow = "OFFICE";
                            }

                            var result = ThisTenTargetNow.match(/Azure/gi);
                            if (result) {
                                FinalTenTargetNow = "AZURE";
                            }
                            var result = ThisTenTargetNow.match(/Office/gi);
                            if (result) {
                                FinalTenTargetNow = "OFFICE";
                            }

                            var SItem = ThisModTen.replace(/[\r\n]+/gm, "");
                            document.getElementById("DefSetViewSetTopLogDiv").style.display = "none";
                            document.getElementById("DefSetShowViewSetLogDivNow").style.display = "none";
                            document.getElementById("ThisToShowWhenClickedOnDTable").style.display = "block";

                            document.getElementById("SelectedModNameNowAndExecutingOne").innerHTML = ThisModName + ":" + SItem + ":" + FinalModTargetNow + ":" + FinalTenTargetNow;
                            document.getElementById("ButtonFillDataInModule").click();


                        }
                    }
                }


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        }

        if (data.type === "SocketCall-LoadDefaultSetModuleData") {

            if (data.message == "FileNotFound") {

                var InsertC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>Module has not been executed for Selected Tenant...</p>'
                document.getElementById("SelectedModulesInSetDataDiv").innerHTML = InsertC;

            } else {
                if (data.message) {

                    var datatable = document.createElement("table");
                    datatable.id = 'ModuleDataTableForAllModsModulesSet'
                    datatable.setAttribute('class', 'DefaultSetModuleResultTable');

                    let res = data.message.replaceAll('"', "");
                    var rows = res.split("\n");

                    var AllColCheckBoxes = "";
                    var ColNumberNow = 1;

                    var TotRowsNow = 0;
                    var ThisType = "Info";

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

                                                var ThisNameNow = cells[j];
                                                var ReplDataN = ThisNameNow.replaceAll(' ', "_") + ":" + ColNumberNow.toString();
                                                var ThisCDiv = '<div style="border: 0px solid #dbd4d4;border-radius: 5px;margin-top: 10px;margin-top: 2px;width: 100%;height: 23px;margin-left: 23px;background: white;margin-left: 0;margin-right: auto;box-shadow: none !important;" class="AllDivsAnimationNow"><input type="checkbox" onclick="ShowHideColFunctionNowForDetSet(id)" checked = "true" id="ID_REPLCHECKBOX" name="ID_REPLCHECKBOX" value="Boat" style="margin-left: 11px;font-size: 12px;float: none;font-size: 11px !important;height: 13px;box-shadow: none !important;" class="SelectClassForAllSelects"><label for="ID_REPLCHECKBOX" style="margin: 0px;cursor:pointer;padding: 0px;padding-left: 3px;font-size: 12px;color: #686565;font-weight: 600;margin-left: auto;margin-right: auto;">THISTITLENAME</label></div>'
                                                var Thistext = ThisCDiv;

                                                var result = Thistext.replaceAll("ID_REPLCHECKBOX", ReplDataN).replaceAll("THISTITLENAME", cells[j]);

                                                AllColCheckBoxes = AllColCheckBoxes + result;
                                                ++ColNumberNow;

                                            }

                                        }
                                    }
                                }
                            }

                        }
                    }

                    var dtable = document.getElementById("SelectedModulesInSetDataDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("AllCheckBoxesDivNowForDefSet").innerHTML = AllColCheckBoxes;

                    var TotNow = 0;
                    var tablec, rowsc, ic, x, y, shouldSwitch;
                    tablec = document.getElementById("ModuleDataTableForAllModsModulesSet");
                    if (tablec == null) {} else {
                        rowsc = tablec.rows;
                        for (ic = 1; ic < (rowsc.length); ic++) {
                            ++TotNow;
                        }
                    }

                    if (TotNow == 0) {
                        var InsertC = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;box-shadow: 4px 5px 6px #cdd0d2;border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="far fa-bell" style="font-size:29px;margin-right: 10px;" aria-hidden="true"></i>Module has not been executed for Selected Tenant...</p>'
                        document.getElementById("SelectedModulesInSetDataDiv").innerHTML = InsertC;
                    }

                    document.getElementById("ThisMSGFooter").style.marginBottom = "-79px";
                    document.getElementById("GettingReadyID").style.display = "none";

                } else {
                    document.getElementById("UserSessDetailsDiv").innerHTML = "";
                }

            }


        }

        if (data.type === "SocketCall-LoadDefaultSetModuleLOG") {

            if (data.message == "FileNotFound") {
                var ThisNow = '<p style="text-align: center;font-size: 15px;font-style: italic;/*! border: 1px solid; */width: 50%;margin-left: auto;margin-right: auto;padding: 20px;/*! box-shadow: 4px 5px 6px #cdd0d2; */border-radius: 200px;font-family: &quot;Roboto&quot;;color: #ff8339;"><i class="fa fa-exclamation-circle" style="font-size:55px;margin-right: 10px;color: #d0c8c8;" aria-hidden="true"></i><br><span style="color: #868181;">No Logs Found. Module in Default Set has not been executed.</span></p>'
                document.getElementById("DefSetShowViewSetLogDivNow").innerHTML = ThisNow;

            } else {

                var datatable = document.createElement("table");
                datatable.id = 'SingleDefSetModuleLogTable'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var NowLn = (rows.length - 1);

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");

                    var CheckFRow = cells[0];
                    if (CheckFRow == "DEFSETMODULEEXECUTED") {
                        //clearInterval(GlobalAssessmentMonitorViewSet);
                        //CollectViewSetDataFileNow();
                        //document.getElementById("ViewSetRefCircleWhenExecutingView").style.display = "none";
                        //document.getElementById("CloseViewSetExeLogD").click();

                    } else {

                        var row = datatable.insertRow(-1);
                        var cell = row.insertCell(-1);

                        cell.innerHTML = rows[i];

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Processing View:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var SItem = rows[i].replace(/[\r\n]+/gm, "");
                        var result = SItem.match(/Checking:/gi);
                        if (result) {
                            cell.style.background = "#bce0ff";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: SUCCESS/gi);
                        if (result) {
                            cell.style.background = "rgb(188, 255, 192)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/END: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/START: MODULE CODE/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 213, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/FINAL VIEW RESULT: FAILED/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }

                        var result = SItem.match(/Executing Module:/gi);
                        if (result) {
                            cell.style.background = "rgb(255, 210, 188)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:DISABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 131, 105)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/VIEW SET:ENABLED/gi);
                        if (result) {
                            cell.style.background = "rgb(157, 244, 132)";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error Occured/gi);
                        if (result) {
                            cell.style.background = "rgb(247, 60, 17)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Loading SUCCESS:/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed Loading:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Processing Connection String:/gi);
                        if (result) {
                            cell.style.background = "black";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/Connection Success/gi);
                        if (result) {
                            cell.style.background = "#09d009";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Failed to Connect/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Error:/gi);
                        if (result) {
                            cell.style.background = "#fd9369";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/Connection String:/gi);
                        if (result) {
                            cell.style.background = "#fde4c8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ModulesToLoad:/gi);
                        if (result) {
                            cell.style.background = "#76f7d8";
                            cell.style.color = "black";
                        }
                        var result = SItem.match(/ASSESSMENT SET:/gi);
                        if (result) {
                            cell.style.background = "rgb(17, 118, 249)";
                            cell.style.color = "white";
                        }
                        var result = SItem.match(/EXECUTING MODULE:/gi);
                        if (result) {
                            cell.style.background = "rgb(2, 69, 155)";
                            cell.style.color = "black";
                        }


                    }
                }

                var dtable = document.getElementById("DefSetShowViewSetLogDivNow");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            }


        }

        if (data.type === "CallSocket-GetEmailTemplateAttr") {

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
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "125px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "200px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];
                        cell.className = "TABLEHeaderClass";

                    } else {

                        if (CheckFRow == "" || CheckFRow == null) {} else {
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
                }

                var dtable = document.getElementById("TemplateAttrDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        }

        if (data.type === "CallSocket-GetAuthTempATTR") {

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

                    if (CheckFRow == "DEFOPTION") {
                        if (cells[1] == "false") {
                            document.getElementById("AllTitlesItemIDHideLeftPanel").checked = false;
                        }
                        if (cells[1] == "true") {
                            document.getElementById("AllTitlesItemIDHideLeftPanel").checked = true;
                        }

                        document.getElementById("DefLoadNameNewModModuleTarget").value = cells[2];
                        document.getElementById("TypeItemNameWhichPModuleName").value = cells[3];
                    }

                    if (CheckFRow == "TemplateName") {

                        var row = datatable.insertRow(-1);
                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Entry Type";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "120px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Entry Name";
                        cell.className = "TABLEHeaderClass";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Status";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "80px";
                        cell.style.textAlign = "center";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Set Availability";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "110px";
                        cell.style.textAlign = "center";
                    } else {

                        if (CheckFRow == "" || CheckFRow == null || CheckFRow == "Name") {} else {
                            var row = datatable.insertRow(-1);

                            var AssSetSO = '<div style="background: white;padding: 8px;display: inline-block;color: green;border-radius: 100px;margin-left: auto;margin-right: auto;border: 2px solid #a8a5a5;">Assessment Set</div>'
                            var DefSetSO = '<div style="background: white;padding: 8px;display: inline-block;color: #0aa2c6;border-radius: 100px;margin-left: auto;margin-right: auto;border: 2px solid #a8a3a3;">Default Set</div>'
                            var ViewSO = '<div style="background: white;padding: 8px;display: inline-block;color: #3e84ec;border-radius: 100px;margin-left: auto;margin-right: auto;border: 2px solid #9b9898;">VIEW/VIEW SET</div>'
                            var OptSo = '<div style="background: #2a394f;padding: 8px;display: inline-block;color: white;border-radius: 100px;margin-left: auto;margin-right: auto;">OPTION</div>'
                            var PanelSo = '<div style="background: #e68621;padding: 8px;display: inline-block;color: white;border-radius: 100px;margin-left: auto;margin-right: auto;">PANEL</div>'

                            var WhichOneToSet = AssSetSO;

                            if (cells[1] == "Assessment Set") {
                                WhichOneToSet = AssSetSO;
                            }
                            if (cells[1] == "Default Set") {
                                WhichOneToSet = DefSetSO;
                            }
                            if (cells[1] == "OPTION") {
                                WhichOneToSet = OptSo;
                            }
                            if (cells[1] == "PANEL") {
                                WhichOneToSet = PanelSo;
                            }
                            if (cells[1] == "VIEW/VIEW SET") {
                                WhichOneToSet = ViewSO;
                            }

                            var cell = row.insertCell(-1);
                            cell.innerHTML = WhichOneToSet;
                            cell.style.fontWeight = "500";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.fontWeight = "500";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[3];

                            var SItemNow = cells[3].replace(/[\r\n]+/gm, "");

                            if (SItemNow == "Unavailable") {
                                cell.style.color = "#ff6000"
                            }
                            if (SItemNow == "Available") {
                                cell.style.color = "green"
                            }

                            FinalServerName = cells[2] + "#" + cells[3];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");

                            var ButtonText = "Available";
                            if (SItemNow == "Available") {
                                ButtonText = "Unavailable";
                            }
                            if (SItemNow == "Unavailable") {
                                ButtonText = "Available";
                            }

                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:62px; padding:6px;" onclick="ChangeCurrentStatusOfTemplateFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>' + "SET" + '</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("TemplateAttrDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);


            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        }

        if (data.type === "CallSocket-LoadTenDetFile") {

            if (data.message) { // That means if there is data available

                var datatable = document.createElement("table");
                datatable.id = 'EditTenDetTableNow'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");

                    var CheckFRow = cells[0];
                    var CheckSRow = cells[1];

                    if (CheckFRow == "" || CheckSRow == "") {

                    } else {


                        if (CheckFRow == "Tenant Item") {
                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "125px";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.className = "TABLEHeaderClass";
                            cell.style.width = "125px";

                        } else {
                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[0];

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.contentEditable = true;
                            cell.style.background = "white";

                        }
                    }
                }

                var dtable = document.getElementById("TenantDIVAttr");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                //alert("You must connect to CloudNovaDesk");
            }

        }


















        if (data.type === "CallSocket-LoadSelModuleCode") {

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
        }








        if (data.type === "SocketCall-LoadDefSetAllModules") {

            var TemplateName = data.TemplateName;

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
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "371px";
                        cell.innerHTML = cells[1];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "215px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";
                        cell.style.textAlign = "center";
                    } else {

                        if (CheckFRow == "" || CheckFRow == null) {} else {
                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.width = "200px";
                            cell.style.fontWeight = "500";

                            var SItem = cells[2].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

                            var ThisDivNow = '<div style="border: 2px solid #ddd6d6;height: 44px;background: white;border-radius: 5px;"><p style="text-align: center;">' + cells[3] + '</p></div>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;
                            cell.contentEditable = true;

                            FinalServerName = TemplateName + ":" + cells[1];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveItemFromSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("ModulesSetAttrDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        }

        if (data.type === "SocketCall-GetAssessmentSetModulesNow") {

            var TemplateName = data.TemplateName;

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

                    if (CheckFRow == "ViewSet") {

                        var row = datatable.insertRow(-1);
                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "371px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Target";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "63px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Tenant";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "215px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                    } else {

                        if (CheckFRow == TemplateName) {
                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.width = "200px";
                            cell.style.fontWeight = "500";

                            var SItem = cells[11].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }


                            var ThisDivNow = '<div style="border: 2px solid #ddd6d6;height: 44px;background: white;border-radius: 5px;"><p style="text-align: center;">' + cells[3] + '</p></div>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;
                            cell.contentEditable = true;

                            FinalServerName = TemplateName + ":" + cells[2];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveItemFromSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("ModulesSetAttrDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }


        }

        if (data.type === "Socket-CallUpdateModSetTableWhenRemoved") {

            var TemplateName = data.TemplateName;

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
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "371px";
                        cell.innerHTML = cells[1];

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[2];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[3];
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "215px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";
                        cell.style.textAlign = "center";

                    } else {



                        if (CheckFRow == "" || CheckFRow == null) {} else {
                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[1];
                            cell.style.width = "200px";
                            cell.style.fontWeight = "500";

                            var SItem = cells[2].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

                            var ThisDivNow = '<div style="border: 2px solid #ddd6d6;height: 44px;background: white;border-radius: 5px;"><p style="text-align: center;">' + cells[3] + '</p></div>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;
                            cell.contentEditable = true;

                            FinalServerName = TemplateName + ":" + cells[1];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' class="TableButtonHoverClass" style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveItemFromSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("ModulesSetAttrDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }

        }

        if (data.type === "Socket-CallUpdateModSetTableWhenRemovedForAssSet") {

            var TemplateName = data.TemplateName;

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

                    if (CheckFRow == "ViewSet") {

                        var row = datatable.insertRow(-1);
                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Module";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "371px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Target";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "63px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Tenant";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "215px";

                        var cell = row.insertCell(-1);
                        cell.innerHTML = "Remove";
                        cell.className = "TABLEHeaderClass";
                        cell.style.width = "115px";

                    } else {

                        if (CheckFRow == TemplateName) {

                            var row = datatable.insertRow(-1);

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[2];
                            cell.style.width = "200px";
                            cell.style.fontWeight = "500";

                            var SItem = cells[11].replace(/[\r\n]+/gm, "");
                            if (SItem == "Azure") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 71px;"><i class="fa fa-cloud" aria-hidden="true" style="margin-right: 4px;color: #4d8ee1;font-size: 12px;padding-bottom: 3px;"></i>Azure</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;

                            }
                            if (SItem == "All Office") {
                                var ThisDivNow = '<div style="background: white;padding: 3px;border: 1px solid #bbb8b8;border-radius: 10px;box-shadow: none;background: #f7ebeb;font-weight: 600;text-align:center;width: 86px;"><i class="fab fa-microsoft" aria-hidden="true" style="margin-right: 4px;color: #e17e4d;font-size: 12px;padding-bottom: 3px;"></i>All Office</div>'
                                var cell = row.insertCell(-1);
                                cell.innerHTML = ThisDivNow;
                            }

                            var ThisDivNow = '<div style="border: 2px solid #ddd6d6;height: 44px;background: white;border-radius: 5px;"><p style="text-align: center;">' + cells[3] + '</p></div>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = ThisDivNow;
                            cell.contentEditable = true;

                            FinalServerName = TemplateName + ":" + cells[2];
                            var ReplDataN = FinalServerName.replaceAll(' ', "_");
                            var RemoveModuleNow = '<button id = ' + ReplDataN + ' style="cursor: pointer;background: white;border: 1px solid #686868;border-radius: 5px;color: #444;padding-left: 11px;padding-right: 11px;padding-bottom: 4px;padding-top: 4px;font-family: &quot;Roboto&quot;;font-weight: 500;margin-left: 4px; margin-top: 0px;outline:none;float:right; width:81px; padding:6px;" onclick="RemoveItemFromSetFunction(id)"><i class="ri-landscape-line" aria-hidden="true" style="color: #e17c22;margin-right: 5px;"></i>Remove</button>'
                            var cell = row.insertCell(-1);
                            cell.innerHTML = RemoveModuleNow;

                        }
                    }
                }

                var dtable = document.getElementById("ModulesSetAttrDiv");
                dtable.innerHTML = "";
                dtable.appendChild(datatable);

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        }


        if (data.type === "CallSocket-LoadModuleCodeNowInAnotherBox") {

            if (data.message) {

                if (data.message == "FileNotFound") {
                    document.getElementById("CDPCodeBoxWithCred").value = "No Code Found";
                } else {
                    document.getElementById("CDPCodeBoxWithCred").value = data.message;
                }

                //document.getElementById("LoadingCodeCicle").style.display = "none";

            } else {
                document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
            }
        }


    } else {
        document.getElementById("SuperNovaStatusID").innerHTML = "Server Down";
    }

});

//Socket Thing ENDS HERE

$("#TOPViewsPANEL").click(function(e) {
    UpdateViewTableInLeftFunction();
});
$("#TOPViewsSETPANEL").click(function(e) {
    UpdateViewTableInLeftFunction();
});
$("#TOPAssessmentSETSPanel").click(function(e) {
    UpdateModulesSetTableInLeftFunction();
});
$("#TOPDefaultSetsPANEL").click(function(e) {
    UpdateModulesSetTableInLeftFunction();
});