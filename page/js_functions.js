function get(item, tag) {
	return item.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
}

function loadXMLDoc(dname) {
	var xhttp = false;
	try {
		xhttp = new XMLHttpRequest();
	} catch (e) {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET", dname, false);
	xhttp.send();
	return xhttp.responseXML;
}