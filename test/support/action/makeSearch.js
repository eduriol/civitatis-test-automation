module.exports = (value, done) => {
    browser.setValue('input.o-search-container__search-txt', value);
    done();
};
