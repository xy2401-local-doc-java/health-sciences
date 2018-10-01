/* Generated with Author-it 5.4.131.8883  5/31/2018 11:50:33 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences mHealth Connector Cloud Service","User Provisioning and Administration","Release 1.2","Part number: E97298-01","","title.htm");
Page[1]=new Array("This document is for a delegated administrator who is responsible for provisioning and administering mHealth Connector Cloud Services users in Oracle Health Sciences Identity and Access Management Service (OHSIAMS). ","This document contains information that is specific to administering mHealth Connector Cloud Services in OHSIAMS Oracle Identity Self Service. For complete instructions on working in OHSIAMS Oracle Identity Self Service, see the Oracle Help Center(Oracle Health Sciences Identity and Access Management Service Administrator Guide.)","Audience","211495.htm");
Page[2]=new Array("The roles that are available in OHSIAMS Oracle Identity Self Service for mHealth Connector Cloud Services grant rights for mHealth Connector Cloud Services as a whole. They are not study-specific.","Roles are specific to your organization and have the following format: ","&lt;ShortOrgId&gt;.mHealth, such as pharma.mHealth","&lt;ShortOrgId&gt;.mHealth_AssignGlobalRoles, such as pharma.mHealth_AssignGlobalRoles","ALL_Users role","Grant this role to all users. For more information, see the Oracle Help Center. Oracle Health Sciences Identity and Access Management Service Administrator Guide.","mHealth_Configuration_Administrator role","This role should only be granted to technical consultants who will perform the DTH configuration for the customer trial. Note that this access cannot be limited to a particular trial, so once granted the technical consultant will have access to all customer trials available in the customer DTH tenant.","mHealth_Customer_Portal users","This should be granted to anyone who needs to verify that the configuration has been implemented successfully via the portal.&nbsp; ","mHealth_External_Web_Services-System_Users_Only and mHealth_Internal_Web_Services-System_Users_Only roles","These are internal roles that should not be granted to any users.","mHealth Connector Cloud Services roles in OHSIAMS Oracle Identity Self Service","216434.htm");
Page[3]=new Array("How do I get access to OHSIAMS Oracle Identity Self Service? The Cloud Delivery Manager (CDM) from Oracle requests information from your organization, including your name and your organization's name, so that you can be given access to OHSIAMS Oracle Identity Self Service. After you get access to OHSIAMS Oracle Identity Self Service, you'll receive a welcome letter over email. ","How do users get the URL for accessing mHealth Connector Cloud Services? The welcome letter includes the URL for accessing mHealth Connector Cloud Services. All mHealth Connector Cloud Services users at your organization use the same URL. You should provide the URL to the mHealth Connector Cloud Services users.","Getting access to OHSIAMS Oracle Identity Self Service","216435.htm");
Page[4]=new Array("These steps are required so that Oracle users can access your instance of mHealth Connector Cloud Services and configure their studies. ","Why do I have to perform these steps? You cannot provision users who are outside your organization in OHSIAMS Oracle Identity Self Service, even Oracle employees. These steps allow users who are outside your organization to request access to your instance of mHealth Connector Cloud Services so that they can be provisioned to work in mHealth Connector Cloud Services.","To grant access to Oracle users:","Activate approval for the mHealth Connector Cloud Services roles in OHSIAMS Oracle Identity Self Service.","Why do I do this? When approval is activated for a role, it adds a second step in the process of assigning the role or requesting the role using self-service registration: an access request is raised and the role isn't granted unless the request is approved.","If you don't activate approval for a role, all users who request the role through self-service registration automatically receive it, and you can assign a role to a user without someone else approving the request.","Set up self-service registration in OHSIAMS Oracle Identity Self Service.","Why do I do this? When you activate self-service registration for the mHealth_Configuration_Administrator and mHealth_Customer_Portal users roles and a user who doesn't have the role navigates to the URL for mHealth Connector Cloud Services, the user sees a page that allows them to submit an access request. An approver at your organization can approve the request in OHSIAMS Oracle Identity Self Service to grant the role to the user.","Make mHealth Connector Cloud Services roles available to Oracle.","Why do I do this? Oracle employees can request access only to the roles that you publish to them.","Review and approve access requests in OHSIAMS Oracle Identity Self Service.","Why do I do this? If you don't approve the requests of Oracle employees, they can't work in your organization's instance of mHealth Connector Cloud Services. ","If approval is active for a role, any attempt to grant the role to a user&#8212;either from OHSIAMS Oracle Identity Self Service or through self-service registration&#8212;generates an access request. Someone with the Approver role at your organization must approve the request, or the user isn't granted the role. ","Do I need to revoke Oracle employees' access after a study design is complete? You can, but you don't have to. After a study is approved and a predetermined amount of time passes, the user accounts of Oracle employees expire.","Workflow for granting access to Oracle users","216436.htm");
Page[5]=new Array("What do I have to do first? If you haven't already, submit a request to Oracle Support to create the Approver role for your organization and then assign it to at least two users. For instructions, see Set up approval for a role in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","How do I undo this? For information about deactivating approval, see Deactivate approval in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Open OHSIAMS Oracle Identity Self Service:","https://&lt;ShortOrgId&gt;-hs-identity.oracleindustry.com/identity","where &lt;ShortOrgId&gt; is the short name for your organization. This value is defined when your organization is added to OHSIAMS Oracle Identity Self Service. ","Open the role page:","Under the Administration menu on the left, click Roles.","In the Search section, for Display Name:","From the list, select Contains.","In the field, type mHealth.","Click Search.","In the Search Results, click the link in the Display Name column to open the role page for either the mHealth_Customer_Portal users or mHealth_Configuration_Administrator role.","In the row of controls at the top of the page, click Set Approval Options.","In the dialog box, select Activate Approval.","Select Notify the user on request status so that the user who needs the role receives a notification after the access request is approved or rejected.","Click Submit.","Click x to close the dialog box.","Activate approval for the mHealth Connector Cloud Services roles","216437.htm");
Page[6]=new Array("Follow these directions to set up self-service registration for any mHealth Connector Cloud Services role.","Open the role page.","Under the Administration menu on the left, click Roles.","In the Search section, for Display Name:","From the list, select Contains.","In the field, type mHealth.","Click Search.","In the Search Results, click the link in the Display Name column to open the role page for either the mHealth_Customer_Portal users or mHealth_Configuration_Administrator role.","Activate approval for the role. Approval is inactive by default.","If you leave approval as inactive, all requests are automatically approved. ","In the row of icons near the top of the page, click Set Unauthorized Access Page.","Select Authorization Request Page and click Submit.","Click x to close the dialog box.","Set up self-service registration for mHealth Connector Cloud Services roles","216438.htm");
Page[7]=new Array("What do I have to do first? Set up approval for the mHealth Connector Cloud Services roles.","How do I undo this? To hide the mHealth Connector Cloud Services roles from Oracle, submit a request to Oracle Support.","To publish the mHealth_Customer_Portal users role: ","Open the role page:","Under the Administration menu on the left, click Roles.","In the Search section, for Display Name:","From the list, select Equals.","In the field, type mHealth_Customer_Portal.","Click Search.","In the Search Results, click the link in the Display Name column to open the role page.","In the row of controls at the top of the role page, click Publish Role to External Organization.","Select the checkbox for the oracle organization.","Click Submit. ","A confirmation message appears at the bottom of the dialog box.","Click x to close the dialog box.","To publish the mHealth_Configuration_Administrator role: ","In OHSIAMS Oracle Identity Self Service, open the role page:","Under the Administration menu on the left, click Roles.","In the Search section, for Display Name:","From the list, select Equals.","In the field, type mHealth_Configuration_Administrator.","Click Search.","In the Search Results, click the link in the Display Name column to open the role page.","In the row of controls at the top of the role page, click Publish Role to External Organization.","Select the checkbox for the oracle organization.","Click Submit. ","A confirmation message appears at the bottom of the dialog box.","Click x to close the dialog box.","What do I do next? Tell your Oracle project manager that the roles are visible and that Oracle employees can begin requesting access to them by following the mHealth Connector Cloud Services URL in your welcome letter. If you are allowing internal users to request access, you can provide the URL to those users, as well.","Make mHealth Connector Cloud Services roles available to Oracle","216439.htm");
Page[8]=new Array("How do I know when to do this? We recommend checking your pending approvals frequently in OHSIAMS Oracle Identity Self Service to see whether any new requests have come in. A number next to Pending Approvals in the menu on the left indicates the number of open access requests.","Who can do this? You must have the Approver role in OHSIAMS Oracle Identity Self Service to perform this task. If you requested access for someone, you cannot approve that request. Instead, someone else at your organization must approve the request.","To review and approve access requests:","In OHSIAMS Oracle Identity Self Service, under the Requests menu on the left, click Pending Approvals.","If you have a custom view, select it under My Views on the left.","For instructions in creating a custom view, see Customize columns on the Pending Approvals page in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","If multiple users in your organization have the Approver role, you must claim a pending request before you can approve or reject it. If you're the only approver, skip this step.","Under the Requests menu on the left, click Pending Approvals.","If you have a custom view, select it under My Views on the left.","Highlight the row of the request.","From the Actions list at the top of the page, select Claim.","Double-click the row of the request, and review the request. Make sure the user who is requesting access requires access to mHealth Connector Cloud Services.","Add a comment (optional to approve, but required to reject):","Select the Approval tab.","In the upper right of the Comments text box, click Create.","Type your comment and click OK.","In the top right of the page, click Approve or Reject.","Review and approve access requests","216440.htm");
Page[9]=new Array("You have the following options for granting access to users who work at your organization:","Provision users individually.","For instructions, see Assign mHealth Connector Cloud Services roles to a user.","Provision users using a bulk import.","If you need to create and/or provision multiple users, a bulk import can save you some time. You have a number of options for bulk import, including:","Create all new users.","Create all new users and assign roles to them.","Assign roles to existing users.","Create some new users and assign roles to them, and assign roles to existing users. ","For instruction, see Perform user operations in bulk in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Ask users to request access to the mHealth_Customer_Portal or mHealth_Configuration_Administrator role.","Users who already have single sign-on accounts can navigate to the URL for mHealth Connector Cloud Services, log on with their single sign-on user name and password, and request access to an mHealth role.","Users should not request access to the mHealth_External_Web_Services-System_Users_Only and mHealth_Internal_Web_Services-System_Users_Only roles.","Users who don't have a single sign-on account can't request access to mHealth Connector Cloud Services until you create an account for them.","Workflow for granting internal users access to mHealth Connector Cloud Services","211497.htm");
Page[10]=new Array("What do I need to do first? If the user's single sign-on account doesn't exist, create it. For instructions, see Create a user account in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Task 1. Assign mHealth Connector Cloud Services roles appropriately to the user","Open OHSIAMS Oracle Identity Self Service:","https://&lt;ShortOrgId&gt;-hs-identity.oracleindustry.com/identity","where &lt;ShortOrgId&gt; is the short name for your organization. This value is defined when your organization is added to OHSIAMS Oracle Identity Self Service.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Equals, and type the user's email address.","or","From the Display Name drop-down, select Equals, and type the user's display name.","Click Search, located below the filtering fields and to the right. ","In the Search Results table, find the user, and in the User Login column, click the user's name.","On the User Details page, select the Roles tab.","From the Actions drop-down, located above the table of roles, select Request.","Find the appropriate mHealth Connector Cloud Services roles:","In the search box, type mHealth and press Enter:","The matching roles appear in the search results.","For each mHealth Connector Cloud Services role the user needs, choose Add to Cart, located to the right of the role.","In the upper-right, click Checkout.","Review the roles in the cart. ","In the upper-right, click Submit.","The Request Summary page opens, and a confirmation message appears at the top of the page. ","(If your organization requires approval for the mHealth Connector Cloud Services roles) Ask someone with the Approver role to approve the access requests so that the user receives the role(s) you assigned. You cannot approve your own requests, so someone else at your organization must approve them. ","Task 2. Notify the mHealth Connector Cloud Services administrator that the user's SSO account is available in mHealth Connector Cloud Services","The mHealth Connector Cloud Services user administrator can now give the user the appropriate roles in mHealth Connector Cloud Services. After the user has been granted the appropriate roles, the user can log on to mHealth Connector Cloud Services using the Oracle single sign-on account and password.","Assign mHealth Connector Cloud Services roles to a user","216442.htm");
Page[11]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[12]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=13;


/* End of Generated with Author-it */
/* Fix (Nov 14, 17): cannot search by full title*/
if (Page !== undefined && Page.length > 0) {
	for (i in Page) {
		var j = 0;
		for (j; j < Page[i].length; j++) {
			Page[i][j] = ' ' + Page[i][j] + ' ';
		}
	}
}
/* end of Fix (Nov 14, 17): cannot search by full title*/

