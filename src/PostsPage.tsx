import { useEffect, useState } from "react";

type Post = {
    userid: number,
    id: number,
    title: string,
    body: string

}
const PostsPage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const getPost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resPost = await res.json();
        setPosts(resPost) 
    }
    useEffect(() => {
        getPost()    // when the app render
        console.log(posts);  
    }, [])

    return (
        <>
        <section>
            <div>Post Page</div>
            {
                posts.map((postItem) => {
                    return <div key={postItem.id}>
                        <h1 className="text-xl, font-bold py-4">{postItem.title}</h1>
                        <p>{postItem.body}</p>
                    </div>
                })
            }
            
        </section>
    </>
    )
}

export default PostsPage;