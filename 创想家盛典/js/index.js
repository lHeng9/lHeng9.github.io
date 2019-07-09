var oneStar //第一页的流星
var clientWidth = $(window).width()
    // console.log('clientWdith:' + clientWidth);
var sindex = 0

// 详情页2
// 数据
var dalao = [{
        src: 'images/pagefive/01.jpg',
        name: '周首',
        p1: '据说是国内做的最接近Instagram的图片社交产品，你不玩就out了',
        p2: 'Nice的创始人及CEO'
    },
    {
        src: 'images/pagefive/02.jpg',
        name: '余建军',
        p1: '一个亲民的互联网电台的创造者，一个“屌丝”逆袭的故事',
        p2: '喜马拉雅联席创始人'
    },
    {
        src: 'images/pagefive/03.jpg',
        name: '赫畅',
        p1: '老味道，新思维；舌尖上的互联网',
        p2: '黄太吉传统美食CEO'
    },
    {
        src: 'images/pagefive/04.jpg',
        name: '弹幕BILIBILI',
        p1: '弹幕视频分享网站',
        p2: ''
    },
    {
        src: 'images/pagefive/05.jpg',
        name: '易小星',
        p1: '《万万没想到》知道不？',
        p2: '万合天宜创始人之一，首席内容官'
    },
    {
        src: 'images/pagefive/06.jpg',
        name: '马月',
        p1: '他说他是时尚和娱乐圈里最懂互联网的人',
        p2: '星云网创始人'
    },
    {
        src: 'images/pagefive/07.jpg',
        name: '黄继新',
        p1: '如何正确评价知乎',
        p2: '知乎联合创始人、COO'
    },
    {
        src: 'images/pagefive/08.jpg',
        name: '汤怀',
        p1: '一个用有趣的方式对各种热点知识进行视频化科普解说的原创视频自媒体',
        p2: '飞碟说创始人'
    },
    {
        src: 'images/pagefive/09.jpg',
        name: '李明伟',
        p1: '“黄牛党”终结者，一个盘活了二手票市场的平台',
        p2: '西十区创始人兼CEO'
    },
    {
        src: 'images/pagefive/010.jpg',
        name: '李志明',
        p1: '一个关于演唱会的O2O平台，让科技也摇摆起来',
        p2: 'POGO看演出创始人'
    }
]
oneStar(function() {
    picMove()
})
oneStar = setInterval(oneStar, 3000)

function oneStar(cb) {
    $('#l1').animate({
        left: '8rem',
        top: '10rem'
    }, 1000, function() {
        $('#l1').css({
            top: '7.67rem',
            left: '-2.2rem'
        })
    })
    $('#l2').animate({
        left: '-2.67rem',
        top: '0rem'
    }, 1000, function() {
        $('#l2').css({
            top: '2.32rem',
            left: '8rem'
        })
    })
    $('#l3').animate({
        left: '-3.2rem',
        top: '13rem'
    }, 1000, function() {
        $('#l3').css({
            top: '8.61rem',
            left: '8rem'
        })
        if (cb) cb()
    })

}

function picMove() {
    $('#re').animate({
        left: '0'
    }, 1000)
    $('#rr').animate({
        left: '0'
    }, 1000)
    $('#hh').animate({
        bottom: '0'
    }, 1000)
    $('#yy').animate({
        bottom: '0'
    }, 1000)
    $('#dd').animate({
        top: '2.23rem',
        left: 0
    }, 1000)
    $('#qq').animate({
        top: '1.41rem',
        left: '1.39rem'
    }, 1000)
    $('#dda').animate({
        left: '1.66rem',
        top: '2.56rem'
    }, 1000)
    $('#gg').animate({
        top: 0,
        left: '2.38rem'
    }, 1000)
    $('#ccc').animate({
        left: '3.29rem',
        top: 0
    }, 1000)
}
// slide浮动
// $('#slide').jqFloat({
//     width: 0,
//     height: 25,
//     speed: 500
// });
// 取消默认事件，防止双击变大
touch.on(document, 'touchstart', function(e) {
        var e = window.event || e
        e.preventDefault() //关闭系统的默认触摸效果
    })
    // 轻扫改变页面，翻页
    // window.addEventListener('touchstart', function() {}, { passive: false })
var body = document.getElementsByTagName('body')[0]
var clientHeight = body.clientHeight
var pindex = 0 //页数
var video = document.getElementById('video')



var speed = 5,
    upTimer = null,
    downTimer = null
