export const regexNoSQL =
  /(\$script)|(\$and)|(\$lte)|(\$in)|(\$or)|(\$lt)|(\$gt)|($gte)|($nin)|[\{\}\[\]='"<>^|]/;
export const regexEmail =
  /^[a-zA-Z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
export const regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
