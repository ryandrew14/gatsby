const { isCI } = require(`ci-info`)

let inkExists = false
try {
  inkExists = require.resolve(`ink`)
  // eslint-disable-next-line no-empty
} catch (err) {}

if (inkExists && !isCI) {
  module.exports = require(`./ink`).default
} else {
  module.exports = require(`./yurnalist`)
}
