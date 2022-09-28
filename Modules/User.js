class User {
  #id;
  #first_name;
  #userId;
  #chat;
  constructor(id, first_name, userId, chat) {
    this.#id = id;
    this.#first_name = first_name;
    this.#userId = userId;
    this.#chat = chat;
  }
}


module.exports = User;