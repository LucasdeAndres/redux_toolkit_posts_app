import { useSelector } from "react-redux"
import { allUsers } from "../users/userSlice"

export const PostAuthorComponent = ({ userId }) => {

    const users = useSelector(allUsers)

    const author = users.find(user => user.id === userId)

  return (
    <span>by {author ? author : "Unknown author"}</span>
  )
}
