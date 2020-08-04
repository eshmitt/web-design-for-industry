import React, { useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation'
import MessageList from './components/MessageList'
// import SendMessage from './components/SendMessage'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
// import todos from './components/todos'
// import logo from './components/assets/logo.svg'
// import nav1 from './components/assets/home.svg'
// import nav1hover from './components/assets/home-red.svg'
// import nav2 from './components/assets/mybooking.svg'
// import nav2hover from './components/assets/mybooking-red.svg'
// import nav3 from './components/assets/makebooking.svg'
// import nav3hover from './components/assets/makebooking-red.svg'
// import nav4 from './components/assets/tasklist.svg'
// import nav4hover from './components/assets/tasklist-red.svg'
// import nav5 from './components/assets/messages.svg'
// import nav5hover from './components/assets/messages-red.svg'

import './App.css'

import Login from './views/Login'
import Home from './views/Home'
import MyBookings from './views/MyBookings'
import MakeBooking from './views/MakeBooking'
import Tasklist from './views/Tasklist'
import Messages from './views/Messages'

function App() {
	const [NavState, setNavState] = useState(false);
	const changeNavState = () => {
		if (NavState === true) {
			setNavState(false);
		}
		else {
			setNavState(true);
		}
	};
	// const nav = <img src="${home}" id="home"/>
	// 		<img src="${makebooking}" id="makebooking"/>
	// 		<img src="${mybooking}" id="mybooking"/>
	// 		<img src="${tasklist}" id="tasklist"/>
	// 		<img src="${messages}" id="messages"/>

  		
	return (
		<Router>
			<div className="App">
			<ResponsiveNavigation />
		{/* <Header onClick={handleClick} open={menuOpen} /> */}
			<Route path="/login" src= "${login}" id="login" views={Home}>
				<Login />
			</Route>
			<Route path="/home" src="${home}" id="home" views={Home}>
				<Home />
			</Route>
			<Route path="/my-bookings" src="${mybookings}" id="my-bookings" views={MyBookings}>
				<MyBookings />
			</Route> 
			<Route path="/make-booking" src="${makebooking}" id="make-booking" views={MakeBooking}>
				<MakeBooking />
			</Route>
			<Route path="/tasklist" src="${tasklist}" id="tasklist" views={Tasklist}>
				<Tasklist />
			</Route>
			<Route path="/messages" src="${messages}" id="messages" views={Messages}>
				<Messages />
			</Route>
			{/* <Calender /> */}
			<RoomList />
			<MessageList />
			<NewRoomForm />
			{/* <SendMessage /> */}
		</div>
		</Router>
	);
}

export default App;