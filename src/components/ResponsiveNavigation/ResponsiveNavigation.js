import React, { Component } from 'react';
import NavContent from './NavContent';
import './ResponsiveNavigation.css';

class ResponsiveNavigation extends React.Component{ 
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         'NavContentActive':''
    //     }
    // }
    // activeitem=(x) => {
    //     if(this.state.NavContentActive.length>0) {
    //         document.getElementById(this.state.NavContentActive).classList.remove('active');
    //     }
    //     this.setState({'NavItemId':x}, ()=>
    //     document.getElementById(this.state.NavContentActive).classList.add('active');

    // });
    // };
    constructor(props) {
        super(props);
        this.state={NavItemActive:''}
    }
    activeitem=(x)=> {
        if(this.state.NavItemActive.length>0) {
        document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemId':x},()=> {
    document.getElementById(this.state.NavItemActive).classList.add('active');
    });
    };
    render() {
        return (
            <nav>
                <ul>
                    <NavContent item="Home" tolink="/" activec={this.activeitem} img src="home.svg" ></NavContent>
                    <NavContent item="Making Booking" tolink="/MakeBooking" activec={this.activeitem} img src="makebooking.svg" ></NavContent>
                    <NavContent item="My Bookings" tolink="/MyBookings" activec={this.activeitem} img src="mybooking"></NavContent>
                    <NavContent item="Tasklist" tolink="/Tasklist" activec={this.activeitem} img src="tasklist.svg"></NavContent>
                    <NavContent item="Messages" tolink="/Messages" activec={this.activeitem} img src="messages.svg"></NavContent>
                </ul>
            </nav>
        )
    }
}

export default ResponsiveNavigation;