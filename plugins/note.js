import { scoreByNote, notesByScore, NOTES } from "./constants/notes"
import { INTERVALS } from "./constants/intervals"



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
    const nbTones = INTERVALS[interval].tone
    const nbNotes = INTERVALS[interval].notes
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