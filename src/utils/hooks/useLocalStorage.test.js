import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("sets and gets item from localStorage", () => {
    const key = "testKey";
    const value = { test: "value" };

    const { result } = renderHook(() => useLocalStorage(key));

    // Set item
    act(() => {
      result.current.setItem(value);
    });

    // Get item
    expect(result.current.getItem()).toEqual(value);
  });

  it("removes item from localStorage", () => {
    const key = "testKey";
    const value = { test: "value" };

    const { result } = renderHook(() => useLocalStorage(key));

    // Set item
    act(() => {
      result.current.setItem(value);
    });

    // Remove item
    act(() => {
      result.current.removeItem();
    });

    // Get item should return undefined after removal
    expect(result.current.getItem()).toBeUndefined();
  });

  it("handles errors", () => {
    // Mock localStorage methods to throw errors
    vi.spyOn(window.localStorage, "setItem").mockImplementation(() => {
      throw new Error("setItem error");
    });
    vi.spyOn(window.localStorage, "getItem").mockImplementation(() => {
      throw new Error("getItem error");
    });
    vi.spyOn(window.localStorage, "removeItem").mockImplementation(() => {
      throw new Error("removeItem error");
    });

    const key = "testKey";
    const { result } = renderHook(() => useLocalStorage(key));

    // Test setItem error handling
    expect(() => {
      result.current.setItem({ test: "value" });
    }).not.toThrow();

    // Test getItem error handling
    expect(() => {
      result.current.getItem();
    }).not.toThrow();

    // Test removeItem error handling
    expect(() => {
      result.current.removeItem();
    }).not.toThrow();
  });
});
