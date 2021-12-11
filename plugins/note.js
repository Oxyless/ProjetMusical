import { scoreByNote, notesByScore, NOTES } from "./helpers/score-by-note"

const intervals = {
  tonic: { tone: 0, notes: 0 },
  secondDiminished: { tone: 0.5, notes: 1 },
  second: { tone: 1, notes: 1 },
  secondAugmented: { tone: 1.5, notes: 1 },
  thirdMinor: { tone: 1.5, notes: 2 },
  thirdMajor: { tone: 2.0, notes: 2 },
  fourthDiminished: { tone: 2.0, notes: 3 },
  fourth: { tone: 2.5, notes: 3 },
  fourthAugmented: { tone: 3.0, notes: 3 },
  fifthDiminished: { tone: 3.0, notes: 4 },
  fifth: { tone: 3.5, notes: 4 },
  fifthAugmented: { tone: 4.0, notes: 4 },
  sixthMinor: { tone: 4.0, notes: 5 },
  sixthMajor: { tone: 4.5, notes: 5 },
  seventhMinor: { tone: 5, notes: 6 },
  seventhMajor: { tone: 5.5, notes: 6 },
  octave: { tone: 6, notes: 7 },
  ninthDiminished: { tone: 6.5, notes: 8 },
  ninth: { tone: 7.0, notes: 8 },
  ninthAugmented: { tone: 7.5, notes: 8 },
  eleventhDiminished: { tone: 8.0, notes: 10 },
  eleventh: { tone: 8.5, notes: 10 },
  eleventhAugmented: { tone: 9, notes: 10 },
  thirteenthDiminished: { tone: 10, notes: 12 },
  thirteenth: { tone: 10.5, notes: 12 },
  thirteenthAugmented: { tone: 11, notes: 12 },
  eleventh: { tone: 9.0, notes: 10 }
}

export default class Note {
  constructor(note, options = { mark: false }) {
    this.note = note
    this.mark = options.mark || false
  }

  add(nbTones, options = {}) {
    const scoreBase = scoreByNote[this.note]
    const newScore = scoreBase + nbTones
    const notes = notesByScore[newScore]

    return new Note(notes[0], options)
  }

  addInterval(interval, options = {}) {
    const scoreBase = scoreByNote[this.note]
    const nbTones = intervals[interval].tone
    const nbNotes = intervals[interval].notes
    const newScore = scoreBase + nbTones
    const notes = notesByScore[newScore]
    const noteIndex = NOTES.indexOf(this.note[0])
    const destNote = NOTES[noteIndex + nbNotes]

    for (const note of notes) {
      if (note.startsWith(destNote)) {
        return new Note(note, options)
      }
    }

    console.log("bad", this.note, interval, destNote, notes)
  }

  toAbc() {
    let note = ""

    if (this.note.endsWith("#")) {
      note = `^${this.note.slice(0, -1)}`
    } else if (this.note.endsWith("b") && this.note.length > 1) {
      note = `_${this.note.slice(0, -1)}`
    } else {
      note = `${this.note}`
    }

    if (this.mark) {
      note = "!mark!" + note
    }
    
    return note
  }
}