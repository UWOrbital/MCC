import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.png";

function Header() {
  return (
    <Nav style={navStyle} variant="pills" defaultActiveKey="/home">
      <Nav.Item style={itemStyle}>
        <Nav.Link eventKey="link-1">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item style={itemStyle}>
        <Nav.Link eventKey="link-2">Mission Commands</Nav.Link>
      </Nav.Item>
      <Nav.Item style={itemStyle}>
        <Nav.Link eventKey="link-3">Telemetry Data</Nav.Link>
      </Nav.Item>
      <Nav.Item style={itemStyle}>
        <Nav.Link eventKey="link-4">ARO Requests</Nav.Link>
      </Nav.Item>
      <Nav.Item style={itemStyle} disabled>
        <img src={logo} alt="Logo" style={imgStyle}></img>
      </Nav.Item>
    </Nav>
  );
}

export default Header;

const navStyle = {
  margin: "5px"
};

const itemStyle = {
  marginLeft: "8px"
};

const imgStyle = {
  position: "absolute",
  right: "10px",
  height: "40px"
};
