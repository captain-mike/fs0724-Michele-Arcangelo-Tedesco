"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const p = new Promise((success, reject) => {
        reject('fallimento');
        success('successo');
    });
    p.then(res => {
        console.log(res);
    }).catch(err => console.log(err));
}
{
    function call() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'successo';
        });
    }
    call().then(res => {
        console.log(res);
    });
}
fetch('')
    .then(res => res.json())
    .then(res => {
    //fai qualcosa con il dato
});
function chiamata() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('');
        const dati = yield response.json();
    });
}
//# sourceMappingURL=script.js.map