import crypto from 'crypto'

function md5(string) {
  return crypto.createHash('md5').update(string).digest('hex')
}

export default md5
