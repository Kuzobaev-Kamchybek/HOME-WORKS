import { comment } from '../data/data'
import Comment from './Comment'
import './CommentList.css'

//КЛЮЧКА id аркылуу бердим.Id ге счетчик аркылуу.

 let counter = 0;
 let counterIncrement = () => counter++

function CommentList() {
   return (
      <div className='Comment-List'>
         {comment.map((el) => {
            el.id = counterIncrement()
            return <Comment
                key={el.id}
               author={el.author}
               date={el.date}
               text={el.text}
            />
         })}
         {console.log(comment)}
      </div>
     )
}
export default CommentList;