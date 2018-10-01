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

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function (e) {
    var targetA = document.getElementById("a" + e.data);
    var targetP = document.getElementById("p" + e.data);
    if (targetP != undefined && targetP.src.substring(targetP.src.length - 8) === "plus.gif") {
        targetP.click();
    } else if (targetP === null && targetA != undefined) {
        var parentId = targetA.parentElement.id;
        if (parentId) {
            var targetParent = document.getElementById("a" + parentId.substring(1));
            var targetParentIcon = document.getElementById("p" + parentId.substring(1));
            if (targetParent != undefined && targetParentIcon != undefined && targetParentIcon.src.substring(targetParentIcon.src.length - 8) === "plus.gif")
                targetParentIcon.click();
        }
    }
    window.setTimeout(function () {
        if (targetA)
        {
            targetA.focus();
        }
    }, 100);
}, false);

