import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "../api/index";
import QualitiesList from "./qualitiesList";
import { useHistory, useParams } from "react-router-dom";

const UserPage = ({ match }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  const params = useParams();
  const { userId } = params;
  api.users.getById(userId).then((date) => setUser(date));
  const handleClick = () => {
    history.push("/users");
  };
  const userInfo = (user) => {
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>CompletedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button onClick={handleClick}>Все пользователи</button>
      </>
    );
  };
  return <>{user ? userInfo(user) : <h1>Loading...</h1>}</>;
};

export default UserPage;

UserPage.propTypes = {
  match: PropTypes.object,
};
