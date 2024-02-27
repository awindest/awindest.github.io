import { persisted } from "svelte-persisted-store"

export const numVisits = persisted('numVisits', 0)
