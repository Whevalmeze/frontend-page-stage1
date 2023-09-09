const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const todayDate = new Date();
const currentDayOfWeek = weekday[todayDate.getDay()];
const currentUTCTimeMilliseconds = Date.now();
document.getElementById('today').textContent = currentDayOfWeek;
document.getElementById('utctime').textContent = currentUTCTimeMilliseconds;