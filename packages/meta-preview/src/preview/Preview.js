import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 320px;
  text-align: left;
  font-family: Arial, sans-serif;
`;

const Label = styled.span`
  display: block;
  margin: 0 0 4px;
  color: #343f44;
  font-size: 13px;
  font-weight: 700;
`;

const Title = styled.h3`
  text-align: left;
  color: #1e0fbe;
  line-height: 21.6px;
  text-overflow: ellipses;
  word-wrap: break-word;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const Link = styled.span`
  display: block;
  margin: 1px 0 2px;
  color: #006621;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  margin: 1px 0 0 2px;
  line-height: 1.6rem;
  word-wrap: break-word;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: Arial, sans-serif;
  text-align: left;
  
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  color: #545454;
  font-size: 13px;
  line-height: 18.2px;
  font-weight: 400;
  word-wrap: break-word;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;

  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.small`
  color: #808080;
  font-size: 13px;
  line-height: 18.2px;
`;

const Preview = data => (
  <Container>
    <Label>Snippet preview</Label>
    <Title>{data.title}</Title>
    <Link>{data.link}</Link>
    <Description><Date>Jun 11, 2018 - </Date>{data.description}</Description>
  </Container>
);

Preview.propTypes = {
  /**
   * Used to render a title text inside the preview box.
   */
  title: PropTypes.string.isRequired,
  /**
   * Used to render a link text inside the preview box.
   */
  link: PropTypes.string.isRequired,
  /**
   * Used to render a description text inside preview box.
   * 
   * When this text has more then 160 characters, it will be truncked 
   * with ellipses.
   */
  description: PropTypes.string.isRequired,
};

export default Preview;
