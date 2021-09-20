export interface IUser {
    name: string
    photo: string
    vacancy: string
    age: number
    location: string
    educationFull?: string
    educationShort?: string
    number: number
    tg: string
    wa: number
    email: string
    github: string
}

export interface IJobs {
    date: string
    company: string
    posname: string
    info: string
}

export interface IAbout {
    textFull?: string
    textShort?: string
}

export interface ISkills {
    hardSkillsFull?: string[]
    softSkillsFull?: string[]
}

export interface IPortfolio {
    name: string
    link: string
    text: string
}