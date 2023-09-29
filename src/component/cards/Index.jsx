import React from 'react'
import{
    MainHeader, HeaderContainer, HorizontalLine, LeftHeader, RightHeader
} from "../styles/IndexStyles"
import Minicard from "../cards/MiniCard";
import business from "../../assets/images/business.png"
import personVector from "../../assets/images/personVector.png"
import phone_in_talk from "../../assets/images/phone_in_talk.png"
import signup from "../../assets/images/signup.png"

function Header(){
    return (
      <MainHeader>
        <HeaderContainer>
          <LeftHeader>
            <Minicard large={false} image={business} text={"Business"} />
            <Minicard large={false} image={personVector} text={"Personal"} />
          </LeftHeader>

          <RightHeader>
            <Minicard large={true} image={phone_in_talk} text={"+234-902-456-1234"}
            />
            <Minicard large={true} image={signup} text={"Signup/Login"} />
          </RightHeader>
        </HeaderContainer>

        <HorizontalLine />
      </MainHeader>
    );
}

export default Header