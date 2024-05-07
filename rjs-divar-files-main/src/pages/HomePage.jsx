import { useQuery } from "@tanstack/react-query"
import Main from "../components/templates/Main"
import Sidebar from "../components/templates/Sidebar"
import { getCategory } from "../services/admin"
import { getAllPosts } from "../services/user"
import Loader from "../components/modules/Loader"


function HomePage() {
  const {data:categories , isLoading:categoryLoading }=useQuery(["get-cateories"],getCategory)
  const {data:posts , isLoading:postLoading }=useQuery(["posts-list"],getAllPosts )
  return (
    <>
    {categoryLoading || postLoading ? (<Loader/>):(
      <div style={{display:"flex"}}>
      <Sidebar categories={categories} />
      <Main  posts={posts}/>
    </div>
    )}
    </>
  )
}

export default HomePage