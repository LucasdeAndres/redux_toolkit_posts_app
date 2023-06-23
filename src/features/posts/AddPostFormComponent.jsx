
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../users/userSlice'
import { postAdded } from './postsSlice'

export const AddPostFormComponent = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onContentChange = (e) => {
        setContent(e.target.value)
    }

    const onUsersChange = (e) => {
        setUserId(e.target.value)
    }

    const dispatch = useDispatch()

    const addPostFunction = () => {
        if(title && content){
            dispatch(postAdded(title, content, userId))

            setTitle("")
            setContent("")
        }
    }

    const canSave = title && content && userId

    const users = useSelector(allUsers)

    const userOptions =
        users.map(user =>{
            return <option key={user.id} value={user.id}>
                {user.name}
            </option>
        })
    


  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input
                type="text"
                id='postTitle'
                name="postTitle"
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor='postAuthor'>Author:</label>
            <select id='postAuthor' value={userId} onChange={onUsersChange}>
                <option value=""></option>
                {userOptions}
            </select>
            <label htmlFor='postContent'>Content:</label>
            <textarea
                id='postContent'
                name="postContent"
                value={content}
                onChange={onContentChange}
            />
            <button onClick={addPostFunction} type='button' disabled={!canSave}>Save Post</button>
        </form>
    </section>
  )
}
