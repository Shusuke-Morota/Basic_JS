const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(users);

    // DOM操作
    // users.forEach(function (user) {
    //     const list = document.createElement("li");
    //     list.innerText = user.name;
    //     lists.appendChild(list);
    // });

    // for文の場合の書き方
//     for (let index = 0; index < users.length; index++) {
//         const user = users[index];
//         const list = document.createElement("li");
//         list.innerText = user.name;
//         lists.appendChild(list);
//     }
// });