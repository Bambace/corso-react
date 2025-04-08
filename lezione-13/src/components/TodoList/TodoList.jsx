import './TodoList.css'
export default function TodoList({children}) {
  return (
    <>
      <div className='todos'>

        {children}

      </div>

    </>
  )
}
