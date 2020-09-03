import React from 'react'

class RoomList extends React.Component {
    render () {
        console.log('this.props.rooms', this.props);
        const orderedRooms = [];
        // const orderedRooms = {...this.props.rooms}.sort((a, b) =>a.id > b.id);
        return (
            <div className="rooms-list">
                <h3>Your Messages</h3>
                <ul>
                    {orderedRooms.map((room, i) => {
                        const active = this.props.currentRoomId === room.id ? 'active' : '';
                        return (
                            <li key={i} className={'room' + active}>
                                <a href='#' onClick={() => this.props.subscribeToRoom(room.id)}>
                                    # {room.name}
                                </a>                           
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default RoomList