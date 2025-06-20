document.getElementById("problemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const difficulty = document.getElementById("difficulty").value;
    const status = document.getElementById("status").value;

    const problem = {
        title: title,
        difficulty: difficulty,
        status: status
    };

    let problems = JSON.parse(localStorage.getItem("problems")) || [];
    problems.push(problem);
    localStorage.setItem("problems", JSON.stringify(problems));

    displayProblems();
    this.reset(); // clear form
});

function displayProblems() {
    const list = document.getElementById("problemList");
    list.innerHTML = "";

    const problems = JSON.parse(localStorage.getItem("problems")) || [];

    problems.forEach((problem, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${problem.title}</strong> - 
        <span style="color:${getColor(problem.difficulty)}">${problem.difficulty}</span> - 
        ${problem.status}`;
        list.appendChild(li);
    });
}

function getColor(level) {
    if (level === "Easy") return "green";
    if (level === "Medium") return "orange";
    return "red";
}

displayProblems();
