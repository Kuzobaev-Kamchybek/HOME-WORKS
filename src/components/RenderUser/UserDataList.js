import './UserDataList.css'


function UserDataList(props) { 
     


     return ( 
        <div className="DataList">
            <h1>{props.name}</h1>
            <h1>{props.date}</h1>
        </div>
     )
}
export default UserDataList;