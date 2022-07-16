
import UserInfo from "./UserInfo";
import CommentWrapper from './CommentWrapper'

const Comment = (props) => {

   return(
    <div className="Comment">
        <UserInfo author = {props.author}/>
        <CommentWrapper 
        text={props.text}
        date={props.date} 
         />

       
    </div>
     ) 
}
export default Comment;