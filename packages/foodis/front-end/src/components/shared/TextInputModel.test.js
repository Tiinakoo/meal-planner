import TextInputModel from "./TextInputModel";
import { isObservable } from "mobx";

describe("TextInputModel", () => {
  let model;

  beforeEach(() => {
    model = new TextInputModel();
  });

  it("is observed", () => {
    expect(isObservable(model)).toBe(true);
  });

  it("has no value", () => {
    expect(model.value).toBe("");
  });

  it("knows how to set value", () => {
    model.setValue("some-value");

    expect(model.value).toBe("some-value");
  });

  it("knows how to reset value", () => {
    model.reset();

    expect(model.value).toBe("");
  });
});
