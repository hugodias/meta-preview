import React from "react";
import Preview from "./Preview";
import { mount } from "enzyme";

describe("Preview", () => {
  let props;
  let mountedPreview;
  const preview = () => {
    if (!mountedPreview) {
      mountedPreview = mount(<Preview {...props} />);
    }
    return mountedPreview;
  };

  beforeEach(() => {
    props = {
      title: "Foo",
      link: "https://github.io",
      description: "Joe"
    };
    mountedPreview = undefined;
  });

  it("renders the title", () => {
    const title = preview().find("h3");
    expect(title.text()).toEqual("Foo");
  });

  it("renders the link", () => {
    const link = preview()
      .find("span")
      .last();
    expect(link.text()).toEqual("https://github.io");
  });

  it("renders the description", () => {
    const description = preview().find("p");
    expect(description.text()).toEqual("Jun 11, 2018 - Joe");
  });
});
