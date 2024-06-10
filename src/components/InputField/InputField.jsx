/* eslint-disable react/prop-types */

const InputField = ({ name, label, type, register }) => {
  const regularField = { required: `${label} is required` };
  const passwordField = {
    required: `${label} is required`,
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message:
        "Password must contain at least 1 number and 1 special character",
    },
  };
  const emailField = {
    required: `${label} is required`,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  };

  return (
    <div className="mt-4">
      <label htmlFor={name}>{label}</label>
      <input
        {...register(
          name,
          label === "Password"
            ? passwordField
            : label === "Email Address"
            ? emailField
            : regularField
        )}
        className="text-body w-full h-12 mt-2 p-4 rounded border-border border"
        type={type}
        data-testid={`${name}-input`}
      />
    </div>
  );
};

export default InputField;
