export class ResumeInfoDto {
    nameRu?: string;
    nameEn?: string;
    position?: string;
    age?: string;
    location?: string;
    educationEn?: string;
    educationRu?: string;
    number?: number;
    telegram?: string;
    email?: string;
    github?: string;
    lastjobEn?: string;
    lastjobRu?: string;
    about?: { fullEn: string, fullRu: string, shortEn: string, shortRu: string };
    hardSkills?: { languages: string, technologies: string, patterns: string, instruments: string};
    softSkillsEn?: string;
    softSkillsRu?: string
}