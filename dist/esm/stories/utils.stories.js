import { useReducer } from 'react';
export function useCronReducer(defaultValue) {
  const [values, dispatchValues] = useReducer((prevValues, action) => {
    switch (action.type) {
      case 'set_cron_value':
        return {
          inputValue: prevValues.inputValue,
          cronValue: action.value
        };

      case 'set_input_value':
        return {
          inputValue: action.value,
          cronValue: prevValues.cronValue
        };

      case 'set_values':
        return {
          inputValue: action.value,
          cronValue: action.value
        };
    }
  }, {
    inputValue: defaultValue,
    cronValue: defaultValue
  });
  return [values, dispatchValues];
}