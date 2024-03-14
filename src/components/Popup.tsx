import "./Popup.css";

interface PopupProps {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

function Popup(props: PopupProps) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="btn-close"
          onClick={() => props.setTrigger(false)}
        ></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
