import Avatar from "./Avatar";
import './UserInfo.css'

function UserInfo(props) { 
    return (
        <div className="UserInfo">
          <Avatar user={props.author}/>
          <div className='UserInfo-name'>{props.author.name}</div>
        </div>
    )
}
export default UserInfo;