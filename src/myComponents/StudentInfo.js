import React, { useEffect, useState } from "react";
import db from "../FireBase";

function StudentInfo() {
  const [student, setStudent] = useState([]);
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");
  const [about, setAbout] = useState("");
  const [company, setCompany] = useState("");
  const [batch, setBatch] = useState("");

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
            setCompany(doc.data()?.company);
            setAbout(doc.data()?.about);
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
        company: company,
        about: about,
      });
  };

  return (
    <>
      <div>{student.data?.admission}</div>
      <div>{student.data?.batch}</div>
      <div>{student.data?.name}</div>
      <div>{detail.data?.company}</div>
      <div>{detail.data?.about}</div>
      <form>
        name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        company
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br />
        about
        <input
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <br />
        admission
        <input
          type="text"
          value={admission}
          onChange={(e) => setAdmission(e.target.value)}
        />
        <br />
        batch
        <input
          type="text"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <br />
        <button type="submit" onClick={save}>
          save
        </button>
      </form>
    </>
  );
}

export default StudentInfo;
