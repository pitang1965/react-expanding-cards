import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
// Gatsbyの場合は
// import Img from 'gatsby-image';
// Cardの引数 url を imageFluid に変更
// retur() 内に <Img fluid={imageFluid} /> を追加

const Card = ({ id, isActive, onClick, title, description, url }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <CardWrapper
      onClick={handleClick}
      isActive={isActive}
      style={{ backgroundImage: `url(${url})` }}
    >
      <Title isActive={isActive}>{title}</Title>
      <Description isActive={isActive}>{description}</Description>
    </CardWrapper>
  );
};

const vibration = keyframes`
  0% {transform: translate(0px, 0px) rotateZ(0deg)}
  25% {transform: translate(2px, 2px) rotateZ(1deg)}
  50% {transform: translate(0px, 2px) rotateZ(0deg)}
  75% {transform: translate(2px, 0px) rotateZ(-1deg)}
  100% {transform: translate(0px, 0px) rotateZ(0deg)}
`;

const CardWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  flex: ${({ isActive }) => (isActive ? '5' : '0.5')};
  margin: 4px;
  position: relative;
  transition: flex 0.7s ease-in;

  &:hover {
    ${({ isActive }) =>
      isActive
        ? css`
            animation: none;
          `
        : css`
            animation-name: ${vibration};
            animation-duration: 0.1s;
            animation-iteration-count: 3;
            animation-timing-function: ease-out;
          `};
  }
`;

const Title = styled.div`
  font-size: 24px;
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  text-shadow: 1px 0 8px black;
  opacity: 0;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    `}
`;

const Description = styled.div`
  font-size: 18px;
  position: absolute;
  top: 70px;
  left: 20px;
  margin: 0;
  text-shadow: 1px 0 8px black;
  opacity: 0;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transition: opacity 0.6s ease-in 0.8s;
    `}
`;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
