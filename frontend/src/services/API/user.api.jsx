import { useEffect } from "react";
import endpoint from "./axios";

export function APIdataUsers(setUsers, USERS_URL, setLoading) {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await endpoint.get(USERS_URL);
        setUsers(res.data.users);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setLoading(false); // Make sure to set loading to false even in case of an error
      }
    };

    fetchUsers();
  }, [setUsers, USERS_URL, setLoading]);
}

export function APIdeleteUser (USERS_URL, userID, selectedUser){
  useEffect(() => {
    const DeleteUser = async () => {
      if(userID === selectedUser.user_id){
        console.log(userID , selectedUser.user_id);
        // try {
        //   const res = await endpoint.delete(USERS_URL);
  
        // } catch (error) {
        //   console.error("Failed to fetch users:", error);
        // }
      }
    };

    DeleteUser();
  }, [USERS_URL, userID, selectedUser]);

}

export function GetUserById(SET, USER_URL, ID) {
  // useEffect(()=>{
    const fetchUser = async () => {
      console.log("fetchUser");
      try {
        const res = await endpoint.get(`${USER_URL}/${ID}`);
        SET(res.data.users);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    if (ID) {
      fetchUser();
    }
  // })

}