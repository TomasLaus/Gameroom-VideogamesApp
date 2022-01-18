import { render, screen } from '@testing-library/react';
import rootReducer from "./reducer/index";
import store from './store/index';
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom'
import CreateForm from './components/CreateForm/CreateForm'



test("should return initial state", () => {
  expect(rootReducer(undefined, {})).toEqual({
    videogames: [],
    allVideogames: [],
    videogameDetail: [],
    genres: []
  });
});

describe("CreateForm", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateForm />
        </BrowserRouter>
      </Provider>
    );
  });
  it("Form must have an input text for Name /", () => {
    const element = screen.getByLabelText("Name");
    expect(element.type).toBe("text");
  });
  it("Form must have an input textarea for Description /", () => {
    const element = screen.getByLabelText("Description");
    expect(element.type).toBe("textarea");
  });
  it("Form must have an input text for Image URL /", () => {
    const element = screen.getByLabelText("Image");
    expect(element.type).toBe("text");
  });
});
