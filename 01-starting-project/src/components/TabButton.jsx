const TabButton = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

// ---------------OR-----------------
// const TabButton = ({ label }) => {
//   return <button>{label}</button>;
// };

export default TabButton;
