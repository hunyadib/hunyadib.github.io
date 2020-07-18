var data = getWeatherData();

function getWeatherData() {
  let weathersAndOffers = {
    weathers: [
      { dayNumber: 4, temperature: -1.2 },
      { dayNumber: 6, temperature: 3.3 },
      { dayNumber: 3, temperature: 15.2 },
      { dayNumber: 5, temperature: -5.2 },
      { dayNumber: 0, temperature: 28.0 },
      { dayNumber: 2, temperature: 22.5 },
      { dayNumber: 1, temperature: 8.9 },
    ],
    offers: [
      { upperLimit: 0, offerMessage: "Fagypont alatt forró csokit!" },
      {
        upperLimit: 15,
        offerMessage: "Hideg időben a jó meleg tea sokat segít!",
      },
      {
        upperLimit: 20,
        offerMessage: "Ne siess, inkább harapj egy finom sütit!",
      },
      {
        upperLimit: 25,
        offerMessage: "Mielőtt tovább mész kóstolj meg egy fagyit!",
      },
      {
        upperLimit: 60,
        offerMessage: "Ilyen időben csak a jéghideg limonádé frissít fel!",
      },
    ],
  };
  return weathersAndOffers;
}

function onLoadWeather() {
  let date = new Date();
  let toDay = date.getDay();
  let actualTemperature = findTemperature(--toDay);
  let actualOffer = findOffer(actualTemperature);
  displayData(actualTemperature, actualOffer);
  displayStatistics();
  convertScale();
  document.getElementById("day").value = toDay;
}

function myWeather() {
  let day = document.getElementById("day").value;
  let actualTemperature = findTemperature(day);
  let actualOffer = findOffer(actualTemperature);
  
  displayData(actualTemperature, actualOffer);
  displayStatistics();
  convertScale();
}

function findTemperature(day) {
  for (let item of data.weathers) {
    if (item.dayNumber == day) {
      return item.temperature;
    }
  }
  /*
  for (let pos in data.weathers) {
    if (data.weathers[pos].dayNumber == day) {
      return data.weathers[pos].temperature;
    }
  }
  */
}

function findOffer(value) {
  for (let item of data.offers) {
    if (value <= item.upperLimit) {
      return item.offerMessage;
    }
  }
  /*
  for (let pos in data.offers) {
    if (value <= data.offers[pos].upperLimit) {
      return data.offers[pos].offerMessage;
    }
  }
  */
}

function displayData(tempr, offer) {
  document.getElementById("temperature").innerHTML = tempr.toFixed(1) + ' &degC';
  document.getElementById("offer").innerHTML = offer;
  //convert to Fahren, ha F-van beállítva!!
  
}

function minTemperature() {
  let min = data.weathers.length != 0 ? data.weathers[0].temperature : 0;
  for (let iterator of data.weathers) {
    if (iterator.temperature < min) {
      min = iterator.temperature;
    }
  }
  return min;
}

function maxTemperature() {
  let max = data.weathers.length != 0 ? data.weathers[0].temperature : 0;
  for (let iterator of data.weathers) {
    if (iterator.temperature > max) {
      max = iterator.temperature;
    }
  }
  return max;
}

function avgTemperature() {
  let sum = 0;
  let length = data.weathers.length;
  data.weathers.forEach((element) => {
    sum += element.temperature;
  });
  return length != 0 ? sum / length : 0;
}

function displayStatistics() {
  document.getElementById("minTempr").innerHTML = minTemperature().toFixed(1) + ' &degC';
  document.getElementById("maxTempr").innerHTML = maxTemperature().toFixed(1) + ' &degC';
  document.getElementById("avgTempr").innerHTML = avgTemperature().toFixed(1) + ' &degC';
}

//temprF = tempC * 1.8 + 32
//tempC = (tempF - 32 ) / 1.8

function convertScale() {
  //let arr = document.getElementsByClassName("scale");
  let arrNum = [
    document.getElementById("temperature"),
    document.getElementById("minTempr"),
    document.getElementById("maxTempr"),
    document.getElementById("avgTempr")
  ];
  
  celsiusToFahren = (val) => val * 1.8 + 32;
  fahrenToCelsius = (val) => (val - 32) / 1.8;

  if (document.getElementById("Fahren").checked) {
    arrNum.forEach(element => {
      let strArr = element.innerHTML.split(' ');
      element.innerHTML = celsiusToFahren(strArr[0]).toFixed(1) + ' &degF';
    });
  }
}
