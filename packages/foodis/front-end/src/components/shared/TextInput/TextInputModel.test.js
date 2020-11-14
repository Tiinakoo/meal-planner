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

  describe("initially", () => {
    it("has no value", () => {
      expect(model.value).toBe("");
    });

    it("given no required values, is valid", () => {
      expect(model.isValid).toBe(true);
    });
  });

  it("knows how to set value", () => {
    model.setValue("some-value");

    expect(model.value).toBe("some-value");
  });

  describe("when constructed as required", () => {
    let model;

    beforeEach(() => {
      model = new TextInputModel({ required: true });
    });

    it("is required", () => {
      expect(model.required).toBe(true);
    });

    it("given value has been set, is valid", () => {
      model.setValue("some-value");

      expect(model.isValid).toBe(true);
    });
  });

  it("knows how to reset value", () => {
    model.reset();

    expect(model.value).toBe("");
  });
});
