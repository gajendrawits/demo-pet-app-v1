import logo from "assets/images/logo.jpeg";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterMainWrapper>
      <FooterWrapper>
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
        </LogoWrapper>
        <AccWrapper>
          <Heading>YOUR ACCOUNT</Heading>
          <Text>Personal info</Text>
          <Text>Orders</Text>
          <Text>Credit slips</Text>
          <Text>Addresses</Text>
        </AccWrapper>
        <CompanyWrapper>
          <Heading>OUR COMPANY</Heading>
          <Text>Delivery</Text>
          <Text>Sitemap</Text>
          <Text>Stores</Text>
          <Text>Members</Text>
        </CompanyWrapper>
        <ContactWrapper>
          <Heading>CONTACT US</Heading>
          <Text>♦️City Heart Kharar</Text>
          <Text>♦️3rd Floor</Text>
          <Text>📞+1(817)901 3377</Text>
          <Text>✉️info@example.com</Text>
        </ContactWrapper>
        <SocialMediaWrapper>
          <Heading>GET IN TOUCH</Heading>
          <SocialWrapper>
            <FaFacebookF />
            <div>Facebook</div>
          </SocialWrapper>
          <SocialWrapper>
            <FaInstagramSquare />
            <div>Instagram</div>
          </SocialWrapper>
          <SocialWrapper>
            <FaLinkedinIn />
            <div>LinkedIn</div>
          </SocialWrapper>
          <SocialWrapper>
            <FaTelegramPlane />
            <div>Telegram</div>
          </SocialWrapper>
        </SocialMediaWrapper>
      </FooterWrapper>
    </FooterMainWrapper>
  );
};

export default Footer;

// styles
const FooterMainWrapper = styled.div`
  margin-top: 5vh;
  background-color: #e7e9eb;
`;

const FooterWrapper = styled.div`
  padding: 1vw 0 1vw 5vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9vw;
`;
const LogoWrapper = styled.div`
  width: 5vw;
`;
const Logo = styled.img`
  width: 5vw;
  height: auto;
  border-radius: 50%;
  :hover {
    transform: scale(1.2);
  }
`;
const AccWrapper = styled.div``;
const CompanyWrapper = styled.div``;
const ContactWrapper = styled.div`
  padding-top: 0.5vw;
`;
const SocialMediaWrapper = styled.div``;
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1vw;
  font-weight: 900;
  gap: 0.2vw;
  padding: 0.4vw;
  color: #6d8297;
  :hover {
    cursor: pointer;
    color: #29abe2;
    transform: scale(1.1);
  }
`;
const Heading = styled.div`
  padding: 0.3vw;
  font-size: 1vw;
  font-weight: 900;
  border-bottom: 2px solid #29abe2;
  color: #2c2a2ae6;
`;
const Text = styled.div`
  font-size: 1vw;
  font-weight: 700;
  padding: 0.4vw;
  color: #6d8297;
  :hover {
    cursor: pointer;
    color: #4a3e3e;
    transform: scale(1.1);
  }
`;
