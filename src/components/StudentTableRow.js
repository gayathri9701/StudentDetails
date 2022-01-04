import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './DisplayImage';


export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteconfirm() {


    }

    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then(() => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)

            })
    }


    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{ this.props.obj._id}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.dob}</td>
                <td>{this.props.obj.image}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id} size="sm">
                        Edit
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        onClick={e =>
                            window.confirm("Are you sure you wish to delete this data?") &&
                            this.deleteStudent(e)
                        } size="sm" variant="danger">Delete</Button>
                    <Link className="view-link"class="btn btn-primary"data-toggle="modal" data-target={"#myModal"+this.props.obj._id} size="sm">
                    
                        View
                    </Link>
                    <div class="modal" id={"myModal"+this.props.obj._id}>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Student details</h4>
                                    <button type="button" class="close" data-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <table>
                                        <tr> <td>Id</td><td><label id="lblid"></label>{this.props.obj._id} </td></tr>
                                        <tr> <td>Name</td><td><label id="lblname"></label>{this.props.obj.name} </td></tr>
                                        <tr> <td>Email</td><td><label id="lblemail"></label> {this.props.obj.email}</td></tr>
                                        <tr> <td>Rollno</td><td><label id="lblrollno"></label>{this.props.obj.rollno} </td></tr>
                                        <tr> <td>Gender</td><td><label id="lblgender"></label> {this.props.obj.gender}</td></tr>
                                        <tr> <td>Dob</td><td><label id="lbldob"></label>{this.props.obj.dob}</td></tr>
                                        <tr> <td>Image</td><td><label id="lblimage"></label>{this.props.obj.image}</td></tr>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td> 
            </tr >
        );
    }
}