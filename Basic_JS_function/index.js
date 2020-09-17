// 関数とは何か
// タスクや値計算を実行する文の集まり(MDN)

window.alert();
window.console.log();
window.document.getElementById("");
// 関数 = methodと思ってもいい

// 関数の書き方

function 関数名(仮引数１, 仮引数2) {
    // 様々な処理...
    return 関数の返り値;
}

// 例

function cut(food) {
    const cutFood = food.slice();
    return cutFood;
}
const cutCarrot = cut(carrot); //にんじん
const cutPotato = cut(potato); //じゃがいも

// returnの有無で何が違うのか

function throwAway(food) {
    // 捨てる処理
    delete food;
}

function isTweetable(text) {
    return text.length <= 140;
}
console.log(isTweetable("foo"));
// 出力結果true

function alertTweetable(text) {
    if (text.length <= 140) {
        alert("you can tweet!");
    }
}

alertTweetable("foo");
// 出力結果　you can tweet!
