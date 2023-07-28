function generateMultiplicationTable(number) {
    console.log(`Generate Multiplication Table for: ${number}\n`);
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${i} x ${number} = ${result}`);
    }
}

generateMultiplicationTable(5);
