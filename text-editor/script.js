let b_count = 0
document.getElementById('btn-bold').addEventListener('click', function () {

    if (b_count == 0) {
        const bField = document.getElementById('text-area');
        bField.style.fontWeight = 'bold';
        b_count++;
    }
    else {
        const bField = document.getElementById('text-area');
        bField.style.fontWeight = 'normal';
        b_count = 0;
    }

})

let i_count = 0
document.getElementById('btn-italic').addEventListener('click', function () {

    if (i_count == 0) {
        const iField = document.getElementById('text-area');
        iField.style.fontStyle = 'italic';
        i_count++;
    }
    else {
        const iField = document.getElementById('text-area');
        iField.style.fontStyle = 'normal';
        i_count = 0;
    }

})

let ul_count = 0
document.getElementById('btn-underline').addEventListener('click', function () {

    if (ul_count == 0) {
        const ulField = document.getElementById('text-area');
        ulField.style.textDecoration = 'underline';
        ul_count++;
    }
    else {
        const ulField = document.getElementById('text-area');
        ulField.style.textDecoration = 'none';
        ul_count = 0;
    }

})

// let lft_align_count = 0
document.getElementById('btn-justify-left').addEventListener('click', function () {

    // if (ul_count == 0) {
    const leftAlignField = document.getElementById('text-area');
    leftAlignField.style.textAlign = 'left';
    //     lft_align_count++;
    // }
    // else {
    //     const leftAlignField = document.getElementById('text-area');
    //     leftAlignField.style.textAlign = 'none';
    //     lft_align_count = 0;
    // }

})

//let rgh_align_count = 0
document.getElementById('btn-justify-right').addEventListener('click', function () {

    // if (ul_count == 0) {
    const rghAlignField = document.getElementById('text-area');
    rghAlignField.style.textAlign = 'right';
    // rgh_align_count++;
    // }
    // else {
    //     const rghAlignField = document.getElementById('text-area');
    //     rghAlignField.style.textAlign = 'none';
    //     rgh_align_count = 0;
    // }

})

// let center_align_count = 0
document.getElementById('btn-justify-center').addEventListener('click', function () {

    // if (ul_count == 0) {
    const centerAlignField = document.getElementById('text-area');
    centerAlignField.style.textAlign = 'center';
    //     center_align_count++;
    // }
    // else {
    //     const centerAlignField = document.getElementById('text-area');
    //     centerAlignField.style.textAlign = 'none';
    //     center_align_count = 0;
    // }

})

document.getElementById('select-font-size').addEventListener('click', function () {
    const SizeField = document.getElementById('text-area');
    const len = document.getElementById('select-font-size').value;

    if (len == '12') {
        SizeField.style.fontSize = '12px';

    }
    else if (len == '14') {
        SizeField.style.fontSize = '14px';

    }
    else if (len == '16') {
        SizeField.style.fontSize = '16px';

    }
    else {
        SizeField.style.fontSize = '18px';

    }

})

document.getElementById('color-picker').addEventListener('input', function () {
    const clrField = document.getElementById('text-area');
    const clr = document.getElementById('color-picker').value;
    console.log(clr);
    if (clr != '#ffffff') {
        clrField.style.color = clr;

    }
    else {
        clrField.style.color = 'black';

    }

})