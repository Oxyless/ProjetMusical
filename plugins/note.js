import { scoreByNote, notesByScore, NOTES } from "./helpers/score-by-note"

const intervals = {
  tonic: { tone: 0, notes: 0 },
  minorThird: { tone: 1.5, notes: 2 },
  majorThird: { tone: 2.0, notes: 2 },
  fourth: { tone: 2.5, notes: 4 },
  diminishedFifth: { tone: 3.0, notes: 4 },
  fifth: { tone: 3.5, notes: 4 },
  minorSeventh: { tone: 5.0, notes: 6 },
  majorSeventh: { tone: 5.5, notes: 6 },
  ninth: { tone: 7.0, notes: 8 },
  eleventh: { tone: 9.0, notes: 10 }
}

export default class Note {
  constructor(note, options = { mark: false }) {
    this.note = note
    this.mark = options.mark || false
    console.log(this.mark)
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