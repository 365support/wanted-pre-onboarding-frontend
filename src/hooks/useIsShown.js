import { useCallback, useState } from "react";

export const useIsShown = (initialValue) => {
  const [isShown, setIsShown] = useState(initialValue ?? false);

  const onOpen = useCallback(() => {
    setIsShown(true);
  }, []);

  const onClose = useCallback(() => {
    setIsShown(false);
  }, []);

  return [isShown, onOpen, onClose];
};
