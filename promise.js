const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
let xxi = await promiseTheaterIXX();
let cgv = await promiseTheaterVGC();
let bioskop = xxi.concat(cgv);
let hasilEmosi = 0;

bioskop.map(xxi => xxi.hasil === emosi && (hasilEmosi += 1));

return hasilEmosi;
};

module.exports = {
  promiseOutput,
};
