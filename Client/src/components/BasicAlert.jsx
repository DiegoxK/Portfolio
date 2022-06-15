import React from "react";

const BasicAlert = ({ state }) => {
  return (
    <div>
      {state ? (
        <p style={{ color: "green" }} className="edit-alert">
          Editado con exito
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default BasicAlert;
