function onHoverSection(sectionID){
    const target = document.getElementById(sectionID)
    const targetValue = sectionID.charAt(sectionID.length-1)

    const imgSty = document.getElementsByClassName("bg"+targetValue)
    const sectionSty = document.getElementsByClassName("shadow"+targetValue)
    const introSty = document.getElementsByClassName("intro"+targetValue)
    const mainSty = document.getElementsByClassName("main"+targetValue)
    const descrptionSty = document.getElementsByClassName("description"+targetValue)

    imgSty[0].classList.add("bg"+targetValue+"Hover")
    sectionSty[0].classList.add("section-hover")
    introSty[0].classList.add("intro"+targetValue+"-hover")
    mainSty[0].classList.add("main"+targetValue+"-hover")
    descrptionSty[0].classList.add("description"+targetValue+"-hover")
}

function onUnhoverSection(sectionID){
    const target = document.getElementById(sectionID)
    const targetValue = sectionID.charAt(sectionID.length-1)

    const imgSty = document.getElementsByClassName("bg"+targetValue)
    const sectionSty = document.getElementsByClassName("shadow"+targetValue)
    const introSty = document.getElementsByClassName("intro"+targetValue)
    const mainSty = document.getElementsByClassName("main"+targetValue)
    const descrptionSty = document.getElementsByClassName("description"+targetValue)

    try{
        imgSty[0].classList.remove("bg"+targetValue+"Hover")
        sectionSty[0].classList.remove("section-hover")
        introSty[0].classList.remove("intro"+targetValue+"-hover")
        mainSty[0].classList.remove("main"+targetValue+"-hover")
        descrptionSty[0].classList.remove("description"+targetValue+"-hover")
        
    }catch(e){
        console.log(new Error(e))
    }
}