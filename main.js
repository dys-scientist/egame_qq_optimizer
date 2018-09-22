'esversion: 6';
var egame = {};
window.k = $;
//var style = { "display": "none" };

var ele_list = [
    ".fl", //nav栏左侧
    ".live-list-guess", //底部推荐直播
    ".nav-recharge", //充值按钮
    ".live-review:eq(1)", //底部推荐视频区
    ".gui-navbar-attention", //我的关注按钮
    ".gui-left", //左侧分类区
    ".gui-navbar-anchor", //主播中心按钮
    ".live-panel-luxury-result",
    "div.panel-player-recommond-right", //企鹅二维码
    "ul.row2", //其他直播推荐
    "div[class='live-list-player-recommond oneway']", //其他直播推荐
    "div.my-container > div > div:nth-child(3)", //系统公告横幅
    "img.icon-activity", //头衔图标
    "img.img-level" //等级图标

];
var class_list = [
    ".icon-activity{display:none;}", //头衔图标
    ".img-level{display:none;}", //等级图标
    ".chat-msg-gift{display:none;}", //送礼提示
    ".panel-mount{display:none;}", //进场坐骑展示区
    ".combo-wrap,.combo-wrap1{display:none;}", //系统广播横幅
    "._danmaku_comment_node .barrage-info{display:none;}", //弹幕送礼提示
];

egame.start = () => {
    //聊天区清理
    //覆盖样式
    for (var i in class_list) {
        document.styleSheets[0].insertRule(class_list[i]);
    }
    //多余元素清理
    for (var i in ele_list) {
        k(ele_list[i]).remove();
    }
    //调整元素位置
    k(".gui-main").css({
        "margin-top": "0px",
        "padding-top": "15px",
        "z-index": "77",
        "margin-left": "20px"
    });
    k(".gui-navbar").css({
        "z-index": "43"
    });
    k(".gui-navbar-container").css({
        "margin-right": "0px"
    });
    k(".searchbar>input").css({
        "width": "88px"
    });
    k("div.live-list-player-recommond").css({
        "bottom": "0px",
        "top": "auto",
        "margin-top": "0px"
    });

    //收起后展开,触发自适应调整窗口
    k("i.live-right-bubble").click();
    //50ms 后重新展开
    setTimeout("k('i.live-right-bubble').click()", 50);

    //净化弹幕与聊天区
    const DOMNodeListener = selector => {
        let mutation = new MutationObserver((mutations) => {
            var item = mutations[0];
            var node = item.addedNodes[0];
            var text = k(node).find("span[style]:last").text();
            if (text && text.search(/(.*?)+(坐着|开通|下注了)(.*?)+(光临本直播间|守护|金币)/) != -1) {
                k(node).hide();
            }
        });
        let ele = document.querySelector(selector);
        mutation.observe(ele, {
            childList: true
        });
    };
    // DOMNodeListener("div.chat-content ul.vb-content");
    // DOMNodeListener("div.my-container div.barage-container > div");

    //添加页面全屏
    k(".vcp-controls-panel").append(k(
        "<div class=\"vcp-extended-set fullPage\">页面全屏</div>"
    ));
    k(document).on("click", ".fullPage", egame.FullPageScreen);
}
egame.FullPageScreen = () => {
    k(".vcp-clarityswitcher").append($(

    ))
    var ele_list_fullPage = [
        ".live-mod-anchor",  //主播信息
        ".live-review", //底部录播列表
        ".gui-navbar" //顶部导航栏
        //".live-panel-player-bottom" //
    ];
    ele_list_fullPage.forEach((item) => {
        k(item).remove();
    });
    // 右侧聊天区
    k(".live-right-menu").css({
        "top": 0
    });
    // 调整播放器组件细节
    k(".gui-main").attr("style", "margin-top: 0px;padding-top: 0px;z-index: 77;margin-left: 0px;padding-bottom: 0px;");
    //收起后展开,触发自适应调整窗口
    k("i.live-right-bubble").click();
    //50ms 后重新展开
    setTimeout("k('i.live-right-bubble').click()", 50);
}