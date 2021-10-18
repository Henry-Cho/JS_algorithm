/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
    students.sort((a,b) => b-a)
    let ans = 0;
    for (let i = 0; i < students.length; i++) {
        ans += Math.abs(Math.max(...seats) - students[i]);
        let max_idx = seats.indexOf(Math.max(...seats));
        seats.splice(max_idx, 1)
    }
    
    return ans;
};