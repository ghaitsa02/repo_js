//logic 1
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        if (x == y) {
            document.write("*")
        } else document.write("_")
    }
    document.write("<br>");
}
//logic 2
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        if (x + y == 9) {
            document.write("*")
        } else document.write("_")
    }
    document.write("<br>");
}
//logic 3
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        if (x == y) {
            document.write("*")
        } else if ( x + y == 9) {
            document.write("*")
        }
        document.write("__")
    }
    document.write("<br>");
}
//logic 4
for (let x = 0; x < 10; x++) {
    for (let x = 0; x < 10; x++) {
        if (x == y) {
            document.write ("*");
        } else if (x + y == 9) {
            document.write ("*");
        } else if (x == 5) {
            document.write ("*");
        } else if ( y == 5) {
            document.write ("*");
        }
        document.write ("_");
    }
    document.write ("<br>");
}