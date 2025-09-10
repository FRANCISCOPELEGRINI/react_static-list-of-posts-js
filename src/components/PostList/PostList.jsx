import { PostInfo } from "../PostInfo/PostInfo";

export const PostList = ({ user }) => (
  <section className="App">
    {user.map((r) => (
       <PostInfo listausers={r} />
       
    ))}
  </section>
);


  