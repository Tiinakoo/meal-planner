import { makeAutoObservable } from "mobx";

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
}
