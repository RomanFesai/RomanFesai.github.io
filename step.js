
function updatePrice() {
 
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

 
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "3" ? "block" : "none");


  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });

 
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "none" : "block");


  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });

  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = price + " Душ";
}

function getPrices() {
  return {
    prodTypes: [10000, 20000, 15000],
    prodOptions: {
      option2: 250000,
      option3: 550000,
    },
    prodProperties: {
      prop1: 500,
      prop2: 550,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {

  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";


  let s = document.getElementsByName("prodType");
  let select = s[0];

  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });


  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
});
	function summa(){
		var ich = document.getElementById('Tablee').rows[0].cells[1].innerHTML;
		console.log(ich);
		var ni = document.getElementById('Kol-vo').value;
		var san = ich*ni;
		document.getElementById('sum').textContent=san;
	}
