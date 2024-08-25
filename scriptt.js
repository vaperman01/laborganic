const checkboxes = document.querySelectorAll('.checkbox input');
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.getElementById('menuToggle');
const agregar = document.getElementById('item');
const quitar = document.getElementById('item')
checkboxes.forEach(c => {
    c.addEventListener("change", () => {
        const label = document.querySelector(`label[for="${c.name}"]`);
        if (c.checked) {
            label.style.color = '#1A1E20';
        } else {
            label.style.color = '#808487';
        }
    });
});

agregar.addEventListener('click', () => {
    item.classList.add("active");
});

quitar.addEventListener('click', () => {
    item.classList.remove("active");
});
menuBtn.addEventListener('click', () => {
    sidebar.style.left = "0px";
});

document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || menuBtn.contains(event.target);

    if (!isClickInside) {
        sidebar.style.left = "-172px";
    }
});