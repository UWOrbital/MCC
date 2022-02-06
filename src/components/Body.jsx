import logo from "../images/logo.png";

// Body of the homepage
function Body() {
  return (
    <div style={divStyle}>
      <img src={logo} alt="Logo"></img>
    </div>
  );
}

export default Body;

// Styles for the Body
const divStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
