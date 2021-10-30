var flag = false;

function createRecord(){
  var stdId = document.getElementById("stdid").value;
  var stdName = document.getElementById("stdname").value;
  var stdDept = document.getElementById("stddept").value;
  var stdMarks = document.getElementById("stdmarks").value;
  var table = document.getElementById("MyDynamicTable");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML = stdId;
  row.insertCell(1).innerHTML = stdName;
  row.insertCell(2).innerHTML = stdDept;
  row.insertCell(3).innerHTML = stdMarks;
  row.insertCell(4).innerHTML = '<input type="button" value = "Edit" onClick="editRow(this)" style="color:red;">';
  row.insertCell(5).innerHTML = '<input type="button" value = "Delete" onClick="delRow(this)" style="color:red;">';

  document.getElementById("stdid").value = "";
  document.getElementById("stdname").value = "";
  document.getElementById("stddept").value = "";
  document.getElementById("stdmarks").value = "";
  let record = {
    StudentId:stdId,
    StudentName:stdName,
    StudentDepartment:stdDept,
    StudentMarks:stdMarks
  }

}

function delRow(obj){
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("MyDynamicTable");
  table.deleteRow(index);

}

function editRow(obj){
  document.getElementById("save_record").style.display = "block";
  document.getElementById("create_record").style.display = "none";
  r = obj.parentNode.parentNode;
  var index = r.rowIndex;

  document.getElementById("stdid").value = r.cells[0].innerHTML;
  document.getElementById("stdname").value = r.cells[1].innerHTML;
  document.getElementById("stddept").value = r.cells[2].innerHTML;
  document.getElementById("stdmarks").value = r.cells[3].innerHTML;
}

function saveRecord(){
  r.cells[0].innerHTML = document.getElementById("stdid").value;
  r.cells[1].innerHTML = document.getElementById("stdname").value;
  r.cells[2].innerHTML = document.getElementById("stddept").value;
   r.cells[3].innerHTML = document.getElementById("stdmarks").value;

  let record = {
    StudentId:document.getElementById("stdid").value,
    StudentName:document.getElementById("stdname").value,
    StudentDepartment:document.getElementById("stddept").value,
    StudentMarks:document.getElementById("stdmarks").value,
  }
  var index = r.rowIndex;


  document.getElementById("stdid").value="";
  document.getElementById("stdname").value="";
  document.getElementById("stddept").value="";
  document.getElementById("stdmarks").value="";

  document.getElementById("save_record").style.display = "none";
  document.getElementById("create_record").style.display = "block";
}