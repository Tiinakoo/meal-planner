import TextInputModel from "../components/shared/TextInputModel";

export default class CreateDepartmentModel {
  dependencies = {};

  constructor(submitDepartment = () => {}) {
    this.dependencies.submitDepartment = submitDepartment;
  }

  name = new TextInputModel();

  submit = async () => {
    await this.dependencies.submitDepartment({ name: this.name.value });

    this.name.reset();
  };
}
