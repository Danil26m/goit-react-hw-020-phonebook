import { Component } from "react"
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
let index = false;
let k = 0;
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }
  nameContact =(event)=>{
    
    event.preventDefault();
    // this.state.name = event.target['name'].value;
   
    // this.state.number = event.target['number'].value;
   
        
        this.state.contacts.map((mi)=>{
        if (mi.namePhone.includes(event.target['name'].value)) {
          return index = true
        }
        else {
          return index = false
        }
        
      })
      if (!index) {
        this.setState({name: event.target['name'].value})
        this.setState({name: event.target['number'].value})
        this.setState((prev) => ({
          contacts : [...prev.contacts,{id: k++,namePhone: this.state.name, numberPhone: this.state.number}]
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
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Form submit={this.nameContact} />
      {this.state.contacts.length?
      <Contacts cont={this.state} />
      :""}
      
    </div>
    
  );
  }
  
};
export default App;