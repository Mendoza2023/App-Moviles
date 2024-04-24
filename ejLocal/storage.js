let database = new dataManager('students');

function dataManager(name){

  let DB = (localStorage.getItem(name))?JSON.parse(localStorage.getItem(name)):[];

  /* metodos */
  return{
    // obtener todos los datos de la coleccion
    get : ()=>{
      return DB;
    },
    // ingresar nuevos datos
    push  : (obj)=>{
      DB.push(obj);
      localStorage.setItem(name,JSON.stringify(DB));
    },
    // ingresar una nueva coleccion
    set : (collection)=>{
      DB = collection;
      localStorage.setItem(name,JSON.stringify(DB));
    },
    // eliminar todos los datos de la coleccion
    delete  : ()=>{
      DB = [];
      localStorage.setItem(name,JSON.stringify(DB));
    }
  }
}

function saveData(){
  const fullName = document.getElementById("fullname").value;
  const genre = document.getElementById("genre").value;
  const career = document.getElementById("career").value;

  const student= {"fullname":`${fullName}`,"genre":`${genre}`,"career":`${career}`};

  database.push(student);

}

function listData(){
  let students = database.get('students');
  let table = document.getElementById("students");
  table.innerHTML = "";
  let i=0;
  students.forEach(student => {
    let row= table.insertRow(i);
    let cell = row.insertCell(0);
    cell.innerHTML = student.fullname;
    cell = row.insertCell(1);
    cell.innerHTML = student.genre;
    cell = row.insertCell(2);
    cell.innerHTML = student.career;
    i++;
  });

  
}

function deleteData(){
  database.delete();
}