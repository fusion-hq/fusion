import React from "react";

export default function Tags({ filterTag, deleteFilterTag }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "0px",
        marginRight: "10px",
      }}
    >
      <h1
        style={{
          borderRadius: "100px",
          padding: "5px 15px 5px 15px",
          minHeight: "35px",
          backgroundColor: "#1890ff",
          fontSize: "15px",
          fontWeight: "500",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {`${filterTag.Property} ${filterTag.Operator} ${filterTag.Value}`}
      </h1>
      <button
        onClick={() => deleteFilterTag(filterTag.id)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          margin: "-5px 0px 0px 5px",
          color: "#cccccc",
        }}
      >
        X
      </button>
    </div>
  );
}