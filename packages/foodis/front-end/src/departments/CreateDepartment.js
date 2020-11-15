import React from "react";
import TextInput from "../components/shared/TextInput/TextInput";
import BodyText from "../components/shared/BodyText/BodyText";
import { observer } from "mobx-react-lite";

const CreateDepartment = ({ createDepartmentModel }) => (
  <form>
    <BodyText font="primary" size="md">
      Add new department
    </BodyText>
    <TextInput
      model={createDepartmentModel.name}
      data-department-name-input-test
    />
  </form>
);

export default observer(CreateDepartment);
