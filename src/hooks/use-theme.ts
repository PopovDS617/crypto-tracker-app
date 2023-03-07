import { useAppSelector } from '../store/hooks';

import { Styles } from '../models/ui-models';

const useTheme = (module: Styles) => {
  const appTheme = useAppSelector((state) => state.ui.theme);
  let currentTheme;
  const darkStyles = {
    header: `${module.headerContainerDark} ${module.headerContainer}`,
    results: `${module.resultContainer} ${module.resultContainerDark}`,
    tableContainer: `${module.tableContainer}`,
    tableHead: `${module.tableHead}`,
    tableBody: `${module.tableBody}`,
    tableRow: `${module.tableRow}`,
    addBtn: `${module.addBtn} ${module.btnDark}`,
    switchThemeText: 'to light mode',
    switchThemeBtn: `${module.btn} ${module.btnDark}`,
    sellForm: `${module.sellFormContainer} ${module.sellFormContainerDark}`,
    sellFormBtn: `${module.formButton} ${module.formButtonDark}`,
    sellFormInput: `${module.sellFormInput} ${module.sellFormInputDark}`,
    newForm: `${module.newLogContainer} ${module.newLogContainerDark}`,
    newFormBtn: `${module.addFormBtn} ${module.addFormBtnLight}`,
    newFormInput: `${module.addFormInput} ${module.addFormInputDark}`,
    newFormSelect: `${module.addFormSelect} ${module.addFormSelectDark}`,
    changeForm: `${module.changeLogContainer} ${module.changeLogContainerDark}`,
    changeFormInput: `${module.changeFormInput} ${module.changeFormInputDark}`,
    changeFormBtn: `${module.changeFormBtn} ${module.changeFormBtnDark}`,
  };

  const lightStyles = {
    header: `${module.headerContainerLight} ${module.headerContainer}`,
    results: `${module.resultContainer} ${module.resultContainerLight}`,
    tableContainer: `${module.tableContainer}`,
    tableHead: `${module.tableHead}`,
    tableBody: `${module.tableBody}`,
    tableRow: `${module.tableRow}`,
    addBtn: `${module.addBtn} ${module.btnLight}`,
    switchThemeText: 'to dark mode',
    switchThemeBtn: `${module.btn} ${module.btnLight}`,
    sellForm: `${module.sellFormContainer} ${module.sellFormContainerLight}`,
    sellFormBtn: `${module.formButton} ${module.formButtonLight}`,
    sellFormInput: `${module.sellFormInput} ${module.sellFormInputLight}`,
    newForm: `${module.newLogContainer} ${module.newLogContainerLight}`,
    newFormBtn: `${module.addFormBtn} ${module.addFormBtnDark}`,
    newFormInput: `${module.addFormInput} ${module.addFormInputLight}`,
    newFormSelect: `${module.addFormSelect} ${module.addFormSelectLight}`,
    changeForm: `${module.changeLogContainer} ${module.changeLogContainerLight}`,
    changeFormInput: `${module.changeFormInput} ${module.changeFormInputLight}`,
    changeFormBtn: `${module.changeFormBtn} ${module.changeFormBtnLight}`,
  };

  if (appTheme === 'dark') {
    currentTheme = darkStyles;
  } else {
    currentTheme = lightStyles;
  }

  return currentTheme;
};

export default useTheme;