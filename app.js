const apiKey = '7iStikaUMMrsGhTB4Qvv0GmMMgCkq0WLasXoxDP4';
const nasaUrl = 'https://api.nasa.gov/planetary/apod';




function renderApplication(data){
    const application = document.getElementById('application');
    console.log(data)

    const{title, date, hdurl, explanation} = data


    const main = document.querySelector('#application');

    const h1 = document.createElement('h1');
    h1.innerText = title;
    const firstP = document.createElement('p');
    firstP.innerText = `Date: ${date}`;
    firstP.classList.add('date');
    const image = document.createElement('img');
    image.src = hdurl;
    const description = document.createElement('p');
    description.innerText = explanation;

    
    main.appendChild(h1);
    main.appendChild(firstP);
    main.appendChild(image);
    main.appendChild(description);
}














fetch(`${nasaUrl}?api_key=${apiKey}`)
.then(response => {
    if(!response.ok){
  throw new Error('Network failed to respond');
}  
      
    return response.json();
})
.then(data =>{
  renderApplication(data);
})
.catch(error =>{
  console.error(`ERROR: ${error}`)
})
  
