/* Generated with Author-it 5.4.131.8883  4/27/2018 5:30:14 AM */
Page=new Array();Page[0]=new Array("Managing Empirica Study Cloud Users with OHSIAMS","Release 8.0","Part number: E88106-01","","title.htm");
Page[1]=new Array("This document contains information that is specific to delegated administrators who are responsible for administering Empirica Study users in the Oracle Health Sciences Identity and Access Management Service (OHSIAMS). For more information about working in OHSIAMS, see the Oracle Health Sciences Identity and Access Management Service Administrator Guide on the Oracle Help Center.","Audience","215173.htm");
Page[2]=new Array("You add an Empirica Study user in OHSIAMS after the Empirica Study user administrator notifies you that a user needs access to an Empirica Study instance. To provide access, you must:","Identify or create an OHSIAMS account for the user.","Assign the Empirica Study role to the OHSIAMS user account.","Add an Empirica Study user with OHSIAMS","215176.htm");
Page[3]=new Array("Log in to OHSIAMS.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Determine whether the user's OHSIAMS account appears in the Search Results list.","If the account exists:","Click the link in the User Login column.","Complete the Assign the Empirica Study role to an OHSIAMS user account section.","If the account does not exist:","Complete the Create an OHSIAMS account for a user section.","Proceed to the Assign the Empirica Study role to an OHSIAMS user account section.","Determine whether the OHSIAMS account exists for a user","215198.htm");
Page[4]=new Array("If the Oracle single sign-on (SSO) account doesn't exist, create it.","Log in to OHSIAMS.","On the left, under Administration, click Users.","Under the Search Results heading, from the Actions drop-down, select Create.","Fill in the fields for the new user.","First Name, Last Name","Email: Enter the email address that is associated with the new user account. The user receives the account password and notifications at this address. ","Organization: Enter the ShortOrgId for your organization.","If you don't know your ShortOrgId:","Click the search icon at the end of the field.","Below the search fields and to the right, click Search to show all results.","In the Search Results, select the row for your organization.","Click Select.","User Login: Enter the username that the user will use for logging in. The name is saved as all lowercase characters.","Password, Confirm Password: Leave these fields blank. The application generates the password and emails it to the user.","Click Submit, in the upper right.","The user receives one email message with their username and a second email message with their password.","Create an OHSIAMS account for a user","215566.htm");
Page[5]=new Array("On the User Details page, select the Roles tab.","From the Actions drop-down located above the table of roles, select Request.","Choose the Empirica Study role for the Empirica Study instance that the user will be working in.","The name of the Empirica Study role is unique to each Study instance. For example, role names may be EmpiricaStudy and EmpiricaStudyDev.","Select Add to Cart, located to the right of the role.","In the upper-right, click Checkout.","Review the roles in the cart.","In the upper-right, click Submit.","Shortly after the account has been granted the appropriate role, the user who owns the account can log in to the Empirica Study application using their OHSIAMS account and password.","Before starting to work in the application, users should take training that is relevant to their assigned scope of work in Empirica Study. Your organization should implement mechanisms to address regulatory requirements concerning training.","Assign the Empirica Study role to an OHSIAMS user account","215567.htm");
Page[6]=new Array("Can users who received access to Empirica Study through OHSIAMS immediately begin working in Empirica Study?","To work in Empirica Study, users must first be assigned to an appropriate login group and granted permissions in the Empirica Study application. ","Newly added users are automatically added to the Administrators login group and can log in to Empirica Study immediately. However, before the user can operate effectively in the application, an Empirica Study administrator must log in to Empirica Study to:","Assign the user to the appropriate login group.","Assign permissions to the user.","For more information, see the Adding and editing users in an Oracle-hosted environment and Assigning permissions to a user sections of the User Guide and Online Help.","What if there is already a user with the same username in Empirica Study?","If the username for the new user account is the same as an existing Empirica Study username, the success of the role assignment operation depends on the authentication method of the existing Empirica Study user.","Local authentication","Role assignment does not take effect in the Empirica Study application. You must:","Remove the Empirica Study role from the OHSIAMS user account.","Change either the existing Empirica Study user&#8217;s username or the OHSIAMS account username for the new user.","Assign the Empirica Study role back to the OHSIAMS user account.","SSO authentication","The role assignment succeeds. The Empirica Study user's information is updated with the details for the new user account.","Note: If the existing Empirica Study user is not the same person as the owner of the new OHSIAMS user account, you must perform the same steps as for Local authentication.","FAQs for adding users","215205.htm");
Page[7]=new Array("Log in to OHSIAMS.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","In the Search Results list, select the user&#8217;s record, and click Edit.","Update the user's User Login, First Name, Last Name, or E-mail as needed.","Tip: Updated User Login names are saved in lowercase only.","In the upper-right, click Submit.","Modify an Empirica Study user","215179.htm");
Page[8]=new Array("Log in to OHSIAMS.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","In the Search Results list, select the user&#8217;s record.","Click Reset Password.","To generate a temporary password and email it to the user, select Auto-generate the Password.","Note: Although it is not recommended, you can manually define a new password, without emailing the new password to the user. Select Manually change the Password, and fill in the password fields.","Click Reset Password.","Change a user password","216387.htm");
Page[9]=new Array("An account automatically becomes locked as a result of multiple failed login attempts. The user can then unlock the account by clicking Forgot Password.","Alternatively, you lock an account to prevent the user from logging in before disabling the account for termination of employment or another reason. When the account is explicitly locked by an administrator, the user cannot use the Forgot Password link to regain access.","Locking an account in OHSIAMS prevents the user from accessing all single sign-on applications. To prevent the user from accessing just Empirica Study, you can edit the user in Empirica Study and select Account disabled. For more information, see the User Guide and Online Help.","Before you unlock an account, verify that the person asking to have the account unlocked is the owner. To ensure system security, Oracle recommends that you establish a process to confirm the requester's identity.","Log in to OHSIAMS.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","In the Search Results list, select the user&#8217;s record.","Click Lock Account.","or","Click Unlock Account.","Confirm the action.","After you unlock an account, Oracle recommends that you also change the password for the user.","Lock or unlock an OHSIAMS user account","216388.htm");
Page[10]=new Array("You can delete an Empirica Study SSO user by removing the Empirica Study role from the OHSIAMS user. The username is marked as deleted in Empirica Study and the user can no longer log in.","If the deleted user owns objects in Empirica Study, a Superuser or any user who has Administer Users permission must purge the deleted user in Empirica Study to complete the deletion. Any objects assigned to the deleted user will be reassigned to the user who performs the purge. For more information, see Purging users in the User Guide and Online Help.","Delete an Empirica Study user","215175.htm");
Page[11]=new Array("Log in to OHSIAMS.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","On the Users page, click the link in the User Login column for the user.","Select the Roles tab.","In the table, select the role for the Empirica Study instance.","From the Actions drop-down located above the table of roles, select Remove.","Click Submit.","Remove the Empirica Study role from an OHSIAMS user account","215186.htm");
Page[12]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[13]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=14;


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