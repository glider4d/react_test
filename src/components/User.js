import React from "react";
import AddUser from "./AddUser";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return <div className="user">
                    <i className="delete-icon fa-regular fa-circle-xmark"  onClick={() => this.props.onDelete(this.user.id)} ></i>
                    <i className="edit-icon fa-solid fa-hammer" onClick={() => this.setState({editForm: !this.state.editForm})}></i>

                    <h3>{this.user.firstname} {this.user.lastname}</h3>
                    <p>{this.user.bio}</p>
                    <b>{this.user.isHappy ? "Happy :)" : "Not good (:" }</b>
                    {/* <div class="link fab fa-youtube"></div> */}

                    {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}

                </div>
    }

    
}

export default User