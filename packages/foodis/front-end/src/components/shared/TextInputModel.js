import { makeAutoObservable } from "mobx";
import { isNil } from "lodash/fp";

export default class TextInputModel {
  value = "";
  required;

  constructor({ required }) {
    makeAutoObservable(this);

    this.required = required;
  }

  setValue = (value) => {
    this.value = value;
  };

  setRequired(required) {
    this.required = required;
  }

  reset = () => {
    this.value = "";
    this.required = false;
  };

  get isValid() {
    if (!this.required) {
      return true;
    }

    return !isNil(this.value) && this.value !== "";
  }
}
