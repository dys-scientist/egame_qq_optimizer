var egame = {};

var style = { "display": "none" };

var ele_list = [
    ".fl", 
    ".live-list-guess",
    ".nav-recharge", 
    ".live-review:eq(1)",
    ".gui-navbar-attention", 
    ".gui-left",
    ".gui-navbar-anchor", 
    "ul.row2",
    ".live-panel-luxury-result", 
    "div.panel-player-recommond-right",
    "div[class='live-list-player-recommond oneway']"
];
var class_list = [
    ".icon-activity{display:none;}",
    ".img-level{display:none;}",
    ".chat-msg-gift{display:none;}",
    ".panel-mount{display:none}",
    ".combo-wrap,.combo-wrap1{display:none}",
    "._danmaku_comment_node .barrage-info{display:none}"
]

egame.start = () => {
    //聊天区清理
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