import React, { useEffect, Fragment, useContext } from "react";
import Spinning from "../Spinnercomponent/Spinner";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GithubContext from '../../Context/github/githubContext'
import {
  faCheckSquare,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Repos from "../Repose/Repos";


function User({  match }) {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user ,repos,getUserRepos} = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);


  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading)
    return <Spinning />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      hireable:{""}
      {hireable ? (
        <FontAwesomeIcon icon={faCheckSquare} />
      ) : (
          <FontAwesomeIcon icon={faTimesCircle} />
        )}
      <div className="card grid-2">
        <div className=" all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "250px" }} />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company :</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  {login}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following:{following}</div>
        <div className="badge badge-light">Public Repos:{public_repos}</div>
        <div className="badge badge-dark">Public Gists:{public_gists}</div>{" "}
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
}



export default User;
