export default function header() {

function handleClickBtn(e){
    e.stopPropagation();
    alert('button cliccato')
}

  return (
   <>
   <section onClick={()=> alert('section')}>
    <div onClick={()=>alert('div padre')} style={{backgroundColor:'red'}}>
    <p>
        Lorem ipsum dolor sit amet.
    </p>

    <button onClick={handleClickBtn}>
        Cliccami
    </button>
    </div>

   </section>
   </>
  )


}
