import checkSearchWithoutResult from '../support/check/checkSearchWithoutResult';

module.exports = function then() {
    this.Then(
        /^la web muestra en resultados "([^"]*)?"$/,
        checkSearchWithoutResult
    );
};
