import {describe, it, expect} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskModal from './AddTaskModal';


describe("AddTaskModal", () => {
    it("add button is disabled on load", () => {
        render(<AddTaskModal />);
        const button = screen.getAllByRole("button");
        expect(button[2]).toHaveAttribute("disabled");
    })

    it("clear button is not disabled", () => {
        render(<AddTaskModal />);
        const button = screen.getAllByRole("button");
        expect(button[0]).not.toBeDisabled();
    })

    it("cancel button is not disabled", () => {
        render(<AddTaskModal />);
        const button = screen.getAllByRole("button");
        expect(button[1]).not.toBeDisabled();
    })

    it("clear button calls onClear function", () => {
        render(<AddTaskModal />);
        const button = screen.getAllByRole("button");
        const inputField = screen.getByPlaceholderText("Type the name of your task");
        fireEvent.click(button[0]);
        expect(inputField.value).toBe("");
    })

    it("should be able to type in task input field", () => {
        render(<AddTaskModal />);
        const inputField = screen.getByPlaceholderText("Type the name of your task");
        fireEvent.change(inputField, { target: { value: "New Task"}});
        expect(inputField.value).toBe("New Task");
    })

    it("should be able to type in spoon input field", () => {
        render(<AddTaskModal />);
        const inputField = screen.getByPlaceholderText("00");
        fireEvent.change(inputField, { target: { value: "12"}});
        expect(inputField.value).toBe("12");
    })
})

