import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
    
    it("navbar rendering", () => {
        expect(Navbar).toBeInTheDocument;
    })

})