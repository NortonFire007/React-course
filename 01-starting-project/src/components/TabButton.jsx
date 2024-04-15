const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

// ---------------OR-----------------
// const TabButton = ({ label }) => {
//   return <button>{label}</button>;
// };

export default TabButton;
