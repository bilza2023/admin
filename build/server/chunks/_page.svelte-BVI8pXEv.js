import { c as create_ssr_component, v as validate_component, e as each, b as escape, d as add_attribute } from './ssr-BVZaZd41.js';
import './katex-DO6cVBGF.js';

const presentation = {
  "_id": {
    "$oid": "6779fd8c808e55c288cb54d8"
  },
  "tcode": "fbise9math",
  "chapter": 1,
  "exercise": "1.1",
  "filename": "fbise9math2024_ch_1_ex_1.1_q_1_pt_2",
  "questionNo": 1,
  "part": 2,
  "name": "",
  "questionType": "paid",
  "status": "empty",
  "slides": [
    {
      "uuid": "31ce5b05-a8a3-43c3-b473-cddab5b978f6",
      "startTime": 0,
      "endTime": 10,
      "type": "canvas",
      "version": "basic",
      "template": "",
      "items": [
        {
          "uuid": "91ad766f-95a5-4f73-87a4-35fb9f7f6dfe",
          "name": "text_196076e4",
          "content": "",
          "showAt": 0,
          "hideAt": null,
          "itemExtra": {
            "uuid": "265125d8-e902-4c73-8f6c-a022f1708f20",
            "type": "text",
            "x": 110,
            "y": 157,
            "text": "Chapter  1 Ex 1.1 Q 1 Part (ii) ",
            "fontSize": 60,
            "fontFamily": "Times New Roman",
            "color": "#d91212",
            "globalAlpha": 1
          },
          "_id": {
            "$oid": "67ac30a534a981cbd55d216f"
          }
        }
      ],
      "slideExtra": {
        "backgroundColor": "#edece9",
        "canvasWidth": 1e3,
        "canvasHeight": 360,
        "cellHeight": 25,
        "cellWidth": 25,
        "bgImg": "black_mat",
        "bgGlobalAlpha": 1,
        "xFactor": 0,
        "yFactor": 0,
        "showGrid": false,
        "gridLineWidth": 1,
        "gridLineColor": "gray",
        "imagesUrl": "https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/"
      },
      "_id": {
        "$oid": "67a3822634a981cbd55d166d"
      }
    },
    {
      "uuid": "6324faa3-f405-421f-8647-e04db369e13c",
      "startTime": 20,
      "endTime": 30,
      "type": "eqs",
      "version": "basic",
      "template": "",
      "items": [
        {
          "uuid": "d747f5b1-8fe4-4369-b816-cd7a1b457770",
          "name": "11cd1e6f",
          "content": "",
          "showAt": 0,
          "hideAt": null,
          "itemExtra": {
            "startTime": 0,
            "endTime": 10,
            "code": "Represent each number on number line?",
            "type": "txt",
            "sp": []
          },
          "_id": {
            "$oid": "677ca6df3cc9ccd50a8d6347"
          }
        },
        {
          "uuid": "e00e1f1f-ff58-4de1-9fcd-643386a3bfc7",
          "name": "b7e6fc52",
          "content": "",
          "showAt": 0,
          "hideAt": null,
          "itemExtra": {
            "startTime": 10,
            "endTime": 10,
            "code": "(ii)-\\frac{1}{3}",
            "type": "code",
            "sp": []
          },
          "_id": {
            "$oid": "677ca6df3cc9ccd50a8d6348"
          }
        },
        {
          "uuid": "4f76b996-60bd-49f1-860f-073d266bd922",
          "name": "18810793",
          "content": "",
          "showAt": 0,
          "hideAt": null,
          "itemExtra": {
            "startTime": 10,
            "endTime": 10,
            "code": "",
            "type": "txt",
            "sp": []
          },
          "_id": {
            "$oid": "677ca6df3cc9ccd50a8d6349"
          }
        }
      ],
      "_id": {
        "$oid": "677ca6df3cc9ccd50a8d6346"
      }
    }
  ],
  "tags": [],
  "sortOrder": 1.2,
  "comments": "",
  "__v": 0
};
function getNewItem(itemExtra = {}, name = "", content = "") {
  if (!name) {
    const uuidValue = uuid();
    const firstSegment = uuidValue.split("-")[0];
    name = firstSegment;
  }
  return {
    uuid: uuid(),
    //added on 31-may 2024 --not used yet 
    name,
    content,
    showAt: 0,
    hideAt: null,
    //added on 31-may 2024 --not used yet
    itemExtra
  };
}
function uuid() {
  const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = randomHex();
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
const TopToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { add } = $$props;
  let { setFakeTimings } = $$props;
  if ($$props.add === void 0 && $$bindings.add && add !== void 0)
    $$bindings.add(add);
  if ($$props.setFakeTimings === void 0 && $$bindings.setFakeTimings && setFakeTimings !== void 0)
    $$bindings.setFakeTimings(setFakeTimings);
  return `<button class="bg-orange-700 px-2 rounded-md" data-svelte-h="svelte-1rqmeix">Add</button> <button class="bg-orange-700 px-2 rounded-md" data-svelte-h="svelte-1p8orct">Fake Timings</button>`;
});
const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayMode = false } = $$props;
  let output;
  let latex;
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0)
    $$bindings.displayMode(displayMode);
  return ` <span style="display: none;"${add_attribute("this", latex, 0)}>${slots.default ? slots.default({}) : ``}</span>  <span${add_attribute("this", output, 0)}></span>`;
});
const AddTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { currentTime } = $$props;
  let { isFirst } = $$props;
  let { updateTimings } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0)
    $$bindings.currentTime(currentTime);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.updateTimings === void 0 && $$bindings.updateTimings && updateTimings !== void 0)
    $$bindings.updateTimings(updateTimings);
  return `<div class="flex flex-col w-full bg-stone-700 p-0 m-0 rounded-md"> <input type="number" class="text-xs bg-gray-800 text-white" ${isFirst ? "disabled" : ""}${add_attribute("value", item.itemExtra.startTime, 0)}> <div class="text-[14px]">Start:${escape(item.itemExtra.startTime)}</div> <div class="text-[14px]">End:${escape(item.itemExtra.endTime)}</div> <button class="bg-orange-800 text-xs p-0 m-1 rounded-md" data-svelte-h="svelte-7yggh">Set Time</button></div>`;
});
const EqTypeCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md">${escape(item.itemExtra.code || "")}</textarea> <div class="bg-stone-700 w-5/12 p-0 m-0 rounded-md">${validate_component(Katex, "Katex").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(item.itemExtra.code)}`;
    }
  })}</div>`;
});
const EqTypeText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md">${escape(item.itemExtra.code || "")}</textarea> <div class="bg-stone-600 w-5/12 p-0 m-0 rounded-md">${escape(item.itemExtra.code)}</div>`;
});
const EqTypeHdg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md">${escape(item.itemExtra.code || "")}</textarea> <div class="w-5/12 justify-center text-center"><h1 class="bg-blue-800 p-1 m-1 rounded-md">${escape(item.itemExtra.code)}</h1></div>`;
});
const EqPart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<div class="flex justify-centre w-full p-0 m-1 gap-1 rounded-md ">${item.itemExtra.type == void 0 || item.itemExtra.type == "code" || item.itemExtra.type == "" ? `${validate_component(EqTypeCode, "EqTypeCode").$$render($$result, { item }, {}, {})}` : ``} ${item.itemExtra.type == "text" || item.itemExtra.type == "txt" ? `${validate_component(EqTypeText, "EqTypeText").$$render($$result, { item }, {}, {})}` : ``} ${item.itemExtra.type == "heading" || item.itemExtra.type == "hdg" ? `${validate_component(EqTypeHdg, "EqTypeHdg").$$render($$result, { item }, {}, {})}` : ``}</div>`;
});
class Icons {
  static ADD = " ➕";
  static ANGLE = " ∠";
  static BALANCE = "⚖️";
  static BAZIER = "🔷";
  static BARCHART = "📊";
  static BOOK = "📘";
  static BOOKS = "📚";
  static BUS = "🚌";
  static BULB = "💡";
  static CAR = "🚗";
  static CANVAS = "🖼️";
  static CHARTUP = "📈";
  static CHARTDOWN = "📉";
  static CIRCLE = "⭕";
  static CLOCK = "⏱️";
  static COG = "⚙";
  static COMPUTER = "💻";
  static COPY = "📋";
  static CODE = "📟";
  static COLD = "🥶";
  static CROSS = "❌";
  static CLIP = "📎";
  static CLONE = "🁜";
  static DARK = "🌃";
  static DEL = "🗑️";
  static DOOR = "🚪";
  static DOT = "🔘";
  static DOWN = "↓";
  static EMAIL = "📧";
  static EYE = "👁️";
  static EYES = "👀";
  static EXPLOSION = "💥";
  static ELLIPSE = "🥚";
  static FILESBOX = "🗃️";
  static FLOWER = "🌸";
  static FROWNFACE = "☹️";
  static HAMMER_AND_WRENCH = "🛠️";
  static HEART = "❤️";
  static HIDE = "🙈";
  static HOT = "🔥";
  static HOURGLASS = "⌛";
  static HOUSE = "🏠";
  static ICE = "🧊";
  static KEY = "🔑";
  static LOCK = "🔒";
  static LEFT = "←";
  static LINE = "➖";
  static MAGNIFYING_GLASS = "🔍";
  static MANAGER = "💼";
  static MCQ = "🔱";
  static MESSAGE = "📨";
  static MICROSCOPE = "🔬";
  static NET = "🌐";
  static NOTES = "📋";
  static NUMBER = "❶";
  static PALETTE = "🎨";
  static PENCIL = " ✏️";
  static PHONE = "📱";
  static QUESTIONMARK = "❓";
  static RULER = "📏";
  static RIGHT = "→";
  static RECYCLE = "♻️";
  static RECTANGLE = "▭";
  static RUN = "🏃";
  static ROCKET = "🚀";
  static SAVE = "💾";
  static SMILYFACE = "😊";
  static SPEECH = "🗣️";
  static SPEAKER = "📢";
  static NOSPEAKER = "🔇";
  static STAIRS = "🪜";
  static STAR = "⭐";
  static SHEEP = "🐑";
  static START = "▶";
  static STOP = "||";
  static STUDENT = "👨‍🎓";
  static SPRITE = "🕹️";
  static STUDENTCAP = "🎓";
  static SUN = "☀️";
  static SUNRISE = "🌅";
  static SUBTRACT = "➖";
  static TAG = "🏷️";
  static TEAM = "🧑‍🤝‍🧑";
  static TICK = "✔️";
  static TEMPRATURE = "🌡️";
  static TEMPLATE = "📜";
  static TEST = "🧪";
  static TEXT = "📃";
  static TEXT2 = "¶";
  static THUMBSUP = "👍";
  static THUMBSDOWN = "👎";
  static TRIANGE = "🔺";
  static TRIANGULAR_RULER = "📐";
  static TREE = "🌳";
  static TV = "📺";
  static WRENCH = "🔧";
  static UP = "↑";
  static MONEYBAG = "💰";
  static MAGNET = "🧲";
  static MAGICWAND = "🪄";
  static MAP = "🗺️";
  static MEDAL = "🎖️";
  static MEGAPHONE = "📣";
  static MICROPHONE = "🎤";
  static MILK = "🥛";
  static MOON = "🌙";
  static MOUNTAIN = "⛰️";
  static MUSIC = "🎵";
  static NETWORK = "🔗";
  static NEWSPAPER = "📰";
  static NOTEBOOK = "📓";
  static OIL = "🛢️";
  static PANDA = "🐼";
  static PARACHUTE = "🪂";
  static PEACE = "☮️";
  static PENGUIN = "🐧";
  static PET = "🐾";
  static PIGGYBANK = "🐖";
  static PINEAPPLE = "🍍";
  static PIZZA = "🍕";
  static PLANET = "🪐";
  static PRINTER = "🖨️";
  static PUZZLE = "🧩";
  static QUILL = "🖋️";
  static RAINBOW = "🌈";
  static RECORD = "🎙️";
  static ROSE = "🌹";
  static SAILBOAT = "⛵";
  static SATELLITE = "🛰️";
  static SCISSORS = "✂️";
  static SCROLL = "📜";
  static SHIELD = "🛡️";
  static SNOWFLAKE = "❄️";
  static SQUIRREL = "🐿️";
  static SUITCASE = "💼";
  static SUNGLASSES = "🕶️";
  static SURFBOARD = "🏄‍♂️";
  static TADA = "🎉";
  static TEA = "🍵";
  static TELESCOPE = "🔭";
  static TENT = "⛺";
  static TOOLS = "🛠️";
  static TORNADO = "🌪️";
  static TROPHY = "🏆";
  static UMBRELLA = "☂️";
  static UNLOCK = "🔓";
  static VAN = "🚐";
  static VIAL = "🧪";
  static VIKING = "🛡️";
  static WALLET = "👛";
  static WATERMELON = "🍉";
  static WHALE = "🐋";
  static WIFI = "📶";
  static WIND = "💨";
  static WOLF = "🐺";
  static YIN_YANG = "☯️";
  static AIRPLANE = "✈️";
  static ALARM = "⏰";
  static APPLE = "🍎";
  static AVOCADO = "🥑";
  static BALLOON = "🎈";
  static BANANA = "🍌";
  static BATTERY = "🔋";
  static BEACH = "🏖️";
  static BELL = "🔔";
  static BICYCLE = "🚲";
  static BIRD = "🐦";
  static BIRTHDAY_CAKE = "🎂";
  static BOMB = "💣";
  static BOOKMARK = "🔖";
  static BOW_AND_ARROW = "🏹";
  static BRIEFCASE2 = "👜";
  static BROOM = "🧹";
  static CACTUS = "🌵";
  static CALCULATOR = "📟";
  static CAMERA = "📷";
  static CANDY = "🍬";
  static CANDLE = "🕯️";
  static CARD = "💳";
  static CARROT = "🥕";
  static CAT = "🐱";
  static CHAMPAGNE = "🍾";
  static CHECK_MARK = "✅";
  static CHERRY = "🍒";
  static CHEESE = "🧀";
  static CHESS = "♟️";
  static CHICKEN = "🐔";
  static CLOUD = "☁️";
  static CLAPPERBOARD = "🎬";
  static COOKIE = "🍪";
  static CROWN = "👑";
  static CUPCAKE = "🧁";
  static CUTLERY = "🍴";
  static DAGGER = "🗡️";
  static DIAMOND = "💎";
  static DRUM = "🥁";
  static DUMBBELL = "🏋️";
  static ELEPHANT = "🐘";
  static ENVELOPE = "✉️";
  static FIREWORKS = "🎆";
  static FLAG = "🚩";
  static FLAME = "🔥";
  static FOOTBALL = "⚽";
  static FRIES = "🍟";
  static GEAR2 = "⚙️";
  static GIFT = "🎁";
  static GLOBE = "🌍";
  static GUITAR = "🎸";
  static HANDSHAKE = "🤝";
  static HELICOPTER = "🚁";
  static HONEY = "🍯";
  static HURRICANE = "🌀";
  static ICE_CREAM = "🍦";
  static JAM = "🍓";
  static JUICE = "🧃";
  static KITE = "🪁";
  static LAMP = "💡";
  static LEMONADE = "🍋";
  static LIGHTNING = "⚡";
  static LOCKED_BOOK = "🔏";
  static LOUDSPEAKER = "📢";
  static LUNCHBOX = "🍱";
  static MAGNETIC_TAPE = "📼";
  static MAPLE_LEAF = "🍁";
  static MASK = "🎭";
  static MEDICINE = "💊";
  static METEOR = "☄️";
  static MOLECULE = "🧬";
  static MOUSE = "🐭";
  static MUSHROOM = "🍄";
  static NUT_AND_BOLT = "🔩";
  static OCTOPUS = "🐙";
  static ORANGE = "🍊";
  static OWL = "🦉";
  static PAW_PRINT = "🐾";
  static PENCIL2 = "🖊️";
  static PILLOW = "🛏️";
  static PINE_TREE = "🌲";
  static POPCORN = "🍿";
  static RADAR = "📡";
  static ROBOT = "🤖";
  static RUBY = "💍";
  static SANDWICH = "🥪";
  static SATURN = "🪐";
  static SEA_SHELL = "🐚";
  static SHARK = "🦈";
  static SHOPPING_BAG = "🛍️";
  static SKULL = "💀";
  static SNORKEL = "🤿";
  static SPIDER = "🕷️";
  static SQUID = "🦑";
  static STETHOSCOPE = "🩺";
  static SWIMMING_POOL = "🏊";
  static SYRINGE = "💉";
  static TOOLBOX = "🧰";
  static TRAFFIC_LIGHT = "🚦";
  static TRAIN = "🚆";
  static TREE2 = "🌴";
  static TRUCK = "🚚";
  static VAMPIRE = "🧛";
  static WATERMELON_SLICE = "🍉";
  static ABACUS = "🧮";
  static ALIEN = "👽";
  static AMPHORA = "🏺";
  static ANCHOR = "⚓";
  static ANT = "🐜";
  static ASTRONAUT = "👨‍🚀";
  static ATOM = "⚛️";
  static AXE = "🪓";
  static BACKPACK = "🎒";
  static BADMINTON = "🏸";
  static BAGEL = "🥯";
  static BAGUETTE = "🥖";
  static BAMBOO = "🎍";
  static BANJO = "🪕";
  static BASKET = "🧺";
  static BAT = "🦇";
  static BEAVER = "🦫";
  static BENTO = "🍱";
  static BIOHAZARD = "☣️";
  static BLUEBERRY = "🫐";
  static BOAR = "🐗";
  static BOBSLED = "🛷";
  static BONE = "🦴";
  static BONSAI = "🎍";
  static BOOMERANG = "🪃";
  static BRAIN = "🧠";
  static BREAD = "🍞";
  static BRICK = "🧱";
  static BRIDGE = "🌉";
  static BROCCOLI = "🥦";
  static BROOM_AND_BALL = "🧹🏀";
  static BUBBLE_TEA = "🧋";
  static BUCKET = "🪣";
  static BUTTERFLY = "🦋";
  static CACTUS_IN_POT = "🌵🪴";
  static CALENDAR = "📅";
  static CAMEL = "🐪";
  static CANOE = "🛶";
  static CASTLE = "🏰";
  static CHAINSAW = "🪚";
  static CHAIR = "🪑";
  static CHESTNUT = "🌰";
  static CHIPMUNK = "🐿️";
  static CHOCOLATE_BAR = "🍫";
  static CHOPSTICKS = "🥢";
  static CLAMP = "🗜️";
  static CLOVER = "🍀";
  static COCONUT = "🥥";
  static COFFIN = "⚰️";
  static COIN = "🪙";
  static COMET = "☄️";
  static COMPASS = "🧭";
  static CORAL = "🪸";
  static CORN = "🌽";
  static CRAYON = "🖍️";
  static CRICKET = "🦗";
  static CROCODILE = "🐊";
  static CROISSANT = "🥐";
  static CRYSTAL_BALL = "🔮";
  static CUCUMBER = "🥒";
  static CUPID = "💘";
  static CURLING_STONE = "🥌";
  static CYCLONE = "🌀";
  static DANGO = "🍡";
  static DART = "🎯";
  static DEER = "🦌";
  static DESKTOP = "🖥️";
  static DICE = "🎲";
  static DINOSAUR = "🦕";
  static DIVIDER = "〰️";
  static DNA = "🧬";
  static DONUT = "🍩";
  static DOVE = "🕊️";
  static DRAGON = "🐉";
  static DRILL = "🛠️";
  static DROPLET = "💧";
  static DUCK = "🦆";
  static DUMPLING = "🥟";
  static EAR = "👂";
  static EGGPLANT = "🍆";
  static ELF = "🧝";
  static EVERGREEN = "🌲";
  static FAIRY = "🧚";
  static FALLEN_LEAF = "🍂";
  static FEATHER = "🪶";
  static FERRIS_WHEEL = "🎡";
  static FIRE_EXTINGUISHER = "🧯";
  static FIRECRACKER = "🧨";
  static FISHING_POLE = "🎣";
  static FLEUR_DE_LIS = "⚜️";
  static FLYING_DISC = "🥏";
  static FLYING_SAUCER = "🛸";
  static FOG = "🌫️";
  static FONDUE = "🫕";
  static FOOTPRINTS = "👣";
  static FOUNTAIN = "⛲";
  static FOX = "🦊";
  static FROG = "🐸";
  static GARLIC = "🧄";
  static GENIE = "🧞";
  static GERM = "🦠";
  static GHOST = "👻";
  static GIRAFFE = "🦒";
  static GLOVES = "🧤";
  static GOAT = "🐐";
  static GORILLA = "🦍";
  static GRAPES = "🍇";
  static GRASSHOPPER = "🦗";
  static HAMSA = "🧿";
  static HARMONICA = "🎹";
  static HEADSTONE = "🪦";
  static HEDGEHOG = "🦔";
  static HERB = "🌿";
  static HIBISCUS = "🌺";
  static HIPPOPOTAMUS = "🦛";
  static HOOK = "🪝";
  static HOURGLASS_DONE = "⌛";
  static IGLOO = "�iglq";
  static INFINITY = "♾️";
  static JELLYFISH = "🪼";
  static JIGSAW = "🧩";
  static JOYSTICK = "🕹️";
  static KANGAROO = "🦘";
  static KIWI = "🥝";
  static KNOT = "🪢";
  static KOALA = "🐨";
  static LABCOAT = "🥼";
  static LADDER = "🪜";
  static LADYBUG = "🐞";
  static LASSO = "🪃";
  static LEMON = "🍋";
  static LEOPARD = "🐆";
  static LEVITATE = "🕴️";
  static LIGHT_BULB = "💡";
  static LIZARD = "🦎";
  static LLAMA = "🦙";
  static LOBSTER = "🦞";
  static LOLLIPOP = "🍭";
  static LOTUS = "🪷";
  static LUGGAGE = "🧳";
  static LUNGS = "🫁";
  static MAGE = "🧙";
  static MANGO = "🥭";
  static MANTIS = "🦗";
  static MICROBE = "🦠";
  static MIRROR = "🪞";
  static MOAI = "🗿";
  static MOLE = "🐀";
  static MONKEY = "🐒";
  static MOSQUITO = "🦟";
  static MOTOR_SCOOTER = "🛵";
  static MOTORCYCLE = "🏍️";
  static MOUNTAIN_CABLEWAY = "🚠";
  static NAZAR_AMULET = "🧿";
  static NECKTIE = "👔";
  static NESTING_DOLLS = "🪆";
  static NINJA = "🥷";
  static ONION = "🧅";
  static ORANGUTAN = "🦧";
  static OTTER = "🦦";
  static OYSTER = "🦪";
  static PACKAGE = "📦";
  static PAINTBRUSH = "🖌️";
  static PALM_TREE = "🌴";
  static PANCAKES = "🥞";
  static PAPERCLIP = "📎";
  static PARROT = "🦜";
  static PEACH = "🍑";
  static PEACOCK = "🦚";
  static PEANUTS = "🥜";
  static PEARL = "🫠";
  static PEAR = "🍐";
  static PENCIL_AND_PAPER = "📝";
  static PEPPER = "🌶️";
  static PETRI_DISH = "🧫";
  static PICKAXE = "⛏️";
  static PIEZO = "🔊";
  static PIGEON = "🕊️";
  static PILL = "💊";
  static PINATA = "🪅";
  static PINCH = "🤏";
  static PINEAPPLE_SLICE = "🍍";
  static PING_PONG = "🏓";
  static PIRATE = "🏴‍☠️";
  static PLANT_IN_POT = "🪴";
  static PLATYPUS = "🦡";
  static PLUNGER = "🪠";
  static POPCORN_BUCKET = "🍿";
  static POTATO = "🥔";
  static PRETZEL = "🥨";
  static PROTOZOA = "🦠";
  static PUMPKIN = "🎃";
  static PUSHPIN = "📌";
  static RABBIT = "🐰";
  static RACCOON = "🦝";
  static RADIO = "📻";
  static RAIL_CAR = "🚃";
  static RAINBOW_FLAG = "🏳️‍🌈";
  static RAMEN = "🍜";
  static RAT = "🐀";
  static RECEIPT = "🧾";
  static RHINOCEROS = "🦏";
  static RICE = "🍚";
  static RING_BUOY = "🛟";
  static ROCK = "🪨";
  static ROOSTER = "🐓";
  static SAFETY_PIN = "🧷";
  static SAFETY_VEST = "🦺";
  static SALT = "🧂";
  static SANDAL = "👡";
  static SATELLITE_ANTENNA = "📡";
  static SAUROPOD = "🦕";
  static SCALES = "⚖️";
  static SCARF = "🧣";
  static SCORPION = "🦂";
  static SCREWDRIVER = "🪛";
  static SEAL = "🦭";
  static SEEDLING = "🌱";
  static SHAMROCK = "☘️";
  static SHRIMP = "🦐";
  static SKUNK = "🦨";
  static SLED = "🛷";
  static SLOTH = "🦥";
  static SNAIL = "🐌";
  static SNAKE = "🐍";
  static SNOWBOARDER = "🏂";
  static SNOWMAN = "☃️";
  static SOAP = "🧼";
  static SOCCER_BALL = "⚽";
  static SOCKS = "🧦";
  static SOFTBALL = "🥎";
  static SPADE = "♠️";
  static SPAGHETTI = "🍝";
  static SPARKLES = "✨";
  static SPARKLER = "🎇";
  static SPARKLING_HEART = "💖";
  static SPOON = "🥄";
  static SPORTS_MEDAL = "🏅";
  static STACKED_BOOKS = "📚";
  static STAPLER = "🗄️";
  static STOPWATCH = "⏱️";
  static STORM = "🌩️";
  static STRAWBERRY = "🍓";
  static SUNFLOWER = "🌻";
  static SUSHI = "🍣";
  static SWAN = "🦢";
  static SWEAT_DROPLETS = "💦";
  static T_REX = "🦖";
  static TACO = "🌮";
  static TAKEOUT_BOX = "🥡";
  static TAMALE = "🫔";
  static TANGERINE = "🍊";
  static TAXI = "🚕";
  static TEAPOT = "🫖";
  static TEDDY_BEAR = "🧸";
  static TENNIS = "🎾";
  static THERMOMETER = "🌡️";
  static THONG_SANDAL = "🩴";
  static THREAD = "🧵";
  static TICKET = "🎟️";
  static TIGER = "🐯";
  static TOILET = "🚽";
  static TOMATO = "🍅";
  static TONGUE = "👅";
  static TRACTOR = "🚜";
  static TROLLEYBUS = "🚎";
  static TSHIRT = "👕";
  static TULIP = "🌷";
  static TURKEY = "🦃";
  static TURTLE = "🐢";
  static UNICORN = "🦄";
  static VIOLIN = "🎻";
  static VOLLEYBALL = "🏐";
  static WAFFLE = "🧇";
  static WASTEBASKET = "🗑️";
  static WATCH = "⌚";
  static WATER_BUFFALO = "🐃";
  static WATER_POLO = "🤽";
  static WATER_WAVE = "🌊";
  static WATERFALL = "🧗‍♀️";
  static WINDMILL = "🏰";
  static WINDOW = "🪟";
  static WINE_GLASS = "🍷";
  static WOOD = "🪵";
  static WORM = "🪱";
  static WREATH = "🎍";
  static WRITING_HAND = "✍️";
  static X_RAY = "🦴";
  static YARN = "🧶";
  static YO_YO = "🪀";
  static ZEBRA = "🦓";
  static ZOMBIE = "🧟";
  ////////////////////////
}
const LowerToolBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { i } = $$props;
  let { item } = $$props;
  let { addEq } = $$props;
  let { moveUpEq } = $$props;
  let { moveDownEq } = $$props;
  let { setEqType } = $$props;
  let { delEq } = $$props;
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.addEq === void 0 && $$bindings.addEq && addEq !== void 0)
    $$bindings.addEq(addEq);
  if ($$props.moveUpEq === void 0 && $$bindings.moveUpEq && moveUpEq !== void 0)
    $$bindings.moveUpEq(moveUpEq);
  if ($$props.moveDownEq === void 0 && $$bindings.moveDownEq && moveDownEq !== void 0)
    $$bindings.moveDownEq(moveDownEq);
  if ($$props.setEqType === void 0 && $$bindings.setEqType && setEqType !== void 0)
    $$bindings.setEqType(setEqType);
  if ($$props.delEq === void 0 && $$bindings.delEq && delEq !== void 0)
    $$bindings.delEq(delEq);
  return `<div class="flex justify-center bg-stone-500 w-4/12 p-1 m-1 mb-3 gap-1 rounded-md"><button class="bg-green-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-1c32be5">Add</button> <button class="bg-gray-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-w3ycwo">Up</button> <button class="bg-gray-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-1qf0m2q">Down</button>  <div class="flex gap-1 bg-stone-800 text-white text-xs p-1 rounded-sm"><button${add_attribute(
    "class",
    `${item.itemExtra.type == "code" ? "bg-red-800" : "bg-gray-500"} rounded-md`,
    0
  )}>${escape(Icons.ADD)}</button> <button${add_attribute(
    "class",
    `${item.itemExtra.type == "text" ? "bg-red-800" : "bg-gray-500"} rounded-md`,
    0
  )}>${escape(Icons.TEMPLATE)}</button> <button${add_attribute(
    "class",
    `${item.itemExtra.type == "hdg" ? "bg-red-800" : "bg-gray-500"} rounded-md`,
    0
  )}>${escape(Icons.BOOK)}</button></div> <button class="bg-red-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-yomx15">Del</button></div>`;
});
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasItems;
  let { currentTime = 0 } = $$props;
  let { item } = $$props;
  let { updateTimings } = $$props;
  let { i } = $$props;
  let { addEq } = $$props;
  let { delEq } = $$props;
  let { moveUpEq } = $$props;
  let { moveDownEq } = $$props;
  let { setEqType } = $$props;
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0)
    $$bindings.currentTime(currentTime);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.updateTimings === void 0 && $$bindings.updateTimings && updateTimings !== void 0)
    $$bindings.updateTimings(updateTimings);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  if ($$props.addEq === void 0 && $$bindings.addEq && addEq !== void 0)
    $$bindings.addEq(addEq);
  if ($$props.delEq === void 0 && $$bindings.delEq && delEq !== void 0)
    $$bindings.delEq(delEq);
  if ($$props.moveUpEq === void 0 && $$bindings.moveUpEq && moveUpEq !== void 0)
    $$bindings.moveUpEq(moveUpEq);
  if ($$props.moveDownEq === void 0 && $$bindings.moveDownEq && moveDownEq !== void 0)
    $$bindings.moveDownEq(moveDownEq);
  if ($$props.setEqType === void 0 && $$bindings.setEqType && setEqType !== void 0)
    $$bindings.setEqType(setEqType);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hasItems = item?.itemExtra?.sp?.length > 0;
    $$rendered = `<div class="flex w-full justify-center text-lg rounded-md gap-2"><span class="rounded-lg bg-stone-700 text-white text-md p-1">${escape(i + 1)}</span> <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">${validate_component(AddTime, "AddTime").$$render(
      $$result,
      {
        currentTime,
        updateTimings,
        isFirst: i == 0 ? true : false,
        item
      },
      {
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-10/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">${validate_component(EqPart, "EqPart").$$render(
      $$result,
      { item },
      {
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(LowerToolBar, "LowerToolBar").$$render(
      $$result,
      {
        i,
        addEq,
        delEq,
        moveUpEq,
        moveDownEq,
        setEqType,
        item
      },
      {
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400"><button class="${"p-1 rounded-md m-1 " + escape(hasItems ? "bg-orange-900" : "bg-gray-400", true)}">Side Panel</button></div></div> ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const EqsEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { currentTime = 0 } = $$props;
  let { slideStartTime } = $$props;
  let { slideEndTime } = $$props;
  let { slideExtra } = $$props;
  let timingsError = false;
  let timingsErrorMessage = "";
  function setEqType(i, typ) {
    items = items.map((item, index) => index === i ? {
      ...item,
      itemExtra: { ...item.itemExtra, type: typ }
    } : item);
  }
  function moveUpEq(index) {
    if (index > 0) {
      const eqToMove = items[index];
      items = [
        ...items.slice(0, index - 1),
        eqToMove,
        items[index - 1],
        ...items.slice(index + 1)
      ];
    }
  }
  function moveDownEq(index) {
    if (index < items.length - 1) {
      const eqToMove = items[index];
      items = [
        ...items.slice(0, index),
        items[index + 1],
        eqToMove,
        ...items.slice(index + 2)
      ];
    }
  }
  function delEq(index) {
    items = [...items.slice(0, index), ...items.slice(index + 1)];
  }
  function addEq(i = 0) {
    const newItem = getNewItem();
    items = [...items.slice(0, i + 1), newItem, ...items.slice(i + 1)];
  }
  function setFakeTimings() {
    if (items.length === 0)
      return;
    timingsError = false;
    timingsErrorMessage = "";
    const FIXED_DURATION = 5;
    items[0].itemExtra.startTime = slideStartTime;
    for (let i = 0; i < items.length; i++) {
      items[i].itemExtra.startTime = slideStartTime + i * FIXED_DURATION;
      items[i].itemExtra.endTime = slideStartTime + (i + 1) * FIXED_DURATION;
    }
    const lastItemEndTime = items[items.length - 1].itemExtra.endTime;
    if (lastItemEndTime > slideEndTime) {
      timingsError = true;
      timingsErrorMessage = `Items with ${FIXED_DURATION}-second duration exceed slide duration. Please adjust slide duration or item timings.`;
    } else if (lastItemEndTime < slideEndTime) {
      timingsError = true;
      timingsErrorMessage = `Items with ${FIXED_DURATION}-second duration don't reach slide end time. Please adjust slide duration or item timings.`;
    }
    items = [...items];
  }
  function updateTimings() {
    timingsError = false;
    timingsErrorMessage = "";
    if (items.length === 0)
      return false;
    items[0].itemExtra.startTime = slideStartTime;
    for (let i = 1; i < items.length; i++) {
      items[i - 1].itemExtra.endTime = items[i].itemExtra.startTime;
    }
    items[items.length - 1].itemExtra.endTime = slideEndTime;
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemExtra.endTime < items[i].itemExtra.startTime) {
        timingsError = true;
        timingsErrorMessage = `Item ${i + 1} has end time before its start time`;
        break;
      }
      if (items[i].itemExtra.startTime < slideStartTime) {
        timingsError = true;
        timingsErrorMessage = `Item ${i + 1} starts before slide start time`;
        break;
      }
      if (items[i].itemExtra.endTime > slideEndTime) {
        timingsError = true;
        timingsErrorMessage = `Item ${i + 1} ends after slide end time`;
        break;
      }
      if (i < items.length - 1) {
        if (items[i].itemExtra.startTime >= items[i + 1].itemExtra.startTime) {
          timingsError = true;
          timingsErrorMessage = `Item ${i + 1} starts at or after item ${i + 2}'s start time`;
          break;
        }
      }
    }
    items = [...items];
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0)
    $$bindings.currentTime(currentTime);
  if ($$props.slideStartTime === void 0 && $$bindings.slideStartTime && slideStartTime !== void 0)
    $$bindings.slideStartTime(slideStartTime);
  if ($$props.slideEndTime === void 0 && $$bindings.slideEndTime && slideEndTime !== void 0)
    $$bindings.slideEndTime(slideEndTime);
  if ($$props.slideExtra === void 0 && $$bindings.slideExtra && slideExtra !== void 0)
    $$bindings.slideExtra(slideExtra);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<svelt:head data-svelte-h="svelte-12ul5rv"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous"></svelt:head>  <div class="bg-gray-800 w-full text-white min-h-screen p-4 m-0 ">${timingsError ? `<h1 class="w-full text-center bg-orange-400 rounded-md px-2 text-lg">Timings Error ${escape(timingsErrorMessage)}</h1>` : ``} ${validate_component(TopToolbar, "TopToolbar").$$render($$result, { add: addEq, setFakeTimings }, {}, {})}  <div class="flex w-full bg-stone-700 justify-center text-lg rounded-md " data-svelte-h="svelte-6xcj4m"> <div class="w-1/12 text-center">Start Time</div> <div class="w-6/12 text-center">Editor</div> <div class="w-4/12 text-center">Display</div> <div class="w-1/12 text-center">Side Panel</div></div>   <div class="flex flex-col gap-2 my-1 p-1 ">${each(items, (item, i) => {
      return `${validate_component(Row, "Row").$$render(
        $$result,
        {
          updateTimings,
          currentTime,
          i,
          addEq,
          delEq,
          moveUpEq,
          moveDownEq,
          setEqType,
          item
        },
        {
          item: ($$value) => {
            item = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = presentation.slides[1].items;
  return `${validate_component(EqsEditor, "EqsEditor").$$render(
    $$result,
    {
      items,
      slideStartTime: "0;",
      slideEndTime: "50;"
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BVI8pXEv.js.map
