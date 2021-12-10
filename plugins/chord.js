import { scoreByNote } from "./helpers/score-by-note"
import Note from "./Note"

export default class Chord {
  constructor(chord) {
    this.chord = chord
    this.harmonicChord = this.getHarmonicChord(chord)
    this.arpeggio = this.extractArpeggio(this.harmonicChord)
  }

  toABc(duration = 8) {
    const abc = `[${this.arpeggio.map(note => note.toAbc()).join("")}]${duration}`
    return abc
  }

  getHarmonicChord(chord) {
    chord = chord.replace("maj13", "maj7")
    chord = chord.replace("6/9", "maj7")
    chord = chord.replace("7sus", "-7")
    chord = chord.replace("7sus4", "-7")

    return chord
  }

  extractArpeggio(chord) {
    const arpeggio = []
    let tonic = null
    let third = null
    let fifth = null
    let seventh = null
    let ninth = null

    for (const score of Object.entries(scoreByNote)) {
      if (chord.startsWith(score[0])) {
        tonic = new Note(score[0])
        chord = chord.slice(score[0].length)

        if (chord.startsWith("maj") || chord.startsWith("+")) {
          third = tonic.addInterval('majorThird')
          seventh = tonic.addInterval('majorSeventh')
        } else if (chord.startsWith("-") || chord.startsWith("m")) {
          third = tonic.addInterval('minorThird')
          seventh = tonic.addInterval('minorSeventh')
          ninth = tonic.addInterval('ninth')
        }
      }
    }

    if (!third) {
      third = tonic.addInterval('majorThird')
      seventh = tonic.addInterval('minorSeventh')
      ninth = tonic.addInterval('ninth')
    }

    fifth = tonic.addInterval('fifth')

    for (const note of [ tonic, third, fifth, seventh, ninth ]) {
      if (note) {
        arpeggio.push(note)
      }
    }

    return arpeggio
  }
}