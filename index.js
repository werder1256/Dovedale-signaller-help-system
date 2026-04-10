/*All lines are seen from DC.
CH is out of everything, this is because it's a somewhat dead station and only accessible by taking a detour or setting destination.
Later in the script there will be a buffer system for this.
 */
DC_GJ_line =[
    "Dovedale Central",
    "Marigot Crossing",
    "Codsdall Castle",
    "Glassbury Junction"
]
DC_MS_line=[
    "Dovedale Central",
    "Marigot crossing",
    "Masonfield"
]
DC_MW_line=[
    "Dovedale Central",
    "Gleethrop End",
    "Mazewood"
]
DC_GJ_line_C=[
    "DC",
    "MC",
    "CC",
    "GJ"
]
DC_MS_line_C=[
    "DC",
    "MC",
    "MS",
]
DC_MW_line_C=[
    "DC",
    "GE",
    "MW"
]
MCLines_C=[
    ["Towards DC",["DC"]],
    ["Towards GJ",["CC", "GJ"]],
    ["Towards MS", ["MS"]]
]
MCLines=[
    ["Towards Dovedale central",["Dovedale central"]],
    ["Towards Glasbury Junction",["Codsal Castle", "Glasbury Junction"]],
    ["Towards Masonfield", ["Masonfield"]]
]
DELine=[
    "Dovedale Central",
    "Dovedale East",
    "Satus",
    "Fanory Mill",
    "Benyhone Loop",
    "Ashburn"
]
DELineC=[
    "DC",
    "DE",
    "SAT",
    "FM",
    "BL",
    "AB"
]

