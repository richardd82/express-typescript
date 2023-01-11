import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!isWeather(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromRequest
}

const isWeather = (param: any): Boolean => {
  return Object.values(Weather).includes(param)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isVisibility(visibilityFromRequest) || !isString(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
