import { useCallback, useEffect, useState } from "react";

type UseWindowKeyDown = (keys: string[], callback: () => void) => void;

const useWindowKeyDown: UseWindowKeyDown = (keys, callback) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    setPressedKeys((prevKeys) => {
      const newKeys = new Set(prevKeys);
      newKeys.add(e.key.toLowerCase());
      return newKeys;
    });
  }, []);

  const handleKeyup = useCallback((e: KeyboardEvent) => {
    setPressedKeys((prevKeys) => {
      const newKeys = new Set(prevKeys);
      newKeys.delete(e.key.toLowerCase());
      return newKeys;
    });
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeydown, handleKeyup]);

  useEffect(() => {
    const isMatch = keys.every((key) => pressedKeys.has(key.toLowerCase()));

    if (isMatch) {
      callback();
    }
  }, [keys, callback, pressedKeys]);
};

export default useWindowKeyDown;
