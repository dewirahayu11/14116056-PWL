function startTime() {
	var today = new Date();
	var jam = today.getHours();
	body = document.getElementsByTagName("body")[0]
	if((jam >= 18) && (jam <= 24)) {
		body.classList.add("dark-mode")
	} else {
		body.classList.remove("dark-mode")
	}
	t = setTimeout(function(){
		startTime()
	}, 1000);
} 
startTime();