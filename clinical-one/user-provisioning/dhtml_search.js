/* Generated with Author-it 5.4.131.8883  5/11/2018 4:51:42 PM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences Clinical One","User Provisioning","Release 1.1.1","Part number: E94155-02","","219982.htm");
Page[1]=new Array("This document is for a delegated administrator who is responsible for provisioning and administering Clinical One and Clinical One Integration Hub users in OHSIAMS Oracle Identity Self Service. ","This document contains information that is specific to administering the Clinical One suite in OHSIAMS Oracle Identity Self Service. For complete instructions on working in OHSIAMS Oracle Identity Self Service, see the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Audience","211495.htm");
Page[2]=new Array("How do I get access to OHSIAMS Oracle Identity Self Service? The business operations group from Oracle requests information from your organization, including your name and your organization's name, so that you can be given access to OHSIAMS Oracle Identity Self Service. After you get access to OHSIAMS Oracle Identity Self Service, you'll receive a welcome letter over email.","How do I open OHSIAMS Oracle Identity Self Service? You can do this in several ways:","All users: You can navigate directly to OHSIAMS Oracle Identity Self Service at https://&lt;ShortOrgId&gt;-hs-identity.oracleindustry.com/identity. Your ShortOrgId appears in bold font in the New Account email message that you received when your account was created.","If your organization does not use My Oracle Bookmarks, you can:","Follow the link from the New Account Password email message.","The Landing Page opens.","On the left, under Quick Links, click Update Profile to open OHSIAMS Oracle Identity Self Service.","If your organization uses My Oracle Bookmarks, you can:","Follow the link from the New Account Password email message.","My Oracle Bookmarks opens.","If there is a tile for OHSIAMS Oracle Identity Self Service, click the tile.","If there is no tile for OHSIAMS Oracle Identity Self Service, click your name in the top right and select AccountManagement.","What account do I use to sign in? Use your Oracle Health Sciences Cloud SSO account and password. You use this account to sign in to Clinical One, too.","Get access to OHSIAMS Oracle Identity Self Service","218767.htm");
Page[3]=new Array("How do users get the URL to access Clinical One? Your welcome letter includes the URL for accessing Clinical One. All Clinical One users at your organization use the same URL. You should make the URL available to all your Clinical One users.","Get access to Clinical One","219108.htm");
Page[4]=new Array("Create user accounts","All Clinical One users need an Oracle® Health Sciences Cloud single sign-on account to log in to Clinical One. There are several ways to create accounts for your users, depending on the volume of accounts you need to create:","Create accounts one by one: If you have only one or a few user accounts to create, follow the instructions in Create a user account in the Oracle® Health Sciences Identity and Access Management Service Administrator Guide.","Create multiple accounts: If you need to create several accounts, you can use Bulk Import in OHSIAMS Oracle Identity Self Service to create them all at once. For instructions, see Perform user operations in bulk in the Oracle® Health Sciences Identity and Access Management Service Administrator Guide.","@ Tip: You can also assign roles to the new accounts in the bulk import.","Administer user accounts","As delegated administrator, you can update information or change the status of a user's account. For information and instructions, see Update user accounts in the Oracle® Health Sciences Identity and Access Management Service Administrator Guide.","Create and administer user accounts in OHSIAMS Oracle Identity Self Service","219103.htm");
Page[5]=new Array("The roles that are available in OHSIAMS Oracle Identity Self Service for Clinical One grant rights for Clinical One as a whole. They are not study-specific. A Clinical One administrator can further assign study-specific rights to users from within Clinical One.","How do I find roles in search? Each role has both a name and a display name in OHSIAMS Oracle Identity Self Service. Depending on the OHSIAMS Oracle Identity Self Service screen you're on, you will see or can search by the name or the display name of a role.","Your organization has access to the following roles for the Clinical One suite in OHSIAMS Oracle Identity Self Service:","Roles required for users who work in Clinical One","Want to learn how to assign these roles?","Required roles in OHSIAMS Oracle Identity Self Service and users who need them","Assign one of the following roles as appropriate.","ClinicalOne_Production","You'll see this role if your organization uses Clinical One to deploy studies. Your organization might also use Clinical One to manage training for other products, such as InForm, Central Designer, Central Coding, IRT, and User Management Tool.","Assign this role to everyone who needs to work in Clinical One, whether to deploy a study or to manage training for other products.","Name: ClinicalOne_Production_AssignGlobalRoles","Display Name: AssignGlobalRoles","Assign this role in addition to the ClinicalOne_Production role to Clinical One users who create studies and global users in Clinical One or to training administrators who create training manager users in Clinical One.","@ Tip: Usually, only a limited number of users need an administrative role. Users who have this role for an application instance have access to Global Settings and can give other users access to studies in that instance of Clinical One.","After assigning the appropriate roles in OHSIAMS Oracle Identity Self Service...","If you use Clinical One to deploy studies: A global user must assign users the appropriate roles in Clinical One. For details about what roles to assign and how, see the Information for Sponsor and CRO Users guide.","If you use Clinical One to manage training: Training administrators must assign the Training Administrator global role to themselves in Clinical One. Then they must assign the Training Manager global role as appropriate to other users.","@ Tip: When training administrators also assign the Training Manager role to themselves, they can see and manage all studies, but they receive the training completion report over email only for the studies they're assigned to.","Users with ClinicalOne_Production_AssignGlobalRoles must assign the Study Creator or Global User Manager global roles to themselves in Clinical One. For more information, see the Information for Sponsor and CRO Users guide.","Roles required for users who work in Integration Hub","Want to learn how to assign these roles?","Users who need these roles: Oracle Services users who are responsible for creating and configuring integrations managed through Clinical One Integration Hub.","Roles to assign in OHSIAMS Oracle Identity Self Service","ClinicalOne_Production","IntegrationHub_Production","After assigning these roles in OHSIAMS Oracle Identity Self Service: A global user must assign the Integration Manager global role in Clinical One to Oracle Services users.","Clinical One roles in OHSIAMS Oracle Identity Self Service","219110.htm");
Page[6]=new Array("After you get access to OHSIAMS Oracle Identity Self Service or when new roles become available, follow these steps to set up your roles for the Clinical One suite. These steps are important so that HSGBU Services and Oracle Health Sciences Support users can access your instance of Clinical One to configure your new studies or provide assistance.","Why do I have to do these steps? You cannot provision users who are outside your organization in OHSIAMS Oracle Identity Self Service, even Oracle employees. These steps allow users who are outside your organization to request access to your instance of Clinical One so that an Oracle delegated administrator can provision them to work in Clinical One.","Task 1. Activate approval for the Clinical One roles in OHSIAMS Oracle Identity Self Service","Why do I do this? Approval lets you control who gains access to Clinical One. If approval is active, users won't get access unless someone at your organization approves the request. Without approval, access is granted automatically.<br />Clinical One allows for self-service registration. This means that when one of your employees or an Oracle employee who doesn&#8217;t already have access navigates to your Production URL or your UAT URL for Clinical One, they can submit an access request.","Submit a request to Health Sciences Support to create the Approver role for your organization.","After the Approver role is available, assign it to at least two users.","For instructions, see Assign Clinical One roles to a user.","Open OHSIAMS Oracle Identity Self Service:","https://&lt;ShortOrgId&gt;-hs-identity.oracleindustry.com/identity","where &lt;ShortOrgId&gt; is the short name for your organization. This value is defined when your organization is added to OHSIAMS Oracle Identity Self Service. ","Follow the instructions to Activate approval for a role in the Oracle Health Sciences Identity and Access Management Service Administrator Guide. Repeat the process for each of the following roles:","ClinicalOne_Production","ClinicalOne_Production_AssignGlobalRoles","IntegrationHub_Production","@ Tips:","If you've already activated approval for a role, skip this task for that role.","If you're using Clinical One only to manage training, you can opt to not activate approval for the roles. This will simplify the provisioning process because you won't need to approve access requests when assigning the roles.","Task 2. Make Clinical One roles available to Oracle","Why do I do this? Oracle employees can assign or request access to the roles that you publish to them.","Go to OHSIAMS Oracle Identity Self Service and follow the instructions to Allow another organization to view and assign one of your organization's roles in the Oracle Health Sciences Identity and Access Management Service Administrator Guide. Publish each of the following roles to the oracle organization:","ClinicalOne_Production","ClinicalOne_Production_AssignGlobalRoles","IntegrationHub_Production","@ Tip: If you've already done this for a role, skip this task for that role.","Tell your Oracle project manager that the roles are visible so that Oracle employees who need to can request access by following the Clinical One URL in your welcome letter.","If you are allowing internal users to request access, you can provide the URL to those users, as well. Also, because you have activated approval, an access request is created whenever someone requests a role for themselves or others. Your users who have the Approver role must review and approve valid access requests to grant the requested role.","Set up your roles for the Clinical One suite","218686.htm");
Page[7]=new Array("Task 1. Grant access","You have the following options for granting access to users who work at your organization:","Provision users individually.","For instructions, see Assign Clinical One roles to a user.","Provision users using a bulk import.","If you need to create and/or provision multiple users, a bulk import can save you some time. You can perform multiple types of operations in one bulk import, including:","Create all new users.","Create all new users and assign roles to them.","Assign roles to existing users.","Create some new users and assign roles to them, and assign roles to existing users. ","For instructions, see Perform user operations in bulk in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Ask users to request the ClinicalOne_Production access role.","Users who already have single sign-on accounts can navigate to the Clinical One URL, log on with their single sign-on user name and password, and submit a request for the access role for that instance.","Users can't request the administration role (AssignGlobalRoles). You must assign this role to users either individually or using a bulk import.","Users who don't have a single sign-on account can't request access to Clinical One until you create an account for them. For instructions, see Create a user account in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Task 2. Review and approve access requests in OHSIAMS Oracle Identity Self Service","See Review and approve access requests for details.","Grant your users access to Clinical One","211497.htm");
Page[8]=new Array("What do I need to do first? If the user's single sign-on account doesn't exist, create it. For instructions, see Create a user account in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Task 1. Assign Clinical One roles appropriately to the user","Open OHSIAMS Oracle Identity Self Service:","https://&lt;ShortOrgId&gt;-hs-identity.oracleindustry.com/identity","where &lt;ShortOrgId&gt; is the short name for your organization. This value is defined when your organization is added to OHSIAMS Oracle Identity Self Service.","Under Administration, click Users.","Enter search criteria for the user. For example:","From the E-mail drop-down, select Equals, and type the user's email address.","or","From the Display Name drop-down, select Equals, and type the user's display name.","Click Search, located below the filtering fields and to the right. ","In the Search Results table, find the user, and in the User Login column, click the user's name.","On the User Details page, select the Roles tab.","From the Actions drop-down, located above the table of roles, select Request.","Find the appropriate Clinical One roles:","In the search box, type the name of the role and press Enter:","For details about the available Clinical One roles and their names, see Clinical One roles in OHSIAMS Oracle Identity Self Service.","To the right of the role, click Add to Cart.","In the upper-right, click Checkout.","Review the roles in the cart.","In the upper-right, click Submit.","The Request Summary page opens, and a confirmation message appears at the top of the page. ","(If your organization has activated approval for the requested role) Ask someone with the Approver role to approve the access requests so that the user receives the role(s) you assigned. You cannot approve your own requests, so someone else at your organization with the Approver role must approve them. ","Task 2. Notify the Clinical One administrator that they can now assign roles to the user's SSO account in Clinical One","The Clinical One administrator can now give the user the appropriate roles and access to studies in Clinical One. After the user receives the appropriate roles, the user can log on to Clinical One using the Oracle single sign-on account and password.","Users at your organization should take training that is relevant to their assigned roles in Clinical One before starting to work in the application. Your organization should implement mechanisms to address regulatory requirements concerning training.","Assign Clinical One roles to a user","219112.htm");
Page[9]=new Array("What is an access request? When approval is active for an access role, if a user navigates to your Clinical One or Integration Hub URL and they don't already have the access role, they can type in a justification and submit it to create an access request. Approving this request grants the access role to the user. Also, assigning any Clinical One role, including administrative roles, from within OHSIAMS Oracle Identity Self Service creates an access request if approval is active for the role.","Who can review and approve access requests? You must have the Approver role in OHSIAMS Oracle Identity Self Service to view and approve or reject access requests. If you requested access for someone or yourself, you cannot approve that request. Instead, someone else at your organization who has the Approver role must approve the request.","Who can submit access requests? You will receive access requests from several types of users:","Your users.","Oracle users from Services, if your organization has contracted them to configure a new study or an integration through Integration Hub, or for other projects.","Oracle users from Support, if your organization has opened a ticket and Support needs to access your instance of Clinical One to resolve it.","@ Tip: Users outside your organization or outside Oracle cannot submit access requests.","How do I know when to do this? Check your pending approvals in OHSIAMS Oracle Identity Self Service frequently to see whether any new requests have come in. A number next to Pending Approvals in the menu on the left indicates the number of open access requests.","To review and approve access requests:","You review and approve access requests from OHSIAMS Oracle Identity Self Service. For instructions, see Approve or reject a pending request in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","@ Tip: For ease of use, consider creating a custom view. For instructions, see Customize columns on the Pending Approvals page in the Oracle Health Sciences Identity and Access Management Service Administrator Guide.","Reminders:","Usually, only a limited number of users need the administrator role AssignGlobalRoles. Users who have this role for the production or testing instance can log on to Clinical One and give other users access to studies for that instance.","Users who have the AssignGlobalRoles role for either the production or testing instance of Clinical One also need the access role for that instance, ClinicalOne_Production or ClinicalOne_UAT.","Users who have the IntegrationHub_Production role also need the ClinicalOne_Production role.","Do I need to revoke Services users&#8217; access after collaboration is complete? Services need to retain access rights for your instance of Clinical One throughout its existence, so you should not revoke the access roles from these users. After a project has ended, the accounts of all Oracle users involved are set to expire in Clinical One within 60 days, at which point they lose access to data in Clinical One.","Do I need to revoke Support users&#8217; access after a ticket is resolved? You can, but you don't have to. Support user accounts have access in Clinical One for only two weeks. After two weeks, access either expires or, if the issue is not yet resolved, they can extend the period by another week, after which access expires.","Review and approve access requests","218769.htm");
Page[10]=new Array("Revision History","Date","Part number","Description","30-Mar-2018","E94155-02","Removed information about the HSLearn_Production role.","18-May-2018","E94155-01","Original version of this document.","Revision history","219983.htm");
Page[11]=new Array("Copyright © 2017, 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
Page[12]=new Array("Oracle customers that have purchased support have access to electronic support through either My Oracle Support or Support Cloud. ","You can get support for Clinical One through Support Cloud. ","More about Support Cloud","Contact our Oracle Customer Support Services team&nbsp;by logging&nbsp;requests in one of the following locations:","English interface of Oracle Health Sciences Customer Support Portal (https://hsgbu.custhelp.com/)","Japanese interface of Oracle Health Sciences Customer Support Portal (https://hsgbu-jp.custhelp.com/)","You can also call our 24x7 help desk. For information, visit  http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit  http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","More about My Oracle Support ","Oracle customers that have purchased support have access to electronic support through My Oracle Support. For information, visit  http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit  http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired. ","Access to Oracle Support","217485.htm");
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