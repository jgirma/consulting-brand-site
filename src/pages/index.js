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
        paragraph="From tackling personal decisions to reaching important milestones, our goal is to guide you to success. We are fueled by a commitment to excellence and will go the extra mile to make sure our clients are fully satisfied.
We believe in maintaining a positive mindset, creating partnerships with a purpose, and always striving for excellence. Contact us today for an initial consultation, and find out more about how we can tailor our services to meet your needs.
"
        paragraphAm="ዓላማችን ሰዎችን ስኬታማ ማድረግ ነዉ ። የምክርና የስልጠና ኣገልጎሎታችን ለማደግና ለመስፋት ለሚፈልጉ ሁሉ የተዘጋጀ ነው ።"
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
            alt="Business Consulting"
            title="Business Consulting"
            content1="Expert advice, training and customized strategy development"
            content2="Business plan accounting and marketing to improve your profitability"
            content3="Strengthen your business through manpower development and building a foundation of accountability"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Leadership & Management Consulting"
            content1="Empower you to lead your company well"
            content2="Effective marketing leadership development to grow your business"
            content3="Well structured training and coaching services to manage your business efficiently"
          />
          {/* <Perk
            img={perk3Img}
            alt="Personal Financial Management"
            title="Personal Financial Management"
            content1="Guiding you to financial freedom through customized investment advice to grow your savings"
            content2="Quality financial advice to help you achieve both short and long term goals"
            content3="Regular check-ins to re-evaluate our plan based on your current financial situation"
            content4="Guide you to borrowing and lending practices that will benefit you not the banks"
          /> */}
        </div>
        <Link to="contact" smooth={true} duration={500}>
          <Button label="Book your first consultation" cta="Book your first consultation" />
        </Link>
      </TextBlockImg>
      <div id="values">
      <ValuesBlockImg>
      <ValuesBlock 
      titleEn="Consulting With Purpose"
      titleAm="ዓላማችን ሰዎችን ስኬታማ ማድረግ ነዉ ።"
        paragraph="Projects can be challenging; We are  here to lighten the load off of your shoulders.  We are honest and positive professionals whose first priority is always the interests of our clients; striving to provide capability, adaptability, and scalability. Whether you are already well established or just starting out, we want to help you reach your goals."
        children="Our work is not only about finance it’s about having a life filled with purpose.
We believe your financial success allows you to do more for yourself, your family, and your community.
Financial Freedom is heavily influenced by your current and future life stages. We connect all
the necessary factors to lead to success."
      >
      </ValuesBlock>
      </ValuesBlockImg>
      </div>
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
