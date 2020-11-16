import React from "react";

import { mount } from "enzyme";
import TextInput from "./TextInput";

describe("TextInput", () => {
  let component;
  let setValueMock;

  beforeEach(() => {
    setValueMock = jest.fn();

    const modelStub = {
      value: "some value",
      setValue: setValueMock,
    };

    component = mount(
      <TextInput
        label="Some label"
        placeholder="Some placeholder"
        model={modelStub}
        onChange={modelStub.setValue}
      />
    );
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  describe("an InputWrapper within", () => {
    let inputWrapper;

    beforeEach(() => {
      inputWrapper = component.find("InputWrapper");
    });

    it("knows label from a prop", () => {
      expect(inputWrapper).toHaveProp("label", "Some label");
    });
  });

  describe("an input within", () => {
    let input;

    beforeEach(() => {
      input = component.find("input");
    });

    it("knows value from model", () => {
      expect(input).toHaveProp("value", "some value");
    });

    it("knows placeholder from a prop", () => {
      expect(input).toHaveProp("placeholder", "Some placeholder");
    });

    it("when changed, abstracts event away and uses input value instead", () => {
      input.simulate("change", { target: { value: "some value" } });

      expect(setValueMock).toHaveBeenCalledWith("some value");
    });
  });
});
