import { useState } from "react";
import {
  Dispatch,
  DispatchTypes,
  OnChangeValues,
  UseValuesReturn,
} from "./types";

/**
 * @param initialValues 기본값
 * @returns {object}
 * @property {values} 저장 된 값 object
 * @property {onChangeValues} 인풋용 onChange 함수
 * @property {dispatch} 값을 변경할 때 사용하는 함수 SET, DELETE, RESET이 있음
 */
export const useValues = <T>(initialValues: T): UseValuesReturn<T> => {
  const copyInitialValues = { ...initialValues };

  const [values, setValues] = useState(copyInitialValues);

  const dispatch: Dispatch<T> = (
    type: DispatchTypes,
    payload?: Partial<T> | keyof T
  ) => {
    switch (type) {
      case "SET":
        if (typeof payload === "object" && payload !== null) {
          setValues((prev) => ({
            ...prev,
            ...payload,
          }));
        }
        break;

      case "DELETE":
        if (typeof payload === "string") {
          setValues((prev) => ({
            ...prev,
            [payload]: copyInitialValues[payload],
          }));
        }
        break;
      case "RESET":
        setValues(copyInitialValues);
    }
  };

  const onChangeValues: OnChangeValues = (e, type = "DEFAULT") => {
    const { value, name } = e.target;
    switch (type) {
      case "CHECKBOX": {
        const checked = values[name as keyof T] as boolean;
        setValues((prev) => ({
          ...prev,
          [name]: !checked,
        }));
        break;
      }
      default:
        setValues((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;
    }
  };

  return { values, dispatch, onChangeValues };
};
