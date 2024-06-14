import {configureStore} from '@reduxjs/toolkit'
import imageSearchReducer from "./ImageSearchSlice"

export const Store= configureStore({
    reducer: {
        search: imageSearchReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch