import { useState } from "react";
import "./App.css";
import UserName from "./components/AddUserData/UserName";
import UserDataList from "./components/RenderUser/UserDataList";

// LIFTING UP - Form.js компонентинен UserName.js  компонентине  UserName.js тен App.js ке 
// данныйды алып барганда колдонулду.

let renderData = [
  
];

function App() {
  const [userData, setUserData] = useState(renderData);

  function getDataInUserNameJs(dataInUserNameJs) {
     
    setUserData([...userData, dataInUserNameJs]);
    console.log(userData)
}
  
  let date = new Date().toISOString().slice(0,10) //Алгач Date переменныйга сакталды.
 


  return (
    <div className="App">
      <UserName getDataInUserName={getDataInUserNameJs} />
      
      {userData.map((element,index) => {
         element.date = date  //DATE ушул жерде рендер болуп жатканда автоматически кошулат
         element.id = index;
       
        return (
          <UserDataList

            name={element.name}
            date={element.date}
          />
        );
      })}
    </div>
  );
}

export default App;
