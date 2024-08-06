export interface Word {
  startTime: number
  endTime: number
  data: string
}

export interface Sentence {
  words: Word[]
}
