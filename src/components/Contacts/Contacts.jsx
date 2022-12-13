import { Component } from "react";
import  PropTypes  from "prop-types";
class Contacts extends Component{ 
    state={
        filter: '',
    }
addTar=(even)=>{
    const r = even.target.value;
    this.setState({filter: r});
}

filtered=()=>{
    const{contacts} = this.props.cont; 
        if (this.state.filter) {
         return(
                contacts.map((m,j)=>
                m.namePhone.toLowerCase().includes(this.state.filter.toLowerCase())?
                <li key={j}>
                    <p>{m.namePhone}: {m.numberPhone}</p>
                    <button id={j} type="button" onClick={this.delete} >delete</button>
                </li> :'')
                   
            ); 
    }  else{
        return(
            contacts.map((m,j)=> <li key={j}>
            <p>{m.namePhone}: {m.numberPhone}</p>
            <button id={j} type="button" onClick={this.delete} >delete</button>
        </li>)
        )
    }   
    
           
}
delete=(even)=>{
    const{contacts} = this.props.cont;
    this.setState({contacts : contacts.filter((cont)=> cont.id !== even.target.id)})
    contacts.splice(even.target.id);
}

render(){
    return(
        <div>
            <ul>
                { this.filtered()}
            </ul>
            <h2>Find firs name</h2>
           <input type="text" 
            name="firstName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.addTar}/>
        </div>
    )
}
}
Contacts.prop = {
  cont: PropTypes.shape().isRequired,
}
export default Contacts;