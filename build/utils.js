"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!isWeather(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isVisibility(visibilityFromRequest) || !isString(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
