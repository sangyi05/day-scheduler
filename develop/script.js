var rightNow = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").append(rightNow)

var tasks = $(".save-button").on("click", function(event) {
    event.preventDefault()
    var inputText=$(this).siblings(".col-10").val()
    var time=$(this).siblings("input").attr("id")
    localStorage.setItem(time, JSON.stringify(inputText))
});

$("#8AM").val(JSON.parse(localStorage.getItem('8AM')))
$("#9AM").val(JSON.parse(localStorage.getItem('9AM')))
$("#10AM").val(JSON.parse(localStorage.getItem('10AM')))
$("#11AM").val(JSON.parse(localStorage.getItem('11AM')))
$("#12PM").val(JSON.parse(localStorage.getItem('12PM')))
$("#1PM").val(JSON.parse(localStorage.getItem('1PM')))
$("#2PM").val(JSON.parse(localStorage.getItem('2PM')))
$("#3PM").val(JSON.parse(localStorage.getItem('3PM')))
$("#4PM").val(JSON.parse(localStorage.getItem('4PM')))


$(".save-button").on("click", function(event) {
    event.preventDefault()

    var taskHour = $(this).siblings(".col-1").text()
    var dueHour = moment(taskHour, "h A")
    console.log(dueHour)

        if (moment("h A").isAfter(dueHour)) {
            $(".col-10").addClass("future")
        } else if (moment("h A").isSame(dueHour)) {
            $(".col-10").addClass("present")
        } else {
            $(".col-10").addClass("past")
        }
})
