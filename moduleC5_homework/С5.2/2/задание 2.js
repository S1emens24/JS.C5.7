/* Этап 1. Подготовка данных */

const parser = new DOMParser();

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const list = data.list;

/* Этап 3. Запись данных в результирующий объект */

const result = {
  name: list.name,
  age: Number(list.age),
  prof: list.prof,
};
console.log("result", result);