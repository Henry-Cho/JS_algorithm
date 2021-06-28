var minTimeToVisitAllPoints = function(points) {
    let answer = points.reduce((acc, [x, y], idx) =>
        idx === points.length - 1? acc : acc + Math.max(Math.abs(x - points[idx + 1][0]), Math.abs(y - points[idx + 1][1]))
    , 0)
    return answer;
};

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));