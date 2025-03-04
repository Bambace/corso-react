import "./CardContact.css";
import Button from "./Button";

export default function CardContactAdd({ contact }) {
  return (
    <>
      <div className="card-contact">
        <h2>
          <input
            type="text"
            //  value={contact.first_name + " " + contact.last_name}
          />
        </h2>
        <p style={{ marginBottom: "10px" }}>
          {" "}
          <input type="text" />
        </p>
        <div style={{ display: "flex" }}>
          <span className="material-symbols-outlined">phone_forwarded</span>
          <p style={{ marginLeft: "10px" }}>
            {" "}
            <input type="text" />
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <span className="material-symbols-outlined">mail</span>
          <p style={{ marginLeft: "10px" }}>
            {" "}
            <input type="text" />{" "}
          </p>
        </div>
        <img
          style={{ width: "100px", borderRadius: "50%", marginTop: "20px" }}
          src=""
          alt=""
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="add" />
        </div>{" "}
        
      </div>
    </>
  );
}
