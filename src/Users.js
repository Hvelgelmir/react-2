import React, {useEffect, useState} from 'react';
import {jsonService} from "./User.service";


const Users = ({getUserId}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {jsonService.getAllUsers()
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            {users.map(value => <div key={value.id}>Id: {value.id}<br/>Name: {value.name}<br/>Username: {value.username}<br/>
                <button onClick={() => getUserId(value.id)}>Posts</button><hr/>
            </div>)}

        </div>
    );
};

export default Users;