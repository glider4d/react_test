import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render(){
        return (
            <form ref={(el) => this.myForm = el}>  { /*for form ref*/ }
                <input placeholder="first name" onChange={(e) => {this.setState({firstname: e.target.value})}} />
                <input placeholder="second name" onChange={(e) => {this.setState({lastname: e.target.value})}} />
                <textarea placeholder="bio" onChange={(e) => {this.setState({bio: e.target.value})}} ></textarea>
                <input placeholder="age" onChange={(e) => {this.setState({age: e.target.value})}} />
                <label htmlFor="isHappy">Is Happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => {this.setState({isHappy: e.target.checked})}} />
                <button type="button" onClick={()=>
                {
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    this.myForm.reset()//for clear form
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                        // this.userAdd.firstname = this.props.user.firstname
                        // this.userAdd.lastname = this.props.user.lastname
                        // this.userAdd.bio = this.props.user.bio
                        // this.userAdd.age = this.props.user.age
                        // this.userAdd.isHappy = this.props.user.isHappy

                    }
                    this.props.onAdd(this.userAdd)}}>Add new</button>
            </form>
        )
    }
}


export default AddUser