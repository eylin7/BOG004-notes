import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import  Login  from "../componentes/login";
import Notes from "../componentes/notes";
import { Router, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom'
// import {Router} from '../componentes/App.js'

jest.mock("../firebase/firebaseConfig.js");

test("router", async () => {
    const history = createMemoryHistory({ initialEntries: [''] });
  render(<Router navigator={history} location={history.location} > <Routes>
    <Route path="" element={<Login/>}/>
    <Route path="/Notes" element={<Notes/>} />
   </Routes></Router>);
  fireEvent.click(screen.getByText("Ingresar con google"));
  await waitFor(() => screen.getByText(/Welcome/i));
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  expect(history.location.pathname).toBe('/Notes');
});

