const arr = [
    { Id: 1, name: "john", age: "18", profession: "developer" },
    { Id: 2, name: "jack", age: "20", profession: "developer" },
    { Id: 3, name: "Karen", age: "19", profession: "admin" },
];

arr.map(function (item) {
    item.age = Number(item.age);
})



let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");



function filterByProfession() {

    result.innerHTML = "";


    let dropdownValue = dropdown.value;
    console.log(dropdownValue);


    if (dropdownValue == "profession") {
        alert("Please select a profession");
        return;
    }


    arr.forEach((item) => {


        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = item.Id + ".  Name:" + item.name + "    Profession:" + item.profession + "    Age:" + item.age;
            result.append(div);
        }
    })

}



btn.addEventListener("click", filterByProfession)

let inputName = document.getElementById('nameText');
let inputProfession = document.getElementById('professionText');
let inputAge = document.getElementById('ageText');
let addNewUserBtn = document.getElementById('addUser')



function newCandidate() {

    let insideName = inputName.value;
    let insideProfession = inputProfession.value;
    let insideAge = inputAge.value;
    let insideId = arr.length;
    insideId++;

    const arr2 = { id: insideId + "  Name: " + insideName + " Age: " + insideAge + "Profession: " + insideProfession }
    if (insideName !== "" && insideAge !== "" && insideProfession !== "") {
         arr.push(arr2);
        arr.forEach((item) => {
            // arr.push(arr2);
            let dropdownValue = dropdown.value;
            if (item.profession === dropdownValue) {
                let div = document.createElement("div");
                div.innerText = insideId + "." + "  Name: " + insideName + "Profession: " + insideProfession + " Age: " + insideAge ;
                result.append(div);
            }
        })
        // filterByProfession();
    }
    else {
        alert("Fill in the black")
    }
    console.log(arr);
    inputName.value="";
    inputAge.value="";
    inputProfession.value="";
}
addNewUserBtn.addEventListener("click", newCandidate);