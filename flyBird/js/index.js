var main = document.getElementsByClassName('main')[0],
    startButton = document.getElementsByClassName('startButton')[0],
    head = document.getElementsByClassName('head')[0],
    endMenu = document.getElementById('endMenu'),
    currentScore = document.getElementById('currentScore'),
    bestScore = document.getElementById('bestScore'),
    pipes = document.getElementById('pipes'),
    bird = document.getElementById('bird'),
    score = document.getElementById('score'),
    grass = document.getElementById('grass'),
    gameMusic = document.getElementById('gameMusic'),
    bulletMusic = document.getElementById('bulletMusic'),
    gameover = document.getElementById('gameover');

var downTimer = null
var upTimer = null
var createTimer = null //创建管道的定时器
    // ontouchstart
startButton.onclick = (e) => {
        var e = window.event || e
            // 取消事件冒泡
        e.cancelBubble = true
        e.stopPropagation();
        // 播放背景音乐
        gameMusic.play()
        gameMusic.loop = true
            // 隐藏开始按钮
        startButton.style.display = 'none'
        head.style.display = 'none'
            // 显示得分和小鸟
        score.style.display = 'block';
        bird.style.display = 'block';
        // 草坪移动
        setInterval(grassMove, 30)
            // 小鸟下落
        downTimer = setInterval(() => {
            birdDown()
        }, 30);
        // 小鸟上升
        main.onclick = () => {
            clearInterval(upTimer)
            birdUp()
        }

        // 创建管道
        setInterval(() => {
            createPipes()
        }, 3000);

        // 处理碰撞检测
        setInterval(() => {
            dealCrash()
        }, 30);

    }
    // 碰撞检测
function dealCrash() {
    // 获取页面中的所有pipe上下管道与小鸟检测是否碰撞
    // var bird = document.getElementById('bird')
    var pipe = document.getElementsByClassName('pipe')
        // console.log(pipe[0].firstElementChild);

    for (var i = 0; i < pipe.length; i++) {
        // 判断上管道与小鸟是否碰撞
        if (isCrash(bird, pipe[i].firstElementChild)) {
            alert('gg')
            gameOver()
        }
        if (isCrash(bird, pipe[i].children[1])) {
            gameOver()
        }
    }
}
// 两个物体碰撞检测的函数 a小鸟  b 柱子
function isCrash(a, b) {
    // console.log(a.offsetLeft + a.offsetWidth, b.offsetParent.offsetLeft);

    var boolCrash = true
    var lt1 = a.offsetLeft,
        rt1 = a.offsetLeft + a.offsetWidth,
        tp1 = a.offsetTop,
        bm1 = a.offsetTop + a.offsetHeight
        // 管道的上下左右边距 offsetParent
    var parent = b.offsetParent
    var lt2 = parent.offsetLeft,
        rt2 = parent.offsetLeft + b.offsetWidth,
        tp2 = b.offsetTop,
        bm2 = b.offsetTop + b.offsetHeight
        // console.log(lt1, rt1, tp1, bm1);

    // 判断碰撞条件
    // 碰不到的条件
    if (!(rt1 < lt2 || lt1 > rt2 || tp1 > bm2 || bm1 < tp2)) {
        boolCrash = true
    } else {
        boolCrash = false
    }
    return boolCrash

}
// 随机函数
function random(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m)
}
// 创建管道的函数
function createPipes() {
    console.log('create');

    var pipe = document.createElement('li'),
        up = document.createElement('div'),
        down = document.createElement('div')
    pipe.className = 'pipe'
    up.className = 'upPipe'
    down.className = 'downPipe'
    pipe.style.left = main.offsetWidth + 'px'
    pipes.appendChild(pipe)
        // 随机上管道的高度 ， 下管道=总-上管道
    var top_height = random(80, 200)
        // 通道150px
    var bottom_height = pipe.offsetHeight - 150 - top_height
    up.style.height = top_height + 'px'
        // console.log(pipe.offsetHeight, bottom_height);

    down.style.height = bottom_height + 'px'
    pipe.appendChild(up)
    pipe.appendChild(down)

    var des = main.clientWidth

    var moveTimer = setInterval(() => {
        // console.log(des);

        des -= 2
        pipe.style.left = des + 'px'
            // 当创建的管道移除屏幕时，则删除
        if (des <= -pipe.offsetWidth) {
            pipes.removeChild(pipe)
            clearInterval(moveTimer)
        }
        // 处理得分
        if (des == -2 || des == -3) { //小鸟飞过管道
            changeScore()
        }

    }, 30)
}

// 处理得分操作
var num = 0

function changeScore() {
    num++
    console.log(num);

    score.innerHTML = '' //清空图片
        // 添加分数图片
    if (num < 10) {
        //显示一张图片
        var img = document.createElement('img')
        img.src = 'img/' + num + '.jpg'
        score.appendChild(img)
    } else if (num >= 10 && num <= 99) {
        var img1 = document.createElement('img')
        var img2 = document.createElement('img')
        img1.src = 'img/' + Math.floor(num / 10) + '.jpg'
        img2.src = 'img/' + num % 10 + '.jpg'
        score.appendChild(img1)
        score.appendChild(img2)

    }
}
// 草坪移动
var index = 0

function grassMove() {
    index += 2
    if (index > 343) {
        index = 0
    }
    grass.style.left = -index + 'px'
}
// 小鸟下落
var downSpeed = 0

function birdDown() {
    downSpeed += 0.3
    if (downSpeed >= 8) {
        downSpeed = 8
    }
    bird.src = 'img/down_bird.png'
    bird.style.top = bird.offsetTop + downSpeed + 'px'
    if (bird.offsetTop + bird.offsetHeight >= pipes.offsetHeight) {
        gameOver()
    }
}

// 小鸟上升
function birdUp() {
    // 播放音乐
    bulletMusic.play();
    // 清除小鸟下降的定时器
    clearInterval(downTimer);
    // 处理飞翔的定时器
    bird.speed = 8; // 修改速度值，开始上升时速度最快，越来越慢
    upTimer = setInterval(() => {
        bird.src = 'img/up_bird1.png'
        bird.speed -= 0.8
            // 当速度小于等于0时，小鸟的下落定时器会重新启动
        if (bird.speed <= 0) {
            clearInterval(upTimer)
            downTimer = setInterval(birdDown, 30)
        }
        bird.style.top = bird.offsetTop - bird.speed + 'px'
            // 碰到顶部
        if (bird.offsetTop <= 0) {
            gameOver()
        }
    }, 30)
}

// 游戏结束
function gameOver() {
    console.log('gg');
    gameover.play()
    gameMusic.pause()

    // clearInterval(downTimer)
    // clearInterval(upTimer)

    endMenu.style.display = 'block'
    endMenu.style.zIndex = 99
        // 一次性清空所有定时器
        // 网页加载完成之后，所有的定时器id都是递增的，只要获取到最后一个定时器，就可以遍历得到所有的定时器，通过id删除所有的定时器
    var timerId = setInterval(() => {}, 1);
    for (var i = 1; i <= timerId; i++) {
        clearInterval(i) //清楚每一个id对应的定时器
    }
    // 显示当前得分和最高分
    currentScore.innerHTML = num
        // 显示最高分使用本地存储
    if (localStorage.bestS) {
        if (num > localStorage.bestS) {
            localStorage.bestS = num
            bestScore.innerHTML = num
        } else {
            bestScore.innerHTML = localStorage.bestS
        }
    } else {
        // 第一次玩
        localStorage.bestS = num
        bestScore.innerHTML = num
    }
    main.onclick = null
    bird.src = 'img/bird.png';
}