var content = document.getElementById("content");
var btn = document.getElementById("show-more");

btn.onclick = function(){
    if(content.className == "open"){
        content.className = "";
        btn.innerHTML = "방 사진 다 보기";
    }else{
        content.className = "open";
        btn.innerHTML = "방 사진 닫기"
    }
};



var oneroomcontent = document.getElementById("oneroomcontent");
var oneroombtn = document.getElementById("oneroomshow-more");

oneroombtn.onclick = function(){
    if(oneroomcontent.className == "open"){
        oneroomcontent.className = "";
        oneroombtn.innerHTML = "방 사진 다 보기";
    }else{
        oneroomcontent.className = "open";
        oneroombtn.innerHTML = "방 사진 닫기";

    }
}