const calculateTemp = () => {
    const numberTemp =parseFloat( document.getElementById('temp').value);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celtofar = (cel) => {
        let Farenheit = Math.round((cel * 9 / 5) + 32);
        return Farenheit;
    }
    const celtokel = (cel) => {
        let Kelvin = Math.round((cel) +273);
        return Kelvin;
    }
    const fartocel = (far) => {
        let Celsius = Math.round((far - 32) * 5 / 9);
        return Celsius;
    }
    const fartokel = (far) => {
        let Kelvin = Math.round(((far - 32) * 5 / 9) + 273);
        return Kelvin;
    }
    const keltocel = (kel) => {
        let Celsius = Math.round(kel - 273);
        return Celsius;
    }
    const keltofar = (kel) => {
        let Far = Math.round(((kel - 273) * 9 / 5) + 32);
        return Far;
    }

    let result1;
    let result2;


    if (valueTemp == 'cel') {
        result1 = celtofar(numberTemp);
        document.getElementById('resulta').innerHTML = `= ${result1}°Fahrenheit`;
        result2 = celtokel(numberTemp);
        document.getElementById('resultb').innerHTML = `= ${result2}  Kelvin`;

    }
    else if (valueTemp == 'far') {
        result1 = fartocel(numberTemp);
        document.getElementById('resulta').innerHTML = `=${result1} °Celsius`;
        result2 = fartokel(numberTemp);
        document.getElementById('resultb').innerHTML = `=${result2} Kelvin`;
    }
    else {
        result1 = keltocel(numberTemp);
        document.getElementById('resulta').innerHTML = `=${result1} °Celsius`;
        result2 = keltofar(numberTemp);
        document.getElementById('resultb').innerHTML = `=${result2} °Farenheit`;
    }
}

