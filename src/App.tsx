import { BrowserRouter, Route, Routes } from "react-router"
import AppLayout from "./pages/AppLayout"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
