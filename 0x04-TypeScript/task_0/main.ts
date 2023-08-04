interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    location: 'Nairobi'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    location: 'Mombasa'
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');
const th3: HTMLTableHeaderCellElement = document.createElement('th');
const th4: HTMLTableHeaderCellElement = document.createElement('th');
const th5: HTMLTableHeaderCellElement = document.createElement('th');
const th6: HTMLTableHeaderCellElement = document.createElement('th');
const th7: HTMLTableHeaderCellElement = document.createElement('th');
const th8: HTMLTableHeaderCellElement = document.createElement('th');

th1.innerHTML = 'First Name';
th2.innerHTML = 'Last Name';
th3.innerHTML = 'Age';
th4.innerHTML = 'Location';
th5.innerHTML = 'First Name';
th6.innerHTML = 'Last Name';
th7.innerHTML = 'Age';
th8.innerHTML = 'Location';

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
trHead.appendChild(th4);
trHead.appendChild(th5);
trHead.appendChild(th6);
trHead.appendChild(th7);
trHead.appendChild(th8);

thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const trBody: HTMLTableRowElement = document.createElement('tr');
    const td1: HTMLTableDataCellElement = document.createElement('td');
    const td2: HTMLTableDataCellElement = document.createElement('td');
    const td3: HTMLTableDataCellElement = document.createElement('td');
    const td4: HTMLTableDataCellElement = document.createElement('td');

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.lastName;
    td3.innerHTML = student.age.toString();
    td4.innerHTML = student.location;

    trBody.appendChild(td1);
    trBody.appendChild(td2);
    trBody.appendChild(td3);
    trBody.appendChild(td4);

    tbody.appendChild(trBody);
}
);

table.appendChild(tbody);
body.appendChild(table);
