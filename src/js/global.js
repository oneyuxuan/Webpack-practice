// 全局变量

var index = require('./index');

var can1 = document.getElementById('canvas1');
var ctx1 = can1.getContext('2d');   //上面的canvas
var can2 = document.getElementById('canvas2');
var ctx2 = can2.getContext('2d');   //下面的canvas

var global = {
  imgUrl: './images/',
  can1: can1,
  ctx1: ctx1,
  can2: can2,
  ctx2: ctx2,
  canWid: can1.width,
  canHei: can1.height,
  mx: can1.width * 0.5,
  my: can1.height * 0.5,
  aneOb: {},
  fruitOb: {},
  momOb: {},
  babyOb: {},
  scoreOb: {},
  waveOb: {},
  haloOb: {},
  dustOb: {},
  diffframetime: 0,
}

module.exports = {
  imgUrl: global.imgUrl,
  can1: global.can1,
  ctx1: global.ctx1,
  can2: global.can2,
  ctx2: global.ctx2,
  canWid: global.canWid,
  canHei: global.canHei,
  mx: global.mx,
  my: global.my,
  aneOb: global.aneOb,
  fruitOb: global.fruitOb,
  momOb: global.momOb,
  babyOb: global.babyOb,
  scoreOb: global.scoreOb,
  waveOb: global.waveOb,
  haloOb: global.haloOb,
  dustOb: global.dustOb,
  diffframetime: global.diffframetime,
}
