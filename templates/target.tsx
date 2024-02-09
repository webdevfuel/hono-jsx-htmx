import type { FC } from 'hono/jsx'

export const Target: FC = () => {
    return (
        <div id="target" class="font-bold bg-gray-500 text-white rounded-md px-2 py-0.5 text-sm flex items-center">
            Target
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target ml-1"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
        </div>
    )
}


