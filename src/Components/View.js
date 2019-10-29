import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding-left: 4%;
  z-index: 100;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Grid = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 30px;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const View = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Wrapper>
);

View.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default View;
