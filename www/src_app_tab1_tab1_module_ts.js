"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 7581:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _recipes_grid_recipes_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes-grid/recipes-grid.component */ 8392);
/* harmony import */ var _main_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/recipe/recipe.component */ 2436);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _recipes_grid_recipes_grid_component__WEBPACK_IMPORTED_MODULE_0__.RecipesGridComponent,
            _main_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_1__.RecipeComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        exports: [
            _recipes_grid_recipes_grid_component__WEBPACK_IMPORTED_MODULE_0__.RecipesGridComponent,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 2436:
/*!************************************************************!*\
  !*** ./src/app/components/main/recipe/recipe.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeComponent": () => (/* binding */ RecipeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recipe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.component.html?ngResource */ 8682);
/* harmony import */ var _recipe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.component.scss?ngResource */ 8066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let RecipeComponent = class RecipeComponent {
    constructor(actionSheetController, toastController) {
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.item = {
            name: '',
            imgUrl: ''
        };
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has guardado ' + this.item.name + ' en favoritos.',
                duration: 2000
            });
            toast.present();
        });
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones',
                buttons: [{
                        text: 'Favorite',
                        icon: 'heart',
                        handler: () => {
                            this.presentToast();
                        }
                    }, {
                        text: 'Share',
                        icon: 'share',
                        handler: () => {
                            // this.shareWhatsapp();
                        }
                    }, {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    ngOnInit() { }
};
RecipeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
RecipeComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
RecipeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recipe',
        template: _recipe_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recipe_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecipeComponent);



/***/ }),

/***/ 8392:
/*!*******************************************************************!*\
  !*** ./src/app/components/recipes-grid/recipes-grid.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesGridComponent": () => (/* binding */ RecipesGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recipes_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes-grid.component.html?ngResource */ 7676);
/* harmony import */ var _recipes_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes-grid.component.scss?ngResource */ 6021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let RecipesGridComponent = class RecipesGridComponent {
    constructor() {
        this.recipeExampleList = [
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Espaguetis a la carbonara', imgUrl: 'https://t1.rg.ltmcdn.com/es/posts/8/0/5/espagueti_carbonara_con_queso_philadelphia_59508_600.jpg' },
            { name: 'Makis de salmón', imgUrl: 'https://okdiario.com/img/2018/04/23/makis-salmon.jpg' },
            { name: 'Pollo a la cerveza', imgUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pollo-a-la-cerveza.jpg' },
            // eslint-disable-next-line max-len
            { name: 'Canelones', imgUrl: 'https://www.hola.com/imagenes/cocina/recetas/2012082760392/canelones-carne-cinco-pimientas/0-772-427/canelones-adobe-m.jpg' },
            { name: 'Pastel de crema', imgUrl: 'https://preppykitchen.com/wp-content/uploads/2021/12/Italian-Cream-Cake-Recipe-Card.jpg' },
            { name: 'Flan de huevo', imgUrl: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa-1024x576.jpg' },
        ];
    }
    ngOnInit() { }
};
RecipesGridComponent.ctorParameters = () => [];
RecipesGridComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll,] }]
};
RecipesGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-recipes-grid',
        template: _recipes_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recipes_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecipesGridComponent);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ 7581);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Tab1Page = class Tab1Page {
    constructor() {
        this.homeTitle = 'KameChef';
        this.kateringTitle = 'Katering';
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8066:
/*!*************************************************************************!*\
  !*** ./src/app/components/main/recipe/recipe.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".card-image {\n  width: 100%;\n  height: 10rem;\n  background-position: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  -webkit-backdrop-filter: brightness(0%);\n          backdrop-filter: brightness(0%);\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n\nion-card-title {\n  color: white;\n  font-size: 1.5rem;\n  margin-left: 0.4rem;\n  font-weight: bold;\n  text-shadow: -9px 19px 20px #000000, -6px 5px 20px #000000, 15px 5px 20px #000000, 15px -9px 20px #000000, -16px 22px 20px #000000, -16px 22px 20px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBRUEsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUVBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBRko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkpBQUE7QUFKSiIsImZpbGUiOiJyZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWFnZSB7XG4gICAgLy8gU2l6ZVxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgLy8gQmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xuICAgIC8vIERpc3BsYXlcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLy8gU2hhZG93XG4gICAgLy8gRmlsdGVyXG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAtOXB4IDE5cHggMjBweCAjMDAwMDAwLCAtNnB4IDVweCAyMHB4ICMwMDAwMDAsIDE1cHggNXB4IDIwcHggIzAwMDAwMCwgMTVweCAtOXB4IDIwcHggIzAwMDAwMCwgLTE2cHggMjJweCAyMHB4ICMwMDAwMDAsIC0xNnB4IDIycHggMjBweCAjMDAwMDAwO1xufSJdfQ== */";

/***/ }),

/***/ 6021:
/*!********************************************************************************!*\
  !*** ./src/app/components/recipes-grid/recipes-grid.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "div {\n  background-color: #ffcdd2;\n  padding-top: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xuICAgIHBhZGRpbmctdG9wOiAuN3JlbTtcbn0iXX0= */";

/***/ }),

/***/ 8682:
/*!*************************************************************************!*\
  !*** ./src/app/components/main/recipe/recipe.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card (click)=\"presentActionSheet()\">\n\n    <!-- <img src=\"{{item.imgUrl}}\" alt=\"Img\"> -->\n\n    <div class=\"card-image\" style=\"background-image: url({{item.imgUrl}});\">\n\n        <ion-card-title>\n            {{item.name}}\n        </ion-card-title>\n    </div>\n</ion-card>";

/***/ }),

/***/ 7676:
/*!********************************************************************************!*\
  !*** ./src/app/components/recipes-grid/recipes-grid.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-searchbar>\n</ion-searchbar>\n<div *ngFor=\"let i of recipeExampleList\">\n    <app-recipe [item]=\"i\">\n    </app-recipe>\n</div>";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-title style=\"color:white;\">\n            {{homeTitle}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-title>Katering</ion-title>\n    <app-recipes-grid></app-recipes-grid>\n</ion-content> -->\n\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-title style=\"color:white\">\n            {{homeTitle}}\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"primary\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar color=\"primary\">\n            <ion-title size=\"large\" style=\"color:white\">\n\n                {{kateringTitle}}\n\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <div>\n        <app-recipes-grid></app-recipes-grid>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map