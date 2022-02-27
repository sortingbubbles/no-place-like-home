function getCurrentWeekNumberOfTheMonth() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
  return weekNumber
}


function whoHasToCleanThisWeek() {
    const weekNumber = getCurrentWeekNumberOfTheMonth()
    if (weekNumber % 2 === 1) {
        document.getElementById('clean-lady').innerText = 'Ani'
    } else {
        document.getElementById('clean-lady').innerText = 'Amalia'
    }
}