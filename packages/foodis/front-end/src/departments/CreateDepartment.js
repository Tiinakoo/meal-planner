import React from "react";
import { observer } from "mobx-react-lite";
import TextInput from "../components/shared/TextInput/TextInput";

const CreateDepartment = observer(({ createDepartmentModel }) => (
  <form>
    <TextInput model={createDepartmentModel.name} />
  </form>
));

export default CreateDepartment;
