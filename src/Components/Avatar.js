function Avatar(props) {
    console.log(props)
    return ( 
       <img 
       className="Avatar"
       src={props.user.avatarUrl}
       alt={props.user.name}       
       />
    )
}
export default Avatar;