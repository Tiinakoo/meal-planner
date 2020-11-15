import CreateDepartment from "./CreateDepartment";
import React from "react";
import { mount } from "enzyme";

describe("CreateDepartment", () => {
  let component;
  let createDepartmentModelStub;

  beforeEach(() => {
    createDepartmentModelStub = {
      name: {},
      submit: () => {},
      isValid: {},
    };

    component = mount(
      <CreateDepartment createDepartmentModel={createDepartmentModelStub} />
    );
  });

  it("renders", () => {
    expect(component).toMatchSnapshot();
  });

  it("a name input within, has model", () => {
    const input = component.find("TextInput[data-department-name-input-test]");

    expect(input).toHaveProp("model", createDepartmentModelStub.name);
  });

  describe("a button within", () => {
    let button;

    beforeEach(() => {
      button = component.find("Button[data-department-submit-test]");
    });

    it("knows how to submit", () => {
      expect(button).toHaveProp("onClick", createDepartmentModelStub.submit);
    });

    it("knows when to be enabled", () => {
      expect(button).toHaveProp("enabled", createDepartmentModelStub.isValid);
    });
  });
});
