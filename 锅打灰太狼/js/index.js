window.onload = function() {
    // 分数对象
    var score = document.getElementsByClassName('score')[0]
        // 倒计时
    var countdown = document.getElementsByClassName('countdown')[0]
        // 获取所有灰太狼的父级div
    var worfs = document.getElementsByClassName('worf')[0]
        // start menu
    var menu = document.getElementsByClassName('menu')[0]
        // over
    var end = document.getElementsByClassName('end')[0]
    var start = document.getElementById('start')
    var handle = document.getElementById('handle')
    var s = 0 //分数
        //灰太狼随机出现的位置,使用数组来存储对应关系的数据 -- 出现的位置
        //随机出现以下9个位置
    var arrPosi = [{
        l: "98px",
        t: "115px"
    }, {
        l: "17px",
        t: "160px"
    }, {
        l: "15px",
        t: "220px"
    }, {
        l: "30px",
        t: "293px"
    }, {
        l: "122px",
        t: "273px"
    }, {
        l: "207px",
        t: "295px"
    }, {
        l: "200px",
        t: "211px"
    }, {
        l: "187px",
        t: "141px"
    }, {
        l: "100px",
        t: "185px"
    }];

    // 倒计时
    var barWidth = countdown.offsetWidth
    var timer

    function countdownWidth() {
        timer = setInterval(() => {
            barWidth -= 2
            if (barWidth < 0) {
                clearInterval(timer)
                    // 游戏结束
                end.style.display = 'block'
                clearInterval(createTimer)
            }
            countdown.style.width = barWidth + 'px'
        }, 100);
    }

    var createTimer;
    var preIndex = -1 //代表上一次的位置


    start.onclick = function() {
        // 1.开始菜单隐藏
        menu.style.display = 'none'
            // 2.倒计时
        countdownWidth()
            // 3.创建灰太狼或者小灰灰的定时器
        createTimer = setInterval(() => {

            var worf = document.createElement('img')
                // 随机是灰太狼还是小灰灰'h,x
            worf.type = randomNum(0, 10) > 8 ? "x" : 'h' //0-1之间
                // console.log(worf.type);
                // 设置属性值，郎出现时的状态，第一张
            worf.index = 0
                // 路径
            worf.src = 'img/' + worf.type + worf.index + '.png'

            // 两次出现的位置不能在一个位置
            var rs = true //代表重复，继续重复
            while (rs) {
                var r = randomNum(0, arrPosi.length - 1) //随机下标
                if (r != preIndex) {
                    rs = false
                }
            }
            worf.style.left = arrPosi[r].l
            worf.style.top = arrPosi[r].t
                // 将worf添加到worfs中
            worfs.appendChild(worf)
                // 浪上升的定时器
            worf.upTimer = setInterval(() => {
                worf.index++;
                if (worf.index > 4) {
                    clearInterval(worf.upTimer)
                        // 启动下降
                    worf.downTimer()
                }
                worf.src = 'img/' + worf.type + worf.index + '.png'
            }, 150);
            worf.downTimer = function() {
                    worf.downTimer = setInterval(() => {
                        worf.index--;
                        if (worf.index <= 0) {
                            clearInterval(worf.downTimer)
                            worfs.removeChild(worf)
                        }
                        worf.src = 'img/' + worf.type + worf.index + '.png'

                    }, 150);
                }
                // 只能点一次
            var flag = false
            worf.onclick = function() {
                flag = true
                if (flag) {
                    worf.onclick = null
                }
                clearInterval(worf.upTimer)
                clearInterval(worf.downTimer)

                worf.attack()
                if (worf.type == 'h') {
                    s += 10

                } else if (worf.type == 'x') {
                    s -= 10
                }
                score.innerHTML = s

            }
            worf.attack = function() {
                worf.index = 5
                worf.ackTimer = setInterval(() => {
                    worf.index++
                        if (worf.index >= 9) {
                            clearInterval(worf.ackTimer)
                            worfs.removeChild(worf)
                        }
                    worf.src = 'img/' + worf.type + worf.index + '.png'
                }, 150)
            }
            preIndex = r
        }, 1000);
    }

    function randomNum(a, b) {
        var n = parseInt(Math.random() * (b - a) + a)
        return n
    }

}