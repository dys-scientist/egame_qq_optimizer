// 绑定事件
chrome.browserAction.onClicked.addListener(onClicked);

function onClicked(tab){
    console.log(1);
    if(tab && tab.url){
        chrome.tabs.executeScript(tab.id,{
            code: 'egame.start();'
        });
    }
}

