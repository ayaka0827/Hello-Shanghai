// 多语言切换功能
function changeLanguage() {
    var lang = document.getElementById("language").value;

    // 根据选择的语言更新网站内容（此处仅作示例，您可以根据需求做相应的翻译）
    if (lang === "zh") {
        document.querySelector("h1").textContent = "智游上海 - HelloShanghai";
    } else if (lang === "ja") {
        document.querySelector("h1").textContent = "こんにちは上海 - HelloShanghai";
    } else if (lang === "en") {
        document.querySelector("h1").textContent = "HelloShanghai - 智游上海";
    } else if (lang === "th") {
        document.querySelector("h1").textContent = "สวัสดีเซี่ยงไฮ้ - HelloShanghai";
    }
}