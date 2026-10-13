import { createFileRoute } from "@tanstack/react-router"
import Dashboard from "../../../features/dashboard"

export const Route = createFileRoute("/_app/(app)/dashboard")({
  component: Dashboard,
})