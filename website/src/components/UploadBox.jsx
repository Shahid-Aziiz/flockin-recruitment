import { useState } from "react";

export function UploadBox({ id, name, accept, required, idle, hint, children }) {
  const [fileName, setFileName] = useState("");
  return (
    <label htmlFor={id} className={`cv-drop${fileName ? " has-file" : ""}`}>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        required={required}
        onChange={(e) => setFileName(e.target.files[0] ? e.target.files[0].name : "")}
      />
      <span className="cv-drop__ui">
        <b>{children}</b>
        <strong>{fileName || idle}</strong>
        <em>{hint}</em>
      </span>
    </label>
  );
}
