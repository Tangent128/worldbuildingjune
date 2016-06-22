/// <reference path="almond.js" />

(function(tryInit) {
	tryInit();
	document.addEventListener("readystatechange", tryInit);
})(function() {
	if(document.readyState != "loading") {
		require(document.body.getAttribute("data-require"));
	}
});
