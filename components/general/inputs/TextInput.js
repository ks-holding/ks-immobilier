import { useState } from "react";
import VerifyLength from "../../contact/verifyCriteres/VerifLength.js";
import VerifyEmail from "../../contact/verifyCriteres/VerifEmail.js";

export default function TextInput(props, { children }) {
  const { name, validated, setter, placeholder } = props;
  const value = props.value || "";
  const [invalidated, setInvalidated] = useState(false);
  const [err, setErr] = useState("");

  const checkInput = () => {
    switch (name) {
      case "name":
        if (VerifyLength(value, 3, 40)) {
          setInvalidated(false);
          setErr("");
        } else {
          setInvalidated(true);
          setErr("le champs doit contenir entre 3 et 40 caractères");
        }
        break;
      case "forname":
        if (VerifyLength(value, 3, 40)) {
          setInvalidated(false);
          setErr("");
        } else {
          setInvalidated(true);
          setErr("le champs doit contenir entre 3 et 40 caractères");
        }
        break;
      case "email":
        /// tout est valide
        if (VerifyLength(value, 3, 40) && VerifyEmail(value)) {
          setInvalidated(false);
          setErr("");
          return;
        }
        /// tout est valide sauf le type email
        if (VerifyLength(value, 3, 40) && !VerifyEmail(value)) {
          setInvalidated(true);
          setErr("Ceci n'est pas une adresse e-mail");
          return;
        }
        /// le type est bien un email mais le nombre de caractère n'est pas bon
        if (!VerifyLength(value, 3, 40) && VerifyEmail(value)) {
          setInvalidated(true);
          setErr("le champs doit contenir entre 3 et 40 caractères");
          return;
        }
        /// si rien n'est bon
        /// le type est bien un email mais le nombre de caractère n'est pas bon
        if (!VerifyLength(value, 3, 40) && !VerifyEmail(value)) {
          setInvalidated(true);
          setErr("le champs doit contenir entre 3 et 40 caractères, et comporter une véritable adresse email");
          return;
        }
        break;
      case "message":
        if (VerifyLength(value, 6, 500)) {
          setInvalidated(false);
          setErr("");
        } else {
          setInvalidated(true);
          setErr("le champs doit contenir entre 6 et 500 caractères");
        }
        break;
    }
  };

  const handleChange = e => {
    setter(e.target.value);
  };

  return (
    <div className="column">
      <p className="error">{err}</p>
      <label htmlFor={name}>{props.children}</label>
      <input
        className={invalidated ? "inputError" : null}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => handleChange(e)}
        onBlur={() => checkInput()}
      />
    </div>
  );
}
