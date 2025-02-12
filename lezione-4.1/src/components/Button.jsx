import './Button.css';

export default function Button({children, libroTitolo}){

    // function handleClick(){
    //     alert(`stai comprando il libro ${libroID.id} `)
    //   }

    function handleClick(e) {
        e.stopPropagation();
        if (libroTitolo !== undefined) {
            alert(`Stai comprando il libro : ${libroTitolo}`);
        }
    }
    return(
        <>
            <button
            onClick={handleClick}>{children}</button>
            
        </>
    )
}