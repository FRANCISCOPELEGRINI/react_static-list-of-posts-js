export const UserInfo = ({ user }) => (
    <>
    <a className="UseuserInfo" huseref= {`mailto:${user.email}`} >
              {user.name}
        </a>
    </>
)
