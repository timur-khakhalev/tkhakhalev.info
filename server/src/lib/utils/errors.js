class AuthenticationError extends Error {
  constructor (message) {
    super(`${message} Authentication required`)
    this.name = 'AuthenticationError'
  }
}

class AuthorizationError extends Error {
  constructor () {
    super('Access denied')
    this.name = 'AuthorizationError'
  }
}

class ValidationError extends Error {
  constructor (message, errors) {
    super(message)
    this.name = 'ValidationError'
    this.errors = errors
  }
}

class NotFoundError extends Error {
  constructor (item) {
    super(`${item} not found`)
    this.name = 'NotFoundError'
  }
}

module.exports = {
  AuthenticationError,
  AuthorizationError,
  ValidationError,
  NotFoundError
}
