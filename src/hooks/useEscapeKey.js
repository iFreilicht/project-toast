import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    const closeAllToasts = (e) => {
      if (e.key === "Escape") {
        callback();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', closeAllToasts);

    return () => document.removeEventListener('keydown', closeAllToasts);
  });

}