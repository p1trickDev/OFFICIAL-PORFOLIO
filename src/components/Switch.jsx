import { useState } from "react";
import "../css/Switch.css";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="switch-toggle">
      <label className="switch-label">
        <input
          type="checkbox"
          className="switch-checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="switch-slider" />
      </label>
    </div>
  );
};

export default Switch;
