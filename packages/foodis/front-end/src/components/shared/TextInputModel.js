import { makeAutoObservable } from "mobx";

export default class TextInputModel {
  value = "";

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (value) => {
    this.value = value;
  };

  reset = () => (this.value = "");
}
