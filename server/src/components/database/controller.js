const { Resume } = require('@/components/database/model')
const { User } = require('@/components/database/model')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')
const { AuthenticationError } = require('@/lib/utils/errors')
const NodeCache = require('node-cache')

const resumeCache = new NodeCache({ stdTTL: 180, useClones: false })

class DatabaseCrud {
  constructor(model) {
    this.model = model
  }
  async find(where) {
    return this.model.find(where)
  }

  async update(id, data) {
    await this.model.updateOne({ id }, data)
    return this.model.findById(id)
  }

  async create(data) {
    return this.model.create(data)
  }
}

const ResumeController = {
  async getResume() {
    const cachedData = resumeCache.get('resume')
    if (cachedData) return cachedData

    const resumeCrud = new DatabaseCrud(Resume)
    const resume = await resumeCrud.find().then(r => r[0])
    resumeCache.set('resume', resume)
    return resume
  },
  async update(id, data) {
    const resumeCrud = new DatabaseCrud(Resume)
    resumeCache.del('resume')
    return resumeCrud.update(id, data)
  },
  async create() {
    const resumeCrud = new DatabaseCrud(Resume)
    return resumeCrud.create()
  }
}


const TokenService = {
  newAccessToken (data) {
    return jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION })
  },
  verify (token) {
    return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION})
  }
}

const AuthController = {
  async login (username, password) {
    const userCrud = new DatabaseCrud(User)
    const user = await userCrud.find({ username }).then(r => r[0])
    if (!user) throw new AuthenticationError('Username or password is wrong.')

    const checkPassword = await argon2.verify(user.password, password)
    if (!checkPassword) throw new AuthenticationError('Username or password is wrong.')
    return { accessToken: TokenService.newAccessToken(username) }
  }
}

module.exports = {
  ResumeController,
  AuthController,
  TokenService
}
