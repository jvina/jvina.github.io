
exports.myDateTime = 
function() {
    let date = new Date();
    let current_hour = date.getHours();
    let current_min = date.getMinutes() < 10 ? '0' +  date.getMinutes() : '' + date.getMinutes();
    let ampm = current_hour >= 12 ? "pm" : "am";

    if (current_hour > 12) {
        current_hour -= 12;
    } else if (current_hour === 0) {
    current_hour = 12;
    }

    return current_hour + ":" + current_min + ampm

}