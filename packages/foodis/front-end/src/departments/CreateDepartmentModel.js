import TextInputModel from "../components/shared/TextInputModel";
import { makeAutoObservable } from "mobx";

export default class CreateDepartmentModel {
  dependencies = {};

  constructor(submitDepartment = () => {}) {
    makeAutoObservable(this);

    this.dependencies.submitDepartment = submitDepartment;
  }

  name = new TextInputModel({ required: true });

  submit = async () => {
    await this.dependencies.submitDepartment({ name: this.name.value });

    this.name.reset();
  };

  get isValid() {
    return this.name.isValid;
  }
}
