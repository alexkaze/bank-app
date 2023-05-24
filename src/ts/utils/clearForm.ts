export const clearForm = (...formInputs: HTMLInputElement[]) => {
  formInputs.forEach(input => {
    input.value = '';
    input.blur();
  });
};
