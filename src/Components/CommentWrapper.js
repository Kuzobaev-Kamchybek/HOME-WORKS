import './CommentWrapper.css'


function CommentWrapper(props) { 
    return ( 
          <div className='comment-wrapper'>
          <div className='Comment-text'>{props.text}</div>
          <div className='Comment-date'>{props.date.toISOString().slice(0,10)}</div>
          </div>
         )
}
export default CommentWrapper;