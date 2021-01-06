import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const ValuesBlock = ({ titleEn, titleAm, paragraph, children, id }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <ValuesBlockWrapper id={id}>
      <div className="content-container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <h1>{titleEn}</h1>
          <h1>{titleAm}</h1>
          <p>{paragraph}</p>
          <div className="row text-center d-inline-block">
          <p>{children}</p>
          </div>
        </motion.div>
      </div>
    </ValuesBlockWrapper>
  )
}

const ValuesBlockWrapper = styled.section`
  /* background: linear-gradient(45deg, #006635, #006635); */
  color: #C2E1C2;
  text-align: left;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 30px;
    text-align: center;
  }

  h2 {
    color: #C2E1C2;
    /* background: -webkit-linear-gradient(45deg, #C2E1C2, #C2E1C2); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 40px;
    /* text-shadow: 0px 0px 5px rgba(8, 0, 8, 1); */
    opacity: 0.85;
  }
`

export default ValuesBlock
