function* randomQuoter () {
  var quotes = require('./quotes.json').quotes

  while (true) {
    var index = Math.floor(Math.random()*quotes.length)
    
    yield quotes[index]
  }
}

var quoter = randomQuoter()

module.exports = {
  get: () => quoter.next().value
}
