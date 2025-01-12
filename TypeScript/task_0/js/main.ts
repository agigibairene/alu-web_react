// Create interface
interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1 : Student = {
    firstName: "John",
    lastName: "Dramani Mahama",
    age: 66,
    location: "Accra-Ghana"
};
let student2 : Student ={
    firstName: "Jane",
    lastName: "Naana Opoku-Agyemang",
    age: 78,
    location: "Accra-Ghana"
};

let studentsList : Student[] = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Create a header row
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Age', 'Location'];
headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});

// Append the header row to the table
table.appendChild(headerRow);

// Create a row for each student
studentsList.forEach(student => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const studentValues: string[] = Object.values(student);
    studentValues.forEach(value => {
        const td: HTMLTableDataCellElement = document.createElement('td');
        td.textContent = value.toString();
        row.appendChild(td);
    });
    table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);