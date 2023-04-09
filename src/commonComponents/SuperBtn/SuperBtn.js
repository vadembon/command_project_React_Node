import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SuperBtn = ({
  typeBtn,
  lnk,
  to,
  otln,
  otlnInv,
  title,
  dark,
  welcome,
  disabled = false,
  children,
  statefrom,
}) => {
  const SuperButton = styled(lnk ? Link : 'button')`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 18px 44px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    background-color: #8baa36;
    &:hover {
      color: white;
      background-color: grey;
      scale: 1.1;
    }
    ${otln &&
    css`
      border: 2px solid green;
      color: black;
      background-color: transparent;
      &:hover {
        color: white;
        background-color: #8baa36;
      }
    `}
    ${otlnInv &&
    css`
      border: 2px solid white;
      background-color: transparent;
      &:hover {
        border: 2px solid #8baa36;
        color: green;
        background-color: transparent;
      }
    `}
    ${dark &&
    css`
      background-color: black;
      &:hover {
        background-color: #8baa36;
      }
    `}
    ${welcome &&
    css`
      &:hover {
        color: white;
        background-color: black;
        scale: 1.1;
      }
    `}
    &:hover:disabled {
      background-color: grey;
    }
    ${lnk &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
    ${!lnk &&
    css`
      border: none;
      &:disabled {
        background-color: grey;
        color: black;
        cursor: not-allowed;
      }
    `}
    background-color: ${lnk ? '#8baa36' : 'transparent'};
    color: ${lnk ? 'white' : 'inherit'};
  `;

  return (
    <SuperButton
      to={to}
      state={statefrom}
      type={!lnk ? typeBtn : undefined}
      disabled={disabled}
    >
      {title}
      {children}
    </SuperButton>
  );
};

export default SuperBtn;
