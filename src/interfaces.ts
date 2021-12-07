export interface IUser {
    nameEn?: string
    nameRu?: string
    photo: string
    vacancy: string
    age: number
    locationEn?: string
    locationRu?: string
    educationEn?: string
    educationRu?: string
    number: number
    tg: string
    wa: number
    email: string
    github: string
}

export interface IAbout {
    textFullEn?: string
    textFullRu?: string
    textShortEn?: string
    textShortRu?: string
}

export interface ISkills {
    hardSkills: string[];
    softSkillsFullEn?: string[];
    softSkillsFullRu?: string[];
}

export interface IPortfolio {
    name: string;
    html_url: string;
    description: string;
    language: string;
    updated_at: string;
}