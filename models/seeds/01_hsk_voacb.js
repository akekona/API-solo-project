exports.seed = function(knex) {
  return knex("hsk_vocab")
    .del()
    .then(function() {
      return knex("hsk_vocab").insert([
        {
          level: 1,
          hanzi: "昨天",
          pinyin: "zuó tiān",
          translations: "yesterday"
        },
        {
          level: 2,
          hanzi: "游泳",
          pinyin: "yóu yǒng",
          translations: "swimming, to swim"
        },
        {
          level: 3,
          hanzi: "为了",
          pinyin: "wèi le",
          translations: "in order to, for the purpose of, so as to"
        },
        {
          level: 4,
          hanzi: "爱情",
          pinyin: "ài qíng",
          translations: "romance, love (romantic), CL:個|个[gè]"
        },
        {
          level: 4,
          hanzi: "安排",
          pinyin: "ān pái",
          translations: "to arrange, to plan, to set up"
        },
        {
          level: 4,
          hanzi: "安全",
          pinyin: "ān quán",
          translations: "safe, secure, safety, security"
        },
        {
          level: 4,
          hanzi: "暗",
          pinyin: "àn",
          translations: "to close (a door), to eclipse, muddled, ignorant"
        },
        {
          level: 4,
          hanzi: "按时",
          pinyin: "àn shí",
          translations: "on time, before deadline, on schedule"
        },
        {
          level: 5,
          hanzi: "唉",
          pinyin: "āi",
          translations:
            "interjection or grunt of agreement or recognition (e.g. yes, it's me!), to sigh"
        },
        {
          level: 5,
          hanzi: "爱护",
          pinyin: "ài hù",
          translations:
            "to cherish, to treasure, to take care of, to love and protect"
        },
        {
          level: 5,
          hanzi: "爱惜",
          pinyin: "ài xī",
          translations: "to cherish, to treasure, to use sparingly"
        },
        {
          level: 5,
          hanzi: "爱心",
          pinyin: "ài xīn",
          translations: "compassion, CL:片[piàn]"
        },
        {
          level: 5,
          hanzi: "安慰",
          pinyin: "ān wèi",
          translations: "to comfort, to console, CL:個|个[gè]"
        },
        {
          level: 5,
          hanzi: "安装",
          pinyin: "ān zhuāng",
          translations: "to install, to erect, to fix, to mount, installation"
        },
        {
          level: 5,
          hanzi: "岸",
          pinyin: "àn",
          translations: "bank, shore, beach, coast, CL:個|个[gè]"
        },
        {
          level: 5,
          hanzi: "把握",
          pinyin: "bǎ wò",
          translations:
            "to grasp (also fig.), to seize, to hold, assurance, certainty, sure (of the outcome)"
        },
        {
          level: 5,
          hanzi: "摆",
          pinyin: "bǎi",
          translations: "to arrange, to exhibit, to move to and fro, a pendulum"
        },
        {
          level: 5,
          hanzi: "班主任",
          pinyin: "bān zhǔ rèn",
          translations: "teacher in charge of a class"
        },
        {
          level: 5,
          hanzi: "办理",
          pinyin: "bàn lǐ",
          translations: "to handle, to transact, to conduct"
        },
        {
          level: 5,
          hanzi: "棒",
          pinyin: "bàng",
          translations:
            "a stick, club or cudgel, smart, capable, strong, wonderful, classifier for legs of a relay race"
        },
        {
          level: 5,
          hanzi: "傍晚",
          pinyin: "bàng wǎn",
          translations:
            "in the evening, when night falls, towards evening, at night fall, at dusk"
        },
        {
          level: 5,
          hanzi: "包裹",
          pinyin: "bāo guǒ",
          translations:
            "wrap up, bind up, bundle, parcel, package, CL:個|个[gè]"
        },
        {
          level: 5,
          hanzi: "包含",
          pinyin: "bāo hán",
          translations: "to contain, to embody, to include"
        },
        {
          level: 5,
          hanzi: "包子",
          pinyin: "bāo zi",
          translations: "steamed stuffed bun, CL:個|个[gè]"
        },
        {
          level: 5,
          hanzi: "薄",
          pinyin: "báo",
          translations:
            "thin, cold in manner, indifferent, weak, light, infertile"
        },
        {
          level: 6,
          hanzi: "否决",
          pinyin: "fǒu jué",
          translations: "veto"
        }
      ]);
    });
};
