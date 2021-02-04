function dropDownOnMobile() {
	var x = document.getElementById("theNavbar");
		if (x.className === "navbar") {
		x.className += " expanded-navbar";
	} else {
		x.className = "navbar";
	}
} 
