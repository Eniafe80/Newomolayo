const users = {
  student1: { password: "1234", name: "John Doe", role: "student" },
  student2: { password: "abcd", name: "Jane Smith", role: "student" },
  admin1: { password: "adminpass", name: "Mrs. Omolayo", role: "admin" }
};

const form = document.getElementById("loginForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value;
  if(users[u] && users[u].password===p){
    localStorage.setItem("studentName",users[u].name);
    localStorage.setItem("role",users[u].role);
    window.location.href = users[u].role==="admin" ? "admin.html" : "student.html";
  } else {
    document.getElementById("error-msg").style.display="block";
  }
});