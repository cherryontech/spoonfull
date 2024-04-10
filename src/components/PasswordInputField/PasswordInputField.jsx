import InputField from "../InputField/InputField";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const PasswordInputField = () => {
  const [visiblePassword, setVisiblePassword] = useState("password");
  const handleVisiblePassword = (e) => {
    e.preventDefault();
    setVisiblePassword(visiblePassword === "text" ? "password" : "text");
  };
  return (
    <div className="relative">
      <InputField
        name="password"
        label="Password"
        type={visiblePassword}
        className="relative"
      />
      <button
        className="absolute bottom-3 right-2"
        onClick={handleVisiblePassword}
      >
        {visiblePassword === "password" ? (
          <VisibilityOutlinedIcon
            sx={{
              color: "rgba(0, 17, 17, 0.50)",
            }}
          />
        ) : (
          <VisibilityOffOutlinedIcon
            sx={{
              color: "rgba(0, 17, 17, 0.50)",
            }}
          />
        )}
      </button>
    </div>
  );
};

export default PasswordInputField;
