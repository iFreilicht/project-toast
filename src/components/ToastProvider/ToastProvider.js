import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  const removeToast = React.useCallback((id) => {
    setToasts((curr) => curr.filter((toast) => toast.id !== id));
  }, []);

  const addToast = React.useCallback(
    (message, variant) => {
      const id = crypto.randomUUID();
      setToasts((curr) => [
        ...curr,
        { id, message, variant, handleClose: () => removeToast(id) },
      ]);
    },
    [removeToast]
  );

  const value = React.useMemo(
    () => ({
      toasts,
      addToast,
    }),
    [toasts, addToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
