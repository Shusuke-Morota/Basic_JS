let youtuber = {
    list: {
        business: {
            youtuber: [
                { name: "しまぶー", age: 20, teachProgramming() { } },
                { name: "あっちゃん", age: 37, teachHistory() { } }
            ],
            teach() { }
        },
        entertainment: {
            youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
            makeSmile() { }
        }
    },
    plan() { },
    uploadVideo() { }
};


// // オブジェクトのアクセスの仕方。
// // nameのしまぶーを取り出したい場合は、、以下のようにする。
// youtuber.list.business.youtuber[0].name

// // 他も同様に
// youtuber.plan();
// youtuber.list.entertainment.makeSmile();