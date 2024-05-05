import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import SignUpPage from "./SignUpPage";
import { initializeApp } from "firebase/app";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

vi.mock("firebase/app", () => {
  return {
    initializeApp: vi.fn(),
  };
});

vi.mock("firebase/auth", () => {
  return {
    getAuth: vi.fn(),
    createUserWithEmailAndPassword: vi.fn().mockResolvedValue({}),
  };
});

describe("SignUpPage", () => {
  it("renders the sign-up form correctly", () => {
    const { getByText, getByTestId } = render(<SignUpPage />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId("firstName-input")).toBeInTheDocument();
    expect(getByTestId("email-input")).toBeInTheDocument();
    expect(getByTestId("password-input")).toBeInTheDocument();
    expect(getByText("SIGN UP")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    const createUserWithEmailAndPasswordMock = vi.fn();
    const getAuthMock = vi.fn();
    getAuthMock.mockReturnValue({
      createUserWithEmailAndPassword: createUserWithEmailAndPasswordMock,
    });
    createUserWithEmailAndPasswordMock.mockResolvedValue({});

    initializeApp.mockReturnValue({ auth: getAuthMock });

    const { getByText, getByTestId } = render(<SignUpPage />, {
      wrapper: BrowserRouter,
    });

    const nameInput = getByTestId("firstName-input");
    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");

    act(() => {
      nameInput.value = "Jane";
      fireEvent.input(nameInput);

      emailInput.value = "jane@example.com";
      fireEvent.input(emailInput);

      passwordInput.value = "password123";
      fireEvent.input(passwordInput);
    });

    act(() => {
      fireEvent.click(getByText("SIGN UP"));
    });

    setTimeout(() => {
      expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(
        "jane@example.com",
        "password123"
      );
    }, 1000);
  });

  it("displays no error messages for valid input", async () => {
    const { getByTestId, queryByText, getByText } = render(<SignUpPage />, {
      wrapper: BrowserRouter,
    });

    fireEvent.change(getByTestId("firstName-input"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByTestId("password-input"), {
      target: { value: "validpassword123" },
    });

    fireEvent.click(getByText("SIGN UP"));

    await waitFor(() => {});

    expect(queryByText("Name is required")).toBeNull();
    expect(queryByText("Invalid email address")).toBeNull();
    expect(
      queryByText("Password must be at least 8 characters long")
    ).toBeNull();
  });

  it("changes state correctly when clicked", () => {
    const { getByTestId } = render(<SignUpPage />, {
      wrapper: BrowserRouter,
    });

    const checkboxParent = getByTestId("remember-me-checkbox");
    const rememberMeCheckbox = checkboxParent.firstElementChild;

    expect(rememberMeCheckbox).not.toBeChecked();

    fireEvent.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeChecked();
  });
});
