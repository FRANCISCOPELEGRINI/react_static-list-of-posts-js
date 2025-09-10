import { PostInfo } from "../PostInfo/PostInfo";

export const PostList = ({ posts }) => (
  <section className="App">
    {posts.map((r) => (
       <PostInfo post={r} key={posts.id}/>
    ))}
  </section>
);


  