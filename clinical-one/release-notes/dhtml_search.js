/* Generated with Author-it 5.4.131.8883  9/14/2018 8:30:34 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences Clinical One","Release Notes","Release 1.1.2.2","Part number: F10302-01","","221687.htm");
Page[1]=new Array("The reports notifying training managers that users have completed training on HS Learn are now running as expected every 12 hours. (28644590)","Training reports running again","221692.htm");
Page[2]=new Array("None.","New Known Issues in Clinical One 1.1.2.2","221688.htm");
Page[3]=new Array("Users who manage other users' training:","Users who have the Windows 10 operating system can close training overlays and begin working in Clinical One without watching their assigned training videos. ","If a user closes a training overlay without completing all assigned training on it, the training overlay appears every time the user returns to the page. The user's training isn't marked as completed until after the user has watched all the videos. ","Workaround: ","None.","Release added as a Known Issue: 1.1.1","Issue: 28048236 ","Training overlays can be closed in Windows 10","220120.htm");
Page[4]=new Array("All users:","What happens: If you are signed in to Clinical One when your computer goes into standby mode (also known as sleep mode) or hibernation mode, and then you wake your computer up, a message appears in the browser window where Clinical One was open, indicating that Clinical One is trying to access an expired token. You can't continue working, but you can't sign out, either.","What should happen: You should be signed out, and the sign-in page should appear.","Workaround: ","Close the browser window. In a new browser window, open Clinical One again, and sign in. ","Release added as a Known Issue: 1.1.2","Issue: 28121536","Sign-in page doesn't appear after waking computer","220732.htm");
Page[5]=new Array("Users who run the Subject Events report:","In the Subject Events report, the Randomization Number and Dispensation Kit Number columns contain values for every visit that has been started. These columns should contain values only when the status of the visit in the Visit Status column is COMPLETE.","Workaround:","None.","Release added as a Known Issue: 1.1","Issue: 27414962 ","Values for incomplete visits in Subject Events report","217983.htm");
Page[6]=new Array("Users who run the Kit Chain of Custody (Unblinded) report:","Some fields in the Kit Chain of Custody (Unblinded) report are inconsistent with other reports: ","The Study Organization ID column lists a 32-character identifier rather than the site ID.","The Study Organization Name column lists both the site ID and the site name, rather than the site name.","Workaround:","None.","Release added as a Known Issue: 1.1","Issue: 27373702 ","Inconsistent fields in Kit Chain of Custody (Unblinded) report","218119.htm");
Page[7]=new Array("Users who run reports:","When you select a date range for some reports, the report includes data up until the date before the selected To date. The following reports are affected:","In the User Training report, training that was taken on your selected To date doesn't appear in the report. ","In the Audit Report Sites and Depots report, sites and depots that you created on the selected To date don't appear in the report. ","Workaround for users who run reports:","For the To date, select the day after your intended To date for the following reports:","User Training","Audit Report Sites and Depots","For example, for a date range of 1-November to 30-November, select 1-December as the To date. ","Release added as a Known Issue: 1.1","Issues: 27429893, 27531891","To date not included in some reports","218619.htm");
Page[8]=new Array("Users who run the Study Design report:","When you run the Study Design report as a PDF and then try to open it, the following error sometimes appears:","Failed to load PDF document.","You'll run into this error only if a field in Clinical One includes a Unicode control code. ","What is a Unicode control code? First, let's start with Unicode characters: A Unicode character is a 5-digit code, starting with the letter U and followed by a unique combination of letters and numbers. One type of Unicode character is a Unicode control code. There are 65 Unicode control codes, and they're used to control the way that text appears. Examples of Unicode control codes include:","U0000","U0001","U0002","Workaround:","Study designers: Don't use Unicode control codes, and use caution when you type any word starting with U followed by 4 letters or numbers. ","Users who run the Study Design report: If you run into the Failed to load PDF document error, run the report as a CSV or HTML. ","Release added as a Known Issue: 1.1.1","Issue: 27937619 ","&quot;Failed to load PDF document&quot; error appears for the Study Design report","220099.htm");
Page[9]=new Array("Users who move a study version to the Approved container on the Home page:","When you move a study version to the Approved container on the Home page, Clinical One doesn't prevent you from entering more than 8500 characters in the Title field, even though the character limit of the field is 8500. When you click Approve, an error occurs, and the study version isn't moved to the Approved container, but the error doesn't tell you that you exceeded the character limit.","Workaround for users who move a study version to the Approved container on the Home page:","Enter only 8500 characters in the Title field when moving a study version to Approved on the Home page.","Release added as a Known Issue: 1.1","Issue: 27401395 ","Unclear error when moving a study version to Approved","217986.htm");
Page[10]=new Array("Study designers:","In the visit pop-up, which appears when you click a visit in Visits &amp; Events, the buttons in the lower-right corner are in different orders in different browsers:","In the Google Chrome browser, the Delete Event button is to the far left, followed by Cancel.","In the Microsoft Internet Explorer browser, the Cancel button appears first, followed by Delete Event.","Workaround for study designers:","None. This is a visual issue only.","Release added as a Known Issue: 1.1","Issue: 27355956","Edit visit buttons in different orders","217880.htm");
Page[11]=new Array("Study designers:","In the Create Visit or Event pop-up, the buttons in the lower-right corner are in different orders in different browsers:","In the Google Chrome browser, the Cancel button is to the far left, followed by Save &amp; Add Another.","In the Microsoft Internet Explorer browser, the Save &amp; Add Another button appears first, followed by Cancel.","Workaround for study designers:","None. This is a visual issue only.","Release added as a Known Issue: 1.1","Issue: 27382241 ","Create visit buttons in different orders","217881.htm");
Page[12]=new Array("Study designers:","When initial shipments are sent to sites after the first subject starts a specific visit number, choosing the visit can be confusing if you delete a visit and create a new visit with the same name. Both visit names appear in the drop-down. The issue occurs when you:","Move a study version to Approved on the Home page.","Create a new Draft study version.","Delete a visit (such as Visit 2), and create a new visit with the same name as the deleted visit (such as Visit 2).","On Supply Settings, in the Send Initial Shipments field, select First Subject in Visit Number, and then open the Visit Number drop-down. Both instances of the visit (such as Visit 2) appear in the list, and it's not clear which visit is the new visit.","Workaround for study designers:","We recommend not deleting a visit that triggers the initial resupply. If you need to delete the visit, make sure you don't repeat visit names in any new visits that you create. ","Release added as a Known Issue: 1.1","Issue: 27469594 ","Duplicate visit names confusing for initial supply visit","218256.htm");
Page[13]=new Array("Study designers:","Clinical One allows you to mark the first visit in a study as optional and to schedule other visits from it, but skipping the optional visit results in unexpected changes to visit schedules.","Workaround for study designers:","Make the first visit in a study a required visit.","Release added as a Known Issue: 1.1","Issue: 27287236 ","First visit must be a required visit","218303.htm");
Page[14]=new Array("Study designers:","An error that prevents randomization occurs when stratum groups have overlapping ranges in a randomization design.","The issue occurs when a randomization design created by the sponsor contains overlapping stratum groups, such as:","Female, Non-smoker, aged 28-43","Female, Non-smoker, aged 35-50","In this example, both groups include the 35-43 age group.","Other users who might see this issue: Site users who enter visit data","Workaround for study designers:","Make sure stratum groups do not have overlapping ranges for number questions in the groups.","Release added as a Known Issue: 1.0","Issue: 26107896","Can't randomize when stratum groups overlap","216377.htm");
Page[15]=new Array("Clinical supply managers: ","Even when you are assigned the Clinical Supply Manager Role - Sponsor role for Testing mode, you can't see the Supply Settings tab in Study Settings.","Workaround for user administrators:","Also assign clinical supply managers to the View Design - Sponsor role in the Study Design Roles list.","Reminder: The tab appears only after you move a study design to the Testing container on the Home page. ","Release added as a Known Issue: 1.0.2.","Issue: 27095168","Can't see the Supply Settings tab","217352.htm");
Page[16]=new Array("Users who run the Kit Inventory reports:","The Kit Inventory (Blinded) and Kit Inventory (Unblinded) reports don't include kits that have the following statuses:","Not Dispensed to Subject ","Not in Use ","Pending Destruction ","Returned by Site ","Destroyed ","Workaround for users who run the Kit Inventory reports:","None.","Release added as a Known Issue: 1.1","Issue: 27367183 ","Some statuses not in Kit Inventory reports","217882.htm");
Page[17]=new Array("Clinical supply managers:","When you mark a kit as Misallocated on the Inventory tab (on the right, below Kit Settings), you aren't prompted to select a subject number for the subject who received the kit.","Workaround for clinical supply managers:","If you need to select the subject who received the kit, mark the kit as Misallocated on the Kit Reconciliation tab, where you are prompted to select a subject number.","Release added as a Known Issue: 1.1","Issue: 27425003 ","Not prompted to select a subject for a Misallocated kit","218120.htm");
Page[18]=new Array("Randomization list managers:","When you have the Randomization List Manager role for only Production or Training mode, you can't upload or generate randomization lists in either mode.","Workaround for user managers:","If a user needs to upload or generate randomization lists in either Production or Training mode, make sure the user has the Randomization List Manager role for both Production and Training modes.","Release added as a Known Issue: 1.1","Issue: 27457515 ","Randomization List Manager role required in Production and Training","218134.htm");
Page[19]=new Array("Study designers:","When you move the randomization design to a different visit after subjects have been randomized in the study, any subjects who have already been randomized might be unable to continue with the study. ","The issue occurs when:","You make a study live in Production mode. ","A site randomizes one or more subjects. ","You create a new Draft version of the study, and move randomization to a different visit, such as from Visit 1 to Visit 2. ","You assign the new study version to the site that randomized subjects.","The site opens Visit 2 for a subject who has already been randomized.","The Randomize button appears at the bottom of the form but is grayed out because the subject has already been randomized, and there's no way to complete the visit.","Workaround for study designers:","If one or more subjects have been randomized, don't move the randomization design to a different visit. You can add additional visits prior to the randomization visit. ","Release added as a Known Issue: 1.1","Issue: 27469976","Don't move randomization after subjects are randomized","218277.htm");
Page[20]=new Array("Users who upload kit lists, such as clinical supply managers:","The error message that appears when you try to upload a kit list that has already been uploaded in a study isn't helpful. An Oops error appears, rather than a message indicating that the kit list was already uploaded in the study. The same error appears when you try to upload a kit list that contains kit numbers and sequence numbers that are in an existing kit list in the study.","Workaround for users who upload kit lists:","If you get an Oops error while trying to upload a kit list, check for any duplicate kit numbers or sequence numbers in the list, correct any duplicates, and then try to upload again.","Release added as a Known Issue: 1.1","Issue: 27498479","Oops error for duplicate kit lists and numbers","218353.htm");
Page[21]=new Array("Users who create new study versions and manage randomization:","What happens: Sites are sometimes unable to randomize subjects after switching to a new study version. ","Why it happens: The randomization list that is already associated with a study version is sometimes not automatically associated with a new, approved study version. The new study version might be created for a protocol amendment or other change. ","What should happen: The randomization list should be automatically associated with the new study version when you move the study version to Approved on the Home page.","Workaround for randomization list managers:","Task 1. Check whether the new study version is associated with the right randomization list in Production mode","When do I perform these steps? After a new study version is created, updated, and moved to the Approved container on the Home page; and before you assign the new study version to sites.","On the Home page, click the pencil button (@) on the study, and note the new study version below Approved. For example: ","Click the study settings button (@) on the study, and select Open Settings.","Below the study name, click the Supply Settings tab.","On the left, select Production Settings.","On the right, expand Randomization List Assignment.","Check that the new study version that you noted in step 1 is already associated with the right randomization list. ","If the study version is already associated with the right randomization list (as in the above image), no further action is required.","If the study version isn't associated with the right randomization list, proceed to Task 2. ","Task 2. If the study version isn't already associated with the right randomization list, create the association ","Below Randomization List Assignment, click Create List Assignment.","Fill in the fields. To view tips for a field, click inside the field. ","Study Version: Select the new study version.","Randomization List: Select the randomization list to use in the selected study version.","Click Create.","Reminder: If sites are working in Training mode, also perform Task 1 for Training mode. In step 4, select Training Settings instead.","Release added as a Known Issue: 1.1.1","Issue: 28042130 ","Sites sometimes can't randomize after moving to a new study version","220430.htm");
Page[22]=new Array("Site managers:","If you have the Site Manager role but aren't assigned to any depots, the Depots page says that the study has no depots, even when depots have been created.","Workaround for site managers:","None.","Release added as a Known Issue: 1.1","Issue: 27361731","No depots message when there are depots","217883.htm");
Page[23]=new Array("Global users who create other users: ","When you access Clinical One using Internet Explorer 11 and try to assign a Study Design role to a user, the drop-down list of roles sometimes doesn't appear when you click in the Study Design Roles box. ","Workaround for global users who create other users:","Click outside the list of Study Design roles, and then click inside the Study Design roles box to open the drop-down; or access Clinical One using Chrome.","Release added as a Known Issue: 1.1.2","Issue: 27485688 ","Can't assign Study Design roles in Internet Explorer 11","220734.htm");
Page[24]=new Array("Site users who enter visit data:","If you start a visit that occurs after the randomization visit, and then update a form in the visit in which randomization occurred so that one or more values are invalid, you aren't notified that the change will prevent you from dispensing kits in all visits, including the visit you started.","The issue occurs when you:","Screen a subject.","Randomize a subject.","Complete all fields on the next dispensation visit, but don't click Dispense.","Return to the randomization visit, and change the data on a form so that the answer is no longer valid.","Return to the dispensation visit that you completed but didn't dispense in.","You should receive a notification when you update a form in the randomization visit so that you know that you won't be able to dispense until the error is corrected.","Workaround for site users who enter visit data:","You can dispense after correcting the invalid data on the randomization visit.","Release added as a Known Issue: 1.0","Issue: 25899437","No notification when invalid data prevents dispensation","214635.htm");
Page[25]=new Array("Users with the Randomization List Manager role:","When you select a subject who is eligible for randomization, the Manage Subjects drop-down contains the Randomize option, even though your role doesn't allow you to randomize subjects. You aren't allowed to randomize subjects (this behavior is expected because this role doesn't allow you to randomize subjects). If you select the Randomize option, an Oops error occurs.","Workaround for users with the Randomization List Manager role:","None.","Release added as a Known Issue: 1.1","Issue: 27426711","Randomize option available but appropriately non-functioning","218124.htm");
Page[26]=new Array("Site users who replace subjects' kits:","The tooltip that appears when you point to the tip in the kit replacement pop-up contains HTML tags. The tooltip says:","To see the kit numbers again, open &lt;span style=&quot;font-weight:bold&quot;&gt;Subject  History&lt;/span&gt; on the right.","Workaround for site users:","None. This is a visual issue only, and the HTML tags appear only in the tooltip, not in the tip text.","Release added as a Known Issue: 1.1","Issue: 27468457 ","HTML tags appear in tooltip","218193.htm");
Page[27]=new Array("Site users who do code breaks and sponsor users who do code views:","Code break and code view aren't allowed when a site is retired. If you try to perform a code break or code view, an Oops error occurs, and unblinding information isn't revealed.","Workaround:","Reactivate the site before performing a code break or code view.","Release added as a Known Issue: 1.1","Issue: 27469387 ","Code break and code view not allowed at retired site","218550.htm");
Page[28]=new Array("Site users who enter subject data: ","When you change a screening visit answer for a subject that has been randomized and the answer isn&#8217;t valid, the screening visit status on the Subjects page is confusing. The screening visit turns red and the pop-up that opens when you point to the visit says Screening Failed. It should instead indicate that screening was successful, but the form contains an error. ","The subject's state remains Active, and no screen failure is reported in Subject History, as expected.","Workaround for site users who enter subject data:","Determine the appropriate next steps for the subject, such as correcting any errors in the screening visit or withdrawing the subject, if the subject is no longer eligible to continue in the study. ","Release added as a Known Issue: 1.1","Issue: 27483700 ","Updating screening visit after randomizing","218293.htm");
Page[29]=new Array("Site users who enter subject data: ","The Complete Study button is inactive (that is, grayed out) in the study completion visit when you:","Complete a study for a subject.","Undo the study completion.","Complete the study again.","In the study completion visit, remove an answer without selecting a reason for change, and enter or select the same answer without selecting a reason for change.","Workaround for site users who enter subject data:","Refresh the page, and the Complete Study button is no longer inactive.","Alternately, select a reason for change when removing an answer and adding the same answer back.","Release added as a Known Issue: 1.1","Issue: 27483082","Complete Study button can't be clicked","218301.htm");
Page[30]=new Array("Users who view answer history details:","The reason for change for a visit date sometimes doesn't appear in Answer &amp; Visit History. The issue occurs under the following circumstances:","A site user skips a visit and then starts the skipped visit. ","When prompted, the site user selects a visit date and enters a reason for change.","The Reason for Change entry appears as expected when you select the Visit Start Date field, expand Answer &amp; Visit History on the right, and expand the following entries:","Below Answer History, the entry for the date.","Below Visit History, the entry for Unskipped.","A site user answers one or more questions and saves changes, either by clicking the Save button or clicking away from the question field.","The Reason for Change entry no longer appears in Answer &amp; Visit History for the Visit Start Date question.  ","Workaround for users who view answer history details:","The reason for change that you select applies to both the date selection and the start of the previously skipped visit that you start, and you can view the reason in Visit History.","To find the reason for change:","Click into the Visit Start Date field in the visit.","On the right, expand Answer &amp; Visit History on the right.","Below Visit History, expand the Unskipped entry. ","Release added as a Known Issue: 1.1","Issue: 27342160","No reason for the date change in Answer History for unskipped visit","218618.htm");
Page[31]=new Array("Training managers:","You might get an Oops error when uploading trainees in bulk using the Training Assignment Template on the Users tab. The import is successful, though it can take a few minutes for the trainees to appear as expected on the Users tab. ","Workaround for training managers:","After encountering the Oops error, wait several minutes and then verify that the trainees uploaded as expected on the Users tab. You can also add trainees one at a time. ","Release added as a Known Issue: 1.1.2","Issue: 28421761","Oops error appears when bulk uploading trainees","221425.htm");
Page[32]=new Array("Computer: Laptop or desktop computer.","Internet browser: Google Chrome version 42.0 or higher (recommended), or Microsoft Internet Explorer version 11.0 or higher.","Other tools: (Required only if you use Clinical One to manage training for InForm, Central Designer, Central Coding, IRT, or User Management Tool and want to bulk upload users) Microsoft Excel spreadsheet software.","Using Windows 7 and Internet Explorer 11? ","Your security settings might prevent you from signing in. If you see a blank white page in Internet Explorer after clicking Sign In, perform the following steps in Internet Explorer to disable compatibility view.","In the upper-right corner, click the Tools button, and select Compatibility View settings.","Below the list of websites, make sure Display intranet sites in Compatibility View is not selected.  ","Click Close.","Close all instances of Internet Explorer.","Open a new instance of Internet Explorer and try signing in again.","What do I need to use Clinical One?","220171.htm");
Page[33]=new Array("Copyright © 2017, 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
Page[34]=new Array("Oracle customers that have purchased support have access to electronic support through either My Oracle Support or Support Cloud. ","You can get support for Clinical One through Support Cloud. ","More about Support Cloud","Contact our Oracle Customer Support Services team&nbsp;by logging&nbsp;requests in one of the following locations:","English interface of Oracle Health Sciences Customer Support Portal (https://hsgbu.custhelp.com/)","Japanese interface of Oracle Health Sciences Customer Support Portal (https://hsgbu-jp.custhelp.com/)","You can also call our 24x7 help desk. For information, visit  http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit  http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","More about My Oracle Support ","Oracle customers that have purchased support have access to electronic support through My Oracle Support. For information, visit  http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit  http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired. ","Access to Oracle Support","217485.htm");
var PageCount=35;


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