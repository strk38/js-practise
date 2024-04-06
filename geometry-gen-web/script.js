document.getElementById('t-area').addEventListener('click', function () {
    const base = getVal('t-b');
    const height = getVal('t-h');

    const area = 0.5 * base * height;
    console.log(area);
    setPost('Triangle', area);
})

document.getElementById('r-area').addEventListener('click', function () {
    const base = getVal('w');
    const height = getVal('l');

    const area = base * height;
    console.log(area);
    setPost('Rectangle', area);
})

document.getElementById('p-area').addEventListener('click', function () {
    const base = getVal('p-b');
    const height = getVal('p-h');

    const area = 0.5 * base * height;
    console.log(area);
    setPost('Parallelogram', area);
})

document.getElementById('rh-area').addEventListener('click', function () {
    const base = getVal('d1');
    const height = getVal('d2');

    const area = 0.5 * base * height;
    console.log(area);
    setPost('Rhombus', area);
})

document.getElementById('pent-area').addEventListener('click', function () {
    const base = getVal('pent-p');
    const height = getVal('pent-b');

    const area = 0.5 * base * height;
    console.log(area);
    setPost('Pentagon', area);
})

document.getElementById('e-area').addEventListener('click', function () {
    const base = getVal('e-a');
    const height = getVal('e-b');

    const area = 3.1416 * base * height;
    console.log(area);
    setPost('Ellipse', area);
})

function getVal(inputID) {
    const val = document.getElementById(inputID).value;

    if (isNaN(val) || isNaN(parseFloat(val))) {
        alert("Wrong input");
    }
    else {
        return parseFloat(val);
    }

}

function setPost(nameId, value) {
    const olField = document.getElementById('ol-list')

    const li_elem = document.createElement('li');
    li_elem.classList.add(nameId);
    // li_elem.innerText = nameId + " " + value + ' cm2';

    // const button = document.createElement('button');
    // button.classList.add('btn, btn-primary, text-white');
    // button.innerText = 'Convert to m2';


    // li_elem.appendChild(button);

    li_elem.innerHTML = `${nameId}  ${value}cm2
    <button type="button" class="btn btn-primary text-white px-3 py-1 mb-3" onclick="alert('Button clicked!')">Convert to m2</button>
    `;

    olField.appendChild(li_elem);
}

