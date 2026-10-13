import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import Sidebar from "../../../components/Sidebar"

export const Route = createFileRoute("/_app/(app)")({
  beforeLoad: () => {
    const token = localStorage.getItem("token")

    if (!token) {
      throw redirect({
        to: "/login",
      })
    }
  },

  component: () => {
    return (
      <div className="flex flex-row w-full h-screen">
        <Sidebar />
        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    )
  },
})