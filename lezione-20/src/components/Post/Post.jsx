import { useReducer, useState } from "react";




//   const [post, setPost] = useState(
//     {
//     id: crypto.randomUUID(),
//     imgUrl: "",
//     description: "",
//     like: false,
//     favorite: false,
//   }
//   );

//   function handleClickSend() {
//     alert("stai inviado il post ad un* amic*...");
//   }

//   function handleclickLike() {
//     setPost({ ...post, like: !post.like });
//   }

//   function handleClickFavourite() {
//     setPost({ ...post, favorite: !post.favorite });
//   }

//   function handleClickComment() {
//     alert("stai commentando il post");
//   }

export default function Post() {

    const initialState = {
    id: crypto.randomUUID(),
    imgUrl: "data:image/jpeg;base64,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",
    description: "Una bella giornata in montagna",
    like: false,
    favorite: false,
  }

function postReducer(state, action){

    switch(action.type){
        case 'LIKE_POST':{
            return {
                ...state, like:!state.like
            }
        }
         case 'FAVORITE_POST':{
            return{
                ...state, favorite:!state.favorite
            }
        }
         case 'SEND_POST':{
            alert("stai inviado il post ad un* amic*...");
            return state;
        }
         case 'COMMENT_POST':{
            alert("stai commentando il post");
            return state;
        }
        default:{
            throw new Error(`ERRORE GESTITO: ${action.type} non riconosciuto`)
        }
    }
}


// va siempre despues de crear la funcion 
  const[state,dispatch] = useReducer(postReducer,initialState)

  return (
    <>
      <div className="post">
        <img
          src={state.imgUrl}
          alt="imagine di motagna"
        />
        <p>{state.description}</p>
        <button onClick={()=>dispatch({type:'LIKE_POST'})}>{state.like ? "💖" : "💌"}</button>
        <button onClick={()=>dispatch({type:'FAVORITE_POST'})}>
          {state.favorite ? "rimuovi" : "preferite"}
        </button>
        <button onClick={()=>dispatch({type:'SEND_POST'})}>invia</button>

      
        <hr />
        <br />

        <input type="text" name="" id="" />
        <br />
        <br /> 
        <button onClick={()=> dispatch({type:'COMMENT_POST'})}>Comenta</button>
      </div>
    </>
  );
}
