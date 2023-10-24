import { Outlet, Link, useLocation } from 'react-router-dom' /* 4 */

const Layout = () => {
  const location = useLocation()

  console.log(location)

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - React
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === '/' ? 'text-blue-300' : 'text-white'
            }
            text-2xl block mt-2 hover:text-blue-300 `}
            to="/"
          >
            Index
          </Link>
          <Link
            className={`${
              location.pathname === '/cliente/nuevo'
                ? 'text-blue-300'
                : 'text-white'
            }
            text-2xl block mt-2 hover:text-blue-300 `}
            to="/cliente/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        {/*  5 */}
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
