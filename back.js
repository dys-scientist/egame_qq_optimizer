// 绑定事件
chrome.browserAction.onClicked.addListener(onClicked);

function onClicked(tab){
    console.log(1);
    if(tab && tab.url){
        if(tab.url.search("//egame.qq.com/77777") == -1){
            alert("仅在德云色直播间内，才可以使用小助手！");
            return;
        }
        chrome.tabs.executeScript(tab.id,{
            code: 'egame.start();'
        });
    }
}

