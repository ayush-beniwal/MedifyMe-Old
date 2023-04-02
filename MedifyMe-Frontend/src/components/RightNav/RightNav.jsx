import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  @media(min-width:1024px){
    display:none;
  }
  @media (max-width: 1024px) {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
        padding: 18px 10px;
    }
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:0;
    right:0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Health History</li>
      <li>Prescriptions</li>
      <li>Tests & Reports</li>
      <li>Appointments</li>
      <li>Sign In</li>
    </Ul>
  )
}

export default RightNav