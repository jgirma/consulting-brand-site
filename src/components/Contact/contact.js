import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

const Contact = ({ title, subtitle, id }) => {
  return (
    <div id={id}>
    <ContactWrapper>
      <div className="content-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>

      <p>Call us: <a href="tel: +14036819732">(403) 681-9732</a></p>


        <h3>Send us an email:</h3>
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
          <div className="input-area">
            <input
              type="text"
              name="name"
              aria-label="Name"
              required
              autoComplete="off"
            />
            <label className="label-name" for="name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="input-area">
            <input
              type="email"
              name="email"
              aria-label="Email"
              required
              autoComplete="off"
            />
            <label className="label-name" for="email">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="input-area">
            <textarea
              type="text"
              name="message"
              rows="5"
              required
              autoComplete="off"
              aria-label="Message"
            />
            <label className="label-name" for="message">
              <span className="content-name">Message</span>
            </label>
          </div>

          <div className="input-area button-area">
            <Button label="Send Contact Form" cta="Send" type="submit" />
          </div>
        </form>
      </div>
    </ContactWrapper>
    </div>
  )
}

const ContactWrapper = styled.section`
  padding: 150px 30px;

  .content-container {
    width: 100%;
    margin: 0 auto;
    position: relative;

    h1 {
      text-align: left;
      background: -webkit-linear-gradient(45deg, #006635, #000300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    a {
      color: #000300;
      font-size: 1rem;
      text-decoration: none;
      text-align: left;
      background: -webkit-linear-gradient(45deg, #000300, #006635);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (min-width: 768px) {
        text-align: center;
      }
    }

    p {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    form {
      position: relative;
      overflow: hidden;
      padding: 0 2rem 3rem 0;
      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #f6f4f3;
        color: #000300;
        /* text-transform: uppercase; */
        position: relative;
        box-sizing: border-box;
        outline: none;

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, #006635, #000300);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Contact
