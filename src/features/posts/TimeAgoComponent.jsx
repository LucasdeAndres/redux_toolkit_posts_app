
import { parseISO, formatDistanceToNow } from 'date-fns'
import React from 'react'

export const TimeAgoComponent = ({date}) => {
    let timeAgo = ""
    if(date){
        const dateTwo = parseISO(date)
        const timePeriod = formatDistanceToNow(dateTwo)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <span> {timeAgo}</span>
  )
}
