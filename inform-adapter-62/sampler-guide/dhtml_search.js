/* Generated with Author-it 5.4.131.8883  6/6/2018 1:33:55 PM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences InForm Adapter","Sampler Guide","Release 6.2","Part number: E89788-01","","title.htm");
Page[1]=new Array("The InForm Adapter software provides interfaces to web services that support the secure transfer of data between InForm studies and either Oracle products (such as the Clintrial Integration Solution (CIS) and Central Coding applications) or third-party products and custom applications. Each application that can accept queries or updates to its data and metadata from InForm studies requires a specific set of interfaces. ","Like application programming interfaces (APIs), the InForm Adapter interfaces use published web services interfaces to allow programmatic access to applications. This allows Oracle products to be tightly integrated with each other and with third-party products.","What is the InForm Adapter software?","144831.htm");
Page[2]=new Array("The InForm Adapter 6.2 release includes the following interfaces that are available for programmatic access.","Interface","Description","Discrepancy","Transmits InForm queries (discrepancies) to and from other systems or modules.","ODM Export","Provides access to receive InForm administrative data, clinical data, and metadata in CDISC ODM standard format.","The InForm Adapter interfaces","213399.htm");
Page[3]=new Array("This release includes the source code for the Discrepancy Sampler tool and the ODM Sampler tool. ","You can use Visual Studio 2015 to open the projects and view the code. This allows you to see how the sampler tool is constructing the requests and making the web service calls. ","You can also modify the code.","This guide, the sampler tools and application, and the source code are accessible from My Oracle Support (https://support.oracle.com). Download the source code and unzip it to your personal computer at your choice of location. For example:","Discrepancy Sampler tool:","&lt;unzip_directory&gt;\\InformAdapterSamples\\DiscrepancySampler","ODM Sampler tool:","&lt;unzip_directory&gt;\\InformAdapterSamples\\OdmSampler","The sampler tools are subject to the following:","Note: The sampler code is provided for your convenience to demonstrate how to use the ODM Transaction Export Interface and the Discrepancy Interface. You may use the sampler code in source form, for internal purposes only, as an aid in developing a web service interface for the discrepancy interface or ODM interface, respectively. The sampler code shall not be sublicensed, copied, or transferred in any manner. The sampler code and all accompanying documentation are provided to you &quot;as is&quot; without any representation that the sampler code will meet your requirements or that its use will be uninterrupted or error-free. ","Source Code for Sampler tools","214864.htm");
Page[4]=new Array("The Discrepancy Sampler is a sample application that demonstrates how to use the InForm Adapter Discrepancy interface to issue and update discrepancies on an InForm study, and get summary details of discrepancies by using reporting functions.","The Discrepancy interface sends discrepancies (clinical queries) and their resolutions between the InForm software and other systems or modules.  ","For a study, site, subject, or list of subjects, you can retrieve discrepancies of a specific type, or retrieve a count of discrepancies in the form of [Subject, State, Guid].","For an item, you can issue a candidate or open discrepancy, retrieve all discrepancies, or retrieve discrepancies of a specific type.","For a discrepancy, or list of discrepancies identified by a GUID, you can answer or close a discrepancy, delete a candidate discrepancy, reissue an answered discrepancy, and retrieve discrepancy details.","You can close a set of answered discrepancies in a single transaction.","The Discrepancy interface can determine whether the requested target of a discrepancy maps to another item, and issue the discrepancy against the mapped (target) item.","Overview: Discrepancy interface","213402.htm");
Page[5]=new Array("By default, the Discrepancy Sampler tool uses secure configuration (HTTPS), which is the default for the InForm Adapter Discrepancy Service.","If you set up a different security configuration for the Discrepancy Service, use the same configuration in the Discrepancy Sampler tool. For more information about configuring security for the Discrepancy Service, see the Installation Guide.","Security configuration","215950.htm");
Page[6]=new Array("The Discrepancy Sampler uses the ODM Export interface to search the sites, patients, visits, forms, and section, and displays items that have values.","To use Username Password authentication to access studies with the Sampler tools, when you connect to the study, select the Use Https checkbox.","Username password authentication and the ODM Export interface","213414.htm");
Page[7]=new Array("To start the Discrepancy Sampler tool, double-click the DiscrepancySampler.exe file at the following location:","&lt;unzip_directory&gt;\\InformAdapterSamples\\DiscrepancySampler\\bin","In the Adapter Host field, provide the name of either the IP address or domain name where the resource is located. For example:","https://VanityUrl/pfst62/informadapter/ODM/ODMService.svc","If you want to use https to connect to the server, select the Use Https checkbox.","Select f5cert if you want to use f5cert. The certificate must be installed on your local machine and you must provide the certificate subject in the application configuration file.","&lt;add key=&quot;IACertName&quot; value=&quot;the subject name of the certificate to sign the soap message&quot; /&gt;","In the Virtual Directory field, provide the path or directory on the server. For example:"," pfst62/informadapter","In the Trial Name field, enter the trial name to connect to. For example:","pfst62","Note: To use the discrepancy interface, you must create a user for your integration that belongs to a query group in InForm. This username will be stored in the InForm audit trail when creating a discrepancy.","If the Discrepancy Interface was installed using Secure or F5 mode for the Discrepancy interface, you must specify the username and password of this user.","or","If the Discrepancy Interface was installed using F5CERT mode, then only the username needs to be entered. The password field can be left blank.","Click Connect.","Connecting to a study","214869.htm");
Page[8]=new Array("The Discrepancy Sampler uses the ODM Export interface to search the sites, patients, visits, forms, and section, and displays items that have values.","Start the Discrepancy Sampler tool and connect to a study. ","Select the Issue Discrepancy tab.","Click Get Sites.","Select a site. ","Select a subject. ","Select a visit. ","Select a form. ","Select a section.","A list of items and their values appears. Only the items that have values are listed.","Double-click the item for which you want to issue a discrepancy.","Alternatively, you can provide information in the Add an Item by DBUID or Add and Item by GUID areas and click Add to Queue.","The Issue Discrepancy Info window appears. ","In the Init State field, select the state in which to open the discrepancy.","Type a reason for the discrepancy, and click OK.","The discrepancy appears in the Items to issue a discrepancy on queue. ","To add more discrepancies to the queue so they can be issued in the same call to the Issue operation, repeat steps 3 through 11. ","For discrepancies in the queue, you can:","Make additional changes to a discrepancy&#8212;Double-click the discrepancy in the queue. The UpdateDiscrepancyInfo window reopens, where you can make your changes.","Remove a discrepancy from the queue&#8212;Right-click the discrepancy in the queue and click Remove Selected.","To issue all the discrepancies in the queue, click Issue Discrepancies. ","The Issue response XML appears in the results pane. All the results from the queue you processed appear in the same tab. The queue becomes empty.","To issue additional discrepancies, repeat steps 3 through 9 to create a new queue. When you click Issue Discrepancies, the discrepancies in the queue are processed and appear in a new tab in the results pane. ","To enlarge the contents of a tab in the results pane, double-click the tab.","Issuing a discrepancy","216281.htm");
Page[9]=new Array("On the Update Discrepancies tab, you can display all discrepancies in a study, or only those discrepancies that are in a particular state.","Start the Discrepancy Sampler tool and connect to a study.","Select the Update Discrepancy tab.","From the list of states, select the state of discrepancies to display, or select All States.","Click Get Discrepancies.","A list of discrepancies in the state you specified appears, listed by discrepancy GUID.","Alternatively, you can use the Enter Guid and Revision fields to update a specific discrepancy.","From the list of discrepancies, select a discrepancy GUID.","Information about the item and its discrepancy appears.","To make changes to the selected discrepancy, click Add to Queue.","The UpdateDiscrepancyInfo window appears.","Make the changes you want and provide a reason, then click OK.","The discrepancy appears in the Discrepancies to Update queue, listed by discrepancy GUID.","For discrepancies in the queue, you can:","Make additional changes to a discrepancy&#8212;Double-click the discrepancy in the queue. The UpdateDiscrepancyInfo window reopens, where you can make your changes.","Remove a discrepancy from the queue&#8212;Right-click the discrepancy in the queue and click Remove Selected.   ","To add more discrepancies to the queue, repeat steps 3 through 8. ","To update all the discrepancies in the queue, click Update.","The Update response XML appears in a tab in the results pane, and the Discrepancies to Update queue becomes empty.","Repeat the procedure to update additional discrepancies. All the discrepancies in the queue are processed and appear in a new tab in the results pane.","Updating a discrepancy","216235.htm");
Page[10]=new Array("You can generate a summary report, or specify a range of criteria to specify which discrepancies to include in the report. ","Start the Discrepancy Sampler tool and connect to a study.","For more information, see Connecting to a study.","Select the Discrepancy Reporting tab.","Each of the tabs on the Discrepancy Reporting page tab lets you specify a filter name and criteria for the filter.","Discrepancy reporting","216273.htm");
Page[11]=new Array("The Discrepancy interface operation GetSummaryCounts allows you to specify multiple filters in a single request with different studies.","Select the Summary Reporting tab.","Fill in the fields.","Field","Description","Trial","The study name for which you want to generate summary reports of discrepancies. ","Required.","Filter Name","Name for the current request filter. ","Optional. ","The filter name can be used to decipher the response.","Trial Criteria","Optional criteria on which to filter. ","Site ID, in the form of a DBUID.","Subject Guid.","Visit Name.","Visit Index. If you specify a visit index, you must also specify a visit name.","Click Add Filter To Request.","A SummaryFilter is added to the Current Summary Request field, which displays the SummaryRequest XML as you are building it.","You can add multiple filters to the request. In the response, a separate SummaryFilterRequest is returned for each filter, containing summary counts of discrepancies based on that filter.","When the request is complete, click GetSummaryCounts.","The GetSummaryCounts response XML displays in the results pane in a single tab.","The filters remain in the Current Summary Request field until you click Clear Request.","You can repeat the procedure to get additional summary reports.","Summary reporting","214867.htm");
Page[12]=new Array("Select the Detail By Criteria Reporting tab.","In the Request Level Parameters section, optionally provide a Bookmark and/or a Result Set Size for the request.","Result Set Size indicates the maximum number of discrepancies to return in the response. If the maximum is reached and there are more discrepancies to return, the response will contain a bookmark. You can input this bookmark on a subsequent request that uses the same request parameters to get the remaining discrepancies.","Click Add Parameters.","The parameters are added to the Current Detail by Criteria Request field.","In the Detail Filter Parameters section, provide the following information:","Parameter","Description","Trial","The study name for which you want detail by criteria reports of discrepancies. ","Required.","Filter Name","Name for the current request filter. ","Optional. ","The filter name can be used to decipher the response.","Include History","Selected&#8212;All the revisions of the discrepancies are returned for this filter.","Unselected&#8212;Only the latest revisions of the discrepancies are returned.","Trial Criteria","If selected, you can provide a Site ID on which to filter the results.","Item Criteria","If selected, you can provide an Item Dbuid on which to filter the results.","Current State","Select one or more checkboxes to filter by the state of the discrepancy. If no boxes are checked, all states are returned.","Candidate.","Opened.","Answered.","Closed.","Deleted.","Click Add Detail Filter.","The Detail Filter is added to the Current Detail By Request field, which displays the DetailByCriteriaRequest XML as you are building it. ","You can add multiple filters to the request.","When the request is complete, click Get Discrepancies.","The sampler calls the Discrepancy interface GetDiscrepanciesByCriteria operation, and displays the response XML in the results pane.","Detail by criteria reporting","214868.htm");
Page[13]=new Array("Select the Detail By Guid Reporting tab.","In the Request Level Parameters section, optionally provide a Bookmark and/or a Result Set Size for the request.","Result Set Size indicates the maximum number of discrepancies to return in the response. If the maximum is reached and there are more discrepancies to return, the response will contain a bookmark. You can input this bookmark on a subsequent request that uses the same request parameters to get the remaining discrepancies.","Click Add Parameters.","The parameters are added to the Current Detail By Guid Request field.","In the Detail Filter Parameters section, provide the following information:","Parameter","Description","Trial","The study name for which you want detail by criteria reports of discrepancies. ","Required.","Filter Name","Name for the current request filter. ","Optional. ","The filter name can be used to decipher the response.","Discrepancy GUID","Specifies the discrepancy GUIDs to add to the Discrepancy GUIDs in this filter list. Each detail filter can have one or more discrepancy GUIDs.","Click Add Detail Filter.","The GetByDiscrepancyGuid request XML appears in the Current Detail By Guid Request field.","To add more filters, repeat steps 3 through 6. ","When the request is complete, click Get Discrepancies. ","The response XML appears in a tab in the results pane. ","The request XML remains in the Current Detail By Guid Request field. To remove the XML, click Clear Request.","Detail by GUID reporting","216238.htm");
Page[14]=new Array("The Examples tab of the Discrepancy Sampler has examples of commonly used cases. ","Examples tab","134740.htm");
Page[15]=new Array("The ODM Sampler tool is a sample application that demonstrates how to use the ODM Export interface to download admin data, metadata, and patient forms, and to download transactions from the study filtered by site, subject, and form.","The ODM Export interface 1.3.0 is a unidirectional interface that provides a web service for any outside application that needs to retrieve data from an InForm database in CDISC ODM standard format. Clinical data, admin data, and metadata are available. Refer to http://www.cdisc.org for more information on the ODM standard.","The ODM Export interface focuses on the semantics of the function calls that are published by the interface, and the parameters that the published web methods use.","Overview: ODM Export interface","214479.htm");
Page[16]=new Array("To start the ODM Sampler tool, double-click the OdmSampler.exe file at the following location:","&lt;unzip_directory&gt;\\InformAdapterSamples\\OdmSampler\\bin","In the Adapter Host field, provide the name of either the IP address or domain name where the resource is located. For example:","https://VanityUrl/pfst62/informadapter/ODM/ODMService.svc","If you want to use https to connect to the server, select the Use Https checkbox.","Select f5cert if you want to use f5cert. The certificate must be installed on your local machine and you must provide the certificate subject in the application configuration file.","&lt;add key=&quot;IACertName&quot; value=&quot;the subject name of the certificate to sign the soap message&quot; /&gt;","In the Virtual Directory field, provide the path or directory on the server. For example:"," pfst62/informadapter","If you are using Username authentication, select the Enabled checkbox, and fill in the Trial User and Trial Password fields. Skip this step if you are using f5cert.","In the Trial Name field, enter the trial to connect to. For example:","pfst62","Click Connect.","Connecting to a study","215804.htm");
Page[17]=new Array("Expand the ODM 2.0 Parameters window.","Select the attributes you want to use, and then collapse the window. ","The table provides a brief description of each option. For more information, see the input parameters for each method in the InForm Adapter Interfaces Guide.","Attribute","Description","Mapping Vers.","The version of the InForm-to-ODM mapping. Specify 2.0 for the most complete and accurate representation of the InForm data that is returned in ODM format","Compliance Mode","Specifies how to handle transactions in the study that are deleted and then undeleted.  Strict uses a Remove transaction to indicate that a form has been deleted. If the form is subsequently undeleted, the returned data includes all the data for the form that was deleted and then undeleted.","Loose uses a FormStatus or ItemGroupStatus element with the attribute name of Deleted. Loose compliance mode is more efficient.","Incl Extensions","Specifies whether to include Oracle ODM extensions in the data that is returned from the method.","PriorFileOID","Optional reference to the previous file (if one exists) in a series.","Request User Name","The user ID of the user who is requesting the data.","Specifying input parameters","216187.htm");
Page[18]=new Array("After you connect to an InForm study, you can use the ODM sampler tool to issue a request for the ODM Export methods. ","The response XML for each method appears at the bottom of the sampler window, in a separate tab labeled with the name of the study and the method. You can select a tab and enlarge the view, save the response to a file, or delete the response.","Calling ODM Export methods","216189.htm");
Page[19]=new Array("Start the ODM Sampler tool and connect to a study.","If it is not already selected, select the Download Snapshot ODM tab. Follow the steps listed in the table for each method.","ODM Export method","Steps","DownloadAdminData","Click DownloadAdminData.","In the results pane, response XML for DownloadAdminData appears in a separate tab.","GetSiteList","Click GetSiteList.","A list of site numbers and names appears, and in the results pane, response XML for GetSiteList appears in a separate tab.","DownloadMetadata","Click DownloadMetadata.","In the results pane, response XML for DownloadMetadata appears in a separate tab.","GetPatientList","Click GetSiteList.","Select a site.","Click GetPatientList.","A list of patient initials and numbers appears, and in the results pane, the response XML for GetPatientList appears in a separate tab.","GetPatientForms","Click GetSiteList.","Select a site.","Click GetPatientList.","Select a patient.","Click GetPatientForms.","A list of forms appears, and in the results pane, the response XML for GetPatientForms appears in a separate tab.","Note: This sample application does not handle transactions that don't satisfy the client-side filters, such as SV subject pool transactions.","Downloading admin data, metadata, and patient data","215803.htm");
Page[20]=new Array("Start the ODM Sampler tool and connect to a study.","Click the GetTransactions tab.","Set the input parameters for the GetTransactions method.","The table describes the options for selecting Get All Transactions or Get Transactions Once, and how to use Polling.","Button or field","Description/Steps","Bookmark","Indicates the point in the transaction log after which the processing should begin.","This field is empty until the first time you click Get Transactions Once.","After the first time you click Get Transactions Once, the bookmark field is populated by a bookmark for the last transaction that is returned by the GetTransactions method.","Get All Transactions","Click Get All Transactions.","Specify a location for the returned transactions. ","The GetTransactions method returns all transactions in the study, in files that contain 500 transactions each, named 1.xml, 2.xml, and so on.","Get Transactions Once","This button returns clinical data.","Click Get Transactions Once.","The GetTransactions method returns 500 transactions and displays them in the results pane in a separate tab, named &lt;trialname&gt;-Transactions.","A bookmark appears, indicating the last transaction that was returned.","To return more transactions, click Get Transactions Once.","The method returns the next 500 transactions, beginning with the transaction after the bookmark, and displays them in a new tab that includes that bookmark in the tab name. ","A new bookmark appears in the bookmark field, indicating the last transaction that was returned.","Polling Interval","Used with Get All Transactions.","You can set a polling interval after you use Get All Transactions, in either of the following situations","After you click Get All Transactions, you must remain connected to the study (that is, do not choose a new study from the Trial Name field). The ODM Sampler tool remains open.","or","If you clicked Get All Transactions and then navigated to a different study, or closed the ODM Sampler, you must open the sampler again and connect to the study. On the GetTransactions tab, click Load Saved Transactions. ","Select the polling interval and click Set.","Polling continues until you do any of the following actions:","Click Stop.","Select a different study.","Close the ODM Sampler.","Get Transactions","216240.htm");
Page[21]=new Array("For a study, you can generate a list of transactions for sites, subjects, or forms.","Before you filter transactions, you must retrieve them. Use the GetTransactions tab to return transactions for the study. For more information, see Get Transactions.","If you have closed the ODM Sampler or navigated to a different study since you retrieved transactions:","Open the sampler and connect to the study.","Click Load Saved Transactions and select the location where you saved the returned transaction files.","Filtering transactions","Transactions for:","Steps:","A Site","Click GetSiteList.","Select a site from the list.","Click Show Site Transactions. ","Transactions for the site appear in the results pane in a separate tab. The tab name includes the study name and the site name.","A Subject","Click GetSiteList.","Select a site from the list.","Click GetPatientList.","Select a subject.","Click Show Patient Transactions. ","Transactions for the patient appear in the results pane in a separate tab, named with the study name and the patient initials.","A Form","Click GetSiteList.","Select a site from the list.","Click GetPatientList.","Select a subject.","Click GetPatientForms.","Select a form.","Click Show Form Transactions. ","Transactions for the form appear in the results pane in a separate tab, named with the study name, patient initials, and form name.","Filter transactions","216279.htm");
Page[22]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[23]=new Array("Copyright © 2018, Oracle and/or its affiliates. All rights reserved.","This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws. Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.","The information contained herein is subject to change without notice and is not warranted to be error-free. If you find any errors, please report them to us in writing.","If this is software or related documentation that is delivered to the U.S. Government or anyone licensing it on behalf of the U.S. Government, the following notice is applicable:","U.S. GOVERNMENT END USERS: Oracle programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, delivered to U.S. Government end users are &quot;commercial computer software&quot; pursuant to the applicable Federal Acquisition Regulation and agency-specific supplemental regulations. As such, use, duplication, disclosure, modification, and adaptation of the programs, including any operating system, integrated software, any programs installed on the hardware, and/or documentation, shall be subject to license terms and license restrictions applicable to the programs. No other rights are granted to the U.S. Government.","This software or hardware is developed for general use in a variety of information management applications. It is not developed or intended for use in any inherently dangerous applications, including applications that may create a risk of personal injury. If you use this software or hardware in dangerous applications, then you shall be responsible to take all appropriate fail-safe, backup, redundancy, and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any damages caused by use of this software or hardware in dangerous applications.","Oracle and Java are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.","Intel and Intel Xeon are trademarks or registered trademarks of Intel Corporation. All SPARC trademarks are used under license and are trademarks or registered trademarks of SPARC International, Inc. AMD, Opteron, the AMD logo, and the AMD Opteron logo are trademarks or registered trademarks of Advanced Micro Devices. UNIX is a registered trademark of The Open Group.","This software or hardware and documentation may provide access to or information about content, products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and expressly disclaim all warranties of any kind with respect to third-party content, products, and services unless otherwise set forth in an applicable agreement between you and Oracle. Oracle Corporation and its affiliates will not be responsible for any loss, costs, or damages incurred due to your access to or use of third-party content, products, or services, except as set forth in an applicable agreement between you and Oracle.","This documentation may include references to materials, offerings, or products that were previously offered by Phase Forward Inc. Certain materials, offerings, services, or products may no longer be offered or provided. Oracle and its affiliates cannot be held responsible for any such references should they appear in the text provided.","Legal notices","217488.htm");
var PageCount=24;


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