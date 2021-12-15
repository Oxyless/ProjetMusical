export const SCALES = {
  major: { intervals: [ 'root', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMajor" ] },
 
  minor: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ] },
  melodicMinor: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ] },
  harmonicMinor: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMajor" ] },

  pentatonicMajor: { intervals: [ 'root', 'second', 'thirdMajor', 'fifth', "sixthMajor" ] },
  pentatonicMinor: { intervals: [ 'root', 'thirdMinor', 'fourth', 'fifth', "seventhMinor" ] },
  pentatonicBlues: { intervals: [ 'root', 'thirdMinor', 'fourth', 'fifthDiminished', 'fifth', "seventhMinor" ] },

  bartok: { intervals: [ 'root', 'second', 'thirdMajor', 'fourthAugmented', 'fifth', "sixthMajor", "seventhMinor" ] },
  tzigan: { intervals:  [ 'root', 'second', 'thirdMinor', 'fourthAugmented', 'fifth', "sixthMinor", "seventhMajor" ] } ,
  altered: { intervals: [ 'root', 'secondDiminished', 'secondAugmented', 'thirdMajor', 'fifthDiminished', 'fifthAugmented', "seventhMinor" ] },
  
  diminuedAscendant: { intervals: [ 'root', 'secondMajor', 'thirdMinor', 'fourth', 'fifthDiminished', 'sixthMinor', 'sixthMajor', 'seventhMajor' ] },
  diminuedDescendant: { intervals: [ 'octave', 'sixthMajor', 'sixthMinor', 'fifthDiminished', 'fourth', 'thirdMinor', 'secondMajor' ] },
  octatonicAscendant: { intervals: [ 'root', 'secondMinor', 'thirdMinor', 'thirdMajor', 'fourthAugmented', 'fifth', 'sixthMajor', "seventhMinor" ] },

  dorian: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ] },
  phrygian: { intervals: [ 'root', 'secondDiminished', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ] },
  lydian: { intervals: [ 'root', 'second', 'thirdMajor', 'fifthDiminished', 'fifth', "sixthMajor", "seventhMajor" ] },
  myxolydian: { intervals: [ 'root', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMinor" ] },
  aeolian: { intervals:  [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor" ] },
  locrian: { intervals: [ 'root', 'secondDiminished', 'thirdMinor', 'fourth', 'fifthDiminished', "sixthMinor", "seventhMinor" ] },
}


// do–rébémol–mibémol–mi–fadièse–sol–la–sibémol–do).
//  do–ré–mibémol–fa–fadièse–soldièse–la–si–do


// diminiué montant sol#   sol sol# la# si do# re mi fa
// diminué descendante  sold#  sol fa mi re do# si la# sol#
// si diminué sio7


// export const INTERVALS = {
//   root: { tone: 0, notes: 0 },
//   secondDiminished: { tone: 0.5, notes: 1 },
//   secondMinor: { tone: 0.5, notes: 1 },
//   second: { tone: 1.0, notes: 1 },
//   secondMajor: { tone: 1.0, notes: 1 },
//   secondAugmented: { tone: 1.5, notes: 1 },
//   thirdMinor: { tone: 1.5, notes: 2 },
//   thirdMajor: { tone: 2.0, notes: 2 },
//   fourthDiminished: { tone: 2.0, notes: 3 },
//   fourth: { tone: 2.5, notes: 3 },
//   fourthAugmented: { tone: 3.0, notes: 3 },
//   fifthDiminished: { tone: 3.0, notes: 4 },
//   fifth: { tone: 3.5, notes: 4 },
//   fifthAugmented: { tone: 4.0, notes: 4 },
//   sixthMinor: { tone: 4.0, notes: 5 },
//   sixthMajor: { tone: 4.5, notes: 5 },
//   seventhMinor: { tone: 5, notes: 6 },
//   seventhMajor: { tone: 5.5, notes: 6 },
//   octave: { tone: 6, notes: 7 },
//   ninthDiminished: { tone: 6.5, notes: 8 },
//   ninthMinor: { tone: 7.0, notes: 8 },
//   ninth: { tone: 7.0, notes: 8 },
//   ninthMajor: { tone: 7.0, notes: 8 },
//   ninthAugmented: { tone: 7.5, notes: 8 },
//   tenthMinor: { tone: 7.5, notes: 9 },
//   tenthMajor: { tone: 8, notes: 9 },
//   eleventhDiminished: { tone: 8.5, notes: 10 },
//   eleventh: { tone: 9, notes: 10 },
//   eleventhAugmented: { tone: 9.5, notes: 10 },
//   thirteenthDiminished: { tone: 10, notes: 12 },
//   thirteenth: { tone: 10.5, notes: 12 },
//   thirteenthAugmented: { tone: 11, notes: 12 }
// }