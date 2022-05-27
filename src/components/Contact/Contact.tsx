import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

interface ContactProps {
  isDark: boolean;
}

export function Contact(props: ContactProps){

  return(
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <a className="contacts__button" href="mailto:armandas.bark@gmail.com">
          <img src={emailIcon} alt="Email" />
          <div className="contacts__text">armandas.bark@gmail.com</div>
        </a>
        <a  className="contacts__button" href="tel:+447914603504">
          <img src={phoneIcon} alt="Email" />
          <div className="contacts__text" >+44 7914 603 504</div>
        </a>  
      </div>
      <Form isDark={props.isDark} />
    </Container>
  )
}