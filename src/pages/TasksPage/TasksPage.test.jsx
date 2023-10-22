import {describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import TasksPage from "./TasksPage";


describe("TasksPage", () => {
    it("A hero image shows when there are no tasks yet", () => {
        render(<TasksPage />);
        const heroImg = screen.getAllByRole("img");
        expect(heroImg).toBeVisible;
    })

})