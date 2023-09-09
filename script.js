const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const todayDate = new Date();
const currentDayOfWeek = weekday[todayDate.getDay()];
const currentUTCTimeMilliseconds = Date.now();
console.log(todayDate);
console.log(currentDayOfWeek);
console.log(currentUTCTimeMilliseconds);

document.getElementById('today').textContent = currentDayOfWeek;
document.getElementById('utctime').textContent = currentUTCTimeMilliseconds;