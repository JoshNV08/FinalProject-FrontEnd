import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchProfile(token);
    }
  }, []);

  const fetchProfile = (token) => {
    axios
      .get("http://localhost:3000/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(
          "Error fetching user: " +
            (error.response?.data?.error || error.message)
        );
      });
  };

  const handleProfileChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    axios
      .put("http://localhost:3000/users/profile", user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setSuccess("Profile updated successfully");
        setError("");
        fetchProfile(token);
      })
      .catch((error) => {
        setError(
          "Error updating profile: " +
            (error.response?.data?.error || error.message)
        );
      });
  };

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    axios
      .put(
        "http://localhost:3000/users/profile",
        {
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setSuccess("Password updated successfully");
        setError("");
        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        setError(
          "Error updating password: " +
            (error.response?.data?.error || error.message)
        );
      });
  };

  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <h2>Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Personal Information</Card.Header>
            <Card.Body>
              <Form onSubmit={handleProfileSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Information
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Password</Card.Header>
            <Card.Body>
              <Form onSubmit={handlePasswordSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}

export default EditUser;
