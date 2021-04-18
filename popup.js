var queryInfo = {  
  active: true,  
  currentWindow: true  
};    
chrome.tabs.query(queryInfo, (tabs) => {  
    var link = tabs[0].url.split("?v="); //https://www.youtube.com/watch?v=UKaCBdyURYs&ab_channel=EireneCatlin
    var final = link[1].split("&ab");
    let videoid = final[1] ? final[0] : link[1];
  
    var element = '<iframe src="https://www.yt-download.org/api/button/mp3/' + videoid +'" id="iframe" width="120px" height="100px" sandbox scrolling="no" style="border:none;"><base target="_blank"></iframe>';  
    document.body.innerHTML = element;  

    var iframe = document.getElementById('iframe');
    
    
});