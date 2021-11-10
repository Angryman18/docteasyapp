import styled from "styled-components";
import Images from "../../../image";
import ContactForm from "./Form";
import AboutSection from "./About";

const ContactAboutPallet = () => {
  return (
    <MainContent id="About">
      <Image src={Images.virus} alt="virus" />
      <Shadow />
      <div className="content">
        <Section>
          <AboutSection />
        </Section>
        <FormSection id="Contact">
          <h3>Write us</h3>
          <ContactForm />
        </FormSection>
      </div>
    </MainContent>
  );
};

export default ContactAboutPallet;

const MainContent = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-bottom: 1rem;

  .content {
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    padding: 2rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 16;
  }

  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      padding: 0;
    }
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: inherit;
  z-index: 15;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(43, 187, 216, 1)
  );
`;

const Section = styled.section`
  flex: 1;
  height: 100%;
  /* border: 2px solid #fff; */

  @media screen and (max-width: 768px) {
    display: none;
  }

`;

const FormSection = styled.section`
  flex: 1;
  /* text-align: center; */
  width: inherit;
  height: inherit;

  h3 {
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
  }

  @media screen and (max-width:768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }  

`;

const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  pointer-events: none;
`;
