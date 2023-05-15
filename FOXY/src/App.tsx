import { useContext, useEffect } from "react";
import { Button, Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LinkContainer } from 'react-router-bootstrap'

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar expand="lg">
          <Container>
            <Button as={Link} to="/" variant="link" className="navbar-brand">
              FOXY
            </Button>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce(
                    (a: any, c: { quantity: any }) => a + c.quantity,
                    0
                  )}
                </Badge>
              )}
            </Link>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default App;
