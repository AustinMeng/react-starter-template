import React, {useState} from "react"
import axios from "axios"

export default function Users(){
    const API_URL = "https://api.github.com/users";

    const [users, setUsers] = useState([]);

    function fetchUsers(){
        console.log("....fetching users.....");
        //promise
        axios
            .get(API_URL)
            .then((response) => {
                console.log("fetch succeed")
                console.log(response)
                setUsers(response.data);
            })
            .catch((err) => {
                console.log("fetch failed")
                console.log(err);
            });
    }

    return (
        <div>
            <h3>Users</h3>
            <hr />
            <button onClick={fetchUsers}>Fetch Users</button>
            <h5>User Counts: {users.length}</h5>
            <div className="row">
                {
                   users.map((user, i) => {
                       return (
                            <div className="col-md-3" key={i}>
                                <div className="card">
                                    <img className="card-img-top" src={user.avatar_url} alt=""></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{user.login}</h5>
                                        <p className="card-text">Github User</p>
                                        <a className="btn btn-primary" href={user.html_url} target="_blank">Go Vist HomePage</a>
                                    </div>
                                </div>
                            </div>
                       )
                   }) 
                }
            </div>
        </div>
    )
}
