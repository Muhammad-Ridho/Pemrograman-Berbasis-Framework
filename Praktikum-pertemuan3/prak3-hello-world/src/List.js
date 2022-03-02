// import React, { Component } from 'react';
import React, { Component } from 'react';
import Image from './Image';class List extends Component {
    render() {
        return (
        <div>
            <ol>
                <li>
                    Satu
                    <Image linkGambar='https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-kemasan-makanan-food-grade-yang-ramah-lingkungan-shutterstock.jpg' />
                </li>
                <li>
                    Dua
                    <Image linkGambar='https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-kemasan-makanan-food-grade-yang-ramah-lingkungan-shutterstock.jpg' />
                </li>
                <li>
                    Tiga
                    <Image linkGambar='https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-kemasan-makanan-food-grade-yang-ramah-lingkungan-shutterstock.jpg' />
                </li>
                <li>
                    Empat
                    <Image linkGambar='https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-kemasan-makanan-food-grade-yang-ramah-lingkungan-shutterstock.jpg' />
                </li>
            </ol>
        </div>
        );
    }
}export default List;