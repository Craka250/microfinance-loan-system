import useAuth from "./useAuth";

export default function useRole() {
  const { user } = useAuth();

  return {
    isAdmin: user?.role === "admin",
    isOfficer: user?.role === "officer",
    isFinance: user?.role === "finance",
  };
}
