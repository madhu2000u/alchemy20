import { StyledPerson } from "./TeamPerson.styled.js";

export default function TeamPerson(props) {
    let position
    if(props.isHead){
        position = <p style={{fontSize: '0.8em', color: '#ecc82c', margin: '0', textAlign: 'center'}}>{props.title}</p>
    }
  return (
    <StyledPerson head={props.isHead}>
      <img src={props.img} alt={props.alt} className='image' />
      <p className='name'>{props.name}</p>
      {position}
    </StyledPerson>
  );
}
