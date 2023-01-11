import { Visibility, Weather } from './enums'
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> // Extiende de DiaryEntry los tipos de datos que se indican como parametros
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // Hereda los tipos de datos de DiaryEntry exceptuando el tipo "Comment"
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