touch.on(document, 'swipeup', (e) => {
    // 触发视频播放
    var top = pindex * clientHeight
    pindex++
    var target = pindex * clientHeight
    console.log('up', pindex, top, target);
    clearInterval(upTimer)
    upTimer = setInterval(() => {
        top += speed
        $(window).scrollTop(top)
        if (top >= target) {
            // $(window).scrollTop(target)
            clearInterval(upTimer)
        }

    }, 2);
    if (pindex == 1) {
        // video.play()
        $('#ww').css({
            animation: 'ww 1s linear forwards'
        })
        $('#www').css({
            animation: 'www 1s linear forwards '
        })
    }
    if (pindex == 3) {
        console.log('来了老弟');
        $('#p1').css({
            animation: 'p1 1s linear forwards'
        })
        $('#p2').css({
                animation: 'p2 2s linear forwards 1s'
            })
            // $('#p2').animate({
            //     opacity: 1
            // }, 15000)
        $('#pl').css({
            animation: 'pl 5s linear forwards '
        })
        $('#liuyong').css({
            animation: 'face 1s linear forwards 4s'
        })
        $('#shenxiaohui').css({
            animation: 'face 0.8s linear forwards 4.2s'
        })
        $('#gy').css({
            animation: 'face 1.5s linear forwards 3.5s'
        })
        $('#aluo').css({
            animation: 'face 1.5s linear forwards 3.5s'
        })
        $('#wangzhuang').css({
            animation: 'face 0.8s linear forwards 4.2s'
        })
        $('#wqg').css({
            animation: 'face 1s linear forwards 4s'
        })
        $('#madong').css({
            animation: 'face 0.6s linear forwards 4.4s'
        })
        $('#wxf').css({
            animation: 'face 1.5s linear forwards 3.5s'
        })
        $('#hov').css({
            animation: 'hov 1s linear forwards 5s'
        })
        $('#obj').css({
            animation: 'obj 1s linear infinite alternate 5s'
        })
    }
    if (pindex == 4) {
        $('#title5').css({
            animation: 'obj 2s linear forwards '
        })
        $('.box5 .touch img').css({
            animation: 'obj 1s linear infinite alternate 2s'
        })
        for (let i = 10; i >= 0; i--) {
            setTimeout(() => {
                // $(`#f${i}`).slideDown("fast");
                $(`#f${i}`).children('.glass').css({
                    display: 'block'
                })
                $(`#f${i}`).children('.ff').css({
                    display: 'block',
                    animation: 'boxfloat linear 2s forwards 1s'
                })

                $(`#f${i}`).children('.gyg').css({
                    animation: 'obj linear 2s forwards 1s'
                })
            }, (11 - i) * 500)
        }
    }
    if (pindex == 5) {
        $('#t1').css({
            animation: 't1 1.5s linear forwards'
        })
        $('#t2').css({
            animation: 't2 1.5s linear forwards'
        })
        $('#t3').css({
            animation: 't3 1.5s linear forwards'
        })
        $('#t4').css({
            animation: 't4 1s linear forwards 0.5s'
        })
        $('#t5').css({
            animation: 't5 1.5s linear forwards'
        })
        $('#t6').css({
            animation: 't6 1.5s linear forwards'
        })
        $('#t7').css({
            animation: 't7 1.5s linear forwards'
        })
        $('#t8').css({
                animation: 't8 1.5s linear forwards'
            })
            // 标题
        $('.tit').css({
                animation: 'obj 1s linear forwards 0.5s'
            })
            // 内容
        $('.word').css({
            animation: 'obj 1s linear forwards 1.5s'
        })

        // 436215
        $('#jd').css({
            animation: 'obj 0.5s linear forwards'
        })
        $('#jy').css({
            animation: 'obj 0.5s linear forwards 0.4s'
        })
        $('#hp').css({
            animation: 'obj 0.5s linear forwards 0.8s'
        })
        $('#wp').css({
            animation: 'obj 0.5s linear forwards 1.2s'
        })
        $('#thc').css({
            animation: 'obj 0.5s linear forwards 1.6s'
        })

        $('#gz').css({
            animation: 'obj 0.5s linear forwards 2s'
        })
        $('#twq').css({
            animation: 'obj 0.5s linear forwards 2.4s'
        })

        //float
    }
    if (pindex == 6) {
        $('.tit').animate({
            opacity: 1
        }, 500, function() {
            $('.titl').animate({
                opacity: 1
            }, 500)
            $('.linehov').animate({
                height: 0
            }, 2000)

        })
        setTimeout(function() {
                $('#wo1').animate({
                    left: '2.19rem'
                }, 500, function() {
                    $('#wo2').animate({
                        left: '.28rem'
                    }, 500, function() {
                        $('#wo3').animate({
                            left: '2.18rem'
                        }, 500)
                    })
                })

            }, 1500)
            // 图标浮动
        $('#t71').jqFloat({
            width: 40,
            height: 40,
            speed: 3000
        })
        $('#t72').jqFloat({
            width: 40,
            height: 40,
            speed: 3000
        })
        $('#t73').jqFloat({
            width: 40,
            height: 40,
            speed: 3000
        })
        $('#t74').jqFloat({
            width: 40,
            height: 40,
            speed: 3000
        })
        $('#t75').jqFloat({
            width: 40,
            height: 40,
            speed: 3000
        })
        $('#t76').jqFloat({
            width: 40,
            height: 40,
            speed: 3000
        })


    }
    if (pindex == 7) {
        $('#blo81').animate({
            left: '.8rem'
        }, 1000)
        $('#blo82').animate({
            left: '0rem'
        }, 1000)
        $('#blo83').animate({
            left: '5.86rem',
            top: '3.3rem'
        }, 1000)
        $('#blo84').animate({
            left: '4.44rem',
            top: '1.48rem'
        }, 1000)
        $('#blo85').animate({
            left: '2.26rem',
            top: '1.72rem'
        }, 1000)
        $('#blo86').animate({
            left: '6.66rem'
        }, 1000, function() {
            $('.zbf').animate({
                opacity: 1
            }, 500, function() {
                $('.tit').animate({
                    opacity: 1,
                    left: 0
                }, 1000)
                $('.lhzb').animate({
                    opacity: 1
                }, 1000, function() {
                    $('#k36').animate({
                        top: '-4rem'
                    }, 500)
                    setTimeout(() => {
                        $('#bank').animate({
                            top: '-4rem'
                        }, 500)
                    }, 500)
                    setTimeout(() => {
                        $('#aiqiyi').animate({
                            top: '-4rem'
                        }, 500)
                    }, 1000)
                })
            })
        })

    }
    if (pindex == 8) {
        $('#share').jqFloat({
            width: 0,
            height: 50,
            speed: 1000
        })
        $('.arrow').css({
            display: 'none'
        })
    } else {
        $('.arrow').css({
            display: 'block'
        })
    }
})
touch.on(document, 'swipedown', (e) => {
    $('.arrow').css({
        display: 'block'
    })
    var top = pindex * clientHeight
    pindex--
    var target = pindex * clientHeight
    clearInterval(downTimer)
    downTimer = setInterval(() => {
        top -= speed
        $(window).scrollTop(top)
        if (top <= target) {
            $(window).scrollTop(target)
            clearInterval(downTimer)
        }
    }, 2)
})

