const worker ={
    city: 'Orenburg',
    language: 'RU',
}

const frontendDev = Object.create(worker);
frontendDev.stack= 'Html, css, js';


for(let key in frontendDev)
{
    if(frontendDev.hasOwnProperty(key))
    {
        console.log(key+ ': ' + frontendDev[key]);
    }
}
