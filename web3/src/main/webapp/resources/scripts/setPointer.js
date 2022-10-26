let rValue


function getRValue() {
    if (isNaN(rValue))
        rValue = getRValueFromTable();
    return rValue;
}

function getRValueFromTable() {
    let rValueFromTable;
    rValueFromTable = parseFloat($("tbody tr").last().find(">:nth-child(3)").text());
    if (isNaN(rValueFromTable))
        rValueFromTable = 2;
    console.log("rValueFromTable", rValueFromTable)
    return rValueFromTable;
}

function drawPointsFromTable() {
    $("tbody tr").each(function () {
        let point = $(this);
        let x = parseFloat(point.find(">:first-child").text());
        let y = parseFloat(point.find(">:nth-child(2)").text());
        let r = parseFloat(point.find(">:nth-child(3)").text());
        let result = point.find(">:nth-child(4)").text().trim() === "Hit";

        if (isNaN(x) || isNaN(y) || isNaN(r)) {
            return;
        }
        let color;
        color = result ? "green" : "red";

        function xValueForPoint(x) {
            return (x / r * 2 * 60 + 150)
        }

        function yValueForPoint(y) {
            return (-y / r * 2 * 60 + 150)
        }

        let plot = $("svg")

        let existingPlot = plot.html()
        let newPlot = `<circle id="pointer" r="5" cx="${xValueForPoint(x)}" cy="${yValueForPoint(y)}" fill-opacity="0.7" fill="${color}" stroke="firebrick" visibility="visible"></circle>`
        plot.html(existingPlot + newPlot)
    })
}


function getXFromSVG(x, r) {
    return (x - 150) / 60 / 2 * r;
}

function getYFromSVG(y, r) {
    return (y - 150) / 60 / 2 * -r;
}

function clickPlotHandler(e) {
    let offset = $(this).offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    let xValue = getXFromSVG(x, getRValue()).toFixed(2);
    let yValue = getYFromSVG(y, getRValue()).toFixed(2);

    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let month = (date.getMonth() < 9) ? '0' + date.getMonth()+1 : date.getMonth() + 1;
    let year = date.getFullYear();
    let timeValue = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;

    $(".x-hidden").val(xValue);
    $(".y-hidden").val(yValue);
    $(".r-hidden").val(getRValue());
    $(".time-hidden").val(timeValue);
    $(".hidden-submit-btn").click();

}


$("svg").click(clickPlotHandler)
drawPointsFromTable()


