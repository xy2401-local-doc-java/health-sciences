/* Generated with Author-it 5.4.131.8883  7/27/2018 9:20:51 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences Empirica Signal","Managing Empirica Signal Cloud Users with OHSIAMS","Release 8.1.1","Part number: E98890-01","","title.htm");
Page[1]=new Array("This document contains information that is specific to delegated administrators who are responsible for administering Empirica Signal users in the Oracle Health Sciences Identity and Access Management Service (OHSIAMS). For more information about working in OHSIAMS, see the Oracle Health Sciences Identity and Access Management Service Administrator Guide on the Oracle Help Center.","Audience","216930.htm");
Page[2]=new Array("Starting with Empirica Signal version 8.x, the Empirica Signal and Topics Cloud Service is integrated with the Oracle Health Sciences (OHS) centralized Identity Management and Single Sign-on System (OHSIAMS).&nbsp;","OHSIAMS manages user credentials and controls if a user can login to a particular Cloud application or environment. In OHSIAMS, each user has a single username and password. These are valid across all enabled OHS Cloud Services, regardless of the number of different applications or environments the user has access to.","Each company that uses OHS Cloud Services nominates at least one Customer Delegated Administrator (CDA).&nbsp;This individual can create, enable, disable, or delete user accounts in OHSIAMS on behalf of the company, and define which applications and Cloud environments a user can access.","Even though OHSIAMS manages the user accounts, application-specific user roles and privileges are still defined in an application's administrative user interface (UI).&nbsp;For Empirica Signal, the person who assigns roles and privileges to users is typically the Empirica Signal Customer Administrator.","The Empirica Signal Customer Administrator can be the same person as the OHSIAMS CDA or a different individual. This guide describes both tasks that require the OHSIAMS CDA role, and tasks that require the Customer Administrator or super-user Empirica Signal application role.","The process to create accounts is different for new and upgraded users.&nbsp;As a result, before the CDA creates a new OHSIAMS account, the CDA must determine if that user has used the Empirica Signal Cloud environment previously.","Upgraded users have existing application accounts in Empirica Signal. The CDA must review or update the details of the Empirica Signal accounts to match OHSIAMS naming conventions. For details on how to update existing application accounts, please see Adjust the user's Empirica Signal account details.","Introduction","216935.htm");
Page[3]=new Array("You add an Empirica Signal user in OHSIAMS if the user needs access to an Empirica Signal instance. The user can be:","A new Empirica Signal user who does not have an existing Signal application account.","For this type of user, follow the steps in this section.","An existing Empirica Signal user who has a Signal application account, possibly after a recent upgrade to Empirica Signal version 8.x.","For this type of user, proceed to the Add an existing Empirica Signal user to OHSIAMS section.","To provide access to a new user, you must:","Review the default user profile in Empirica Signal.","Identify or create the user's OHSIAMS account.","Assign an Empirica Signal role to the user's OHSIAMS account.","Optionally, adjust the user's Empirica Signal account details in Empirica Signal to work with OHSIAMS.","Create an OHSIAMS account for a new Empirica Signal user","216936.htm");
Page[4]=new Array("Before you add an Empirica Signal user in OHSIAMS, the Empirica Signal Customer Administrator must review the user profile configuration in the Empirica Signal application for all application instances to be accessed through OHSIAMS, such as UAT and PROD.","A new Empirica Signal user who is provisioned in OHSIAMS automatically receives the default user profile in Empirica Signal. The details of the profile are based on the Default User Profile site option setting. The Empirica Signal Customer Administrator must perform the following in Empirica Signal:","Review the standard Login Group and quota setting.","Confirm the standard roles and permissions to be assigned to new users.","Review default user preference settings.","For details on the default user profile, see the Empirica Signal User Guide and Online Help.","Review the default user profile in Empirica Signal","217132.htm");
Page[5]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Determine if the user's OHSIAMS account appears in the Search Results list.","If the account exists:","Click the link in the User Login column.","Complete the Assign an Empirica Signal role to the user's OHSIAMS account section.","If the account does not exist:","Complete the Create the user's OHSIAMS account section.","Proceed to the Assign an Empirica Signal role to the user's OHSIAMS account section.","Determine if the user's OHSIAMS account exists","216934.htm");
Page[6]=new Array("If the Oracle single sign-on (SSO) account doesn't exist, create it.","Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Under the Search Results heading, from the Actions drop-down, select Create.","Fill in the fields for the new user.","First Name, Last Name","Email: Enter the email address that is associated with the new user account. The user receives the account password and notifications at this address.","Organization: Enter the ShortOrgId for your organization.","If you don't know your ShortOrgId:","Click the search icon at the end of the field.","Below the search fields and to the right, click Search to show all results.","In the Search Results, select the row for your organization.","Click Select.","User Login: Enter the username that the user will use for logging in. The name is saved in lowercase characters.","Password, Confirm Password: Leave these fields blank. The application generates the password and emails it to the user.","Click Submit.","The user receives one email message with their username and a second email message with their password.","Create the user's OHSIAMS account","216932.htm");
Page[7]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Click the link in the User Login column to open the User Details page.","On the User Details page, select the Roles tab.","From the Actions drop-down located above the table of roles, select Request.","Choose the Empirica Signal role for the Empirica Signal instance that the user will be working in.","The name of the Empirica Signal role is unique to each Signal instance. For example, role names may be EmpiricaSignal and EmpiricaSignalDev.","Select Add to Cart, located to the right of the role.","In the upper-right, click Checkout.","Review the roles in the cart.","In the upper-right, click Submit.","Assign an Empirica Signal role to the user's OHSIAMS account","216929.htm");
Page[8]=new Array("The new Empirica Signal user is created in the application environment with standard permissions according to the default user profile. If the individual requires non-standard roles or permissions, the Empirica Signal Customer Administrator must do the following in Empirica Signal:","Change the roles and permissions assigned to the user.","To also use the Topics feature of Empirica Signal, optionally add the user to one or more work teams and assign work team permissions to the user.","For details on assigning and changing roles, permissions, and work teams, see the Empirica Signal User Guide and Online Help.","Before starting to work in the application, users should take training that is relevant to their assigned scope of work in Empirica Signal. Your organization should implement mechanisms to address regulatory requirements concerning training.","Adjust the user's Empirica Signal account details if necessary","216928.htm");
Page[9]=new Array("To simultaneously create multiple users and assign the Empirica Signal role to them in OHSIAMS, you can upload all user operations using a spreadsheet in OHSIAMS. For details, see the Perform user operations in bulk section in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Add users in bulk using OHSIAMS","216938.htm");
Page[10]=new Array("To add an existing Empirica Signal user who has a Signal application account, possibly after a recent upgrade to Empirica Signal version 8.x, to OHSIAMS, you must:","Adjust the user's Empirica Signal account details in Empirica Signal to work with OHSIAMS.","Identify or create the user's OHSIAMS account.","Assign an Empirica Signal role to the user's OHSIAMS account.","Add an existing Empirica Signal user to OHSIAMS","217133.htm");
Page[11]=new Array("An existing Empirica Signal user who has recently upgraded to Empirica Signal version 8.x already owns a Signal application account. For this type of user, the Empirica Signal Customer Administrator must do the following in Empirica Signal before adding the OHSIAMS account or role:","Edit the user's account name (User Name) to match the OHSIAMS account username.","Edit the user's selected Authentication method to SSO.","For details on editing a user's account details, see the Empirica Signal User Guide and Online Help.","If the user's account name (User Name) already matches the OHSIAMS account username and the user's selected Authentication method is SSO, the new OHSIAMS account is automatically linked to the user's Empirica Signal account.","Adjust the user's Empirica Signal account details","217135.htm");
Page[12]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Determine if the user's OHSIAMS account appears in the Search Results list.","If the account exists:","Click the link in the User Login column.","Complete the Assign an Empirica Signal role to the user's OHSIAMS account section.","If the account does not exist:","Complete the Create the user's OHSIAMS account section.","Proceed to the Assign an Empirica Signal role to the user's OHSIAMS account section.","Determine if the user's OHSIAMS account exists","216934_1.htm");
Page[13]=new Array("If the Oracle single sign-on (SSO) account doesn't exist, create it.","Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Under the Search Results heading, from the Actions drop-down, select Create.","Fill in the fields for the new user.","First Name, Last Name","Email: Enter the email address that is associated with the new user account. The user receives the account password and notifications at this address.","Organization: Enter the ShortOrgId for your organization.","If you don't know your ShortOrgId:","Click the search icon at the end of the field.","Below the search fields and to the right, click Search to show all results.","In the Search Results, select the row for your organization.","Click Select.","User Login: Enter the username that the user will use for logging in. The name is saved in lowercase characters.","Password, Confirm Password: Leave these fields blank. The application generates the password and emails it to the user.","Click Submit.","The user receives one email message with their username and a second email message with their password.","Create the user's OHSIAMS account","216932_1.htm");
Page[14]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Click the link in the User Login column to open the User Details page.","On the User Details page, select the Roles tab.","From the Actions drop-down located above the table of roles, select Request.","Choose the Empirica Signal role for the Empirica Signal instance that the user will be working in.","The name of the Empirica Signal role is unique to each Signal instance. For example, role names may be EmpiricaSignal and EmpiricaSignalDev.","Select Add to Cart, located to the right of the role.","In the upper-right, click Checkout.","Review the roles in the cart.","In the upper-right, click Submit.","Assign an Empirica Signal role to the user's OHSIAMS account","216929_1.htm");
Page[15]=new Array("To simultaneously create multiple users and assign the Empirica Signal role to them in OHSIAMS, you can upload all user operations using a spreadsheet in OHSIAMS. For details, see the Perform user operations in bulk section in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Add users in bulk using OHSIAMS","216938_1.htm");
Page[16]=new Array("As part of ongoing user management, you can use OHSIAMS to edit or update user information and access levels as required.","Specifically, you can:","Change or correct the user's login ID, user name or e-mail address.","Reset the user's password if the user did not succeed in using the self-service password reset option.","Disable or re-enable the user's account in case of termination of employment or role changes in your organization.","Unlock the user account if the account became locked due to repeated failed login attempts.","Modify an Empirica Signal user in OHSIAMS","216940.htm");
Page[17]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","In the Search Results list, select the user&#8217;s record, and click Edit.","Update the user's User Login, First Name, Last Name, or E-mail as needed.","Tip: Updated User Login names are saved in lowercase only.","In the upper-right, click Submit.","Change the user's login ID, name, or e-mail address","217137.htm");
Page[18]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","In the Search Results list, select the user&#8217;s record.","Click Reset Password.","To generate a temporary password and email it to the user, select Auto-generate the Password.","Note: Although it is not recommended, you can manually define a new password, without emailing the new password to the user. Select Manually change the Password, and fill in the password fields.","Click Reset Password.","Reset the password for the user's OHSIAMS account","216931.htm");
Page[19]=new Array("Oracle recommends that you disable a user account when the user is no longer employed by your company.","Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Click the link in the User Login column to open the User Details page.","Click Disable User, and then Submit.","or","Click Enable User.","Update the user's information, if necessary. For details, see Modify an Empirica Signal user in OHSIAMS.","Assign roles to the user. For details, see Assign an Empirica Signal role to the user's OHSIAMS account.","Reset the account password. For details, see Reset the password for the user's OHSIAMS account.","Disable or enable the user's OHSIAMS account","217060.htm");
Page[20]=new Array("An account automatically becomes locked as a result of multiple failed login attempts. The user can then unlock the account by clicking Forgot Password.","Alternatively, you lock an account to prevent the user from logging in before disabling the account for termination of employment or another reason. When the account is explicitly locked by an administrator, the user cannot use the Forgot Password link to regain access.","Locking an account in OHSIAMS prevents the user from accessing all single sign-on applications. To prevent the user from accessing just Empirica Signal, you can edit the user in Empirica Signal and select Account disabled. For details, see the Empirica Signal User Guide and Online Help.","Before you unlock an account, verify that the person asking to have the account unlocked is the owner. To ensure system security, Oracle recommends that you establish a process to confirm the requester's identity.","Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","In the Search Results list, select the user&#8217;s record.","Click Lock Account.","or","Click Unlock Account.","Confirm the action.","After you unlock an account, Oracle recommends that you also change the password for the user.","Lock or unlock the user's OHSIAMS account","216939.htm");
Page[21]=new Array("You can delete an Empirica Signal SSO user by removing the Empirica Signal roles from the user's OHSIAMS account. The username is marked as deleted in Empirica Signal and the user can no longer log in.","Delete an Empirica Signal user in OHSIAMS","216933.htm");
Page[22]=new Array("Log in to OHSIAMS using the URL you received when your CDA account was created.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Contains, and enter the user's email address.","or","From the Display Name drop-down, select Contains, and enter the user's display name.","Click Search.","Click the link in the User Login column to open the User Details page.","On the User Details page, select the Roles tab.","To remove a role from the user's OHSIAMS account:","In the table, select the role.","From the Actions drop-down located above the table of roles, select Remove.","Click Submit.","To remove several roles from the user's OHSIAMS account:","In the row controls at the top of the tab, click Revoke Roles.","Select the checkboxes corresponding to the roles to revoke.","Click Revoke.","Remove the Empirica Signal roles from the user's OHSIAMS account","216942.htm");
Page[23]=new Array("After you remove the Empirica Signal role from an OHSIAMS account, if the Empirica Signal user who owns the account has one or more objects assigned in Empirica Signal, the Empirica Signal Customer Administrator must also purge the user in the Empirica Signal application. For details, see the Purging users section in the Empirica Signal User Guide and Online Help.","Purge a user in Empirica Signal","217063.htm");
Page[24]=new Array("End users can access the self-service password reset feature at any time by clicking the Forgot Password link on any login page of an OHSIAMS-enabled application.","The Identity Self-Service requires the user to know their login ID, and remember the answers to the following set of password challenge questions: Name of your pet? City of birth? Favorite color? These questions are first presented to the user at their initial login with OHSIAMS. User responses are recorded and matched when resetting the password at a later stage. Hence, the self-service reset is only possible after the user has successfully logged in through OHSIAMS at least once.","If the user does not remember the correct answers to the challenge questions, or fails the initial login, you will need to perform the password reset for the user. For details, see Reset the password for the user's OHSIAMS account.","The self-service password reset is also available to CDAs. In case you forget your password, you can follow the same process as described above.","Reset a password through self-service","216937.htm");
Page[25]=new Array("If your company needs to change the CDA assignment, or if you have accidentally locked yourself out of OHSIAMS and were unsuccessful in using the self-service password reset, your company must log a request on My Oracle Support (MOS) at https://support.oracle.com/.","Manage the CDA assignment for OHSIAMS","217167.htm");
Page[26]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[27]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=28;


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