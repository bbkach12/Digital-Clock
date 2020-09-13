function changeTime() {
  let hour = document.querySelector("#hour");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let AmPm = document.querySelector("#AmPm");

  time = new Date();
  timeInHour = time.getHours();
  timeInMinutes = time.getMinutes();
  timeInSeconds = time.getSeconds();
  AmPm.innerHTML = timeInHour < 12 ? "AM" : "PM";

  timeInHour = timeInHour > 12 ? timeInHour % 12 : timeInHour;
  timeInHour = (timeInHour < 10 ? "0" : "") + timeInHour;
  timeInMinutes = (timeInMinutes < 10 ? "0" : "") + timeInMinutes;
  timeInSeconds = (timeInSeconds < 10 ? "0" : "") + timeInSeconds;

  //   console.log(timeInHour);
  //   console.log(timeInMinutes);
  //   console.log(timeInSeconds);
  //   console.log(AmPm);

  hour.innerHTML = timeInHour;
  minutes.innerHTML = timeInMinutes;
  seconds.innerHTML = timeInSeconds;
}
