function openPageOfficePane(pageName, elmnt, color) {

    if (pageName == "OpenOfficeConfigurationPane") {
        document.getElementById("OpenAzureADPane").style.display = "none";
        document.getElementById("OpenExchangeOnlinePane").style.display = "none";
        document.getElementById("OpenCompliancePane").style.display = "none";
        document.getElementById("OpenAllTestsPane").style.display = "none";

        document.getElementById("OpenOfficeConfigurationPane").style.display = "block";

        document.getElementById("PageOffice1").style.background = "#f2f2f2";
        document.getElementById("PageOffice1").style.borderRadius = "0 40px 0 0";
        document.getElementById("PageOffice2").style.background = "white";
        document.getElementById("PageOffice3").style.background = "white";
        document.getElementById("PageOffice4").style.background = "white";
        document.getElementById("PageOffice5").style.background = "white";


    }

    if (pageName == "OpenAzureADPane") {

        document.getElementById("OpenOfficeConfigurationPane").style.display = "none";
        document.getElementById("OpenExchangeOnlinePane").style.display = "none";
        document.getElementById("OpenCompliancePane").style.display = "none";
        document.getElementById("OpenAllTestsPane").style.display = "none";

        document.getElementById("OpenAzureADPane").style.display = "block";

        document.getElementById("PageOffice2").style.background = "#f2f2f2";
        document.getElementById("PageOffice2").style.borderRadius = "0 40px 0 0";
        document.getElementById("PageOffice1").style.background = "white";
        document.getElementById("PageOffice3").style.background = "white";
        document.getElementById("PageOffice4").style.background = "white";
        document.getElementById("PageOffice5").style.background = "white";


    }

    if (pageName == "OpenExchangeOnlinePane") {

        document.getElementById("OpenOfficeConfigurationPane").style.display = "none";
        document.getElementById("OpenAzureADPane").style.display = "none";
        document.getElementById("OpenCompliancePane").style.display = "none";
        document.getElementById("OpenAllTestsPane").style.display = "none";

        document.getElementById("OpenExchangeOnlinePane").style.display = "block";

        document.getElementById("PageOffice3").style.background = "#f2f2f2";
        document.getElementById("PageOffice3").style.borderRadius = "0 40px 0 0";
        document.getElementById("PageOffice1").style.background = "white";
        document.getElementById("PageOffice2").style.background = "white";
        document.getElementById("PageOffice4").style.background = "white";
        document.getElementById("PageOffice5").style.background = "white";

    }

    if (pageName == "OpenCompliancePane") {

        document.getElementById("OpenOfficeConfigurationPane").style.display = "none";
        document.getElementById("OpenAzureADPane").style.display = "none";
        document.getElementById("OpenExchangeOnlinePane").style.display = "none";
        document.getElementById("OpenAllTestsPane").style.display = "none";

        document.getElementById("OpenCompliancePane").style.display = "block";

        document.getElementById("PageOffice4").style.background = "#f2f2f2";
        document.getElementById("PageOffice4").style.borderRadius = "0 40px 0 0";
        document.getElementById("PageOffice1").style.background = "white";
        document.getElementById("PageOffice2").style.background = "white";
        document.getElementById("PageOffice3").style.background = "white";
        document.getElementById("PageOffice5").style.background = "white";


    }

    if (pageName == "OpenAllTestsPane") {

        document.getElementById("OpenOfficeConfigurationPane").style.display = "none";
        document.getElementById("OpenAzureADPane").style.display = "none";
        document.getElementById("OpenExchangeOnlinePane").style.display = "none";
        document.getElementById("OpenCompliancePane").style.display = "none";

        document.getElementById("OpenAllTestsPane").style.display = "block";

        document.getElementById("PageOffice5").style.background = "#f2f2f2";
        document.getElementById("PageOffice5").style.borderRadius = "0 40px 0 0";
        document.getElementById("PageOffice1").style.background = "white";
        document.getElementById("PageOffice2").style.background = "white";
        document.getElementById("PageOffice3").style.background = "white";
        document.getElementById("PageOffice4").style.background = "white";

    }


}
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.borderLeft = "none";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "#545a62";
    // elmnt.style.borderLeft = "3px solid blue";
}
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



function openPageOffice(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentoffice");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinkoffice");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.borderLeft = "none";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "#e4edf0";
}
// Get the element with id="defaultOpen" and click on it
// document.getElementById("DefaultOfficeOpen").click();
// document.getElementById("RefAllTenantsNow").click();




function openPageOfficeServiceTab(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentofficeService");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("TabLinkIssueTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.borderLeft = "none";
        tablinks[i].style.borderRadius = "none";
        tablinks[i].style.border = "none";

    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "white";
    elmnt.style.borderRadius = "0px 12px 0px 0px";
    elmnt.style.border = "1px solid #b3b4b5";

}
// Get the element with id="defaultOpen" and click on it
// document.getElementById("DefaultOfficeOpen").click();




$("#CloseReportWindow").click(function(e) {

    var modal = document.getElementById("LoginRegisterModal");
    modal.style.display = "none";

});




$("#SVGOfficeTenPage").click(function(e) {


    var modal = document.getElementById("AzureBillingPage");
    modal.style.display = "none";
    var modal = document.getElementById("OfficeAss");
    modal.style.display = "none";
    var modal = document.getElementById("ManageTenantsPage");
    modal.style.display = "block";
    var modal = document.getElementById("AVDManagementPane");
    modal.style.display = "none";

    document.getElementById("RefAllTenants").click();


});



$("#SVGLoginPage").click(function(e) {

    var modal = document.getElementById("LoginRegisterModal");
    modal.style.display = "block";

});




$("#SVGOfficeAssPage").click(function(e) {

    var modal = document.getElementById("OfficeAss");
    modal.style.display = "block";
    var modal = document.getElementById("AzureBillingPage");
    modal.style.display = "none";
    var modal = document.getElementById("ManageTenantsPage");
    modal.style.display = "none";

    // document.getElementById("RefAllTenantsNow").click();

    document.getElementById("OpenAzureADPane").style.display = "none";
    document.getElementById("OpenExchangeOnlinePane").style.display = "none";
    document.getElementById("OpenCompliancePane").style.display = "none";
    document.getElementById("OpenAllTestsPane").style.display = "none";

    document.getElementById("OpenOfficeConfigurationPane").style.display = "block";

    document.getElementById("PageOffice1").style.background = "#d9e4e8";
    document.getElementById("PageOffice1").style.borderRadius = "0 40px 0 0";
    document.getElementById("PageOffice2").style.background = "white";
    document.getElementById("PageOffice3").style.background = "white";
    document.getElementById("PageOffice4").style.background = "white";
    document.getElementById("PageOffice5").style.background = "white";

    document.getElementById("PageInsideOfficeExecution").click();


});



$("#SwitchAVDManPane").click(function(e) {

    var modal = document.getElementById("AzureBillingPage");
    modal.style.display = "none";
    var modal = document.getElementById("OfficeAss");
    modal.style.display = "none";
    var modal = document.getElementById("ManageTenantsPage");
    modal.style.display = "none";

    var modal = document.getElementById("AVDManagementPane");
    modal.style.display = "block";

    document.getElementById("RefAllAVDTenNow").click();

});




$("#SwitchAzBilling").click(function(e) {

    var modal = document.getElementById("AzureBillingPage");
    modal.style.display = "block";
    var modal = document.getElementById("OfficeAss");
    modal.style.display = "none";
    var modal = document.getElementById("ManageTenantsPage");
    modal.style.display = "none";
    var modal = document.getElementById("AVDManagementPane");
    modal.style.display = "none";

    // For Tenants Billing
    const BillCol = [0, 1, 2]

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/RequestBillTenants', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                } else {

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'AllTenCostTable'
                    datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split("#");
                        var newcell = cells[0];

                        var row = datatable.insertRow(-1);

                        var itemnew = cells[0];
                        var itemnumber = cells[2];

                        if (itemnew == "Unique Name") {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            cell.style.backgroundColor = "white";
                            cell.style.color = "rgb(59, 59, 60)";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0.5px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid #ccc8c8";
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnumber;
                            cell.style.backgroundColor = "white";
                            cell.style.color = "rgb(59, 59, 60)";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0.5px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid #ccc8c8"
                            cell.style.position = "sticky";
                            cell.style.zIndex = "22";
                            cell.style.top = "0";


                        } else {

                            if (itemnew == null || itemnew == "") {

                            } else {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = itemnew;

                                var cell = row.insertCell(-1);
                                cell.innerHTML = itemnumber;

                            }

                        }


                    }

                    var dtable = document.getElementById("AllTenCostDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);


                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });

    // This is for enabling click on Tenant table

    var tableRT = document.getElementById('AllTenCostTable');
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
            var TenName = rowSelected.cells[0].innerHTML;
            let TenNameRepl = TenName.replaceAll(' ', '');

            document.getElementById("TOPSelectedTenNow").innerHTML = TenNameRepl;

            GetAllTenSubsNowsTimer(TenNameRepl);
        }
    }


});





$("#PageInsideOfficeExecution").click(function(e) {

    var modal = document.getElementById("OfficeExecutionInside");
    modal.style.display = "block";
    var modal = document.getElementById("OfficeReportingInside");
    modal.style.display = "none";

    // document.getElementById("RefAllTenantsNow").click();

    document.getElementById("PageInsideOfficeReporting").style.background = "white";
    document.getElementById("PageInsideOfficeReporting").style.border = "0px";
    document.getElementById("PageInsideOfficeReporting").style.fontWeight = "300";

    document.getElementById("PageInsideOfficeExecution").style.background = "#f2f2f2";
    document.getElementById("PageInsideOfficeExecution").style.border = "1px solid #e0e2e3";
    document.getElementById("PageInsideOfficeExecution").style.borderBottom = "0px";
    document.getElementById("PageInsideOfficeExecution").style.fontWeight = "400"


    document.getElementById("OpenAzureADPane").style.display = "none";
    document.getElementById("OpenExchangeOnlinePane").style.display = "none";
    document.getElementById("OpenCompliancePane").style.display = "none";
    document.getElementById("OpenAllTestsPane").style.display = "none";

    document.getElementById("OpenOfficeConfigurationPane").style.display = "block";

    document.getElementById("PageOffice1").style.background = "#d9e4e8";
    document.getElementById("PageOffice1").style.borderRadius = "0 40px 0 0";
    document.getElementById("PageOffice2").style.background = "white";
    document.getElementById("PageOffice3").style.background = "white";
    document.getElementById("PageOffice4").style.background = "white";
    document.getElementById("PageOffice5").style.background = "white";


});





$("#PageInsideOfficeReporting").click(function(e) {

    var modal = document.getElementById("OfficeExecutionInside");
    modal.style.display = "none";
    var modal = document.getElementById("OfficeReportingInside");
    modal.style.display = "block";

    document.getElementById("PageInsideOfficeExecution").style.background = "white";
    document.getElementById("PageInsideOfficeExecution").style.border = "0px";
    document.getElementById("PageInsideOfficeExecution").style.fontWeight = "300";

    document.getElementById("PageInsideOfficeReporting").style.background = "#f2f2f2";
    document.getElementById("PageInsideOfficeReporting").style.border = "1px solid #e0e2e3";
    document.getElementById("PageInsideOfficeReporting").style.borderBottom = "0px";
    document.getElementById("PageInsideOfficeReporting").style.fontWeight = "400";

    document.getElementById("OpenAzureADPane").style.display = "none";
    document.getElementById("OpenExchangeOnlinePane").style.display = "none";
    document.getElementById("OpenCompliancePane").style.display = "none";
    document.getElementById("OpenAllTestsPane").style.display = "none";

    document.getElementById("OpenOfficeConfigurationPane").style.display = "block";

    document.getElementById("PageOffice1").style.background = "#d9e4e8";
    document.getElementById("PageOffice1").style.borderRadius = "0 40px 0 0";
    document.getElementById("PageOffice2").style.background = "white";
    document.getElementById("PageOffice3").style.background = "white";
    document.getElementById("PageOffice4").style.background = "white";
    document.getElementById("PageOffice5").style.background = "white";


});





$("#SVGOfficeReportPage").click(function(e) {

    var modal = document.getElementById("OfficeReporting");
    modal.style.display = "block";

    var modal = document.getElementById("OfficeAss");
    modal.style.display = "none";


});





$("#GenReportNowID").click(function(e) {

    // Get the modal
    var modal = document.getElementById("MyOfficeReport");

    // Get the button that opens the modal
    var btn = document.getElementById("GenReportNowID");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeReport")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    //  }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});






$("#ConnectToOfficeID").click(function(e) {


    var checkconstatus = document.getElementById("OfficeConStatUS").style.color;
    if (checkconstatus == "green") {
        swal("Info", "You are already connected to Office 365", "info");
    } else {

        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("ConnectToOfficeID");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        document.getElementById("ConStatusAzureAD").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusAzureAD").style.color = "black";

        document.getElementById("ConStatusMSOnline").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusMSOnline").style.color = "black";

        document.getElementById("ConStatusExchangeOnline").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusExchangeOnline").style.color = "black";

        document.getElementById("ConStatusSharePointOnline").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusSharePointOnline").style.color = "black";

        document.getElementById("ConStatusSharePointOnlinePnP").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusSharePointOnlinePnP").style.color = "black";

        document.getElementById("ConStatusSec").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusSec").style.color = "black";

        document.getElementById("ConStatusMSTeams").className = "fa fa-circle-o-notch";
        document.getElementById("ConStatusMSTeams").style.color = "black";
    }
});





$("#InitiateConOffice").click(function(e) {

    var checkconstatus = document.getElementById("OfficeConStatUS").style.color;
    if (checkconstatus == "green") {
        swal("Info", "You are already connected to Office 365", "info");
    } else {

        document.getElementById("ConStatusAzureAD").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusAzureAD").style.color = "red";

        document.getElementById("ConStatusMSOnline").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusMSOnline").style.color = "red";

        document.getElementById("ConStatusExchangeOnline").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusExchangeOnline").style.color = "red";

        document.getElementById("ConStatusSharePointOnline").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusSharePointOnline").style.color = "red";

        document.getElementById("ConStatusSharePointOnlinePnP").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusSharePointOnlinePnP").style.color = "red";

        document.getElementById("ConStatusSec").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusSec").style.color = "red";

        document.getElementById("ConStatusMSTeams").className = "fa fa-circle-o-notch fa-spin";
        document.getElementById("ConStatusMSTeams").style.color = "red";

        // document.getElementById("OfficeConStatUS").className = "fa fa-circle-o-notch fa-spin";

        var SelTenID = document.getElementById('SelectedTenantNow').innerHTML;

        e.preventDefault();
        $.ajax({
            url: '/ConnectNow', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            datatype: "JSON",
            data: {
                'id': SelTenID
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    let res = data.message.replaceAll('"', "");
                    //var rows = data.message.split("\n");
                    var rows = res.split("\n");

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");

                        if (cells.length > 1) {
                            var ThisServiceName = cells[0];
                            var ThisServiceConStatus = cells[1];

                            if (ThisServiceName == "AzureAD") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusAzureAD").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusAzureAD").style.color = "green";
                                } else {
                                    document.getElementById("ConStatusAzureAD").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusAzureAD").style.color = "red";
                                }
                            }

                            if (ThisServiceName == "MSOnline") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusMSOnline").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusMSOnline").style.color = "green";

                                } else {
                                    document.getElementById("ConStatusMSOnline").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusMSOnline").style.color = "red";
                                }
                            }


                            if (ThisServiceName == "ExchanageOnline") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusExchangeOnline").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusExchangeOnline").style.color = "green";

                                } else {
                                    document.getElementById("ConStatusExchangeOnline").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusExchangeOnline").style.color = "red";
                                }
                            }

                            if (ThisServiceName == "SharePointOnline") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusSharePointOnline").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusSharePointOnline").style.color = "green";

                                } else {
                                    document.getElementById("ConStatusSharePointOnline").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusSharePointOnline").style.color = "red";
                                }
                            }


                            if (ThisServiceName == "SharePointOnline PnP") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusSharePointOnlinePnP").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusSharePointOnlinePnP").style.color = "green";

                                } else {
                                    document.getElementById("ConStatusSharePointOnlinePnP").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusSharePointOnlinePnP").style.color = "red";
                                }
                            }

                            if (ThisServiceName == "Security & Compliance Center") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusSec").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusSec").style.color = "green";

                                } else {
                                    document.getElementById("ConStatusSec").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusSec").style.color = "red";
                                }
                            }

                            if (ThisServiceName == "Microsoft Teams") {
                                if (ThisServiceConStatus == "Connected") {
                                    document.getElementById("ConStatusMSTeams").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusMSTeams").style.color = "green";

                                } else {
                                    document.getElementById("ConStatusMSTeams").className = "fa fa-circle-o-notch";
                                    document.getElementById("ConStatusMSTeams").style.color = "red";
                                }
                            }

                        }
                    }

                    document.getElementById("OfficeConStatUS").className = "fa fa-circle-o-notch";
                    document.getElementById("OfficeConStatUS").style.color = "green";

                    swal("Success", "Connected to Office 365!", "success");


                } else {

                    document.getElementById("OfficeConStatUS").className = "fa fa-circle-o-notch";
                    document.getElementById("OfficeConStatUS").style.color = "red";

                    swal("Error", "Error connecting to Office. Please check your login credentials.", "error");
                }
            },
            error: function() {
                swal("Error", "Error connecting to Office. Please check your login credentials.", "error");
                document.getElementById("OfficeConStatUS").className = "fa fa-circle-o-notch";
                document.getElementById("OfficeConStatUS").style.color = "red";
            }
        });
    }
});






$("#RegisterButtonNowID").click(function(e) {

    var UserNameNow = document.getElementById('regusername').value;
    var EmailIDNow = document.getElementById('regemail').value;
    var PasswordNow = document.getElementById('regpassword').value;

    if (UserNameNow == "" || EmailIDNow == "" || PasswordNow == "") {
        swal("Error", "Please provide all inputs before user can be added.", "error");
    } else {

        e.preventDefault();
        $.ajax({
            url: '/RegisterCustomer', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            datatype: "JSON",
            data: {
                'UserName': UserNameNow,
                'EmailID': EmailIDNow,
                'Password': PasswordNow
            },
            success: function(data) {

                if (data.message) {

                    var SItem = data.message.replace(/[\r\n]+/gm, "");
                    var FinalItem = SItem.replaceAll(' ', '');

                    if (FinalItem == "UserAdded") {
                        swal("Info", "Registration is successful!", "info");
                    }
                    if (FinalItem == "UserAlready") {
                        swal("Info", "Username with same email is already registered!", "error");
                    }
                } else {
                    swal("Error", "Error", "error");

                }
            },
            error: function() {
                swal("Error", "Error registering...", "error");
            }
        });

    }
});





