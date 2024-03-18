import { Children } from "react";
import { useState } from "react";
import VerifyLength from "../../contact/verifyCriteres/VerifLength";

export default function TextArea(props) {
  const { setter, placeholder } = props;
  const value = props.value || "";
  const [invalidated, setInvalidated] = useState(false);
  const [err, setErr] = useState("");

  const checkInput = () => {
    if (VerifyLength(value, 6, 500)) {
      setInvalidated(false);
      setErr("");
    } else {
      setInvalidated(true);
      setErr("le champs doit contenir entre 6 et 500 caractères");
    }
  };

  return (
    <div className="column">
      <p className="error">{err}</p>
      <label htmlFor="message"></label>
      <textarea
        className={invalidated ? "inputError" : null}
        name="message"
        id="message"
        cols="30"
        value={value}
        placeholder={placeholder}
        onChange={e => setter(e.target.value)}
        onBlur={() => checkInput()}
        rows="4"
      ></textarea>
    </div>
  );
}
