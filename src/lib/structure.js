const fs = require('fs-extra')

// criação de estrutura de pastas do projeto

function struct ({ creditor, wallet }) {
  createFolders(creditor, wallet)
}


function createFolders (creditor, wallet = '') {
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
  fs.mkdirpSync(`../../${creditor}/${wallet}/`)
}

exports.struct = struct