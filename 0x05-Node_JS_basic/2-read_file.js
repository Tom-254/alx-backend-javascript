const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = lines[0].split(',');

    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    fields.forEach((field, index) => {
      const fieldValues = students.map((student) => student[index]);
      const uniqueFieldValues = [...new Set(fieldValues)];
      console.log(
        `Number of students in ${field}: ${
          uniqueFieldValues.length
        }. List: ${uniqueFieldValues.join(', ')}`
      );
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
