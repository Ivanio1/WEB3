function clickSubmitButton() {
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let month = (date.getMonth() < 9) ? '0' + date.getMonth()+1 : date.getMonth() + 1;
    let year = date.getFullYear();
    let timeValue = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
    $(".time").val(timeValue);
    setTimeout(function(){
        $(".hidden-submit-button").click();
    },1);

}
function changeR() {
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let month = (date.getMonth() < 9) ? '0' + date.getMonth()+1 : date.getMonth() + 1;
    let year = date.getFullYear();
    let timeValue = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
    $(".time").val(timeValue);
    setTimeout(function(){
        $(".hidden-submit-butt").click();
    },1);

}

