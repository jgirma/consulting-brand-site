import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import ValuesBlock from "../components/TextBlock/valuesBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import ValuesBlockImg from "../components/TextBlockImg/valuesBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/small-business.svg"
import perk2Img from "../images/leadership.svg"
import perk3Img from "../images/wallet.svg"
import phone from "../images/phone.png"


export default () => (
  <>
    <Layout>
      <Banner id="banner" />
      <TextBlock
        id="about"
        title="Empowering your Financial Freedom"
        paragraph="From tackling personal decisions to reaching important milestones, our job is to guide you on the path of success. We are  fueled by our commitment to excellence and go the extra mile to make sure clients are fully satisfied with my work.
As a professional Financial Consultant, we believe in maintaining a positive mindset, creating partnerships with a purpose, and always striving for significant outcomes. Contact us today for an initial consultation, and find out more about how I can tailor my services to your needs.
We focus on investment, small business, and organization leadership  consultancy."
        paragraphAm="ዓላማችን ሰዎችን ስኬታማ ማድረግ ነዉ ።
        የምክርና የስልጠና  ኣገልጎሎታችን ለማደግና ለመስፋት ለሚፈልጉ ሁሉ የተዘጋጀ ነው ።"
      >
        <Link to="contact" smooth={true} duration={500}>
          <Button label="Get Connected" cta="Get Connected" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="services"
        title="What We Offer"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Small Business Consulting"
            title="Small Business Consulting"
            content1="Consulting to help get your small business running or get it to the next level."
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Leadership & Management Consulting"
            content1="Empower you to lead your company well."
            content2="Effective marketing advice to grow your business."
          />
          <Perk
            img={perk3Img}
            alt="Asset and Financial Management"
            title="Asset & Financial Management"
            content1="Guiding you to financial freedom through customized investment advice to grow your savings."
          />
        </div>
      </TextBlockImg>
      <ValuesBlockImg id="values">
      <ValuesBlock id="values"
      titleEn="Consulting With Purpose"
      titleAm="ዓላማችን ሰዎችን ስኬታማ ማድረግ ነዉ ።"
        paragraph="Projects can be challenging; We are  here to lighten the load off your shoulders.  We are honest and positive professionals whose first priority is always the interests of our clients; providing capability, adaptability, and scalability. Since 2000,we been serving loyal clients in Canada - get in touch to start enjoying my services today."
        children="Our work is not only about finance it’s about having purposeful life.
We believe your financial success allows you to do more to yourself, your family, community and your country.
We believe your financial freedom is connected to other different life factors and stages. We connect all
factors to make success.
We believe on giving and savings after making and spending your money."
      >
      </ValuesBlock>
      </ValuesBlockImg>
      <Contact
        id="contact"
        title="Contact Us"
        subtitle="Getting closer to your financial dreams is a message away."
        img={phone}
        alt="phone-icon"
      />
    </Layout>
  </>
)
