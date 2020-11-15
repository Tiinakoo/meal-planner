import React from "react";
import TextInput from "../components/shared/TextInput/TextInput";
import { observer } from "mobx-react-lite";
import InputWrapper from "../components/private/InputWrapper/InputWrapper";
import translations from "../translations";
import getLanguage from "../doings/getLanguage";

const localTranslation = translations[getLanguage()];

const CreateDepartment = ({ createDepartmentModel }) => {
  return (
    <form>
      <InputWrapper label={localTranslation.addNewDepartment}>
        <TextInput
          model={createDepartmentModel.name}
          placeholder={localTranslation.placeHolderForTextInput}
          data-department-name-input-test
        />
      </InputWrapper>
    </form>
  );
};

export default observer(CreateDepartment);
