import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import Button from "../Button/button"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="credit">
      <p>© SuccessLink Inc. All Rights Reserved.</p>
        Designed & developed by{" "}
        <a
          href="http://www.jonathangirma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jonathan Girma
        </a>
      </div>
      <div className="credit">
        <Link to="banner" smooth={true} duration={500}>
        <Button
        cta="Back to top"
        label="Back to top"
        anchor={true}
        href="linking"
        />
        </Link>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;

  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    p{
      font-size: 1rem;
    }

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #c2e1c2, #006635);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
