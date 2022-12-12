import { Component } from"react";
// import  nanoid from "nanoid";
class Form extends Component{
render(){
    return(
        <div>
            <form action="" onSubmit={this.props.submit}>
                <h2>Name</h2>
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <h2>Number</h2>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <br/>
                <button type="submit">wwq</button>
            </form>
            
        </div>
    );
}
}
export default Form;