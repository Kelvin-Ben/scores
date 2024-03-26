export function saveScore(scores) {
  localStorage.setItem('myscores', JSON.stringify(scores))
}
export function getScores() {
  const storedScores = localStorage.getItem('myscores')
  return storedScores ? JSON.parse(storedScores) : []
}