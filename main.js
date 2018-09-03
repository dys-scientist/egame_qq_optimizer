var egame = {};

var style = { "display": "none" };

var ele_list = [
    ".fl", //nav栏左侧
    ".live-list-guess",//底部推荐直播
    ".nav-recharge", //充值按钮
    ".live-review:eq(1)",//底部推荐视频区
    ".gui-navbar-attention", //我的关注按钮
    ".gui-left",//左侧分类区
    ".gui-navbar-anchor", //主播中心按钮
    ".live-panel-luxury-result", 
    "div.panel-player-recommond-right",//企鹅二维码
    "ul.row2",//其他直播推荐
    "div[class='live-list-player-recommond oneway']"//其他直播推荐
];
var class_list = [
    ".icon-activity{display:none;}",//头衔图标
    ".img-level{display:none;}",//等级图标
    ".chat-msg-gift{display:none;}",//送礼提示
    ".panel-mount{display:none;}",//进场坐骑展示区
    ".combo-wrap,.combo-wrap1{display:none;}",//系统广播横幅
    "._danmaku_comment_node .barrage-info{display:none;}"//弹幕送礼提示
]

egame.start = () => {
    //聊天区清理
    //覆盖样式
    for (var i in class_list) {
        document.styleSheets[0].insertRule(class_list[i]);
    }
    //多余元素清理
    for (var i in ele_list) {
        $(ele_list[i]).css(style);
    }
    //调整位置
    $(".gui-main").css({
        "margin-top": "0px",
        "padding-top": "15px",
        "z-index": "77",
        "margin-left": "20px"
    });
    $(".gui-navbar").css({
        "z-index": "43"
    });
    $(".gui-navbar-container").css({
        "margin-right": "0px"
    });
    $(".searchbar>input").css({
        "width": "88px"
    });
    $("div.live-list-player-recommond").css({
        "bottom": "0px",
        "top": "auto",
        "margin-top": "0px"
    });

    //收起后展开,触发自适应调整窗口
    $("i.live-right-bubble").click();
    //50ms 后重新展开
    setTimeout("$('i.live-right-bubble').click();", 50);

    //净化弹幕与聊天区
    var r = /(.*)+(坐着|开通)(.*)+(光临本直播间|守护)/;
    r = r.compile(r);
    $("ul.vb-content").bind("DOMNodeInserted", DOMNodeInserted("li.chat-msg-other"));
    $(".barage-container").bind("DOMNodeInserted", DOMNodeInserted("._danmaku_comment_node"));

    function DOMNodeInserted(selector) {
        $(this).find(selector).each(function (index, item) {
            var text = $(item).find("span[style]:last") == null ? "" : $(item).find("span[style]:last").text();
            if (text && r.test(text)) {
                $(document).remove($(item));
            }
        });
    }
}