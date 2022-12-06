/*
setTimeout(function () {
  alert('hi after 3 seconds');
}, 3000);
*/ fetch("https://www.breakingbadapi.com/api/characters").then((response)=>response.json()).then((data)=>{
    for (item of data)document.write(item.name);
}).catch((error)=>{
    document.write("Se ha producido un error en la api");
});

//# sourceMappingURL=index.a980d3e9.js.map
