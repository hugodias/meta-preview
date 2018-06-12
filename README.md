## Meta Preview  - [Demo](https://hugodias.github.io/meta-preview/)

A simple ReactJS component to preview how a content will be rendered in Google based on Title, Description and URL.


![Screenshot](https://raw.githubusercontent.com/hugodias/meta-preview/master/public/screenshot.png)

### Install

```console
$ yarn add meta-preview
```

### Usage
```js
import React, { Component } from 'React';
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
```

#### Preview only
```js
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
```
