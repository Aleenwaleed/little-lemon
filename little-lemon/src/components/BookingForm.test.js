import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./BookingForm";
import BookingForm from "./BookingForm";

// Test 1: Static text is rendered
test("renders BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Reserve a Table/i);
  expect(headingElement).toBeInTheDocument();
});

// Test 2: initializeTimes returns an array
test("initializeTimes returns an array of times", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

// Test 3: updateTimes returns same array provided by fetchAPI or fallback
test("updateTimes returns correct times array", () => {
  // Mock fetchAPI
  const mockTimes = ["12:00", "13:00", "14:00"];
  window.fetchAPI = jest.fn(() => mockTimes);

  const date = new Date();
  const times = updateTimes(date);
  expect(times).toEqual(mockTimes);

  // Clean up mock
  delete window.fetchAPI;

  // Test fallback
  const fallbackTimes = updateTimes(new Date());
  expect(fallbackTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
