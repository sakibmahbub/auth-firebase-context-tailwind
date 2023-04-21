import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h3>Hello nigga {user && <span>{user.displayName}</span>}</h3>
    </div>
  );
};

export default Home;
