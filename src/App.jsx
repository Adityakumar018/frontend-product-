import { BrowserRouter, Routes, Route } from "react-router-dom";

import Productform from "./Component/Productform"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/page" element={<Productform/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
