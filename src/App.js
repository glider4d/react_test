import React from 'react';
import Header  from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
// import axios from 'axios';
//  import * as axios2 from "https://unpkg.com/axios@1.6.7/dist/axios.min.js";


const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    axios = {}
    constructor(props) {
        super(props)
        console.log('constructor')
        let axios = window.getAxios()
        this.axios = axios

        this.state = {users : []}
        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data.map(it => ({id : it.id, 
                                              firstname : it.first_name, 
                                              lastname : it.last_name, 
                                              isHappy : true, 
                                              bio: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam reprehenderit!',
                                              age: 12
                                            }))
                                        })
        }).catch((error) => {
            this.setState = {users : [
                    {
                        id : 1,
                        firstname: 'Bob',
                        lastname: 'Marley',
                        bio: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam reprehenderit!',
                        age: 40,
                        isHappy: true
                    },
                    {
                        id : 2,
                        firstname: 'John',
                        lastname: 'Doe',
                        bio: '    Lorem wodowekf  ipsum dolor sit amet consectetur, adipisicing elit. Totam reprehenderit!',
                        age: 22,
                        isHappy: false
                    },
                ]
            }            
        })
        
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
        // 

    }
    
    render() {
        return (
            <div>
                <Header title="Users list"/>   
                <main>
                    <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>
        )
    }

    editUser(user) {
        let allUsers = this.state.users        
        allUsers[allUsers.findIndex(o=>o.id == user.id)] = user;
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    addUser(user) {
        const id = Math.max(...(this.state.users.map((o)=>(o.id)))) + 1;
        this.setState({users: [...this.state.users, {id,...user}]})
//        const id = Math.max(...);
        // console.log(id)
    }

    deleteUser(id) {
        this.setState({users: this.state.users.filter( o => o.id != id)})
    }
    
}

export default App