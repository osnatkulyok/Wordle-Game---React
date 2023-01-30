import wordBank from '../words-bank'

export const boardDefalt = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

export const generateWordSet = async () => {
  // const newSet = new Set()
  let wordSet
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      //want to break the string into array.
      const wordArray = result.split('\n')
      //Set behave as a dictionary. we dont want "n" run-time-complexcity.
      // wordSet = new Set(wordArray)
      wordSet = wordArray
    })

  return { wordSet }
}
