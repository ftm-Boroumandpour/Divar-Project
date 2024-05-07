import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../../services/user"
import Loader from "../modules/Loader"
import { sp } from "../../utils/numbers"

import styles from "./Postlist.module.css"



function PostList() {

    const {data , isLoading} = useQuery(["my-post-list"] , getPosts)
    console.log(data)
  return (
    <div className={styles.list}>
        {isLoading ? <Loader/> :(
            <>
            <h3>آگهی های شما</h3>
            {
                data.data.posts.map(post=>(
                    <div key={post._id} className={styles.post}>
                        <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
                        <div>
                            <p>{post.options.title}</p>
                            <sapn>{post.options.content}</sapn>
                        </div>
                        <div className={styles.price}>
                            <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                            <sapn>{sp(post.amount)}تومان</sapn>
                        </div>
                    </div>
                ))
            }
            </>
        )}
    </div>
  )
}

export default PostList