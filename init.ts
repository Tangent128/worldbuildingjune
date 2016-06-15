
(function(tryInit) {
	tryInit();
	document.addEventListener("readystatechange", tryInit);
})(function() {
	if(document.readyState != "loading") {
		(<any>require)(document.body.getAttribute("data-require"));
	}
});
