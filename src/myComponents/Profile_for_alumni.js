import React, { useEffect, useState } from "react";
import db from "../FireBase";
import "./profile.css";

function Profilealumni() {
  const [student, setStudent] = useState([]);
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");
  const [batch, setBatch] = useState("");
  const [projects, setProjects] = useState("");
  const [research, setResearch] = useState("");
  const [experience, setExperience] = useState("");
  const [branch, setBranch] = useState("");
  const [position, setPosition] = useState("");
  const [worked, setWorked] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    db.collection("institute").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().admission == "UI20CS74") {
          setStudent({
            id: doc.id,
            data: doc.data(),
          });
          setName(doc.data()?.name);
          setAdmission(doc.data()?.admission);
          setBatch(doc.data()?.batch);
          setEmail(doc.data()?.email);
          setPhone(doc.data()?.phone);
        }
      });
    });
  }, []);
  console.log(student);

  useEffect(() => {
    if (student) {
      db.collection("institute")
        .doc(student.id)
        .collection("details")
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            setDetail({
              id: doc.id,
              data: doc.data(),
            });
            setProjects(doc.data()?.projects);
            setBranch(doc.data()?.branch);
            setPosition(doc.data()?.currentPosition);
            setResearch(doc.data()?.research);
            setExperience(doc.data()?.experience);
            setProjects(doc.data()?.projects);
            setWorked(doc.data()?.worked);
          });
        });
    }
  }, [student]);
  console.log(detail);
  console.log(name);

  const save = (e) => {
    e.preventDefault();
    db.collection("institute").doc(student.id).update({
      name: name,
      admission: admission,
      batch: batch,
    });
    db.collection("institute")
      .doc(student.id)
      .collection("details")
      .doc(detail.id)
      .update({
        // company: company,
        // about: about,
      });
  };

  return (
    <div className="profile_page">
      <div className="profile_page_left">
        <div className="profile_img">
          <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <div className="profile_img_absolute">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="line_profile"></div>
        <div className="profile_dis">
          <div className="profile_name">
            <div>
              <h2>Name</h2>
              <h3>{name}</h3>
            </div>
            <div>
              <h2>Passing Year</h2>
              <h3>{batch}</h3>
            </div>
            <div>
              <h2>Phone No.</h2>
              <h3>{phone}</h3>
            </div>
            <div>
              <h2>Email</h2>
              <a href="#">{email}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_page_right">
        <h2>
          <i class="fas fa-user"></i> About
        </h2>
        <div>
          <h3>Branch :</h3>
          <h4>{branch}</h4>
        </div>
        <div>
          <h3>Current Position :</h3>
          <h4>{position}</h4>
        </div>
        <div>
          <h3>Research Field :</h3>
          <h4>{research}</h4>
        </div>
        <div>
          <h3>Work Experience :</h3>
          <h4>{experience}</h4>
        </div>
        <div>
          <h3>Projects During College :</h3>
          <h4>{projects}</h4>
        </div>
        <div>
          <h3>Worked in :</h3>
          <h4>{worked}</h4>
        </div>
        <div id="profile_button">
          <button>Edit</button>
          <button>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Profilealumni;
