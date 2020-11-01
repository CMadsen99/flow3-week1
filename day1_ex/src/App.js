import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import person, { males, females} from "./file2";
import MultiWelcome from "./file3";

function App() {
  const { firstName, email } = person;

  const persons = [...males, ...females];
  console.log(persons)

  const persons2 = [
    ...males, 
    "Kurt", 
    "Helle", 
    ...females, 
    "Tina"
  ];
  console.log(persons2)

  const personV2 = {
    ...person, 
    friends: [...persons], 
    phone: 123456
  };
  console.log(personV2)

  return (
    <div>
      <h2>Ex1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>

      <h2>Ex2</h2>
      <p>{firstName}, {email}</p>

      <h2>Ex3</h2>
      <MultiWelcome />
      
    </div >
    
  )
}

export default App;
