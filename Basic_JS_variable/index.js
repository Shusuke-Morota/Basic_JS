

// Q.変数とは何か
// A.データを保存しておく為の箱、
// これを塩で例えると、塩が入っているビンが変数。


const fooWidth = document.getElementById("foo").offsetWidth;
// fooというidが付いているDOM要素の横幅を取得する。
// fooWidthという入れ物(変数)に、document.getElementById("foo").offsetWidthの値を入れている。

const fooHeight = document.getElementById("foo").offsetHeight;
// 高さも同様に

// これを書き換えると、、
const foo = document.getElementById("foo");
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetHeight;
// 面積を求めたくなったら、、
const fooArea = fooWidth * fooHeight;


// Q. どうやって変数を宣言するのか
// A. const 変数名 = 初期値;
//    let 変数名 = 初期値;
//    var 変数名 = 初期値;
const foo = 100;


