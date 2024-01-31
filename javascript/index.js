function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAnglesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAnglesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAnglesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let budapestElement = document.querySelector("#budapest");
  let budapestDateElement = budapestElement.querySelector(".date");
  let budapestTimeElement = budapestElement.querySelector(".time");
  let budapestTime = moment().tz("Europe/Budapest");

  budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
  budapestTimeElement.innerHTML = budapestTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

let budapestElement = document.querySelector("#budapest");
let budapestDateElement = budapestElement.querySelector(".date");
let budapestTimeElement = budapestElement.querySelector(".time");
let budapestTime = moment().tz("Europe/Budapest");

budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
budapestTimeElement.innerHTML = budapestTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
