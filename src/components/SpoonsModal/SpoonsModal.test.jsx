import {describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import SpoonsModal from "./SpoonsModal";


describe("SpoonsModal", () => {
    it("a chart showing spoons distribution is displayed", () => {
        render(<SpoonsModal />);
        const chart = screen.getByRole("img");
        expect(chart).toBeInTheDocument;
    })
})