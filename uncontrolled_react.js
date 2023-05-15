import React, {component} from 'react';
class Uncontrolled extends React.component{
constructor(props)
{
    super(props);
    this.updateSubmit=this.updateSubmit.bind(this);
    this.input=React.createRef();

}
updateSubmit(event)
{
    alert("you have entered the name and collegename successfully");
    event.preventDefault();
}
render ()
{
    return (
        <form onSubmit={this.updateSubmit}>
            <h1>Uncontrolled form</h1>
            <label>NAME:</label>
            <input type="text" ref={this.input}/><br/>
            <label>College Name:</label>
            <input type="text" ref={this.input}  />
            <input type="submit" value="submit"/>
                  </form>    );
}
}