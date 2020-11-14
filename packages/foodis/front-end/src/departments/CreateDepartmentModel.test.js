import CreateDepartmentModel from "./CreateDepartmentModel";
import asyncFnForJest from "@async-fn/jest";
import React from "react";
import { isObservable } from "mobx";

describe("CreateDepartmentModel", () => {
  let model;
  let submitDepartmentMock;

  beforeEach(() => {
    submitDepartmentMock = asyncFnForJest();

    model = new CreateDepartmentModel(submitDepartmentMock);
  });

  it("is observed", () => {
    expect(isObservable(model)).toBe(true);
  });

  it("given name has not been set, when validity is checked, knows not to be valid", () => {
    expect(model.isValid).toBe(false);
  });

  describe("given name have been set", () => {
    beforeEach(() => {
      model.name.setValue("some-name");
    });

    it("when validity is checked, knows to be valid", () => {
      expect(model.isValid).toBe(true);
    });

    describe("when submitted", () => {
      beforeEach(() => {
        model.submit();
      });

      it("submits department", () => {
        expect(submitDepartmentMock).toHaveBeenCalledWith({
          name: "some-name",
        });
      });

      it("when submit resolves, clears input", async () => {
        await submitDepartmentMock.resolve();

        expect(model.name.value).toBe("");
      });
    });
  });
});
