const { ResumeController } = require('@/components/database/controller')
const { AuthController } = require('@/components/database/controller')

async function getResume (ctx) {
  ctx.body = await ResumeController.getResume()
}

async function updateResume (ctx) {
  const { id } = ctx.request.query
  const data = ctx.request.body
  ctx.body = await ResumeController.update(id, data)
}

async function create (ctx) {
  ctx.body = await ResumeController.create()
}

async function login (ctx) {
  const { username, password } = ctx.request.body
  ctx.body = await AuthController.login(username, password)
}

module.exports = {
  getResume,
  updateResume,
  create,
  login
}
