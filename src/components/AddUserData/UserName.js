import Form from "./Form";

const UserName = (props) => {
  
  function getData(data) {
    props.getDataInUserName(data);
  }

  return (
    <div>
      <Form getData={getData} />
    </div>
  );
};
export default UserName;
