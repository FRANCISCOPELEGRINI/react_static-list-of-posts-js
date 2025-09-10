export const PostInfo = () => (
    <>
    <div className="PostInfo" key={listausers.id}>
        <div className="PostInfo__headelistausers">
          <h3 className="PostInfo__title">{listausers.title}</h3>

          <p>
             Posted by

            <UserInfo user={listausers.user}/>
          </p>
        </div>

        <p className="PostInfo__body">
          {listausers.body}
        </p>

        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    </>
)
