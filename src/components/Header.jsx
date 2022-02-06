// Header of the homepage
function Header() {
  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li style={listItemStyle}>First</li>
        <li style={listItemStyle}>Second</li>
        <li style={listItemStyle}>Third</li>
      </ul>
    </nav>
  );
}

export default Header;

// Styles for the header
const navStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  height: "50px",
  backgroundColor: "black",
  width: "100vw",
  color: "white"
};

const listStyle = {
  display: "inline-flex",
  listStyle: "none"
};

const listItemStyle = {
  marginRight: "30px",
  cursor: "pointer"
};
