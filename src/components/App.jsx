import { Component } from "react"
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";

let index = false;
let k = 0;
class App extends Component {
  constructor(){
    super();
    this.state = {
    contacts: [],
  }
  }
  nameContact =(event)=>{
    const{name,number} = event;
        this.state.contacts.map((mi)=>{
        if (mi.namePhone.includes(name)) {
          return index = true
        }
        else {
          return index = false
        }
        
      })
      if (!index) {
        this.setState((prev) => ({
          contacts : [...prev.contacts,{id: k++,namePhone: name, numberPhone:number}]
        }))
      }
      else {
        alert(`${this.state.contacts[this.state.contacts.length-1].namePhone} is already contact`);
      }
     
    
  }
  render(){
    return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <Form submit={this.nameContact}/>

  <h2>Contacts</h2>
  {this.state.contacts.length?
      <Contacts cont={this.state} />
      :""}
    </div>
    
  );
  }
  
};
export default App;