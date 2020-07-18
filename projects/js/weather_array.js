let temperatures = [-1.2, 3.3, 15.2, 21.4, 28.0, 22.5, 8.9];
let temperatureLimits = [0, 15, 20, 25, 60];
let offers = [
  "Fagypont alatt forró csokit!",
  "Hideg időben a jó meleg tea sokat segít!",
  "Ne siess, inkább harapj egy finom sütit!",
  "Mielőtt tovább mész kóstolj meg egy fagyit!",
  "Ilyen időben csak a jéghideg limonádé frissít fel!",
];

function findOffer(value) {
  for (let i = 0; i < temperatureLimits.length; i++) {
    if (value <= temperatureLimits[i]) {
      return offers[i];
    }
  }
}

function displayData(elem) {
  document.getElementById("temperature").innerHTML = elem.toFixed(1);
  document.getElementById("offer").innerHTML = findOffer(elem);
}

function myWeather() {
  let day = document.getElementById("day").value;
  let actualTemperature = temperatures[day];
  displayData(actualTemperature);
}

function onLoadWeather() {
  let date = new Date();
  let today = date.getDay();
  let actualTemperature = temperatures[--today];
  displayData(actualTemperature);

  document.getElementById("day").value = today;
}

function minTemperature(arr) {
  let length = arr.length;
  let min = length != 0 ? arr[0] : 0;
  while (length--) {
    if (arr[length] < min) {
      min = arr[length];
    }
  }
  return min;
}

function maxTemperature(arr) {
  let length = arr.length;
  let max = length != 0 ? arr[0] : 0;
  while (length--) {
    if (arr[length] > max) {
      max = arr[length];
    }
  }
  return max;
}

function averageTemperature(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += parseFloat(element);
  });
  return arr.length !=0 ? sum / arr.length : 0;
}

function displayStatistics() {
  document.getElementById("minTempr").innerHTML = minTemperature(
    temperatures
  ).toFixed(1);
  document.getElementById("maxTempr").innerHTML = maxTemperature(
    temperatures
  ).toFixed(1);
  document.getElementById("averageTempr").innerHTML = averageTemperature(
    temperatures
  ).toFixed(1);
}
