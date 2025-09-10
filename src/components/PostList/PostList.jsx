import { PostInfo } from "../PostInfo/PostInfo";

export const PostList = ({ post }) => (
  <section className="App">
    {post.map((r) => (
       <PostInfo post={r} key={post.id}/>
    ))}
  </section>
);


  