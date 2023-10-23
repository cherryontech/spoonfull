import {describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import TasksPage from "./TasksPage";


describe("TasksPage", () => {
    it("A hero image shows when there are no tasks yet", () => {
        render(<TasksPage />);
        const heroImg = screen.getAllByRole("img");
        expect(heroImg).toBeVisible;
    })

    it("add task button is not disabled", () => {
        render(<TasksPage />);
        const button = screen.getByRole("button");
        expect(button).not.toBeDisabled();
    })

    it("add task button is displayed", () => {
        render(<TasksPage />);
        const button = screen.getByRole("button");
        expect(button).toBeVisible();
    })

})