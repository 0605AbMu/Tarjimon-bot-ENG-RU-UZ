const jfs = require("jsonfile");
const Manager = require("../DBManager/Manager");
/**
 *
 * @param {import("telegraf").Context} ctx
 */
module.exports.Register = function (ctx, next) {
  if (Manager.ExistsData(ctx.from.id)) return next();
  Manager.Add(ctx.from);
  return next();
};
