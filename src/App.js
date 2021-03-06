import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import DisplayImage from "./components/DisplayImage";


function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="primary" variant="dark" href="#">
        
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link" >
                STUDENT DETAILS
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link" href="Create Student" >
                  Create Student
                </Link>
              </Nav>

              <Nav>
                <Link to={"/DisplayImage"} className="nav-link">
                  Image uploaded
                </Link>
              </Nav>

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
                <Route path="/DisplayImage" component={DisplayImage} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}




export default App;