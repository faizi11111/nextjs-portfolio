export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white hover:text-red-200 border-b border-red-600"
    : "text-slate-300 hover:text-white border-b border-slate-400";
  return (
    <span>
      <button onClick={selectTab}>
        <p className={`mr-4 font-semibold ${buttonClasses}`}>{children}</p>
      </button>
    </span>
  );
};
