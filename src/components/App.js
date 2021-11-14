import React from "react";
import bgImg from "../images/background.jpg";
import "../styles/front.css";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
    </div>
  );
}

export default App;
