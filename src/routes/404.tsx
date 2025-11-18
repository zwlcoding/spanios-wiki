import { createFileRoute, Link } from '@tanstack/react-router'
import NotFound from '@/components/NotFound'
export const Route = createFileRoute('/404')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <NotFound />
    )
}
