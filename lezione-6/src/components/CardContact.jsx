import "./CardContact.css";

export default function CardContact({contact, children}) {
  return (
  <>
  <div className="card-contact" onClick={()=>alert('stai aprendo il contatto: ' + contact.firts_name + ' ' + contact.last_name)}>
    <div className="btns-container">{children}</div>

    <h2>
        {contact.firts_name} {contact.last_name}
    </h2>

    <p style={{marginBottom:'10px'}}>
        {contact.work}
    </p>

    <div style={{display:'flex'}} >
        <span className="material-simbols-outlined">phone_forwarded</span>
        <p style={{marginLeft:'10px'}}> {contact.phone}</p>
    </div>

    <div style={{display:'flex'}}>
    <span className="material-symbols-outlined">mail</span>
    <p style={{marginLeft:'10px'}}>{contact.email}</p> 
    </div>
  </div>
  
  </>
  )
}
