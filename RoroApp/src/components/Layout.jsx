import { Outlet } from 'react-router-dom' /* 4 */

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-600 px-5 py-10">
        {/*  <h1 className="text-6xl font-bold">CRM - React</h1>
       5 
      <Outlet /> */}
      </div>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll"></main>
    </div>
  )
}

export default Layout
