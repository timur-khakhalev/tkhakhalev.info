import {createSlice} from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggles',
    initialState: {version: true, print: false},
    reducers: {
        versionToggle: (state) => { state.version = !state.version },
        printToggle: (state) => { state.print = !state.print }
    }
})

export const { versionToggle, printToggle } = toggleSlice.actions

export default toggleSlice.reducer