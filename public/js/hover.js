function onHoverSection(sectionID){
    const target = document.getElementById(sectionID)
    const targetValue = sectionID.charAt(sectionID.length-1)

    const imgSty = document.getElementsByClassName("bg"+targetValue)
    const sectionSty = document.getElementsByClassName("shadow"+targetValue)
    imgSty[0].classList.add("bg"+targetValue+"Hover")
    sectionSty[0].classList.add("section-hover")

}

function onUnhoverSection(sectionID){
    const target = document.getElementById(sectionID)
    const targetValue = sectionID.charAt(sectionID.length-1)

    const imgSty = document.getElementsByClassName("bg"+targetValue)
    const sectionSty = document.getElementsByClassName("shadow"+targetValue)

    try{
        imgSty[0].classList.remove("bg"+targetValue+"Hover")
        sectionSty[0].classList.remove("section-hover")
    }catch(e){
        console.log(new Error(e))
    }
}