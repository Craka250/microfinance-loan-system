import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import SocketContext from "./SocketContext";

export default function SocketProvider({ children }) {
  const socketRef = useRef(null);

  useEffect(() => {
    // Skip connection if backend not ready
    if (!import.meta.env.VITE_SOCKET_URL) return;

    const socket = io(import.meta.env.VITE_SOCKET_URL, {
      transports: ["websocket"],
      withCredentials: true,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("🔌 Socket connected:", socket.id);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socketRef}>
      {children}
    </SocketContext.Provider>
  );
}
