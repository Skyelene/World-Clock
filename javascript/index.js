function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAnglesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAnglesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAnglesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let budapestElement = document.querySelector("#budapest");
  if (budapestElement) {
    let budapestDateElement = budapestElement.querySelector(".date");
    let budapestTimeElement = budapestElement.querySelector(".time");
    let budapestTime = moment().tz("Europe/Budapest");

    budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
    budapestTimeElement.innerHTML = budapestTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
