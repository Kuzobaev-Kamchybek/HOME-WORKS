import './CommentWrapper.css'


function CommentWrapper(props) {
    return (
        <div className='comment-wrapper'>
            {props.children}
        </div>
    )
}
export default CommentWrapper;