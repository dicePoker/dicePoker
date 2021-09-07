import profileTextFieldsData from './constants/profileTextFields.json';
import signInTextFieldsData from './constants/signInTextFields.json';
import signUpTextFieldsData from './constants/regTextFields.json';

export enum TextFieldsDataEnum {
  'profile' = 'profile',
  'signIn' = 'signIn',
  'signUp' = 'signUp',
}

export type TextFieldsDataType = {
  name: string;
  label: string;
  defaultValue?: string;
  type?: string;
};

export const getTextFieldsData = (
  typeData: string,
): TextFieldsDataType[] | [] => {
  if (typeData === TextFieldsDataEnum.profile) {
    return profileTextFieldsData;
  }

  if (typeData === TextFieldsDataEnum.signIn) {
    return signInTextFieldsData;
  }

  if (typeData === TextFieldsDataEnum.signUp) {
    return signUpTextFieldsData;
  }
  return [];
};
