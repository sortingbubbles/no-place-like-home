const compis = ['Amalia', 'Georgina', 'Ani']
const places = ['cocina', 'sala', 'basura']

function getCurrentWeekNumberOfTheMonth() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 3);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
  return weekNumber
}

function whoHasToCleanThisWeek() {
    const weekNumber = getCurrentWeekNumberOfTheMonth()
    const assignments = [places]
    for (let index = 1; index <= 52; index++) {
        const firstItem = assignments[index-1][0]
        const middleItem = assignments[index-1][1]
        const lastItem = assignments[index-1][2]
        assignments[index] = [middleItem, lastItem, firstItem]
    }
    document.getElementById(assignments[weekNumber][0]).innerText = compis[0]
    document.getElementById(assignments[weekNumber][1]).innerText = compis[1]
    document.getElementById(assignments[weekNumber][2]).innerText = compis[2]
}