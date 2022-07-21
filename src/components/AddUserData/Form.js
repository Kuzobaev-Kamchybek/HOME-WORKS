import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [Name, setName] = useState('');


  function getNameHandler(event) {
    setName(event.target.value);
  }


  function submitHandler(event) {
    event.preventDefault();
    const userData = {
      name: Name
    };

    props.getData(userData);
  }

  return (
    <div>
      <form className="form">
        <input onChange={getNameHandler} type="text" input />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}
export default Form;
