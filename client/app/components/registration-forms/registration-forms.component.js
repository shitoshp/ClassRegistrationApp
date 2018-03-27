"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var registration_forms_service_1 = require("../../services/registration-forms.service");
var RegistrationFormsComponent = /** @class */ (function () {
    function RegistrationFormsComponent(registrationFormsService) {
        var _this = this;
        this.registrationFormsService = registrationFormsService;
        this.registrationFormsService.getRegistrationForms()
            .subscribe(function (registration_forms) {
            console.log(registration_forms);
            _this.registration_forms = registration_forms;
        });
    }
    RegistrationFormsComponent.prototype.addForm = function () {
        console.log("samurai");
    };
    RegistrationFormsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'registration-forms',
            templateUrl: 'registration-forms.component.html'
        }),
        __metadata("design:paramtypes", [registration_forms_service_1.RegistrationFormsService])
    ], RegistrationFormsComponent);
    return RegistrationFormsComponent;
}());
exports.RegistrationFormsComponent = RegistrationFormsComponent;
//# sourceMappingURL=registration-forms.component.js.map