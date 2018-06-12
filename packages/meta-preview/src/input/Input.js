import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  text-align: left;
  margin-bottom: 25px;
  font-family: Verdana, sans-serif;
  color: #787993;
`;
const Label = styled.span`
  display: block;
  margin: 0 0 4px;
  color: #25265E;
  font-size: 13px;
  line-height: 23.2px;
  font-weight: 700;
`;
const InputText = styled.input`
  overflow: hidden;
  padding: 8px 10px;
  border: 1px solid ${props => props.invalid ? "red" : "#c5d2d9"};
  font-size: 13px;
  font-weight: 400;
  font-family: Verdana, sans-serif;
  border-radius: 4px;
  white-space: nowrap;
  width: 100%;
  box-sizing: border-box;
  color: #787993;

  :focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 8px 10px;
  border: 1px solid ${props => props.invalid ? "#FF7052" : "#c5d2d9"};
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  color: #787993;
  resize: none;

  :focus {
    outline: none;
  }
`;

const Footer = styled.div`
  color: #787993;
  display: flex;
  justify-content: space-between;
  font-family: Verdana, sans-serif;
`;
const Recommended = styled.span`
  font-size: 11px;
  margin: 4px 0 0;
  align-self: flex-start;
`;

const Used = styled.span`
  font-size: 11px;
  margin: 4px 0 0;
  align-self: flex-end;
`;

const Value = styled.strong`
  color: ${props => (props.invalid ? "#FF7052" : "#2DC76D")};
  padding-left: 5px;
`;

const Invalid = (value, max) => {
  return value > max;
}

const Input = props => (
  <Container>
    <Label>{props.label}</Label>
    {props.tag === "input" ? (
      <InputText invalid={Invalid(props.value.length, props.maxLength)} value={props.value} onChange={props.onChange} />
    ) : (
      <TextArea invalid={Invalid(props.value.length, props.maxLength)} rows="4" value={props.value} onChange={props.onChange} />
    )}
    <Footer>
      <Recommended>
        Recommended: <strong>{props.maxLength}</strong> chars
      </Recommended>
      <Used>
        Characters used:
        <Value invalid={Invalid(props.value.length, props.maxLength)}>
          {props.value && props.value.length}
        </Value>
      </Used>
    </Footer>
  </Container>
);

Input.defaultProps = {
  tag: "input"
};

Input.propTypes = {
  /**
   * The input type to be rendered.
   *
   * There are two options: input and textarea
   */
  tag: PropTypes.string,
  /**
   * Used to render the input label
   */
  label: PropTypes.string.isRequired,
  /**
   * The input value
   */
  value: PropTypes.string.isRequired,
  /**
   * The max length for the value attribute. When
   * the value is higher then this attribute, the text
   * *Used* will be red
   */
  maxLength: PropTypes.number,
  /**
   * The function that will be called when the
   * input value changes
   */
  onChange: PropTypes.func.isRequired
};

export default Input;
