import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

import image1 from "../img/Microwave-Candy.png";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="line-height-1 mt-5 mb-3">
                            Selamat Datang di <br />
                            Microwave Store -<br />
                            Mas  Ridho
                        </h1>
                        <p
                            className="mb-4 font-weight-light w-75"
                            style={{ lineHeight: "170%" }}
                        >
                            Microwave yang memiliki banyak fitur dan keunggulan. Dengan desain menarik, menjadikan microwave terlihat lebih bagus dan futuristik.
                        </p>
                        <Link to="/produk">
                            <AwesomeButton type="secondary">Lihat Produk</AwesomeButton>
                        </Link>
                    </div>

                    <div className="col-6 pl-5">
                        <div style={{ width: 520, height: 250 }}>
                            <img src={image1} class="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
