const StringFormat = {
    camelCaseRegex: /-./g,

    capFirst(str) {
        if (!str) {
            return '';
        }
        return str[0].toUpperCase() + str.substr(1);
    },

    pad(num, digits) {
        let str = num.toString();
        while (str.length < digits) {
            str = '0' + str;
        }
        return str;
    },

    padStr(str, len) {
        while (str.length < len) {
            str += ' ';
        }
        return str;
    },

    camelCase(str) {
        return str.replace(this.camelCaseRegex, match => match[1].toUpperCase());
    }
};

module.exports = StringFormat;