import { StyledPerson } from "./TeamPerson.styled.js";

export default function TeamPerson(props) {
  let position, phone;
  if (props.isHead) {
    position = (
      <p
        style={{
          fontSize: "0.8em",
          color: "#ecc82c",
          margin: "0",
          textAlign: "center",
        }}
      >
        {props.title}
      </p>
    );

    phone = (
      <p
        style={{
          fontSize: "0.8em",
          color: "#ecc82c",
          margin: "0",
          textAlign: "center",
        }}
      >
        {props.phno}
      </p>
    );
  }
  return (
    <StyledPerson head={props.isHead}>
      <img src={props.img} alt={props.alt} className="image" />
      <p className="name">{props.name}</p>
      {position}
      {phone}
    </StyledPerson>
  );
}