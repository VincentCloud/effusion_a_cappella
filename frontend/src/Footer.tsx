import React, { useState } from 'react';
import { FaCode, FaFacebook, FaHeart, FaInstagram, FaYoutube } from 'react-icons/fa';

type InputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const updateName: InputHandler = event => setName(event.target.value);
  const [email, setEmail] = useState('');
  const updateEmail: InputHandler = event => setEmail(event.target.value);
  const [message, setMessage] = useState('');
  const updateMessage: InputHandler = event => setMessage(event.target.value);
  const handleSubmit: React.FormEventHandler = e => {
    console.log(name, email, message);
    e.preventDefault();
  };

  return (
    <footer className="App-footer">
      <div className="App-footer-icons">
        <div className="App-footer-copyright">
          &copy; Effusion A Cappella {new Date().getFullYear()}
        </div>
        <div className="App-footer-social">
          <a
            href="https://facebook.com/effusionacappella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/effusionacappella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUBMTjJ6AYXOX2kY0nYm5gA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="App-footer-credit">
          <FaCode /> with <FaHeart /> by
          <a
            href="https://pengmai.github.io"
            target="_blank"
            rel="noopener noreferrer"
          > Jacob Peng </a>
          &amp; 
          <a 
          href="http://vincenthuang.info/"
          target="_blank"
          rel="noopener noreferrer"
          > Chenzhun Huang </a>
        </div>
      </div>
      <div className="contact">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={updateName}
            placeholder="Name*"
          />
          <label>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={updateEmail}
            placeholder="Email*"
          />
          <textarea value={message} onChange={updateMessage} placeholder="Message*"/>
          <input
            type="submit"
            value="Submit"
            disabled={!(name && email && message)}
          />
        </form>
      </div>
      <div className="contact-blurb">
        Effusion A Cappella has performed for birthdays, weddings, dinners, high
        school concerts, charity events, and many other celebrations. If you are
        interested in booking us for an event, please send us a message with the
        date, time, length of performance, and a brief explanation of the event.
      </div>
    </footer>
  );
};

export default Footer;
