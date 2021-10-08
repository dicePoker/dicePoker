import profileTextFieldsData from './constants/profileTextFields';
import signInTextFieldsData from './constants/signInTextFields';
import signUpTextFieldsData from './constants/regTextFields';

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

export const getTextFieldsData = (typeData: string): TextFieldsDataType[] => {
  if (typeData === TextFieldsDataEnum.profile) {
    return profileTextFieldsData as TextFieldsDataType[];
  }

  if (typeData === TextFieldsDataEnum.signIn) {
    return signInTextFieldsData as TextFieldsDataType[];
  }

  if (typeData === TextFieldsDataEnum.signUp) {
    return signUpTextFieldsData as TextFieldsDataType[];
  }
  return [] as TextFieldsDataType[];
};
