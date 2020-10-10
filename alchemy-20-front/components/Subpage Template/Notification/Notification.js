// import { useState } from "react";
import { StyledNotification } from './Notification.styled'

export default function Notification(props) {
    // const [isOpen, setOpen] = useState(false);
  
    return (
      <StyledNotification>
        {/* <a onClick={() => setOpen(!isOpen)}> */}
          <img
            className="notification_img"
            src="https://i.imgur.com/vOcSbox.png"
            alt="Notifications"
          ></img>
        {/* </a> */}
        {props.children}
      </StyledNotification>
    );
  }