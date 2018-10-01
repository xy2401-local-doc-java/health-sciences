/* Generated with Author-it 5.4.131.8883  6/15/2018 9:18:05 AM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences Central Designer","System Requirements","Release 6.2","Part number: E89778-01","","title.htm");
Page[1]=new Array("Oracle strongly recommends that you install the Central Designer software on a different server than the server on which the InForm software runs. However, if you install the Central Designer software and the InForm software on the same server, you must install the software in the following order:","Microsoft .NET Framework.","For more information about which version of .NET Framework to install, see System requirements: Client computers and System requirements: Application servers.","Oracle Database Client.","The InForm software.","The Central Designer software.","Regardless of whether the Central Designer software and the InForm software are on the same server, if you created a deployment package and are upgrading to a new release:","Changes that impact deployment to the InForm application are propagated only after you create a new deployment package and install it on the InForm server. ","If you have already installed the deployment package and the study is live, you also have to change the study version. ","Note: Oracle recommends installing only one study per InForm application server.","Deployment scenarios and requirements","203635.htm");
Page[2]=new Array("Feature","Client requirement","Operating system","One of the following:","Windows 8 Version 6.3.9600 Build 9600, Enterprise Edition.","Windows 10.","Windows Server 2012 R2 Standard.","Processor","Single CPU Pentium 4, 1 GHz or higher.","Display","1024 x 768 or greater resolution.","256 or more colors.","Note: To avoid display issues in Central Designer, Oracle recommends that you do not set the Windows display size setting to Medium - 125%.","Memory","Minimum: 1 GB.","Recommended: 4 GB.","Note: If the computer has 512 MB or less, you cannot install the client applications.","Disk space","In addition to the space required for the operating system: ","Approximately 150 MB for both the Central Designer software and Central Designer Administrator software.","Software","Adobe Acrobat Reader 9 (for documentation).","Microsoft .NET Framework 4.5.2, 4.6, 4.6.1, or 4.6.2.","Microsoft Internet Explorer 11.","Bandwidth between the application server and client computers","Minimum: 1.5 Mbps (T1)","Recommended: 5 Mbps","System requirements: Client computers","213093.htm");
Page[3]=new Array("Feature","Application server requirement","Operating system","Microsoft Windows Server 2012 R2 Standard.","You can install on an English (United States) or Japanese operating system.","Processor","Minimum: 2.0 GHz or higher.","Recommended: Multiple processors, each 2.0 GHz or higher.","Memory","Minimum: 4 GB.","Recommended: 8 GB.","Disk space","In addition to the space required for the operating system:","Approximately 500 MB for the Central Designer software.","Connectivity","100/1000 NIC.","Display","1024 x 768 or greater resolution.","256 or more colors.","Software","Windows components:","Internet Information Services (IIS) 8.5.","ASP.NET 4.0.","Microsoft .NET Framework 4.5.2, 4.6, 4.6.1, or 4.6.2.","SMTP server, which sends email notifications during deployment. For this feature to work as expected, you must install and configure the SMTP server.","Oracle client components:","Oracle Database Client 12.1.0.2","Oracle Services for Microsoft Transaction Server (MTS) for your Oracle Client version.","Oracle Data Provider (ODP) for .NET versions 2.121.2.0 and 4.121.2.0.","Services","The Distributed Transaction Coordinator service must be running. The service provides transaction support for Central Designer database operations.","System requirements: Application servers","213092.htm");
Page[4]=new Array("Feature","Database server requirement","Operating system","Operating system and hardware as specified by the Oracle 12c database software.","Supported Windows platforms:","Microsoft Windows Server 2012 R2 Standard.","Supported Unix platforms:","Oracle Enterprise Linux 6.x release 6.5 or higher.","Oracle Enterprise Linux 7.","Database","Oracle Database Server 12.1.0.2, with or without Oracle Real Application Clusters (RAC).","Note: You must register the .NET assemblies to the Global Assembly Cache (GAC) after the initial installation, and each time you apply a patch. For more information, see the Installation Guide.","Mandatory database components:","Oracle Text.","Oracle Java Virtual Machine (JVM).","Oracle XML DB.","Processor","Four or more 3.3 GHz Intel Xeon class or higher processor cores.","Memory","8 GB RAM or more.","Disk space","In addition to the space required for the Oracle database software installation:","Approximately 100 MB tablespace for installation, plus additional space as required to accommodate the database.","Connectivity","100/1000 NIC.","Display","No requirements.","CD drive","Required only if you need a CD drive to install Oracle Server.","System requirements: Database server","213094.htm");
Page[5]=new Array("Note: The patches for the Oracle Database Server and the Oracle Client have been set so that both the database and the client use version 4 &#8220;TSTZ&#8221; (timestamp/time zone) files. The version of these files should always match. This needs to be taken into consideration when applying future patches to the database or client. ","If a future patch for either the database or client changes the version of these files, then the patches for both the client and database should be reviewed.","Oracle Windows patches","When a physical machine serves as more than one type of server, you will need all the patches that are required for each type of server. For example, in a single-tier Central Designer installation, the machine that both the Central Designer Server and the Database Server are installed on requires all the patches listed under both the Oracle database and the Oracle client.","Minimum Oracle database patches required for the database server","83228.htm");
Page[6]=new Array("Oracle database patches required for the database server for Microsoft Windows 64-bit","Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2","27440294","2","Windows DB Bundle Patch 12.1.0.2.180417","Oracle 12.1.0.2 for Microsoft Windows 64-bit","220411.htm");
Page[7]=new Array("Oracle database patches required for the database server for Oracle Enterprise Linux 64-bit","Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2","27338041","2","Patch Set Update 12.1.0.2.180417","Oracle 12.1.0.2 for Oracle Enterprise Linux 64-bit","220413.htm");
Page[8]=new Array("Oracle database patches required for the database server for Oracle JavaVM (OJVM) Component","Oracle version","Patch number","Patch application order","Notes","12.1.0.2","27475603","1","Oracle JavaVM Patch Set Update 12.1.0.2.180417","Oracle JavaVM (OJVM) Component 12.1.0.2 for UNIX","220414.htm");
Page[9]=new Array("When you install the base release of Oracle software, you must select the following database components:","Oracle Client.","Oracle Services for Microsoft Transaction Server (MTS).","Oracle Data Provider (ODP) for .NET.","Minimum Oracle software components required for the Central Designer Oracle client","83231.htm");
Page[10]=new Array("Oracle database patches required for the Central Designer Oracle client for Microsoft Windows 64-bit","Oracle version","Patch number","Patch application order","Notes","12.1.0.2","21419221","1","Patch set/Base install Oracle 12.1.0.2","12.1.0.2","27440294","2","Windows DB Bundle Patch 12.1.0.2.180417","Oracle 12.1.0.2 for Microsoft Windows 64-bit","220412.htm");
Page[11]=new Array("Oracle maintains the following software compatibility matrixes:","Product Compatibility Matrix&#8212;Identifies Central Designer compatibility with other Oracle Health Sciences products.","Product Technology Compatibility Matrix&#8212;Identifies Central Designer compatibility with other Oracle and external software products.","Both matrixes can be downloaded from My Oracle Support in Article ID 180430.1: Oracle Health Sciences Applications Supported Technology Stack (https://support.oracle.com/epmos/faces/DocumentDisplay?id=180430.1).","Central Designer compatibility","172934.htm");
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