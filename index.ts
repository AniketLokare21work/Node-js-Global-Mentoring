function getRandomNumber(): number {
    const randomInteger = Math.floor(Math.random() * 1000) + 1;
    console.log("Generated random number:", randomInteger);
    return randomInteger;
}

getRandomNumber();