import UserInfo from "./UserInfo";
import CommentWrapper from './CommentWrapper'

const Comment = (props) => {

     return (
          <div className="Comment">
               <UserInfo author={props.author} />
               <CommentWrapper>
                    <div className='Comment-text'>{props.text}</div>
                    <div className='Comment-date'>{props.date.toISOString().slice(0, 10)}</div>
               </CommentWrapper>


          </div>
     )
}
export default Comment;