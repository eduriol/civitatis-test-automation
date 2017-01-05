import makeSearch from '../support/action/makeSearch';

module.exports = function when() {
    this.When(
        /^buscamos el destino "([^"]*)?"$/,
        makeSearch
    );
};
