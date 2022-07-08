const { TokenService } = require('@/components/database/controller')

function getToken(ctx) {
  const token = ctx.request.header.authorization
  if (!token) return false
  return token.replace('Bearer', '').trim()
}

async function authenticateUser(ctx, next) {
  try {
    const token = getToken(ctx)
    if (!token) ctx.throw(401, 'Authorization Error')
    const { data } = TokenService.verify(token)
    if (!data) ctx.throw(401, 'Authorization Error')
    return next()
  } catch (e) {
    throw(e)
  }
}

module.exports = {
  AuthService: {
    authenticate() {
      return async (ctx, next) => await authenticateUser(ctx, next)
    }
  }
}
