import { CheckmarkCircleOutline, CloseCircleOutline } from "react-ionicons";

export default function ModalWindow(props) {
  const { title, status, description, setModalOpen } = props;

  const closeModal = () => {
    console.log("close");
    setModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="wrapper">
        {status === "success" && <CheckmarkCircleOutline className="validate" width="85px" height="85px" />}
        {status === "failed" && <CloseCircleOutline width="85px" height="85px" className="error" />}
        <div className="close_btn" onClick={() => closeModal()}>
          X
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cache"></div>
    </div>
  );
}
