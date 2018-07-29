const ora = require('ora')
const chalk = require('chalk').default

const struct = require('./lib/structure').struct

console.log(chalk.blueBright('Iniciando boilerplate'))
const spinner = new ora({ color: 'blue', spinner: 'earth', text: 'Aguarde...' })

spinner.start()

// const spinner4 = new ora({ color: 'green', spinner: 'clock', text: 'Aguarde...'})
// const spinner5 = new ora({ color: 'green', spinner: 'dots7', text: 'Aguarde...'})
// const spinner8 = new ora({ color: 'green', spinner: 'moon', text: 'Aguarde...'})
// const spinner9 = new ora({ color: 'green', spinner: 'hamburger', text: 'Aguarde...'})
