import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudentDOB = this.onChangeStudentDOB.bind(this);

    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      rollno: '',
      dob: '',
      gender: '',
      image: ''
    }
  }

  componentDidMount() {

    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno,
          dob: res.data.dob,
          gender: res.data.gender,
          image:res.data.image

        });
      })
      .catch((error) => {
        console.log(error);
      })
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



  onChangeStudentGender(e) {
    this.setState({ gender: e.target.value })
  }

  onImageChange (event){
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };


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
    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
        
      })

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" dateFormat={("YYYY-MM-DD")} c />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Gender</Form.Label>
          <Form.Check onChange={this.onChangeStudentGender} type="radio" name="gender" check={this.state.gender} value="male"  label ="Male" />
          <Form.Check onChange={this.onChangeStudentGender} type="radio" name="gender" check={this.state.gender} value="female"  label ="Female" />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Select Image</Form.Label>
          <Form.Control type="file" img src={this.state.image}  onChange={this.onImageChange}/>
        </Form.Group>
t


        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>

      </Form>
    </div>);
  }
}