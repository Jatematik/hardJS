'use strict';

const foo = (arg) => {
    if (arg !== String(arg)) {
        alert('В функцию передана не строка!');
        return;
    }
    let a = arg.trim();
    if (a.length > 30) {
        a = a.substring(0, 30) + '...';
    }
    console.log(a);
    console.log(a.length);
};

foo('    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus quasi quisquam deleniti dolor cum quaerat ut aliquid debitis voluptatibus, officia quidem illo odit, dicta aut eius harum temporibus impedit.  ');