export interface Intro {
  name: string
  nickname: string
  phone: string
  email: string
  location: string
  links?: Array<[string, string]>
}

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
  tagline?: string
  details?: string
  links?: Array<[string, string]>
}

export interface Honors {
  name: string
  years?: string[]
  issuer?: string
  details: string[]
}

export type Interests = string
