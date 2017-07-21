System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    this.onSubmitNewMeal = new core_1.EventEmitter();
                }
                NewMealComponent.prototype.addMeal = function (userItem, userDescription, userCalories) {
                    this.onSubmitNewMeal.emit([userItem.value, userDescription.value, userCalories.value]);
                    userItem.value = "";
                    userDescription.value = "";
                    userCalories.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        outputs: ['onSubmitNewMeal'],
                        template: "\n    <div class=\"meal-form\">\n      <h2>Add A New Meal To Track</h2>\n\n        <input placeholder=\"Add A Meal Item\" #newItem>\n        <input placeholder=\"Add Description\" #newDescription>\n        <input placeholder=\"How Many Calories?\" type=\"number\" #newCalories>\n\n      <button (click)=\"addMeal(newItem, newDescription, newCalories)\">Add Meal</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map