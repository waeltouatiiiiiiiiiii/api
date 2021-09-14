import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


function UserList() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUserList(res.data);
        })
    });
    const list = userList.map((user) =>
        <div>
            <p>id : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>UserName :  {user.usernamr}</p>
            <p>E-mail :  {user.email}</p>
            <hr></hr>
        </div>
    );
    return (<div>{list}</div>)
}

export default UserList
