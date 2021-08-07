/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        // console.log(`${i} 번째`);
        // console.log("원래 학생", students);
        // console.log("원래 샌드위치", sandwiches);
        if (students[0] !== sandwiches[0]) {
            ++count;
            if (count === students.length) {
                return students.length;
            }
            students.push(students.shift());
            --i;
            // console.log("바뀐 Students: ", students);
            // console.log("-------------------------");
            continue;
        }
        count = 0;
        i = -1;
        students.shift();
        sandwiches.shift();

        // console.log("After shift");
        // console.log("Students: ", students);
        // console.log("Sandwiches: ", sandwiches);
        // console.log("-----------------------------");
    }
    return 0;
};

// console.log(countStudents([1,1,0,0], [0,10,1]));