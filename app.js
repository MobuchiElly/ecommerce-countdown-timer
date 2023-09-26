const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const leadingZero = (v) => {
  if (v < 10)
  {
    return (v = '0' + v);
  }
  else
  {
    return v;
  }
}

//Get expiry date, convert to day, month, year, time
//get today's date and add x days where x is the number of days when the deadline would expire
let x = 10;
let eDate = new Date();
let expDate = new Date(eDate.getFullYear(), eDate.getMonth(), eDate.getDate() + x, eDate.getHours(), eDate.getMinutes(), eDate.getSeconds());
let expYear = expDate.getFullYear();

let expMonth = expDate.getMonth();
expMonth = months[expMonth];

let expDay = expDate.getDay();
expDay = weekdays[expDay];


let expHours = expDate.getHours();
expHours = leadingZero(expHours);

let expMins = expDate.getMinutes();
expMins = leadingZero(expMins);

let expdate = expDate.getDate();
expdate = leadingZero(expdate);

//Getting the am and pm 
let t;
if (expHours < 12) {t = 'am'}
else {t = 'pm'};



const getRemainingTime = (futureDate) => {
  let thisDate = new Date().getTime();
  let timeDiff = (futureDate.getTime()) - thisDate;
  if (timeDiff < 0)
  {
    clearInterval(countDown);
    return deadline.innerHTML = `<h4 class="expired">Sorry the giveaway has expired</h4>`;
  }
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  //Get days, hours, minutes, seconds remaining
  let daysRem = Math.floor(timeDiff / oneDay);
  let hoursRem = Math.floor((timeDiff % oneDay) / oneHour);
  let minsRem = Math.floor((timeDiff % oneHour) / oneMin);
  let secsRem = Math.floor((timeDiff % oneMin) / oneSec);
  const dateArr = [daysRem, hoursRem, minsRem, secsRem];
  
  items.forEach((v, index) => {
   return v.textContent = leadingZero(dateArr[index]);
  })
  
} 
//Function returns an array of the remaining time in days, hours, minutes, seconds
let countDown = setInterval(() => {getRemainingTime(expDate)}, 1000);

giveaway.innerHTML = `<h4 class="giveaway">giveaway ends on ${expDay}, ${expdate} ${expMonth} ${expYear}, ${expHours}:${expMins}${t}</h4>`;

















