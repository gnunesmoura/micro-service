
const basicService = () => {
  return {
    inputChanel: () => new Promise(resolve => resolve()),
    outputChanel: stuf => stuf,
    addTask: stuf => stuf
  }
}

module.exports = {
  basicService
}