$("#LoadOfficeTestsID").click(function(e) {

    var SelTenID = document.getElementById('SelectedTenantNow').innerHTML;
    document.getElementById("ExecutionStatusIDForAll").style.display = "block";

    e.preventDefault();
    $.ajax({
        url: '/GetExeDate', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        cache: false,
        datatype: "JSON",
        data: {
            'id': SelTenID
        },
        success: function(data) {
            if (data.message) { // That means if there is data available

                if (data.message == "Not Executed") {
                    document.getElementById('LastExecutionDate').innerHTML = "Last Execution Date: Not Executed";
                } else {
                    let res = data.message.replaceAll('"', "");
                    var rows = res;
                    var cells = rows.split(",");
                    var ExeDateNow = cells[1];
                    document.getElementById('LastExecutionDate').innerHTML = "Last Execution Date: " + ExeDateNow;
                }

            } else {
                document.getElementById('LastExecutionDate').innerHTML = "Last Execution Date: Error";
            }
        },
        error: function() {
            document.getElementById('LastExecutionDate').innerHTML = "Last Execution Date: Error";
        }
    });

    // HERE GET ALL DATA ONE BY ONE FOR ALL TABLES IN UPPER ROW





    // For filling Exchange Online Issues Table
    const ExchCols = [0, 1, 2]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = "MailBoxStatus";
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                    alert("No Such File");

                } else {

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'ExchOnlineIssuesTable'
                    datatable.setAttribute('class', 'SummaryTableClassTopExch');


                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var row = datatable.insertRow(-1);

                        var itemnew = cells[0];
                        var itemnumber = cells[1];
                        var itemsev = cells[2];

                        if (newcell == "Mailboxes" || newcell == "Mailbox Policies" || newcell == "Other") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            cell.style.border = "none";
                            cell.style.background = "white";
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";
                            cell.style.fontSize = "24px";
                            cell.style.color = "#078dc1";
                            cell.style.border = "none";
                            cell.style.background = "white";
                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnumber;
                            var cell = row.insertCell(-1);

                            if (itemsev == "High" || itemsev == "Critical" || itemsev == "Medium" || itemsev == "Low") {
                                //fa fa-check

                                cell.style.color = "#c44949";
                                cell.innerHTML = itemsev + '<i id="SevID8" class="far fa-bell" style="font-size:12px;margin-right: 0px;float: right;color: #c44949;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                cell.style.textAlign = "right";
                            } else {

                                if (itemsev == "Passed" || itemsev == "Completed") {
                                    cell.innerHTML = itemsev + '<i id="SevID8" class="fa fa-check" style="font-size:12px;margin-right: 0px;float: right;color: green;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                    cell.style.textAlign = "right";
                                    cell.style.color = "green";

                                }
                            }

                        }


                    }

                    var dtable = document.getElementById("DivForAllExchIssues");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });









    // For filling All Compliance and Risks Table
    //const ExchCols = [0,1,2]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = "SecAndComplianceStatus";
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {


                } else {

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'CompAndRiskIssuesTable'
                    datatable.setAttribute('class', 'ClassForRiskAndCompTable');


                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var row = datatable.insertRow(-1);

                        var itemnew = cells[0];
                        var itemnumber = cells[1];
                        var itemsev = cells[2];

                        if (newcell == "Accounts and Authentication" || newcell == "Application Permissions") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            cell.style.border = "none";
                            cell.style.background = "white";
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";
                            cell.style.fontSize = "24px";
                            cell.style.color = "#078dc1";
                            cell.style.border = "none";
                            cell.style.background = "white";
                            cell.style.display = "table-row";

                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            cell.style.fontSize = "17px";
                            cell.style.lineHeight = "25px";
                            cell.style.fontSize = "17px";
                            cell.style.width = "64%"

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnumber;
                            var cell = row.insertCell(-1);

                            if (itemsev == "High" || itemsev == "Critical" || itemsev == "Medium" || itemsev == "Low") {
                                //fa fa-check

                                cell.style.color = "red";
                                cell.innerHTML = itemsev + '<i id="SevID8" class="far fa-bell" style="font-size:12px;margin-right: 0px;float: right;color: red;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                cell.style.textAlign = "right";
                            } else {

                                if (itemsev == "Passed" || itemsev == "Completed") {
                                    cell.innerHTML = itemsev + '<i id="SevID8" class="fa fa-check" style="font-size:12px;margin-right: 0px;float: right;color: green;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                    cell.style.textAlign = "right";
                                    cell.style.color = "green";

                                }
                            }

                        }


                    }

                    var dtable = document.getElementById("DivForAllCompAndRiskIssues");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });





    // For filling Office 365 Config
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = "Office365Config";
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {


                } else {

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'OfficeConfigTableForAll'
                    datatable.setAttribute('class', 'SummaryTableClassTopExch');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var row = datatable.insertRow(-1);

                        var itemnew = cells[0];
                        var itemnumber = cells[1];
                        var itemsev = cells[2];

                        if (newcell == "Licensing" || newcell == "User Passwords" || newcell == "Provisioning" || newcell == "Blocked/Deleted" || newcell == "Empty Fields" || newcell == "MFA Status" || newcell == "MFA Status-Admins") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            cell.style.border = "none";
                            cell.style.background = "white";
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";
                            cell.style.fontSize = "24px";
                            cell.style.color = "#078dc1";
                            cell.style.border = "none";
                            cell.style.background = "white";
                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnumber;
                            var cell = row.insertCell(-1);

                            if (itemsev == "High" || itemsev == "Critical" || itemsev == "Medium" || itemsev == "Low") {
                                //fa fa-check

                                cell.style.color = "red";
                                cell.innerHTML = itemsev + '<i id="SevID8" class="far fa-bell" style="font-size:12px;margin-right: 0px;float: right;color: red;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                cell.style.textAlign = "right";
                            } else {

                                if (itemsev == "Passed" || itemsev == "Completed") {
                                    cell.innerHTML = itemsev + '<i id="SevID8" class="fa fa-check" style="font-size:12px;margin-right: 0px;float: right;color: green;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                    cell.style.textAlign = "right";
                                    cell.style.color = "green";

                                }
                            }

                        }


                    }

                    var dtable = document.getElementById("OfficeConfigTabledirSyncDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });












    // For filling Azure AD Issues Table
    const AzureADCols = [0, 1, 2]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = "AzureADUsersStatus";
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                    alert("No Such File");

                } else {

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'AzureADIssuesTable'
                    datatable.setAttribute('class', 'SummaryTableClassTopExch');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var row = datatable.insertRow(-1);

                        var itemnew = cells[0];
                        var itemnumber = cells[1];
                        var itemsev = cells[2];

                        if (newcell == "Office 365 Groups" || newcell == "Users Empty Fields" || newcell == "User Syncronization" || newcell == "User Roles" || newcell == "Licensing" || newcell == "User Passwords" || newcell == "Provisioning" || newcell == "Blocked/Deleted" || newcell == "Empty Fields" || newcell == "MFA Status" || newcell == "MFA Status-Admins") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            cell.style.border = "none";
                            cell.style.background = "white";
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";
                            cell.style.fontSize = "24px";
                            cell.style.color = "#078dc1";
                            cell.style.border = "none";
                            cell.style.background = "white";
                        } else {

                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnew;
                            var cell = row.insertCell(-1);
                            cell.innerHTML = itemnumber;
                            var cell = row.insertCell(-1);

                            if (itemsev == "High" || itemsev == "Critical" || itemsev == "Medium" || itemsev == "Low") {
                                //fa fa-check

                                cell.style.color = "#c44949";
                                cell.innerHTML = itemsev + '<i id="SevID8" class="far fa-bell" style="font-size:12px;margin-right: 0px;float: right;color: #c44949;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                cell.style.textAlign = "right";
                            } else {

                                if (itemsev == "Passed" || itemsev == "Completed") {
                                    cell.innerHTML = itemsev + '<i id="SevID8" class="fa fa-check" style="font-size:12px;margin-right: 0px;float: right;color: green;text-shadow: none;margin-top: 3px;margin-left: 6px;" aria-hidden="true"></i>';
                                    cell.style.textAlign = "right";
                                    cell.style.color = "green";

                                }
                            }

                        }


                    }

                    var dtable = document.getElementById("DivForAllIssuesAzureAD");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });



    // FOR OFFICE 365 DOMAIN VERIFICATION TEST HERE
    ThisTestName = "Office 365 Domain Verification Test";
    const DomServiceCols = [1, 2, 3]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = ThisTestName.replaceAll(' ', '');
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                    var ThisDoc = document.getElementById("OfficeTableDomVerification");
                    ThisDoc.remove();

                } else {
                    // alert(data.message);

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'OfficeTableDomVerification'
                    datatable.setAttribute('class', 'SummaryTableClassTop');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];

                        if (newcell == "SEVERITY") {
                            sevnow = cells[1];
                        }
                        if (newcell == "ISSUE") {
                            remarknow = cells[1];
                        }

                        if (newcell == "TESTRESULT") {
                            var row = datatable.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!DomServiceCols.includes(j)) {
                                    continue
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }

                    var dtable = document.getElementById("OfficeTable1");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("DomVerRemark").innerHTML = remarknow;
                    if (sevnow == "Passed" || sevnow == "Completed") {
                        document.getElementById("SevID1").style.color = "green";
                    } else {
                        document.getElementById("SevID1").style.color = "red";
                    }
                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });


    // FOR OFFICE 365 DOMAIN VERIFICATION TEST HERE
    ThisTestName = "Office 365 Domain Services Test";
    const DomServiceColsA = [1, 2, 3]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = ThisTestName.replaceAll(' ', '');
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                } else {
                    // alert(data.message);

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'OfficeTableDomServices'
                    datatable.setAttribute('class', 'SummaryTableClassTop');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];

                        if (newcell == "SEVERITY") {
                            sevnow = cells[1];
                        }
                        if (newcell == "ISSUE") {
                            remarknow = cells[1];
                        }

                        if (newcell == "TESTRESULT") {
                            var row = datatable.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!DomServiceColsA.includes(j)) {
                                    continue
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }

                    var dtable = document.getElementById("OfficeTable2");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("DomVerRemarkTwo").innerHTML = remarknow;
                    if (sevnow == "Passed") {
                        document.getElementById("SevID2").style.color = "green";
                    } else {
                        document.getElementById("SevID2").style.color = "red";
                    }


                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });



    // FOR OFFICE 365 DOMAIN VERIFICATION TEST HERE
    ThisTestName = "Office 365 Subscription Status Test";
    const DomServiceColsB = [1, 2, 3]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = ThisTestName.replaceAll(' ', '');
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {


                } else {
                    // alert(data.message);

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'OfficeTableDomServices'
                    datatable.setAttribute('class', 'SummaryTableClassTop');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];

                        if (newcell == "SEVERITY") {
                            sevnow = cells[1];
                        }
                        if (newcell == "ISSUE") {
                            remarknow = cells[1];
                        }

                        if (newcell == "TESTRESULT") {
                            var row = datatable.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!DomServiceColsB.includes(j)) {
                                    continue
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }

                    var dtable = document.getElementById("OfficeTable3");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("DomVerRemarkThree").innerHTML = remarknow;
                    if (sevnow == "Passed" || sevnow == "Completed") {
                        document.getElementById("SevID3").style.color = "green";
                    } else {
                        document.getElementById("SevID3").style.color = "red";
                    }


                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });






    ThisTestName = "Office 365 License Consumption Test";
    const DomServiceColsC = [1, 2, 3, 4]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = ThisTestName.replaceAll(' ', '');
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                } else {
                    // alert(data.message);

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'OfficeTableDomServices'
                    datatable.setAttribute('class', 'SummaryTableClassTop');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];

                        if (newcell == "SEVERITY") {
                            sevnow = cells[1];
                        }
                        if (newcell == "ISSUE") {
                            remarknow = cells[1];
                        }

                        if (newcell == "TESTRESULT") {
                            var row = datatable.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!DomServiceColsC.includes(j)) {
                                    continue
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }

                    var dtable = document.getElementById("OfficeTable4");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("DomVerRemarkFour").innerHTML = remarknow;
                    if (sevnow == "Passed" || sevnow == "Completed") {
                        document.getElementById("SevID4").style.color = "green";
                    } else {
                        document.getElementById("SevID4").style.color = "red";
                    }


                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });




    ThisTestName = "Ensure that Office 365 Passwords Are Not Set to Expire";
    const DomServiceColsD = [1, 2, 3, 4, 5]
    var sevnow = "";
    var remarknow = "";
    var ThisReplacedTest = ThisTestName.replaceAll(' ', '');
    var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
    var MyTestData = "";

    // Now pass TEST Name as Test Name and then send to server for data collection
    $.ajax({
        url: '/FillTestData', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TestName': ThisReplacedTest,
            'ThisTenant': thisseltenant
        },
        success: function(data) {
            if (data.message) // That means if there is data available
            {

                if (data.message == "No Such File") {

                } else {
                    // alert(data.message);

                    var Datares = data.message.replaceAll('"', "");
                    var rows = Datares.split("\n");

                    var datatable = document.createElement("table");
                    datatable.id = 'OfficeTableDomServices'
                    datatable.setAttribute('class', 'SummaryTableClassTop');

                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];

                        if (newcell == "SEVERITY") {
                            sevnow = cells[1];
                        }
                        if (newcell == "ISSUE") {
                            remarknow = cells[1];
                        }

                        if (newcell == "TESTRESULT") {
                            var row = datatable.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!DomServiceColsD.includes(j)) {
                                    continue
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }

                    var dtable = document.getElementById("OfficeTable5");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                    document.getElementById("DomVerRemarkFive").innerHTML = remarknow;
                    if (sevnow == "Passed" || sevnow == "Completed") {
                        document.getElementById("SevID5").style.color = "green";
                    } else {
                        document.getElementById("SevID5").style.color = "red";
                    }


                }

            } else {
                // alert("Error Executing Test");
            }
        },
        error: function() {
            // alert("Error Executing Test");
        }
    });






    // ##################################################################################################################################

    e.preventDefault();
    $.ajax({
        url: '/LoadOfficeTestEndpoint', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        cache: false,
        datatype: "JSON",
        data: {
            'id': SelTenID
        },
        success: function(data) {
            if (data.message) { // That means if there is data available

                const columns = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // represents allowed column 1 and 3 in index form                       

                const columnsRCTake = [3, 4, 5, 6, 7, 10, 13] // represents allowed column 1 and 3 in index form                       

                var table = document.createElement("table");
                table.id = 'tableOfficeTests'
                table.setAttribute('class', 'SummaryTableClass');

                let res = data.message.replaceAll('"', "");
                //var rows = data.message.split("\n");
                var rows = res.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        var newcell = cells[0];
                        var checksevnow = cells[2];
                        var thistestnowall = cells[4];

                        /*
                        if (newcell == "EXEDATE")
                        {
                            TenExeDate = cells[1];
                        }
                        */

                        if (newcell == 'PackTarget') {
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!columnsRCTake.includes(j)) {
                                    continue
                                }
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                                cell.style.backgroundColor = "black";
                                cell.style.color = "white";
                                cell.style.textAlign = "left";

                                if (cells[j] == 13) {
                                    cell.style.textAlign = "center";
                                }

                            }
                        } else {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[4];
                            cell.style.borderBottom = "3px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.width = 34 + "%";
                            cell.style.boxShadow = "3px 0px 1px #919395";
                            // cell.style.borderRadius = "0 0 100px 0px";                        
                            cell.style.fontSize = "19px";
                            cell.style.textAlign = "left";
                            cell.style.lineHeight = "25px";

                            // Here send another Ajax request to get Test Impact, Severity and Recommendation and other data and fill in columns

                            ThisTestName = cells[4];
                            let ThisReplacedTest = ThisTestName.replaceAll(' ', '');

                            var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;

                            var MyTestData = "";

                            var testissue = "No Issue";
                            var testimpact = "No Impact";
                            var testrec = "No Recommendation";
                            var testsev = "Not Executed";

                            // Now pass TEST Name as Test Name and then send to server for data collection
                            $.ajax({
                                url: '/FillTestData', // This tells server which Route to use OKAYYYY
                                type: 'POST',
                                async: false,
                                data: {
                                    'TestName': ThisReplacedTest,
                                    'ThisTenant': thisseltenant
                                },
                                success: function(data) {
                                    if (data.message) // That means if there is data available
                                    {

                                        if (data.message == "No Such File") {

                                            testsev = "Not Executed";
                                            testissue = "NA";
                                            testimpact = "NA";
                                            testrec = "NA";
                                        } else {
                                            // alert(data.message);

                                            let Datares = data.message.replaceAll('"', "");
                                            var Datarows = Datares.split("\n");

                                            for (var i = 0; i < Datarows.length; i++) {
                                                var Datacells = Datarows[i].split(",");
                                                var newcell = Datacells[0];
                                                var thisval = Datacells[1];

                                                if (newcell == "ISSUE" || newcell == "IMPACT" || newcell == "RECOMMENDATION" || newcell == "SEVERITY") {
                                                    if (newcell == "ISSUE") {
                                                        testissue = thisval;
                                                    }
                                                    if (newcell == "IMPACT") {
                                                        testimpact = thisval;
                                                    }
                                                    if (newcell == "RECOMMENDATION") {
                                                        testrec = thisval;
                                                    }
                                                    if (newcell == "SEVERITY") {
                                                        testsev = thisval;
                                                    }

                                                }
                                            }

                                        }

                                    } else {
                                        // alert("Error Executing Test");
                                    }
                                },
                                error: function() {
                                    // alert("Error Executing Test");
                                }
                            });

                            var cell = row.insertCell(-1);
                            cell.innerHTML = testsev;
                            cell.style.borderBottom = "0px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "center";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[6];
                            cell.style.borderBottom = "0px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";

                            var NewValNow = "<br><Span style='font-weight:600;color:#d27b1d'>CATEGORY: </span>" + cells[7] + "<br>" + "<Span style='font-weight:600;color:#d27b1d'>SERVICE: </span>" + cells[8] + "<br>" + "<Span style='font-weight:600;color:#d27b1d'>PLATFORM: </span>" + cells[9] + "<br>"
                            var cell = row.insertCell(-1);
                            cell.innerHTML = NewValNow;
                            cell.style.borderBottom = "0px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[8];
                            cell.style.borderBottom = "0px solid #666666"
                            cell.style.display = "none";
                            cell.setAttribute('class', 'SummaryTDClass');

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[9];
                            cell.style.borderBottom = "0px solid #666666"
                            cell.style.display = "none";
                            cell.setAttribute('class', 'SummaryTDClass');

                            //<div style='border: 1px solid #a8a5a5;padding: 11px;/*! margin-left: 10px; *//*! margin-right: 10px; */border-radius: 100px;border-top: 0px;border-bottom: 0px;'><span style="font-weight:600;color:#d27b1d">ISSUE: </span>Found deleted office 365 user accoints. Please ensure to correc the problem before it results into an issue.<br></div>
                            var NewValNowTwo = "<div style='border: 1px solid #a8a5a5;padding: 11px;/*! margin-left: 10px; *//*! margin-right: 10px; */border-radius: 100px;border-top: 0px;border-bottom: 0px;'><Span style='font-weight:600;color:#d27b1d'>ISSUE: </span>" + testissue + "<br></div>" + "<div style='border: 1px solid #a8a5a5;padding: 11px;/*! margin-left: 10px; *//*! margin-right: 10px; */border-radius: 100px;border-top: 0px;border-bottom: 0px;'><Span style='font-weight:600;color:#d27b1d'>IMPACT: </span>" + testimpact + "<br></div>" + "<div style='border: 1px solid #a8a5a5;padding: 11px;/*! margin-left: 10px; *//*! margin-right: 10px; */border-radius: 100px;border-top: 0px;border-bottom: 0px;'><Span style='font-weight:600;color:#d27b1d'>RECOMMENDATION: </span>" + testrec + "<br></div>"

                            var cell = row.insertCell(-1);
                            cell.innerHTML = NewValNowTwo;
                            cell.style.borderBottom = "3px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "left";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[11];
                            cell.style.borderBottom = "0px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.display = "none";

                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[12];
                            cell.style.borderBottom = "0px solid #666666"
                            cell.setAttribute('class', 'SummaryTDClass');
                            cell.style.display = "none";

                            var removeRow = document.createElement("BUTTON");
                            removeRow.innerHTML = "Execute";
                            removeRow.id = thistestnowall;
                            removeRow.style.fontSize = "9px";
                            removeRow.style.background = "#d99f56";
                            removeRow.style.borderRadius = "8px";
                            removeRow.style.fontWeight = "700";
                            removeRow.style.border = "none";
                            removeRow.style.padding = "8px";
                            removeRow.style.cursor = "pointer";
                            removeRow.style.letterSpacing = "0.7px";
                            removeRow.style.color = "white";

                            var thisbuttonid = cells[4];
                            let thisrepl = thisbuttonid.replaceAll(' ', '');
                            removeRow.id = thisrepl;
                            removeRow.onclick = function() {
                                ExecuteRowByThis(this);
                            };
                            var cell0 = row.insertCell(0);
                            cell0.appendChild(removeRow);
                            cell0.style.borderBottom = "3px solid #666666"
                            cell0.setAttribute('class', 'SummaryTDClass');
                            cell.style.textAlign = "center";

                            var ShowData = document.createElement("BUTTON");
                            ShowData.innerHTML = "Show Data";
                            ShowData.id = thistestnowall;
                            ShowData.style.fontSize = "9px";
                            ShowData.style.background = "white";
                            ShowData.style.borderRadius = "8px";
                            ShowData.style.fontWeight = "400";
                            ShowData.style.border = "1px solid";
                            ShowData.style.padding = "8px";
                            ShowData.style.cursor = "pointer";
                            ShowData.style.letterSpacing = "0px";
                            ShowData.style.color = "#424444";
                            var thisbuttonid = cells[4];
                            let thisreplShowData = thisbuttonid.replaceAll(' ', '');
                            ShowData.id = thisreplShowData;
                            ShowData.onclick = function() {
                                ExecuteRowByThisToShowData(this);
                            };
                            var cell0 = row.insertCell(10);
                            cell0.appendChild(ShowData);
                            cell0.style.borderBottom = "3px solid #666666"
                            cell0.setAttribute('class', 'SummaryTDClass');
                            cell0.style.textAlign = "center";

                        }
                    }
                }
                var dvCSV = document.getElementById("dvCSVOfficeAzureADTable");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);
            } else {
                alert("You must connect to Office 365");
            }
        },
        error: function() {
            alert("You must connect to Office 365");
        }
    });




    // document.getElementById("LastExecutionDate").innerHTML = "Last Execution Date: " + TenExeDate
    // UPDATE ISSUES COUNT HERE 
    var myTab = document.getElementById('tableOfficeTests');
    var tothigh = 0;
    var totcritical = 0;
    var totmedium = 0;
    var totlow = 0;
    var totpassed = 0;
    var totnotexecuted = 0;
    var totnotcomp = 0;

    var TotMSOnline = 0;
    var TotExchangeOnline = 0;
    var TotTeams = 0;
    var TotSharePoint = 0;

    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

    for (var i = 1; i < myTab.rows.length; i++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;

        var RItem = objCells.item(2).innerHTML;
        var SItem = RItem.replace(/\n/g, " ");
        var thisitem = SItem.replaceAll(' ', '');

        // alert("R"+thisitem+"R");

        var CompItemCheck = objCells.item(3).innerHTML;
        if (CompItemCheck == "Yes") {
            if (thisitem == "High" || thisitem == "Critical" || thisitem == "Medium" || thisitem == "Low") {
                ++totnotcomp;
            }
        }

        var checkservice = objCells.item(3).innerHTML;

        if (checkservice == "ExchangeOnlineShell") {
            ++TotExchangeOnline;
        }
        if (checkservice == "MSOnline") {
            ++TotMSOnline;
        }
        if (checkservice == "SharePoint") {
            ++TotSharePoint;
        }
        if (checkservice == "Teams") {
            ++TotTeams;
        }

        if (thisitem == 'Not Executed' || thisitem == "NotExecuted") {
            objCells.item(2).style.color = "gray";
            ++totnotexecuted;
        }

        if (thisitem == 'High') {
            objCells.item(2).style.color = "red";
            ++tothigh;
        }
        if (thisitem == 'Critical') {
            // alert(thisitem);
            objCells.item(2).style.color = "#9b0707";
            ++totcritical;
        }
        if (thisitem == 'Medium') {
            // alert(thisitem);
            objCells.item(2).style.color = "#e66363";
            ++totmedium;
        }
        if (thisitem == 'Low') {
            // alert(thisitem);
            objCells.item(2).style.color = "#d7af39";
            ++totlow;
        }
        if (thisitem == 'Passed') {
            // alert(thisitem);
            objCells.item(2).style.color = "green";
            ++totpassed;
        }


    }

    var toth = tothigh.toString();
    document.getElementById("TotalHigh").innerHTML = toth;
    var totc = totcritical.toString();
    document.getElementById("totalCritical").innerHTML = totc;
    var totm = totmedium.toString();
    document.getElementById("TotalMedium").innerHTML = totm;
    var totl = totlow.toString();
    document.getElementById("TotalLow").innerHTML = totl;
    var totn = totnotexecuted.toString();
    document.getElementById("TotalNotExecuted").innerHTML = totn;
    var totPR = totpassed.toString();
    document.getElementById("TotalTestPassed").innerHTML = totPR;
    var totNN = totnotcomp.toString();
    document.getElementById("TotalNonCompTests").innerHTML = totNN;

    if (totnotcomp == 0) {
        document.getElementById("CompStatusID").innerHTML = "Compliant"
        document.getElementById("CompStatusID").style.color = "green";
    } else {
        document.getElementById("CompStatusID").innerHTML = "Non-Compliant"
        document.getElementById("CompStatusID").style.color = "red";
    }



    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Critical', 'Hours per Day'],
            ['Critical', totcritical],
            ['High', tothigh],
            ['Medium', totmedium],
            ['Low', totlow],
            ['Passed', totpassed]
        ]);

        var options = {
            legend: 'bottom',
            is3D: true,
            backgroundColor: '#d9e4e8',
            animation: {
                duration: 100,
                easing: 'out',
                startup: true
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));

        chart.draw(data, options);
        // initial value

        var percent = 0;
        // start the animation loop
        var handler = setInterval(function() {
            // values increment
            percent += 1;
            // apply new values
            data.setValue(0, 1, percent);
            data.setValue(1, 1, 100 - percent);
            // update the pie
            chart.draw(data, options);
            // check if we have reached the desired value
            if (percent > 74)
            // stop the loop
                clearInterval(handler);
        }, 30);
    }



    // This is for enabling click

    // Connect and Get Test Data
    const columnsRC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
    const columnsforDataRC = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
    var tablec = document.getElementById('tableOfficeTests');
    var cells = tablec.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function() {
            // Get the row id where the cell exists
            var modal = document.getElementById("ModalData");
            modal.style.display = "block";

            var rowId = this.parentNode.rowIndex;
            var rowsNotSelected = tablec.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.color = "#666666";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = tablec.getElementsByTagName('tr')[rowId];
            rowSelected.style.color = "#065397";
            rowSelected.className += "selected";
            var thistestname = rowSelected.cells[1].innerHTML;
            let thisrepl = thistestname.replaceAll(' ', '');

            var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;

            // Now pass TEST Name as Test Name and then send to server for data collection
            var ButtonIDNow = thisrepl + "Test";
            $.ajax({
                url: '/GetTestDataOnClick', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: false,
                data: {
                    'id': ButtonIDNow,
                    'ThisTenant': thisseltenant
                },
                success: function(data) {
                    if (data.message) { // That means if there is data available
                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");
                        var testissue, testimpact, testrec, testdesnow, testsevnow;
                        var datatable = document.createElement("table");
                        datatable.id = 'datatable'
                        var datatabledata = document.createElement("table");
                        datatabledata.id = 'datatabledata'
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var thisissue = cells[1];
                            var thisimpact = cells[1];
                            var thisrec = cells[1];
                            var thissevnow = cells[1];

                            if (newcell == "SEVERITY") {
                                var testsevnow = thissevnow;
                            }
                            if (newcell == "ISSUE") {
                                var testissue = thisissue;
                            }
                            if (newcell == "IMPACT") {
                                var testimpact = thisimpact;
                            }
                            if (newcell == "RECOMMENDATION") {
                                var testrec = thisrec;
                            }
                            if (newcell == "TESTRESULT") {
                                // alert(newcell + thistestname);
                                var row = datatable.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnsRC.includes(j)) {
                                        continue
                                    }
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }
                            if (newcell == "TESTDATA") {
                                // alert(newcell + thistestname);
                                var row = datatabledata.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnsRC.includes(j)) {
                                        continue
                                    }
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }
                        }
                        var dtable = document.getElementById("testdata");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatable);
                        var dtabledata = document.getElementById("testdatadata");
                        dtabledata.innerHTML = "";
                        dtabledata.appendChild(datatabledata);

                        var selectedtestnow = document.getElementById("selectedtest");
                        selectedtestnow.innerHTML = "Selected Test [ " + thistestname + "]";

                        var selectedtestnow = document.getElementById("selectedtestSevDispNow");
                        selectedtestnow.innerHTML = "Severity [ " + testsevnow + "]";

                        var checknow = testsevnow;
                        var SItem = checknow.replace(/\n/g, " ");
                        var FinalItem = SItem.replaceAll(' ', '');

                        if (FinalItem == "High" || FinalItem == "Medium" || FinalItem == "Low" || FinalItem == "Critical") {
                            document.getElementById("selectedtestSevDispNow").style.color = "red";
                        } else {
                            document.getElementById("selectedtestSevDispNow").style.color = "red";
                        }

                        document.getElementById("issuetextnow").value = testissue;
                        document.getElementById("impacttextnow").value = testimpact;
                        document.getElementById("rectextnow").value = testrec;
                        // document.getElementById("testdata").rows.item(0).style.fontSize = "12px";
                        // document.getElementById("testdata").rows.item(0).style.color = "blue";
                    } else {
                        alert("Error Executing Test");
                    }
                },
                error: function() {
                    alert("Error Executing Test");
                }
            });
            // alert(thistestname);
        }
    }


    // ENABLING CLICK FOR AZURE AD ISSUES TABLE
    const columnsRCRR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
    const columnsforDataRCRR = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
    var tabler = document.getElementById('AzureADIssuesTable');
    var cells = tabler.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function() {
            // Get the row id where the cell exists

            var rowId = this.parentNode.rowIndex;
            var rowsNotSelected = tabler.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.color = "#666666";
                rowsNotSelected[row].classList.remove('selected');
                rowsNotSelected[row].style.background = "transparent";
            }

            var rowSelected = tabler.getElementsByTagName('tr')[rowId];
            rowSelected.style.color = "black";
            rowSelected.style.background = "#B1EDFF";
            rowSelected.className += "selected";
            var thistestname = rowSelected.cells[0].innerHTML;
            let thisrepl = thistestname.replaceAll(' ', '');

            var ButtonIDNow = "";
            if (thisrepl == "NotLicensedUsers") {
                ButtonIDNow = "Office365UsersLicensingTestTest";
            }
            if (thisrepl == "DeletedbutLicensed") {
                ButtonIDNow = "Office365UsersDeletedandLicensedTestTest";
            }
            if (thisrepl == "PasswordNeverExpires") {
                ButtonIDNow = "Office365UsersPasswordNeverExpiresTestTest";
            }
            if (thisrepl == "NotChangedPasswordsWithin90Days") {
                ButtonIDNow = "Office365UsersNotChangedPasswordTestTest";
            }
            if (thisrepl == "NotUsingStrongPassword") {
                ButtonIDNow = "Office365UsersStrongPasswordRequirementsTestTest";
            }
            if (thisrepl == "ReconciliationNeeded") {
                ButtonIDNow = "Office365UsersReconciliationTestTest";
            }
            if (thisrepl == "NotProvisioned") {
                ButtonIDNow = "Office365UsersProvisioningTestTest";
            }


            if (thisrepl == "Blocked") {
                ButtonIDNow = "Office365BlockedUsersTestTest";
            }
            if (thisrepl == "Deleted") {
                ButtonIDNow = "Office365UsersDeletedTestTest";
            }
            if (thisrepl == "Disabled") {
                ButtonIDNow = "Office365UsersDisabledTestTest";
            }

            var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;

            $.ajax({
                url: '/GetTestDataOnClick', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: false,
                data: {
                    'id': ButtonIDNow,
                    'ThisTenant': thisseltenant
                },
                success: function(data) {
                    if (data.message) { // That means if there is data available
                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatable = document.createElement("table");
                        datatable.id = 'AzureIssuesDataTable'
                        datatable.setAttribute('class', 'SummaryTableClassTop');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var thisissue = cells[1];
                            var thisimpact = cells[1];
                            var thisrec = cells[1];
                            var thissevnow = cells[1];

                            if (newcell == "TESTDATA") {
                                // alert(newcell + thistestname);
                                var row = datatable.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnsRCRR.includes(j)) {
                                        continue
                                    }
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }
                        }

                        var dtable = document.getElementById("DivForAzureADIssuesTable");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatable);

                        //DisplayingIDTextAzureAD
                        document.getElementById("DisplayingIDTextAzureAD").innerHTML = "Test [ " + ButtonIDNow + " ]";

                    } else {
                        alert("Error Executing Test");
                    }
                },
                error: function() {
                    alert("Error Executing Test");
                }
            });
            // alert(thistestname);
        }
    }







    // ENABLING CLICK FOR EXCHANGE ONLINE ISSUES HERE
    const columnsRCRRExch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
    const columnsforDataRCRRExch = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
    var table = document.getElementById('ExchOnlineIssuesTable');
    var cells = table.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function() {
            // Get the row id where the cell exists

            var rowId = this.parentNode.rowIndex;
            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.color = "#666666";
                rowsNotSelected[row].classList.remove('selected');
                rowsNotSelected[row].style.background = "transparent";

            }

            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.color = "black";
            rowSelected.style.background = "#B1EDFF";
            rowSelected.className += "selected";
            var thistestname = rowSelected.cells[0].innerHTML;
            let thisrepl = thistestname.replaceAll(' ', '');

            var ButtonIDNow = "";
            var TestResOrData = "";

            if (thisrepl == "InactiveMailboxes") {
                ButtonIDNow = "Office365InactiveMailboxTestTest";
                TestResOrData = "TESTRESULT";
            }
            if (thisrepl == "HiddenMailboxes") {
                ButtonIDNow = "Office365MailboxHiddenFromAddressListTestTest";
                TestResOrData = "TESTDATA";
            }
            if (thisrepl == "MailboxesNotSycned") {
                ButtonIDNow = "Office365MailboxSyncTestTest";
                TestResOrData = "TESTDATA";
            }
            if (thisrepl == "ForwardingEnabled") {
                ButtonIDNow = "ExchangeOnlineExternalAddressforwardingTestTest";
                TestResOrData = "TESTDATA";
            }

            var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;

            $.ajax({
                url: '/GetTestDataOnClick', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: false,
                data: {
                    'id': ButtonIDNow,
                    'ThisTenant': thisseltenant
                },
                success: function(data) {
                    if (data.message) { // That means if there is data available
                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatable = document.createElement("table");
                        datatable.id = 'ExchangeIssuesDataTable'
                        datatable.setAttribute('class', 'SummaryTableClassTop');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var thisissue = cells[1];
                            var thisimpact = cells[1];
                            var thisrec = cells[1];
                            var thissevnow = cells[1];

                            if (newcell == TestResOrData) {
                                // alert(newcell + thistestname);
                                var row = datatable.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnsRCRRExch.includes(j)) {
                                        continue
                                    }
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }
                        }

                        var dtable = document.getElementById("DivForExchIssuesTable");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatable);

                        //DisplayingIDTextAzureAD
                        document.getElementById("DisplayingIDTextForExch").innerHTML = "Test [ " + ButtonIDNow + " ]";

                    } else {
                        alert("Error Executing Test");
                    }
                },
                error: function() {
                    alert("Error Executing Test");
                }
            });
            // alert(thistestname);
        }
    }



    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
                fontFamily: 'monospace',
                color: "red",
            }
        },
        title: {
            text: 'Issues Summary'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Critical',
                y: 10.41,
                sliced: true,
                selected: true
            }, {
                name: 'High',
                y: 11.84
            }, {
                name: 'Medium',
                y: 10.85
            }, {
                name: 'Low',
                y: 4.67
            }, {
                name: 'Passed',
                y: 4.18
            }, {
                name: 'Non-Compliant',
                y: 1.64
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });





    document.getElementById("ExecutionStatusIDForAll").style.display = "none";



});

































































































