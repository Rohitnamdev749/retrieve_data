"use strict";
exports.__esModule = true;
exports.Retrieve = void 0;
var node_fetch_1 = require("node-fetch");
var Retrieve = /** @class */ (function () {
    function Retrieve() {
    }
    Retrieve.getData = function () {
        var url = "https://jsonplaceholder.typicode.com/posts";
        (0, node_fetch_1["default"])(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            return response.json();
        })["catch"](function (error) {
            console.error("Error retrieving data from ".concat(url, ": ").concat(error));
        });
    };
    return Retrieve;
}());
exports.Retrieve = Retrieve;
;
