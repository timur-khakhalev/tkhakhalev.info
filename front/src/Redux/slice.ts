import {createSlice} from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggles',
    initialState: {version: true,
        print: false,
        lang: true,
        loggedIn: false,
        expiredToken: false,
        snack: false,
        items: {
            '_id': '',
            'photo': '',
            'nameRu': '',
            'nameEn': '',
            'position': '',
            'age': '',
            'location': '',
            'educationRu': '',
            'educationEn': '',
            'number': 0,
            'telegram': '',
            'email': '',
            'github': '',
            'lastjobEn': '',
            'lastjobRu': '',
            'about': { 'shortRu': '', 'shortEn': '', 'fullRu': '', 'fullEn': '' },
            'hardSkills': { 'languages': '', 'technologies': '', 'patterns': '', 'instruments': '' },
            'softSkillsEn': '',
            'softSkillsRu': ''
        }
    },
    reducers: {
        versionToggle: (state) => { state.version = !state.version },
        printToggle: (state) => { state.print = !state.print },
        langToggle: (state) => { state.lang = !state.lang },
        checkLoggedIn: (state) => { 
            state.loggedIn = true
            state.expiredToken = false
        },
        expiredToggle: (state) => { state.expiredToken = true },
        snackToggle: (state) => { state.snack = !state.snack },
        itemsDelivery: (state, action) => {
            state.items = {
                '_id': action.payload._id,
                'photo': action.payload.photo,
                'nameRu': action.payload.nameRu,
                'nameEn': action.payload.nameEn,
                'position': action.payload.position,
                'age': action.payload.age,
                'location': action.payload.location,
                'educationRu': action.payload.educationRu,
                'educationEn': action.payload.educationEn,
                'number': action.payload.number,
                'telegram': action.payload.telegram,
                'email': action.payload.email,
                'github': action.payload.github,
                'lastjobEn': action.payload.lastjobEn,
                'lastjobRu': action.payload.lastjobRu,
                'hardSkills': { 'languages': action.payload.hardSkills.languages, 'technologies': action.payload.hardSkills.technologies, 'patterns': action.payload.hardSkills.patterns, 'instruments': action.payload.hardSkills.instruments },
                'about': { 'shortRu': action.payload.about.shortRu, 'shortEn': action.payload.about.shortEn, 'fullRu': action.payload.about.fullRu, 'fullEn': action.payload.about.fullEn },
                'softSkillsEn': action.payload.softSkillsEn,
                'softSkillsRu': action.payload.softSkillsRu
            }
        }
    }
})

export const { versionToggle,
    printToggle,
    langToggle,
    checkLoggedIn,
    expiredToggle,
    snackToggle,
    itemsDelivery
} = toggleSlice.actions

export default toggleSlice.reducer