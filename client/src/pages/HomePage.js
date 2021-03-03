import React from 'react';
import Page from '../components/Page/Page';
import webgazer from 'webgazer';
// import { Link } from "react-router-dom";
import ls from 'local-storage'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
        this.resume = this.resume.bind(this);
        this.pause = this.pause.bind(this);

    }

    sayHello() {
        var arr = [];
        webgazer.begin();
        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }
            var xprediction = data.x; //these x coordinates are relative to the viewport
            var yprediction = data.y; //these y coordinates are relative to the viewport
            let xyArr = [xprediction , yprediction];
            arr.push(xyArr);
            console.log(elapsedTime); //elapsed time is based on time since begin was called
        
        }).begin();
        ls.set("data" , arr);
    }

    resume() {
        webgazer.resume();
    }

    pause() {
        webgazer.pause();
    }

    render(){
        return (
            
            <Page>
            <button onClick={this.sayHello}>
                webgazer
            </button>
            <button onClick={this.resume}>
                resume
            </button>
            <button onClick={this.pause}>
                pause
            </button>

            </Page>
            
        );
    }
}

export default HomePage;