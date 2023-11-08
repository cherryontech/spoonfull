import {describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import TutorialPage from './TutorialPage';
import { BrowserRouter } from "react-router-dom";


describe("AddTaskModal", () => {
    it("the next button is present in the document", () => {
        render(<TutorialPage />, {wrapper: BrowserRouter});
        const button = screen.getAllByRole("button");
        expect(button[2]).toBeInTheDocument;
    })

    it("Back button is present in the document", () => {
        render(<TutorialPage />, {wrapper: BrowserRouter});
        const button = screen.getAllByRole("button");
        expect(button[1]).toBeInTheDocument
    })

    it("Skip button is present in the document", () => {
        render(<TutorialPage />, {wrapper: BrowserRouter});
        const button = screen.getAllByRole("button");
        expect(button[0]).toBeInTheDocument;
    })
})

