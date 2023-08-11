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

// main.ts

function renderTable(students: Student[]) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
  
    students.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  // Render the table
  renderTable(studentsList);