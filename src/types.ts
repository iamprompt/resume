export interface Technology {
  section: string
  details: string[] | string
}

export interface Education {
  head: string
  details: string
}

export interface Work {
  position: string
  company: string
  url?: string
  years: string[]
  details: string[]
}

export interface Project {
  name: string
  details: string
  url?: string
}

export interface Honors {
  name: string
  details: string[]
}

export type Interests = string
