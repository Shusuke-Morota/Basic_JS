// DOM操作
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
}

function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);

// for文の場合の書き方
    //     for (let index = 0; index < users.length; index++) {
    //         const user = users[index];
    //         const list = document.createElement("li");
    //         list.innerText = user.name;
    //         lists.appendChild(list);
    //     }


    // ユーザーのidが５以下の場合
    // users.forEach(function (user) {
    //     if (user.id <= 5) {
    //         const list = document.createElement("li");
    //         list.innerText = user.name;
    //         lists.appendChild(list);
    //     }
    // });