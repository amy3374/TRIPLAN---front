import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <img width={30} src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>
      <Link to="/myPlan"><FontAwesomeIcon icon={faHome} size='2x'/></Link>
    </div>
  )
}

export default User
