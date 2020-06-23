function changePrice(tweets) {
	var eID = document.getElementById("prices");
	var priceVal = eID.options[eID.selectedIndex].value;
	var newTotal = (parseFloat(priceVal)/100) * tweets;
	document.getElementById("total").textContent = "$" + newTotal.toFixed(2);
}