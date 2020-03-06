const buf = Buffer.from("hello world", "ascii");
console.log(buf.toString('hex'));

console.log(buf.toString("base64"));

console.log(Buffer.from("dssfsas"), "ascii");

console.log(Buffer.from('fhqwhgads', 'utf16le'));

const str = '\u00bd + \u00bc = \u00be';
console.log(`${str}: ${str.length} characters, ` +
        `${Buffer.byteLength(str, 'utf8')} bytes`);