boxInput=document.getElementById("boxInput")
boxInput.addEventListener("change", getLine)
destInput=document.getElementById("destinationInput")
destInput.addEventListener("change", getDirection)
workDiv=document.getElementById("workDiv")
function stationDis(station){
    text=document.createElement("p")
    text.innerHTML= "For every destination not mentioned in this list you may assume it needs to be send towards "+station
    workDiv.append(text)
}
function textStationChecker(box, array){
    for(i in array){
        object=array[i].toLowerCase().trim()
        box=box.toLowerCase()
        if(object===box){
            return true
        }
    }
    return false
}
function textStationIndex(box, array){
    for(i in array) {
        object = array[i].toLowerCase().trim()
        box = box.toLowerCase()
        if (object === box) {
            return i
        }

    }
}
function getLine(){
    box=boxInput.value.trim()
    workDiv.innerHTML=""
    if(box.length>1){
        if(box.length===2||box.length===3){
            box=box.toUpperCase()
            if (box==="MC"){
                for(i=0;i<3;i++){
                    text=document.createElement("h3")
                    text.innerHTML=MCLines_C[i][0]
                    workDiv.append(text)
                    for(x in MCLines_C[i][1]){
                        text=document.createElement("p")
                        text.innerHTML=MCLines_C[i][1][x]
                        workDiv.append(text)
                    }
                }
                stationDis("Dovedale Central(DC)")
            }
            else if(box==="CH") {
                text=document.createElement("p")
                text.innerHTML="Stations on the Dovedale East(DE) Line:"
                workDiv.append(text)
                for(i in DELineC){
                    text=document.createElement("p")
                    text.innerHTML=DELineC[i]
                    workDiv.append(text)
                }
                text=document.createElement("p")
                text.innerHTML="For all other destinations, you may assume they should be send towards Dovedale Central(DC)"
                workDiv.append(text)
            }
            else if (box==="DC"){
                text=document.createElement("p")
                text.innerHTML="Line towards Glassbury Junction(GJ):"
                workDiv.append(text)
                document.createElement("br")
                for(z in DC_GJ_line_C){
                    text=document.createElement("p")
                    text.innerHTML=DC_GJ_line_C[z]
                    workDiv.append(text)

                }
                text=document.createElement("p")
                text.innerHTML="Line towards Masonfield(MS):"
                workDiv.append(text)
                document.createElement("br")
                for(z in DC_MS_line_C){
                    text=document.createElement("p")
                    text.innerHTML=DC_MS_line_C[z]
                    workDiv.append(text)
                    text=document.createElement("br")
                    workDiv.append(text)
                }
                text=document.createElement("p")
                text.innerHTML="Line towards Mazewood(MW):"
                workDiv.append(text)
                document.createElement("br")
                for(z in DC_MW_line_C){
                    text=document.createElement("p")
                    text.innerHTML=DC_MW_line_C[z]
                    workDiv.append(text)
                    text=document.createElement("br")
                    workDiv.append(text)
                }
                stationDis("Dovedale East(DE)")
            }
            else if(DC_GJ_line_C.includes(box)){
                index=DC_GJ_line_C.indexOf(box)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)

                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DC_GJ_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from Dovedale Central(DC):"
                workDiv.append(text)
                for(i=index+1;i<DC_GJ_line_C.length;i++){
                    text=document.createElement("p").innerHTML=DC_GJ_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis("Dovedale Central(DC)")
            }
            else if(DC_MS_line_C.includes(box)){
                index=DC_MS_line_C.indexOf(box)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)
                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DC_MS_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from Dovedale Central(DC):"
                workDiv.append(text)
                for(i=index+1;i<DC_MS_line_C.length;i++){
                    text=document.createElement("p").innerHTML=DC_MS_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis()
            }
            else if(DC_MW_line_C.includes(box)){
                index=DC_MW_line_C.indexOf(box)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)
                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DC_MW_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from DC:"
                workDiv.append(text)
                for(i=index+1;i<DC_MW_line_C.length;i++){
                    text=document.createElement("p").innerHTML=DC_MW_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis("Dovedale Central(DC)")
            }
            else if(DELineC.includes(box)){
                index=DELineC.indexOf(box)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)
                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DELineC[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from DC:"
                workDiv.append(text)
                for(i=index+1;i<DELineC.length;i++){
                    text=document.createElement("p").innerHTML=DELineC[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis("Dovedale Central(DC)")
            }
            else{
                text=document.createElement("h3")
                text.innerHTML="Box is not found. Make sure you use the correct code and check for typos."
                workDiv.append(text)
            }
        }
        else{
            box=box.toLowerCase()
            if (box==="margarit crossing"){
                for(i=0;i<3;i++){
                    text=document.createElement("h3")
                    text.innerHTML=MCLines[i][0]
                    workDiv.append(text)
                    for(x in MCLines_C[i][1]){
                        text=document.createElement("p")
                        text.innerHTML=MCLines[i][1][x]
                        workDiv.append(text)
                    }
                }
                stationDis("Dovedale Central(DC)")
            }
            else if(box==="cosdale harbour") {
                text=document.createElement("p")
                text.innerHTML="Stations on the Dovedale East(DE) Line:"
                workDiv.append(text)
                for(i in DELine){
                    text=document.createElement("p")
                    text.innerHTML=DELine[i]
                    workDiv.append(text)
                }
                text=document.createElement("p")
                text.innerHTML="For all other destinations, you may assume they should be send towards Dovedale Central(DC)"
                workDiv.append(text)
            }
            else if (box==="dovedale central"){
                text=document.createElement("p")
                text.innerHTML="Line towards Glassbury Junction(GJ):"
                workDiv.append(text)
                document.createElement("br")
                for(z in DC_GJ_line){
                    text=document.createElement("p")
                    text.innerHTML=DC_GJ_line[z]
                    workDiv.append(text)
                }
                text=document.createElement("p")
                text.innerHTML="Line towards Masonfield(MS):"
                workDiv.append(text)
                document.createElement("br")
                for(z in DC_MS_line){
                    text=document.createElement("p")
                    text.innerHTML=DC_MS_line[z]
                    workDiv.append(text)
                    text=document.createElement("br")
                    workDiv.append(text)
                }
                text=document.createElement("p")
                text.innerHTML="Line towards Mazewood(MW):"
                workDiv.append(text)
                document.createElement("br")
                for(z in DC_MW_line){
                    text=document.createElement("p")
                    text.innerHTML=DC_MW_line[z]
                    workDiv.append(text)
                    text=document.createElement("br")
                    workDiv.append(text)
                }
            }
            else if(textStationChecker(box, DC_GJ_line)){
                index=textStationIndex(box, DC_GJ_line)
                console.log(index)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)
                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DC_GJ_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from Dovedale Central(DC):"
                workDiv.append(text)
                for(i=index+1;i<DC_GJ_line.length;i++){
                    text=document.createElement("p").innerHTML=DC_GJ_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis("Dovedale Central(DC)")
            }
            else if(textStationChecker(box, DC_MS_line)){
                index=textStationIndex(box, DC_MS_line)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)
                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DC_MS_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from Dovedale Central(DC):"
                workDiv.append(text)
                for(i=index+1;i<DC_MS_line.length;i++){
                    text=document.createElement("p").innerHTML=DC_MS_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis("Dovedale Central(DC)")
            }
            else if(textStationChecker(box, DC_MW_line)){
                index=textStationIndex(box, DC_MW_line)
                text=document.createElement("h3")
                text.innerHTML="Towards Dovedale Central(DC):"
                workDiv.append(text)
                for(i=0;i<index;i++){
                    text=document.createElement("p").innerHTML=DC_MW_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                text=document.createElement("H3")
                text.innerHTML="Away from Dovedale Central(DC):"
                workDiv.append(text)
                for(i=index+1;i<DC_MW_line.length;i++){
                    text=document.createElement("p").innerHTML=DC_MW_line[i]
                    workDiv.append(text)
                    workDiv.append(document.createElement("br"))
                }
                stationDis("Dovedale East(DE)")
            }
            else{
                text=document.createElement("h3")
                text.innerHTML="Box is not found. Make sure you use the correct code and check for typos."
                workDiv.append(text)
            }
        }
    }
}
function getDirection(){
    workDiv.innerHTML=""
    box=boxInput.value.
    box=box.trim()
    destination=destInput.value.trim()
    if(destination) {
        if (box === "DC") {
            if (DELineC.includes(destination)) {
                destIndex = DELineC.indexOf(destination)
                boxIndex = DELineC.indexOf(box)

                console.log("Away from DC")
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DELineC[boxIndex + 1]
                workDiv.append(text)

            } else if (DC_GJ_line_C.includes(destination)) {
                destIndex = DC_GJ_line_C.indexOf(destination)
                boxIndex = DC_GJ_line_C.indexOf(destination)
                console.log(destIndex)

                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex - 1]
                    workDiv.append(text)
                }
            } else if (DC_MS_line_C.includes(destination)) {
                destIndex = DC_MS_line_C.indexOf(destination)
                boxIndex = DC_MS_line_C.indexOf(box)
                console.log(destIndex)

                console.log("Away from DC")
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex - 1]
                workDiv.append(text)

            } else if (DC_MW_line_C.includes(destination)) {
                destIndex = DC_MW_line_C.indexOf(destination)
                console.log(destIndex)
                console.log("Away from DC")
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DC_MW_line_C[boxIndex - 1]
                workDiv.append(text)
            }

        }
        else if(box==="CH") {
            if(DELineC.includes(destination)){
                text=document.createElement("p")
                text.innerHTML="Send the train towards DE"
                workDiv.append(text)
            }
            else{
                text=document.createElement("p")
                text.innerHTML="Send the train towards DC"
                workDiv.append(text)
            }
        }
        else if (box === "MC") {
            console.log(destination)
            if (DC_MW_line_C.includes(destination)) {
                destIndex = DC_MW_line_C.indexOf(destination)
                boxIndex = DC_MW_line_C.indexOf(box)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_MW_line_C[boxIndex + 1]
                    workDiv.append(text)
                }
            } else if (DC_MS_line_C.includes(destination)) {
                destIndex = DC_MS_line_C.indexOf(destination)
                boxIndex = DC_MS_line_C.indexOf(box)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex + 1]
                    workDiv.append(text)
                }

            } else if (DC_GJ_line_C.includes(destination)) {
                destIndex = DC_GJ_line_C.indexOf(destination)
                boxIndex = DC_GJ_line_C.indexOf(box)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex + 1]
                    workDiv.append(text)
                }
            } else {
                text = document.createElement("p")
                text.innerHTML = "Send the train towards Dovedale Central(DC)"
                workDiv.append(text)
            }
        } else if (box.length === 2 || box.length === 3) {
            if (DELineC.includes(box)) {
                boxIndex = DELineC.indexOf(box)
                if (boxIndex !== 0) {
                    if (DELineC.includes(destination)) {
                        destIndex = DELineC.indexOf(destination)
                        console.log(destIndex)
                        console.log(boxIndex)
                        if (destIndex < boxIndex) {
                            console.log("Away from DC")
                            text = document.createElement("p")
                            text.innerHTML = "Send the train towards " + DELineC[boxIndex + 1]
                            workDiv.append(text)
                        } else {
                            console.log("towards DC")
                            text = document.createElement("p")
                            text.innerHTML = "Send the train towards " + DELineC[boxIndex - 1]
                            workDiv.append(text)
                        }
                    }
                }
            }

        } else if (DC_GJ_line_C.includes(box)) {
            boxIndex = DC_GJ_line_C.indexOf(box)
            if (boxIndex !== 0) {
                if (DC_GJ_line_C.includes(destination)) {
                    destIndex = DC_GJ_line_C.indexOf(destination)
                    console.log(destIndex)
                    console.log(boxIndex)
                    if (destIndex > boxIndex) {
                        console.log("Away from DC")
                        text = document.createElement("p")
                        text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex - 1]
                        workDiv.append(text)
                    } else {
                        console.log("towards DC")
                        text = document.createElement("p")
                        text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex + 1]
                        workDiv.append(text)
                    }
                }
            }
        } else if (DC_MS_line_C.includes(box)) {
            boxIndex = DC_MS_line_C.indexOf(box)
            if (boxIndex !== 0) {
                if (DC_MS_line_C.includes(destination)) {
                    destIndex = DC_MS_line_C.indexOf(destination)
                    console.log(destIndex)
                    console.log(boxIndex)
                    if (destIndex > boxIndex) {
                        console.log("Away from DC")
                        text = document.createElement("p")
                        text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex - 1]
                        workDiv.append(text)
                    } else {
                        console.log("towards DC")
                        text = document.createElement("p")
                        text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex + 1]
                        workDiv.append(text)
                    }
                }
            }
        } else if (DC_MW_line_C.includes(box)) {
            boxIndex = DC_MS_line_C.indexOf(box)
            if (boxIndex !== 0) {
                if (DC_MS_line_C.includes(destination)) {
                    destIndex = DC_MS_line_C.indexOf(destination)
                    console.log(destIndex)
                    console.log(boxIndex)
                    if (destIndex > boxIndex) {
                        console.log("Away from DC")
                        text = document.createElement("p")
                        text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex - 1]
                        workDiv.append(text)
                    } else {
                        console.log("towards DC")
                        text = document.createElement("p")
                        text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex + 1]
                        workDiv.append(text)
                    }
                }
            }
        }
    }
    box=box.toLowerCase()
    if (box === "dovedale central") {
        if (DELineC.includes(destination)) {
            destIndex = DELineC.indexOf(destination)
            boxIndex = DELineC.indexOf(box)
            text = document.createElement("p")
            text.innerHTML = "Send the train towards " + DELine[boxIndex + 1]
            workDiv.append(text)

        } else if (DC_GJ_line_C.includes(destination)) {
            destIndex = DC_GJ_line_C.indexOf(destination)
            boxIndex = DC_GJ_line_C.indexOf(destination)
            console.log(destIndex)

            if (destIndex > boxIndex) {
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DC_GJ_line[boxIndex - 1]
                workDiv.append(text)
            }
        } else if (DC_MS_line_C.includes(destination)) {
            destIndex = DC_MS_line_C.indexOf(destination)
            boxIndex = DC_MS_line_C.indexOf(box)
            console.log(destIndex)
            text = document.createElement("p")
            text.innerHTML = "Send the train towards " + DC_MS_line[boxIndex - 1]
            workDiv.append(text)

        } else if (DC_MW_line_C.includes(destination)) {
            destIndex = DC_MW_line_C.indexOf(destination)
            console.log(destIndex)
            text = document.createElement("p")
            text.innerHTML = "Send the train towards " + DC_MW_line[boxIndex - 1]
            workDiv.append(text)
        }

    }
    else if(box==="cosdale harbour") {
        if(DELine.includes(destination)){
            text=document.createElement("p")
            text.innerHTML="Send the train towards Dovedale East"
            workDiv.append(text)
        }
        else{
            text=document.createElement("p")
            text.innerHTML="Send the train towards Dovedale Central"
            workDiv.append(text)
        }
    }
    else if (box === "margarit crossing") {
        console.log(destination)
        if (DC_MW_line_C.includes(destination)) {
            destIndex = DC_MW_line.indexOf(destination)
            boxIndex = DC_MW_line.indexOf(box)
            console.log(destIndex)
            console.log(boxIndex)
            if (destIndex > boxIndex) {
                console.log("Away from DC")
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DC_MW_line_C[boxIndex + 1]
                workDiv.append(text)
            }
        } else if (DC_MS_line.includes(destination)) {
            destIndex = DC_MS_line.indexOf(destination)
            boxIndex = DC_MS_line.indexOf(box)
            console.log(destIndex)
            console.log(boxIndex)
            if (destIndex > boxIndex) {
                console.log("Away from DC")
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex + 1]
                workDiv.append(text)
            }

        } else if (DC_GJ_line.includes(destination)) {
            destIndex = DC_GJ_line.indexOf(destination)
            boxIndex = DC_GJ_line.indexOf(box)
            console.log(destIndex)
            console.log(boxIndex)
            if (destIndex > boxIndex) {
                console.log("Away from DC")
                text = document.createElement("p")
                text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex + 1]
                workDiv.append(text)
            }
        } else {
            text = document.createElement("p")
            text.innerHTML = "Send the train towards Dovedale Central(DC)"
            workDiv.append(text)
        }
    }
    if (DELineC.includes(box)) {
        boxIndex = DELineC.indexOf(box)
        if (boxIndex !== 0) {
            if (DELineC.includes(destination)) {
                console.log("DE line")
                destIndex = DELineC.indexOf(destination)
                boxIndex = DELineC.indexOf(box)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DELineC[boxIndex - 1]
                    workDiv.append(text)
                }
                else {

                    console.log("towards DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DELineC[boxIndex + 1]
                    workDiv.append(text)
                }
            }
        }
    }
    else if (DC_GJ_line_C.includes(box)) {
        boxIndex = DC_GJ_line_C.indexOf(box)
        if (boxIndex !== 0) {
            if (DC_GJ_line_C.includes(destination)) {
                destIndex = DC_GJ_line_C.indexOf(destination)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex - 1]
                    workDiv.append(text)
                } else {
                    console.log("towards DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_GJ_line_C[boxIndex + 1]
                    workDiv.append(text)
                }
            }
        }
    } else if (DC_MS_line_C.includes(box)) {
        boxIndex = DC_MS_line_C.indexOf(box)
        if (boxIndex !== 0) {
            if (DC_MS_line_C.includes(destination)) {
                destIndex = DC_MS_line_C.indexOf(destination)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex - 1]
                    workDiv.append(text)
                } else {
                    console.log("towards DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex + 1]
                    workDiv.append(text)
                }
            }
        }
    } else if (DC_MW_line_C.includes(box)) {
        boxIndex = DC_MS_line_C.indexOf(box)
        if (boxIndex !== 0) {
            if (DC_MS_line_C.includes(destination)) {
                destIndex = DC_MS_line_C.indexOf(destination)
                console.log(destIndex)
                console.log(boxIndex)
                if (destIndex > boxIndex) {
                    console.log("Away from DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex - 1]
                    workDiv.append(text)
                } else {
                    console.log("towards DC")
                    text = document.createElement("p")
                    text.innerHTML = "Send the train towards " + DC_MS_line_C[boxIndex + 1]
                    workDiv.append(text)
                }
            }
        }
    }
}