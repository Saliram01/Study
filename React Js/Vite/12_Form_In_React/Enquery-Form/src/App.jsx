import { useState } from "react";
import "./App.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uPhone: "",
    uMessage: "",
    index: "",
  });

  const [userData, setUserData] = useState([]);

  const getValue = (e) => {
    let oldData = { ...formData };
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  const handleSubmit = (e) => {
    let currentUserData = {
      uName: formData.uName,
      uEmail: formData.uEmail,
      uPhone: formData.uPhone,
      uMessage: formData.uMessage,
    };

    if (formData.index === "") {
      let checkFilterData = userData.filter(
        (v) => v.uEmail === formData.uEmail || v.uPhone === formData.uPhone
      );

      if (checkFilterData.length === 1) {
        toast.error("Email or Phone Already Exists...");
      } else {
        let oldUserData = [...userData, currentUserData];

        setUserData(oldUserData);
        toast.success("Form Data Added Successfully...");
        setFormData({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      }
    } else {
      let editId = formData.index;
      let oldUserData = userData;

      let checkFilterData = userData.filter(
        (v, i) =>
          (v.uEmail === formData.uEmail || v.uPhone === formData.uPhone) &&
          (i != editId)
      );

      if (checkFilterData.length !== 1) {
        oldUserData[editId]["uName"] = formData.uName;
        oldUserData[editId]["uEmail"] = formData.uEmail;
        oldUserData[editId]["uPhone"] = formData.uPhone;
        oldUserData[editId]["uMessage"] = formData.uMessage;
        setUserData(oldUserData);
        setFormData({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone Already Exists...");
      }
    }
    e.preventDefault();
  };

  const handleDelete = (ind) => {
    setUserData(userData.filter((v, i) => i !== ind));
    toast.success("Data is deleted !!");
  };

  const editData = (indNumber) => {
    let editUserData = userData.filter((v, i) => i === indNumber)[0];
    editUserData["index"] = indNumber;
    setFormData(editUserData);
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h2>Enquery-Form</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form action="" onSubmit={handleSubmit}>
              <div className="pb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uName}
                  id="name"
                  name="uName"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={getValue}
                  value={formData.uEmail}
                  id="email"
                  name="uEmail"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uPhone}
                  id="phone"
                  name="uPhone"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  onChange={getValue}
                  value={formData.uMessage}
                  id="message"
                  name="uMessage"
                  className="form-control"
                  rows={3}
                />
              </div>

              <button className="btn btn-primary">
                {formData.index === "" ? "Update" : "Save"}
              </button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{item.uName}</td>
                        <td>{item.uEmail}</td>
                        <td>{item.uPhone}</td>
                        <td>{item.uMessage}</td>
                        <td className="d-flex gap-2">
                          <button onClick={() => handleDelete(ind)}>
                            Delete
                          </button>
                          <button onClick={() => editData(ind)}>Update</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
