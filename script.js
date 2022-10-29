var request = new XMLHttpRequest();
request.open('GET', "https://ghibliapi.herokuapp.com/films/");
request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    var cpe = parsedData.title;
    for (count in parsedData) {

        var cpe = parsedData[count].title;
        var cpeoriginal = parsedData[count].original_title;
        var cperomanised = parsedData[count].original_title_romanised;
        var cpe1 = parsedData[count].image;
        var cperelease = parsedData[count].release_date;
        var cpedir = parsedData[count].director;

        var cpe41 = document.createElement('li');
        var cpetitle = document.createElement('li');
        var cpetitleroma = document.createElement('li');
        var cpeimg = document.createElement('img');
        var cpedate = document.createElement('li');
        var cpedirector = document.createElement('li');

        cpe41.innerHTML = cpe;
        cpetitle.innerHTML = cpeoriginal;
        cpetitleroma.innerHTML = cperomanised;
        cpedate.innerHTML = cperelease;
        cpedirector.innerHTML = cpedir;
        cpeimg.innerHTML = cpe1;


        cpeimg. setAttribute('src', cpe1);
        document.body.appendChild(cpe41);
        document.body.appendChild(cpetitle);
        document.body.appendChild(cpetitleroma);
        document.body.appendChild(cpedate);
        document.body.appendChild(cpedirector);
        document.body.appendChild(cpeimg);
    }


console.log(parsedData);
console.log(cpe);

}
request.send();