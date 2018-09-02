var egame = {};

var style = { "display": "none" };


egame.start = () => {
    //聊天区清理
    document.styleSheets[0].insertRule(".icon-activity{display:none;}", 0);
    document.styleSheets[0].insertRule(".img-level{display:none;}", 0);
    document.styleSheets[0].insertRule(".chat-msg-gift{display:none;}"), 0;
    document.styleSheets[0].insertRule(".panel-mount{display:none}", 0);
    document.styleSheets[0].insertRule(".combo-wrap,.combo-wrap1{display:none}", 0);
    document.styleSheets[0].insertRule("._danmaku_comment_node .barrage-info{display:none}");
    //多余元素清理
    $(".fl,.nav-recharge,.gui-navbar-attention,.gui-navbar-anchor").css(style);
    $(".live-list-guess").css(style);
    $(".live-review:eq(1)").css(style);
    $(".gui-left").css(style);
    $("ul.row2").css(style);
    $("div.panel-player-recommond-right").css(style)
    //调整位置
    $(".gui-main").css({
        "margin-top": "0px",
        "padding-top": "15px",
        "z-index": "77777",
        "margin-left": "20px"
    });
    $(".e-starWars").css({
        "z-index": "1002"
    });
    $(".gui-navbar-container").css({
        "margin-right": "0px"
    });
    $(".searchbar>input").css({
        "width":"88px"
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
}