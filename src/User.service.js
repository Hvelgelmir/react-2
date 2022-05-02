import {urls} from "./config/urls";

const getAllUsers = ()=> {
    return fetch(urls.users).then(value => value.json())
}

const getUser = (id)=> {
    return fetch(`${urls.users}/${id}`).then(value => value.json())
}

const getAllPosts = ()=> {
    return fetch(urls.posts).then(value => value.json())
}

const getPost = (id)=> {
    return fetch(`${urls.users}/${id}/posts`).then(value => value.json())
}

const getAllComments = ()=> {
    return fetch(urls.comments).then(value => value.json())
}

export const jsonService = {
    getAllUsers,
    getUser,
    getAllPosts,
    getPost,
    getAllComments
}