var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


function ExecuteRowByThis(element) {

    var checkconstatus = document.getElementById("OfficeConStatUS").style.color;
    if (checkconstatus == "green") {
        var ButtonIDNow = element.id
            // Now pass here ID as Test Name and then send to server for execution
        $.ajax({
            url: '/ExecuteSingleTest', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            data: {
                'id': ButtonIDNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available
                    var rows = data.message.split("\n");
                    // STARt Fill data now in Div
                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });
    } else {
        swal("Error!", "You must connect to Office 365 before executing any tests!", "error");
    }
}




function GetAzServicesChartData(element) {





}




function ExecuteRowByThisToShowData(element) {

    // Get the modal
    var modal = document.getElementById("ModalData");
    modal.style.display = "block";

}




$(document).ready(function() {
    $("#SearchAzureADDataBox").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#AzureIssuesDataTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



$(document).ready(function() {
    $("#myInputOfficeTest").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tableOfficeTests tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        document.getElementById('AllCriticalID').style.background = "white";
        document.getElementById('AllHighID').style.background = "white";
        document.getElementById('AllMediumID').style.background = "white";
        document.getElementById('AllLowID').style.background = "white";
        document.getElementById('AllPassedID').style.background = "white";
        document.getElementById('AllNotExecutedID').style.background = "white";
        document.getElementById('AllExchangeOnlineID').style.background = "white";
        document.getElementById('AllMSOnlineID').style.background = "white";
        document.getElementById('AllSharePointOnlineID').style.background = "white";
        document.getElementById('AllTeamsID').style.background = "white";
        document.getElementById('AllOneDriveID').style.background = "white";

    });
});


$("#ExecuteAllButton").click(function(e) {
    var checkconstatus = document.getElementById("OfficeConStatUS").style.color;
    if (checkconstatus == "green") {

        document.getElementById("ExecutionStatusIDForAll").style.display = "block";

        var thisseltenant = document.getElementById('SelectedTenantNow').innerHTML;
        document.getElementById("ExecutionStatusID").className = "fa fa-gear fa-spin";

        e.preventDefault();
        $.ajax({
            url: '/ExecuteAllOfficeTest', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            data: {
                'ThisTenant': thisseltenant
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    swal("Success", "All tests were sent for execution!", "success");
                    document.getElementById("ExecutionStatusID").className = "fa fa-gear";

                } else {
                    alert("Error");
                }
            },
            error: function() {
                alert("Error");
                document.getElementById("ExecutionStatusID").className = "fa fa-gear";
            }
        });






    } else {
        swal("Error!", "You must connect to Office 365 before executing any tests!", "error");
    }
});





$("#SwitchSelTenantNow").click(function(e) {

    document.getElementById("ExecutionStatusIDForAll").style.display = "block";

    var ThisTenSelected = document.getElementById("cars").value;
    // alert(ThisTenSelected);

    document.getElementById('SelectedTenantNow').innerHTML = ThisTenSelected;

    // this to enable buttons
    // document.getElementById("ConnectToOfficeID").disabled = false;          
    document.getElementById("LoadOfficeTestsID").disabled = false;
    document.getElementById("ExecuteAllButton").disabled = false;

    document.getElementById("LoadOfficeTestsID").click();

    document.getElementById("ExecutionStatusIDForAll").style.display = "none";

});




$("#FetchAllTenants").click(function(e) {

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

        var ThisMsg = "Fetching Partner Tenants is not production ready..."
        document.getElementById("FootMessageID").innerHTML = ThisMsg;
        document.getElementById("ThisMSGFooter").style.marginLeft = "00px";
        document.getElementById("GettingReadyID").style.display = "none";
        var MyTimerFooter = setInterval(function() { FunctionFooterDIV() }, 5000);

        function FunctionFooterDIV() {
            document.getElementById("ThisMSGFooter").style.marginLeft = "-400px";
            clearInterval(MyTimerFooter);
        }

        var DoNo = "No"

        if (DoNo == "Yes") {

            document.getElementById("FetchPartnerCircleID").style.visibility = "visible";

            e.preventDefault();
            $.ajax({
                url: '/FetchPartnerTenants', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: true,
                success: function(data) {
                    if (data.message) { // That means if there is data available
                        const columns = [0, 1, 2] // represents allowed column 1 and 3 in index form

                        alert(date.message);

                        if (data.message == "Success") {
                            document.getElementById("RefAllTenants").click();
                            swal("Info", "Partner Tenants were fetched", "info");

                        }
                        if (data.message == "Failed") {
                            swal("Error", "Partner Tenants were NOT fetched", "error");
                        }

                        document.getElementById("FetchPartnerCircleID").style.visibility = "hidden";

                    } else {
                        alert("Error Occcured");
                        document.getElementById("FetchPartnerCircleID").style.visibility = "hidden";

                    }
                },
                error: function() {
                    alert("Error Occcured");
                    document.getElementById("FetchPartnerCircleID").style.visibility = "hidden";

                }
            });
        }
    }
});






$("#RefAllTenantsNow").click(function(e) {

    var select = document.getElementById("cars");
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }

    e.preventDefault();
    $.ajax({
        url: '/LoadAllTenantsInExecution', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        success: function(data) {
            if (data.message) { // That means if there is data available

                const columnsTen = [0] // represents allowed column 1 and 3 in index form

                var x = document.getElementById("cars");

                var table = document.createElement("table");
                table.id = 'AllOfficeTenantsTableInExecution'
                table.setAttribute('class', 'SummaryTableClass');
                let resr = data.message.replaceAll('"', "");

                var rows = resr.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split("#");
                    if (cells.length > 1) {

                        var row = table.insertRow(-1);
                        var newcell = cells[0];
                        var checksevnow = cells[2];
                        var thistestnowall = cells[4];
                        if (newcell == 'Unique Name') {} else {
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed
                                if (!columnsTen.includes(j)) {
                                    continue
                                }

                                var thisTenNow = cells[j];

                                if (thisTenNow == "") {} else {
                                    var option = document.createElement("option");
                                    option.text = thisTenNow;
                                    x.add(option);
                                }

                            }

                        }
                    }
                }

            } else {
                alert("You must connect to Office 365");
            }
        },
        error: function() {
            alert("You must connect to Office 365");
        }
    });

});



$("#CheckTenCredButton").click(function(e) {

    var TenGAUser = document.getElementById("ConUserNameNew").value;
    var TenGAPass = document.getElementById("GlobalPassNow").value;

    if (TenGAUser == "" || TenGAUser == null) {
        swal("Error", "Please enter Global Reader Account and Password!", "error");
    } else {

        document.getElementById("TenCredStatusID").style.visibility = "visible";

        // Now pass Tenant Values here
        $.ajax({
            url: '/TestTenCreds', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: true,
            data: {
                'TenGAUserNow': TenGAUser,
                'TenGAPassNow': TenGAPass
            },
            success: function(data) {

                var SItem = data.message.replace(/[\r\n]+/gm, "");
                var FinalItem = SItem.replaceAll(' ', '');

                // alert("R" + FinalItem+"R");

                if (data.message) {
                    if (FinalItem == "Failed") {
                        document.getElementById("TenCredStatusID").style.visibility = "hidden";
                        swal("Error", "Global Reader Account Credentials are NOT Ok", "error");

                    }
                    if (FinalItem == "Success") {
                        document.getElementById("TenCredStatusID").style.visibility = "hidden";
                        swal("Info", "Global Reader Account Credentials are OK!", "info");

                    }
                } else {
                    document.getElementById("TenCredStatusID").style.visibility = "hidden";
                    alert("Error");
                }
            },
            error: function() {
                alert("Error");
            }
        });

    }
});



