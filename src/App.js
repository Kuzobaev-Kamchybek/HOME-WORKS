import './App.css';
import Comment from './Components/Comment';
import { comment } from './data/Data'


function App() {
  return (
    <Comment
      author={comment.author}
      date={comment.date}
      text={comment.text}
    />
  );
}
export default App;
