document.addEventListener("keydown", function (e) {
	if(e.key == "!" && e.ctrlKey) {
		fetch("https://script.google.com/macros/s/AKfycbwbHy7EzPjnTR6on2qcCsttUNLGevrWJjSqHr9bPoCigEErXGNVvhZo6N7NOo27lX7Fpg/exec", {
			method: "POST",
			body: JSON.stringify({
				selection: "ball"
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
			})
	}
});
