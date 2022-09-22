const worker ={
    city: 'Orenburg',
    language: 'RU',
}

const frontendDev = Object.create(worker);
frontendDev.stack= 'Html, css, js';


console.log('stack' in frontendDev);