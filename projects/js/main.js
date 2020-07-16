const HANBURGEPRICE = 1200;
let name, email, address, comment;
let extra, sauce, amount, price;

function getFormData() {
  name = document.getElementById("name").value.trim();
  email = document.getElementById("email").value.trim();
  address = document.getElementById("szallcim").value.trim();
  comment = document.getElementById("megjegyzes").value.trim();

  return isValidPersonalData(name, email, address, comment) ? true : false;

}

function isValidPersonalData(name, email, address, comment) {
  let message = '';

  if (!name) message += 'Név megadása kötelező.\n';
  if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
    message += 'Nem megfelelő email cím.\n';
  }
  if (!address || address.length < 10) {
    message += 'Pontos címet kérünk.\n';
  }
  if (comment.indexOf('<') >= 0 && comment.indexOf('>') > 0) {
    message += 'Megjegyzésben nem megengedett a HTML használata.';
  }

  if (message.length != 0) {
    alert(message);
    return false;
  }
  else return true;
}

function isValidQuantity(quantity) {
  if (!quantity || quantity < 1 || quantity > 10) {
    alert('1 és 10 közötti darab rendelhető!')
    return false;
  } else {
    return true;
  }
}

function priceCheck(amount, extra, sauce) {
  if (isValidQuantity(amount)) {
    let sum = amount * (HANBURGEPRICE + extra + sauce);
    return (sum < 5000) ? sum += 500 : sum;
  }
}

function calcHamburgerPrice() {
  extra = parseInt(document.querySelector("input[name=feltetRadios]:checked").value);
  sauce = parseInt(document.getElementById("szoszok").value);
  amount = parseInt(document.querySelector("input[name='famount']").value);
  let sumValue = document.querySelector("#sumValue");

  if (isValidQuantity(amount)) {
    price = priceCheck(amount, extra, sauce);
    sumValue.innerHTML = price;
  }

}

function run() {
  if (getFormData()) {
    alert(`Neved: ${name} \n Fizetendő: ${price}`);
    
  }
}
