export const SCALES = {
  major: { intervals: [ 'root', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMajor", 'octave' ] },
 
  minor: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor", 'octave' ] },
  melodicMinor: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor", 'octave' ] },
  harmonicMinor: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMajor", 'octave' ] },

  pentatonicMajor: { intervals: [ 'root', 'second', 'thirdMajor', 'fifth', "sixthMajor", 'octave' ] },
  pentatonicMinor: { intervals: [ 'root', 'thirdMinor', 'fourth', 'fifth', "seventhMinor", 'octave' ] },
  pentatonicBlues: { intervals: [ 'root', 'thirdMinor', 'fourth', 'fifthDiminished', 'fifth', "seventhMinor", 'octave' ] },

  bartok: { intervals: [ 'root', 'second', 'thirdMajor', 'fourthAugmented', 'fifth', "sixthMajor", "seventhMinor", 'octave' ] },
  tzigan: { intervals:  [ 'root', 'second', 'thirdMinor', 'fourthAugmented', 'fifth', "sixthMinor", "seventhMajor", 'octave' ] } ,
  altered: { intervals: [ 'root', 'secondDiminished', 'secondAugmented', 'thirdMajor', 'fifthDiminished', 'fifthAugmented', "seventhMinor", 'octave' ] },
  
  diminuedAscendant: { intervals: [ 'root', 'secondMajor', 'thirdMinor', 'fourth', 'fifthDiminished', 'sixthMinor', 'sixthMajor', 'seventhMajor', 'octave' ] },
  diminuedDescendant: { intervals: [ 'octave', 'sixthMajor', 'sixthMinor', 'fifthDiminished', 'fourth', 'thirdMinor', 'secondMajor', 'octave' ] },
  octatonicAscendant: { intervals: [ 'root', 'secondMinor', 'thirdMinor', 'thirdMajor', 'fourthAugmented', 'fifth', 'sixthMajor', "seventhMinor", 'octave' ] },

  dorian: { intervals: [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMajor", "seventhMinor", 'octave' ] },
  phrygian: { intervals: [ 'root', 'secondDiminished', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor", 'octave' ] },
  lydian: { intervals: [ 'root', 'second', 'thirdMajor', 'fifthDiminished', 'fifth', "sixthMajor", "seventhMajor", 'octave' ] },
  myxolydian: { intervals: [ 'root', 'second', 'thirdMajor', 'fourth', 'fifth', "sixthMajor", "seventhMinor", 'octave' ] },
  aeolian: { intervals:  [ 'root', 'second', 'thirdMinor', 'fourth', 'fifth', "sixthMinor", "seventhMinor", 'octave' ] },
  locrian: { intervals: [ 'root', 'secondDiminished', 'thirdMinor', 'fourth', 'fifthDiminished', "sixthMinor", "seventhMinor", 'octave' ] },
}