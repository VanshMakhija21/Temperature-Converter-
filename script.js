let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celsius.addEventListener('input', () => {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
})

kelvin.addEventListener('input', () => {
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(2));
})

fahrenheit.addEventListener('input', () => {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
})

