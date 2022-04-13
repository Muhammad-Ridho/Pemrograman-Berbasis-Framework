import React, { Component } from "react";
import '../App.css';

class About extends Component {
    render() {
        return (
            <div className="text-center">
                <img
                    src="https://bridgelawyers.ca/wp-content/uploads/2020/08/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                    width="15%"
                    alt="fotoprofil"
                    className="my-5 rounded-circle"
                ></img>
                <h1>Muhammad Ridho Ramadhan</h1>
                <h3>TI3D - 17 - 1941720149</h3>
            </div>
        );
    }
}

export default About;
