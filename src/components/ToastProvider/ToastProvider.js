import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (message) => {
      const id = crypto.randomUUID();
      setToasts((curr) => [
        ...curr,
        { id, message },
      ]);
    },
    []
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
