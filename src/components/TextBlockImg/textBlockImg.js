import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "back.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      id="services"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
    >
      <TextBlockImgWrapper>
        <div className="content-container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {children}
        </div>
      </TextBlockImgWrapper>
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  text-align: center;
  padding: 100px 30px;

  .content-container {
    max-width: 600px;

    @media (min-width: 768px) {
      max-width: 750px;
    }

    @media (min-width: 1200px) {
      max-width: 1000px;
    }
  }

  h2 {
    background: -webkit-linear-gradient(45deg, #000300, #006635);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 50px;
  }
`

export default TextBlockImg
