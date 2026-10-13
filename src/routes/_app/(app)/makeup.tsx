import { createFileRoute } from "@tanstack/react-router"
import Makeup from "../../../features/makeup"

export const Route = createFileRoute("/_app/(app)/makeup")({
  component: Makeup,
})