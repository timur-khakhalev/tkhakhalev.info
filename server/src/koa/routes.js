const Router = require('koa-router')
const GithubApi = require('@/components/github/koa-api')
const DatabaseApi = require('@/components/database/koa-api')
const { AuthService } = require('@/components/database/service')

const router = new Router()

router
  .post('/login', DatabaseApi.login)
  .get('/github', GithubApi.getGithubData)
  .get('/resume', DatabaseApi.getResume)
  .use(AuthService.authenticate())
  .put('/resume', DatabaseApi.updateResume)

module.exports = router
