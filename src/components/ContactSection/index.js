import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  WrapperLeft,
  Title,
  NumberAndTel,
  Tel,
  Handset,
  Envelope,
  Telephone,
  Mail,
  Email,
  WrapperRight,
  YourEmail,
  Message,
  Button,
} from "./styled";

export const ContactSection = ({ sectionRef }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    const lastSumbissionTime = localStorage.getItem("lastSubmissionTime");
    const currentTime = new Date().getTime();

    const timeDifference = currentTime - lastSumbissionTime;
    if (lastSumbissionTime && timeDifference < 10 * 60 * 1000) {
      setCanSubmit(false);
    }
  });

  const handleSumbit = (e) => {
    e.preventDefault();

    if (!canSubmit) {
      return alert("Mozesz wysłać tylko jedną wiadomość na 10 minut! 🚨");
    }

    if (canSubmit) {
      const serviceID = "service_5221081";
      const templateID = "template_a8fvwkk";
      const publicKey = "2vXjEZ7Ggf557UNk3";

      const templateParams = {
        from_email: email,
        message: message,
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          alert("Wiadomość została wysłana! ✉", response);
          localStorage.setItem("lastSubmissionTime", new Date().getTime());
          setCanSubmit(false);
          setEmail("");
          setMessage("");
        })
        .catch((error) =>
          alert(
            "Bład podczas wysyłania wiadomości, spróbuj ponownie za kilka minut! 🚨",
            error
          )
        );
    }
  };

  return (
    <Container ref={sectionRef}>
      <WrapperLeft>
        <Title>Skontaktuj się z nami</Title>
        <NumberAndTel>
          <Tel>
            <Handset />
            <Telephone href="tel:+48509768781">+48 509 768 781</Telephone>
          </Tel>
          <Mail>
            <Envelope />
            <Email href="mailto:amperowski64@wp.pl">amperowski64@wp.pl</Email>
          </Mail>
        </NumberAndTel>
        <NumberAndTel>
          <Tel>
            <Handset />
            <Telephone href="tel:+48666900181">+48 666 900 181</Telephone>
          </Tel>
          <Mail>
            <Envelope />
            <Email href="mailto:wlodarski.dvy@gmail.pl">
              wlodarski.dvy@gmail.pl
            </Email>
          </Mail>
        </NumberAndTel>
      </WrapperLeft>
      <WrapperRight onSubmit={handleSumbit}>
        <YourEmail
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Message
          placeholder="Wiadomość..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">
          <span>Wyślij</span>
        </Button>
      </WrapperRight>
    </Container>
  );
};
