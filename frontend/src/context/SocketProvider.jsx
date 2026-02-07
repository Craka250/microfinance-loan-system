import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
import { SocketContext } from "./SocketContext";

export default function SocketProvider({ children }) {
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(
      import.meta.env.VITE_SOCKET_URL || "http://localhost:5000",
      {
        transports: ["websocket"],
        withCredentials: true,
        autoConnect: true,
      }
    );

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("🔌 Socket connected:", socket.id);
    });

    socket.on("payment_received", (data) => {
      toast.success(`Payment received: KES ${data.amount}`);
    });

    socket.on("loan_created", () => {
      toast("New loan issued", { icon: "📢" });
    });

    socket.on("loan_defaulted", (data) => {
      toast.error(`Loan defaulted: ${data.customer}`);
    });

    socket.on("disconnect", () => {
      console.log("🔌 Socket disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef}>
      {children}
    </SocketContext.Provider>
  );
}
