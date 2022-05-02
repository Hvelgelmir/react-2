import React, {useEffect, useState} from 'react';
import {jsonService} from "./User.service";

const Posts = ({userId}) => {

    console.log(userId)

    const [posts, setPosts] = useState([])

    useEffect(() => {jsonService.getPost(userId)
            .then(value => setPosts(value))
    }, [userId])


    return (
        <div>
            {posts.map(value => <div key={value.id}>Id: {value.id}<br/>User Id: {value.userId}<br/>Title: {value.title}<br/>Body: {value.body}<hr/></div>)}
        </div>
    );
};

export default Posts;