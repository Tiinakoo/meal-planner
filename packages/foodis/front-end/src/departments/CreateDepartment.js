import React from "react";
import { observer } from "mobx-react-lite";
import TextInput from "../components/shared/TextInput/TextInput";
import BodyText from "../components/shared/BodyText/BodyText";

const CreateDepartment = observer(({ createDepartmentModel }) => (
  <form>
    <BodyText font="primary" size="md">
      Add new department
    </BodyText>
    <TextInput model={createDepartmentModel.name} />
  </form>
));

export default CreateDepartment;
