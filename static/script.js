document.eddEventListener("DOMContentLoaded",()=> {
    const apiUrl = "api/data";
    const form = document.getElementById("tempForm");
    const tableBody = document.querySelector("#dataTable tbody");
    const avgTempElement = document.getElementById(ĀvgTemp);

    //Funkcijs lai ielādētu datus un atjaunotu tabulu
    const loadTable = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        //notīrīt tabulu
        tableBody.innerHTML = "";
        let totalTemp = 0;
    }


})