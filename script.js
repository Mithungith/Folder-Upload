function uploadedFiles() {
  console.log("Hello");

  document.querySelector("table").classList.remove("vanish");
  let totalFile = document.querySelector("#inputs").files;
  
  for (let i = 0; i < totalFile.length; i++) {
    let fileName = document.querySelector("#inputs").files[i].name;
    let fileSize = (document.querySelector("#inputs").files[i].size)/1000;
    let tbody = document.querySelector("tbody");
    var tr = tbody.insertRow();
    var td1 = tr.insertCell();
    var td2 = tr.insertCell();
    var td1Text = document.createTextNode(fileName);
    var td2Text = document.createTextNode(fileSize+" bytes");
    td1.appendChild(td1Text);
    if (fileSize>=1||fileSize<1000) {
        document.createTextNode(fileSize+" KB");
    }
    
    else if(fileSize>=1000||fileSize<1000000){
        document.createTextNode(fileSize+" MB");
    }
    else if(fileSize>=1000000||fileSize<1000000000){
        document.createTextNode(fileSize+" TB");
    }
    else if(fileSize<1){
    document.createTextNode(fileSize+" bytes");}
     
    td2.appendChild(td2Text);
  }
}

document.querySelector("#inputs").onchange = function (e) {
  uploadedFiles();
};
