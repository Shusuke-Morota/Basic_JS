// // 関数とは何か
// // タスクや値計算を実行する文の集まり(MDN)

// window.alert();
// window.console.log();
// window.document.getElementById("");
// // 関数 = methodと思ってもいい

// // 関数の書き方

// function 関数名(仮引数１, 仮引数2) {
//     // 様々な処理...
//     return 関数の返り値;
// }

// // 例

// function cut(food) {
//     const cutFood = food.slice();
//     return cutFood;
// }
// const cutCarrot = cut(carrot); //にんじん
// const cutPotato = cut(potato); //じゃがいも

// // returnの有無で何が違うのか

// function throwAway(food) {
//     // 捨てる処理
//     delete food;
// }

// function isTweetable(text) {
//     return text.length <= 140;
// };
// console.log(isTweetable("foo"));
// // 出力結果true

// function alertTweetable(text) {
//     if (text.length <= 140) {
//         alert("you can tweet!");
//     }
// };

// alertTweetable("foo");
// // 出力結果　you can tweet!


// // 匿名(無名)関数とは
// // 関数は値として利用できる(関数式)
// // 以下関数式
// const isTweetable = function (text) {
//     return text.length <= 140;
// };
// // 関数式とは関数を変数の中に値として入れ込んだもの
// // functionの後には関数名が入るが、入れなくても関数は動く、これを無名関数という。


// // コールバック関数とは
// // 1,構文を見て書き方を覚える
// // 構文

// function 高階関数(コールバック関数) {
//     コールバック関数();
// }
// // コールバック関数とは関数全体のことではなく、引数として渡されている関数のこと。

// // 普通の記述
// function bring(food) {
//     if (// 手洗いを終えたら){
//      // 食材を持ってきてもらう処理
//     }
// }

// function peer(food) {
//     if (// 手洗いを終えたら){
//      // 食材の皮を剥く処理
//     }
// }

// function cut(food) {
//     if (// 手洗いを終えたら){
//      // 食材を切ってもらう処理
//     }
// }

// // コールバック関数を使った記述
// function washed(fn) {
//     if (// 手洗いを終えたら){
//         fn();// コールバック関数の処理
// }
// }

// function bring(food) {
//     // 食材を持ってきてもらう処理
// }

// function peer(food) {
//     // 食材の皮を剥く処理
// }

// function cut(food) {
//     // 食材を切ってもらう処理
// }

// // 87行目のfnに、93行目、97行目、101行目のfunctionを入れていく
// washed(bring); ...


// 実践的な記述
// function unfollow() {
//     console.log("フォローを外しました");
// }

// // 匿名関数バージョン
// const cancelTweet = function () {
//     console.log("ツイートをキャンセルしました")
// };

// function confirmed(fn) {
//     if (window.confirm("実行しますか？")) {
//         fn();
//     }
// }

// confirmed(function () {
//     console.log("ツイートをキャンセルしました");
// });

// 発展的内容
// function confirmed(fn) {
//     const input = window.prompt("実行しますか？");
//     if (input === "実行") {
//         fn();
//     }
// };

// confirmed(function () {
//     console.log("リポジトリを削除");
// });

// もう少し発展系
function confirmed(fn) {
    const input = window.prompt("実行しますか？");
    fn(input);
};

confirmed(function (input) {
    if (input === "実行") {
        console.log("リポジトリを削除");
    }
});


