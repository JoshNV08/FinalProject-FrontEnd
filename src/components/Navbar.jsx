import { Navbar, Container } from "react-bootstrap";

function Nav() {
  return (
    <>
      <Navbar style={{ maxHeight: "50%" }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../src/assets/Logo.png"
              alt="Good Burger Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a
                href="/Contact"
                className=" fs-5"
                style={{ fontWeight: "bolder", color: "#ff3030" }}>
                Trabaja con Nostros
              </a>
              <a href="https://www.facebook.com">
                <img
                  src="../src/assets/Facebook.png"
                  className="mx-1"
                  style={{ width: "35px" }}
                />
              </a>
              <a href="https://www.Instagram.com">
                {" "}
                <img
                  src="../src/assets/Instagram.png"
                  className="mx-1"
                  style={{ width: "35px" }}
                />
              </a>
              <a href="https://www.x.com/">
                {" "}
                <img
                  src="../src/assets/Twitter.png"
                  className="mx-1"
                  style={{ width: "35px" }}
                />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