// box3的图片浮动
$('#img5').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#img55').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#group4').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#img3').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#grounp4').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#group1').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#group2').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
$('#img4').jqFloat({
    width: 40,
    height: 40,
    speed: 3000
});
// 头像点击后出现轮播图

$('.f').click(function(e) {
    console.log('12313', e.target, $(this).attr('index'));
    $('.swipper').css({
        display: 'block'
    })
    $('.circle').css({
        animation: 'ball 1s linear forwards'
    })
    $('.lis img').css({
        animation: 'ball 1s linear reverse forwards'
    })

    //跳转到相应的图片 
    sindex = $(this).attr('index')
    $('#imgs').css({
        left: sindex * -clientWidth
    })
})

// 给轮播图以点击事件
$('.l').click(function() {
    console.log('l');
    sindex--
    if (sindex < 0) {
        sindex = 8
        $('#imgs').css({
            left: sindex * -clientWidth
        })
        $('#imgs').animate({
            left: --sindex * -clientWidth
        }, 500)
    } else {
        $('#imgs').animate({
            left: sindex * -clientWidth
        }, 500)
    }

})
$('.r').click(function() {
    console.log('r');
    sindex++
    if (sindex > 8) {
        sindex = 0
        $('#imgs').css({
            left: sindex * -clientWidth
        })
        $('#imgs').animate({
            left: ++sindex * -clientWidth
        }, 500)
    } else {
        $('#imgs').animate({
            left: sindex * -clientWidth
        }, 500)
    }
})

$('#x').click(function() {
    console.log('close');
    $('.swipper').css({
        display: 'none'
    })

})
$('.ff').click(function() {
        // console.log($(this).parent().attr('id'));
        var fid = $(this).parent().attr('id')
        var reg = /[^0-9]+/g
            // console.log(fid.replace(/[^0-9]+/g, ''));
        var num = fid.replace(reg, '')
        $('.card .f5').attr('src', dalao[num - 1].src)
        $('.card .text h1').html(dalao[num - 1].name)
        $('.card .text #p1').html(dalao[num - 1].p1)
        $('.card .text #p2').html(dalao[num - 1].p2)

        $('.card').css({
            display: 'block',
            animation: 'card 0.8s linear forwards '
        })


    })
    // 详情页2的叉号
$('#fx').click(function() {
    $('.card').css({
        animation: 'recard 0.8s linear forwards '
    })

    setTimeout(() => {
        $('.card').css({
            display: 'none'
        })
    }, 800)

})