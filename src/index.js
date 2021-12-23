import React from 'react'
import './index.css'
import App from './App'
import SignInSide from './page/login/SignInSide'
import SignUp from './page/signup/SignUp'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignInSide />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
