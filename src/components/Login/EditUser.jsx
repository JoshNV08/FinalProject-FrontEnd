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
import { useSelector } from "react-redux";

function EditUser() {
  const loggedUser = useSelector((state) => state.user);
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

  useEffect(() => {
    fetchProfile();
  }, [loggedUser.token]);

  const fetchProfile = () => {
    if (!loggedUser.token) {
      setError("No token found");
      return;
    }

    axios
      .get("http://localhost:3000/users/user/profile/" + loggedUser.id, {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(
          "Error al obtener usuario: " +
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

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
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
      .put("http://localhost:3000/user/profile", user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setSuccess("Perfil actualizado con éxito");
        setError("");
        fetchProfile();
      })
      .catch((error) => {
        setError(
          "Error al actualizar el perfil: " +
            (error.response?.data?.error || error.message)
        );
      });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Las nuevas contraseñas no coinciden");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    axios
      .put(
        "http://localhost:3000/user/password",
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
      .then(() => {
        setSuccess("Contraseña actualizada con éxito");
        setError("");
        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        setError(
          "Error al actualizar la contraseña: " +
            (error.response?.data?.error || error.message)
        );
      });
  };

  return (
    <Container>
      <h2>Perfil</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Información Personal</Card.Header>
            <Card.Body>
              <Form onSubmit={handleProfileSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
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
                <Button variant="primary" type="submit">
                  Actualizar Información
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Contraseña</Card.Header>
            <Card.Body>
              <Form onSubmit={handlePasswordSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña Actual</Form.Label>
                  <Form.Control
                    type="password"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nueva Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Actualizar Contraseña
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EditUser;
