import React, { useState } from 'react';
import { FaCode, FaFacebook, FaHeart, FaInstagram, FaYoutube } from 'react-icons/fa';

const getCookie = (name: string) => {
  if (document.cookie) {
      const cookies = document.cookie.split(';');
      for (const c of cookies) {
        const cookie = c.trim();
        if (cookie.substring(0, name.length + 1) === `${name}=`) {
          return decodeURIComponent(cookie.substring(name.length + 1));
        }
      }
  }
  return '';
};

type InputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const updateName: InputHandler = event => setName(event.target.value);
  const [email, setEmail] = useState('');
  const updateEmail: InputHandler = event => setEmail(event.target.value);
  const [message, setMessage] = useState('');
  const updateMessage: InputHandler = event => setMessage(event.target.value);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    };
    const timeout = setTimeout(() => {
      setLoading(true);
      setError(false);
    }, 100);
    return fetch('/contact', {
      body: JSON.stringify({ name, email, message }),
      headers,
      method: 'POST'
    }).then(res => {
      clearTimeout(timeout);
      setLoading(false);
      setError(!res.ok);
      setSent(res.ok);
    });
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
          >
            {' '}Jacob Peng{' '}
          </a>
          &amp;
          <a
            href="http://vincenthuang.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}Chenzhun Huang
          </a>
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
            placeholder="Your Name*"
          />
          <label>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={updateEmail}
            placeholder="Your Email*"
          />
          <textarea
            value={message}
            onChange={updateMessage}
            placeholder="Your Message*"
          />
          <input
            type="submit"
            value={
              loading
                ? 'Loading...'
                : sent
                  ? 'Sent! We\'ll be in touch 😊'
                  : 'Submit'
            }
            disabled={loading || sent || !(name && email && message)}
          />
          {error && (
            <div className="alert alert-danger">
              Oh no, we couldn&apos;t send your message! Email us at
              <strong>
                {' '}info.effusion@gmail.com{' '}
              </strong>
              and we&apos;ll get back to you as soon as possible.
            </div>
          )}
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
