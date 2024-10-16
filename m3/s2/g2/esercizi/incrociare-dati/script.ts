import { iPost } from "./interfaces/post"
import { iUser } from "./interfaces/user"


const postUrl = 'https://jsonplaceholder.typicode.com/posts'
const userUrl = 'https://jsonplaceholder.typicode.com/users'

async function call(){

    let [posts, users] = await Promise.all([
        fetch(postUrl).then(res => <Promise<iPost[]>> res.json()),
        fetch(userUrl).then(res => <Promise<iUser[]>> res.json())
    ])

    posts = posts.map(p => {

        const foundUser = users.find(u => u.id === p.userId)
        
        if(!foundUser) return p

        return {
            ...p,
            username: foundUser.username
        }

    })

    console.log(posts);
    

}

call()