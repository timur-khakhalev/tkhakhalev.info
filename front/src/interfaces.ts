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

export interface IFormValues {
    _id: string;
    nameRu: string;
    nameEn: string;
    position: string;
    age: string;
    location: string;
    educationRu: string;
    educationEn: string;
    number: number;
    telegram: string;
    email: string;
    github: string;
    lastjobEn: string;
    lastjobRu: string;
    about: { shortRu: string, shortEn: string, fullRu: string, fullEn: string },
    hardSkills: { languages: string, technologies: string, patterns: string, instruments: string },
    softSkillsEn: string,
    softSkillsRu: string,
    photo: string
};

export interface ISnackbar {
    message: string,
    type: string
}