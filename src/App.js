import React, { Component } from "react";
import "./App.css";

import MetaPreview from "./components/meta-preview";
import Preview from "./components/preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "The anatomy of a perfect pull request",
      link:
        "https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067",
      description:
        "Large pull requests cause a big overhead during the code review and facilitate bugs introduction in the codebase."
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onLinkChange = this.onLinkChange.bind(this);
  }

  onTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  onDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  onLinkChange = event => {
    this.setState({ link: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="Preview">
          <MetaPreview
            {...this.state}
            onTitleChange={this.onTitleChange}
            onDescriptionChange={this.onDescriptionChange}
            onLinkChange={this.onLinkChange}
          />
        </div>

        <div className="Description">
          <h2>Meta Preview</h2>

          <a
            className="github-button"
            href="https://github.com/hugodias/meta-preview"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star hugodias/meta-preview on GitHub"
          >
            Star
          </a>
          <h3>
            A simple ReactJS component to preview how a content will be rendered
            in Google based on Title, Description and URL.
          </h3>

          <h4> How to Install</h4>
          <code>$ yarn add meta-preview</code>

          <code>import MetaPreview from 'meta-preview';</code>

          <h4>Using only the preview</h4>

          <div className="PreviewBox">
            <Preview {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
