import { render, screen } from "@testing-library/react";
import { useNavigate, userEvent} from 'react-router-dom';
import React from "react";
// import {Login} from '../componentes/login.js'
import {Router} from '../componentes/App.js'
  
jest.mock('../firebase/firebaseConfig.js');
test( 'router', async () => {
    const navigate = useNavigate();
    
    render(<Router/>)
    navigate('/Notes');
    expect(screen.getByText(/you always can notes/i)).toBeInTheDocument()

    const user = userEvent.setup()

    await user.click(screen.getByText(/about/i))
})


