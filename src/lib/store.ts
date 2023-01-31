import { writable } from 'svelte/store'

type Icon = {
  title: string
  data: string
}

export const store = writable<Icon | null>(null)