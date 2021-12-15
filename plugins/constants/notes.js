export const NOTES = ["C,", "D,", "E,", "F,", "G,", "A,", "B,", "C", "D", "E", "F", "G", "A", "B", "c", "d", "e", "f", "g", "a", "b", "c'", "d'", "e'", "f'", "g'", "a'", "b'"]

export const scoreByNote = function () {
  const scoreByNote = {}
  let score = -6

  for (const note of NOTES) {
    scoreByNote[`${note}b`] = score - 0.5
    scoreByNote[`${note}#`] = score + 0.5
    scoreByNote[note] = score

    if (["E", "B", "e", "b", "E,", "B,", "e'", "b'"].includes(note)) {
      score += 0.5
    } else {
      score += 1
    }
  }
  
  return scoreByNote
}()

export const notesByScore = function() {
  const notesByScore = {}

  for (const [note, score] of Object.entries(scoreByNote)) {
    notesByScore[score] = notesByScore[score] || []
    notesByScore[score].unshift(note)
  }

  return notesByScore
}()