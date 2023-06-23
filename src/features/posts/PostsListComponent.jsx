import React from 'react'
import { useSelector } from 'react-redux'
import { PostAuthorComponent } from './PostAuthorComponent'
import { AllPosts } from './postsSlice'
import { ReactionButtonsComponent } from './ReactionButtonsComponent'
import { TimeAgoComponent } from './TimeAgoComponent'

export const PostsListComponent = () => {

    const posts = useSelector(AllPosts)

    const newPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = newPosts.map(post => {
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <PostAuthorComponent userId={post.userId}/>
            <TimeAgoComponent date={post.date}/>
            <ReactionButtonsComponent post={post}/>
        </article>
    })

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}
