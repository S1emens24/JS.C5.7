// 1. Подготовка данных.

const parser = new DOMParser();

const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

// 2. Получение данных.

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelector('student');
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

const langAttr = nameNode.getAttribute("lang");

// 3. Результат.

const result = {
  lang: langAttr.textContent,
  list: listNode.textContent,
  student: studentNode.textContent,
  name: nameNode.textContent,
  first: firstNode.textContent,
  second: secondNode.textContent,
  age: Number(ageNode.textContent),
  prof:profNode.textContent,
};
console.log("result", result);