// hopefully not used in modern

const destructureThisArr = ['testing', 'esmodules']

// destructure
const newThingAddedArr = [...destructureThisArr, 'tonight']

// not sure about backticks
const targetOutput = `${newThingAddedArr.join(' ')}`

// arrow func es2017
// const check
// async
const arbitraryFlex = async (county) => {
  console.log(targetOutput)
  console.log(county)
}

class Location {
  constructor(county) {
    this.county = county
  }
}
const currentLocation = new Location('West Sussex')
arbitraryFlex(currentLocation.county)