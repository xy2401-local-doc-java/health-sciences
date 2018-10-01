/* Generated with Author-it 5.4.131.8883  6/13/2018 3:40:20 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences Central Coding","Quick Start for Coders and Approvers","Release 6.2","Part number: E89746-01","","title.htm");
Page[1]=new Array("Your administrator sets the method of opening the Central Coding application. By default, you open the application by going to the following URL in your browser:","In an environment with native authentication: http://[server name]/[Coding virtual directory name]","Note: The Coding virtual directory name is the unique name for the application server where the Central Coding software is installed. This name is defined during installation.","In a single sign-on (SSO) environment, the URL is provided by your delegated administrator.","Launching the application","203568.htm");
Page[2]=new Array("Launch the Central Coding application. ","The Login page appears.","To log in:","Enter your login name and password.","Click Login.","If logging in the application for the first time, a message prompting you to change your password appears.","In the User Name field, enter your login name.","In the New Password and Confirm Password field, enter your new password.","Passwords can be from 1 to 32 characters. For security reasons, Oracle recommends using a combination of letters and numbers and a minimum of 6 characters. Passwords are case-sensitive.","Click Login.","The main application screen appears in a separate browser window and displays the folders you are allowed to access based on your user profile, role, and collection of rights.","Note: The Central Coding application is configured to allow a defined number of unsuccessful login attempts. If you exceed this number, you are locked out of the system. See your administrator for resetting your password.","To log out:","On the main page, click Logout.","A confirmation dialog box appears.","Click OK.","Logging in and out of the application","207250.htm");
Page[3]=new Array("If the Central Coding application has been migrated from an environment with native authentication to an Oracle SSO environment and you had a user account prior to the migration, the first time you log in with your new SSO credentials you are prompted to link your existing user account to the SSO environment. Enter the credentials for your existing account in the Former User ID and Former Password fields, and then click Link. The Central Coding application migrates your role and work team assignments to the SSO environment.","Note: If you forget your former password before you link the accounts, contact a Central Coding user administrator to reset it.","If you are a new user or an existing user who was already assigned roles or work teams in the SSO environment, the first time you log in the Central Coding home page appears.","Getting started in an environment migrated to SSO authentication","206161.htm");
Page[4]=new Array("Log in to the Central Coding application.","On the main page, click My Profile.","The My Profile dialog box appears.","Click Change password.","The Change Password dialog box appears.","Complete the following fields:","Old Password&#8212;The login password you are currently using.","New Password / Confirm Password&#8212;The new login password to use.","Passwords can be from 1 to 32 characters. For security reasons, Oracle recommends using a combination of letters and numbers and a minimum of 8 characters. Passwords are case-sensitive and cannot be reused for a configurable amount of time.","Click Save.","Changing your password in an environment with native authentication","207251.htm");
Page[5]=new Array("On the login page, click Forgot Password. ","The Forgot Password page appears.","In the User Login field, enter your user name.","Click Next. ","The Answer Challenge Questions page appears.","Enter your responses to the challenge questions.","Click Next. ","The Select a new password page appears.","Enter and confirm your new password. ","Click Save.","Changing your password in an SSO environment","205520.htm");
Page[6]=new Array("The Central Coding application includes the following online Help options:","Central Coding Documentation&#8212;Click the Help link (@) in the top right corner of the main page.","Page-level Help&#8212;Click the Help button (@) in the top right corner of the page or dialog box.","If the popup blocker in your browser prevents the Page-level Help from opening, turn off the popup blocker or press the Ctrl key before you click the Help button.","Hover Help&#8212;Point to a menu item, action, button, or icon to see more details.","Getting help","205029.htm");
Page[7]=new Array("Use this procedure to code a single verbatim against a dictionary using Search mode. Alternatively, click the Browse (@) icon from the coding browser to examine the target coding dictionary from level to level, and select the relevant term.","You access coding requests from the Coding Requests or Approvals page.","Select a request, and then select Actions &gt; Code Single.","The Coding Browser dialog box appears in Search mode. The dictionary elements that appear are configured for the coding definition in use.","In the Search for field, enter the text to code.","In the In field field, select the hierarchy level of the dictionary to search.","For the application to return more than 200 matched terms, select Return All Matches.","If this option is unavailable, contact your administrator.","Start the search.","To run a search for matches for the text entered in the Search for field, click the Starts With or Contains button, or select Contains whole words.","To run the autocode algorithm for the request, click the Auto button.","To ignore the step in the algorithm that searches previous code values that were marked as auto-suggestions, select Exclude Auto Suggestion step.","Dictionary entries that match the search criteria appear in the display area.","To display additional Medicinal Product information for the verbatim when coding using the WHO-DD dictionary type, select the link in the Drug Code or Trade Name column.","Click the Accept link for a code value.","If the verbatim was previously coded, the Recode Reason dialog box appears.","In the Reason field, specify a reason for recoding the verbatim.","To indicate the reason should not appear as a note attached to the coding request, deselect Add as notes.","Click Accept.","The application saves the code value for the selected coding request.","Coding a single item","207252.htm");
Page[8]=new Array("Use this procedure to code a single verbatim and propagate the code value to other matching verbatims using Search mode. Alternatively, click the Browse (@) icon from the coding browser to examine the target coding dictionary from level to level, and select the relevant term.","You access coding requests from the Coding Requests or Approvals page.","Click the Verbatim link for a request.","The Coding Browser dialog box appears in Search mode. The dictionary elements that appear are configured for the coding definition in use.","In the Search for field, enter the text to code.","In the In field field, select the hierarchy level of the dictionary to search.","For the application to return more than 200 matched terms, select Return All Matches.","If this option is unavailable, contact your administrator.","Start the search.","To run a search for matches for the text entered in the Search for field, click the Starts With or Contains button, or select Contains whole words.","To run the autocode algorithm for the request, click the Auto button.","To ignore the step in the algorithm that searches previous code values that were marked as auto-suggestions, select Exclude Auto Suggestion step.","Dictionary entries that match the search criteria appear in the display area.","To prevent the Central Coding application from using the code value you accept for new requests with the same verbatim, dictionary, coding definition, and context information, deselect Use as Auto Suggestion.","To display additional Medicinal Product information for the verbatim when coding using the WHO-DD dictionary type, select the link in the Drug Code or Trade Name column.","Click the Accept link for a code value.","If the verbatim was previously coded, the Recode Reason dialog box appears.","In the Reason field, specify a reason for recoding the verbatim.","To indicate the reason should not appear as a note attached to the coding request, deselect Add as notes.","Click Accept.","The application propagates the selected code value to other uncoded requests with the same verbatim, coding definition, and context information.","Coding an item and propagating the value","207253.htm");
Page[9]=new Array("Use this procedure to remove the code value for:","A verbatim.","Other delivered or undelivered coded requests with the same verbatim, code value, coding definition, and context information.","The code value is cleared only for coded requests that are associated with unlocked studies.","Clearing the code values in the Central Coding application clears the corresponding code values in the source application. If the source application is InForm, the Central Coding application also clears approval details such as the approver name and approval date.","You access coding requests from the Coding Requests or Approvals page.","Select one or more requests.","Select Actions &gt; Clear Code to clear the code value for a single request.","or","Select Actions &gt; Clear and Propagate to clear the code value for multiple requests.","The Clear Code Reason dialog box appears.","In the Reason field, specify a reason for clearing the code value, or for propagating the clearing of the code value to similar coded requests.","To indicate the reason should not appear in a note attached to the coding request, deselect Add as notes.","Click Accept.","The coding status of the requests changes to Uncoded (@).","Clearing code values","207254.htm");
Page[10]=new Array("Use this procedure to change the status of a request with a failed delivery to the source application to Completed, awaiting delivery. Changing the status allows the request to be picked up by the job queue so that it can be resent to the source application at the next scheduled time.","Select Coding Requests.","The Coding Requests page appears.","Select a request with a delivery status of Undeliverable, retry (@).","To view the reason the delivery was unsuccessful, point to the Undeliverable, retry (@) icon.","Select Actions &gt; Retry Delivery.","Resending an undeliverable request","207255.htm");
Page[11]=new Array("If reviewing is configured by an administrator, you can apply the review process to coding requests that have been successfully autocoded and have a Needs Review status.","Select Coding Requests.","The Coding Requests page appears.","Select one or more requests with a status of Needs Review (@).","Select Actions &gt; Review Complete.","The request status changes to Coded, awaiting approval (@) or Completed, awaiting delivery (@).","Reviewing an autocoded request","207256.htm");
Page[12]=new Array("You access coding requests from the Coding Requests or Approvals page.","Click the Verbatim link for a request.","The Coding Browser dialog box appears in Search mode. The dictionary elements that appear are configured for the coding definition in use.","Click the Create Query link.","The Create Query dialog box appears.","Select a reason from the Reason drop-down list or click Other and specify the reason for creating the query in the Other text box.","To copy the reason from the Reason drop-down list, click the Copy (@) icon.","To add the reason to the standard list that appears in the Reason drop-down list, if you have the Manage Standard Reasons right, click Add as standard reason.","If you have the Force Close Query right, deselect Auto Close Query upon Coding Complete. If you deselect this option, the Central Coding application does not close the query if the verbatim is successfully coded. You must use the Force Close Query option to close the query.","Oracle recommends leaving this option selected.","To indicate that the Central Coding application does not associate the query with each new instance of the verbatim, if you have the required rights, deselect Add to auto query list.","Click OK.","The Central Coding application creates the query on the selected verbatim.","Creating a query from the coding browser","207257.htm");
Page[13]=new Array("Select a verbatim.","Select Actions &gt; Create query single to create a query on a single verbatim.","or","Click the Create Query button to create a query and propagate it to multiple instances of the verbatim.","The Create Query dialog box appears.","Select a reason from the Reason drop-down list or click Other and specify the reason for creating the query in the Other text box.","To copy the reason from the Reason drop-down list, click the Copy (@) icon.","To add the reason to the standard list that appears in the Reason drop-down list, if you have the Manage Standard Reasons right, click Add as standard reason.","If you have the Force Close Query right, deselect Auto Close Query upon Coding Complete. If you deselect this option, the Central Coding application does not close the query if the verbatim is successfully coded. You must use the Force Close Query option to close the query.","Oracle recommends leaving this option selected.","To indicate that the Central Coding application does not associate the query with each new instance of the verbatim, if you have the required rights, deselect Add to auto query list.","Click OK.","The Central Coding application creates the query on the selected verbatim, and also on other instances of the selected verbatim, if applicable.","Creating a query from the Coding Requests or Approvals page","207258.htm");
Page[14]=new Array("You access coding requests from the Coding Requests or Approvals page.","Select a request.","Click the Add Flags button.","The Please select flags to add dialog box appears.","Select the checkbox for a flag.","Click Accept.","Adding a flag to a request","202442.htm");
Page[15]=new Array("You access coding requests from the Coding Requests or Approvals page.","Click the flag icon to delete.","A confirmation dialog box appears.","Click OK.","Removing a flag from a request","202460.htm");
Page[16]=new Array("You access coding requests from the Coding Requests or Approvals page.","Select a coding request.","Click the Add Notes button.","The Add Notes dialog box appears. ","In the Notes text box, enter the note text for the request.","Click Accept.","Adding a note to a request","202443.htm");
Page[17]=new Array("Use this procedure to approve the coding for the selected request and for other coded requests with the same code, verbatim, coding definition, and context information. The approval propagates only to requests associated with unlocked studies.","Approved requests are considered to be complete and available for delivery to the source application.","Select Approvals.","The Approvals page appears.","In the Show filter field, select To Do.","Click Apply.","Select one or more requests.","Click the Approve Single button to approve a single request.","or","Click the Approve button to approve multiple requests.","The coding status of the requests changes to Completed, awaiting delivery (@).","Approving requests","207260.htm");
Page[18]=new Array("Use this procedure to disapprove the coding for the selected request and for all other coded requests with the same code, verbatim, coding definition, and context information. The disapproval propagates only to requests associated with unlocked studies. ","Disapproved requests are returned to the coder's queue, and the disapproval reason appears in a note attached to the coding request.","Select Approvals.","The Approvals page appears.","In the Show filter field, select To Do.","Click Apply.","Select one or more requests.","Click the Disapprove Single button to disapprove a single request.","or","Click the Disapprove button to disapprove multiple requests.","The Disapprove Reason dialog box appears.","In the Reason field, specify a reason for disapproval.","To prevent the Central Coding application from attaching the reason for disapproval in a note to the coding requests, deselect Add as notes.","Click Accept.","The coding status of the requests changes to Recode (@).","Disapproving requests","207261.htm");
Page[19]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[20]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=21;


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