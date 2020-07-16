const hamburgerPrice = 1200;

function checkInput() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("szallcim").value.trim();
  let comment = document.getElementById("megjegyzes").value.trim();
  let message = '';


  if (!name) {
    message += 'Név megadása kötelező.\n';
  }
  if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
    message += 'Nem megfelelő email cím.\n';
  }
  if (!address || address.length < 10) {
    message += 'Pontos címet kérünk.\n';
  }
  if (comment.indexOf('<') >= 0 && comment.indexOf('>') > 0) {
    message += 'Megjegyzésben nem megengedett a HTML használata.';
  }

  if (message.length === 0) {
    message = 'Minden rendben!';
    //return true;
  } else {
    //return false;
  }

  alert(message);
  //return false;

}

function calcAmount() {

  let extra = parseInt(document.querySelector("input[name=feltetRadios]:checked").value);
  let sauce = parseInt(document.getElementById("szoszok").value);
  let amount = parseInt(document.querySelector("input[name='famount']").value);
  let sumValue = document.querySelector("#sumValue");

  if (!amount || amount < 1 || amount > 10) {
    alert('1 és 10 közötti darab rendelhető!');
  } else {
    let sum = amount * (hamburgerPrice + extra + sauce);
    sumValue.innerHTML = sum;
  }


  /* console.log(`Extra: ${extra}`);
  console.log(`szósz: ${sauce}`); */


}

function sendOrderData() {

}