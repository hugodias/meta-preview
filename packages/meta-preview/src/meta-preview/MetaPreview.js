import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Preview from "../preview";
import Input from "../input";

const Container = styled.div`
  width: 380px;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.07), 0 2px 5px rgba(0, 0, 0, 0.03);
  font-family: Arial, sans-serif;
`;

const Devider = styled.hr`
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
`;

class MetaPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title_size: 70,
      link_size: 100,
      description_size: 156
    };
  }

  render() {
    const boxStyle = {
      first: {
        padding: "25px 30px 10px 30px"
      },
      last: {
        padding: "25px 30px 30px"
      }
    };

    const { title_size, link_size, description_size } = this.state;

    return (
      <Container>
        <div style={boxStyle.first}>
          <Input
            label="SEO Title"
            value={this.props.title}
            maxLength={title_size}
            onChange={this.props.onTitleChange}
          />
          <Input
            label="Link"
            value={this.props.link}
            maxLength={link_size}
            onChange={this.props.onLinkChange}
          />
          <Input
            tag="textarea"
            label="Meta Description"
            value={this.props.description}
            maxLength={description_size}
            onChange={this.props.onDescriptionChange}
          />
        </div>
        <Devider />
        <div style={boxStyle.last}>
          <Preview {...this.props} />
        </div>
      </Container>
    );
  }
}

MetaPreview.propTypes = {
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
  /**
   * Function called when title has been changed
   */
  onTitleChange: PropTypes.func.isRequired,
  /**
   * Function called when description has been changed
   */
  onDescriptionChange: PropTypes.func.isRequired,
  /**
   * Function called when link has been changed
   */
  onLinkChange: PropTypes.func.isRequired,
}

export default MetaPreview;