$("#TestSPNButton").click(function(e) {

    var SPNGUID = document.getElementById("SPNGUID").value;
    var SPNPass = document.getElementById("SPNPass").value;
    var SPNSUBID = document.getElementById("SPNSUBID").value;
    var SPNTenantID = document.getElementById("SPNTenantID").value;
    var TRPKey = document.getElementById("TRPKeyN").value;
    var GovOrNot = document.getElementById("TenUsingGOVCloud").checked;
    if (GovOrNot == true) {
        var FinalGOVOrNot = "GOV"
    } else {
        var FinalGOVOrNot = "NOGOV"
    }

    if (SPNGUID == "" || SPNGUID == null) {
        swal("Error", "Please enter SPN Details!", "error");
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
                'TRPKey': TRPKey,
                'FinalGOVOrNot': FinalGOVOrNot
            },
            success: function(data) {

                var SItem = data.message.replace(/[\r\n]+/gm, "");
                var FinalItem = SItem.replaceAll(' ', '');

                // alert("R" + FinalItem+"R");

                if (data.message) {
                    if (FinalItem == "Failed") {
                        document.getElementById("TestingSPNCircleA").style.display = "none";
                        swal("Error", "Service Principal Account Credentials are NOT Ok", "error");

                    }
                    if (FinalItem == "Success") {
                        document.getElementById("TestingSPNCircleA").style.display = "none";
                        swal("Info", "Service Principal Account Credentials are OK!", "info");

                    }
                } else {
                    document.getElementById("TestingSPNCircleA").style.display = "none";
                    alert("Error");
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




document.getElementById("AllHighID").addEventListener("click", function() {

    document.getElementById('DisplayingID').innerHTML = "Displaying: High ITtems";

    var SelectedValNow = "High";

    var table = document.getElementById('tableOfficeTests');
    var cells = table.getElementsByTagName('td');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    for (var i = 1; i < table.rows.length; i++) {

        var firstCol = table.rows[i].cells[2]; //first column                    
        var checknow = firstCol.innerHTML;
        var SItem = checknow.replace(/\n/g, " ");
        var FinalItem = SItem.replaceAll(' ', '');

        if (FinalItem == "Execute") {

        } else {
            if (FinalItem == SelectedValNow) {
                table.rows[i].style.display = '';
            } else {
                table.rows[i].style.display = 'none';
            }
        }
        // console.log(firstCol.innerHTML);// or anything you want to do with first col
    }


    document.getElementById('AllCriticalID').style.background = "white";
    document.getElementById('AllHighID').style.background = "#00b7ff";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "white";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});




document.getElementById("AllPassedID").addEventListener("click", function() {

    document.getElementById('DisplayingID').innerHTML = "Displaying: Passed Items";

    var SelectedValNow = "Passed";

    var table = document.getElementById('tableOfficeTests');
    var cells = table.getElementsByTagName('td');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    for (var i = 1; i < table.rows.length; i++) {

        var firstCol = table.rows[i].cells[2]; //first column                    
        var checknow = firstCol.innerHTML;
        var SItem = checknow.replace(/\n/g, " ");
        var FinalItem = SItem.replaceAll(' ', '');

        if (FinalItem == "Execute") {

        } else {
            if (FinalItem == SelectedValNow) {
                table.rows[i].style.display = '';
            } else {
                table.rows[i].style.display = 'none';
            }
        }
        // console.log(firstCol.innerHTML);// or anything you want to do with first col
    }


    document.getElementById('AllCriticalID').style.background = "white";
    document.getElementById('AllHighID').style.background = "White";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "white";
    document.getElementById('AllPassedID').style.background = "#00b7ff";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});



document.getElementById("AllLowID").addEventListener("click", function() {

    document.getElementById('DisplayingID').innerHTML = "Displaying: Low Items";

    var SelectedValNow = "Low";

    var table = document.getElementById('tableOfficeTests');
    var cells = table.getElementsByTagName('td');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    for (var i = 1; i < table.rows.length; i++) {

        var firstCol = table.rows[i].cells[2]; //first column                    
        var checknow = firstCol.innerHTML;
        var SItem = checknow.replace(/\n/g, " ");
        var FinalItem = SItem.replaceAll(' ', '');

        if (FinalItem == "Execute") {

        } else {
            if (FinalItem == SelectedValNow) {
                table.rows[i].style.display = '';
            } else {
                table.rows[i].style.display = 'none';
            }
        }
        // console.log(firstCol.innerHTML);// or anything you want to do with first col
    }


    document.getElementById('AllCriticalID').style.background = "white";
    document.getElementById('AllHighID').style.background = "White";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "#00b7ff";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});




document.getElementById("AllCriticalID").addEventListener("click", function() {

    document.getElementById('DisplayingID').innerHTML = "Displaying: Critical Items";

    var SelectedValNow = "Critical";

    var table = document.getElementById('tableOfficeTests');
    var cells = table.getElementsByTagName('td');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    for (var i = 1; i < table.rows.length; i++) {

        var firstCol = table.rows[i].cells[2]; //first column                    
        var checknow = firstCol.innerHTML;
        var SItem = checknow.replace(/\n/g, " ");
        var FinalItem = SItem.replaceAll(' ', '');

        if (FinalItem == "Execute") {

        } else {
            if (FinalItem == SelectedValNow) {
                table.rows[i].style.display = '';
            } else {
                table.rows[i].style.display = 'none';
            }
        }
        // console.log(firstCol.innerHTML);// or anything you want to do with first col
    }


    document.getElementById('AllCriticalID').style.background = "#00b7ff";
    document.getElementById('AllHighID').style.background = "White";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "White";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});






document.getElementById("AllNotExecutedID").addEventListener("click", function() {

    document.getElementById('DisplayingID').innerHTML = "Displaying: Not Executed Items";

    var SelectedValNow = "NotExecuted";

    var table = document.getElementById('tableOfficeTests');
    var cells = table.getElementsByTagName('td');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    for (var i = 1; i < table.rows.length; i++) {

        var firstCol = table.rows[i].cells[2]; //first column                    
        var checknow = firstCol.innerHTML;
        var SItem = checknow.replace(/\n/g, " ");
        var FinalItem = SItem.replaceAll(' ', '');

        if (FinalItem == "Execute") {

        } else {
            if (FinalItem == SelectedValNow) {
                table.rows[i].style.display = '';
            } else {
                table.rows[i].style.display = 'none';
            }
        }
        // console.log(firstCol.innerHTML);// or anything you want to do with first col
    }


    document.getElementById('AllCriticalID').style.background = "White";
    document.getElementById('AllHighID').style.background = "White";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "White";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "#00b7ff";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});




document.getElementById("AllMediumID").addEventListener("click", function() {

    document.getElementById('DisplayingID').innerHTML = "Displaying: High ITtems";

    var SelectedValNow = "Medium";

    var table = document.getElementById('tableOfficeTests');
    var cells = table.getElementsByTagName('td');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    for (var i = 1; i < table.rows.length; i++) {

        var firstCol = table.rows[i].cells[2]; //first column                    
        var checknow = firstCol.innerHTML;
        var SItem = checknow.replace(/\n/g, " ");
        var FinalItem = SItem.replaceAll(' ', '');

        if (FinalItem == "Execute") {

        } else {
            if (FinalItem == SelectedValNow) {
                table.rows[i].style.display = '';
            } else {
                table.rows[i].style.display = 'none';
            }
        }
        // console.log(firstCol.innerHTML);// or anything you want to do with first col
    }


    document.getElementById('AllCriticalID').style.background = "white";
    document.getElementById('AllHighID').style.background = "white";
    document.getElementById('AllMediumID').style.background = "#00b7ff";
    document.getElementById('AllLowID').style.background = "white";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});




document.getElementById("ResetFilterNow").addEventListener("click", function() {

    var e = document.getElementById("cars");
    var SelectedValNow = e.value;
    // alert(SelectedValNow);

    // Connect and Get Test Data
    var table = document.getElementById('tableOfficeTests');
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    document.getElementById('DisplayingID').innerHTML = "All Tests";

    document.getElementById('AllCriticalID').style.background = "white";
    document.getElementById('AllHighID').style.background = "White";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "white";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById("RestFiltIDIcon").style.display = "block";

});



document.getElementById("RestFiltIDIcon").addEventListener("click", function() {

    var e = document.getElementById("cars");
    var SelectedValNow = e.value;
    // alert(SelectedValNow);

    // Connect and Get Test Data
    var table = document.getElementById('tableOfficeTests');
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].style.display = '';
    }

    document.getElementById('DisplayingID').innerHTML = "All Tests";

    document.getElementById('AllCriticalID').style.background = "white";
    document.getElementById('AllHighID').style.background = "White";
    document.getElementById('AllMediumID').style.background = "white";
    document.getElementById('AllLowID').style.background = "white";
    document.getElementById('AllPassedID').style.background = "white";
    document.getElementById('AllNotExecutedID').style.background = "white";
    document.getElementById('AllExchangeOnlineID').style.background = "white";
    document.getElementById('AllMSOnlineID').style.background = "white";
    document.getElementById('AllSharePointOnlineID').style.background = "white";
    document.getElementById('AllTeamsID').style.background = "white";
    document.getElementById('AllOneDriveID').style.background = "white";

    document.getElementById('RestFiltIDIcon').style.display = "none";



});



document.getElementById("CloseDataForm").addEventListener("click", function() {

    var modal = document.getElementById("ModalData");
    modal.style.display = "none";


});



function CheckSelectdTenant() {
    /*
  var ThisTenSelected = document.getElementById("cars").value;
  // alert(ThisTenSelected);
 
  document.getElementById('SelectedTenantNow').innerHTML = ThisTenSelected;
 
  // this to enable buttons
        document.getElementById("ConnectToOfficeID").disabled = false;          
        document.getElementById("LoadOfficeTestsID").disabled = false;          
        document.getElementById("ExecuteAllButton").disabled = false;          
        
      
  document.getElementById("LoadOfficeTestsID").click();        
  */

}





document.getElementById("ExportAzureADTableData").addEventListener("click", function() {
    if (confirm('Export Data?')) {

        var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
        var textRange;
        var j = 0;
        tab = document.getElementById('AzureIssuesDataTable'); // id of table

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
    }
});


document.getElementById("ExportCSVFileID").addEventListener("click", function() {
    if (confirm('Export Data?')) {

        var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
        var textRange;
        var j = 0;
        tab = document.getElementById('datatable'); // id of table

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
    }
});


document.getElementById("ExportCSVFileDataID").addEventListener("click", function() {
    if (confirm('Export Data?')) {

        var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
        var textRange;
        var j = 0;
        tab = document.getElementById('datatabledata'); // id of table

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
    }
});


document.getElementById("GenWordReportID").addEventListener("click", function() {

    var vartechnow = "Technology: Office 365"

    if (vartechnow == "Technology: Office 365") {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var sourceHTML = header + document.getElementById("source-htmlOffice").innerHTML + footer;

        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'Office 365 Assessment Report.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }

    if (vartechnow == "Technology: Active Directory") {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var sourceHTML = header + document.getElementById("source-html").innerHTML + footer;

        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'Active Directory Assessment Report.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }

});















document.getElementById("GenHTMLReportID").addEventListener("click", function() {

    var vartechnow = "Technology: Office 365"

    if (vartechnow == "Technology: Office 365") {
        const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

        // window.open("http://thecloudassessment.com/htmlreport/");

        // Replace all texts first
        var elemcustoername = document.getElementById('customername').value
        var elemcustoeraddress = document.getElementById('custaddress').value
        var elemcustoerbranch = document.getElementById('customerbranch').value
        var elemcustoeremp = document.getElementById('customeremp').value
        var econsultingfirmname = document.getElementById('consultingfirmname').value
        var edateofassessment = document.getElementById('dateofassessment').value
        var emaintelephone = document.getElementById('maintelephone').value
        var edirectphone = document.getElementById('directphone').value
        var eemailaddr = document.getElementById('emailaddr').value
        var eprojectname = document.getElementById('projectname').value
        var eprojectdate = document.getElementById('projectdate').value

        var a = document.getElementById("officeword-consultingname");
        a.innerHTML = econsultingfirmname + ", Professional Services";
        a.style.color = "#c81207";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-customername");
        a.innerHTML = "Customer: " + elemcustoername;
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-customernameintable");
        a.innerHTML = elemcustoername;
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-customeraddressintable");
        a.innerHTML = elemcustoeraddress;
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-optbranches");
        a.innerHTML = elemcustoerbranch;
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-totalemps");
        a.innerHTML = elemcustoeremp;
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-consultingname-2");
        a.innerHTML = econsultingfirmname;
        a.style.color = "#c81207";
        a.style.fontSize = "20px";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-assessmentdate");
        a.innerHTML = "Assessment Date: " + edateofassessment;
        a.style.color = "#595959";
        a.style.fontSize = "13px";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-telephone");
        a.innerHTML = "Phone: " + emaintelephone;
        a.style.color = "#595959";
        a.style.fontSize = "13px";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-directphone");
        a.innerHTML = "Direct Phone: " + edirectphone;
        a.style.color = "#595959";
        a.style.fontSize = "13px";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-emailaddr");
        a.innerHTML = "Email: " + eemailaddr;
        a.style.color = "#595959";
        a.style.fontSize = "13px";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-projectname");
        a.innerHTML = "Project: " + eprojectname;
        a.style.color = "#595959";
        a.style.fontSize = "13px";
        a.style.fontFamily = "Calibri";

        var a = document.getElementById("officeword-effectivedate");
        a.innerHTML = "Effective Date: " + eprojectdate;
        a.style.color = "#595959";
        a.style.fontSize = "13px";
        a.style.fontFamily = "Calibri";

        // THIS is for appending to ANOTHER DATA Table


        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof(FileReader) != "undefined") {

                var reader = new FileReader();
                reader.onload = function(e) {

                    var dothis = "Yes";

                    if (dothis == "Yes") {
                        // THIS IS FOR Office 365 SKU Test
                        var reporttablea = document.getElementById("totissuesnowinOffice365Table");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Issues Status";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Critical") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "25px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "red";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        cell.style.textAlign = "center";

                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeSubStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        // THIS IS FOR Office 365 SKU Test
                        var reporttablea = document.getElementById("ServiceWiseIssuesTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Issues-Services-Wise";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Office 365 Service") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "black";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        cell.style.textAlign = "left";

                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeSubStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        // THIS IS FOR Office 365 SKU Test
                        var reporttablea = document.getElementById("totcompnotcompTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Compliance Status";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Compliance Items") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "black";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        cell.style.textAlign = "left";

                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeSubStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        // THIS IS FOR Office 365 SKU Test
                        var reporttablea = document.getElementById("DIVOfficeSKUStatusTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Subscription Status Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "SKU Name") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeSubStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        // THIS IS FOR OFFICE 365 DOMAINS AND STATUS
                        var reporttablea = document.getElementById("DIVOfficeDomainVerStatus");
                        reporttablea.setAttribute('class', '	ReportTableClass');

                        var thistestname = "Office 365 Domain Verification Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Domain") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        //	var dtable = document.getElementById("DIVOfficeDomStatus");
                        //	dtable.innerHTML = "";
                        //	dtable.appendChild(reporttablea);
                        // THIS IS FOR OFFICE 365 DOMAINS AND STATUS
                    }

                    if (dothis == "Yes") {
                        const columnsDomPass = [1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("OfficeDomPasswordTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Ensure that Office 365 Passwords Are Not Set to Expire";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Office Domain") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsDomPass.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVDomPasswordStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        const columnsDomServiceCol = [1, 2, 3] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("TableOfficeDomStatusAndServices");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Domain Services Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Domain") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsDomServiceCol.includes(j)) {
                                            continue
                                        }

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVDomServiceStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {

                        // THIS IS FOR Office 365 License Consumption Test
                        var reporttablea = document.getElementById("OfficeLicensesTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 License Consumption Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "License") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeSubStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {
                        const columnsUserLic = [1, 2, 3] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("OfficeLicDisTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users Licensing Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsUserLic.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeLicenseDist");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {

                        const columnsReCon = [1, 2, 3] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("OfficeLicReconTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users Reconciliation Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsReCon.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeLicenseRecon");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        // THIS IS
                        var reporttablea = document.getElementById("DIVOfficeDIRSYNCStatusTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Dir Config Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeDirSyncStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {

                        // THIS IS
                        var reporttablea = document.getElementById("DirSyncFetStatusTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Dir Sync Features Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "DIR Sync Feature") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeDirSyncFetStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsDir = [0, 1] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("dirsyncerrortable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Dir Sync Property Conflict with User Principal Name Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Objects in Property Conflict for UPN") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsDir.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeDirSyncFetStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsDir = [0, 1] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("dirsyncerrortable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Dir Sync Property Conflict with ProxyAddress Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Objects in Property Conflict for ProxyAddress") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsDir.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeDirSyncFetStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsmailbox = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("MailBoxTypesTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Types Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Mailbox Type") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsmailbox.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxTypes");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsrole = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("RoleAssignmentPolicyTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Role Assignment Policies Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Role Assignment Policy") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsrole.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeAssignmentPol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        const columnsaudit = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("AuditPolicyTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Audit Policy Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Audit Policy") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsaudit.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeAuditPol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {
                        const columnscap = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("AssignmentCapTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Capabilities Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Capabilities") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnscap.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxCap");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsretention = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("OfficeRetentionPolTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Retention Policies Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Retention Policy") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsretention.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxRetPeriodPol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsusageloc = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("MailBoxUsagesLocationTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox UsagesLocation Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Usage Location") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsusageloc.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxLocations");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsMaxSend = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("TableMaxSendPolicy");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Max Send Policy Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "MaxSendSize Policy") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsMaxSend.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxSendPol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsMailBoxRecPol = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("TableMaximumRecPol");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Max Receive Policy Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "MaxReceiveSize Policy") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsMailBoxRecPol.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxRcvPol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        // THIS IS
                        var reporttablea = document.getElementById("TableStoragePol");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Storage Mailbox Policy Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Policy Name") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {
                        const columnsMailBoxHidden = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("HiddenMailboxTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Hidden From Address List Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Mailboxes") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsMailBoxHidden.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxHidden");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsMailBoxSync = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("MailboxSyncStatusTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Mailbox Sync Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Mailboxes") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsMailBoxSync.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxSyncStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        // THIS IS
                        var reporttablea = document.getElementById("AdminLoggingTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Exchange Online Admin Auditing Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columns.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsPass = [1, 2, 3, 4, 5] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("userpasstable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Compliance - Users and Passwords";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsPass.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuPassOK = [1, 2, 3, 4, 5] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("compMFAandOtherTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Compliance - MFA and Other Items";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuPassOK.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {

                        const columnsPassR = [1, 2, 3, 4, 5] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("ExchangeOnlineCompTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Compliance - Exchanage Online Mailbox";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsPassR.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }

                    if (dothis == "Yes") {
                        const columnsCOMPNow = [1, 2, 4, 6] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("COMPEmailExchangeOnline");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestcat = "Email/Exchange Online";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[8];
                            var firstrow = cells[1];
                            var sumornot = cells[0];
                            var compstat = cells[6];
                            var checksevnow = cells[2];

                            if (sumornot == "SUMMARY") {
                                if (newcell == thistestcat) {
                                    // if (x == 5 || x == 8)

                                    if (compstat == "Compliant" || compstat == "Non-Compliant") {
                                        var row = reporttablea.insertRow(-1);
                                        for (var j = 0; j < cells.length; j++) {
                                            // ignore columns that are not allowed
                                            if (!columnsCOMPNow.includes(j)) {
                                                continue
                                            }
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.color = "#666666";
                                            cell.style.borderBottom = "1px solid #666666";
                                            cell.style.padding = "10px" + "!important";
                                            // cell.style.width = 100 + "%";

                                            if (checksevnow == "High" || checksevnow == "Medium") {
                                                cell.style.color = "red";
                                            }
                                            if (checksevnow == "Passed") {
                                                cell.style.color = "green";
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {
                        const columnsCOMPNow = [1, 2, 4, 6] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("COMPAccessAuthTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestcat = "Accounts And Authentication";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[8];
                            var firstrow = cells[1];
                            var sumornot = cells[0];
                            var compstat = cells[6];
                            var checksevnow = cells[2];

                            if (sumornot == "SUMMARY") {
                                if (newcell == thistestcat) {
                                    // if (x == 5 || x == 8)

                                    if (compstat == "Compliant" || compstat == "Non-Compliant") {
                                        var row = reporttablea.insertRow(-1);
                                        for (var j = 0; j < cells.length; j++) {
                                            // ignore columns that are not allowed
                                            if (!columnsCOMPNow.includes(j)) {
                                                continue
                                            }
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.color = "#666666";
                                            cell.style.borderBottom = "1px solid #666666";
                                            cell.style.padding = "10px" + "!important";
                                            // cell.style.width = 100 + "%";

                                            if (checksevnow == "High" || checksevnow == "Medium") {
                                                cell.style.color = "red";
                                            }
                                            if (checksevnow == "Passed") {
                                                cell.style.color = "green";
                                            }

                                        }
                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }



                    if (dothis == "Yes") {
                        const columnsCOMPNowNew = [1, 2, 4, 6] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("COMPAppPermTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestcat = "Application Permissions";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[8];
                            var firstrow = cells[1];
                            var sumornot = cells[0];
                            var compstat = cells[6];
                            var checksevnow = cells[2];

                            if (sumornot == "SUMMARY") {
                                if (newcell == thistestcat) {
                                    // if (x == 5 || x == 8)

                                    if (compstat == "Compliant" || compstat == "Non-Compliant") {
                                        var row = reporttablea.insertRow(-1);
                                        for (var j = 0; j < cells.length; j++) {
                                            // ignore columns that are not allowed
                                            if (!columnsCOMPNowNew.includes(j)) {
                                                continue
                                            }
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.color = "#666666";
                                            cell.style.borderBottom = "1px solid #666666";
                                            cell.style.padding = "10px" + "!important";
                                            // cell.style.width = 100 + "%";
                                            if (checksevnow == "High" || checksevnow == "Medium") {
                                                cell.style.color = "red";
                                            }
                                            if (checksevnow == "Passed") {
                                                cell.style.color = "green";
                                            }

                                        }
                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }



                    if (dothis == "Yes") {
                        const columnsCOMPNowOld = [1, 2, 4, 6] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("COMPDataMTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestcat = "Data Management";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[8];
                            var firstrow = cells[1];
                            var sumornot = cells[0];
                            var compstat = cells[6];
                            var checksevnow = cells[2];

                            if (sumornot == "SUMMARY") {
                                if (newcell == thistestcat) {
                                    // if (x == 5 || x == 8)

                                    if (compstat == "Compliant" || compstat == "Non-Compliant") {
                                        var row = reporttablea.insertRow(-1);
                                        for (var j = 0; j < cells.length; j++) {
                                            // ignore columns that are not allowed
                                            if (!columnsCOMPNowOld.includes(j)) {
                                                continue
                                            }
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.color = "#666666";
                                            cell.style.borderBottom = "1px solid #666666";
                                            cell.style.padding = "10px" + "!important";
                                            // cell.style.width = 100 + "%";

                                            if (checksevnow == "High" || checksevnow == "Medium") {
                                                cell.style.color = "red";
                                            }
                                            if (checksevnow == "Passed") {
                                                cell.style.color = "green";
                                            }

                                        }
                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }



                    if (dothis == "Yes") {
                        const columnsCOMPNowT = [1, 2, 4, 6] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("COMPAuditingTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestcat = "Auditing";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[8];
                            var firstrow = cells[1];
                            var sumornot = cells[0];
                            var compstat = cells[6];
                            var checksevnow = cells[2];

                            if (sumornot == "SUMMARY") {
                                if (newcell == thistestcat) {
                                    // if (x == 5 || x == 8)

                                    if (compstat == "Compliant" || compstat == "Non-Compliant") {
                                        var row = reporttablea.insertRow(-1);
                                        for (var j = 0; j < cells.length; j++) {
                                            // ignore columns that are not allowed
                                            if (!columnsCOMPNowT.includes(j)) {
                                                continue
                                            }
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.color = "#666666";
                                            cell.style.borderBottom = "1px solid #666666";
                                            cell.style.padding = "10px" + "!important";
                                            // cell.style.width = 100 + "%";

                                            if (checksevnow == "High" || checksevnow == "Medium") {
                                                cell.style.color = "red";
                                            }
                                            if (checksevnow == "Passed") {
                                                cell.style.color = "green";
                                            }

                                        }
                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }



                    if (dothis == "Yes") {
                        const columnsCOMPNowJ = [1, 2, 4, 6] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST

                        // THIS IS
                        var reporttablea = document.getElementById("COMPStorageTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestcat = "Storage";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[8];
                            var firstrow = cells[1];
                            var sumornot = cells[0];
                            var compstat = cells[6];
                            var checksevnow = cells[2];

                            if (sumornot == "SUMMARY") {
                                if (newcell == thistestcat) {
                                    // if (x == 5 || x == 8)

                                    if (compstat == "Compliant" || compstat == "Non-Compliant") {
                                        var row = reporttablea.insertRow(-1);
                                        for (var j = 0; j < cells.length; j++) {
                                            // ignore columns that are not allowed
                                            if (!columnsCOMPNowJ.includes(j)) {
                                                continue
                                            }
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];
                                            cell.style.fontSize = "12px";
                                            cell.style.fontFamily = "Calibri";
                                            cell.style.color = "#666666";
                                            cell.style.borderBottom = "1px solid #666666";
                                            cell.style.padding = "10px" + "!important";
                                            // cell.style.width = 100 + "%";

                                            if (checksevnow == "High" || checksevnow == "Medium") {
                                                cell.style.color = "red";
                                            }
                                            if (checksevnow == "Passed") {
                                                cell.style.color = "green";
                                            }

                                        }
                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeExchangeOnlineAdminLoggingStatus");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuPassNew = [1, 2, 3, 4, 5] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("BlockedAndOtherUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Deleted/Blocked/Disabled Users";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuPassNew.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Emtpy Department Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty Country Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty Title Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty StreetAddress Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty State Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty Phone Numer Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty Mobile Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users with Empty UsageLocation Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [0, 1, 2, 3, 4] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("OfficeEmptyUsersTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Users With Empty PostalCode Field Test";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Total Users") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("AdminFailureAndSuccessTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Exchange Online Admin Success and Failure Attempts";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                    if (dothis == "Yes") {

                        const columnsuEmpty = [1, 2] // MAKE SURE WE COLLECT ALL DATA COLUMNS FOR TEST
                            // THIS IS
                        var reporttablea = document.getElementById("AdminFailureAndSuccessTable");
                        reporttablea.setAttribute('class', 'ReportTableClass');

                        var thistestname = "Office 365 Exchange Online External Access Admin Success and Failure Attempts";
                        // alert(thistestname);

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var firstrow = cells[1];

                            if (newcell == thistestname) {
                                if (firstrow == "Item") // This is to fill header of Table
                                {} else {
                                    var row = reporttablea.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        // ignore columns that are not allowed
                                        if (!columnsuEmpty.includes(j)) {
                                            continue
                                        }
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                        cell.style.fontSize = "12px";
                                        cell.style.fontFamily = "Calibri";
                                        cell.style.color = "#666666";
                                        cell.style.borderBottom = "1px solid #666666";
                                        cell.style.padding = "10px" + "!important";
                                        // cell.style.width = 100 + "%";

                                    }
                                }
                            }
                        }

                        // var dtable = document.getElementById("DIVOfficeMailboxStoragePol");
                        // dtable.innerHTML = "";
                        // dtable.appendChild(reporttablea);
                    }


                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }

        // This is for filling all Issues in the Table
        const columnssum = [1, 2, 3, 4, 5] // represents allowed column 1 and 3 in index form
        const columnsPassedOffice = [1, 2, 3] // represents allowed column 1 and 3 in index form

        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof(FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function(e) {

                    // START - FOR CREATING SUMMARY TABLE
                    var targetnow = "";
                    var technow = "";

                    var allissuestableOffice = document.getElementById("OfficeAllIssuesTable");
                    allissuestableOffice.setAttribute('class', 'ReportTableClass');

                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var checksev = cells[2];

                        if (newcell == "SUMMARY") {
                            if (checksev == "Critical") {
                                var row = allissuestableOffice.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnssum.includes(j)) {
                                        continue
                                    }

                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                    cell.style.fontSize = "12px";
                                    cell.style.fontFamily = "Calibri";
                                    cell.style.borderBottom = "1px solid #666666";
                                    cell.style.padding = "10px" + "!important";
                                    cell.style.width = 100 + "%";

                                    var newr = cells[j];
                                    if (newr == "Critical") {
                                        cell.style.color = "red";
                                    } else {
                                        cell.style.color = "#666666";
                                    }
                                }
                            }
                        }
                    }

                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var checksev = cells[2];

                        if (newcell == "SUMMARY") {
                            if (checksev == "High") {
                                var row = allissuestableOffice.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnssum.includes(j)) {
                                        continue
                                    }

                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                    cell.style.fontSize = "12px";
                                    cell.style.fontFamily = "Calibri";
                                    cell.style.borderBottom = "1px solid #666666";
                                    cell.style.padding = "10px" + "!important";
                                    cell.style.width = 100 + "%";

                                    var newr = cells[j];
                                    if (newr == "High") {
                                        cell.style.color = "red";
                                    } else {
                                        cell.style.color = "#666666";
                                    }

                                }
                            }
                        }
                    }

                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var checksev = cells[2];

                        if (newcell == "SUMMARY") {
                            if (checksev == "Medium") {
                                var row = allissuestableOffice.insertRow(-1);

                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnssum.includes(j)) {
                                        continue
                                    }

                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                    cell.style.fontSize = "12px";
                                    cell.style.fontFamily = "Calibri";
                                    cell.style.borderBottom = "1px solid #666666";
                                    cell.style.padding = "10px" + "!important";
                                    cell.style.width = 100 + "%";

                                    var newr = cells[j];
                                    if (newr == "Medium") {
                                        cell.style.color = "red";
                                    } else {
                                        cell.style.color = "#666666";
                                    }
                                }
                            }
                        }
                    }

                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var checksev = cells[2];

                        if (newcell == "SUMMARY") {
                            if (checksev == "Low") {
                                var row = allissuestableOffice.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnssum.includes(j)) {
                                        continue
                                    }
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                    cell.style.fontSize = "12px";
                                    cell.style.fontFamily = "Calibri";
                                    cell.style.borderBottom = "1px solid #666666";
                                    cell.style.padding = "10px" + "!important";
                                    cell.style.width = 100 + "%";

                                    var newr = cells[j];
                                    if (newr == "Low") {
                                        cell.style.color = "red";
                                    } else {
                                        cell.style.color = "#666666";
                                    }
                                }
                            }
                        }
                    }


                    // START - FOR CREATING SUMMARY TABLE
                    var targetnow = "";
                    var technow = "";

                    var allissuestableOffice = document.getElementById("AllPassedTableOffice");
                    allissuestableOffice.setAttribute('class', 'ReportTableClass');

                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        var newcell = cells[0];
                        var checksev = cells[2];

                        if (newcell == "SUMMARY") {
                            if (checksev == "Passed") {
                                var row = allissuestableOffice.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    // ignore columns that are not allowed
                                    if (!columnsPassedOffice.includes(j)) {
                                        continue
                                    }

                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                    cell.style.fontSize = "12px";
                                    cell.style.fontFamily = "Calibri";
                                    cell.style.borderBottom = "1px solid #666666";
                                    cell.style.padding = "10px" + "!important";
                                    cell.style.width = 100 + "%";

                                    var newr = cells[j];
                                    if (newr == "Passed") {
                                        cell.style.color = "green";
                                    } else {
                                        cell.style.color = "#666666";
                                    }
                                }
                            }
                        }
                    }

                    // var dvCSV = document.getElementById("DIVAllIssues");
                    // dvCSV.innerHTML = "";
                    // dvCSV.appendChild(allissuestableOffice);




                    alert("Office 365 HTML Report has been generated successfully. Please click on Generate Word Report button if you would like to generate a Word Report.");


                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }

        } else {
            alert("Please upload a valid CSV file.");
        }

    }


});




$(document).ready(function() {
    $("#SearchInResList").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ResInBillPeriodTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



$(document).ready(function() {
    $("#SearchInInstRes").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ResByInstanceBillPeriodTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



$(document).ready(function() {
    $("#SearchInAzServicesList").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ResByAzServicesBillPeriodTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



$(document).ready(function() {
    $("#SearchInResourceGroupList").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#ResByResourceGroupsBillPeriodTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});




$("#ClickedTabOne").click(function(e) {

    var modal = document.getElementById("ObjectsDivAllResources");
    modal.style.display = "block";

    var modal = document.getElementById("ObjectsDivCostResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivAzureServicesDIV");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllRSGroups");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllVMs");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllLocations");
    modal.style.display = "none";


    document.getElementById("ClickedTabFour").style.border = "0px";
    document.getElementById("ClickedTabFour").style.fontWeight = "300";
    document.getElementById("ClickedTabFour").style.background = "white";

    document.getElementById("ClickedTabTwo").style.border = "0px";
    document.getElementById("ClickedTabTwo").style.fontWeight = "300";
    document.getElementById("ClickedTabTwo").style.background = "white";

    document.getElementById("ClickedTabThree").style.border = "0px";
    document.getElementById("ClickedTabThree").style.fontWeight = "300";
    document.getElementById("ClickedTabThree").style.background = "white";

    document.getElementById("ClickedTabFive").style.border = "0px";
    document.getElementById("ClickedTabFive").style.fontWeight = "300";
    document.getElementById("ClickedTabFive").style.background = "white";

    document.getElementById("ClickedTabSix").style.border = "0px";
    document.getElementById("ClickedTabSix").style.fontWeight = "300";
    document.getElementById("ClickedTabSix").style.background = "white";

    document.getElementById("ClickedTabOne").style.border = "1px solid #c8c8c8";
    document.getElementById("ClickedTabOne").style.fontWeight = "400";
    document.getElementById("ClickedTabOne").style.borderRadius = "0px 100px 0px 0px";
    document.getElementById("ClickedTabOne").style.background = "#f4f4f4";
    document.getElementById("ClickedTabOne").style.borderBottom = "0px";
});





$("#ClickedTabTwo").click(function(e) {

    var modal = document.getElementById("ObjectsDivAllResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivCostResources");
    modal.style.display = "block";

    var modal = document.getElementById("ObjectsDivAzureServicesDIV");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllRSGroups");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllVMs");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllLocations");
    modal.style.display = "none";

    document.getElementById("ClickedTabFour").style.border = "0px";
    document.getElementById("ClickedTabFour").style.fontWeight = "300";
    document.getElementById("ClickedTabFour").style.background = "white";

    document.getElementById("ClickedTabOne").style.border = "0px";
    document.getElementById("ClickedTabOne").style.fontWeight = "300";
    document.getElementById("ClickedTabOne").style.background = "white";

    document.getElementById("ClickedTabThree").style.border = "0px";
    document.getElementById("ClickedTabThree").style.fontWeight = "300";
    document.getElementById("ClickedTabThree").style.background = "white";

    document.getElementById("ClickedTabFive").style.border = "0px";
    document.getElementById("ClickedTabFive").style.fontWeight = "300";
    document.getElementById("ClickedTabFive").style.background = "white";

    document.getElementById("ClickedTabSix").style.border = "0px";
    document.getElementById("ClickedTabSix").style.fontWeight = "300";
    document.getElementById("ClickedTabSix").style.background = "white";

    document.getElementById("ClickedTabTwo").style.border = "1px solid #c8c8c8";
    document.getElementById("ClickedTabTwo").style.fontWeight = "400";
    document.getElementById("ClickedTabTwo").style.borderRadius = "0px 100px 0px 0px";
    document.getElementById("ClickedTabTwo").style.background = "#f4f4f4";
    document.getElementById("ClickedTabTwo").style.borderBottom = "0px";

});




$("#ClickedTabThree").click(function(e) {


    var modal = document.getElementById("ObjectsDivAllResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivCostResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivAzureServicesDIV");
    modal.style.display = "block";

    var modal = document.getElementById("ObjectsDivForAllRSGroups");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllVMs");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllLocations");
    modal.style.display = "none";


    document.getElementById("ClickedTabFour").style.border = "0px";
    document.getElementById("ClickedTabFour").style.fontWeight = "300";
    document.getElementById("ClickedTabFour").style.background = "white";

    document.getElementById("ClickedTabOne").style.border = "0px";
    document.getElementById("ClickedTabOne").style.fontWeight = "300";
    document.getElementById("ClickedTabOne").style.background = "white";

    document.getElementById("ClickedTabFive").style.border = "0px";
    document.getElementById("ClickedTabFive").style.fontWeight = "300";
    document.getElementById("ClickedTabFive").style.background = "white";

    document.getElementById("ClickedTabSix").style.border = "0px";
    document.getElementById("ClickedTabSix").style.fontWeight = "300";
    document.getElementById("ClickedTabSix").style.background = "white";

    document.getElementById("ClickedTabTwo").style.border = "0px";
    document.getElementById("ClickedTabTwo").style.fontWeight = "300";
    document.getElementById("ClickedTabTwo").style.background = "white";

    document.getElementById("ClickedTabThree").style.border = "1px solid #c8c8c8";
    document.getElementById("ClickedTabThree").style.fontWeight = "400";
    document.getElementById("ClickedTabThree").style.borderRadius = "0px 100px 0px 0px";
    document.getElementById("ClickedTabThree").style.background = "#f4f4f4";
    document.getElementById("ClickedTabThree").style.borderBottom = "0px";

});




$("#ClickedTabFour").click(function(e) {


    var modal = document.getElementById("ObjectsDivAllResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivCostResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivAzureServicesDIV");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllRSGroups");
    modal.style.display = "block";

    var modal = document.getElementById("ObjectsDivForAllVMs");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllLocations");
    modal.style.display = "none";

    document.getElementById("ClickedTabThree").style.border = "0px";
    document.getElementById("ClickedTabThree").style.fontWeight = "300";
    document.getElementById("ClickedTabThree").style.background = "white";

    document.getElementById("ClickedTabOne").style.border = "0px";
    document.getElementById("ClickedTabOne").style.fontWeight = "300";
    document.getElementById("ClickedTabOne").style.background = "white";

    document.getElementById("ClickedTabFive").style.border = "0px";
    document.getElementById("ClickedTabFive").style.fontWeight = "300";
    document.getElementById("ClickedTabFive").style.background = "white";

    document.getElementById("ClickedTabSix").style.border = "0px";
    document.getElementById("ClickedTabSix").style.fontWeight = "300";
    document.getElementById("ClickedTabSix").style.background = "white";

    document.getElementById("ClickedTabTwo").style.border = "0px";
    document.getElementById("ClickedTabTwo").style.fontWeight = "300";
    document.getElementById("ClickedTabTwo").style.background = "white";

    document.getElementById("ClickedTabFour").style.border = "1px solid #c8c8c8";
    document.getElementById("ClickedTabFour").style.fontWeight = "400";
    document.getElementById("ClickedTabFour").style.borderRadius = "0px 100px 0px 0px";
    document.getElementById("ClickedTabFour").style.background = "#f4f4f4";
    document.getElementById("ClickedTabFour").style.borderBottom = "0px";


});




$("#ClickedTabFive").click(function(e) {

    var modal = document.getElementById("ObjectsDivAllResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivCostResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivAzureServicesDIV");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllRSGroups");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllLocations");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllVMs");
    modal.style.display = "block";

    document.getElementById("ClickedTabThree").style.border = "0px";
    document.getElementById("ClickedTabThree").style.fontWeight = "300";
    document.getElementById("ClickedTabThree").style.background = "white";

    document.getElementById("ClickedTabOne").style.border = "0px";
    document.getElementById("ClickedTabOne").style.fontWeight = "300";
    document.getElementById("ClickedTabOne").style.background = "white";

    document.getElementById("ClickedTabTwo").style.border = "0px";
    document.getElementById("ClickedTabTwo").style.fontWeight = "300";
    document.getElementById("ClickedTabTwo").style.background = "white";

    document.getElementById("ClickedTabFour").style.border = "0px";
    document.getElementById("ClickedTabFour").style.fontWeight = "300";
    document.getElementById("ClickedTabFour").style.background = "white";

    document.getElementById("ClickedTabSix").style.border = "0px";
    document.getElementById("ClickedTabSix").style.fontWeight = "300";
    document.getElementById("ClickedTabSix").style.background = "white";

    document.getElementById("ClickedTabFive").style.border = "1px solid #c8c8c8";
    document.getElementById("ClickedTabFive").style.fontWeight = "400";
    document.getElementById("ClickedTabFive").style.borderRadius = "0px 100px 0px 0px";
    document.getElementById("ClickedTabFive").style.background = "#f4f4f4";
    document.getElementById("ClickedTabFive").style.borderBottom = "0px";


});




$("#ClickedTabSix").click(function(e) {

    var modal = document.getElementById("ObjectsDivAllResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivCostResources");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivAzureServicesDIV");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllRSGroups");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllVMs");
    modal.style.display = "none";

    var modal = document.getElementById("ObjectsDivForAllLocations");
    modal.style.display = "block";

    document.getElementById("ClickedTabThree").style.border = "0px";
    document.getElementById("ClickedTabThree").style.fontWeight = "300";
    document.getElementById("ClickedTabThree").style.background = "white";

    document.getElementById("ClickedTabOne").style.border = "0px";
    document.getElementById("ClickedTabOne").style.fontWeight = "300";
    document.getElementById("ClickedTabOne").style.background = "white";

    document.getElementById("ClickedTabTwo").style.border = "0px";
    document.getElementById("ClickedTabTwo").style.fontWeight = "300";
    document.getElementById("ClickedTabTwo").style.background = "white";

    document.getElementById("ClickedTabFour").style.border = "0px";
    document.getElementById("ClickedTabFour").style.fontWeight = "300";
    document.getElementById("ClickedTabFour").style.background = "white";

    document.getElementById("ClickedTabFive").style.border = "0px";
    document.getElementById("ClickedTabFive").style.fontWeight = "300";
    document.getElementById("ClickedTabFive").style.background = "white";

    document.getElementById("ClickedTabSix").style.border = "1px solid #c8c8c8";
    document.getElementById("ClickedTabSix").style.fontWeight = "400";
    document.getElementById("ClickedTabSix").style.borderRadius = "0px 100px 0px 0px";
    document.getElementById("ClickedTabSix").style.background = "#f4f4f4";
    document.getElementById("ClickedTabSix").style.borderBottom = "0px";


});





$("#ClickedAzServices").click(function(e) {

    var modal = document.getElementById("ShowAllResourcesDiv");
    modal.style.display = "none";

    var modal = document.getElementById("ShowCostByResDiv");
    modal.style.display = "none";

    var modal = document.getElementById("ShowAllAzServicesDiv");
    modal.style.display = "block";


    document.getElementById("ClickedAllRes").style.background = "white";
    document.getElementById("ClickedAllRes").style.border = "0px";
    document.getElementById("ClickedAllRes").style.fontWeight = "300";

    document.getElementById("ClickedCostByInst").style.background = "white";
    document.getElementById("ClickedCostByInst").style.border = "0px";
    document.getElementById("ClickedCostByInst").style.fontWeight = "300";

    document.getElementById("ClickedAzServices").style.background = "#f2f2f2";
    document.getElementById("ClickedAzServices").style.border = "1px solid #e0e2e3";
    document.getElementById("ClickedAzServices").style.borderBottom = "0px";
    document.getElementById("ClickedAzServices").style.fontWeight = "400"


});






$("#ShowChartForAllServices").click(function(e) {

    Highcharts.chart('BillPeriodForResourceChartDiv', {
        data: {
            table: 'ResByAzServicesBillPeriodTable',
            startColumn: 0,
            endColumn: 1
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Azure Services Cost - Overall'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Cost'
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

    document.getElementById("LoadingChartDiv").style.display = "none";


});






$("#ButtonSelectBPAnaNow").click(function(e) {

    var SelAnaBP = document.getElementById("AllBillPeriodsOptsForAna").value;
    var res = SelAnaBP.split("_");

    var BPNameNowTT = res[0];
    var str = BPNameNowTT;
    var FinalBPName = str.substr(0, 6);

    var BPSelectedNow = FinalBPName
    let BPNameNow = BPSelectedNow.replaceAll(' ', '');

    var TOPSelTenant = document.getElementById("TOPSelectedTenNow").innerHTML;
    var thissubselected = document.getElementById("SelectedSubForTenantNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var CurBPNameNow = document.getElementById("CurBillPeriod").innerHTML;
    var str = CurBPNameNow;
    var FinalCurBillPeriod = str.substr(0, 6);

    if (FinalCurBillPeriod == FinalBPName) // That means current bill period
    {
        $.ajax({ //Deleteting Bill Period File
            url: '/DelFileNowThree', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'BPIDForTen': FinalBPName,
                'TOPTenant': TOPSelTenant,
                'TOPSelSub': thissubselected,
                'TOPBillStartDate': BPStartDateNowTT,
                'TOPBillEndDate': BPEndDateNowTT,
                'ThisLUser': FinalUserNameNow,
                'CurBillPeriod': FinalCurBillPeriod
            },
            success: function(data) {}
        });
    }


    var myTimerGetBPRes = setInterval(function() {
        FuncGetSubsBPResNow()
    }, 1000);

    function FuncGetSubsBPResNow() {

        var SelAnaBP = document.getElementById("AllBillPeriodsOptsForAna").value;
        var res = SelAnaBP.split("_");

        var BPNameNowTT = res[0];
        var BPCostNowTT = res[1];
        var BPCurrencyNowTT = res[2];
        var BPStartDateNowTT = res[3];
        var BPEndDateNowTT = res[4];

        var str = BPNameNowTT;
        var FinalBPName = str.substr(0, 6);

        document.getElementById("SelectedBPForsubNNow").innerHTML = FinalBPName;
        document.getElementById("SelectedBPTotCost").innerHTML = BPCurrencyNowTT + " " + BPCostNowTT;
        document.getElementById("SelectedBPStartDate").innerHTML = BPStartDateNowTT;
        document.getElementById("SelectedBPEndDate").innerHTML = BPEndDateNowTT;

        {

            {

                var BPSelectedNow = FinalBPName
                let BPNameNow = BPSelectedNow.replaceAll(' ', '');

                var TOPSelTenant = document.getElementById("TOPSelectedTenNow").innerHTML;
                var thissubselected = document.getElementById("SelectedSubForTenantNow").innerHTML;

                var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
                var res = ThisLUserNow.split("@");
                var FinalUserNameNow = res[0];


                $.ajax({
                    url: '/RequestBillResList', // This tells server which Route to use OKAYYYY
                    type: 'POST',
                    async: false,
                    data: {
                        'BPIDForTen': FinalBPName,
                        'TOPTenant': TOPSelTenant,
                        'TOPSelSub': thissubselected,
                        'TOPBillStartDate': BPStartDateNowTT,
                        'TOPBillEndDate': BPEndDateNowTT,
                        'ThisLUser': FinalUserNameNow
                    },
                    success: function(data) {
                        if (data.message) { // That means if there is data available

                            if (data.message == "CollectingBPRes") {
                                // Let timer run to collect                         
                                document.getElementById("CollectingResInBPNowCircle").style.display = "block";

                            } else {

                                clearInterval(myTimerGetBPRes); // Clear Timer here to ensure it doesn't run once again and then append below data
                                document.getElementById("CollectingResInBPNowCircle").style.display = "none";

                                let res = data.message.replaceAll('"', "");
                                var rows = res.split("\n");

                                var datatable = document.createElement("table");
                                datatable.id = 'ResInBillPeriodTable'
                                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                                var datatableByInstance = document.createElement("table");
                                datatableByInstance.id = 'ResByInstanceBillPeriodTable'
                                datatableByInstance.setAttribute('class', 'SummaryTableClassforAzBilling');

                                var datatableByAzServices = document.createElement("table");
                                datatableByAzServices.id = 'ResByAzServicesBillPeriodTable'
                                datatableByAzServices.setAttribute('class', 'SummaryTableClassforAzBilling');

                                var datatableByAzGroups = document.createElement("table");
                                datatableByAzGroups.id = 'ResByResourceGroupsBillPeriodTable'
                                datatableByAzGroups.setAttribute('class', 'SummaryTableClassforAzBilling');

                                var datatableByAzVMs = document.createElement("table");
                                datatableByAzVMs.id = 'ResDataForAllVMsTable'
                                datatableByAzVMs.setAttribute('class', 'SummaryTableClassforAzBilling');

                                var datatableByAzLocation = document.createElement("table");
                                datatableByAzLocation.id = 'ResDataForAllLocationsTable'
                                datatableByAzLocation.setAttribute('class', 'SummaryTableClassforAzBilling');

                                for (var i = 0; i < rows.length; i++) {
                                    var cells = rows[i].split(",");
                                    var newcell = cells[2];
                                    var checkvalnow = cells[0];

                                    if (newcell == "BillName" || newcell == "Azure Service" || newcell == "Resource Group") {

                                        if (newcell == "Azure Service") {
                                            var row = datatableByInstance.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[2];

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[3];

                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = "Chart";

                                            cell.style.background = "black";
                                            cell.style.color = "white";
                                        }

                                    } else {

                                        if (checkvalnow == "ByInstance" || checkvalnow == "ByAzureServices" || checkvalnow == "ByResourceGroupName" || checkvalnow == "ByVirtualMachine" || checkvalnow == "ByLocation") {

                                            if (checkvalnow == "ByInstance") {
                                                // alert(newcell + thistestname);
                                                var row = datatableByInstance.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row

                                                if (newcell == "Resource") {
                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = cells[2];
                                                    cell.style.backgroundColor = "white";
                                                    cell.style.color = "rgb(59, 59, 60)";
                                                    cell.style.textAlign = "left";
                                                    cell.style.letterSpacing = "0.5px";
                                                    cell.style.fontWeight = "600";
                                                    cell.style.borderBottom = "2px solid #ccc8c8"
                                                    cell.style.position = "sticky";
                                                    cell.style.zIndex = "22";
                                                    cell.style.top = "0";

                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = cells[3];
                                                    cell.style.backgroundColor = "white";
                                                    cell.style.color = "rgb(59, 59, 60)";
                                                    cell.style.textAlign = "left";
                                                    cell.style.letterSpacing = "0.5px";
                                                    cell.style.fontWeight = "600";
                                                    cell.style.borderBottom = "2px solid #ccc8c8"
                                                    cell.style.position = "sticky";
                                                    cell.style.zIndex = "22";
                                                    cell.style.top = "0";

                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = "Chart";
                                                    cell.style.backgroundColor = "white";
                                                    cell.style.color = "rgb(59, 59, 60)";
                                                    cell.style.textAlign = "left";
                                                    cell.style.letterSpacing = "0.5px";
                                                    cell.style.fontWeight = "600";
                                                    cell.style.borderBottom = "2px solid #ccc8c8"
                                                    cell.style.position = "sticky";
                                                    cell.style.zIndex = "22";
                                                    cell.style.top = "0";

                                                } else {
                                                    if (checkvalnow == null || checkvalnow == "") {} else {
                                                        var cell = row.insertCell(-1);
                                                        cell.innerHTML = cells[2];
                                                        var cell = row.insertCell(-1);
                                                        cell.innerHTML = cells[3];

                                                        var removeRow = document.createElement("BUTTON");
                                                        removeRow.innerHTML = "Daily Chart";
                                                        removeRow.id = "RowID";
                                                        removeRow.style.fontSize = "10px";
                                                        removeRow.style.background = "white";
                                                        removeRow.style.borderRadius = "8px";
                                                        removeRow.style.fontWeight = "700";
                                                        removeRow.style.border = "none";
                                                        removeRow.style.padding = "7px";
                                                        removeRow.style.cursor = "pointer";
                                                        removeRow.style.color = "#6f6f6f";
                                                        removeRow.style.fontFamily = "Calibri";
                                                        removeRow.style.border = "1px solid #9b9797";

                                                        var thisbuttonid = cells[2];
                                                        let thisrepltdr = thisbuttonid.replaceAll('.', '');
                                                        removeRow.id = "Daily_" + thisrepltdr;
                                                        removeRow.onclick = function() {
                                                            GetSelectedResChartIMD(this);
                                                        };
                                                        var cell0 = row.insertCell(2);
                                                        cell0.appendChild(removeRow);
                                                        cell0.style.borderBottom = "1px solid #666666"
                                                        cell0.setAttribute('class', 'SummaryTDClass');
                                                        cell0.style.textAlign = "center";
                                                        cell0.style.outline = "none";

                                                    }
                                                }

                                            }

                                            if (checkvalnow == "ByAzureServices") {
                                                // alert(newcell + thistestname);
                                                var row = datatableByAzServices.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row

                                                if (newcell == "Azure Service") {
                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = cells[2];
                                                    cell.style.position = "sticky";
                                                    cell.style.zIndex = "22";
                                                    cell.style.top = "0";

                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = cells[3];
                                                    cell.style.position = "sticky";
                                                    cell.style.zIndex = "22";
                                                    cell.style.top = "0";
                                                } else {
                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = cells[2];
                                                    cell.style.backgroundColor = "white";
                                                    cell.style.color = "rgb(59, 59, 60)";
                                                    cell.style.textAlign = "left";
                                                    cell.style.letterSpacing = "0.5px";
                                                    cell.style.fontWeight = "600";
                                                    cell.style.borderBottom = "2px solid #ccc8c8"

                                                    var cell = row.insertCell(-1);
                                                    cell.innerHTML = cells[3];
                                                    cell.style.backgroundColor = "white";
                                                    cell.style.color = "rgb(59, 59, 60)";
                                                    cell.style.textAlign = "left";
                                                    cell.style.letterSpacing = "0.5px";
                                                    cell.style.fontWeight = "600";
                                                    cell.style.borderBottom = "2px solid #ccc8c8"

                                                    var removeRow = document.createElement("BUTTON");
                                                    removeRow.innerHTML = "Daily Resources Chart";
                                                    removeRow.id = "RowID";
                                                    removeRow.style.fontSize = "10px";
                                                    removeRow.style.background = "white";
                                                    removeRow.style.borderRadius = "8px";
                                                    removeRow.style.fontWeight = "700";
                                                    removeRow.style.border = "none";
                                                    removeRow.style.padding = "7px";
                                                    removeRow.style.cursor = "pointer";
                                                    removeRow.style.color = "#6f6f6f";
                                                    removeRow.style.fontFamily = "Calibri";
                                                    removeRow.style.border = "1px solid #9b9797";

                                                    var thisbuttonid = cells[2];
                                                    let thisrepl = thisbuttonid
                                                    removeRow.id = thisrepl;
                                                    removeRow.onclick = function() {
                                                        GetAzServicesChartDataONLY(this);
                                                    };
                                                    var cell0 = row.insertCell(2);
                                                    cell0.appendChild(removeRow);
                                                    cell0.style.borderBottom = "1px solid #666666"
                                                    cell0.setAttribute('class', 'SummaryTDClass');
                                                    cell0.style.textAlign = "center";
                                                    cell0.style.outline = "none";

                                                    var removeRow = document.createElement("BUTTON");
                                                    removeRow.innerHTML = "Daily Chart";
                                                    removeRow.id = "RowID";
                                                    removeRow.style.fontSize = "10px";
                                                    removeRow.style.background = "white";
                                                    removeRow.style.borderRadius = "8px";
                                                    removeRow.style.fontWeight = "700";
                                                    removeRow.style.border = "none";
                                                    removeRow.style.padding = "7px";
                                                    removeRow.style.cursor = "pointer";
                                                    removeRow.style.color = "#6f6f6f";
                                                    removeRow.style.fontFamily = "Calibri";
                                                    removeRow.style.border = "1px solid #9b9797";

                                                    var thisbuttonid = cells[2];
                                                    let thisrepltd = thisbuttonid
                                                    removeRow.id = "Daily_" + thisrepltd;
                                                    removeRow.onclick = function() {
                                                        GetAzServicesChartDataONLY(this);
                                                    };
                                                    var cell0 = row.insertCell(3);
                                                    cell0.appendChild(removeRow);
                                                    cell0.style.borderBottom = "1px solid #666666"
                                                    cell0.setAttribute('class', 'SummaryTDClass');
                                                    cell0.style.textAlign = "center";
                                                    cell0.style.outline = "none";

                                                }
                                            }

                                            if (checkvalnow == "ByResourceGroupName") {

                                                // alert(newcell + thistestname);
                                                var row = datatableByAzGroups.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[3];
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily Resources Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[2];
                                                let thisrepl = thisbuttonid
                                                removeRow.id = thisrepl;
                                                removeRow.onclick = function() {
                                                    GetAzServicesChartDataForRS(this);
                                                };
                                                var cell0 = row.insertCell(2);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[2];
                                                let thisreplr = "Daily_" + thisbuttonid
                                                removeRow.id = thisreplr;
                                                removeRow.onclick = function() {
                                                    GetAzServicesChartDataForRS(this);
                                                };
                                                var cell0 = row.insertCell(3);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";

                                            }

                                            if (checkvalnow == "ByVirtualMachine") {

                                                // alert(newcell + thistestname);
                                                var row = datatableByAzVMs.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[3];
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily VMs Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[2];
                                                let thisreplty = thisbuttonid
                                                removeRow.id = thisreplty;
                                                removeRow.onclick = function() {
                                                    GetAzServicesChartDataForVMs(this);
                                                };
                                                var cell0 = row.insertCell(2);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[2];
                                                let thisreplruu = "Daily_" + thisbuttonid
                                                removeRow.id = thisreplruu;
                                                removeRow.onclick = function() {
                                                    GetAzServicesChartDataForVMs(this);
                                                };
                                                var cell0 = row.insertCell(3);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";

                                            }

                                            if (checkvalnow == "ByLocation") {

                                                // alert(newcell + thistestname);
                                                var row = datatableByAzLocation.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[3];
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily Locations Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[2];
                                                let thisrepltyl = thisbuttonid
                                                removeRow.id = thisrepltyl;
                                                removeRow.onclick = function() {
                                                    GetAzServicesChartDataForLocations(this);
                                                };
                                                var cell0 = row.insertCell(2);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[2];
                                                let thisreplruul = "Daily_" + thisbuttonid
                                                removeRow.id = thisreplruul;
                                                removeRow.onclick = function() {
                                                    GetAzServicesChartDataForLocations(this);
                                                };
                                                var cell0 = row.insertCell(3);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";

                                            }

                                        } else {
                                            // alert(newcell + thistestname);
                                            var row = datatable.insertRow(-1); // This is to ensure a ROW is inserted in Table and then below InsertCell appends to that row

                                            if (checkvalnow == "Resource Group") {
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[0];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "rgb(59, 59, 60)";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0.5px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid #ccc8c8"
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[1];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "rgb(59, 59, 60)";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0.5px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid #ccc8c8"
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "rgb(59, 59, 60)";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0.5px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid #ccc8c8"
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";

                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = "Chart";
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "rgb(59, 59, 60)";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0.5px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid #ccc8c8"
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";
                                                cell.style.textAlign = "Center";


                                            } else {
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[0];
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[1];
                                                var cell = row.insertCell(-1);
                                                cell.innerHTML = cells[2];

                                                var removeRow = document.createElement("BUTTON");
                                                removeRow.innerHTML = "Daily Chart";
                                                removeRow.id = "RowID";
                                                removeRow.style.fontSize = "10px";
                                                removeRow.style.background = "white";
                                                removeRow.style.borderRadius = "8px";
                                                removeRow.style.fontWeight = "700";
                                                removeRow.style.border = "none";
                                                removeRow.style.padding = "7px";
                                                removeRow.style.cursor = "pointer";
                                                removeRow.style.color = "#6f6f6f";
                                                removeRow.style.fontFamily = "Calibri";
                                                removeRow.style.border = "1px solid #9b9797";

                                                var thisbuttonid = cells[1];
                                                let thisreplryy = "Daily_" + thisbuttonid
                                                removeRow.id = thisreplryy;
                                                removeRow.onclick = function() {
                                                    GetSelectedResChartIMD(this);
                                                };
                                                var cell0 = row.insertCell(3);
                                                cell0.appendChild(removeRow);
                                                cell0.style.borderBottom = "1px solid #666666"
                                                cell0.setAttribute('class', 'SummaryTDClass');
                                                cell0.style.textAlign = "center";
                                                cell0.style.outline = "none";


                                            }
                                        }
                                    }





                                }

                                var dtable = document.getElementById("ResInBillPeriodDiv");
                                dtable.innerHTML = "";
                                dtable.appendChild(datatable);

                                var dtable = document.getElementById("ResourcesByCostDiv");
                                dtable.innerHTML = "";
                                dtable.appendChild(datatableByInstance);

                                var dtable = document.getElementById("ResourcesByAzServicesDiv");
                                dtable.innerHTML = "";
                                dtable.appendChild(datatableByAzServices);

                                var dtable = document.getElementById("ResourcesByAzResourceGroupsDiv");
                                dtable.innerHTML = "";
                                dtable.appendChild(datatableByAzGroups);

                                var dtable = document.getElementById("AllVMsTableDiv");
                                dtable.innerHTML = "";
                                dtable.appendChild(datatableByAzVMs);

                                var dtable = document.getElementById("LocationsDataTableDiv");
                                dtable.innerHTML = "";
                                dtable.appendChild(datatableByAzLocation);

                                document.getElementById("LoadingChartDiv").style.display = "none";





                            }






                        } else {
                            alert("Error Executing Test");
                        }
                    },
                    error: function() {
                        alert("Error Executing Test");
                    }
                });
                // alert(thistestname);


            }
        }



    }


});






$("#ClickedSingleBillAna").click(function(e) {

    var modal = document.getElementById("SingleBillDivToShow");
    modal.style.display = "block";

    var modal = document.getElementById("CompareBillDivToShow");
    modal.style.display = "none";

    document.getElementById("ClickedCompareBillAna").style.background = "white";
    document.getElementById("ClickedCompareBillAna").style.border = "0px";
    document.getElementById("ClickedCompareBillAna").style.fontWeight = "300";

    document.getElementById("ClickedSingleBillAna").style.background = "aliceblue";
    document.getElementById("ClickedSingleBillAna").style.border = "1px solid #e0e2e3";
    document.getElementById("ClickedSingleBillAna").style.borderBottom = "0px";
    document.getElementById("ClickedSingleBillAna").style.fontWeight = "400"
    document.getElementById("ClickedSingleBillAna").style.borderRadius = "0px 40px 0px 0px"


});





$("#ClickedCompareBillAna").click(function(e) {

    var modal = document.getElementById("SingleBillDivToShow");
    modal.style.display = "none";

    var modal = document.getElementById("CompareBillDivToShow");
    modal.style.display = "block";

    document.getElementById("ClickedSingleBillAna").style.background = "white";
    document.getElementById("ClickedSingleBillAna").style.border = "0px";
    document.getElementById("ClickedSingleBillAna").style.fontWeight = "300";

    document.getElementById("ClickedCompareBillAna").style.background = "aliceblue";
    document.getElementById("ClickedCompareBillAna").style.border = "1px solid #e0e2e3";
    document.getElementById("ClickedCompareBillAna").style.borderBottom = "0px";
    document.getElementById("ClickedCompareBillAna").style.fontWeight = "400"
    document.getElementById("ClickedCompareBillAna").style.borderRadius = "0px 40px 0px 0px"

});




function GetAllTenSubsNowsTimer(element) {

    document.getElementById("RefreshingAllSubsForTenant").style.display = "block";
    document.getElementById("CollectingSubscriptionCircle").style.display = "block";

    var myTimerSub = setInterval(function() { FuncGetTenSubsNow() }, 1000);

    function FuncGetTenSubsNow() {

        // This is to run the timer every 5 seconds

        var TenNameRepl = document.getElementById("TOPSelectedTenNow").innerHTML;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/RequestTenSubDetails', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenID': TenNameRepl,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available                    

                    if (data.message == "CollectingSub") {
                        // Let timer run to collect 
                        document.getElementById("RefreshingAllSubsForTenant").style.display = "block";
                        document.getElementById("CollectingSubscriptionCircle").style.display = "block";

                    } else {

                        clearInterval(myTimerSub); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatable = document.createElement("table");
                        datatable.id = 'SubTableForTenant'
                        datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];
                            var thisissue = cells[1];
                            var thisimpact = cells[1];
                            var thisrec = cells[1];
                            var thissevnow = cells[1];

                            // alert(newcell + thistestname);
                            var row = datatable.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                // ignore columns that are not allowed

                                var newcell = cells[0]
                                if (newcell == "SubscriptionID") {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                    cell.style.backgroundColor = "white";
                                    cell.style.color = "rgb(59, 59, 60)";
                                    cell.style.textAlign = "left";
                                    cell.style.letterSpacing = "0.5px";
                                    cell.style.fontWeight = "600";
                                    cell.style.borderBottom = "2px solid #ccc8c8"
                                    cell.style.position = "sticky";
                                    cell.style.zIndex = "22";
                                    cell.style.top = "0";


                                } else {
                                    if (newcell == null || newcell == "") {} else {
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                    }

                                }

                            }

                        }



                        var dtable = document.getElementById("TenAllSubscriptionsDiv");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatable);

                        document.getElementById("RefreshingAllSubsForTenant").style.display = "block";
                        document.getElementById("CollectingSubscriptionCircle").style.display = "none";

                        // This is for enabling click on Subscriptions Table

                        var tableRTSub = document.getElementById('SubTableForTenant');
                        var cells = tableRTSub.getElementsByTagName('td');

                        for (var i = 0; i < cells.length; i++) {
                            // Take each cell
                            var cell = cells[i];
                            // do something on onclick event for cell
                            cell.onclick = function() {
                                // Get the row id where the cell exists

                                var rowId = this.parentNode.rowIndex;
                                var rowsNotSelected = tableRTSub.getElementsByTagName('tr');
                                for (var row = 0; row < rowsNotSelected.length; row++) {
                                    rowsNotSelected[row].style.color = "#666666";
                                    rowsNotSelected[row].style.background = "white";
                                    rowsNotSelected[row].classList.remove('selected');
                                }
                                var rowSelected = tableRTSub.getElementsByTagName('tr')[rowId];
                                rowSelected.style.color = "black";
                                rowSelected.style.background = "#B1EDFF";
                                rowSelected.className += "selected";
                                var TenSubID = rowSelected.cells[0].innerHTML;
                                //let TenSubID = TenName.replaceAll(' ', '');

                                document.getElementById("SelectedSubForTenantNow").innerHTML = TenSubID

                                document.getElementById("NOWSwitchToFirstPane").click();

                                GetSelSubBillPeriodFuncTimer(TenSubID);

                            }
                        }


                    }

                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });

    }

}





function GetSelSubBillPeriodFuncTimer(element) {

    document.getElementById("CurBillPeriod").innerHTML = null;

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
    var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({ //Deleteting Bill Period File
        url: '/DelFileNow', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TenSubID': TenSubID,
            'TenNameNow': TenNameNow,
            'ThisLUser': FinalUserNameNow
        },
        success: function(data) {}
    });


    document.getElementById("CollectingBPsInSelSub").style.display = "block";

    var myTimerGetBP = setInterval(function() {
        FuncGetSubsBPNow()
    }, 1000);

    function FuncGetSubsBPNow() {

        var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
        var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        // First delete Bill Periods file          

        $.ajax({
            url: '/RequestTenBillPeriodDetails', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    if (data.message == "CollectingBPs") {
                        // Let timer run to collect 
                        document.getElementById("CollectingBPsInSelSub").style.display = "block";

                    } else {

                        clearInterval(myTimerGetBP); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var allchartdata = data.message

                        var xLeft = document.getElementById("BillPeriodsCompare");
                        var xRight = document.getElementById("BillPeriodsCompareSecond");
                        var AnaOpt = document.getElementById("AllBillPeriodsOptsForAna");

                        /*
            var selectR = document.getElementById("BillPeriodsCompare");
            var length = selectR.options.length;
            for (i = 0; i < length; i++) {
              select.options[i].remove();
            }
 
            var selectR = document.getElementById("BillPeriodsCompareSecond");
            var length = selectR.options.length;
            for (i = 0; i < length; i++) {
              selectR.options[i].remove();
            }
 
            var selectR = document.getElementById("AllBillPeriodsOptsForAna");
            var length = selectR.options.length;
            for (i = 0; i < length; i++) {
              selectR.options[i].remove();
            }
            */

                        var datatableForBP = document.createElement("table");
                        datatableForBP.id = 'BillPeriodTablesForSub'
                        datatableForBP.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];

                            var row = datatableForBP.insertRow(-1);

                            if (newcell == "BillName") {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[0];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "rgb(59, 59, 60)";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0.5px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid #ccc8c8"
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[1];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "rgb(59, 59, 60)";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0.5px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid #ccc8c8"
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[2];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "rgb(59, 59, 60)";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0.5px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid #ccc8c8"
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[3];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "rgb(59, 59, 60)";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0.5px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid #ccc8c8"
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[4];
                                cell.style.backgroundColor = "white";
                                cell.style.color = "rgb(59, 59, 60)";
                                cell.style.textAlign = "left";
                                cell.style.letterSpacing = "0.5px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid #ccc8c8"
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0";

                                var cell = row.insertCell(-1);
                                cell.innerHTML = "Daily Chart";
                                cell.style.backgroundColor = "white";
                                cell.style.color = "rgb(59, 59, 60)";
                                cell.style.textAlign = "center";
                                cell.style.letterSpacing = "0.5px";
                                cell.style.fontWeight = "600";
                                cell.style.borderBottom = "2px solid #ccc8c8"
                                cell.style.position = "sticky";
                                cell.style.zIndex = "22";
                                cell.style.top = "0";

                            } else {
                                if (newcell == null || newcell == "") {} else {

                                    var firstbp = document.getElementById("CurBillPeriod").innerHTML;
                                    if (firstbp == "" || firstbp == null) {
                                        var FirstBillPeriod = cells[0]
                                        document.getElementById("CurBillPeriod").innerHTML = FirstBillPeriod;
                                    }



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


                                    var removeRow = document.createElement("BUTTON");
                                    removeRow.innerHTML = "Daily Chart";
                                    removeRow.id = "RowID";
                                    removeRow.style.fontSize = "10px";
                                    removeRow.style.background = "white";
                                    removeRow.style.borderRadius = "8px";
                                    removeRow.style.fontWeight = "700";
                                    removeRow.style.border = "none";
                                    removeRow.style.padding = "7px";
                                    removeRow.style.cursor = "pointer";
                                    removeRow.style.color = "#6f6f6f";
                                    removeRow.style.fontFamily = "Calibri";
                                    removeRow.style.border = "1px solid #9b9797";

                                    var thisbuttonid = cells[0];
                                    let thisrepltdrr = thisbuttonid.replaceAll('.', '');
                                    removeRow.id = thisrepltdrr;
                                    removeRow.onclick = function() {
                                        GetSelectedBillPeriodDailyChart(this);
                                    };
                                    var cell0 = row.insertCell(5);
                                    cell0.appendChild(removeRow);
                                    cell0.style.borderBottom = "1px solid #666666"
                                    cell0.setAttribute('class', 'SummaryTDClass');
                                    cell0.style.textAlign = "center";
                                    cell0.style.outline = "none";


                                    var optionR = document.createElement("option");
                                    optionR.text = newcell;
                                    xLeft.add(optionR);

                                    var optionT = document.createElement("option");
                                    optionT.text = newcell;
                                    xRight.add(optionT);

                                    var AllBPOpt = cells[0] + "_" + cells[1] + "_" + cells[2] + "_" + cells[3] + "_" + cells[4]
                                    var optionY = document.createElement("option");
                                    optionY.text = AllBPOpt;
                                    AnaOpt.add(optionY);

                                }

                            }

                        }

                        var dtable = document.getElementById("TenAllBillPeriodsDivNowN");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBP);

                        /*
                        var dtable = document.getElementById("TenAllBillPeriodsForAna");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBPForAna);
                        */

                        document.getElementById("GetAllSubBPs").click();

                        //document.getElementById("RefAllBillAZServicesCost").click();

                        document.getElementById("CollectingBPsInSelSub").style.display = "none";

                    }
                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });
        // alert(thistestname);
    }

}





$("#GetAllSubBPs").click(function(e) {

    document.getElementById("BPChartTWODIV").style.display = "none";
    document.getElementById("BPChartONEDIV").style.display = "block";

    Highcharts.chart('AllSubBPsChartDivNow', {
        data: {
            table: 'BillPeriodTablesForSub',
            startColumn: 0,
            endColumn: 1
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Bill Period Timeline and Cost'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Cost'
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

});





$("#RefAllBillAZServicesCost").click(function(e) {

    document.getElementById("CollectBPServiceCostCircle").style.display = "block";

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({ //Deleteting Bill Period File
        url: '/DelFileNowFour', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TenSubID': TenSubID,
            'ThisLUser': FinalUserNameNow
        },
        success: function(data) {}
    });


    document.getElementById("BPChartTWODIV").style.display = "none";
    document.getElementById("BPChartONEDIV").style.display = "block";

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
    var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;

    var myTimerGetServiceCost = setInterval(function() {
        FuncGetServiceCostNow()
    }, 1000);

    function FuncGetServiceCostNow() {

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/GetAzServicesCostForallBP', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    if (data.message == "CollectingServiceCost") {
                        // Let timer run to collect 
                        document.getElementById("CollectBPServiceCostCircle").style.display = "block";
                        //document.getElementById("CollectingSubscriptionCircle").style.display = "block";

                    } else {

                        clearInterval(myTimerGetServiceCost); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatableForBPC = document.createElement("table");
                        datatableForBPC.id = 'BillPCostForAllServicesTable'
                        datatableForBPC.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];

                            if (newcell == null || newcell == "") {} else {
                                var row = datatableForBPC.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }

                        }

                        // INSERT INTO TABLE

                        var dtable = document.getElementById("DIVBillPeriodAzCosts");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBPC);


                        // GENERATE CHART HERE
                        Highcharts.chart('AllSubBPsChartDivNow', {
                            data: {
                                table: 'BillPCostForAllServicesTable',
                                startColumn: 0
                                    //          endColumn: 3
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
                                text: 'Services Cost for Each Bill Period'
                            },
                            /*xAxis: {
                                categories: allcat
                            },*/

                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Services Cost'
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

                        document.getElementById("CollectBPServiceCostCircle").style.display = "none";

                    }


                } else {
                    alert("Error Executing Test");
                    document.getElementById("CollectBPServiceCostCircle").style.display = "none";

                }
            },
            error: function() {
                alert("Error Executing Test");
                document.getElementById("CollectBPServiceCostCircle").style.display = "none";

            }
        });






    }


});





$("#GetResCountAndCostButton").click(function(e) {

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
    var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
    var CurBPID = document.getElementById("SelectedBPForsubNNow").innerHTML;

    var myTimerGetBPCountAndCost = setInterval(function() {
        FuncGetBPCountAndCost()
    }, 1000);

    function FuncGetBPCountAndCost() {

        document.getElementById("CollectBPServiceCostCircle").style.display = "block";

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/GetAzBPCountAndCost', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'ThisLUser': FinalUserNameNow,
                'CurBPID': CurBPID
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    if (data.message == "CollectingAZBPCountAndCost") {
                        // Let timer run to collect 
                        document.getElementById("CollectBPServiceCostCircle").style.display = "block";
                        //document.getElementById("CollectingSubscriptionCircle").style.display = "block";

                    } else {

                        clearInterval(myTimerGetBPCountAndCost); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatableForResCount = document.createElement("table");
                        datatableForResCount.id = 'ResAndCostTableNow'
                        datatableForResCount.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];

                            if (newcell == null || newcell == "") {} else {
                                var row = datatableForResCount.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }

                        }

                        // INSERT INTO TABLE

                        var dtable = document.getElementById("ResCountAndCostDataDiv");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForResCount);

                        document.getElementById("ShowChartAndDataButton").click();


                    }

                    document.getElementById("CollectBPServiceCostCircle").style.display = "none";




                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });






    }


});





$("#CompareBillPNow").click(function(e) {

    var myTimerCompareBP = setInterval(function() {
        FuncCompareBPNow()
    }, 1000);

    function FuncCompareBPNow() {

        var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
        var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
        var TenCurrentBP = document.getElementById("BillPeriodsCompare").value;
        var ThisOldBPSelected = document.getElementById("BillPeriodsCompareSecond").value;

        var str = ThisOldBPSelected;
        var FinalOldBPName = str.substr(0, 6);

        var str = TenCurrentBP;
        var FinalCurrentBPName = str.substr(0, 6);

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/RequestNewResources', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'TenBPNow': FinalCurrentBPName,
                'TenOLDBPNow': FinalOldBPName,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    if (data.message == "CollectingCompareData") {
                        // Let timer run to collect 
                        document.getElementById("ComparingCircle").style.display = "block";

                    } else {

                        clearInterval(myTimerCompareBP); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatableForBPCNew = document.createElement("table");
                        datatableForBPCNew.id = 'NewResTableNowForBP'
                        datatableForBPCNew.setAttribute('class', 'SummaryTableClassforAzBilling');

                        var datatableForAZServices = document.createElement("table");
                        datatableForAZServices.id = 'CompareAZServicesDataTable'
                        datatableForAZServices.setAttribute('class', 'SummaryTableClassforAzBilling');

                        var datatableForRSGroups = document.createElement("table");
                        datatableForRSGroups.id = 'CompareRSGroupsDataTable'
                        datatableForRSGroups.setAttribute('class', 'SummaryTableClassforAzBilling');

                        var datatableForNewRSTable = document.createElement("table");
                        datatableForNewRSTable.id = 'CompareBPsNewResTable'
                        datatableForNewRSTable.setAttribute('class', 'SummaryTableClassforAzBilling');

                        var datatableForResCount = document.createElement("table");
                        datatableForResCount.id = 'CompareBPsNewResCountTable'
                        datatableForResCount.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[1];

                            var CheckNewOrNot = cells[0];

                            if (newcell == null || newcell == "") {} else {

                                if (CheckNewOrNot == "AzureServicesDATA" || CheckNewOrNot == "AzureRSGroupDATA" || CheckNewOrNot == "AzureResAndCountDATA") {

                                    // Fill data for Services and RS Groups here
                                    if (CheckNewOrNot == "AzureServicesDATA") {
                                        var row = datatableForAZServices.insertRow(-1);
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[1];

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[2];

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[3];

                                    }
                                    if (CheckNewOrNot == "AzureRSGroupDATA") {
                                        var row = datatableForRSGroups.insertRow(-1);

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[1];

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[2];

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[3];

                                    }
                                    if (CheckNewOrNot == "AzureResAndCountDATA") {
                                        var row = datatableForResCount.insertRow(-1);

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


                                    }

                                } else {

                                    var row = datatableForBPCNew.insertRow(-1);

                                    if (CheckNewOrNot == "New") {
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[0];
                                        cell.style.color = "red";

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[1];
                                        cell.style.color = "red";

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[2];
                                        cell.style.color = "red";

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[3];
                                        cell.style.color = "red";

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[4];
                                        cell.style.color = "red";

                                        var row = datatableForNewRSTable.insertRow(-1);

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[1];

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[2];

                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[3];

                                    } else {

                                        for (var j = 0; j < cells.length; j++) {
                                            var cell = row.insertCell(-1);
                                            cell.innerHTML = cells[j];

                                            if (CheckNewOrNot == "Added/Removed") {
                                                cell.style.backgroundColor = "white";
                                                cell.style.color = "rgb(59, 59, 60)";
                                                cell.style.textAlign = "left";
                                                cell.style.letterSpacing = "0.5px";
                                                cell.style.fontWeight = "600";
                                                cell.style.borderBottom = "2px solid #ccc8c8"
                                                cell.style.position = "sticky";
                                                cell.style.zIndex = "22";
                                                cell.style.top = "0";
                                            }
                                        }

                                    }
                                }

                            }

                        }


                        var dtable = document.getElementById("NewRSDivForBPP");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBPCNew);

                        var dtable = document.getElementById("ResChartDataDivNowForCompare");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForAZServices);

                        var dtable = document.getElementById("ResChartDataDivNowForCompareRSGroup");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForRSGroups);

                        var dtable = document.getElementById("CompareResourceNewRSDivForAll");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForNewRSTable);

                        var dtable = document.getElementById("ResChartDataDivNowForCompareRESCountAndCost");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForResCount);

                        document.getElementById("ComparingCircle").style.display = "none";

                        document.getElementById("ShowCostWiseChart").click();


                        // Chart for REsource Grousp here:
                        // GENERATE CHART HERE
                        Highcharts.chart('BillPeriodForResourceChartDivForCompare', {
                            data: {
                                table: 'CompareAZServicesDataTable',
                                startColumn: 0
                                    //          endColumn: 3
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
                                text: 'Comparing Azure Services'
                            },
                            /*xAxis: {
                                categories: allcat
                            },*/

                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Services Cost'
                                },
                                stackLabels: {
                                    enabled: false,
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



                        // GENERATE CHART HERE
                        Highcharts.chart('BillPeriodForResourceChartDivForCompareRSGroups', {
                            data: {
                                table: 'CompareRSGroupsDataTable',
                                startColumn: 0
                                    //          endColumn: 3
                            },
                            chart: {
                                type: 'bar'
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'bottom',
                                verticalAlign: 'middle',
                                itemMarginTop: 10,
                                itemMarginBottom: 10
                            },
                            title: {
                                text: 'Comparing Resource Groups'
                            },
                            /*xAxis: {
                                categories: allcat
                            },*/

                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Resource Groups Cost'
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



                    }


                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });

    }
    document.getElementById("ComparingCircle").style.display = "none";

});





$("#ShowDailyForRSGroupChart").click(function(e) {

    var myTimerGetRSChartONE = setInterval(function() {
        FuncGetSubsBPNow()
    }, 1000);

    function FuncGetSubsBPNow() {

        document.getElementById("LoadingChartDiv").style.display = "block";

        var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
        var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
        var TenCurrentBP = document.getElementById("SelectedBPForsubNNow").innerHTML;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        document.getElementById("SelectedResInResList").innerHTML = "All Resource Groups"

        $.ajax({
            url: '/RequestRSGroupDailyChart', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'TenBPNow': TenCurrentBP,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    if (data.message == "CollectingDailyRESChart") {
                        // Let timer run to collect 
                        document.getElementById("LoadingChartDiv").style.display = "block";

                    } else {

                        clearInterval(myTimerGetRSChartONE); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatableForBPCNew = document.createElement("table");
                        datatableForBPCNew.id = 'NewResTableNowForCharting'
                        datatableForBPCNew.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];

                            if (newcell == null || newcell == "") {} else {
                                var row = datatableForBPCNew.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }

                        }

                        // INSERT INTO TABLE

                        var dtable = document.getElementById("ResChartDataDivNow");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBPCNew);



                        // GENERATE CHART HERE
                        Highcharts.chart('BillPeriodForResourceChartDiv', {
                            data: {
                                table: 'NewResTableNowForCharting',
                                startColumn: 0
                                    //          endColumn: 3
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
                                text: 'Daily Resource Group Chart'
                            },
                            /*xAxis: {
                                categories: allcat
                            },*/

                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Services Cost'
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


                        document.getElementById("LoadingChartDiv").style.display = "none";


                    }




                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });

    }

});

document.getElementById("LoadingChartDiv").style.display = "none";





function GetAzServicesChartDataForRS(element) {

    var thisButtonID = element.id

    var str = thisButtonID;
    var res = str.split("_");
    var CheckThis = res[0];
    var ThisResName = res[1];

    if (CheckThis == "Daily") {

        alert("Daily Chart for Resource Group");

    } else {

        var myTimerGetSelRSChartONE = setInterval(function() {
            FuncGetChartForRSSELECTED()
        }, 1000);

        function FuncGetChartForRSSELECTED() {

            var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
            var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
            var TenCurrentBP = document.getElementById("SelectedBPForsubNNow").innerHTML;
            var TenRSGroupNow = thisButtonID

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            document.getElementById("LoadingChartDiv").style.display = "block";

            document.getElementById("SelectedResInResList").innerHTML = "Resource Group [ " + thisButtonID + " ]";
            var ChartTitleNow = "Resource Group Cost by Resources"
            var WhatCostChart = "Resources Cost"

            $.ajax({
                url: '/RequestDailyChartForRS', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: false,
                data: {
                    'TenSubID': TenSubID,
                    'TenNameNow': TenNameNow,
                    'TenBPNow': TenCurrentBP,
                    'ThisRSGroup': TenRSGroupNow,
                    'ThisLUser': FinalUserNameNow
                },
                success: function(data) {
                    if (data.message) { // That means if there is data available

                        if (data.message == "CollectingSelectedRSChart") {
                            // Let timer run to collect 
                            document.getElementById("LoadingChartDiv").style.display = "block";

                        } else {

                            clearInterval(myTimerGetSelRSChartONE); // Clear Timer here to ensure it doesn't run once again and then append below data

                            let res = data.message.replaceAll('"', "");
                            var rows = res.split("\n");

                            var datatableForBPCNew = document.createElement("table");
                            datatableForBPCNew.id = 'NewResTableNowForCharting'
                            datatableForBPCNew.setAttribute('class', 'SummaryTableClassforAzBilling');

                            for (var i = 0; i < rows.length; i++) {
                                var cells = rows[i].split(",");
                                var newcell = cells[0];

                                if (newcell == null || newcell == "") {} else {
                                    var row = datatableForBPCNew.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                    }
                                }

                            }

                            // INSERT INTO TABLE

                            var dtable = document.getElementById("ResChartDataDivNow");
                            dtable.innerHTML = "";
                            dtable.appendChild(datatableForBPCNew);



                            // GENERATE CHART HERE
                            Highcharts.chart('BillPeriodForResourceChartDiv', {
                                data: {
                                    table: 'NewResTableNowForCharting',
                                    startColumn: 0
                                        //          endColumn: 3
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
                                    text: ChartTitleNow
                                },
                                /*xAxis: {
                                    categories: allcat
                                },*/

                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: WhatCostChart
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


                            document.getElementById("LoadingChartDiv").style.display = "none";

                        }




                    } else {
                        alert("Error Executing Test");
                    }
                },
                error: function() {
                    alert("Error Executing Test");
                }
            });
        }
    }
}





$("#ClickedBillAssPage").click(function(e) {

    document.getElementById("OpenBillingAssessmentPage").style.display = "block";
    document.getElementById("OpenBillingNotificationPage").style.display = "none";

    document.getElementById("ClickedBillNotifyPage").style.background = "white";
    document.getElementById("ClickedBillNotifyPage").style.border = "0px";
    document.getElementById("ClickedBillNotifyPage").style.fontWeight = "300";

    document.getElementById("ClickedBillAssPage").style.background = "#f2f2f2";
    document.getElementById("ClickedBillAssPage").style.border = "1px solid #e0e2e3";
    document.getElementById("ClickedBillAssPage").style.borderBottom = "0px";
    document.getElementById("ClickedBillAssPage").style.fontWeight = "400"


});




$("#ClickedBillNotifyPage").click(function(e) {


    document.getElementById("OpenBillingAssessmentPage").style.display = "none";
    document.getElementById("OpenBillingNotificationPage").style.display = "block";

    document.getElementById("ClickedBillAssPage").style.background = "white";
    document.getElementById("ClickedBillAssPage").style.border = "0px";
    document.getElementById("ClickedBillAssPage").style.fontWeight = "300";

    document.getElementById("ClickedBillNotifyPage").style.background = "#f2f2f2";
    document.getElementById("ClickedBillNotifyPage").style.border = "1px solid #e0e2e3";
    document.getElementById("ClickedBillNotifyPage").style.borderBottom = "0px";
    document.getElementById("ClickedBillNotifyPage").style.fontWeight = "400"


});




function GetAllTenSubsNowsInNotify(element) {

    var TenNameRepl = element;
    document.getElementById("TOPSelectedTenNow").innerHTML = TenNameRepl;
    document.getElementById("RefreshingAllSubsForTenant").style.display = "block";

    $.ajax({
        url: '/RequestTenSubDetails', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TenID': TenNameRepl
        },
        success: function(data) {
            if (data.message) { // That means if there is data available

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                var datatable = document.createElement("table");
                datatable.id = 'SubTableForTenant'
                datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    var newcell = cells[0];
                    var thisissue = cells[1];
                    var thisimpact = cells[1];
                    var thisrec = cells[1];
                    var thissevnow = cells[1];

                    // alert(newcell + thistestname);
                    var row = datatable.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        // ignore columns that are not allowed

                        var newcell = cells[0]
                        if (newcell == "SubscriptionID") {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[j];
                            cell.style.backgroundColor = "white";
                            cell.style.color = "rgb(59, 59, 60)";
                            cell.style.textAlign = "left";
                            cell.style.letterSpacing = "0.5px";
                            cell.style.fontWeight = "600";
                            cell.style.borderBottom = "2px solid #ccc8c8"

                        } else {
                            if (newcell == null || newcell == "") {} else {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }

                        }
                    }

                    var dtable = document.getElementById("TenAllSubscriptionsDiv");
                    dtable.innerHTML = "";
                    dtable.appendChild(datatable);

                }

                document.getElementById("RefreshingAllSubsForTenant").style.display = "block";

                // This is for enabling click on Subscriptions Table

                var tableRTSub = document.getElementById('SubTableForTenant');
                var cells = tableRTSub.getElementsByTagName('td');

                for (var i = 0; i < cells.length; i++) {
                    // Take each cell
                    var cell = cells[i];
                    // do something on onclick event for cell
                    cell.onclick = function() {
                        // Get the row id where the cell exists

                        var rowId = this.parentNode.rowIndex;
                        var rowsNotSelected = tableRTSub.getElementsByTagName('tr');
                        for (var row = 0; row < rowsNotSelected.length; row++) {
                            rowsNotSelected[row].style.color = "#666666";
                            rowsNotSelected[row].style.background = "white";
                            rowsNotSelected[row].classList.remove('selected');
                        }
                        var rowSelected = tableRTSub.getElementsByTagName('tr')[rowId];
                        rowSelected.style.color = "black";
                        rowSelected.style.background = "#B1EDFF";
                        rowSelected.className += "selected";
                        var TenSubID = rowSelected.cells[0].innerHTML;
                        //let TenSubID = TenName.replaceAll(' ', '');

                        document.getElementById("SelectedSubForTenantNow").innerHTML = TenSubID;

                        GetSelSubBillPeriodFunc(TenSubID);

                    }
                }



            } else {
                alert("Error Executing Test");
            }
        },
        error: function() {
            alert("Error Executing Test");
        }
    });


};




