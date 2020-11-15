import React from "react";
import TextInput from "../components/shared/TextInput/TextInput";
import { observer } from "mobx-react-lite";
import InputWrapper from "../components/private/InputWrapper/InputWrapper";
import translations from "../translations";
import getLanguage from "../doings/getLanguage";
import PrimaryButton from "../components/shared/PrimaryButton/PrimaryButton";

const localTranslation = translations[getLanguage()];

const CreateDepartment = ({
  createDepartmentModel: { submit, name, isValid },
}) => {
  return (
    <form>
      <InputWrapper label={localTranslation.addNewDepartment}>
        <TextInput
          model={name}
          placeholder={localTranslation.placeHolderForTextInput}
          data-department-name-input-test
        />
      </InputWrapper>

      <PrimaryButton
        onClick={submit}
        size="sm"
        enabled={isValid}
        data-department-submit-test
      >
        {localTranslation.submit}
      </PrimaryButton>
    </form>
  );
};

export default observer(CreateDepartment);
