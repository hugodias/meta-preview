import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
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
    const yarnCode = `
    yarn add meta-preview
    `;
    const importReact = `
    import MetaPreview from 'meta-preview';

    class MyComponent extends Component {
      constructor(props) {
        super(props);
          
        this.state = {
          title: "Post title",
          link: "https://medium.com/@hugooodias",
          description: "Post Description."
        };

        <!-- handle changes -->
      }

      render() {
        return (
          <MetaPreview
            {...this.state}
            onTitleChange={this.onTitleChange}
            onDescriptionChange={this.onDescriptionChange}
            onLinkChange={this.onLinkChange}
          />
        )
      }
    }
    `;

    const previewCode = `
    import Preview from 'meta-preview';

    class MyComponent extends Component {
      constructor(props) {
        super(props);
          
        this.state = {
          title: "Post title",
          link: "https://medium.com/@hugooodias",
          description: "Post Description."
        };
      }

      render() {
        return (
          <Preview {...this.state} />
        )
      }
    }    
    `;

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
          <SyntaxHighlighter language="bash" style={prism}>
            {yarnCode}
          </SyntaxHighlighter>
          <h4> Using </h4>
          <SyntaxHighlighter language="javascript" style={prism}>
            {importReact}
          </SyntaxHighlighter>

          <h4>Preview only</h4>

          <SyntaxHighlighter language="javascript" style={prism}>
            {previewCode}
          </SyntaxHighlighter>

          <h4> The result </h4>

          <div className="PreviewBox">
            <Preview {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
