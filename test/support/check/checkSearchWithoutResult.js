module.exports = (expectedText, done) => {
    const element = $('body > div.container-body > main > header > div.o-header__content.row > div > div > div.o-home-search__filtered-list__container.ua-resizeable > div > div > div.m-home-search--category__no-results');
    const actualText = element.getText();
    actualText.should.equal(expectedText);
    done();
};
