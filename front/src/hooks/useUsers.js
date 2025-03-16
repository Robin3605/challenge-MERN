import { useState, useEffect } from "react";
import { getUsers } from "../services/api";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return { users };
};

export default useUsers;