const tableBTN = document.getElementsByClassName("tableBTN");
const ArrayoftableBTN = Array.from(tableBTN);

ArrayoftableBTN.forEach(async(eac) => {
    const tableNo = eac.innerText;
    const data = await fetch(`http://localhost:8000/allTableFood${tableNo}`);
    const response = await data.json();
    const totalPrice = response[0].price;
    if(totalPrice === ""){
        console.log(tableNo+ " Has no order");
    }else{
        const createdElement = document.createElement("span");
        createdElement.innerText = `£${totalPrice}`;
        const parentElement = eac.parentNode;
        eac.appendChild(createdElement);
    }
})