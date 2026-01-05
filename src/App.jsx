import Header from './components/layout/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/footer'
import { getAccountApi } from './services/apiService'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/authContext'
import { Spin } from 'antd'

function App() {
  const { setUser, isApploading, setIsApploading } = useContext(AuthContext)

  const fetchUserInfo = async () => {
    const res = await getAccountApi();
    await delay(1000);
    if (res.data) {
      setUser(res.data.data.user)
      console.log("Data Check", res.data)
    }
    setIsApploading(false);
  }
  const delay = (mili) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, mili);
    });
  };

  useEffect(() => {
    fetchUserInfo();
  }, [])

  return (
    <>
      {isApploading == true ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          <Spin />
        </div> :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>}
    </>
  )
}

export default App