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
    url = "https://secure.actblue.com/donate/ms_blm_homepage_2019?amount=";
    break;
  case 'ACLU':
    url = "https://secure.actblue.com/donate/american-civil-liberties-union--aclu--1?amount=";
    break;
  }
  window.open(url + totalPrice);
}
