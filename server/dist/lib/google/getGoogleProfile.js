"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
async function getGoogleProfile(accessToken) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const { data } = await googleapis_1.google.people('v1').people.get({
        access_token: accessToken,
        resourceName: 'people/me',
        personFields: 'names,emailAddresses,photos',
    });
    const profile = {
        socialId: (_b = (_a = data.resourceName) === null || _a === void 0 ? void 0 : _a.replace('people/', '')) !== null && _b !== void 0 ? _b : '',
        email: (_d = (_c = data.emailAddresses) === null || _c === void 0 ? void 0 : _c[0].value) !== null && _d !== void 0 ? _d : '',
        photo: (_f = (_e = data.photos) === null || _e === void 0 ? void 0 : _e[0].url) !== null && _f !== void 0 ? _f : null,
        name: (_h = (_g = data.names) === null || _g === void 0 ? void 0 : _g[0].displayNameLastFirst) !== null && _h !== void 0 ? _h : '',
        displayName: (_l = (_k = (_j = data.names) === null || _j === void 0 ? void 0 : _j[0].displayName) === null || _k === void 0 ? void 0 : _k.split(' (')[0]) !== null && _l !== void 0 ? _l : '',
    };
    return profile;
}
exports.default = getGoogleProfile;
//# sourceMappingURL=getGoogleProfile.js.map