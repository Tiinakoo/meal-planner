import TextInputModel from "./TextInputModel";
import { isObservable } from "mobx";

describe("TextInputModel", () => {
  let model;

  beforeEach(() => {
    model = new TextInputModel({ required: false });
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

  it("when constructed as required, is required", () => {
    const model = new TextInputModel({ required: true });

    expect(model.required).toBe(true);
  });

  it("knows how to reset value", () => {
    model.reset();

    expect(model.value).toBe("");
  });
});
