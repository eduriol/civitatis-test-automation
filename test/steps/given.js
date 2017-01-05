import openWebsite from '../support/action/openWebsite';

module.exports = function given() {
    this.Given(
        /^que estamos en la (url|site) "([^"]*)?"$/,
        openWebsite
    );
};
