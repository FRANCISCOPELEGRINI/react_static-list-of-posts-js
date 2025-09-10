export const UserInfo = ({ user }) => (
    <>
    <a className="UseuserInfo" href= {`mailto:${user.email}`} >
              {user.name}
        </a>
    </>
)
