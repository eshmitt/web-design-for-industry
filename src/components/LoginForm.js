import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { useForm } from 'react-hook-form'


function LoginForm(props) {
  
  const {buttonText} = props;
  const [displayEmail, setDisplayEmail] = useState(true);

  console.log(useForm());

  const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 2%;
    color: ${({ theme }) => theme.colors.purple};
  `;

  const StyledSocialIconArea = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const handleClick = e => {
    e.preventDefault();
    debugger;
    setDisplayEmail(!displayEmail);

  }

  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <SocialIcon network="facebook" />
        <SocialIcon network="google" />
        <SocialIcon network="twitter" />
      </StyledSocialIconArea>
      <StyledHeading> OR </StyledHeading>
  

       {!displayEmail &&  (<Button onClick={handleClick}   text="Email" />)   } 
       

       {displayEmail && (
          <form>
          <p>
            <label> Email </label>
          </p>
          <p>
            <input type="text" name="email" />
          </p>
          <p>
            <label> Password </label>
          </p>
          <p>
            <input type="password" name="password" />
          </p>
          <Button  text={buttonText} />  
        </form>
       )}



      
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string
};

LoginForm.defaultProps = {
  buttonText: "JOIN"
};

export default LoginForm;
