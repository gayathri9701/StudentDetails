import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { RadioGroup} from 'react-radio-group'


export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudentDOB = this.onChangeStudentDOB.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {

      name: '',
      email: '',
      rollno: '',
      dob: '',
      gender: '',
      image: ''

    }

  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onChangeStudentDOB(e) {
    this.setState({ dob: e.target.value })
  }

  onImageChange (event){
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };
  
  onChangeStudentGender(e) {
    this.setState({ gender: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
      dob: this.state.dob,
      gender: this.state.gender,
      image: this.state.image



      
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', rollno: '', dob: '', gender: '', image: '' })
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}  >

        <Form.Group controlId="Name">
          <Form.Label >Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} placeholder="enter student name" required />
        </Form.Group>


        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} placeholder="enter your email" required />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} placeholder="enter student rollno" required />
        </Form.Group>


        <Form.Group controlId="Name">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" dateFormat={("YYYY-MM-DD")} value={this.state.dob}  onChange={this.onChangeStudentDOB} />
        </Form.Group>

        <RadioGroup controlId="Name">
          <Form.Label>Gender</Form.Label>
          <Form.Check onChange={this.onChangeStudentGender} type="radio" name="gender" check={this.state.gender} value="male"  label ="Male" />
          <Form.Check onChange={this.onChangeStudentGender} type="radio" name="gender" check={this.state.gender} value="female"  label ="Female" />
        </RadioGroup>
        
        <Form.Group controlId="Name">
          <Form.Label>Select Image</Form.Label>
            <Form.Control type="file" img src={this.state.image} onChange={this.onImageChange} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block"  type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}