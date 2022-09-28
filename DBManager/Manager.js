const User = require("../Modules/User");
const fs = require("fs");
const jfs = require("jsonfile");

class Manager {
  #db = [];
  #DATA_PATH = "data/user-data.json";
  Manager() {
    if (!fs.existsSync()) {
      this.#CtreateDataFile();
      console.warn("Warning: ", `${this.#DATA_PATH} fayli yartildi`);
    }
    this.#Initialize();
  }

  #Initialize() {
    this.#db = jfs.readFileSync(this.#DATA_PATH);
  }

  #SaveToFile() {
    jfs.writeFileSync(this.#DATA_PATH, this.#db, { spaces: " " });
  }

  GetAll() {
    return this.#db;
  }

  GetById(id) {
    let result = this.#db.find(({ id }) => id == id);
    if (!result) throw new NotFoundException("Ma'lumot topilmadi");
    else return result;
  }
  Add(data){
    if (!data) return;
    this.#db.push(data);
    this.#SaveToFile();
  }
  UpdateById(id, data) {
    let oldData = this.GetById(id);
    Object.keys(data).forEach((x) => {
      oldData[x] = data[x];
    });
    this.#db[this.#db.findIndex(({id})=>id == id)] = oldData;
    this.#SaveToFile();
  }

 DeleteById(id){
    let oldData = this.GetById(id);
    this.#db.splice(this.#db.indexOf(oldData), 1);
    this.#SaveToFile();
 }
 ExistsData(id)
 {
    let result = this.#db.find(({id}) => id == id);
    if (result)
      return true;
    else 
    return false;

 }

  #CtreateDataFile() {
    fs.writeFileSync(this.#DATA_PATH, "[]");
  }

}

class NotFoundException extends Error {
  constructor(message = "", stack = undefined) {
    this.name = "NotFoundException";
    super(message);
  }
}
module.exports = new Manager();
