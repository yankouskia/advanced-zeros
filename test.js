const assert = require('assert');
Object.freeze(assert);
const getZerosCount = require('./src/index');

describe('Zeros', () => {
  it('0', () => {
    const zerosCount = getZerosCount(10, 10);
    assert.equal(zerosCount, 2);
  });

  it('2', () => {
    const zerosCount = getZerosCount(46899647, 232);
    assert.equal(zerosCount, 1674985);
  });

  it('3', () => {
    const zerosCount = getZerosCount(82557730, 84);
    assert.equal(zerosCount, 13759618);
  });

  it('4', () => {
    const zerosCount = getZerosCount(14423541, 193);
    assert.equal(zerosCount, 75122);
  });

  it('5', () => {
    const zerosCount = getZerosCount(71398757, 12);
    assert.equal(zerosCount, 35699370);
  });

  it('6', () => {
    const zerosCount = getZerosCount(98707942, 218);
    assert.equal(zerosCount, 913961);
  });

  it('7', () => {
    const zerosCount = getZerosCount(93443454, 194);
    assert.equal(zerosCount, 973368);
  });

  it('8', () => {
    const zerosCount = getZerosCount(47815664, 104);
    assert.equal(zerosCount, 3984635);
  });

  it('9', () => {
    const zerosCount = getZerosCount(60559525, 147);
    assert.equal(zerosCount, 5046624);
  });

  it('10', () => {
    const zerosCount = getZerosCount(92357634, 187);
    assert.equal(zerosCount, 5772349);
  });

  it('11', () => {
    const zerosCount = getZerosCount(69738640, 236);
    assert.equal(zerosCount, 1202388);
  });

  it('12', () => {
    const zerosCount = getZerosCount(70497638, 2);
    assert.equal(zerosCount, 70497624);
  });

  it('13', () => {
    const zerosCount = getZerosCount(61518152, 62);
    assert.equal(zerosCount, 2050602);
  });

  it('14', () => {
    const zerosCount = getZerosCount(55481864, 224);
    assert.equal(zerosCount, 9246972);
  });

  it('15', () => {
    const zerosCount = getZerosCount(88341643, 66);
    assert.equal(zerosCount, 8834160);
  });

  it('16', () => {
    const zerosCount = getZerosCount(50170843, 68);
    assert.equal(zerosCount, 3135675);
  });

  it('17', () => {
    const zerosCount = getZerosCount(35770468, 229);
    assert.equal(zerosCount, 156886);
  });

  it('18', () => {
    const zerosCount = getZerosCount(82610032, 144);
    assert.equal(zerosCount, 20652503);
  });

  it('19', () => {
    const zerosCount = getZerosCount(98395296, 141);
    assert.equal(zerosCount, 2139025);
  });

  it('20', () => {
    const zerosCount = getZerosCount(6028766, 134);
    assert.equal(zerosCount, 91344);
  });

  it('21', () => {
    const zerosCount = getZerosCount(73266479, 131);
    assert.equal(zerosCount, 563587);
  });

  it('22', () => {
    const zerosCount = getZerosCount(33234339, 108);
    assert.equal(zerosCount, 5539053);
  });

  it('23', () => {
    const zerosCount = getZerosCount(5999176, 98);
    assert.equal(zerosCount, 499929);
  });

  it('24', () => {
    const zerosCount = getZerosCount(30429589, 5);
    assert.equal(zerosCount, 7607391);
  });

  it('25', () => {
    const zerosCount = getZerosCount(19346791, 149);
    assert.equal(zerosCount, 130720);
  });

  it('26', () => {
    const zerosCount = getZerosCount(54022488, 169);
    assert.equal(zerosCount, 2250935);
  });

  it('27', () => {
    const zerosCount = getZerosCount(30777373, 65);
    assert.equal(zerosCount, 2564777);
  });

  it('28', () => {
    const zerosCount = getZerosCount(58622203, 17);
    assert.equal(zerosCount, 3663884);
  });

  it('29', () => {
    const zerosCount = getZerosCount(82388694, 47);
    assert.equal(zerosCount, 1791055);
  });

  it('30', () => {
    const zerosCount = getZerosCount(21061368, 205);
    assert.equal(zerosCount, 526532);
  });

  it('31', () => {
    const zerosCount = getZerosCount(72239436, 122);
    assert.equal(zerosCount, 1203989);
  });

  it('32', () => {
    const zerosCount = getZerosCount(19848293, 192);
    assert.equal(zerosCount, 3308046);
  });

  it('33', () => {
    const zerosCount = getZerosCount(81750539, 97);
    assert.equal(zerosCount, 851566);
  });

  it('34', () => {
    const zerosCount = getZerosCount(80644842, 67);
    assert.equal(zerosCount, 1221890);
  });

  it('35', () => {
    const zerosCount = getZerosCount(70374587, 62);
    assert.equal(zerosCount, 2345817);
  });

  it('36', () => {
    const zerosCount = getZerosCount(5923896, 178);
    assert.equal(zerosCount, 67315);
  });

  it('37', () => {
    const zerosCount = getZerosCount(58123063, 54);
    assert.equal(zerosCount, 9687174);
  });

  it('38', () => {
    const zerosCount = getZerosCount(83228757, 83);
    assert.equal(zerosCount, 1014983);
  });

  it('39', () => {
    const zerosCount = getZerosCount(35704039, 185);
    assert.equal(zerosCount, 991777);
  });

  it('40', () => {
    const zerosCount = getZerosCount(21326949, 117);
    assert.equal(zerosCount, 1777242);
  });

  it('41', () => {
    const zerosCount = getZerosCount(15553283, 247);
    assert.equal(zerosCount, 864068);
  });

  it('42', () => {
    const zerosCount = getZerosCount(32707673, 158);
    assert.equal(zerosCount, 419327);
  });

  it('43', () => {
    const zerosCount = getZerosCount(164241, 196);
    assert.equal(zerosCount, 13685);
  });

  it('44', () => {
    const zerosCount = getZerosCount(99363711, 169);
    assert.equal(zerosCount, 4140152);
  });

  it('45', () => {
    const zerosCount = getZerosCount(7003432, 119);
    assert.equal(zerosCount, 437711);
  });

  it('46', () => {
    const zerosCount = getZerosCount(85202033, 248);
    assert.equal(zerosCount, 2840064);
  });

  it('47', () => {
    const zerosCount = getZerosCount(80151132, 124);
    assert.equal(zerosCount, 2671701);
  });

  it('48', () => {
    const zerosCount = getZerosCount(13871008, 97);
    assert.equal(zerosCount, 144489);
  });

  it('49', () => {
    const zerosCount = getZerosCount(40806909, 117);
    assert.equal(zerosCount, 3400572);
  });

  it('50', () => {
    const zerosCount = getZerosCount(2635454, 7);
    assert.equal(zerosCount, 439238);
  });

  it('51', () => {
    const zerosCount = getZerosCount(60026734, 22);
    assert.equal(zerosCount, 6002668);
  });

  it('52', () => {
    const zerosCount = getZerosCount(761288, 152);
    assert.equal(zerosCount, 42290);
  });

  it('53', () => {
    const zerosCount = getZerosCount(22642393, 131);
    assert.equal(zerosCount, 174171);
  });

  it('54', () => {
    const zerosCount = getZerosCount(42674479, 176);
    assert.equal(zerosCount, 4267444);
  });

  it('55', () => {
    const zerosCount = getZerosCount(97581263, 102);
    assert.equal(zerosCount, 6098826);
  });

  it('56', () => {
    const zerosCount = getZerosCount(93168085, 3);
    assert.equal(zerosCount, 46584033);
  });

  it('57', () => {
    const zerosCount = getZerosCount(84539571, 108);
    assert.equal(zerosCount, 14089926);
  });

  it('58', () => {
    const zerosCount = getZerosCount(58186721, 4);
    assert.equal(zerosCount, 29093351);
  });

  it('59', () => {
    const zerosCount = getZerosCount(60324761, 235);
    assert.equal(zerosCount, 1311406);
  });

  it('60', () => {
    const zerosCount = getZerosCount(90235228, 9);
    assert.equal(zerosCount, 22558803);
  });

  it('61', () => {
    const zerosCount = getZerosCount(36234638, 87);
    assert.equal(zerosCount, 1294092);
  });

  it('62', () => {
    const zerosCount = getZerosCount(60206938, 9);
    assert.equal(zerosCount, 15051730);
  });

  it('63', () => {
    const zerosCount = getZerosCount(59114917, 57);
    assert.equal(zerosCount, 3284159);
  });

  it('64', () => {
    const zerosCount = getZerosCount(52907139, 38);
    assert.equal(zerosCount, 2939283);
  });

  it('65', () => {
    const zerosCount = getZerosCount(5415468, 36);
    assert.equal(zerosCount, 1353863);
  });

  it('66', () => {
    const zerosCount = getZerosCount(97514818, 153);
    assert.equal(zerosCount, 6094673);
  });

  it('67', () => {
    const zerosCount = getZerosCount(16542763, 41);
    assert.equal(zerosCount, 413568);
  });

  it('68', () => {
    const zerosCount = getZerosCount(25172516, 226);
    assert.equal(zerosCount, 224753);
  });

  it('69', () => {
    const zerosCount = getZerosCount(67775847, 47);
    assert.equal(zerosCount, 1473385);
  });

  it('70', () => {
    const zerosCount = getZerosCount(15939233, 209);
    assert.equal(zerosCount, 885511);
  });

  it('71', () => {
    const zerosCount = getZerosCount(52309155, 126);
    assert.equal(zerosCount, 8718188);
  });

  it('72', () => {
    const zerosCount = getZerosCount(11587153, 54);
    assert.equal(zerosCount, 1931189);
  });

  it('73', () => {
    const zerosCount = getZerosCount(89157149, 220);
    assert.equal(zerosCount, 8915711);
  });

  it('74', () => {
    const zerosCount = getZerosCount(72467246, 154);
    assert.equal(zerosCount, 7246719);
  });

  it('75', () => {
    const zerosCount = getZerosCount(77344251, 211);
    assert.equal(zerosCount, 368305);
  });

  it('76', () => {
    const zerosCount = getZerosCount(45963185, 158);
    assert.equal(zerosCount, 589270);
  });

  it('77', () => {
    const zerosCount = getZerosCount(64965410, 111);
    assert.equal(zerosCount, 1804591);
  });

  it('78', () => {
    const zerosCount = getZerosCount(96553945, 81);
    assert.equal(zerosCount, 12069241);
  });

  it('79', () => {
    const zerosCount = getZerosCount(73857241, 136);
    assert.equal(zerosCount, 4616076);
  });

  it('80', () => {
    const zerosCount = getZerosCount(33499700, 67);
    assert.equal(zerosCount, 507569);
  });

  it('81', () => {
    const zerosCount = getZerosCount(13419345, 184);
    assert.equal(zerosCount, 609967);
  });

  it('82', () => {
    const zerosCount = getZerosCount(8976215, 31);
    assert.equal(zerosCount, 299205);
  });

  it('83', () => {
    const zerosCount = getZerosCount(26649024, 239);
    assert.equal(zerosCount, 111969);
  });

  it('84', () => {
    const zerosCount = getZerosCount(16, 16);
    assert.equal(zerosCount, 3);
  });

  it('85', () => {
    const zerosCount = getZerosCount(38037186, 183);
    assert.equal(zerosCount, 633951);
  });

  it('86', () => {
    const zerosCount = getZerosCount(55583599, 94);
    assert.equal(zerosCount, 1208337);
  });

  it('87', () => {
    const zerosCount = getZerosCount(84720754, 209);
    assert.equal(zerosCount, 4706706);
  });

  it('88', () => {
    const zerosCount = getZerosCount(75904476, 130);
    assert.equal(zerosCount, 6325369);
  });

  it('89', () => {
    const zerosCount = getZerosCount(79453957, 181);
    assert.equal(zerosCount, 441410);
  });

  it('90', () => {
    const zerosCount = getZerosCount(13761892, 64);
    assert.equal(zerosCount, 2293646);
  });

  it('91', () => {
    const zerosCount = getZerosCount(14843714, 178);
    assert.equal(zerosCount, 168677);
  });

  it('92', () => {
    const zerosCount = getZerosCount(98852437, 10);
    assert.equal(zerosCount, 24713104);
  });

  it('93', () => {
    const zerosCount = getZerosCount(85295508, 49);
    assert.equal(zerosCount, 7107955);
  });

  it('94', () => {
    const zerosCount = getZerosCount(84179085, 193);
    assert.equal(zerosCount, 438431);
  });

  it('95', () => {
    const zerosCount = getZerosCount(82410884, 29);
    assert.equal(zerosCount, 2943244);
  });

  it('96', () => {
    const zerosCount = getZerosCount(4091247, 239);
    assert.equal(zerosCount, 17189);
  });

  it('97', () => {
    const zerosCount = getZerosCount(31516711, 129);
    assert.equal(zerosCount, 750396);
  });

  it('98', () => {
    const zerosCount = getZerosCount(18835759, 190);
    assert.equal(zerosCount, 1046428);
  });

  it('99', () => {
    const zerosCount = getZerosCount(72300914, 160);
    assert.equal(zerosCount, 14460180);
  });

  it('100', () => {
    const zerosCount = getZerosCount(4821527, 250);
    assert.equal(zerosCount, 401792);
  });
});
