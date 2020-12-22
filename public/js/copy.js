function copyToClipboard(element, name) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    displayAlert(name)
  }

function displayAlert(name) {
    let display = document.getElementById("render")
    display.innerHTML += "<div class='alert'>"+
    "<span class='closebtn' onClick='removeAlert()'>&times;</span>"+
    name+" has been copied to clipboard!"+
  "</div><br>"
  console.log(display.childElementCount)
  setTimeout(removeAlert, 5000)
}

function removeAlert() {
    let display = document.getElementById("render")
    display.removeChild(display.childNodes[0])
    display.removeChild(display.childNodes[0])
}
  