$("#NOWSwitchToFirstPane").click(function(e) {

    document.getElementById("SwitchBPTimeLine").style.display = "block";
    document.getElementById("SwitchBPAnalysisPane").style.display = "none";
    document.getElementById("SwitchBillComparePane").style.display = "none";
    document.getElementById("SwitchBillAlertPane").style.display = "none";

    document.getElementById("NOWSwitchToFirstPane").style.background = "#f0f0f0"
    document.getElementById("NOWSwitchToSecondPane").style.background = "White"
    document.getElementById("NOWSwitchToThirdPane").style.background = "White"
    document.getElementById("NOWSwitchToFourthPane").style.background = "White"


});





$("#NOWSwitchToSecondPane").click(function(e) {

    document.getElementById("SwitchBPTimeLine").style.display = "none";
    document.getElementById("SwitchBPAnalysisPane").style.display = "block";
    document.getElementById("SwitchBillComparePane").style.display = "none";
    document.getElementById("SwitchBillAlertPane").style.display = "none";

    document.getElementById("NOWSwitchToFirstPane").style.background = "white"
    document.getElementById("NOWSwitchToSecondPane").style.background = "#f0f0f0"
    document.getElementById("NOWSwitchToThirdPane").style.background = "White"
    document.getElementById("NOWSwitchToFourthPane").style.background = "White"


});




