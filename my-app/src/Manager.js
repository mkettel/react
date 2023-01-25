
// Manager Component

export const Manager = (props) => {
  return (
    <div className='manager'>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  )
}
