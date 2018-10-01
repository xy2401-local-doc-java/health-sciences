var globalParams = {
    OHClink: 'https://docs.oracle.com/health-sciences/mHealth/index.htm',
    titles: {
        title1: 'User Provisioning and Administration',
        title2: 'mHealth Connector Cloud Services 1.2'
    }
}

function indexLoad() {
    // Function to load the topic specified in the Query, and its associated toc
    var strLocation = "?" + location + "?none?none";
    var locarray = strLocation.split("?");
    var strTocURL = "" + locarray[2];
    var strContentURL = "" + locarray[3];

    if (strContentURL != "none") {
        window.CONTENT.location = strContentURL;
    }
}

function headerTitleLoad(Result) {
    Result += '<div class="titles" ><p class="firstTitle">';
    Result += globalParams.titles.title1;
    Result += '</p><p class="secondTitle">';
    Result += globalParams.titles.title2;
    Result += '</p></div></div>'
    return Result;
}

function tocLoad() {
    // Remove all targets from a tags so they can default back to the base tag(<base target="CONTENT"/>)
    var allElements = document.getElementsByTagName("a");
    if (allElements !== null) {
        for (counter = 0; counter < allElements.length; counter++) {
            var element = allElements[counter];
            if (element != null) {
                element.removeAttribute("target");
            }
        }
    }

    //Remove the first h1 text, the original text was"Contents"
    var allElements = document.getElementsByTagName("h1")[0];
    if (allElements !== null) {
        allElements.outerHTML = "";
    }

    /*
     * Sets the left margin of all img tags to "0px" because Author-it puts the left margin in the html not allowing it to be controlled 
     * by the stylesheet and sets alt attribute of images that have sources "plus.gif", "minus.gif", or "topic.gif".
     */
    var allElements = document.getElementsByTagName("img");
    for (counter = 0; counter < allElements.length; counter++) {
        var element = allElements[counter];
        if (element !== null) {
            element.style.marginLeft = "0px";
            var elementImage = element.src.slice(element.src.lastIndexOf('/') + 1);
            if (elementImage == "plus.gif") {
                element.setAttribute('alt', '+');
            } else if (elementImage == "minus.gif") {
                element.setAttribute('alt', '-');
            } else if (elementImage == "topic.gif") {
                element.setAttribute('alt', 'O');
                var parent = element.parentElement;
                if (parent != null) {
                    if (parent.className != "toc") {
                        element.style.opacity = "0.0";
                        element.style.width = '0';
                    }
                }
            }
        }
    }

    var allElements = document.getElementsByTagName("a");
    for (counter = 0; counter < allElements.length; counter++) {
        allElements[counter].innerHTML = allElements[counter].innerHTML.replace(/�/gi, "—");
    }
}

function bodyLoad() {
    //Process query and if there is a search word, get and show the search results
    var strLocation = "?" + location + "?none";
    var locarray = strLocation.split("?");
    var strContentSearchWord = ("" + locarray[2]).replace(/%20/g, " ");

    if (strContentSearchWord != "none") {
        showResults(strContentSearchWord);
    } else {
        hideSearchResults();
    }

    // Removes targets in Nav Bar(relatedtopics aboveheading) so that it can default back to the base tag(<base target="Content"/>)
    var allElements = document.getElementsByClassName("relatedtopics aboveheading")[0];
    if (allElements && allElements.getElementsByTagName("a") !== null) {
        for (counter = 0; counter < allElements.getElementsByTagName("a").length; counter++) {
            allElements.getElementsByTagName("a")[counter].removeAttribute("target");
        }
    }

    //Removes content button from Nav Bar(relatedtopics aboveheading) because it is no longer needed
    //Adding function to replace 'Content' button, use it to jump back to Oracle Help Page
    var allElementsContainer = document.getElementsByClassName("relatedtopics aboveheading")[0];
    if (allElementsContainer && allElementsContainer.getElementsByTagName("td") !== null) {
        var allElements = allElementsContainer.getElementsByTagName("td");
        for (counter = 0; counter < allElements.length; counter++) {
            var element = allElements[counter];
            var elementImages = element.getElementsByTagName("img");

            for (innerCounter = 0; innerCounter < elementImages.length; innerCounter++) {
                elementImage = elementImages[innerCounter].src.slice(elementImages[innerCounter].src.lastIndexOf('/') + 1);
                divA = element.getElementsByTagName("a")[0];
                if (elementImage == "122.gif") {
                    //instead of hidding this button, we are change the funciton & image of this button.
                    divA.removeAttribute('href');
                    divA.setAttribute('onclick', "window.open(globalParams.OHClink, '_blank')");
                    //divA.getElementsByTagName('img')[0].setAttribute('src', '122-1.jpg');
                    divA.getElementsByTagName('img')[0].setAttribute('alt', 'Return to Oracle Help Center');
                    //element.style.display = 'none';
                }
            }

        }
    }
    if (location.pathname.substring(location.pathname.length - 4) === '.htm') {
        var arr = location.pathname.split('/');
        var targetId = arr[arr.length - 1].split('.')[0];
        parent.postMessage(targetId, "*");
    }
}

// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function (e) {
	/* Fix (Nov 14, 17): memory leak fix */
	if (document.getElementById("toc") && (typeof e.data === 'string') ) {
        document.getElementById("toc").contentWindow.postMessage(e.data, "*");
    }
	/* end of Fix (Nov 14, 17): memory leak fix */
}, false);