import React from "react";
import TextInput from "../components/shared/TextInput/TextInput";
import { observer } from "mobx-react-lite";
import InputWrapper from "../components/private/InputWrapper/InputWrapper";

const CreateDepartment = ({ createDepartmentModel }) => (
  <form>
    <InputWrapper label="Add new department">
      <TextInput
        model={createDepartmentModel.name}
        data-department-name-input-test
      />
    </InputWrapper>
  </form>
);

export default observer(CreateDepartment);
