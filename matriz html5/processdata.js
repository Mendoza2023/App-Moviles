function generateData(){
        let rows = document.getElementById("size").value;
        let cols = rows;
        let table = document.getElementById("tblData");
        let tableTransposed = document.getElementById("tblTransposed");
        table.innerHTML = "";
        tableTransposed.innerHTML = "";
        for (let i=0; i<rows; i++){
            let row = table.insertRow(i);
            for (let c=0; c<cols; c++){
                let cell = row.insertCell(c);
                cell.innerHTML = Math.floor(Math.random() * 99);
                cell.addEventListener("click", editCell);
            }
        }
    }
    
    function generateTransposed() {
        let tableData = document.getElementById("tblData");
        let tableTransposed = document.getElementById("tblTransposed");
        
        let rows = tableData.getElementsByTagName("tr");
        let matriz = [];
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName("td");
            matriz[i]=[];
            for (let j = 0; j < cells.length; j++) {
                matriz[i][j]=cells[j].innerHTML;
            }
        }
        
        tableTransposed.innerHTML = "";
        for (let i = 0; i < rows.length; i++) {
            let row= tableTransposed.insertRow(i);
            for (let j = 0; j < rows.length; j++) {
                let cell = row.insertCell(j);
                cell.innerHTML = matriz[j][i];
            }
        }
    }
    
    let textbox =  "<input type='text' size='3' maxlength='2' " + 
                " onkeypress='return onlyNumberKey(event)'>";
    
    let rows = document.getElementById("size").value;
    let cols = rows;
    let table = document.getElementById("tblWritable");

    table.innerHTML = "";

    for (let i=0; i<rows; i++){
            let row= table.insertRow(i);
            for (let c=0; c<cols; c++){
                    let cell = row.insertCell(c);
                    cell.innerHTML = textbox;
                    let  editText = cell.getElementsByTagName("input");
                    editText.value = Math.floor(Math.random() * 99);
                    console.log ("VALUE: " + editText.value);
            }
    }
    

    function generateTableWritable(){

        let rows = document.getElementById("size").value;
        let cols = rows;
        let table = document.getElementById("tblWritable");
    
        table.innerHTML = "";
    
        for (let i=0; i<rows; i++){
                let row= table.insertRow(i);
                for (let c=0; c<cols; c++){
                        let cell = row.insertCell(c);
                            let textbox =  "<input type='text' size='3' maxlength='2' " + 
                    " onkeypress='return onlyNumberKey(event) '  value='" +
                    Math.floor(Math.random() * 99) + "'>";
                        cell.innerHTML = textbox;
                }
        }
        
    }
    
    
