//  Forwarding Props example
const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
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
