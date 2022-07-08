const got = require('got')
const NodeCache = require('node-cache')

const cache = new NodeCache({ stdTTL: 1800 })

class GithubAPI {

  _instance = got.extend({
    prefixUrl: 'https://api.github.com/',
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      accept: 'application/vnd.github+json'
    },
    resolveBodyOnly: true,
    hooks: {
      afterResponse: [response => {
        response.body = JSON.parse(response.body)
        return response
      }]
    }
  })

  async getRepositories() {
    try {
      return await this._instance.get('users/timur-khakhalev/repos', {
        searchParams: {
          sort: 'updated',
          direction: 'desc'
        }
      }).json()
    } catch (e) {
      console.error(e.response.body)
    }
  }

  async buildGithubData() {
    try {
      const repos = await this.getRepositories()
      return Promise.all(repos.map(async repo => {
        const { name, html_url, description, updated_at, language, topics } = repo
        const commits = await this._instance(`repos/timur-khakhalev/${repo.name}/commits`).json()
        return {
          name, html_url, description, updated_at, language, topics,
          commits_count: commits.length
        }
      })).then(r => r.flat())
    } catch (e) {
      console.error(e.response.body)
    }
  }
}

const github = new GithubAPI()

const GithubController = {
  async getData () {
    const githubData = cache.get('githubdata')
    if (githubData) return githubData

    const freshGithubData = await github.buildGithubData()
    cache.set('githubdata', freshGithubData)
    return freshGithubData
  }
}

module.exports = { GithubController }
