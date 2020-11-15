import React from "react";
import TextInput from "../components/shared/TextInput/TextInput";
import { observer } from "mobx-react-lite";
import InputWrapper from "../components/private/InputWrapper/InputWrapper";
import translations from "../translations";
import getLanguage from "../doings/getLanguage";
import PrimaryButton from "../components/shared/PrimaryButton/PrimaryButton";
import Flex from "../components/shared/Flex/Flex";

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

      <Flex alignRight>
        <PrimaryButton
          onClick={submit}
          size="sm"
          enabled={isValid}
          data-department-submit-test
        >
          {localTranslation.submit}
        </PrimaryButton>
      </Flex>
    </form>
  );
};

export default observer(CreateDepartment);
