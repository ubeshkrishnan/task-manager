import React from "react";
import profileImg from "../../assets/images/lg/avatar3.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import {Url} from "../../Global_variable/api_link";

function MemberProfileCard({id}) {
    const [memberprofile, setMemberProfile] = useState([]);
    
    useEffect(() => {
        console.log('id123456',id)
      axios
        .get(Url+`/getmembers/${id}`)
        .then((response) => {
            console.log(response.data);
            setMemberProfile([response.data])})
        .catch((error) => console.log(error));
    }, [id]);
console.log('memberprofile',memberprofile);

  
    return (<div>{memberprofile.length > 0 && memberprofile.map((member,i) => (
      <div key={"skhd"+ id}>
        <div className="card teacher-card  mb-3">
          <div className="card-body d-flex teacher-fulldeatil">
            <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <a href="#!">
                <img
                  src={profileImg}
                  alt=""
                  className="avatar xl rounded-circle img-thumbnail shadow-sm"
                />
              </a>
              <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6">
                  {member.first_name }
                </h6>
                <span style={{marginTop:"5px"}} className="text-muted small">EMPLOYEE ID - {member.user_id}</span>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">{member.designation}</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
             Enova 
              </span>
              <p className="mt-2 small">
                {member.description}
    </p>
              <div className="row g-2 pt-2">
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-ui-touch-phone"></i>
                    <span className="ms-2 small">{member.phone} </span>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-email"></i>
                    <span className="ms-2 small">{member.user_email}</span>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-birthday-cake"></i>
                    <span className="ms-2 small">19/03/1980</span>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-address-book"></i>
                    <span className="ms-2 small">
                      {member.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}</div>);
  }
  
  export default MemberProfileCard;