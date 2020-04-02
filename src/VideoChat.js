import React, { useState, useCallback } from "react";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState("");

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      const response = await fetch("/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setToken(data.token);
    },
    [username, roomName]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;

  if (token) {
    render = <Room roomName={roomName} token={token} onLogout={handleLogout} />;
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        onUsernameChange={handleUsernameChange}
        onRoomNameChange={handleRoomNameChange}
        onSubmit={handleSubmit}
      />
    );
  }

  return render;
};

export default VideoChat;
