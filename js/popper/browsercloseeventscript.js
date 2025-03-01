﻿function addEvent(obj, evType, fn, useCapture){
  if (obj.addEventListener){
    obj.addEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.attachEvent){
    var r = obj.attachEvent("on"+evType, fn);
    return r;
  } else {
    //alert("Handler could not be attached");
  }
}

var amINavigating = false;
function setupWindowEvents() {
	
	if(window.opener && window.opener.open && !window.opener.closed){window.opener.noclose();}
    var closeWindowMessage = 'You sure you want to close the window?'
    History.options.disableSuid = true;  // avoid IE problems with suid in History

    function fnWillWindowBeClosed(e) {	
			
        if (!amINavigating && !$(e.target.activeElement).hasClass('lang') ) {			
			
            $(window).bind('unload', fnWindowWillBeClosed);
            if (window.opener.forceChildClose)
                return;
            else
                return closeWindowMessage;
        }
        else {
            $(window).unbind('unload', fnWindowWillBeClosed);
        }
    }

	$(window).bind('beforeunload',fnWillWindowBeClosed);
	
    function fnGetKeyPressedBeforeTryingToCloseWindow(e) {
        e = e || window.event;
        var keyCode = e.which || e.keyCode;
        if (keyCode && keyCode == 116) {
            fnSetTheAmINavigatingFlag();
        }
        else
			$(window).bind('beforeunload',fnWillWindowBeClosed);
    };

    addEvent(document, 'keydown', fnGetKeyPressedBeforeTryingToCloseWindow, false);

    function fnWindowWillBeClosed() {
        if ((!amINavigating) || (window.opener.forceChildClose)) {
           window.opener.quitCourse();
        }
    }

    function fnSetTheAmINavigatingFlag() {		
        amINavigating = true;
    }
	 
}

$(document).ready(function () {
    setupWindowEvents();	
});

