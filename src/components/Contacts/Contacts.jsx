import { Component } from "react";

class Contacts extends Component{ 
    stat={
        filter: '',
    }
addTar=(even)=>{
   
    
    const r = even.target.value;
    this.stat.filter = r;
    this.setStat({filter: r});
}

filtered=()=>{
    const{contacts} = this.props.cont; 
        if (this.stat.filter) {
         return(
                contacts.map((m,j)=>
                m.namePhone.includes(this.stat.filter)?
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
            <h2>Contacts</h2>
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
export default Contacts;