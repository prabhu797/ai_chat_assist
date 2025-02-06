import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state of the project slice.
 * @type {Object}
 * @property {string} sessionID - The ID of the current session.
 */
const initialState = {
    sessionID: "",
};

/**
 * Slice for managing the current session-related state.
 * @type {Object}
 * @property {string} name - The name of the slice.
 * @property {Object} initialState - The initial state of the slice.
 * @property {Object} reducers - The reducers for handling actions.
 */
export const CurrentSessionSlice = createSlice({
    name: 'CurrentSession', // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        /**
         * Sets the session ID in the state.
         * @param {Object} state - The current state.
         * @param {Object} action - The action object containing the payload.
         * @param {string} action.payload - The new session ID to set.
         */
        setSessionID: (state, action) => {
            state.sessionID = action.payload;
        },
        /**
         * Resets the session ID in the state.
         * @param {Object} state - The current state.
         */
        resetCurrentSessionState: (state) => {
            state.sessionID = "";
        }
    },
});

// Export the action creators generated by createSlice
export const { setSessionID, resetCurrentSessionState } = CurrentSessionSlice.actions;

/**
 * The reducer function for the CurrentSessionSlice.
 * @type {function} - The reducer function to be used in the store.
 */
export default CurrentSessionSlice.reducer;