$("#NOWSwitchToThirdPane").click(function(e) {

    document.getElementById("SwitchBPTimeLine").style.display = "none";
    document.getElementById("SwitchBPAnalysisPane").style.display = "none";
    document.getElementById("SwitchBillComparePane").style.display = "block";
    document.getElementById("SwitchBillAlertPane").style.display = "none";

    document.getElementById("NOWSwitchToFirstPane").style.background = "white"
    document.getElementById("NOWSwitchToSecondPane").style.background = "White"
    document.getElementById("NOWSwitchToThirdPane").style.background = "#f0f0f0"
    document.getElementById("NOWSwitchToFourthPane").style.background = "White"


});





$("#NOWSwitchToFourthPane").click(function(e) {

    document.getElementById("SwitchBPTimeLine").style.display = "none";
    document.getElementById("SwitchBPAnalysisPane").style.display = "none";
    document.getElementById("SwitchBillComparePane").style.display = "none";
    document.getElementById("SwitchBillAlertPane").style.display = "block";

    document.getElementById("NOWSwitchToFirstPane").style.background = "white"
    document.getElementById("NOWSwitchToSecondPane").style.background = "White"
    document.getElementById("NOWSwitchToThirdPane").style.background = "white"
    document.getElementById("NOWSwitchToFourthPane").style.background = "#f0f0f0"

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    $.ajax({
        url: '/GetSubAlertsForSubPost', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TenSubID': TenSubID,
            'ThisLUser': FinalUserNameNow,
        },
        success: function(data) {
            if (data.message) {

                let res = data.message.replaceAll('"', "");
                var rows = res.split("\n");

                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    var ThisSubIDNow = cells[1];

                    if (ThisSubIDNow == TenSubID) {

                        var ValOne = cells[2];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifyONE").checked = true;
                        } else {
                            document.getElementById("SubNotifyONE").checked = false;
                        }

                        var ValOne = cells[3];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifyTWO").checked = true;
                        } else {
                            document.getElementById("SubNotifyTWO").checked = false;
                        }

                        var ValOne = cells[4];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifyTHREE").checked = true;
                        } else {
                            document.getElementById("SubNotifyTHREE").checked = false;
                        }

                        var ValOne = cells[5];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifyFOUR").checked = true;
                        } else {
                            document.getElementById("SubNotifyFOUR").checked = false;
                        }

                        var ValOne = cells[6];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifyFIVE").checked = true;
                        } else {
                            document.getElementById("SubNotifyFIVE").checked = false;
                        }

                        var ValOne = cells[7];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifySIX").checked = true;
                        } else {
                            document.getElementById("SubNotifySIX").checked = false;
                        }

                        var ValOne = cells[8];
                        if (ValOne == "true") {
                            document.getElementById("SubNotifySEVEN").checked = true;
                        } else {
                            document.getElementById("SubNotifySEVEN").checked = false;
                        }




                    }

                }


            }

        }
    });


});