function search(SearchWord) {
	//Create heading html
	var Result = "";
	var NrRes = 0;
	Result += "<div  style='display:flex;' ><img id='oracleImage' alt='Oracle' src='oracleIcon.png'>";
	Result = headerTitleLoad(Result);
	Result += '<div><form name="SearchForm" class="searchDetails" action="javascript:querySearchToBody(document.SearchForm.SearchText.value)">';
	if (SearchWord.length >= 1) {
		while (SearchWord.indexOf("<") > -1 || SearchWord.indexOf(">") > -1 || SearchWord.indexOf('"') > -1) {
			SearchWord = SearchWord.replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;");
		}
	}
	Result += '<table>';
	Result += '<tr><td>';
	Result += '<input type="text" id="SearchText" name="SearchText" size="25" placeholder="Type keyword..." value="' + SearchWord + '" />';
	Result += '</td><td>';
	Result += '<img id="SearchButton" src="magnifyingGlass.png" alt="Search" onclick="javascript:querySearchToBody(document.SearchForm.SearchText.value)"/>';
	Result += '</td></tr>';
	Result += '</table>';
	Result += '</form></div>';


	//Paste heading html into header
	this.document.getElementById("header").innerHTML = Result;
}


function showResults(SearchWord) {
	if (SearchWord.length >= 1) {
		var Result = "";
		var NrRes = 0;

		SearchWord = SearchWord.toLowerCase();
		this.status = "Searching, please wait...";
		Result += "<table border='0' cellpadding='5' class='searchResults' width='100%'>";

		pagesAdded = new Array();
		maxResultCount = 20;
		stringsToFind = new Array();

		//Create strings to find
		var splitPhrase = SearchWord.split(" ");
		for (outerCounter = splitPhrase.length;
			(outerCounter > 0); outerCounter--) {
			for (innerCounter = 0;
				(innerCounter < splitPhrase.length - outerCounter + 1); innerCounter++) {
				var string = "";
				for (stringCounter = innerCounter; stringCounter < outerCounter + innerCounter; stringCounter++) {
					if (string != "") {
						string = string + " " + splitPhrase[stringCounter];
					} else {
						string = splitPhrase[stringCounter];
					}
				}

				if (goodString(string) || splitPhrase.length == 1) {
					stringsToFind.push(string);
				}
			}
		}

		//Find phrase/word(s) in documentation
		for (counter = 0; counter < stringsToFind.length; counter++) {
			string = stringsToFind[counter];

			for (j = 0;
				(j < PageCount) && (pagesAdded.length < maxResultCount); j++) {
				k = Page[j].length - 1;

				//Check if pages has already been used
				var pageUsed = false;
				for (checkCounter = 0; checkCounter < pagesAdded.length; checkCounter++) {
					if (pagesAdded[checkCounter] === Page[j][k]) {
						pageUsed = true;

						break;
					}
				}

				for (i = 0; i < k && !pageUsed; i++) {
					stringTwo = " " + string + " ";
					WordPosHeading = Page[j][k].toLowerCase().indexOf(stringTwo);
					WordPosContent = Page[j][i].toLowerCase().indexOf(stringTwo);

					if ((WordPosContent > -1) || (WordPosHeading > -1)) {
						FoundWord = Page[j][i].substr(WordPosContent, stringTwo.length);
						NrRes++;
						Result += "<tr><td>";
						Result += '<a target=\"CONTENT\" href="' + Page[j][k] + '">' + Page[j][k - 1].replace(FoundWord, FoundWord.bold()) + '</a><br/>\n';
						pagesAdded.push(Page[j][k]);

						if (i < k - 1) {
							if (Page[j][i].length > 350) {
								Result += "..." + Page[j][i].substr(WordPosContent - 100, 200 + FoundWord.length).replace(FoundWord, FoundWord.bold()) + "...\n";
							} else {
								Result += Page[j][i].replace(FoundWord, FoundWord.bold()) + "\n";
							}
						}else if(i === k - 1){
							//if searched value matched string in title, then display something as description.
							if(Page[j][1]) {
								Result += Page[j][1]+ "\n";
							}
						}

						Result += "</td></tr>";
						break;
					} else {
						stringThree = string + " ";
						WordPosHeading = Page[j][k].toLowerCase().indexOf(stringThree);
						WordPosContent = Page[j][i].toLowerCase().indexOf(stringThree);

						if ((WordPosContent == 0) || (WordPosHeading == 0)) {
							FoundWord = Page[j][i].substr(WordPosContent, stringThree.length);
							NrRes++;
							Result += "<tr><td>";
							Result += '<a target=\"CONTENT\" onclick="hideSearchResults();" href="' + Page[j][k] + '">' + Page[j][k - 1].replace(FoundWord, FoundWord.bold()) + '</a><br/>\n';
							pagesAdded.push(Page[j][k]);

							if (i < k - 1) {
								if (Page[j][i].length > 350) {
									Result += "..." + Page[j][i].substr(WordPosContent - 100, 200 + FoundWord.length).replace(FoundWord, FoundWord.bold()) + "...\n";
								} else {
									Result += Page[j][i].replace(FoundWord, FoundWord.bold()) + "\n";
								}
							}else if(i === k - 1){
								//if searched value matched string in title, then display something as description.
								if(Page[j][1]) {
									Result += Page[j][1]+ "\n";
								}
							}

							Result += "</td></tr>";
							break;
						} else {
							stringFour = " " + string + ".";
							WordPosHeading = Page[j][k].toLowerCase().indexOf(stringFour);
							WordPosContent = Page[j][i].toLowerCase().indexOf(stringFour);

							if (((WordPosContent == Page[j][i].length - stringFour.length) && (WordPosContent != -1)) || ((WordPosHeading != Page[j][k].length - stringFour.length) && (WordPosHeading != -1))) {
								FoundWord = Page[j][i].substr(WordPosContent, stringFour.length);
								NrRes++;
								Result += "<tr><td>";
								Result += '<a target=\"CONTENT\" onclick="return hideSearchResults()" href="' + Page[j][k] + '">' + Page[j][k - 1].replace(FoundWord, FoundWord.bold()) + '</a><br/>\n';

								pagesAdded.push(Page[j][k]);

								if (i < k - 1) {
									if (Page[j][i].length > 350) {
										Result += "..." + Page[j][i].substr(WordPosContent - 100, 200 + FoundWord.length).replace(FoundWord, FoundWord.bold()) + "...\n";
									} else {
										Result += Page[j][i].replace(FoundWord, FoundWord.bold()) + "\n";
									}
								}else if(i === k - 1){
									//if searched value matched string in title, then display something as description.
									if(Page[j][1]) {
										Result += Page[j][1]+ "\n";
									}
								}

								Result += "</td></tr>";
								break;
							}
						}
					}
				}
			}
		}

		Result += "</table>";
		Result += "<p class='searchDetails'>&nbsp;" + NrRes + " result(s) found.</p>";

		if (this.document.getElementById("searchResultsNone") != null) {
			this.document.getElementById("searchResultsNone").innerHTML = Result;
		} else if (this.document.getElementById("searchResultsBlock") != null) {
			this.document.getElementById("searchResultsBlock").innerHTML = Result;
		} else {
			console.log('Error -> Can\'t find getElementById("searchResultsNone") or getElementById("searchResultsBlock")');
		}
		showSearchResults();
	}
}

