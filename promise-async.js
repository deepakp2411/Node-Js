const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    await writeFile(
      "./content/result-mind.txt",
      `This is awesome bro: ${first} `,
      {flag:'a'}
    );
    
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
