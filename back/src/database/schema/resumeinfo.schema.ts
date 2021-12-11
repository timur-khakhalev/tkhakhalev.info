import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResumeInfoDocument = ResumeInfo & Document;

@Schema()
class hardSkills {
    @Prop()
    languages: string;

    @Prop()
    technologies: string;

    @Prop()
    patterns: string;

    @Prop()
    instruments: string
}

@Schema()
class about {
    @Prop()
    fullEn: string;
    
    @Prop()
    fullRu: string;
    
    @Prop()
    shortEn: string;
    
    @Prop()
    shortRu: string
}

@Schema()
export class ResumeInfo {
    @Prop()
    nameRu: string;

    @Prop()
    nameEn: string;

    @Prop()
    position: string;

    @Prop()
    age: string;

    @Prop()
    location: string;

    @Prop()
    educationRu: string;

    @Prop()
    educationEn: string;

    @Prop()
    number: number;

    @Prop()
    telegram: string;

    @Prop()
    email: string;

    @Prop()
    github: string;

    @Prop()
    lastjobEn: string;

    @Prop()
    lastjobRu: string;

    @Prop([about])
    about: string;

    @Prop([hardSkills])
    hardSkills: string;
    
    @Prop()
    softSkillsEn: string;
    
    @Prop()
    softSkillsRu: string
}

export const ResumeInfoSchema = SchemaFactory.createForClass(ResumeInfo);