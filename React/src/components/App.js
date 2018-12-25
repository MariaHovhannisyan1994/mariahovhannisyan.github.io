import React, { Component } from 'react';
import CarouselPage from './CarouselPage';
import Header from './Header';
import Layer from './Layer';
import LayerTwo from './LayerTwo';
import Sec3 from './Sec3';
import Footer from './Footer';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <Header/>
                <CarouselPage/>
                <Layer/>
                <Sec3/>
                <LayerTwo/>
                <Layer/>
                <Footer/>


            </div>
        );
    }
}