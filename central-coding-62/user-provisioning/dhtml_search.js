/* Generated with Author-it 5.4.131.8883  6/28/2018 9:57:02 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences Central Coding","User Provisioning in SSO Environments","Release 6.2","Part number: E97812-01","","title.htm");
Page[1]=new Array("This document is for a customer delegated administrator (CDA) who is responsible for provisioning and administering Central Coding user accounts in an SSO environment through OHSIAMS Oracle Identity Self Service. ","The information in this document is specific to Central Coding. For complete instructions on working in OHSIAMS Oracle Identity Self Service, see the OHSIAMS Administrator Guide.","This document is not for a Central Coding User Administrator (CUA) who manages rights, roles, and work teams in the application. For information about these tasks, see the Central Coding User Guide.","Audience","220651.htm");
Page[2]=new Array("After your account is created, you receive two emails with information about how to access OHSIAMS Oracle Identity Self Service.","Navigate to https://&lt;ShortOrgId&gt;-hs-identity.oracleindustry.com/identity and log in using your Oracle Health Sciences Cloud SSO account and password. Your ShortOrgId appears in one of the emails you receive following the creation of your account.","Access OHSIAMS Oracle Identity Self Service","220652.htm");
Page[3]=new Array("@ Show me how!","The user provisioning process consists of the following steps:","Task 1. In OHSIAMS Oracle Identity Self Service, create the user account","For instructions, see Create a user account in the OHSIAMS Administrator Guide.","If you need to create several accounts, you can use Bulk Import in OHSIAMS Oracle Identity Self Service to create them all at once. For instructions, see Perform user operations in bulk in the OHSIAMS Administrator Guide.","An initial user administrator is created in Central Coding during the application installation. When you create the account for this user in OHSIAMS Oracle Identity Self Service, make sure the user name matches the name used during the installation. This user is assigned the User Administrator and User Manager roles in Central Coding by default. ","Task 2. In OHSIAMS Oracle Identity Self Service, assign the Central Coding role (business service) to the user account","For instructions, see Assign roles in the OHSIAMS Administrator Guide.","The role name typically includes the ShortOrgId, environment type (for example, uat or prod), and ccoding.","Task 3. In Central Coding, a CUA assigns the user to roles and work teams","For more information, see the Central Coding User Guide.","Provision users","220673.htm");
Page[4]=new Array("As delegated administrator, you can update account information or change the status of user accounts. For example, you can:","Edit the personal information of users. ","Change user passwords. ","Terminate users.","Lock and unlock users.","For more information, see Update user accounts in the OHSIAMS Administrator Guide.","Manage user accounts","220645.htm");
Page[5]=new Array("Follow these steps to allow Oracle Support and Services staff access to your Central Coding instance. Members of the Services team typically require access to configure the initial system and new studies. Services and Support team members can both access Central Coding for troubleshooting.","Task 1. Enable self-service registration","Self-service registration allows Oracle employees to request access to your Central Coding instance. For instructions, see Set up self-service registration in the OHSIAMS Administrator Guide.","Task 2. Activate approval for the Central Coding role (optional)","Approval lets you control who gains access to Central Coding. If approval is active, users won't get access unless someone at your organization approves the request. Without approval, access is granted automatically.","Submit a Service Request to add the approver role in OHSIAMS Oracle Identity Self Service for your organization.","After the approver role is available, assign it to at least two users.","Activate approval for the Central Coding role. For instructions, see Activate approval for a role in the OHSIAMS Administrator Guide.","Task 3. Make the Central Coding role available to Oracle","Publish the Central Coding role to the oracle organization. For instructions, see Allow another organization to view and assign one of your organization's roles in the OHSIAMS Administrator Guide.","How Oracle users gain access to Central Coding","After you make the role available to Oracle, an Oracle user gains access to Central Coding through the following process:","The user navigates to the URL of the Central Coding instance and tries to log in.","The self-service registration page appears where the user submits a request for access.","An entry is added on the Pending Approvals page in OHSIAMS Oracle Identity Self Service.","If approval is active, a CDA approves the access request. Without approval, access is granted automatically.","The user contacts a CUA to obtain the appropriate role and work team assignments in the application.","Make the Central Coding role available to Oracle","220694.htm");
Page[6]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[7]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=8;


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