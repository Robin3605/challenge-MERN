import React from "react";
import CreateUserForm from "../components/CreateUserForm";

const CreateUser = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Usuario</h1>
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;