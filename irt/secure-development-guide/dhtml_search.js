/* Generated with Author-it 5.4.131.8883  4/3/2018 6:38:33 PM */
Page=new Array();Page[0]=new Array("Oracle® Health Sciences IRT","Secure Development Guide","Release 5.6","Part number: E86252-01","","214042.htm");
Page[1]=new Array("To guide developers for what they need to protect against, the Open Web Application Security Project publishes an annual document that lists the ten most critical security vulnerabilities identified for a year. Addressing the ten security vulnerabilities does not provide for total security, but is a good start in raising awareness to the current major security threats. This document explains how the IRT REST API and REST API developers should address security vulnerabilities and risks documented by OWASP for 2013.","This document identifies the controls within the IRT REST API that are used or may be used to address the associated risks. In some cases, the controls are baked into the product and proper use of the controls by the clients must be used to validate the integrity of the controls.","OWASP top ten security vulnerabilities 2013","214939.htm");
Page[2]=new Array("The best application security money can buy is education. Developers and project leads need to be mindful of security issues and have an understanding of secure coding practices. Training must include an in depth explanation of the potential risks as well as features of the development and deployment platforms that help mitigate exploits.","The most important design principle for application security is to implement security by design and default. Secure coding guidelines should be made available, adhered to, and enforced in all development organizations, irrespective of the tools and platforms being used.","A good example for security by default is the expectation that we all have for how elevators behave in case of a power outage. Instead of releasing the breaks, we expect elevators to apply the breaks for the safety of passengers in the cabin. But how would the elevator know that it should apply the brakes if no one defined this as the default behavior? So before thinking about how to prevent external attacks, it makes sense to identify secure defaults for an application to protect it from the inside. This however does not work well without training and awareness.","Security awareness and education","207418.htm");
Page[3]=new Array("It is not always that developers immediately find the security they need for an application within the security toolset provided by a platform or built into a framework. As a result, build your own security is not uncommon among development projects. This is especially true if the application is a replacement of an existing system that uses a specific non-standard security infrastructure. An example for this is database-table-based authentication and authorization in combination with user provisioning and resource granting at runtime.","The risk associated with building your own security is that you are also on your own when it comes to quality assurance of the security layer, application security propagation, and single sign on, and you are responsible for bug fixing and maintenance of the security layer.","Not all developers are security experts, but experts are what it takes to build a custom security layer.","Time spent investigating existing, well-vetted security solutions is probably time well spent. Existing solutions can be applied to custom applications more easily and more cost effectively than creating an error-prone, self-written mechanism.","The risk associated with build your own","207419.htm");
Page[4]=new Array("Application security is useless if the application itself runs in an insecure environment. Perimeter security describes the levels of protection that are added on servers, the network, and other data access channels outside of the API domain. As can be seen in this document, not all of the OWASP top ten security vulnerabilities documented for 2013 are relevant for application developers for specific implementations. ","Other aspects of security","207434.htm");
Page[5]=new Array("The OWASP top ten list for the year 2013 does not differ much from lists published for previous years, except for changes in ranking. The listed security threats are probably the most severe threats and application developers have to be aware of and protect against these threats.","For more information, see the following:","OWASP home page: https://www.owasp.org/index.php/Main_Page","General descriptions for the OWASP top ten list of security risks for 2013: https://www.owasp.org/index.php/Top_10_2013-Top_10","Overview of the security risks at: https://www.owasp.org/index.php/Top_10_2013-Risk","Overview of the OWASP top ten list","210301.htm");
Page[6]=new Array("Injection vulnerabilities occur when data is sent into an interpreter via an interface specification and the party submitting the data does not perform checks on the data to ensure only the expected actions are performed by the interpreter on the data. SQL, Code, Command, Log, Path Transversal (XML) are all possible types of injection based upon the interpreter used in the container.","#1 - Injection","207421.htm");
Page[7]=new Array("The REST API is a REST service over HTTP. Developers must use application/xml or application/json as MIME types in the Content-Type HTTP headers. Otherwise, the REST API rejects the requests.","Valid content types","214940.htm");
Page[8]=new Array("To prevent SQL injections, the IRT REST API uses bind variables and does not dynamically generate SQL, which makes SQL injection impossible.","SQL injection","214941.htm");
Page[9]=new Array("The REST API handles XML injections by using standard XML processing components that construct the XML documents. Oracle recommends that client code also uses standard XML processing components to ensure that data is properly encoded. If XML is constructed manually, the developer needs to ensure that any untrusted data is properly encoded to prevent XML injection. As a best practice, the developers must validate the XML against the XML schema provided by the REST API, as the REST API does to ensure that the constraints for the data type and length are met.","XML injection","214942.htm");
Page[10]=new Array("Risks associated with broken authentication and session management are often due to these functions not being implemented properly. As previously stated, custom authentication mechanisms should not be implemented and have not been implemented. To address web service client authentication attacks, the IRT REST API supports username token authentication. To ensure the integrity of web client authentication, the proper handling of the authentication artifacts should be followed.","To ensure the web client authentication is secure, the password for the username token should be treated with the utmost care since exposure of the password could compromise the authentication mechanisms systems. The IRT REST API does not store the password in clear-text on the file system and does not log the password. As such, the client password should be protected in the same way. The password should always be stored in an encrypted fashion.","The IRT REST API is stateless and does not maintain the session. The IRT REST API is re-entrant and the same credentials may be used for the calls. Considerations with the number of the concurrent calls should be designed not to exhaust the resources of the systems.","#2 - Broken authentication and session management","214943.htm");
Page[11]=new Array("Cross site scripting occurs due to browser presentation of data. Although web services generally do not support web containers, all input data to the REST API must be properly validated or escaped. Generally this vulnerability is not applicable to web services.","#3 - Cross site scripting (XSS)","207426.htm");
Page[12]=new Array("When a developer exposes a reference to an object without proper access or other protection, then this reference becomes a source of attack. The objects defined in the IRT REST API have been tested to validate proper authorization constructs within the functions of the defined service. When developing code and sending data to and from the REST API, ensure that the authorization model of the REST API interface is consistent to guard against insecure direction object references.","#4 - Insecure direction object references","214944.htm");
Page[13]=new Array("To securely allow subject data to be submitted, the IRT REST API requires authentication information from an IRT user.","#5 - Security misconfiguration","214945.htm");
Page[14]=new Array("Not all data is public and caution should be used to hide sensitive information from unauthorized users. Failure in security configuration and the selection of insecure defaults may pose a of risk data leakage.","Developers should use TLS 1.2 or above to consume the IRT REST API to ensure the protection of the sensitive data and address Man-in-the-Middle attacks. Web client developers should enforce encrypted data transport when the application transports sensitive data and should validate that all certificates are legitimate and signed by public authorities. Ciphers should be restricted to modern implementations.","#6 - Sensitive data exposure","214946.htm");
Page[15]=new Array("The defense in depth design pattern specifies that multiple layers of security must be implemented in an application. This also means that application functionality that executes methods and operations should be guarded by authorization checks even if the underlying data object is protected through entity security. When the client application calls out to the IRT REST API to submit the data, such calls should be protected with the level of the access control. As a best practice, never assume that a specific method will only be called within the context that it was initially designed for. All access to functionality that manipulates data must be protected either by access control on the entity or by guarding the invocation of methods with the appropriate permission checks. The credential of the identity associated with the access control in the client application must be encrypted and stored in the secured identity management system as the REST API does.","#7 - Missing function level access control","214950.htm");
Page[16]=new Array("Cross-site request forgery requires a browser container. Generally REST APIs are not meant to be supported directly in a browser container so the session is not kept as a browser cookie and CSRF is not a viable threat. ","#8 - Cross-site request forgery (CSRF)","207431.htm");
Page[17]=new Array("The IRT REST API stack is constantly updated with the latest security fixes and patches. Oracle recommends that developers using the REST API do the same.","#9 - Using components with known vulnerabilities","214947.htm");
Page[18]=new Array("IRT REST API responses do not provide URLs to other resources or sub-resources in the representations that are returned. Therefore, the REST API is not subject to this vulnerability.","#10 - Non-validated redirects and forwards","214948.htm");
Page[19]=new Array("Ensure that coding follows Oracle Global Product Security (GPS) standards.","Follow secure coding standards","167352.htm");
Page[20]=new Array("Use LLBLGen collections and LINQ to LLBLGen rather than SQLConnection, SQLCommand, and SQLDataReader. The LLBLGen data access provider parameterizes all SQL sent to the database appropriately, which prevents SQL injection attacks.","Avoid direct SQL","167362.htm");
Page[21]=new Array("Each AppBlock, report, and page should have a unique permission ID. Do not share a general permission ID across features.","Configure unique permission IDs","167369.htm");
Page[22]=new Array("Use the infrastructure provided for checking whether the given user has access to a permission, site, depot, shipment, notification, and so on. These are provided as LINQ extension methods on the underlying collections.","For example:","Sites.DataSource = _linq.Site.ForUser(CurrentSession.UserID);","Use permission infrastructure","167372.htm");
Page[23]=new Array("The base permissions infrastructure automatically checks whether the current user can access a given page. However, you must verify that the user has access to the given record(s) being edited.","For example:","/DrugOrderShipInfo.aspx?SDR_enterDrugOrderFld=010004","The permissions system redirects any user without permission to enter shipment information. However, the code still verifies that drug order 010004 is in the list of shipments available to this user.","For example:","_linq.Shipment.ForUser(CurrentSession.UserID)","Verify URL and form parameters","167380.htm");
Page[24]=new Array("Oracle customers that have purchased support have access to electronic support through My Oracle Support or Support Cloud. For information, visit http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","Access to Oracle Support","217485.htm");
Page[25]=new Array("Oracle customers that have purchased support have access to electronic support through either My Oracle Support or Support Cloud. ","You can get support for IRT through Support Cloud. ","More about Support Cloud","Contact our Oracle Customer Support Services team&nbsp;by logging&nbsp;requests in one of the following locations:","English interface of Oracle Health Sciences Customer Support Portal (https://hsgbu.custhelp.com/)","Japanese interface of Oracle Health Sciences Customer Support Portal (https://hsgbu-jp.custhelp.com/)","You can also call our 24x7 help desk. For information, visit  http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit  http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired.","More about My Oracle Support ","Oracle customers that have purchased support have access to electronic support through My Oracle Support. For information, visit  http://www.oracle.com/us/support/contact/health-sciences-cloud-support/index.html or visit  http://www.oracle.com/pls/topic/lookup?ctx=acc&amp;id=trs if you are hearing impaired. ","Access to Oracle Support","217485_2.htm");
var PageCount=26;


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