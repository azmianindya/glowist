import { createFileRoute } from "@tanstack/react-router"
import Skincare from "../../../features/skincare"

export const Route = createFileRoute("/_app/(app)/skincare")({
  component: Skincare,
})