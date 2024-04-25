function stopPropagation(event) {
    event.stopPropagation();
  }
  
  function toggleSearchBar() {
    var searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('show');
    var input = searchBar.querySelector('input[type="text"]');
    input.focus();
  }

  function toggleMenu() {
    var menu = document.getElementById('menu2');
    menu.classList.toggle('show');
  }
///////////////////////////////////////////////////////////////////
 var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    btc.innerHTML = data.bitcoin.eur;
    ltc.innerHTML = data.litecoin.eur;
    eth.innerHTML = data.ethereum.eur;
    doge.innerHTML = data.dogecoin.eur;
  });
  //////////////////////////////////////////////////////////////
  