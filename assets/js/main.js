var BeautifulJekyllJS = {

  init: function () {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function () {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("top-nav-short");
      } else {
        $(".navbar").removeClass("top-nav-short");
      }
    });

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });
  }
};

document.addEventListener('DOMContentLoaded', BeautifulJekyllJS.init);

var totalPrice = 0;

function setTotal(total){
  totalPrice = total.toFixed(2);
}

function changePrice(tweets, caps) {
  updateCopyText("Click to copy")
  var priceID = document.getElementById("prices");
  var priceVal = priceID.options[priceID.selectedIndex].value;

  var capsID = document.getElementById("caps");
  var capsVal = capsID.options[capsID.selectedIndex].value;

  totalPrice = (((parseFloat(priceVal) / 100) * tweets) + ((parseFloat(capsVal) / 100) * caps)).toFixed(2);

  document.getElementById("total").textContent = "$" + totalPrice;

  var x = document.getElementsByClassName("donate-btn");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].textContent = "Donate $" + totalPrice;
  }
}

function donate(site) {
  var url;
  switch(site){
    case 'BLM':
    url = "https://secure.actblue.com/donate/ms_blm_homepage_2019?amount=" + totalPrice;
    break;
  case 'ACLU':
    url = "https://secure.actblue.com/donate/american-civil-liberties-union--aclu--1?amount=" + totalPrice;
    break;
  case 'T4C':
    url = alert("Thanks for giving us all your money! JK, I haven't set this up yet.");
    return;
  }
  window.open(url);
}

function copyTotal() {
  var copyhelper = document.createElement("input");
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = totalPrice;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);

  updateCopyText("Copied!");

};

function updateCopyText(text) {
  document.getElementById("click-copy").textContent = text;
}
