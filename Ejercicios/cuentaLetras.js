let string = process.argv[2];
let letra = process.argv[3];
let result = 0;

for (let i = 0; i <= string.length; i++) {
    if (string[i] == letra) {
        result++;
    }
}

console.log(`La letra '${letra}' aparece ${result} veces en la palabra/frase '${string}'`);