import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";

// IMPROVEMENTS:
// * Could create a store containing the memory of the results, and therefore
// ensure that you'll never see the same cards again on refresh.
export const refreshAsync = createAsyncThunk(
    'refresh/fetchDeck',
    async () => {
        const response = await fetch('https://www.reddit.com/r/popular.json');
        const json = await response.json();
        const data = json.data.children.map(postdata => postdata.data);
        const currentDeck = store.getState().refresh.deck;
        let newDeck = [];
        const filteredData = data.filter(post => {
            let eligible = true;
            for (const i in currentDeck) {
                if (post.title === currentDeck[i].title) {
                    return !eligible;
                }
            }
            return eligible;
        })
        for (let i = 0; i < 6; i++) {
            newDeck[i] = {
                title: filteredData[i].title,
                downs: filteredData[i].downs,
                ups: filteredData[i].ups,
                score: filteredData[i].score,
                thumbnail: filteredData[i].thumbnail,
                created: filteredData[i].created,
                author: filteredData[i].author,
                num_comments: filteredData[i].num_comments
            };
        }
        return newDeck;
    }
);

export const refreshSlice = createSlice({
    name: 'refresh',
    initialState: {
        status: 'pending',
        deck: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(refreshAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(refreshAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.deck = action.payload;
        })
    }
})

export default refreshSlice.reducer;