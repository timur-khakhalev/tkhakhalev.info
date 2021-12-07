import {createSlice} from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggles',
    initialState: {version: true, print: false, lang: true, loggedIn: false},
    reducers: {
        versionToggle: (state) => { state.version = !state.version },
        printToggle: (state) => { state.print = !state.print },
        langToggle: (state) => { state.lang = !state.lang },
        checkLoggedIn: (state, action) => { state.loggedIn = action.payload }
    }
})

export const { versionToggle, printToggle, langToggle, checkLoggedIn } = toggleSlice.actions

export default toggleSlice.reducer