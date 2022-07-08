const { GithubController } = require('@/components/github/controller')

async function getGithubData (ctx) {
  ctx.body = await GithubController.getData()
}

module.exports = {
  getGithubData
}
