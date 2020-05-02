function data() {
    let gamesData = [{
        type: "单击",
        title: "梦三国2",
        time: "2020-01-09 上线",
        rate: {
            text: "推荐率",
            ra: "63%"
        },
        tags: ["MMORPG", "moba", "电子竞技", "三国"],
        img: "./images/all-games1.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "大型网游",
        title: "龙之谷",
        time: "2019-10-24 上线",
        rate: {
            text: "推荐率",
            ra: "68%"
        },
        tags: ["动作冒险", "爽快手感", "多人联机", "Q版画风"],
        img: "./images/all-games2.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费',
            tag: "6.3折",
            new: "30",
            old: "48"
        }
    }, {
        type: "大型网游",
        title: "真三国无双Online",
        time: "2019-09-24 上线",
        rate: {
            text: "推荐率",
            ra: "80%"
        },
        tags: ["三国经典", "回归动作", "爽快手感", "动作"],
        img: "./images/all-games3.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "大型网游",
        title: "剑网3",
        time: "2019-06-20 上线",
        rate: {
            text: "推荐率",
            ra: "72%"
        },
        tags: ["MMORPG", "武侠", "唯美画面", "剧情丰富"],
        img: "./images/all-games4.jpg",
        end: {
            type: "2", // 1代表灰色
            price: '免费',
            tag: "6.3折",
            new: "30",
            old: "48"
        }
    }, {
        type: "大型网游",
        title: "海战世界",
        time: "2019-10-25 上线",
        rate: {
            text: "推荐率",
            ra: "50%"
        },
        tags: ["航海", "电子竞技", "即时战略", "二战"],
        img: "./images/all-games5.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "大型网游",
        title: "古剑奇谭网络版",
        time: "2019-07-23 正式登陆",
        rate: {
            text: "推荐率",
            ra: "68%"
        },
        tags: ["MMORPG", "古代仙侠", "角色扮演", "中国文化"],
        img: "./images/all-games6.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '时长付费'
        }
    }, {
        type: "免费",
        title: "坦克世界",
        time: "2019-07-23 正式登陆",
        rate: {
            text: "推荐率",
            ra: "68%"
        },
        tags: ["射击", "多人联机", "军事题材", "二战"],
        img: "./images/all-games7.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "大型网游",
        title: "元能失控",
        time: "2020-04-21 上线",
        rate: {
            text: "推荐率",
            ra: "68%"
        },
        tags: ["独立游戏", "Roguelike", "冒险", "多人联机"],
        img: "./images/all-games8.jpg",
        end: {
            type: "2", // 1代表灰色
            price: '免费',
            tag: "6.3折",
            new: "30",
            old: "48"
        }
    }, {
        type: "大型网游",
        title: "奇奥英雄传",
        time: "2019-10-24 上线",
        rate: {
            text: "推荐率",
            ra: "68%"
        },
        tags: ["动作冒险", "爽快手感", "多人联机", "Q版画风"],
        img: "./images/all-games9.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "免费",
        title: "打造世界",
        time: "2019-07-12 上线",
        rate: {
            text: "推荐率",
            ra: "88%"
        },
        tags: ["沙盒游戏", "休闲游戏", "模拟经营", "策略"],
        img: "./images/all-games10.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "免费",
        title: "风暴岛",
        time: "2020-04-01 上线",
        rate: {
            text: "推荐率",
            ra: "70%"
        },
        tags: ["动作冒险", "生存社交", "独立游戏", "角色扮演"],
        img: "./images/all-games11.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }, {
        type: "免费",
        title: "群雄逐鹿HD",
        time: "2019-09-25 公测开启",
        rate: {
            text: "推荐率",
            ra: "50%"
        },
        tags: ["动作冒险", "免费moba", "爽快手感", "经典回归"],
        img: "./images/all-games12.jpg",
        end: {
            type: "1", // 1代表灰色
            price: '免费'
        }
    }]
    return gamesData;
}

window.wegameDate = data();