$("#GoUpNow").click(function(e) {

    var CheckStyle = document.getElementById("AllTenCostDivNow").style.display

    if (CheckStyle == "block") {
        document.getElementById("AllTenCostDivNow").style.display = "none";
        document.getElementById("GoUpNow").setAttribute('class', 'fa fa-angle-down');

    } else {
        document.getElementById("AllTenCostDivNow").style.display = "block";
        document.getElementById("GoUpNow").setAttribute('class', 'fa fa-angle-up');

    }

});





function GetSelectedResChartIMD(element) {

    var thisButtonID = element.id

    var str = thisButtonID;
    var res = str.split("_");
    var CheckThis = res[0];
    var ThisResName = res[1];

    var TOPSelTenant = document.getElementById("TOPSelectedTenNow").innerHTML;
    var TOPSelBillPeriod = document.getElementById("SelectedBPForsubNNow").innerHTML;
    var FinalResName = ThisResName;
    var thisselsubnow = document.getElementById("SelectedSubForTenantNow").innerHTML;

    document.getElementById("SelectedResInResList").innerHTML = "Resource [ " + FinalResName + " ]";
    document.getElementById("LoadingChartDiv").style.display = "block";

    var myTimerGetSelRes = setInterval(function() {
        FuncGetSelectedResChartNow()
    }, 1000);

    function FuncGetSelectedResChartNow() {

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        // AJAX Request here to get billing data for selected resource                                    
        $.ajax({
            url: '/RequestClickedResBillData', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenID': TOPSelTenant,
                'SelBillPeriod': TOPSelBillPeriod,
                'SelRes': FinalResName,
                'SelSub': thisselsubnow,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) // That means if there is data available
                {

                    if (data.message == "CollectingSelectedResourceChart") {
                        // Let timer run to collect 
                        document.getElementById("RefreshingAllSubsForTenant").style.display = "block";
                        document.getElementById("CollectingSubscriptionCircle").style.display = "block";

                    } else {

                        clearInterval(myTimerGetSelRes); // Clear Timer here to ensure it doesn't run once again and then append below data

                        if (data.message == "No Such File") {

                            alert("No Such File");

                        } else {

                            var Datares = data.message.replaceAll('"', "");
                            var rows = Datares.split("\n");

                            var datatable = document.createElement("table");
                            datatable.id = 'SelectedResTableNow'
                            datatable.setAttribute('class', 'SummaryTableClassforAzBilling');

                            for (var i = 0; i < rows.length; i++) {
                                var cells = rows[i].split(",");
                                var newcell = cells[0];
                                var row = datatable.insertRow(-1);

                                var itemnew = cells[1];
                                var itemnumber = cells[2];

                                if (newcell == null || newcell == "") {} else {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = itemnew;
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = itemnumber;
                                }

                            }

                            var dtable = document.getElementById("ResChartDataDivNow");
                            dtable.innerHTML = "";
                            dtable.appendChild(datatable);

                            Highcharts.chart('BillPeriodForResourceChartDiv', {
                                data: {
                                    table: 'SelectedResTableNow'
                                },
                                chart: {
                                    type: 'column'
                                },
                                title: {
                                    text: 'Daily Cost for Resource'
                                },
                                yAxis: {
                                    allowDecimals: false,
                                    title: {
                                        text: 'Cost'
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

                            document.getElementById("LoadingChartDiv").style.display = "none";
                        }
                    }

                } else {
                    // alert("Error Executing Test");
                }
            },
            error: function() {
                // alert("Error Executing Test");
            }
        });

    }

}













function GetAzServicesChartDataONLY(element) {

    var thisButtonID = element.id

    var str = thisButtonID;
    var res = str.split("_");
    var CheckThis = res[0];
    var ThisResName = res[1];

    if (CheckThis == "Daily") {

        alert("Daily Chart for Services Now");

    } else {

        alert(thisButtonID);

        var myTimerGetSelRSChartONEAZ = setInterval(function() {
            FuncGetChartForRSSELECTEDAZOnly()
        }, 1000);

        function FuncGetChartForRSSELECTEDAZOnly() {

            var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
            var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
            var TenCurrentBP = document.getElementById("SelectedBPForsubNNow").innerHTML;
            var TenRSGroupNow = thisButtonID

            var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
            var res = ThisLUserNow.split("@");
            var FinalUserNameNow = res[0];

            document.getElementById("LoadingChartDiv").style.display = "block";

            document.getElementById("SelectedResInResList").innerHTML = "Resource Group [ " + thisButtonID + " ]";
            var ChartTitleNow = "Azure Services Chart"
            var WhatCostChart = "Resources Cost"

            $.ajax({
                url: '/RequestAzServicesData', // This tells server which Route to use OKAYYYY
                type: 'POST',
                async: false,
                data: {
                    'TenSubID': TenSubID,
                    'TenNameNow': TenNameNow,
                    'TenBPNow': TenCurrentBP,
                    'ThisRSGroup': TenRSGroupNow,
                    'ThisLUser': FinalUserNameNow
                },
                success: function(data) {
                    if (data.message) { // That means if there is data available

                        if (data.message == "CollectingAZSelServiceCost") {
                            // Let timer run to collect 
                            document.getElementById("LoadingChartDiv").style.display = "block";

                        } else {

                            clearInterval(myTimerGetSelRSChartONEAZ); // Clear Timer here to ensure it doesn't run once again and then append below data

                            let res = data.message.replaceAll('"', "");
                            var rows = res.split("\n");

                            var datatableForBPCNew = document.createElement("table");
                            datatableForBPCNew.id = 'NewResTableNowForCharting'
                            datatableForBPCNew.setAttribute('class', 'SummaryTableClassforAzBilling');

                            for (var i = 0; i < rows.length; i++) {
                                var cells = rows[i].split(",");
                                var newcell = cells[0];

                                if (newcell == null || newcell == "") {} else {
                                    var row = datatableForBPCNew.insertRow(-1);
                                    for (var j = 0; j < cells.length; j++) {
                                        var cell = row.insertCell(-1);
                                        cell.innerHTML = cells[j];
                                    }
                                }

                            }

                            // INSERT INTO TABLE

                            var dtable = document.getElementById("ResChartDataDivNow");
                            dtable.innerHTML = "";
                            dtable.appendChild(datatableForBPCNew);



                            // GENERATE CHART HERE
                            Highcharts.chart('BillPeriodForResourceChartDiv', {
                                data: {
                                    table: 'NewResTableNowForCharting',
                                    startColumn: 0
                                        //          endColumn: 3
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
                                    text: ChartTitleNow
                                },
                                /*xAxis: {
                                    categories: allcat
                                },*/

                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: WhatCostChart
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


                            document.getElementById("LoadingChartDiv").style.display = "none";

                        }




                    } else {
                        alert("Error Executing Test");
                    }
                },
                error: function() {
                    alert("Error Executing Test");
                }
            });
        }
    }
}








$("#ShowDailyChartForServices").click(function(e) {

    var myTimerGetRSChartONEForServicesONLY = setInterval(function() {
        FuncGetSubsBPNowForServicesONLY()
    }, 1000);

    function FuncGetSubsBPNowForServicesONLY() {

        document.getElementById("LoadingChartDiv").style.display = "block";

        var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
        var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
        var TenCurrentBP = document.getElementById("SelectedBPForsubNNow").innerHTML;

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        document.getElementById("SelectedResInResList").innerHTML = "All Resource Groups"

        $.ajax({
            url: '/RequestAzServicesDailyChart', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'TenBPNow': TenCurrentBP,
                'ThisLUser': FinalUserNameNow
            },
            success: function(data) {
                if (data.message) { // That means if there is data available

                    if (data.message == "CollectingDailyAZSERVICEChart") {
                        // Let timer run to collect 
                        document.getElementById("LoadingChartDiv").style.display = "block";

                    } else {

                        clearInterval(myTimerGetRSChartONEForServicesONLY); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatableForBPCNew = document.createElement("table");
                        datatableForBPCNew.id = 'NewResTableNowForCharting'
                        datatableForBPCNew.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];

                            if (newcell == null || newcell == "") {} else {
                                var row = datatableForBPCNew.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }

                        }

                        // INSERT INTO TABLE

                        var dtable = document.getElementById("ResChartDataDivNow");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBPCNew);

                        // GENERATE CHART HERE
                        Highcharts.chart('BillPeriodForResourceChartDiv', {
                            data: {
                                table: 'NewResTableNowForCharting',
                                startColumn: 0
                                    //          endColumn: 3
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
                                text: 'Daily Azure Services Chart'
                            },
                            /*xAxis: {
                                categories: allcat
                            },*/

                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Services Cost'
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


                        document.getElementById("LoadingChartDiv").style.display = "none";


                    }




                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });

    }

    document.getElementById("LoadingChartDiv").style.display = "none";

});





$("#DisableAllNotButton").click(function(e) {

    document.getElementById("SubNotifyONE").checked = false;
    document.getElementById("SubNotifyTWO").checked = false;
    document.getElementById("SubNotifyTHREE").checked = false;
    document.getElementById("SubNotifyFOUR").checked = false;
    document.getElementById("SubNotifyFIVE").checked = false;
    document.getElementById("SubNotifySIX").checked = false;
    document.getElementById("SubNotifySEVEN").checked = false;

});





$("#EnableAllNotButton").click(function(e) {

    document.getElementById("SubNotifyONE").checked = true;
    document.getElementById("SubNotifyTWO").checked = true;
    document.getElementById("SubNotifyTHREE").checked = true;
    document.getElementById("SubNotifyFOUR").checked = true;
    document.getElementById("SubNotifyFIVE").checked = true;
    document.getElementById("SubNotifySIX").checked = true;
    document.getElementById("SubNotifySEVEN").checked = true;

});





$("#SaveAllNotSet").click(function(e) {

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;
    var SubNotifyValueONE = document.getElementById("SubNotifyONE").checked;
    var SubNotifyValueTWO = document.getElementById("SubNotifyTWO").checked;
    var SubNotifyValueTHREE = document.getElementById("SubNotifyTHREE").checked;
    var SubNotifyValueFOUR = document.getElementById("SubNotifyFOUR").checked;
    var SubNotifyValueFIVE = document.getElementById("SubNotifyFIVE").checked;
    var SubNotifyValueSIX = document.getElementById("SubNotifySIX").checked;
    var SubNotifyValueSEVEN = document.getElementById("SubNotifySEVEN").checked;

    $.ajax({
        url: '/SaveSubAlertsPost', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TenSubID': TenSubID,
            'SubNotifyONE': SubNotifyValueONE,
            'SubNotifyTWO': SubNotifyValueTWO,
            'SubNotifyTHREE': SubNotifyValueTHREE,
            'SubNotifyFOUR': SubNotifyValueFOUR,
            'SubNotifyFIVE': SubNotifyValueFIVE,
            'SubNotifySIX': SubNotifyValueSIX,
            'SubNotifySEVEN': SubNotifyValueSEVEN,
            'ThisLUser': FinalUserNameNow,
            'TenName': TenNameNow
        },
        success: function(data) {
            if (data.message) {

                swal("Info", "Subscription Alerts were saved successfully!", "info");

            }

        }
    });

});





$("#CloseAddTenModal").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "none";

});






$("#AddNewTenNowIn").click(function(e) {

    document.getElementById("AddTenantModalToDispAndClose").style.display = "block";
    document.getElementById("AddTenantModalToDispAndClose").style.zIndex = "24";

    document.getElementById("TenUsingGOVCloud").checked = false;
    document.getElementById("DBManagedSP").checked = true;
    document.getElementById("DBManagedTenant").checked = false;

    document.getElementById("ConUserNameNew").value = "NOT NEEDED";
    document.getElementById("GlobalPassNow").value = "NOT NEEDED";

});



$("#ShowChartAndDataButton").click(function(e) {

    document.getElementById("ResCountAndCostChartData").style.display = "block";
    document.getElementById("ResCountAndCostChart").style.display = "none";

});


$("#ShowChartAndDataButtonCHARTOnly").click(function(e) {

    document.getElementById("ResCountAndCostChartData").style.display = "none";
    document.getElementById("ResCountAndCostChart").style.display = "block";

    Highcharts.chart('ResCountAndCostChart', {
        data: {
            table: 'ResAndCostTableNow',
            startColumn: 1,
            endColumn: 3
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Services Count & Cost'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Cost & Count'
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


});




function GetSelectedBillPeriodDailyChart(element) {

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
    var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;

    var thisButtonID = element.id
    var str = thisButtonID;
    var FinalBPName = str.substr(0, 6);

    var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
    var res = ThisLUserNow.split("@");
    var FinalUserNameNow = res[0];

    var CurBPNameNow = document.getElementById("CurBillPeriod").innerHTML;
    var str = CurBPNameNow;
    var FinalCurBillPeriod = str.substr(0, 6);

    $.ajax({ //Deleteting Bill Period File
        url: '/DelFileNowTWO', // This tells server which Route to use OKAYYYY
        type: 'POST',
        async: false,
        data: {
            'TenSubID': TenSubID,
            'TenNameNow': TenNameNow,
            'ThisLUser': FinalUserNameNow,
            'ThisBPName': FinalBPName,
            'CurBillPeriod': FinalCurBillPeriod
        },
        success: function(data) {}
    });





    document.getElementById("BPChartTWODIV").style.display = "block";
    document.getElementById("BPChartONEDIV").style.display = "none";

    document.getElementById("LoadingChartDivBPDaily").style.display = "block";

    var TenSubID = document.getElementById("SelectedSubForTenantNow").innerHTML;
    var TenNameNow = document.getElementById("TOPSelectedTenNow").innerHTML;

    var thisButtonID = element.id
    var str = thisButtonID;
    var FinalBPName = str.substr(0, 6);

    var myTimerGetSelBPChartDaily = setInterval(function() {
        FuncGetSelectedBillChartDaily()
    }, 1000);

    function FuncGetSelectedBillChartDaily() {

        //document.getElementById("CollectBPServiceCostCircle").style.display = "block";          

        var ThisLUserNow = document.getElementById("LoggedInUserName").innerHTML;
        var res = ThisLUserNow.split("@");
        var FinalUserNameNow = res[0];

        $.ajax({
            url: '/GetDailyChartForSelectedBP', // This tells server which Route to use OKAYYYY
            type: 'POST',
            async: false,
            data: {
                'TenSubID': TenSubID,
                'TenNameNow': TenNameNow,
                'ThisLUser': FinalUserNameNow,
                'ThisBPName': FinalBPName
            },
            success: function(data) {
                if (data.message) { // That means if there is data available


                    if (data.message == "CollectingBillPeriodDailyChart") {
                        // Let timer run to collect 

                        document.getElementById("LoadingChartDivBPDaily").style.display = "block";
                        //document.getElementById("CollectingSubscriptionCircle").style.display = "block";

                    } else {

                        clearInterval(myTimerGetSelBPChartDaily); // Clear Timer here to ensure it doesn't run once again and then append below data

                        let res = data.message.replaceAll('"', "");
                        var rows = res.split("\n");

                        var datatableForBPCDaily = document.createElement("table");
                        datatableForBPCDaily.id = 'BillPeriodDailyChartTableN'
                        datatableForBPCDaily.setAttribute('class', 'SummaryTableClassforAzBilling');

                        for (var i = 0; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            var newcell = cells[0];

                            if (newcell == null || newcell == "") {} else {
                                var row = datatableForBPCDaily.insertRow(-1);
                                for (var j = 0; j < cells.length; j++) {
                                    var cell = row.insertCell(-1);
                                    cell.innerHTML = cells[j];
                                }
                            }

                        }

                        // INSERT INTO TABLE

                        var dtable = document.getElementById("BPDailyResChartDataDivNow");
                        dtable.innerHTML = "";
                        dtable.appendChild(datatableForBPCDaily);


                        // GENERATE CHART HERE
                        Highcharts.chart('BPDailyBillPeriodForResourceChartDiv', {
                            data: {
                                table: 'BillPeriodDailyChartTableN',
                                startColumn: 0
                                    //          endColumn: 3
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
                                text: 'Daily Services Chart for Bill Period ' + thisButtonID
                            },
                            /*xAxis: {
                                categories: allcat
                            },*/

                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Services Cost'
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

                        document.getElementById("LoadingChartDivBPDaily").style.display = "none";

                    }





                } else {
                    alert("Error Executing Test");
                }
            },
            error: function() {
                alert("Error Executing Test");
            }
        });






    }


}





$("#ShowCostWiseChart").click(function(e) {

    // Chart for Resources Count and Cost
    // GENERATE CHART HERE
    Highcharts.chart('BillPeriodCompareResAndCountALL', {
        data: {
            table: 'CompareBPsNewResCountTable',
            startColumn: 2
                //endColumn: 4
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
            text: 'Comparing Resources Count and Cost'
        },
        /*xAxis: {
            categories: allcat
        },*/

        yAxis: {
            min: 0,
            title: {
                text: 'Services Cost'
            },
            stackLabels: {
                enabled: false,
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

});





$("#ShowCountWiseChart").click(function(e) {

    // Chart for Resources Count and Cost
    // GENERATE CHART HERE
    Highcharts.chart('BillPeriodCompareResAndCountALL', {
        data: {
            table: 'CompareBPsNewResCountTable',
            startColumn: 2,
            endColumn: 4,
            parsed: function(columns) {
                $.each(columns, function() {
                    this.splice(2, 4);
                });
            }
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
            text: 'Comparing Resources Count and Cost'
        },
        /*xAxis: {
            categories: allcat
        },*/

        yAxis: {
            min: 0,
            title: {
                text: 'Services Cost'
            },
            stackLabels: {
                enabled: false,
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




});







$("#AZCountShowChart").click(function(e) {

    document.getElementById("ResCountDataONLYDIV").style.display = "none";
    document.getElementById("ResCountCHARTOnlyDIV").style.display = "block";

});






$("#AZCountShowChartData").click(function(e) {

    document.getElementById("ResCountDataONLYDIV").style.display = "block";
    document.getElementById("ResCountCHARTOnlyDIV").style.display = "none";

});





$("#AZServicesNhowChart").click(function(e) {

    document.getElementById("CompareAZServicesDataONLYDIV").style.display = "none";
    document.getElementById("CompareAZServicesChartONLYDIV").style.display = "block";

});





$("#AZServicesNhowChartData").click(function(e) {

    document.getElementById("CompareAZServicesDataONLYDIV").style.display = "block";
    document.getElementById("CompareAZServicesChartONLYDIV").style.display = "none";

});



$("#AZRSGroupsNShowChart").click(function(e) {

    document.getElementById("CompareRSGroupsNDATAOnly").style.display = "none";
    document.getElementById("CompareAZRSGroupssCHARTONLYDIV").style.display = "block";

});



$("#AZRSGroupsNShowCharData").click(function(e) {

    document.getElementById("CompareRSGroupsNDATAOnly").style.display = "block";
    document.getElementById("CompareAZRSGroupssCHARTONLYDIV").style.display = "none";

});



$("#DBManagedSP").click(function(e) {

    document.getElementById("DBManagedSP").checked = true;
    document.getElementById("DBManagedTenant").checked = false;

});



$("#DBManagedTenant").click(function(e) {

    document.getElementById("DBManagedSP").checked = true;
    document.getElementById("DBManagedTenant").checked = false;

});



$("#ShowFirstHelp").click(function(e) {

    swal("Info", "Global Reader Account is needed for Office 365 Assessment. If you do not plan to use Office 365 Assessment, please enter false values.", "info");

});


$("#ShowSecondHelp").click(function(e) {

    swal("Info", "Service Principal Account is needed for Azure Virtual Desktop Management, Azure Billing Analysis, Azure Assessment and WVD Assessment.", "info");

});