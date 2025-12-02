"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleIdValue;
    #nameValue;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        //TODO Implement this method
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        //TODO Implement this method
    }

    set quantity(value) {
        //TODO Implement this method
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#validatePrice(value);
        return this.#price = value;
    }

    get total() {
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        //TODO Implement this method
    }

    set #name(value) {
        return this.#nameValue = value;
    }

    #validateArticleId(articleId) {
        //TODO Implement this method
    }

    #validateQuantity(quantity) {
        //TODO Implement this method
    }

    #validatePrice(price) {
        if (price >= 10) {
            return price;
        }
        else {
            throw new InvalidPriceException();
        }

    }
    //endregion private methods
}



