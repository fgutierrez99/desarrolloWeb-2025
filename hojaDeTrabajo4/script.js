document.querySelectorAll('.btn-itinerario').forEach(btn => {
    btn.addEventListener('click', () => {
        const tables = document.querySelectorAll('.itinerario-table');
        tables.forEach(t => (t.style.display = 'none'));
        const id = btn.dataset.target;
        const chosen = document.getElementById(id);
        if (chosen) chosen.style.display = 'table';

        document.querySelectorAll('.btn-itinerario').forEach(b => b.classList.replace('btn-primary', 'btn-outline-primary'));
        btn.classList.replace('btn-outline-primary', 'btn-primary');
    });
});

const nombres = [
    'Ana', 'Luis', 'María', 'Carlos', 'Sofía', 'Flor',
    'Pedro', 'Lucía', 'Javier', 'Daniela', 'Miguel', 'Sergio'
];

const comentarios = [
    'Excelente experiencia, muy recomendado.',
    'Las vistas son increíbles.',
    'Buen lugar para ir con la familia.',
    'La organización fue impecable.',
    'Aprendí muchísimo del guía.',
    'Quiero volver pronto.',
    'El clima estuvo perfecto.',
    'Las actividades fueron divertidas.',
    'La atención fue de primera.',
    'Me encantó la comida local.',
    'Un viaje inolvidable.',
    'Perfecto para desconectar.'
];

function sampleUnique(arr, n) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
}

const selectedNames = sampleUnique(nombres, 12);
const selectedComments = sampleUnique(comentarios, 12);
const cont = document.getElementById('comentarios');
selectedNames.forEach((name, idx) => {
    const text = selectedComments[idx];
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-primary">${name}</h6>
        <p class="card-text">${text}</p>
      </div>
    </div>`;
    cont.appendChild(col);
});

const form = document.getElementById('contactForm');
const modalEl = document.getElementById('confirmModal');
const modal = new bootstrap.Modal(modalEl);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const fecha = document.getElementById('fecha');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const setValid = (el, ok) => {
        el.classList.toggle('is-invalid', !ok);
        el.classList.toggle('is-valid', ok);
    };

    const okNombre = nombre.value.trim() !== '';
    const okFecha = fecha.value.trim() !== '';
    const okMensaje = mensaje.value.trim() !== '';

    setValid(nombre, okNombre);
    setValid(fecha, okFecha);
    setValid(email, emailOK);
    setValid(mensaje, okMensaje);

    const formOk = okNombre && okFecha && emailOK && okMensaje;

    if (formOk) {
        console.log({
            nombre: nombre.value,
            fechaNacimiento: fecha.value,
            email: email.value,
            mensaje: mensaje.value
        });

        modalEl.querySelector('.modal-body').innerHTML =
            `<p>¡Gracias, <strong>${nombre.value}</strong>! Te contactaremos a <strong>${email.value}</strong>.</p>`;
        modal.show();

        form.reset();
        form.querySelectorAll('.is-valid').forEach(x => x.classList.remove('is-valid'));
    }
});
