import React from "react";
import User from "../components/User/User";

const ProfilePage = (props) => {
  return (
    <>
      <User>{props.children}</User>
    </>
  );
};

export default ProfilePage;
