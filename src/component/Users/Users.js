import React, { useContext } from "react";
import UserItem from "./UserItem";
import "./User.css";


import Spinning  from "../Spinnercomponent/Spinner";
import GithubContext from'../../Context/github/githubContext';



export default function Users() {
  const githubContext =  useContext(GithubContext);
  const { loading,users }=githubContext;
  if (loading) {
    return <Spinning />;
  } else {
    return (
      <div className="userStyle">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
