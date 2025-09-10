export const PostInfo = () => (
    <>
    <div className="PostInfo" key={post.id}>
        <div className="PostInfo__headepost">
          <h3 className="PostInfo__title">{post.title}</h3>

          <p>
             Posted by

            <UserInfo user={post.user}/>
          </p>
        </div>

        <p className="PostInfo__body">
          {post.body}
        </p>

        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    </>
)