function querySearchToBody(SearchWord) {
	var bodysrc = document.getElementById("content").src;
	window.CONTENT.location = bodysrc + '?' + SearchWord;
}

function showSearchResults() {
	if ((this.document.getElementById("searchResultsNone") != null) && (this.document.getElementById("content") != null)) {
		this.document.getElementById("searchResultsNone").style.display = 'block';
		this.document.getElementById("searchResultsNone").id = 'searchResultsBlock';
		this.document.getElementById("content").style.display = 'none';
	} else {
		console.log('Error -> Can\'t find getElementById("searchResultsNone") or getElementById("content")');
	}
}

function hideSearchResults() {
	if ((this.document.getElementById("searchResultsBlock") != null) && (this.document.getElementById("content") != null)) {
		this.document.getElementById("searchResultsBlock").style.display = 'none';
		this.document.getElementById("searchResultsBlock").id = 'searchResultsNone';
		this.document.getElementById("content").style.display = 'block';
	} else {
		console.log('Error -> Can\'t find getElementById("content") or getElementById("searchResultsBlock")');
	}
}


function goodString(string) {
	//Not finished but is intended to check if a word is significant for example "a" is used in almost all pieces of documentation and will get in the way of the desired results.
	if (string.length == 1) {
		return false;
	}
	return true;
}