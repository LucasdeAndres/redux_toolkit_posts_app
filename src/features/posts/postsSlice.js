import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState =[{
    id: "1",
    title: "Heavy Metal magazine best ilustrators",
    content: "Richard Corben and Moebius are probably the best two",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        beer: 0,
    }
},{id: "2", 
title: "Richard's Corben color technique",
content: "I think I've finally discovered what technique Corben used to use!",
date: sub(new Date(), {minutes: 5}).toISOString(),
reactions: {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    beer: 0,
}
}]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        date : new Date().toISOString(),
                        content,
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            beer: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost){
                existingPost.reactions[reaction]++
            }
        } 
    }
})

export const { postAdded , reactionAdded} = postSlice.actions

export const AllPosts = state => state.posts

export default postSlice.reducer