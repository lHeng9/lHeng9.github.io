var place = document.getElementsByClassName('place')[0]
var score = document.getElementsByClassName('score')[0].getElementsByTagName('p')[0]
var btn = document.getElementById('btn')
var snakeArr = [16, 17, 18]
var cells
var feed
var snakeTimer = null
var lastKey, nowKey
var stap = 1
var falseKey
var key
var arr = [] //墙
init()
main()

function init() {
    // 生成场地
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 25; j++) {
            var cell = document.createElement('div')
            cell.className = 'cell'
            place.appendChild(cell)
        }
    }
    // 初始化蛇
    cells = document.getElementsByClassName('cell')
    for (var i = 0; i < snakeArr.length; i++) {
        // console.log();
        cells[snakeArr[i]].style.backgroundColor = 'hotpink'
    }
    // 初始化食物
    createFeed()
        // 规定墙
    for (var i = 0; i < cells.length; i++) {
        if ((i >= 0 && i < 15) || (i >= 360 && i < 375) || i % 15 == 0 || i % 15 - 14 == 0) {
            cells[i].style.backgroundColor = 'red'
            arr.push(i)
        }
    }
}


function random(a, b) {
    var num = Math.floor(Math.random() * (b - a + 1) + a)
    var flag = true
    while (flag) {
        // 食物生成的位置，不可以是蛇自身，也不能是墙
        if (snakeArr.indexOf(num) != -1) {
            num = Math.floor(Math.random() * (b - a + 1) + a)
        } else if ((num >= 0 && num < 15) || (num >= 360 && num < 375) || num % 15 == 0 || num % 15 - 14 == 0) {
            num = Math.floor(Math.random() * (b - a + 1) + a)
        } else {
            flag = false
        }
    }
    return num;
}

function main() {
    var flag = true //判断是否开始游戏
    document.onkeydown = function(e) {
        lastKey = nowKey
        var e = window.event || e
        switch (e.keyCode || key) {
            case 38: //上
                stap = -15
                falseKey = 40
                break;
            case 37: //左
                stap = -1
                falseKey = 39
                break;
            case 40: //下
                stap = 15
                falseKey = 38
                break;
            case 39: //右
                stap = 1
                falseKey = 37
                break;
            default:
                break;
        }
        console.log(e);
        if (flag && (e.keyCode == 40 || e.keyCode == 39)) {
            // 游戏开始
            flag = false
            snakeTimer = setInterval(() => {
                move(e)
            }, 100)
        }
        // else if (lastKey != falseKey && flag) return
        if (flag) return
        if (lastKey == falseKey) {
            switch (lastKey) {
                case 38: //上
                    stap = -15
                    falseKey = 40
                    break;
                case 37: //左
                    stap = -1
                    falseKey = 39
                    break;
                case 40: //下
                    stap = 15
                    falseKey = 38
                    break;
                case 39: //右
                    stap = 1
                    falseKey = 37
                    break;
                default:
                    break;
            }
            nowKey = lastKey
        } else {
            nowKey = e.keyCode
        }
        clearInterval(snakeTimer)
        snakeTimer = setInterval(() => {
            move(e)
        }, 100)
    }
}

function move(e) {
    var next
        // 移动
        // 下一个目标加入数组,并加颜色
        // 最开始的cell 舍弃并重置颜色
    console.log(lastKey == falseKey);
    next = snakeArr[snakeArr.length - 1] + stap
    if (danger(next)) {
        snakeArr.push(next)
        cells[snakeArr[snakeArr.length - 1]].style.backgroundColor = 'hotpink'
        if (next == feed) {
            createFeed()
            score.innerHTML = parseInt(score.innerHTML) + 1
        } else {
            cells[snakeArr[0]].style.backgroundColor = 'white'
            snakeArr.shift()
        }
    } else {
        document.onkeydown = null //死后终止操作
        btn.style.display = 'block'
            // alert('胜败乃兵家常事，点击按钮还是一条好汉')
        btn.onclick = () => {
            place.innerHTML = ''
            snakeArr = [16, 17, 18]
            init()
            main()
            score.innerHTML = 0
            btn.style.display = 'none'
        }
    }
}

function createFeed() {
    feed = random(0, cells.length - 1)
    cells[feed].style.backgroundColor = 'yellow'
}

// 碰撞检测
function danger(next) {
    // 咬到自己||撞墙
    if (snakeArr.indexOf(next) != -1 || arr.indexOf(next) != -1) {
        clearInterval(snakeTimer)
        for (var i = 0; i < snakeArr.length; i++) {
            cells[snakeArr[i]].style.backgroundColor = 'red'
        }
        return false
    }
    return true
}