import { createContext, useEffect } from "react";
import { io } from "socket.io-client";
import toast from "react-hot-toast";

export const SocketContext = createContext();

const socket = io("http://localhost:5000");

export default function SocketProvider({ children }) {
  useEffect(() => {
    socket.on("payment_received", (data) => {
      toast.success(`Payment received: KES ${data.amount}`);
    });

    socket.on("loan_created", () => {
      toast("New loan issued", { icon: "📢" });
    });

    socket.on("loan_defaulted", (data) => {
      toast.error(`Loan defaulted: ${data.customer}`);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
