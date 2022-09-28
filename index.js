const { Telegraf } = require("telegraf");
const axios = require("axios").default;
const { Register } = require("./MIddleware/middleware");
const bot = new Telegraf("2046559445:AAEsoNVsoxvpSW50LrSRCbXTRMH2UI7Vv0E");
// Foydalanuvchilarni ro'yxatga olib qo'yadi
bot.use(Register);

bot.start((msg) => {
  msg
    .replyWithHTML(
      "<b>Assalomu alaykum. Tarjimon botga Xush kelibsiz!!!</b>.\nKerakli menyuning tanlang va foydalaning.\n__________________\nMaximum kiritilishi kerak bo`lgan belgilar soni <u>500 ta</u>.\n\n@Abdumannon_Shamsiyev"
    )
    .catch((e) => {});
});

let method = "auto";
try {
  bot.on("text", (msg) => {
    switch (msg.message.text) {
      case "/auto":
        method = "auto";
        msg
          .reply("Avtomatik tarjima qilish rejimiga o`tildi.")
          .catch((e) => {});
        return;
        break;
      case "/uzru":
        method = "uzru";
        msg
          .reply("O`zbek tilidan Rus tiliga tarjima qilish rejimiga o`tildi.")
          .catch((e) => {});
        return;
        break;
      case "/uzen":
        method = "uzen";
        msg
          .reply(
            "O`zbek tilidan Ingliz tiliga tarjima qilish rejimiga o`tildi."
          )
          .catch((e) => {});
        return;
        break;
      case "/ruuz":
        method = "ruuz";
        msg
          .reply("Rus tilidan O`zbek tiliga tarjima qilish rejimiga o`tildi.")
          .catch((e) => {});
        return;
        break;
      case "/enuz":
        method = "enuz";
        msg
          .reply(
            "Ingliz tilidan O`zbek tiliga tarjima qilish rejimiga o`tildi."
          )
          .catch((e) => {});
        return;
        break;
      case "/enru":
        method = "enru";
        msg
          .reply("Ingliz tilidan Rus tiliga tarjima qilish rejimiga o`tildi.")
          .catch((e) => {});
        return;
        break;
      case "/ruen":
        method = "ruen";
        msg
          .reply("Rus tilidan Ingliz tiliga tarjima qilish rejimiga o`tildi.")
          .catch((e) => {});
        return;
        break;

      default:
        break;
    }

    if (msg.message.text.length <= 500) {
      switch (method) {
        case "uzru":
          axios({
            method: "GET",
            url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
            params: {
              langpair: "uz|ru",
              q: msg.message.text,
              mt: "1",
              onlyprivate: "0",
              de: "a@b.c",
            },
            headers: {
              "x-rapidapi-host":
                "translated-mymemory---translation-memory.p.rapidapi.com",
              "x-rapidapi-key":
                "2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745",
            },
          })
            .then((res) => {
              msg
                .replyWithHTML(`<b>${res.data.responseData.translatedText}</b>`)
                .catch((e) => {});
            })
            .catch((err) => {
              msg
                .replyWithHTML(
                  "ERROR: 404\n\nBot yana qayta o`z ish faoliyatini davom ettirishi uchun qo`llab quvvatlang!\n💳<code>9860160131029128</code>"
                )
                .catch(e > {});
            });

          return;
          break;

        case "uzen":
          axios({
            method: "GET",
            url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
            params: {
              langpair: "uz|en",
              q: msg.message.text,
              mt: "1",
              onlyprivate: "0",
              de: "a@b.c",
            },
            headers: {
              "x-rapidapi-host":
                "translated-mymemory---translation-memory.p.rapidapi.com",
              "x-rapidapi-key":
                "2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745",
            },
          })
            .then((res) => {
              msg
                .replyWithHTML(`<b>${res.data.responseData.translatedText}</b>`)
                .catch((e) => {});
            })
            .catch((err) => {
              msg
                .replyWithHTML(
                  "ERROR: 404\n\nBot yana qayta o`z ish faoliyatini davom ettirishi uchun qo`llab quvvatlang!\n💳<code>9860160131029128</code>"
                )
                .catch((e) => {});
            });

          return;
          break;
        case "ruuz":
          axios({
            method: "GET",
            url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
            params: {
              langpair: "ru|uz",
              q: msg.message.text,
              mt: "1",
              onlyprivate: "0",
              de: "a@b.c",
            },
            headers: {
              "x-rapidapi-host":
                "translated-mymemory---translation-memory.p.rapidapi.com",
              "x-rapidapi-key":
                "2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745",
            },
          })
            .then((res) => {
              msg.replyWithHTML(
                `<b>${res.data.responseData.translatedText}</b>`
              );
            })
            .catch((err) => {
              msg
                .replyWithHTML(
                  "ERROR: 404\n\nBot yana qayta o`z ish faoliyatini davom ettirishi uchun qo`llab quvvatlang!\n💳<code>9860160131029128</code>"
                )
                .catch((e) => {});
            });

          return;
          break;
        case "enuz":
          axios({
            method: "GET",
            url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
            params: {
              langpair: "en|uz",
              q: msg.message.text,
              mt: "1",
              onlyprivate: "0",
              de: "a@b.c",
            },
            headers: {
              "x-rapidapi-host":
                "translated-mymemory---translation-memory.p.rapidapi.com",
              "x-rapidapi-key":
                "2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745",
            },
          })
            .then((res) => {
              msg
                .replyWithHTML(`<b>${res.data.responseData.translatedText}</b>`)
                .catch((e) => {});
            })
            .catch((err) => {
              msg
                .replyWithHTML(
                  "ERROR: 404\n\nBot yana qayta o`z ish faoliyatini davom ettirishi uchun qo`llab quvvatlang!\n💳<code>9860160131029128</code>"
                )
                .catch((e) => {});
            });

          return;
          break;

        case "enru":
          axios({
            method: "GET",
            url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
            params: {
              langpair: "en|ru",
              q: msg.message.text,
              mt: "1",
              onlyprivate: "0",
              de: "a@b.c",
            },
            headers: {
              "x-rapidapi-host":
                "translated-mymemory---translation-memory.p.rapidapi.com",
              "x-rapidapi-key":
                "2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745",
            },
          })
            .then((res) => {
              msg
                .replyWithHTML(`<b>${res.data.responseData.translatedText}</b>`)
                .catch((e) => {});
            })
            .catch((err) => {
              msg
                .replyWithHTML(
                  "ERROR: 404\n\nBot yana qayta o`z ish faoliyatini davom ettirishi uchun qo`llab quvvatlang!\n💳<code>9860160131029128</code>"
                )
                .catch((e) => {});
            });

          return;
          break;

        case "ruen":
          axios({
            method: "GET",
            url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
            params: {
              langpair: "ru|en",
              q: msg.message.text,
              mt: "1",
              onlyprivate: "0",
              de: "a@b.c",
            },
            headers: {
              "x-rapidapi-host":
                "translated-mymemory---translation-memory.p.rapidapi.com",
              "x-rapidapi-key":
                "2b8b6c43acmsh60c9c387522ddecp1af488jsn58a7f7c73745",
            },
          })
            .then((res) => {
              msg
                .replyWithHTML(`<b>${res.data.responseData.translatedText}</b>`)
                .catch((e) => {});
            })
            .catch((err) => {
              msg
                .replyWithHTML(
                  "ERROR: 404\n\nBot yana qayta o`z ish faoliyatini davom ettirishi uchun qo`llab quvvatlang!\n💳<code>9860160131029128</code>"
                )
                .catch((e) => {});
            });

          return;
          break;

        default:
          break;
      }
    } else {
      msg
        .replyWithHTML(
          "<i>Kiritilgan matn uzunligi 500 belgidan oshib ketdi!</i>"
        )
        .catch((e) => {});
    }
  });
} catch (error) {}

bot.use((err, msg) => {});

bot.catch(Logger);
/**
 *
 * @param {Error} error
 * @param {import("telegraf").Context} ctx
 */
function Logger(error, ctx) {
  console.error(
    `Error -> Name: ${error.name} | Message: ${error.message} | Id: ${
      ctx.message.chat.id | ctx.message.from.id
    } | FirstName: ${ctx.message.from.first_name}`
  );
}

bot
  .launch({ polling: true })
  .catch((e) => {
    // console.error("Error", e);
    bot.launch({ polling: true });
  })
  .then((res) => console.log("Bot ishga tushdi"));
