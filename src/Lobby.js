import React from "react";

const Lobby = ({
  username,
  roomName,
  onUsernameChange,
  onRoomNameChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <h2>Enter a room</h2>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={username}
        onChange={onUsernameChange}
        required
      />
    </div>
    <div>
      <label htmlFor="room">Room:</label>
      <input
        type="text"
        id="room"
        value={roomName}
        onChange={onRoomNameChange}
        required
      />
    </div>
    <button type="submit">Enter</button>
  </form>
);

export default Lobby;
