"use client";

export const TabButton = ({ active, selectTab, children }) => {
  return (
    <span>
      <button onClick={selectTab}>
        <p className={`tab-button ${active ? 'active' : ''}`}>{children}</p>
      </button>
    </span>
  );
};
