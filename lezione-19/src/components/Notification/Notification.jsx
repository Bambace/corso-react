import { useReducer, useState } from "react"


export default function Notification() {

//const [notification, setNotification] = useState([]);
//const [countNotRead, setCountNotRead] = useState(0);

const initialState={notifications:[], countNotRead:0}
const [state, dispatch] = useReducer(notificationReducer,initialState)


function notificationReducer(state, action){
    switch(action.type){
        case "ADD_NEW" :{
            return{...state, countNotRead: state.countNotRead + 1, 
                notifications:[...state.notifications, 
                    {id:crypto.randomUUID(), title:`random notification ${Math.random()}`, read:false}
                ]}
        }

        case "READ_ALL": {
            const updateNotifications = state.notifications.map(n => ({...n, read:true}));
            return {
                ...state, 
                notifications:updateNotifications,
                countNotRead:0}
        }

        case "REMOVE_ ALL" :{
            return{...state,
                notifications:[],
                countNotRead:0
            }
        }

        default:{
            throw new Error('action type non gestita: ' + action.type)
        }
    }
}

// function handleClickReadAll(){
//     setCountNotRead(0);
//     setNotification(notification.map(n=>({...n, read:true})))
// }
// function handleClickAdd(){
//     setNotification([...notification, {id:crypto.randomUUID(), title:`random notification ${Math.random()}`, read:false}])
//     setCountNotRead(countNotRead => countNotRead +1);

// }

// function handleClickRemove(){
//     setCountNotRead(0);
//     setNotification([]);
// }

  return (
    <>

    <h3>Notifiche:</h3>
    <p>Non lette: {state.countNotRead}</p>

    <ul>
        {state.notifications.map(n=>(
            <li key={n.id}> {n.title} *** ({n.read ? 'letta' : ' non letta'})</li>
        ))}
    </ul>


     <button onClick={()=>dispatch({type:'READ_ALL'})}>segna tutte come lette</button> 
    <br />
    <button onClick={()=>dispatch({type:'ADD_NEW'})}>aggiungi notifica</button>

    <button onClick={()=>dispatch({type:'REMOVE_ ALL'})}>rimuove notifiche</button>
    </>
  )
}
