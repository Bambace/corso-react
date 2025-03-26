import "./App.css";
import CardContact from "./components/CardContact";
import Button from "./components/Button";
import CardContactDetails from "./components/CardContactDetails";
import CardContactEdit from "./components/CardContactEdit";
import CardContactAdd from "./components/CardContactAdd";
function App() {
  const contacts = [
    {
      id: 1,
      first_name: "John",
      last_name: "Smith",
      work: "impiegato",
      phone: "123456789",
      email: "j.smith@gmail.com",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      first_name: "Maria",
      last_name: "Rossi",
      work: "insegnante",
      phone: "987654321",
      email: "m.rossi@gmail.com",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      first_name: "Luigi",
      last_name: "Bianchi",
      work: "ingegnere",
      phone: "456789123",
      email: "l.bianchi@gmail.com",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      first_name: "Anna",
      last_name: "Verdi",
      work: "medico",
      phone: "321654987",
      email: "a.verdi@gmail.com",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      first_name: "Giuseppe",
      last_name: "Neri",
      work: "avvocato",
      phone: "654123987",
      email: "g.neri@gmail.com",
      image:
        "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      first_name: "Laura",
      last_name: "Gialli",
      work: "architetto",
      phone: "789123456",
      email: "l.gialli@gmail.com",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <>
      {/* {contacts.map((contact) => (
        <CardContact key={contact.id} contact={contact}>
          <Button type="edit" nome={contact.first_name} />
          <Button type="delete" nome={contact.first_name} />
        </CardContact>
      ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type="add" />
      </div>  */}

      {/* <CardContactDetails contact={contacts[0]}/>  */}

      {/* <CardContactEdit contact={contacts[0]}/> */}
      <CardContactAdd contact={contacts[8]} />
    </>
  );
}

export default App;
