/// <reference path="almond.js" />

(function(doInit) {
	function ready() {
		if(document.readyState === "loading") return;
		document.removeEventListener("readystatechange", ready);
		doInit();
	};
	document.addEventListener("readystatechange", ready);
	ready();
})(function() {
	require([document.body.getAttribute("data-require")], function() {});
});
