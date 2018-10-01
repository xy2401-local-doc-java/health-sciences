// Functions for TOC


function exp(id) {
    var myElt = document.getElementById('p' + id);

    if (myElt) {
        // check current display state
        if (myElt.src.slice(myElt.src.lastIndexOf('/') + 1) == 'minus.gif') {
            collapse(id);
        } else {
            expand(id);
        }
    }
}

function expand(id) {
    var myElt = document.getElementById('s' + id);
    if (myElt) {
        with (myElt) {
            className = 'x';
            style.display = '';
        }
        document.getElementById('p' + id).src = 'minus.gif';
        document.getElementById('p' + id).setAttribute('title', 'Collapse');
        document.getElementById('b' + id).src = 'obook.gif';
    }
}

function collapse(id) {
    var myElt = document.getElementById('s' + id);

    if (myElt) {
        with (myElt) {
            className = 'x';
            style.display = 'none';
        }
        document.getElementById('p' + id).src = 'plus.gif';
        document.getElementById('p' + id).setAttribute('title', 'Expand');
        document.getElementById('b' + id).src = 'cbook.gif';

    }
}

function highlight(id) {
    var myElt = document.getElementById("toc").getElementById('a' + id);

    if (myElt) {
        myElt.hideFocus = true;
        //myElt.focus();
        myElt.setActive();
        document.getElementById("toc").scrollTo(myElt.offsetLeft - 48, myElt.offsetTop - (document.getElementById("toc").body.clientHeight / 3));
    }	
}

function loadTOC() {
    // check current page displayed in TOC window.  If not toc.htm, load it.
    if (!isTOCLoaded()) {
        document.getElementById("toc").location.href = 'toc.htm';
    }
}
function isTOCLoaded() {
    // return true, if toc.htm is loaded in TOC window.
    if (document.getElementById("toc")) {
        var myPath = document.getElementById("toc").location.pathname;
        var myFile = myPath.substr(myPath.length - 7);
        if (myFile == 'toc.htm') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function lookingForParentTopic(targetId){
	do{
		targetText = document.getElementById("a" + targetId);
		if(targetText && targetText.parentElement.id){
		//looking for parent id, if exist, expand that.
				var parentId = targetText.parentElement.id;

				var targetParent = document.getElementById("a" + parentId.substring(1));
				var targetParentIcon = document.getElementById("p" + parentId.substring(1));
				if (targetParent != undefined && targetParentIcon != undefined && targetParentIcon.src.substring(targetParentIcon.src.length - 8) === "plus.gif")
					targetParentIcon.click();				
				targetId = trimElementId(parentId);
			}
		else{
			targetId = undefined;
		}
					
	} while (targetId !== undefined);
}

function trimElementId(str){
	strU = str.toUpperCase();
	if(strU[0] === 'A' || strU[0] === 'S')
		return str.substring(1);
	else
		return str;
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function (e) {
    var targetA = document.getElementById("a" + e.data);
    var targetP = document.getElementById("p" + e.data);
	var targetId = e.data; //page's id
	
	var targetClear = document.getElementsByTagName('a');
	for (i in targetClear){
		//find all element with class of activeHref, if it's not current selected one, clear the class																			
		if(targetClear[i].className && targetClear[i].className.indexOf('activeHref') > -1 && targetClear[i].id !== ("a" + e.data)){
			targetClear[i].className = "";
		}
	}
	
	if (targetP != undefined && targetP.src.substring(targetP.src.length - 8) === "plus.gif") {
		targetP.click();
	}
	
	lookingForParentTopic(targetId);
		
    window.setTimeout(function () {
        if (targetA)
        {
            targetA.focus();
			//adding class, making sure the 'focus' background color would stay there	
			targetA.className += targetA.className ? ' activeHref' : 'activeHref';
			targetA.scrollIntoView();
        }
    }, 100);
}, false);

