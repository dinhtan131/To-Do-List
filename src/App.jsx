import Header from './components/layout/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/footer'


function App() {

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App