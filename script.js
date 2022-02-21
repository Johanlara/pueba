'use strict'

//             localizar elementos

const inputs = [...document.querySelectorAll('.a')];
const options = [...document.querySelectorAll('.options')];
const optionss = [...document.querySelectorAll('.l')];
const modal = document.querySelector('.modal');



//             variables

//imagenes
const completado = `<img src="img/check.png " alt=" ">`;
const reAgendado = `<img src="img/clock.png " alt=" ">`;
const prioridad = `<img src="img/star.png " alt=" ">`;
const seguimiento = `<img src="img/letter-s.png " alt=" ">`;
const pausado = `<img src="img/pause.png " alt=" ">`;
const enProceso = `<img src="img/arroba.png " alt=" ">`;
const delegado = `<img src="img/vitamin.png " alt=" ">`;

//optiones

//             funciones

const agregar = (key, info) => {
    localStorage.setItem(`${key}`, `${info}`);
}

const actualizar = () => {
    location.reload(true)
}

//             eventos

inputs.forEach(inp => {
    inp.addEventListener('change', () => {

        let key = inp.classList.item(1);
        let info = inp.value;
        return agregar(key, info);
    })
})

options.forEach(opp => {
    opp.addEventListener('click', () => {
        modal.classList.add('modals');
        let key = opp.classList.item(1);

        let md = [...document.querySelectorAll('.l')];

        for (let mds of md) {
            mds.addEventListener('click', () => {
                modal.classList.remove('modals')
                let inf = mds.classList.item(0);
                localStorage.setItem(`${key}`, `${inf}`);
                return actualizar();
            })
        }

    })
})



addEventListener('load', () => {
    inputs.forEach(inps => {
        inps.value = localStorage.getItem(`${inps.classList.item(1)}`)
    })



})

addEventListener('load', () => {

    options.forEach(e => {

        const ver = () => {
            let id = e.classList.item(1);
            if (localStorage.getItem(id) == 'c1') {
                e.innerHTML = completado;
            } else if (localStorage.getItem(id) == 'c2') {
                e.innerHTML = reAgendado;
            } else if (localStorage.getItem(id) == 'c3') {
                e.innerHTML = prioridad;
            } else if (localStorage.getItem(id) == 'c4') {
                e.innerHTML = seguimiento;
            } else if (localStorage.getItem(id) == 'c5') {
                e.innerHTML = pausado;
            } else if (localStorage.getItem(id) == 'c6') {
                e.innerHTML = enProceso;
            } else if (localStorage.getItem(id) == 'c7') {
                e.innerHTML = delegado;
            } else {

            }

        }

        return ver();
    })
})