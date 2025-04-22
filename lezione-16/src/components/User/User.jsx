

export default function User({user}) {
  return (
    <>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <hr />
    </>
  )
}
