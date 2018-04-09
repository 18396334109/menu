$(function() {
    routeinit();
})
const router = [{
    'firstRoute': '预订',
    'secondRoute': [{
        'name': '预订管理'
    }, {
        'name': '排房查询'
    }, {
        'name': '远期房态'
    }],
}, {
    'firstRoute': '接待',
    'secondRoute': [{
        'name': '直接入住'
    }, {
        'name': '团队入住'
    }, {
        'name': '预定入住'
    }, {
        'name': '早餐券管理'
    }, {
        'name': '快速结账'
    }, {
        'name': '停车场管理'
    }],
}, {
    'firstRoute': '财务',
    'secondRoute': [{
        'name': '客帐查询'
    }, {
        'name': '在住客人余额'
    }, {
        'name': '走结客人账务'
    }, {
        'name': '非在住客帐'
    }, {
        'name': '预授权查询'
    }, {
        'name': '预订金查询'
    }, {
        'name': '发票查询'
    }, ],
}, {
    'firstRoute': '会员卡',
    'secondRoute': [{
        'name': '会员信息管理'
    }, {
        'name': '会员消费管理'
    }, {
        'name': '卡消费管理'
    }, {
        'name': '会员远期价格'
    }],
}, {
    'firstRoute': '客房管理',
    'secondRoute': [{
        'name': '客房列表'
    }],
}, {
    'firstRoute': '会议室',
    'secondRoute': [{
        'name': '会议室列表'
    }],
}, {
    'firstRoute': '单店报表',
    'secondRoute': [{
        'name': '报表中心'
    }],
}, ];

function routeinit() {
    firstRoute();
    secondRoute();
}

function firstRoute() {
    $(".nav-title ul li").click(function() {
        $(this).siblings('li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('.nav-list ul').empty();
        for (let i = 0; i < router.length; i++) {
            if ($(this).children().text() == router[i].firstRoute) {
                for (let j = 0; j < router[i].secondRoute.length; j++) {
                    if (j == 0) {
                        $('.nav-list ul').append('<li class="nav-active"><a href="#">' + router[i].secondRoute[j].name + '</a></li>');
                    } else {
                        $('.nav-list ul').append('<li><a href="#">' + router[i].secondRoute[j].name + '</a></li>');
                    }
                }
            }
        }
        secondRoute();
    });
}

function secondRoute() {
    $(".nav-list ul li").click(function() {
        $(this).siblings('li').removeClass('nav-active');
        $(this).addClass('nav-active');
    })
}