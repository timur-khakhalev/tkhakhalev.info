const db = require('@/components/database')
const { Schema } = require('mongoose')

const translations = {
  ru: {
    type: String
  },
  en: {
    type: String
  }
}

const resumeSchema = new Schema({
  name: translations,
  photo: {
    type: String
  },
  age: {
    type: String
  },
  location: translations,
  position: {
    type: String
  },
  education: translations,
  tel: {
    type: String
  },
  telegram: {
    type: String
  },
  email: {
    type: String
  },
  github: {
    type: String
  },
  headhunter: {
    type: String
  },
  linkedin: {
    type: String
  },
  jobExperience: [{
    company: translations,
    description: translations,
    date: translations
  }],
  about: translations,
  hardSkills: {
    instruments: {
      type: String
    },
    patterns: {
      type: String
    },
    technologies: {
      type: String
    },
    stack: {
      type: String
    }
  },
  softSkills: translations
})

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = {
  Resume: db.model('Resume', resumeSchema),
  User: db.model('User', userSchema)
}
