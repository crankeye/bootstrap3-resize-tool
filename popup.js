window.onload = function(){
   document.getElementById('lg').onclick = function() {
	  chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {width: 1200});
	}
	 document.getElementById('md').onclick = function() {
	  chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {width: 992});
	}
	 document.getElementById('sm').onclick = function() {
	  chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {width: 768});
	}
	 document.getElementById('xs').onclick = function() {
	  chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {width: 512});
	}
};