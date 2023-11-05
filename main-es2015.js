(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+BVi":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/config */ "0np6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AuthService {
    constructor(
    // private authHttpService: AuthHTTPService,
    http, router) {
        this.http = http;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        // const subscr = this.getUserByToken().subscribe();
        // this.unsubscribe.push(subscr);
        this.loadstorage();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    loadstorage() {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token");
            this.user = JSON.parse(localStorage.getItem("user"));
        }
        else {
            this.user = null;
            this.token = '';
        }
    }
    // public methods
    isLogued() {
        return (this.token.length > 5) ? true : false;
    }
    login(email, password) {
        this.isLoadingSubject.next(true);
        let url = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/users/login_admin";
        console.log({ email, password });
        return this.http.post(url, { email, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((auth) => {
            console.log(auth);
            if (auth.USER_FRONTED && auth.USER_FRONTED.token) {
                return this.setAuthFromLocalStorage(auth);
            }
            else {
                return auth;
            }
        }), 
        // switchMap(() => this.getUserByToken()),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    logout() {
        // localStorage.removeItem(this.authLocalStorageToken);
        this.user = null;
        this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    // getUserByToken(): Observable<UserModel> {
    //   const auth = this.getAuthFromLocalStorage();
    //   if (!auth || !auth.accessToken) {
    //     return of(undefined);
    //   }
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService.getUserByToken(auth.accessToken).pipe(
    //     map((user: UserModel) => {
    //       if (user) {
    //         this.currentUserSubject = new BehaviorSubject<UserModel>(user);
    //       } else {
    //         this.logout();
    //       }
    //       return user;
    //     }),
    //     finalize(() => this.isLoadingSubject.next(false))
    //   );
    // }
    // // need create new user then login
    // registration(user: UserModel): Observable<any> {
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService.createUser(user).pipe(
    //     map(() => {
    //       this.isLoadingSubject.next(false);
    //     }),
    //     switchMap(() => this.login(user.email, user.password)),
    //     catchError((err) => {
    //       console.error('err', err);
    //       return of(undefined);
    //     }),
    //     finalize(() => this.isLoadingSubject.next(false))
    //   );
    // }
    // forgotPassword(email: string): Observable<boolean> {
    //   this.isLoadingSubject.next(true);
    //   return this.authHttpService
    //     .forgotPassword(email)
    //     .pipe(finalize(() => this.isLoadingSubject.next(false)));
    // }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        // if (auth.access_token && auth.user) {
        localStorage.setItem('token', auth.USER_FRONTED.token);
        localStorage.setItem('user', JSON.stringify(auth.USER_FRONTED.user));
        this.user = auth.USER_FRONTED.access_token;
        this.token = auth.USER_FRONTED.user;
        return true;
        // }
        // return false;
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "+H5S":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/fr.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// France
const locale = {
    lang: 'fr',
    data: {
        TRANSLATOR: {
            SELECT: 'choisissez votre langue',
        },
        MENU: {
            NEW: 'Nouveau',
            ACTIONS: 'Actes',
            CREATE_POST: 'Créer un nouveau Post',
            PAGES: 'Pages',
            FEATURES: 'Fonctionnalités',
            APPS: 'Applications',
            DASHBOARD: 'Tableau de Bord',
        },
        AUTH: {
            GENERAL: {
                OR: 'Ou',
                SUBMIT_BUTTON: 'Soumettre',
                NO_ACCOUNT: 'Ne pas avoir de compte?',
                SIGNUP_BUTTON: 'Registre',
                FORGOT_BUTTON: 'Mot de passe oublié',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Créer un compte',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Mot de passe',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nom d\'utilisateur'
            },
            VALIDATION: {
                INVALID: '{{name}} n\'est pas valide',
                REQUIRED: '{{name}} est requis',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Nombre d\'enregistrements sélectionnés: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'éCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Les clients',
                CUSTOMERS_LIST: 'Liste des clients',
                NEW_CUSTOMER: 'Nouveau client',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Suppression du client',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement ce client?',
                    WAIT_DESCRIPTION: 'Le client est en train de supprimer ...',
                    MESSAGE: 'Le client a été supprimé'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Supprimer les clients',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement les clients sélectionnés?',
                    WAIT_DESCRIPTION: 'Les clients suppriment ...',
                    MESSAGE: 'Les clients sélectionnés ont été supprimés'
                },
                UPDATE_STATUS: {
                    TITLE: 'Le statut a été mis à jour pour les clients sélectionnés',
                    MESSAGE: 'Le statut des clients sélectionnés a été mis à jour avec succès'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Le client a été mis à jour',
                    ADD_MESSAGE: 'Le client a été créé'
                }
            }
        }
    }
};


/***/ }),

/***/ "+hgU":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/ch.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// China
const locale = {
    lang: 'ch',
    data: {
        TRANSLATOR: {
            SELECT: '选择你的语言',
        },
        MENU: {
            NEW: '新',
            ACTIONS: '行动',
            CREATE_POST: '创建新帖子',
            PAGES: 'Pages',
            FEATURES: '特征',
            APPS: '应用',
            DASHBOARD: '仪表板',
        },
        AUTH: {
            GENERAL: {
                OR: '要么',
                SUBMIT_BUTTON: '提交',
                NO_ACCOUNT: '没有账号？',
                SIGNUP_BUTTON: '注册',
                FORGOT_BUTTON: '忘记密码',
                BACK_BUTTON: '背部',
                PRIVACY: '隐私',
                LEGAL: '法律',
                CONTACT: '联系',
            },
            LOGIN: {
                TITLE: '创建帐号',
                BUTTON: '签到',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: '用戶名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: '顾客',
                CUSTOMERS_LIST: '客户名单',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "/rCd":
/*!********************************************************************************!*\
  !*** ./src/app/componets/notifications/noticy-alert/noticy-alert.component.ts ***!
  \********************************************************************************/
/*! exports provided: NoticyAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticyAlertComponent", function() { return NoticyAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NoticyAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticyAlertComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toast.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.txt);
} }
function NoticyAlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticyAlertComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toast.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.txt);
} }
function NoticyAlertComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticyAlertComponent_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toast.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.txt);
} }
function NoticyAlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticyAlertComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toast.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.txt);
} }
function NoticyAlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticyAlertComponent_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toast.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.txt);
} }
function NoticyAlertComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticyAlertComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toast.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.txt);
} }
class NoticyAlertComponent {
    constructor() {
        this.alert = '';
        this.txt = '';
    }
    ngOnInit() {
        this.alert = this.toast.text.split('-')[0];
        this.txt = this.toast.text.split('-')[1];
    }
}
NoticyAlertComponent.ɵfac = function NoticyAlertComponent_Factory(t) { return new (t || NoticyAlertComponent)(); };
NoticyAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticyAlertComponent, selectors: [["app-noticy-alert"]], inputs: { toast: "toast" }, decls: 6, vars: 6, consts: [["class", "alert alert-custom alert-notice alert-light-primary fade show mb-0", "role", "alert", 4, "ngIf"], ["class", "alert alert-custom alert-notice alert-light-warning fade show mb-0", "role", "alert", 4, "ngIf"], ["class", "alert alert-custom alert-notice alert-light-danger fade show mb-0", "role", "alert", 4, "ngIf"], ["class", "alert alert-custom alert-notice alert-light-success fade show mb-0", "role", "alert", 4, "ngIf"], ["class", "alert alert-custom alert-notice alert-light-dark fade show mb-0", "role", "alert", 4, "ngIf"], ["class", "alert alert-custom alert-notice alert-light-info fade show mb-0", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-custom", "alert-notice", "alert-light-primary", "fade", "show", "mb-0"], [1, "alert-icon"], [1, "flaticon2-gear"], [1, "alert-text"], [1, "alert-close"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "ki", "ki-close"], ["role", "alert", 1, "alert", "alert-custom", "alert-notice", "alert-light-warning", "fade", "show", "mb-0"], [1, "flaticon-warning"], ["role", "alert", 1, "alert", "alert-custom", "alert-notice", "alert-light-danger", "fade", "show", "mb-0"], ["role", "alert", 1, "alert", "alert-custom", "alert-notice", "alert-light-success", "fade", "show", "mb-0"], [1, "flaticon2-bell-alarm-symbol"], ["role", "alert", 1, "alert", "alert-custom", "alert-notice", "alert-light-dark", "fade", "show", "mb-0"], ["role", "alert", 1, "alert", "alert-custom", "alert-notice", "alert-light-info", "fade", "show", "mb-0"], [1, "flaticon2-crisp-icons"]], template: function NoticyAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoticyAlertComponent_div_0_Template, 9, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoticyAlertComponent_div_1_Template, 9, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoticyAlertComponent_div_2_Template, 9, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NoticyAlertComponent_div_3_Template, 9, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NoticyAlertComponent_div_4_Template, 9, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NoticyAlertComponent_div_5_Template, 9, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert == "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert == "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert == "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert == "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert == "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert == "info");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY3ktYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticyAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noticy-alert',
                templateUrl: './noticy-alert.component.html',
                styleUrls: ['./noticy-alert.component.scss']
            }]
    }], function () { return []; }, { toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\adminngecommerce\src\main.ts */"zUnb");


/***/ }),

/***/ "0np6":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: URL_BACKEND, URL_SERVICIOS, URL_FROTEND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_BACKEND", function() { return URL_BACKEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVICIOS", function() { return URL_SERVICIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_FROTEND", function() { return URL_FROTEND; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const URL_BACKEND = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].URL_BACKEND;
const URL_SERVICIOS = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].URL_SERVICIOS;
const URL_FROTEND = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].URL_FROTEND;


/***/ }),

/***/ "19P/":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/filter.model.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "2ndO":
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
  \************************************************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.service */ "ONK0");



const _c0 = ["splashScreen"];
class SplashScreenComponent {
    constructor(el, splashScreenService) {
        this.el = el;
        this.splashScreenService = splashScreenService;
    }
    ngOnInit() {
        this.splashScreenService.init(this.splashScreen);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"])); };
SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], viewQuery: function SplashScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splashScreen = _t.first);
    } }, decls: 5, vars: 0, consts: [["id", "splash-screen"], ["splashScreen", ""], ["src", "./assets/media/logos/logo-dark.png", "alt", "Logo"], ["viewBox", "0 0 50 50", 1, "splash-spinner"], ["cx", "25", "cy", "25", "r", "20", "fill", "none", "stroke-width", "5", 1, "path"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#splash-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f2f3f8;\n}\n\n#splash-screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d78ff;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBQUY7RUFHQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2gtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmODtcclxufVxyXG5cclxuI3NwbGFzaC1zY3JlZW4gaW1nIHtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuLmhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zcGxhc2gtc3Bpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIgLnBhdGgge1xyXG4gIHN0cm9rZTogIzVkNzhmZjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-splash-screen',
                templateUrl: './splash-screen.component.html',
                styleUrls: ['./splash-screen.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"] }]; }, { splashScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['splashScreen', { static: true }]
        }] }); })();


/***/ }),

/***/ "51MP":
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: NgPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationConfig", function() { return NgPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/paginator.model */ "fksT");
// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination-config.ts



/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
class NgPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"][2];
        this.rotate = false;
    }
}
NgPaginationConfig.ɵfac = function NgPaginationConfig_Factory(t) { return new (t || NgPaginationConfig)(); };
NgPaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgPaginationConfig, factory: NgPaginationConfig.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appVersion: 'v723demo1',
    USERDATA_KEY: 'authf649fc9a5f55',
    isMockEnabled: false,
    apiUrl: 'api',
    URL_BACKEND: 'http://127.0.0.1:3000/',
    URL_SERVICIOS: 'http://127.0.0.1:3000/api',
    URL_FROTEND: 'http://localhost:4200',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Br0f":
/*!******************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/index.ts ***!
  \******************************************************/
/*! exports provided: SortState, PageSizes, PaginatorState, GroupingState, TableService, TableExtendedService, CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/table.model */ "Vh1Q");
/* empty/unused harmony star reexport *//* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sort.model */ "fr3w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return _models_sort_model__WEBPACK_IMPORTED_MODULE_1__["SortState"]; });

/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginator.model */ "fksT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PageSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]; });

/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/grouping.model */ "WWIl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__["GroupingState"]; });

/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search.model */ "EASb");
/* empty/unused harmony star reexport *//* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/filter.model */ "19P/");
/* empty/unused harmony star reexport *//* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table.service */ "aENq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _services_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"]; });

/* harmony import */ var _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/table.extended.service */ "CjzB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtendedService", function() { return _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__["TableExtendedService"]; });

/* harmony import */ var _crud_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-table.module */ "RbrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return _crud_table_module__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"]; });

// Models






// Directives
// Services


// Module



/***/ }),

/***/ "CjzB":
/*!********************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.extended.service.ts ***!
  \********************************************************************************/
/*! exports provided: TableExtendedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExtendedService", function() { return TableExtendedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.service */ "aENq");




class TableExtendedService extends _table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] {
    constructor(http) {
        super(http);
    }
}
TableExtendedService.ɵfac = function TableExtendedService_Factory(t) { return new (t || TableExtendedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TableExtendedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableExtendedService, factory: TableExtendedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableExtendedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "EASb":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/search.model.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "EJz5":
/*!**********************************************************************!*\
  !*** ./src/app/modules/e-commerce/_fake/fake-server/orders.table.ts ***!
  \**********************************************************************/
/*! exports provided: OrdersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTable", function() { return OrdersTable; });
class OrdersTable {
}
OrdersTable.orders = [
    // e-commerce => orders
    {
        id: 'a68e31e0-9d88-4065-abc4-c74cc7c293ae',
        customer_id: 38,
        order_date: '8/6/2012',
        items: [
            {
                product_id: 31,
                count: 1
            },
            {
                product_id: 1,
                count: 1
            }
        ],
        order_status: 'on the way'
    },
    {
        id: '5055fa9e-3b1a-4668-a63e-4767e9cda711',
        customer_id: 58,
        order_date: '2/13/2012',
        items: [
            {
                product_id: 98,
                count: 2
            },
            {
                product_id: 11,
                count: 1
            }
        ],
        order_status: 'on the way'
    },
    {
        id: '0c06643b-030a-4ea0-92e5-e0177645943d',
        customer_id: 13,
        order_date: '4/19/2016',
        items: [
            {
                product_id: 32,
                count: 1
            },
            {
                product_id: 77,
                count: 1
            }
        ],
        order_status: 'sent'
    },
    {
        id: '8bbdbe05-88c6-47f2-b531-65fd9f97d649',
        customer_id: 97,
        order_date: '7/30/2012',
        items: [
            {
                product_id: 96,
                count: 1
            },
            {
                product_id: 99,
                count: 2
            }
        ],
        order_status: 'delivered'
    },
    {
        id: '2af76e30-f9d6-427c-aad4-414908459e7f',
        customer_id: 90,
        order_date: '12/20/2012',
        items: [
            {
                product_id: 100,
                count: 5
            }
        ],
        order_status: 'paid'
    },
    {
        id: '7951e68b-e2e9-4cf9-82c4-9e963031b6b7',
        customer_id: 82,
        order_date: '1/4/2014',
        items: [
            {
                product_id: 35,
                count: 1
            },
            {
                product_id: 88,
                count: 1
            },
            {
                product_id: 22,
                count: 1
            }
        ],
        order_status: 'delivered'
    },
    {
        id: '4dc2c379-c7aa-4356-b609-0ca5777b7b8e',
        customer_id: 91,
        order_date: '8/2/2016',
        items: [
            {
                product_id: 36,
                count: 1
            }
        ],
        order_status: 'on the way'
    },
    {
        id: '3eaf04e5-855c-4a57-b781-3edff99ddae5',
        customer_id: 63,
        order_date: '4/11/2012',
        items: [
            {
                product_id: 67,
                count: 1
            }
        ],
        order_status: 'on the way'
    },
    {
        id: '4cca88ef-1a39-48cf-a6ed-290e7e34f756',
        customer_id: 5,
        order_date: '4/19/2011',
        items: [
            {
                product_id: 9,
                count: 1
            }
        ],
        order_status: 'sent'
    },
    {
        id: '3cd8e2b8-83ee-4c0d-a4c3-fed313fc836a',
        customer_id: 81,
        order_date: '10/2/2010',
        items: [
            {
                product_id: 98,
                count: 1
            }
        ],
        order_status: 'on the way'
    },
    {
        id: 'da2f7ea8-82aa-474a-a97f-3d75d56d734f',
        customer_id: 100,
        order_date: '3/30/2016',
        items: [
            {
                product_id: 3,
                count: 1
            }
        ],
        order_status: 'sent'
    },
    {
        id: 'e674592d-ea7f-40d4-aa2c-ecac4039c81b',
        customer_id: 4,
        order_date: '6/25/2011',
        items: [
            {
                product_id: 71,
                count: 1
            }
        ],
        order_status: 'delivered'
    }
];


/***/ }),

/***/ "G28U":
/*!*******************************************!*\
  !*** ./src/app/_fake/fake-api.service.ts ***!
  \*******************************************/
/*! exports provided: FakeAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeAPIService", function() { return FakeAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_db_users_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-db/users.table */ "R3gj");
/* harmony import */ var _fake_db_cars_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-db/cars.table */ "LtPJ");
/* harmony import */ var _modules_e_commerce_fake_fake_server_e_commerce_data_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/e-commerce/_fake/fake-server/_e-commerce.data-context */ "izYn");



// ECommerce


class FakeAPIService {
    constructor() { }
    /**
     * Create Fake DB and API
     */
    createDb() {
        // tslint:disable-next-line:class-name
        const db = {
            // auth module
            users: _fake_db_users_table__WEBPACK_IMPORTED_MODULE_1__["UsersTable"].users,
            // data-table
            cars: _fake_db_cars_table__WEBPACK_IMPORTED_MODULE_2__["CarsTable"].cars,
            customers: _modules_e_commerce_fake_fake_server_e_commerce_data_context__WEBPACK_IMPORTED_MODULE_3__["ECommerceDataContext"].customers,
            // products
            products: _modules_e_commerce_fake_fake_server_e_commerce_data_context__WEBPACK_IMPORTED_MODULE_3__["ECommerceDataContext"].cars,
            productRemarks: _modules_e_commerce_fake_fake_server_e_commerce_data_context__WEBPACK_IMPORTED_MODULE_3__["ECommerceDataContext"].remarks,
            productSpecs: _modules_e_commerce_fake_fake_server_e_commerce_data_context__WEBPACK_IMPORTED_MODULE_3__["ECommerceDataContext"].carSpecs,
        };
        return db;
    }
}
FakeAPIService.ɵfac = function FakeAPIService_Factory(t) { return new (t || FakeAPIService)(); };
FakeAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeAPIService, factory: FakeAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KS1n":
/*!***********************************************************************!*\
  !*** ./src/app/modules/e-commerce/_fake/fake-server/remarks.table.ts ***!
  \***********************************************************************/
/*! exports provided: RemarksTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksTable", function() { return RemarksTable; });
// Sub category for cars
class RemarksTable {
}
RemarksTable.remarks = [{
        id: 1,
        carId: 1,
        text: 'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin',
        _userId: 2,
        _createdDate: '02/20/2011',
        _updatedDate: '06/25/2013',
        type: 0,
        _isEditMode: false,
        dueDate: '11/18/2018'
    }, {
        id: 2,
        carId: 1,
        text: 'in',
        _userId: 1,
        _createdDate: '02/05/2014',
        _updatedDate: '09/25/2017',
        type: 0,
        _isEditMode: false,
        dueDate: '10/26/2019'
    }, {
        id: 3,
        carId: 1,
        text: 'quis tortor id nulla ultrices aliquet maecenas leo',
        _userId: 2,
        _createdDate: '04/10/2017',
        _updatedDate: '06/12/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '05/10/2020'
    }, {
        id: 4,
        carId: 2,
        text: 'curabitur gravida nisi at nibh in hac habitasse',
        _userId: 1,
        _createdDate: '03/02/2015',
        _updatedDate: '03/30/2014',
        type: 1,
        _isEditMode: false,
        dueDate: '12/13/2018'
    }, {
        id: 5,
        carId: 2,
        text: 'orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis',
        _userId: 2,
        _createdDate: '02/14/2015',
        _updatedDate: '07/11/2013',
        type: 0,
        _isEditMode: false,
        dueDate: '10/24/2019'
    }, {
        id: 6,
        carId: 2,
        text: 'integer ac',
        _userId: 1,
        _createdDate: '05/28/2015',
        _updatedDate: '07/29/2016',
        type: 0,
        _isEditMode: false,
        dueDate: '01/22/2019'
    }, {
        id: 7,
        carId: 3,
        text: 'lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede',
        _userId: 2,
        _createdDate: '03/08/2013',
        _updatedDate: '09/24/2016',
        type: 1,
        _isEditMode: false,
        dueDate: '03/31/2020'
    }, {
        id: 8,
        carId: 3,
        text: 'morbi odio odio elementum eu interdum eu tincidunt in leo',
        _userId: 2,
        _createdDate: '07/09/2010',
        _updatedDate: '01/25/2015',
        type: 1,
        _isEditMode: false,
        dueDate: '02/20/2019'
    }, {
        id: 9,
        carId: 3,
        text: 'orci',
        _userId: 1,
        _createdDate: '02/02/2018',
        _updatedDate: '08/04/2015',
        type: 0,
        _isEditMode: false,
        dueDate: '04/03/2020'
    }, {
        id: 10,
        carId: 4,
        text: 'vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit',
        _userId: 1,
        _createdDate: '09/09/2013',
        _updatedDate: '03/06/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '10/28/2018'
    }, {
        id: 11,
        carId: 4,
        text: 'ligula sit amet eleifend pede libero quis orci',
        _userId: 2,
        _createdDate: '08/17/2010',
        _updatedDate: '03/05/2016',
        type: 2,
        _isEditMode: false,
        dueDate: '06/22/2019'
    }, {
        id: 12,
        carId: 4,
        text: 'eget eleifend luctus ultricies eu nibh quisque id justo sit amet',
        _userId: 2,
        _createdDate: '09/17/2014',
        _updatedDate: '04/18/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '01/01/2020'
    }, {
        id: 13,
        carId: 5,
        text: '',
        _userId: 1,
        _createdDate: '03/25/2013',
        _updatedDate: '11/13/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '05/25/2019'
    }, {
        id: 14,
        carId: 5,
        text: 'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor',
        _userId: 2,
        _createdDate: '03/22/2015',
        _updatedDate: '04/22/2015',
        type: 1,
        _isEditMode: false,
        dueDate: '02/07/2020'
    }, {
        id: 15,
        carId: 5,
        text: 'quam pede',
        _userId: 1,
        _createdDate: '03/18/2018',
        _updatedDate: '06/01/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '02/09/2020'
    }, {
        id: 16,
        carId: 6,
        text: 'bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce',
        _userId: 2,
        _createdDate: '01/09/2013',
        _updatedDate: '02/10/2017',
        type: 1,
        _isEditMode: false,
        dueDate: '09/21/2019'
    }, {
        id: 17,
        carId: 6,
        text: 'id consequat in consequat ut nulla sed accumsan felis ut at dolor',
        _userId: 2,
        _createdDate: '07/27/2012',
        _updatedDate: '04/13/2015',
        type: 1,
        _isEditMode: false,
        dueDate: '08/01/2019'
    }, {
        id: 18,
        carId: 6,
        text: 'eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient',
        _userId: 1,
        _createdDate: '08/12/2011',
        _updatedDate: '04/08/2018',
        type: 0,
        _isEditMode: false,
        dueDate: '03/28/2020'
    }, {
        id: 19,
        carId: 7,
        text: 'nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget',
        _userId: 1,
        _createdDate: '03/03/2013',
        _updatedDate: '09/18/2017',
        type: 0,
        _isEditMode: false,
        dueDate: '08/08/2019'
    }, {
        id: 20,
        carId: 7,
        text: '',
        _userId: 1,
        _createdDate: '05/06/2015',
        _updatedDate: '02/20/2016',
        type: 2,
        _isEditMode: false,
        dueDate: '02/11/2019'
    }, {
        id: 21,
        carId: 7,
        text: 'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis',
        _userId: 2,
        _createdDate: '08/05/2014',
        _updatedDate: '03/13/2018',
        type: 0,
        _isEditMode: false,
        dueDate: '02/03/2020'
    }, {
        id: 22,
        carId: 8,
        text: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
        _userId: 2,
        _createdDate: '04/25/2011',
        _updatedDate: '03/09/2013',
        type: 0,
        _isEditMode: false,
        dueDate: '12/06/2018'
    }, {
        id: 23,
        carId: 8,
        text: 'mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh',
        _userId: 1,
        _createdDate: '07/03/2014',
        _updatedDate: '08/23/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '05/18/2019'
    }, {
        id: 24,
        carId: 8,
        text: 'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin',
        _userId: 2,
        _createdDate: '05/21/2013',
        _updatedDate: '10/01/2016',
        type: 0,
        _isEditMode: false,
        dueDate: '04/18/2019'
    }, {
        id: 25,
        carId: 9,
        text: 'orci luctus et ultrices',
        _userId: 2,
        _createdDate: '05/29/2014',
        _updatedDate: '02/03/2016',
        type: 1,
        _isEditMode: false,
        dueDate: '06/23/2019'
    }, {
        id: 26,
        carId: 9,
        text: 'donec diam neque vestibulum eget vulputate ut',
        _userId: 1,
        _createdDate: '06/06/2012',
        _updatedDate: '02/01/2018',
        type: 2,
        _isEditMode: false,
        dueDate: '12/29/2018'
    }, {
        id: 27,
        carId: 9,
        text: 'sapien sapien non mi integer ac neque duis bibendum morbi non quam',
        _userId: 1,
        _createdDate: '05/12/2015',
        _updatedDate: '11/11/2011',
        type: 2,
        _isEditMode: false,
        dueDate: '04/26/2020'
    }, {
        id: 28,
        carId: 10,
        text: '',
        _userId: 1,
        _createdDate: '03/17/2013',
        _updatedDate: '08/13/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '05/12/2019'
    }, {
        id: 29,
        carId: 10,
        text: 'aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed',
        _userId: 1,
        _createdDate: '07/03/2016',
        _updatedDate: '02/06/2011',
        type: 2,
        _isEditMode: false,
        dueDate: '02/24/2019'
    }, {
        id: 30,
        carId: 10,
        text: 'donec quis orci eget orci vehicula condimentum',
        _userId: 2,
        _createdDate: '01/27/2014',
        _updatedDate: '12/09/2016',
        type: 1,
        _isEditMode: false,
        dueDate: '02/27/2020'
    }, {
        id: 31,
        carId: 11,
        text: 'etiam faucibus cursus urna ut tellus nulla ut erat',
        _userId: 1,
        _createdDate: '07/08/2014',
        _updatedDate: '06/07/2014',
        type: 1,
        _isEditMode: false,
        dueDate: '05/26/2020'
    }, {
        id: 32,
        carId: 11,
        text: 'hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius',
        _userId: 1,
        _createdDate: '05/03/2016',
        _updatedDate: '07/20/2012',
        type: 1,
        _isEditMode: false,
        dueDate: '08/11/2019'
    }, {
        id: 33,
        carId: 11,
        text: 'vel enim sit amet',
        _userId: 1,
        _createdDate: '06/02/2017',
        _updatedDate: '05/03/2012',
        type: 0,
        _isEditMode: false,
        dueDate: '12/18/2019'
    }, {
        id: 34,
        carId: 12,
        text: 'est congue elementum in hac habitasse platea dictumst morbi vestibulum',
        _userId: 2,
        _createdDate: '03/28/2017',
        _updatedDate: '07/23/2010',
        type: 1,
        _isEditMode: false,
        dueDate: '02/16/2019'
    }, {
        id: 35,
        carId: 12,
        text: 'tempus vel pede morbi',
        _userId: 1,
        _createdDate: '10/29/2013',
        _updatedDate: '01/22/2016',
        type: 0,
        _isEditMode: false,
        dueDate: '12/30/2018'
    }, {
        id: 36,
        carId: 12,
        text: 'augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis',
        _userId: 2,
        _createdDate: '03/31/2011',
        _updatedDate: '08/20/2012',
        type: 0,
        _isEditMode: false,
        dueDate: '06/29/2019'
    }, {
        id: 37,
        carId: 13,
        text: 'faucibus',
        _userId: 2,
        _createdDate: '12/24/2016',
        _updatedDate: '03/01/2017',
        type: 2,
        _isEditMode: false,
        dueDate: '04/09/2020'
    }, {
        id: 38,
        carId: 13,
        text: 'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus',
        _userId: 1,
        _createdDate: '08/02/2015',
        _updatedDate: '10/24/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '03/03/2020'
    }, {
        id: 39,
        carId: 13,
        text: 'nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac',
        _userId: 1,
        _createdDate: '03/27/2011',
        _updatedDate: '11/25/2017',
        type: 2,
        _isEditMode: false,
        dueDate: '12/22/2019'
    }, {
        id: 40,
        carId: 14,
        text: 'vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum',
        _userId: 1,
        _createdDate: '02/03/2017',
        _updatedDate: '03/15/2014',
        type: 0,
        _isEditMode: false,
        dueDate: '02/06/2020'
    }, {
        id: 41,
        carId: 14,
        text: 'nec dui luctus rutrum nulla tellus in sagittis dui vel',
        _userId: 2,
        _createdDate: '08/12/2013',
        _updatedDate: '03/26/2013',
        type: 0,
        _isEditMode: false,
        dueDate: '09/22/2019'
    }, {
        id: 42,
        carId: 14,
        text: 'integer aliquet massa id lobortis convallis',
        _userId: 1,
        _createdDate: '09/09/2013',
        _updatedDate: '03/06/2018',
        type: 1,
        _isEditMode: false,
        dueDate: '01/19/2019'
    }, {
        id: 43,
        carId: 15,
        text: 'proin leo odio porttitor id consequat in consequat',
        _userId: 2,
        _createdDate: '04/25/2015',
        _updatedDate: '09/29/2015',
        type: 0,
        _isEditMode: false,
        dueDate: '11/02/2019'
    }, {
        id: 44,
        carId: 15,
        text: 'mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor',
        _userId: 1,
        _createdDate: '11/28/2013',
        _updatedDate: '10/12/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '02/28/2019'
    }, {
        id: 45,
        carId: 15,
        text: 'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut',
        _userId: 1,
        _createdDate: '12/24/2016',
        _updatedDate: '03/18/2016',
        type: 1,
        _isEditMode: false,
        dueDate: '11/13/2019'
    }, {
        id: 46,
        carId: 16,
        text: 'id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero',
        _userId: 2,
        _createdDate: '09/16/2015',
        _updatedDate: '09/20/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '11/28/2019'
    }, {
        id: 47,
        carId: 16,
        text: 'semper rutrum nulla nunc purus phasellus',
        _userId: 1,
        _createdDate: '04/09/2017',
        _updatedDate: '08/19/2012',
        type: 0,
        _isEditMode: false,
        dueDate: '11/05/2019'
    }, {
        id: 48,
        carId: 16,
        text: 'curabitur at ipsum ac tellus semper',
        _userId: 2,
        _createdDate: '10/09/2010',
        _updatedDate: '11/20/2014',
        type: 2,
        _isEditMode: false,
        dueDate: '11/27/2018'
    }, {
        id: 49,
        carId: 17,
        text: 'tellus nisi eu orci mauris lacinia sapien',
        _userId: 1,
        _createdDate: '11/18/2012',
        _updatedDate: '10/24/2017',
        type: 1,
        _isEditMode: false,
        dueDate: '04/10/2019'
    }, {
        id: 50,
        carId: 17,
        text: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum',
        _userId: 1,
        _createdDate: '09/21/2015',
        _updatedDate: '11/27/2016',
        type: 2,
        _isEditMode: false,
        dueDate: '12/17/2018'
    }, {
        id: 51,
        carId: 17,
        text: 'diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
        _userId: 1,
        _createdDate: '08/13/2012',
        _updatedDate: '06/21/2016',
        type: 1,
        _isEditMode: false,
        dueDate: '06/11/2019'
    }, {
        id: 52,
        carId: 18,
        text: 'eget nunc donec',
        _userId: 1,
        _createdDate: '03/30/2012',
        _updatedDate: '08/05/2012',
        type: 1,
        _isEditMode: false,
        dueDate: '11/15/2018'
    }, {
        id: 53,
        carId: 18,
        text: 'nulla ac enim in tempor',
        _userId: 1,
        _createdDate: '04/30/2012',
        _updatedDate: '11/12/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '01/16/2020'
    }, {
        id: 54,
        carId: 18,
        text: 'in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id',
        _userId: 2,
        _createdDate: '08/29/2012',
        _updatedDate: '12/10/2012',
        type: 0,
        _isEditMode: false,
        dueDate: '09/25/2019'
    }, {
        id: 55,
        carId: 19,
        text: 'justo in',
        _userId: 2,
        _createdDate: '11/27/2017',
        _updatedDate: '10/03/2010',
        type: 0,
        _isEditMode: false,
        dueDate: '10/04/2019'
    }, {
        id: 56,
        carId: 19,
        text: 'duis',
        _userId: 2,
        _createdDate: '07/09/2016',
        _updatedDate: '02/13/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '05/07/2020'
    }, {
        id: 57,
        carId: 19,
        text: 'luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea',
        _userId: 1,
        _createdDate: '01/10/2014',
        _updatedDate: '01/07/2014',
        type: 0,
        _isEditMode: false,
        dueDate: '04/01/2020'
    }, {
        id: 58,
        carId: 20,
        text: 'non sodales sed tincidunt',
        _userId: 1,
        _createdDate: '02/15/2016',
        _updatedDate: '12/12/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '08/26/2019'
    }, {
        id: 59,
        carId: 20,
        text: 'dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum',
        _userId: 2,
        _createdDate: '01/08/2018',
        _updatedDate: '06/20/2011',
        type: 2,
        _isEditMode: false,
        dueDate: '10/27/2019'
    }, {
        id: 60,
        carId: 20,
        text: 'adipiscing molestie hendrerit at vulputate',
        _userId: 1,
        _createdDate: '01/06/2013',
        _updatedDate: '09/08/2017',
        type: 2,
        _isEditMode: false,
        dueDate: '05/03/2020'
    }, {
        id: 61,
        carId: 21,
        text: 'sed tristique in tempus sit amet sem fusce consequat nulla nisl',
        _userId: 1,
        _createdDate: '01/05/2012',
        _updatedDate: '06/05/2014',
        type: 1,
        _isEditMode: false,
        dueDate: '04/06/2019'
    }, {
        id: 62,
        carId: 21,
        text: 'sem praesent id massa id nisl venenatis lacinia aenean sit',
        _userId: 2,
        _createdDate: '12/06/2014',
        _updatedDate: '12/23/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '02/05/2019'
    }, {
        id: 63,
        carId: 21,
        text: 'curabitur at ipsum ac tellus semper interdum',
        _userId: 2,
        _createdDate: '11/23/2014',
        _updatedDate: '04/10/2013',
        type: 0,
        _isEditMode: false,
        dueDate: '04/05/2020'
    }, {
        id: 64,
        carId: 22,
        text: 'donec ut mauris eget massa tempor convallis',
        _userId: 2,
        _createdDate: '10/16/2011',
        _updatedDate: '11/30/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '11/23/2019'
    }, {
        id: 65,
        carId: 22,
        text: 'in faucibus orci luctus et ultrices posuere',
        _userId: 1,
        _createdDate: '11/12/2011',
        _updatedDate: '12/16/2016',
        type: 2,
        _isEditMode: false,
        dueDate: '04/23/2019'
    }, {
        id: 66,
        carId: 22,
        text: 'ligula',
        _userId: 2,
        _createdDate: '12/30/2014',
        _updatedDate: '12/12/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '03/28/2019'
    }, {
        id: 67,
        carId: 23,
        text: 'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus',
        _userId: 1,
        _createdDate: '05/09/2014',
        _updatedDate: '05/28/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '11/25/2018'
    }, {
        id: 68,
        carId: 23,
        text: 'mollis molestie lorem quisque ut erat curabitur gravida nisi',
        _userId: 2,
        _createdDate: '12/07/2011',
        _updatedDate: '08/07/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '06/22/2019'
    }, {
        id: 69,
        carId: 23,
        text: 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque',
        _userId: 1,
        _createdDate: '11/15/2012',
        _updatedDate: '09/02/2015',
        type: 1,
        _isEditMode: false,
        dueDate: '10/30/2018'
    }, {
        id: 70,
        carId: 24,
        text: 'libero convallis',
        _userId: 1,
        _createdDate: '12/04/2010',
        _updatedDate: '09/25/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '11/25/2018'
    }, {
        id: 71,
        carId: 24,
        text: 'vitae nisi nam ultrices libero',
        _userId: 1,
        _createdDate: '02/24/2015',
        _updatedDate: '03/10/2011',
        type: 2,
        _isEditMode: false,
        dueDate: '04/17/2020'
    }, {
        id: 72,
        carId: 24,
        text: 'augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc',
        _userId: 1,
        _createdDate: '02/21/2012',
        _updatedDate: '12/09/2011',
        type: 2,
        _isEditMode: false,
        dueDate: '07/22/2019'
    }, {
        id: 73,
        carId: 25,
        text: 'id turpis integer aliquet massa id lobortis convallis tortor',
        _userId: 1,
        _createdDate: '01/20/2014',
        _updatedDate: '09/03/2014',
        type: 2,
        _isEditMode: false,
        dueDate: '01/10/2020'
    }, {
        id: 74,
        carId: 25,
        text: 'felis fusce posuere felis sed lacus morbi sem mauris laoreet',
        _userId: 1,
        _createdDate: '10/24/2014',
        _updatedDate: '02/19/2018',
        type: 1,
        _isEditMode: false,
        dueDate: '12/19/2019'
    }, {
        id: 75,
        carId: 25,
        text: 'neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim',
        _userId: 2,
        _createdDate: '02/19/2016',
        _updatedDate: '06/26/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '02/23/2020'
    }, {
        id: 76,
        carId: 26,
        text: 'nulla nunc purus phasellus in felis donec semper sapien a libero nam',
        _userId: 1,
        _createdDate: '07/29/2011',
        _updatedDate: '12/09/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '02/07/2020'
    }, {
        id: 77,
        carId: 26,
        text: 'elit sodales scelerisque',
        _userId: 2,
        _createdDate: '10/02/2012',
        _updatedDate: '05/05/2012',
        type: 0,
        _isEditMode: false,
        dueDate: '10/05/2019'
    }, {
        id: 78,
        carId: 26,
        text: 'sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel',
        _userId: 1,
        _createdDate: '01/27/2015',
        _updatedDate: '07/14/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '01/19/2019'
    }, {
        id: 79,
        carId: 27,
        text: 'augue vestibulum',
        _userId: 1,
        _createdDate: '09/19/2011',
        _updatedDate: '09/11/2014',
        type: 0,
        _isEditMode: false,
        dueDate: '03/08/2020'
    }, {
        id: 80,
        carId: 27,
        text: 'turpis nec euismod scelerisque',
        _userId: 2,
        _createdDate: '01/17/2014',
        _updatedDate: '03/04/2018',
        type: 1,
        _isEditMode: false,
        dueDate: '11/08/2019'
    }, {
        id: 81,
        carId: 27,
        text: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus',
        _userId: 1,
        _createdDate: '08/16/2015',
        _updatedDate: '02/21/2011',
        type: 1,
        _isEditMode: false,
        dueDate: '02/15/2019'
    }, {
        id: 82,
        carId: 28,
        text: 'ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend',
        _userId: 1,
        _createdDate: '03/07/2014',
        _updatedDate: '08/21/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '05/14/2019'
    }, {
        id: 83,
        carId: 28,
        text: 'curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue',
        _userId: 2,
        _createdDate: '09/20/2017',
        _updatedDate: '08/21/2014',
        type: 0,
        _isEditMode: false,
        dueDate: '07/07/2019'
    }, {
        id: 84,
        carId: 28,
        text: 'dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi',
        _userId: 2,
        _createdDate: '04/08/2017',
        _updatedDate: '08/17/2016',
        type: 1,
        _isEditMode: false,
        dueDate: '03/19/2019'
    }, {
        id: 85,
        carId: 29,
        text: 'interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus',
        _userId: 2,
        _createdDate: '04/30/2013',
        _updatedDate: '08/22/2013',
        type: 2,
        _isEditMode: false,
        dueDate: '03/23/2020'
    }, {
        id: 86,
        carId: 29,
        text: 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a',
        _userId: 2,
        _createdDate: '04/12/2014',
        _updatedDate: '03/06/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '02/17/2019'
    }, {
        id: 87,
        carId: 29,
        text: 'faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum',
        _userId: 2,
        _createdDate: '11/21/2016',
        _updatedDate: '08/21/2010',
        type: 1,
        _isEditMode: false,
        dueDate: '11/06/2019'
    }, {
        id: 88,
        carId: 30,
        text: 'nibh in hac habitasse platea dictumst',
        _userId: 1,
        _createdDate: '10/30/2011',
        _updatedDate: '03/07/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '12/02/2019'
    }, {
        id: 89,
        carId: 30,
        text: 'fusce lacus purus',
        _userId: 2,
        _createdDate: '09/02/2014',
        _updatedDate: '05/22/2015',
        type: 2,
        _isEditMode: false,
        dueDate: '10/13/2019'
    }, {
        id: 90,
        carId: 30,
        text: 'ultrices enim lorem ipsum dolor',
        _userId: 1,
        _createdDate: '12/21/2012',
        _updatedDate: '02/28/2018',
        type: 1,
        _isEditMode: false,
        dueDate: '12/08/2019'
    }, {
        id: 91,
        carId: 31,
        text: 'suspendisse accumsan tortor quis turpis',
        _userId: 1,
        _createdDate: '01/22/2014',
        _updatedDate: '01/26/2015',
        type: 2,
        _isEditMode: false,
        dueDate: '03/05/2019'
    }, {
        id: 92,
        carId: 31,
        text: 'sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa',
        _userId: 1,
        _createdDate: '12/20/2013',
        _updatedDate: '08/13/2016',
        type: 0,
        _isEditMode: false,
        dueDate: '09/03/2019'
    }, {
        id: 93,
        carId: 31,
        text: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis',
        _userId: 1,
        _createdDate: '07/08/2016',
        _updatedDate: '02/26/2013',
        type: 0,
        _isEditMode: false,
        dueDate: '01/22/2019'
    }, {
        id: 94,
        carId: 32,
        text: 'vitae nisi nam ultrices',
        _userId: 1,
        _createdDate: '02/21/2015',
        _updatedDate: '03/04/2017',
        type: 1,
        _isEditMode: false,
        dueDate: '01/05/2020'
    }, {
        id: 95,
        carId: 32,
        text: 'in tempus sit amet sem fusce consequat',
        _userId: 2,
        _createdDate: '09/15/2014',
        _updatedDate: '05/21/2017',
        type: 1,
        _isEditMode: false,
        dueDate: '03/31/2019'
    }, {
        id: 96,
        carId: 32,
        text: 'eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
        _userId: 2,
        _createdDate: '06/04/2014',
        _updatedDate: '08/12/2010',
        type: 0,
        _isEditMode: false,
        dueDate: '10/10/2019'
    }, {
        id: 97,
        carId: 33,
        text: 'eu pede',
        _userId: 2,
        _createdDate: '03/21/2011',
        _updatedDate: '07/18/2012',
        type: 2,
        _isEditMode: false,
        dueDate: '03/29/2020'
    }, {
        id: 98,
        carId: 33,
        text: 'tempus vivamus in felis eu sapien cursus vestibulum proin',
        _userId: 2,
        _createdDate: '09/17/2017',
        _updatedDate: '11/29/2013',
        type: 1,
        _isEditMode: false,
        dueDate: '04/01/2019'
    }, {
        id: 99,
        carId: 33,
        text: 'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
        _userId: 1,
        _createdDate: '03/27/2013',
        _updatedDate: '09/26/2014',
        type: 1,
        _isEditMode: false,
        dueDate: '09/14/2019'
    }, {
        id: 100,
        carId: 34,
        text: 'luctus et ultrices posuere cubilia curae nulla dapibus dolor vel',
        _userId: 2,
        _createdDate: '03/07/2017',
        _updatedDate: '08/14/2012',
        type: 0,
        _isEditMode: false,
        dueDate: '08/11/2019',
    }];


/***/ }),

/***/ "LtPJ":
/*!*********************************************!*\
  !*** ./src/app/_fake/fake-db/cars.table.ts ***!
  \*********************************************/
/*! exports provided: CarsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsTable", function() { return CarsTable; });
class CarsTable {
}
CarsTable.cars = [
    {
        id: 1,
        cModel: 'Elise',
        cManufacture: 'Lotus',
        cModelYear: 2004,
        cMileage: 116879,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lotus Elise first appeared in 1996 and revolutionised small sports car design with its lightweight extruded aluminium chassis and composite body. There have been many variations, but the basic principle remain the same.`,
        cColor: 'Red',
        cPrice: 18347,
        cCondition: 1,
        createdDate: '09/30/2017',
        cStatus: 0,
        cVINCode: '1FTWX3D52AE575540',
    },
    {
        id: 2,
        cModel: 'Sunbird',
        cManufacture: 'Pontiac',
        cModelYear: 1984,
        cMileage: 99515,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 cModel years,and later as a compact for the 1982 to 1994 cModel years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 cModel years, as the 1982 cModel was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        cColor: 'Khaki',
        cPrice: 165956,
        cCondition: 0,
        createdDate: '03/22/2018',
        cStatus: 1,
        cVINCode: 'JM1NC2EF8A0293556',
    },
    {
        id: 3,
        cModel: 'Amigo',
        cManufacture: 'Isuzu',
        cModelYear: 1993,
        cMileage: 138027,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Isuzu MU is a mid-size SUV that was produced by the Japan-based cManufacturer Isuzu. The three-door MU was introduced in 1989, followed in 1990 by the five-door version called Isuzu MU Wizard, both of which stopped production in 1998 to be replaced by a second generation. This time, the five-door version dropped the "MU" prefix, to become the Isuzu Wizard. The acronym "MU" is short for "Mysterious Utility". Isuzu cManufactured several variations to the MU and its derivates for sale in other countries.`,
        cColor: 'Aquamarine',
        cPrice: 45684,
        cCondition: 0,
        createdDate: '03/06/2018',
        cStatus: 0,
        cVINCode: '1G6DG8E56C0973889',
    },
    {
        id: 4,
        cModel: 'LS',
        cManufacture: 'Lexus',
        cModelYear: 2004,
        cMileage: 183068,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lexus LS (Japanese: レクサス・LS, Rekusasu LS) is a full-size luxury car (F-segment in Europe) serving as the flagship cModel of Lexus, the luxury division of Toyota. For the first four generations, all LS cModels featured V8 engines and were predominantly rear-wheel-drive, with Lexus also offering all-wheel-drive, hybrid, and long-wheelbase variants. The fifth generation changed to using a V6 engine with no V8 option, and the long wheelbase variant was removed entirely.`,
        cColor: 'Mauv',
        cPrice: 95410,
        cCondition: 1,
        createdDate: '02/03/2018',
        cStatus: 1,
        cVINCode: '2T1BU4EE6DC859114',
    },
    {
        id: 5,
        cModel: 'Paseo',
        cManufacture: 'Toyota',
        cModelYear: 1997,
        cMileage: 74884,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota Paseo (known as the Cynos in Japan and other regions) is a sports styled compact car sold from 1991–1999 and was loosely based on the Tercel. It was available as a coupe and in later cModels as a convertible. Toyota stopped selling the car in the United States in 1997, however the car continued to be sold in Canada, Europe and Japan until 1999, but had no direct replacement. The Paseo, like the Tercel, shares a platform with the Starlet. Several parts are interchangeable between the three`,
        cColor: 'Pink',
        cPrice: 24796,
        cCondition: 1,
        createdDate: '08/13/2017',
        cStatus: 0,
        cVINCode: '1D7RB1GP0AS597432',
    },
    {
        id: 6,
        cModel: 'M',
        cManufacture: 'Infiniti',
        cModelYear: 2009,
        cMileage: 194846,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Infiniti M is a line of mid-size luxury (executive) cars from the Infiniti luxury division of Nissan.\r\nThe first iteration was the M30 Coupe/Convertible, which were rebadged JDM Nissan Leopard.\r\nAfter a long hiatus, the M nameplate was used for Infiniti's mid-luxury sedans (executive cars). First was the short-lived M45 sedan, a rebadged version of the Japanese-spec Nissan Gloria. The next generations, the M35/45 and M37/56/35h/30d, became the flagship of the Infiniti brand and are based on the JDM Nissan Fuga.`,
        cColor: 'Puce',
        cPrice: 30521,
        cCondition: 1,
        createdDate: '01/27/2018',
        cStatus: 0,
        cVINCode: 'YV1940AS1D1542424',
    },
    {
        id: 7,
        cModel: 'Phantom',
        cManufacture: 'Rolls-Royce',
        cModelYear: 2008,
        cMileage: 164124,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Rolls-Royce Phantom VIII is a luxury saloon car cManufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of Rolls-Royce Phantom, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths`,
        cColor: 'Purple',
        cPrice: 196247,
        cCondition: 1,
        createdDate: '09/28/2017',
        cStatus: 1,
        cVINCode: '3VWML7AJ1DM234625',
    },
    {
        id: 8,
        cModel: 'QX',
        cManufacture: 'Infiniti',
        cModelYear: 2002,
        cMileage: 57410,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Infiniti QX80 (called the Infiniti QX56 until 2013) is a full-size luxury SUV built by Nissan Motor Company's Infiniti division. The naming convention originally adhered to the current trend of using a numeric designation derived from the engine's displacement, thus QX56 since the car has a 5.6-liter engine. From the 2014 cModel year, the car was renamed the QX80, as part of Infiniti's cModel name rebranding. The new name carries no meaning beyond suggesting that the vehicle is larger than smaller cModels such as the QX60`,
        cColor: 'Green',
        cPrice: 185775,
        cCondition: 1,
        createdDate: '11/15/2017',
        cStatus: 0,
        cVINCode: 'WDDHF2EB9CA161524',
    },
    {
        id: 9,
        cModel: 'Daytona',
        cManufacture: 'Dodge',
        cModelYear: 1993,
        cMileage: 4444,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Dodge Daytona was an automobile which was produced by the Chrysler Corporation under their Dodge division from 1984 to 1993. It was a front-wheel drive hatchback based on the Chrysler G platform, which was derived from the Chrysler K platform. The Chrysler Laser was an upscale rebadged version of the Daytona. The Daytona was restyled for 1987, and again for 1992. It replaced the Mitsubishi Galant-based Challenger, and slotted between the Charger and the Conquest. The Daytona was replaced by the 1995 Dodge Avenger, which was built by Mitsubishi Motors. The Daytona derives its name mainly from the Dodge Charger Daytona, which itself was named after the Daytona 500 race in Daytona Beach, Florida.`,
        cColor: 'Maroon',
        cPrice: 171898,
        cCondition: 0,
        createdDate: '12/24/2017',
        cStatus: 1,
        cVINCode: 'WBAET37422N752051',
    },
    {
        id: 10,
        cModel: '1500 Silverado',
        cManufacture: 'Chevrolet',
        cModelYear: 1999,
        cMileage: 195310,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Chevrolet Silverado, and its mechanically identical cousin, the GMC Sierra, are a series of full-size and heavy-duty pickup trucks cManufactured by General Motors and introduced in 1998 as the successor to the long-running Chevrolet C/K line. The Silverado name was taken from a trim level previously used on its predecessor, the Chevrolet C/K pickup truck from 1975 through 1998. General Motors continues to offer a GMC-badged variant of the Chevrolet full-size pickup under the GMC Sierra name, first used in 1987 for its variant of the GMT400 platform trucks.`,
        cColor: 'Blue',
        cPrice: 25764,
        cCondition: 0,
        createdDate: '08/30/2017',
        cStatus: 1,
        cVINCode: '1N6AF0LX6EN590806',
    },
    {
        id: 11,
        cModel: 'CTS',
        cManufacture: 'Cadillac',
        cModelYear: 2012,
        cMileage: 170862,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Cadillac CTS is a mid-size luxury car / executive car designed, engineered, cManufactured and marketed by General Motors, and now in its third generation. \r\nInitially available only as a 4-door sedan on the GM Sigma platform, GM had offered the second generation CTS in three body styles: 4-door sedan, 2-door coupe, and 5-door sport wagon also using the Sigma platform — and the third generation in coupe and sedan configurations, using a stretched version of the GM Alpha platform.\r\nWayne Cherry and Kip Wasenko designed the exterior of the first generation CTS, marking the production debut of a design language (marketed as "Art and Science") first seen on the Evoq concept car. Bob Boniface and Robin Krieg designed the exterior of the third generation CTS`,
        cColor: 'Crimson',
        cPrice: 80588,
        cCondition: 0,
        createdDate: '02/15/2018',
        cStatus: 0,
        cVINCode: '1G4HR54KX4U506530',
    },
    {
        id: 12,
        cModel: 'Astro',
        cManufacture: 'Chevrolet',
        cModelYear: 1995,
        cMileage: 142137,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Chevrolet Astro was a rear-wheel drive van/minivan cManufactured and marketed by the American automaker Chevrolet from 1985 to 2005 and over two build generations. Along with its rebadged variant, the GMC Safari, the Astro was marketed in passenger as well as cargo and livery configurations—featuring a V6 engine, unibody construction with a separate front engine/suspension sub-frame, leaf-spring rear suspension, rear bi-parting doors, and a seating capacity of up to eight passengers`,
        cColor: 'Teal',
        cPrice: 72430,
        cCondition: 1,
        createdDate: '07/31/2017',
        cStatus: 0,
        cVINCode: 'KMHGH4JH2DU676107',
    },
    {
        id: 13,
        cModel: 'XL7',
        cManufacture: 'Suzuki',
        cModelYear: 2009,
        cMileage: 165165,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Suzuki XL-7 (styled as XL7 for the second generation) is Suzuki's mid-sized SUV that was made from 1998 to 2009, over two generations. It was slotted above the Grand Vitara in Suzuki's lineup.`,
        cColor: 'Puce',
        cPrice: 118667,
        cCondition: 0,
        createdDate: '02/04/2018',
        cStatus: 0,
        cVINCode: '1N6AF0LX9EN733005',
    },
    {
        id: 14,
        cModel: 'SJ 410',
        cManufacture: 'Suzuki',
        cModelYear: 1984,
        cMileage: 176074,
        // tslint:disable-next-line:max-line-length
        cDescription: `The SJ-Series was introduced to the United States (Puerto Rico (SJ-410) and Canada earlier) in 1985 for the 1986 cModel year. It was cPriced at $6200 and 47,000 were sold in its first year. The Samurai had a 1.3 liter, 63 hp (47 kW), 4-cylinder engine and was available as a convertible or a hardtop, and with or without a rear seat. The Suzuki Samurai became intensely popular within the serious 4WD community for its good off-road performance and reliability compared to other 4WDs of the time. This is due to the fact that while very compact and light, it is a real 4WD vehicle equipped with a transfer case, switchable 4WD and low range. Its lightness makes it a very nimble off-roader less prone to sinking in softer ground than heavier types. It is also considered a great beginner off-roader due to its simple design and ease of engine and suspension modifications.`,
        cColor: 'Orange',
        cPrice: 84325,
        cCondition: 0,
        createdDate: '12/22/2017',
        cStatus: 0,
        cVINCode: '2C3CDYBT6DH183756',
    },
    {
        id: 15,
        cModel: 'F-Series',
        cManufacture: 'Ford',
        cModelYear: 1995,
        cMileage: 53030,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Ford F-Series is a series of light-duty trucks and medium-duty trucks (Class 2-7) that have been marketed and cManufactured by Ford Motor Company since 1948. While most variants of the F-Series trucks are full-size pickup trucks, the F-Series also includes chassis cab trucks and commercial vehicles. The Ford F-Series has been the best-selling vehicle in the United States since 1986 and the best-selling pickup since 1977.[1][2] It is also the best selling vehicle in Canada.[3] As of the 2018 cModel year, the F-Series generates $41.0 billion in annual revenue for Ford, making the F-Series brand more valuable than Coca-Cola and Nike.`,
        cColor: 'Aquamarine',
        cPrice: 77108,
        cCondition: 0,
        createdDate: '01/09/2018',
        cStatus: 0,
        cVINCode: 'WBAVB33526P873481',
    },
    {
        id: 16,
        cModel: 'HS',
        cManufacture: 'Lexus',
        cModelYear: 2011,
        cMileage: 84718,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lexus HS (Japanese: レクサス・HS, Rekusasu HS) is a dedicated hybrid vehicle introduced by Lexus as a new entry-level luxury compact sedan in 2009.[2] Built on the Toyota New MC platform,[3] it is classified as a compact under Japanese regulations concerning vehicle exterior dimensions and engine displacement. Unveiled at the North American International Auto Show in January 2009, the HS 250h went on sale in July 2009 in Japan, followed by the United States in August 2009 as a 2010 cModel. The HS 250h represented the first dedicated hybrid vehicle in the Lexus lineup, as well as the first offered with an inline-four gasoline engine.[4] Bioplastic materials are used for the vehicle interior.[5] With a total length of 184.8 inches, the Lexus HS is slightly larger than the Lexus IS, but still smaller than the mid-size Lexus ES.`,
        cColor: 'Purple',
        cPrice: 140170,
        cCondition: 0,
        createdDate: '11/14/2017',
        cStatus: 1,
        cVINCode: '1FTWF3A56AE545514',
    },
    {
        id: 17,
        cModel: 'Land Cruiser',
        cManufacture: 'Toyota',
        cModelYear: 2008,
        cMileage: 157019,
        // tslint:disable-next-line:max-line-length
        cDescription: `Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle.[2][3] The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle.[4] Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.`,
        cColor: 'Crimson',
        cPrice: 72638,
        cCondition: 1,
        createdDate: '08/08/2017',
        cStatus: 1,
        cVINCode: '3C3CFFDR2FT957799',
    },
    {
        id: 18,
        cModel: 'Wrangler',
        cManufacture: 'Jeep',
        cModelYear: 1994,
        cMileage: 55857,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Jeep Wrangler is a series of compact and mid-size (Wrangler Unlimited and Wrangler 4-door JL) four-wheel drive off-road vehicle cModels, cManufactured by Jeep since 1986, and currently migrating from its third into its fourth generation. The Wrangler JL was unveiled in late 2017 and will be produced at Jeep's Toledo Complex.`,
        cColor: 'Red',
        cPrice: 193523,
        cCondition: 0,
        createdDate: '02/28/2018',
        cStatus: 1,
        cVINCode: '3C4PDCAB7FT652291',
    },
    {
        id: 19,
        cModel: 'Sunbird',
        cManufacture: 'Pontiac',
        cModelYear: 1994,
        cMileage: 165202,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 cModel years, and later as a compact for the 1982 to 1994 cModel years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 cModel years, as the 1982 cModel was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        cColor: 'Blue',
        cPrice: 198739,
        cCondition: 0,
        createdDate: '05/13/2017',
        cStatus: 1,
        cVINCode: '1GD22XEG9FZ103872',
    },
    {
        id: 20,
        cModel: 'A4',
        cManufacture: 'Audi',
        cModelYear: 1998,
        cMileage: 117958,
        // tslint:disable-next-line:max-line-length
        cDescription: `The A4 has been built in five generations and is based on the Volkswagen Group B platform. The first generation A4 succeeded the Audi 80. The automaker's internal numbering treats the A4 as a continuation of the Audi 80 lineage, with the initial A4 designated as the B5-series, followed by the B6, B7, B8 and the B9. The B8 and B9 versions of the A4 are built on the Volkswagen Group MLB platform shared with many other Audi cModels and potentially one Porsche cModel within Volkswagen Group`,
        cColor: 'Yellow',
        cPrice: 159377,
        cCondition: 0,
        createdDate: '12/15/2017',
        cStatus: 1,
        cVINCode: '2C3CDXCT2FH350366',
    },
    {
        id: 21,
        cModel: 'Camry Solara',
        cManufacture: 'Toyota',
        cModelYear: 2006,
        cMileage: 22436,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota Camry Solara, popularly known as the Toyota Solara, is a mid-size coupe/convertible built by Toyota. The Camry Solara is mechanically based on the Toyota Camry and effectively replaced the discontinued Camry Coupe (XV10); however, in contrast with its predecessor's conservative design, the Camry Solara was designed with a greater emphasis on sportiness, with more rakish styling, and uprated suspension and engine tuning intended to provide a sportier feel.[5] The coupe was launched in late 1998 as a 1999 cModel.[1] In 2000, the convertible was introduced, effectively replacing the Celica convertible in Toyota's North American lineup`,
        cColor: 'Green',
        cPrice: 122562,
        cCondition: 0,
        createdDate: '07/11/2017',
        cStatus: 0,
        cVINCode: '3C3CFFHH6DT874066',
    },
    {
        id: 22,
        cModel: 'Tribeca',
        cManufacture: 'Subaru',
        cModelYear: 2007,
        cMileage: 127958,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Subaru Tribeca is a mid-size crossover SUV made from 2005 to 2014. Released in some markets, including Canada, as the Subaru B9 Tribeca, the name "Tribeca" derives from the Tribeca neighborhood of New York City.[1] Built on the Subaru Legacy platform and sold in five- and seven-seat configurations, the Tribeca was intended to be sold alongside a slightly revised version known as the Saab 9-6. Saab, at the time a subsidiary of General Motors (GM), abandoned the 9-6 program just prior to its release subsequent to GM's 2005 divestiture of its 20 percent stake in FHI.`,
        cColor: 'Yellow',
        cPrice: 90221,
        cCondition: 1,
        createdDate: '11/12/2017',
        cStatus: 0,
        cVINCode: 'WVWGU7AN9AE957575',
    },
    {
        id: 23,
        cModel: '1500 Club Coupe',
        cManufacture: 'GMC',
        cModelYear: 1997,
        cMileage: 95783,
        // tslint:disable-next-line:max-line-length
        cDescription: `GMC (General Motors Truck Company), formally the GMC Division of General Motors LLC, is a division of the American automobile cManufacturer General Motors (GM) that primarily focuses on trucks and utility vehicles. GMC sells pickup and commercial trucks, buses, vans, military vehicles, and sport utility vehicles marketed worldwide by General Motors.`,
        cColor: 'Teal',
        cPrice: 64376,
        cCondition: 1,
        createdDate: '06/28/2017',
        cStatus: 0,
        cVINCode: 'SCFBF04BX7G920997',
    },
    {
        id: 24,
        cModel: 'Firebird',
        cManufacture: 'Pontiac',
        cModelYear: 2002,
        cMileage: 74063,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Firebird is an American automobile built by Pontiac from the 1967 to the 2002 cModel years. Designed as a pony car to compete with the Ford Mustang, it was introduced 23 February 1967, the same cModel year as GM's Chevrolet division platform-sharing Camaro.[1] This also coincided with the release of the 1967 Mercury Cougar, Ford's upscale, platform-sharing version of the Mustang. The name "Firebird" was also previously used by GM for the General Motors Firebird 1950s and early-1960s`,
        cColor: 'Puce',
        cPrice: 94178,
        cCondition: 1,
        createdDate: '09/13/2017',
        cStatus: 0,
        cVINCode: '3C63D2JL5CG563879',
    },
    {
        id: 25,
        cModel: 'RAV4',
        cManufacture: 'Toyota',
        cModelYear: 1996,
        cMileage: 99461,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota RAV4 (Japanese: トヨタ RAV4 Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile cManufacturer Toyota. This was the first compact crossover SUV;[1] it made its debut in Japan and Europe in 1994,[2] and in North America in 1995. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel-drive, RAV4 stands for "Recreational Activity Vehicle: 4-wheel drive", because the aforementioned equipment is an option in select countries`,
        cColor: 'Goldenrod',
        cPrice: 48342,
        cCondition: 0,
        createdDate: '12/29/2017',
        cStatus: 0,
        cVINCode: '2C4RDGDG6DR836144',
    },
    {
        id: 26,
        cModel: 'Amanti / Opirus',
        cManufacture: 'Kia',
        cModelYear: 2007,
        cMileage: 189651,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Kia Opirus was an executive car cManufactured and marketed by Kia Motors that was launched in April 2003 and was marketed globally under various nameplates, prominently as the Amanti. It was considered to be Kia's flagship vehicle.`,
        cColor: 'Indigo',
        cPrice: 44292,
        cCondition: 1,
        createdDate: '09/01/2017',
        cStatus: 1,
        cVINCode: '1C4SDHCT2CC055294',
    },
    {
        id: 27,
        cModel: 'S60',
        cManufacture: 'Volvo',
        cModelYear: 2001,
        cMileage: 78963,
        // tslint:disable-next-line:max-line-length
        cDescription: `First introduced in 2004, Volvo's S60 R used a Haldex all-wheel-drive system mated to a 300 PS (221 kW; 296 hp) / 400 N⋅m (300 lbf⋅ft) inline-5. The 2004–2005 cModels came with a 6-speed manual transmission, or an available 5-speed automatic which allowed only 258 lb⋅ft (350 N⋅m) torque in 1st and 2nd gears. The 2006–2007 cModels came with a 6-speed manual or 6-speed automatic transmission (which was no longer torque-restricted)`,
        cColor: 'Goldenrod',
        cPrice: 9440,
        cCondition: 0,
        createdDate: '11/06/2017',
        cStatus: 0,
        cVINCode: '3C6TD5CT5CG316067',
    },
    {
        id: 28,
        cModel: 'Grand Marquis',
        cManufacture: 'Mercury',
        cModelYear: 1984,
        cMileage: 153027,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Mercury Grand Marquis is an automobile that was sold by the Mercury division of Ford Motor Company from 1975 to 2011. From 1975 to 1982, it was the premium cModel of the Mercury Marquis cModel line, becoming a standalone cModel line in 1983. For its entire production run, the Grand Marquis served as the flagship of the Mercury line, with the Ford (LTD) Crown Victoria serving as its Ford counterpart. In addition, from 1979 to 2011, the Grand Marquis shared the rear-wheel drive Panther platform alongside the Lincoln Town Car`,
        cColor: 'Goldenrod',
        cPrice: 76027,
        cCondition: 0,
        createdDate: '12/16/2017',
        cStatus: 1,
        cVINCode: '3C3CFFJH2DT871398',
    },
    {
        id: 29,
        cModel: 'Talon',
        cManufacture: 'Eagle',
        cModelYear: 1991,
        cMileage: 111234,
        // tslint:disable-next-line:max-line-length
        cDescription: `Cosmetically, differences between the three were found in wheels, availability of cColors, tail lights, front and rear bumpers, and spoilers. The Talon featured two-tone body cColor with a black 'greenhouse' (roof, pillars, door-mounted mirrors) regardless of the body cColor. The variants featured 5-speed manual or 4-speed automatic transmissions and a hood bulge on the left-hand side of the car in order for camshaft clearance on the 4G63 engine. The base cModel DL did not use this engine but still had a bulge as evident in the 1992 Talon brochure. 2nd Generation cars all had such a bulge, even with the inclusion of the 420A engine`,
        cColor: 'Teal',
        cPrice: 157216,
        cCondition: 0,
        createdDate: '05/08/2017',
        cStatus: 1,
        cVINCode: 'YV1902FH1D2957659',
    },
    {
        id: 30,
        cModel: 'Passport',
        cManufacture: 'Honda',
        cModelYear: 2002,
        cMileage: 3812,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Passport was a part of a partnership between Isuzu and Honda in the 1990s, which saw an exchange of passenger vehicles from Honda to Isuzu, such as the Isuzu Oasis, and trucks from Isuzu to Honda, such as the Passport and Acura SLX. This arrangement was convenient for both companies, as Isuzu discontinued passenger car production in 1993 after a corporate restructuring, and Honda was in desperate need a SUV, a segment that was growing in popularity in North America as well as Japan during the 1990s. The partnership ended in 2002 with the discontinuation of the Passport in favor of the Honda-engineered Pilot`,
        cColor: 'Puce',
        cPrice: 41299,
        cCondition: 1,
        createdDate: '03/08/2018',
        cStatus: 0,
        cVINCode: 'WVWEU9AN4AE524071',
    },
    {
        id: 31,
        cModel: 'H3',
        cManufacture: 'Hummer',
        cModelYear: 2006,
        cMileage: 196321,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Hummer H3 is a sport utility vehicle/off-road vehicle from Hummer that was produced from 2005 to 2010. Introduced for the 2006 cModel year, it was based on a highly modified GMT355 underpinning the Chevrolet cColorado/GMC Canyon compact pickup trucks that were also built at GM's Shreveport Operations in Shreveport, Louisiana and the Port Elizabeth plant in South Africa. The H3 was actually the smallest among the Hummer cModels. It was available either as a traditional midsize SUV or as a midsize pickup known as the H3T`,
        cColor: 'Pink',
        cPrice: 186964,
        cCondition: 1,
        createdDate: '06/04/2017',
        cStatus: 1,
        cVINCode: '4T1BF1FK4FU746230',
    },
    {
        id: 32,
        cModel: 'Comanche',
        cManufacture: 'Jeep',
        cModelYear: 1992,
        cMileage: 72285,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Jeep Comanche (designated MJ) is a pickup truck variant of the Cherokee compact SUV (1984–2001)[3] cManufactured and marketed by Jeep for cModel years 1986-1992 in rear wheel (RWD) and four-wheel drive (4WD) cModels as well as two cargo bed lengths: six-feet (1.83 metres) and seven-feet (2.13 metres)`,
        cColor: 'Mauv',
        cPrice: 145971,
        cCondition: 1,
        createdDate: '09/01/2017',
        cStatus: 0,
        cVINCode: '1J4PN2GK1BW745045',
    },
    {
        id: 33,
        cModel: 'Blazer',
        cManufacture: 'Chevrolet',
        cModelYear: 1993,
        cMileage: 189804,
        // tslint:disable-next-line:max-line-length
        cDescription: `The 2014 – 2nd generation, MY14 Duramax 2.8L diesel engines have several new parts, namely a new water-cooled variable-geometry turbocharger, a new high-pressure common-rail fuel delivery system, a new exhaust gas recirculation (EGR) system, a new intake manifold, a new cylinder head, a new cylinder block, a new balance shaft unit and a new Engine Control Module (ECM). and now produce 197 hp and 369 Ft/Lbs of torque`,
        cColor: 'Indigo',
        cPrice: 154594,
        cCondition: 0,
        createdDate: '09/13/2017',
        cStatus: 0,
        cVINCode: '1G6KD57Y43U482896',
    },
    {
        id: 34,
        cModel: 'Envoy XUV',
        cManufacture: 'GMC',
        cModelYear: 2004,
        cMileage: 187960,
        // tslint:disable-next-line:max-line-length
        cDescription: `The GMC Envoy is a mid-size SUV that was produced by General Motors. It was introduced for the 1998 cModel year. After the first generation Envoy was discontinued after the 2000 cModel year, but the Envoy was reintroduced and redesigned for the 2002 cModel year, and it was available in the GMC line of vehicles from the 2002 to 2009 cModel years`,
        cColor: 'Turquoise',
        cPrice: 185103,
        cCondition: 1,
        createdDate: '12/07/2017',
        cStatus: 0,
        cVINCode: '5GAER23D09J658030',
    },
];


/***/ }),

/***/ "ONK0":
/*!**********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
  \**********************************************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");




class SplashScreenService {
    /**
     * Service constructor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped || !this.el) {
            return;
        }
        const player = this.animationBuilder
            .build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))])
            .create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none !important';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 100);
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"])); };
SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }]; }, null); })();


/***/ }),

/***/ "QWUF":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/jp.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Japan
const locale = {
    lang: 'jp',
    data: {
        TRANSLATOR: {
            SELECT: 'あなたが使う言語を選んでください',
        },
        MENU: {
            NEW: '新しい',
            ACTIONS: '行動',
            CREATE_POST: '新しい投稿を作成',
            PAGES: 'Pages',
            FEATURES: '特徴',
            APPS: 'アプリ',
            DASHBOARD: 'ダッシュボード',
        },
        AUTH: {
            GENERAL: {
                OR: 'または',
                SUBMIT_BUTTON: '提出する',
                NO_ACCOUNT: 'アカウントを持っていない？',
                SIGNUP_BUTTON: 'サインアップ',
                FORGOT_BUTTON: 'パスワードをお忘れですか',
                BACK_BUTTON: 'バック',
                PRIVACY: 'プライバシー',
                LEGAL: '法的',
                CONTACT: '接触',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'ユーザー名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "QnJH":
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SplashScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenModule", function() { return SplashScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.component */ "2ndO");




class SplashScreenModule {
}
SplashScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplashScreenModule });
SplashScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplashScreenModule_Factory(t) { return new (t || SplashScreenModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplashScreenModule, { declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "R3gj":
/*!**********************************************!*\
  !*** ./src/app/_fake/fake-db/users.table.ts ***!
  \**********************************************/
/*! exports provided: UsersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
class UsersTable {
}
UsersTable.users = [
    {
        id: 1,
        username: 'admin',
        password: 'demo',
        email: 'admin@demo.com',
        accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
        refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
        roles: [1],
        pic: './assets/media/users/300_25.jpg',
        fullname: 'Sean S',
        firstname: 'Sean',
        lastname: 'Stark',
        occupation: 'CEO',
        companyName: 'Keenthemes',
        phone: '456669067890',
        language: 'en',
        timeZone: 'International Date Line West',
        website: 'https://keenthemes.com',
        emailSettings: {
            emailNotification: true,
            sendCopyToPersonalEmail: false,
            activityRelatesEmail: {
                youHaveNewNotifications: false,
                youAreSentADirectMessage: false,
                someoneAddsYouAsAsAConnection: true,
                uponNewOrder: false,
                newMembershipApproval: false,
                memberRegistration: true
            },
            updatesFromKeenthemes: {
                newsAboutKeenthemesProductsAndFeatureUpdates: false,
                tipsOnGettingMoreOutOfKeen: false,
                thingsYouMissedSindeYouLastLoggedIntoKeen: true,
                newsAboutMetronicOnPartnerProductsAndOtherServices: true,
                tipsOnMetronicBusinessProducts: true
            },
        },
        communication: {
            email: true,
            sms: true,
            phone: false
        },
        address: {
            addressLine: 'L-12-20 Vertex, Cybersquare',
            city: 'San Francisco',
            state: 'California',
            postCode: '45000',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/admin',
            facebook: 'https://facebook.com/admin',
            twitter: 'https://twitter.com/admin',
            instagram: 'https://instagram.com/admin',
        },
    },
    {
        id: 2,
        username: 'user',
        password: 'demo',
        email: 'user@demo.com',
        accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
        refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
        roles: [2],
        pic: './assets/media/users/100_2.jpg',
        fullname: 'Megan F',
        firstname: 'Megan',
        lastname: 'Fox',
        occupation: 'Deputy Head of Keenthemes in New York office',
        companyName: 'Keenthemes',
        phone: '456669067891',
        language: 'en',
        timeZone: 'International Date Line West',
        communication: {
            email: true,
            sms: true,
            phone: false
        },
        emailSettings: {
            emailNotification: true,
            sendCopyToPersonalEmail: false,
            activityRelatesEmail: {
                youHaveNewNotifications: false,
                youAreSentADirectMessage: false,
                someoneAddsYouAsAsAConnection: true,
                uponNewOrder: false,
                newMembershipApproval: false,
                memberRegistration: true
            },
            updatesFromKeenthemes: {
                newsAboutKeenthemesProductsAndFeatureUpdates: false,
                tipsOnGettingMoreOutOfKeen: false,
                thingsYouMissedSindeYouLastLoggedIntoKeen: true,
                newsAboutMetronicOnPartnerProductsAndOtherServices: true,
                tipsOnMetronicBusinessProducts: true
            },
        },
        address: {
            addressLine: '3487  Ingram Road',
            city: 'Greensboro',
            state: 'North Carolina',
            postCode: '27409',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/user',
            facebook: 'https://facebook.com/user',
            twitter: 'https://twitter.com/user',
            instagram: 'https://instagram.com/user',
        },
    },
    {
        id: 3,
        username: 'guest',
        password: 'demo',
        email: 'guest@demo.com',
        accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
        refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
        roles: [3],
        pic: './assets/media/users/default.jpg',
        fullname: 'Manu G',
        firstname: 'Manu',
        lastname: 'Ginobili',
        occupation: 'CFO',
        companyName: 'Keenthemes',
        phone: '456669067892',
        language: 'en',
        timeZone: 'International Date Line West',
        communication: {
            email: true,
            sms: true,
            phone: false
        },
        emailSettings: {
            emailNotification: true,
            sendCopyToPersonalEmail: false,
            activityRelatesEmail: {
                youHaveNewNotifications: false,
                youAreSentADirectMessage: false,
                someoneAddsYouAsAsAConnection: true,
                uponNewOrder: false,
                newMembershipApproval: false,
                memberRegistration: true
            },
            updatesFromKeenthemes: {
                newsAboutKeenthemesProductsAndFeatureUpdates: false,
                tipsOnGettingMoreOutOfKeen: false,
                thingsYouMissedSindeYouLastLoggedIntoKeen: true,
                newsAboutMetronicOnPartnerProductsAndOtherServices: true,
                tipsOnMetronicBusinessProducts: true
            },
        },
        address: {
            addressLine: '1467  Griffin Street',
            city: 'Phoenix',
            state: 'Arizona',
            postCode: '85012',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/guest',
            facebook: 'https://facebook.com/guest',
            twitter: 'https://twitter.com/guest',
            instagram: 'https://instagram.com/guest',
        },
    },
];
UsersTable.tokens = [
    {
        id: 1,
        accessToken: 'access-token-' + Math.random(),
        refreshToken: 'access-token-' + Math.random(),
    },
];


/***/ }),

/***/ "RbrB":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/crud-table.module.ts ***!
  \******************************************************************/
/*! exports provided: CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return CRUDTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "gBr1");
/* harmony import */ var _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paginator/ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");








class CRUDTableModule {
}
CRUDTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CRUDTableModule });
CRUDTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CRUDTableModule_Factory(t) { return new (t || CRUDTableModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CRUDTableModule, { declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]], exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CRUDTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]],
                exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "SBCs":
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NgPaginationEllipsis, NgPaginationFirst, NgPaginationLast, NgPaginationNext, NgPaginationNumber, NgPaginationPrevious, NgPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationEllipsis", function() { return NgPaginationEllipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationFirst", function() { return NgPaginationFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationLast", function() { return NgPaginationLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNext", function() { return NgPaginationNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNumber", function() { return NgPaginationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationPrevious", function() { return NgPaginationPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPagination", function() { return NgPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-pagination.config */ "51MP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts




function NgPagination_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function NgPagination_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function NgPagination_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function NgPagination_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function NgPagination_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "...");
} }
function NgPagination_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgPagination_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_template_10_span_1_Template, 2, 0, "span", 15);
} if (rf & 2) {
    const page_r17 = ctx.$implicit;
    const currentPage_r18 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r17 === currentPage_r18);
} }
function NgPagination_a_12_ng_template_1_Template(rf, ctx) { }
const _c10 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function NgPagination_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_12_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r21.selectPage(1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_12_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r12.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r12.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r12.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r12.tplFirst == null ? null : ctx_r12.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r12.previousDisabled(), ctx_r12.page));
} }
function NgPagination_a_13_ng_template_1_Template(rf, ctx) { }
const _c13 = function (a0) { return { disabled: a0 }; };
function NgPagination_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_13_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r24.selectPage(ctx_r24.page - 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_13_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r13.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r13.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r13.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r13.tplPrevious == null ? null : ctx_r13.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c13, ctx_r13.previousDisabled()));
} }
function NgPagination_ng_container_14_a_1_ng_template_1_Template(rf, ctx) { }
const _c14 = function (a1) { return { disabled: true, currentPage: a1 }; };
function NgPagination_ng_container_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r27.page)("disabled", ctx_r27.isEllipsis(pageNumber_r26) || ctx_r27.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", pageNumber_r26 === ctx_r27.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c14, ctx_r27.page));
} }
function NgPagination_ng_container_14_a_2_ng_template_1_Template(rf, ctx) { }
const _c15 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function NgPagination_ng_container_14_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_ng_container_14_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r32.selectPage(pageNumber_r26); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_2_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r28.page)("disabled", ctx_r28.isEllipsis(pageNumber_r26) || ctx_r28.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r28.disabled ? "-1" : null)("aria-disabled", ctx_r28.disabled ? "true" : null)("aria-current", pageNumber_r26 === ctx_r28.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c15, ctx_r28.disabled, pageNumber_r26, ctx_r28.page));
} }
function NgPagination_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_Template, 2, 9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_container_14_a_2_Template, 2, 13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isEllipsis(pageNumber_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.isEllipsis(pageNumber_r26));
} }
function NgPagination_a_15_ng_template_1_Template(rf, ctx) { }
function NgPagination_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_15_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r37.selectPage(ctx_r37.page + 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_15_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r15.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r15.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r15.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r15.tplNext == null ? null : ctx_r15.tplNext.templateRef) || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r15.nextDisabled(), ctx_r15.page));
} }
function NgPagination_a_16_ng_template_1_Template(rf, ctx) { }
function NgPagination_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_16_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r40.selectPage(ctx_r40.pageCount); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_16_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r16.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r16.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r16.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r16.tplLast == null ? null : ctx_r16.tplLast.templateRef) || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r16.nextDisabled(), ctx_r16.page));
} }
function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
class NgPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationEllipsis.ɵfac = function NgPaginationEllipsis_Factory(t) { return new (t || NgPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationEllipsis.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationEllipsis, selectors: [["ng-template", "ngPaginationEllipsis", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationEllipsis, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationEllipsis]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
class NgPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationFirst.ɵfac = function NgPaginationFirst_Factory(t) { return new (t || NgPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationFirst.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationFirst, selectors: [["ng-template", "ngPaginationFirst", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationFirst, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationFirst]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
class NgPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationLast.ɵfac = function NgPaginationLast_Factory(t) { return new (t || NgPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationLast.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationLast, selectors: [["ng-template", "ngPaginationLast", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationLast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationLast]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
class NgPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNext.ɵfac = function NgPaginationNext_Factory(t) { return new (t || NgPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNext, selectors: [["ng-template", "ngPaginationNext", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNext]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
class NgPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNumber.ɵfac = function NgPaginationNumber_Factory(t) { return new (t || NgPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNumber.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNumber, selectors: [["ng-template", "ngPaginationNumber", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNumber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNumber]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
class NgPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationPrevious.ɵfac = function NgPaginationPrevious_Factory(t) { return new (t || NgPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationPrevious, selectors: [["ng-template", "ngPaginationPrevious", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationPrevious]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
class NgPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
}
NgPagination.ɵfac = function NgPagination_Factory(t) { return new (t || NgPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"])); };
NgPagination.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgPagination, selectors: [["ng-pagination"]], contentQueries: function NgPagination_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationEllipsis, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationFirst, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationLast, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNext, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNumber, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationPrevious, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
    } }, hostAttrs: ["role", "navigation"], inputs: { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_1 = goog.getMsg("First");
        i18n_0 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_3 = goog.getMsg("Previous");
        i18n_2 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_5 = goog.getMsg("Next");
        i18n_4 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_7 = goog.getMsg("Last");
        i18n_6 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9 = goog.getMsg("First");
        i18n_8 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__12 = goog.getMsg("Previous");
        i18n_11 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__17 = goog.getMsg("Next");
        i18n_16 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__19 = goog.getMsg("Last");
        i18n_18 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["aria-label", i18n_0, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf"], ["aria-label", i18n_2, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["aria-label", i18n_4, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf"], ["aria-label", i18n_6, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-next", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-next", "icon-xs"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["aria-label", i18n_8, "href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", i18n_11, "href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", "tabindex", "-1", "aria-disabled", "true", 3, "active", "disabled", 4, "ngIf"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", 3, "active", "disabled", "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1"], [1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["aria-label", i18n_16, 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["aria-label", i18n_18, 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"]]; }, template: function NgPagination_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgPagination_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgPagination_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgPagination_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgPagination_a_12_Template, 2, 9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgPagination_a_13_Template, 2, 8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgPagination_ng_container_14_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgPagination_a_15_Template, 2, 9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgPagination_a_16_Template, 2, 9, "a", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPagination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-pagination',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { 'role': 'navigation' },
                templateUrl: './ng-pagination.component.html',
            }]
    }], function () { return [{ type: _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"] }]; }, { tplEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationEllipsis, { static: false }]
        }], tplFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationFirst, { static: false }]
        }], tplLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationLast, { static: false }]
        }], tplNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNext, { static: false }]
        }], tplNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNumber, { static: false }]
        }], tplPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationPrevious, { static: false }]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectionSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/i18n/vocabs/en */ "UXkn");
/* harmony import */ var _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/i18n/vocabs/ch */ "+hgU");
/* harmony import */ var _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/i18n/vocabs/es */ "z+X0");
/* harmony import */ var _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/i18n/vocabs/jp */ "QWUF");
/* harmony import */ var _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/i18n/vocabs/de */ "s3F9");
/* harmony import */ var _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/i18n/vocabs/fr */ "+H5S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/i18n/translation.service */ "e4g8");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.service */ "ONK0");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.component */ "2ndO");

// language list













const _c0 = ["root", ""];
class AppComponent {
    constructor(translationService, splashScreenService, router, tableService) {
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        this.router = router;
        this.tableService = tableService;
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(_modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__["locale"], _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__["locale"], _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__["locale"], _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__["locale"], _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__["locale"]);
    }
    ngOnInit() {
        const routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                // clear filtration paginations and others
                this.tableService.setDefaults();
                // hide splash screen
                this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add('page-loaded');
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_10__["TableExtendedService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body", "root", ""]], attrs: _c0, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-splash-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_11__["SplashScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFNBQUE7QUFDRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'body[root]',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"] }, { type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_10__["TableExtendedService"] }]; }, null); })();


/***/ }),

/***/ "UXkn":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/en.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// USA
const locale = {
    lang: 'en',
    data: {
        TRANSLATOR: {
            SELECT: 'Select your language',
        },
        MENU: {
            NEW: 'new',
            ACTIONS: 'Actions',
            CREATE_POST: 'Create New Post',
            PAGES: 'Pages',
            FEATURES: 'Features',
            APPS: 'Apps',
            DASHBOARD: 'Dashboard',
        },
        AUTH: {
            GENERAL: {
                OR: 'Or',
                SUBMIT_BUTTON: 'Submit',
                NO_ACCOUNT: 'Don\'t have an account?',
                SIGNUP_BUTTON: 'Sign Up',
                FORGOT_BUTTON: 'Forgot Password',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Login Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Username'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "Vh1Q":
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/table.model.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "WWIl":
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/grouping.model.ts ***!
  \**********************************************************************/
/*! exports provided: GroupingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return GroupingState; });
class GroupingState {
    constructor() {
        this.selectedRowIds = new Set();
        this.itemIds = [];
    }
    checkAreAllRowsSelected() {
        if (this.itemIds.length === 0) {
            return false;
        }
        return this.selectedRowIds.size === this.itemIds.length;
    }
    selectRow(id) {
        if (this.selectedRowIds.has(id)) {
            this.selectedRowIds.delete(id);
        }
        else {
            this.selectedRowIds.add(id);
        }
        return this;
    }
    // tslint:disable-next-line:variable-name
    clearRows(_itemIds) {
        this.itemIds = _itemIds;
        this.selectedRowIds = new Set();
        return this;
    }
    isRowSelected(id) {
        return this.selectedRowIds.has(id);
    }
    selectAllRows() {
        const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
        if (areAllSelected) {
            this.selectedRowIds = new Set();
        }
        else {
            this.selectedRowIds = new Set();
            this.itemIds.forEach(id => this.selectedRowIds.add(id));
        }
        return this;
    }
    getSelectedRows() {
        return Array.from(this.selectedRowIds);
    }
    getSelectedRowsCount() {
        return this.selectedRowIds.size;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "koPj");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.module */ "QnJH");
/* harmony import */ var _fake_fake_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_fake/fake-api.service */ "G28U");
/* harmony import */ var _componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componets/notifications/noticy-alert/noticy-alert.component */ "/rCd");
/* harmony import */ var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toast-notifications */ "7Dfe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");












// Highlight JS


// #fake-start#








// #fake-end#
function appInitializer(authService) {
    return () => {
        // return new Promise((resolve) => {
        //   authService.getUserByToken().subscribe().add(resolve);
        // });
    };
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // {
        //   provide: APP_INITIALIZER,
        //   useFactory: appInitializer,
        //   multi: true,
        //   deps: [AuthService],
        // },
        _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"],
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HIGHLIGHT_OPTIONS"],
            useValue: {
                coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                languages: {
                    xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
                    typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
                    scss: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scss */ "highlight-js-lib-languages-scss").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scss */ "YROV", 7)),
                    json: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-json */ "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
                },
            },
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_13__["SplashScreenModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
            // #fake-start#
            src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].isMockEnabled
                ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_14__["FakeAPIService"], {
                    passThruUnknownUrl: true,
                    dataEncapsulation: false,
                })
                : [],
            // #fake-end#
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastNotificationsModule"].forRoot({ duration: 5000, position: 'top-right' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_15__["NoticyAlertComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_13__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
        // #fake-end#
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastNotificationsModule"]], exports: [_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_15__["NoticyAlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_15__["NoticyAlertComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_13__["SplashScreenModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                    // #fake-start#
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].isMockEnabled
                        ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_14__["FakeAPIService"], {
                            passThruUnknownUrl: true,
                            dataEncapsulation: false,
                        })
                        : [],
                    // #fake-end#
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastNotificationsModule"].forRoot({ duration: 5000, position: 'top-right' })
                ],
                providers: [
                    // {
                    //   provide: APP_INITIALIZER,
                    //   useFactory: appInitializer,
                    //   multi: true,
                    //   deps: [AuthService],
                    // },
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"],
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                            languages: {
                                xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
                                typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
                                scss: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scss */ "highlight-js-lib-languages-scss").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scss */ "YROV", 7)),
                                json: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-json */ "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
                            },
                        },
                    },
                ],
                exports: [
                    _componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_15__["NoticyAlertComponent"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aENq":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.service.ts ***!
  \***********************************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/paginator.model */ "fksT");
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/sort.model */ "fr3w");
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/grouping.model */ "WWIl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");






const DEFAULT_STATE = {
    filter: {},
    paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"](),
    sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"](),
    searchTerm: '',
    grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"](),
    entityId: undefined
};
class TableService {
    constructor(http) {
        // Private fields
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._isFirstLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this._tableState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](DEFAULT_STATE);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this._subscriptions = [];
        // API URL has to be overrided
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/endpoint`;
        this.http = http;
    }
    // Getters
    get items$() {
        return this._items$.asObservable();
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isFirstLoading$() {
        return this._isFirstLoading$.asObservable();
    }
    get errorMessage$() {
        return this._errorMessage.asObservable();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    // State getters
    get paginator() {
        return this._tableState$.value.paginator;
    }
    get filter() {
        return this._tableState$.value.filter;
    }
    get sorting() {
        return this._tableState$.value.sorting;
    }
    get searchTerm() {
        return this._tableState$.value.searchTerm;
    }
    get grouping() {
        return this._tableState$.value.grouping;
    }
    // CREATE
    // server should return the object with ID
    create(item) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.post(this.API_URL, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('CREATE ITEM', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // READ (Returning filtered list of entities)
    find(tableState) {
        const url = this.API_URL + '/find';
        this._errorMessage.next('');
        return this.http.post(url, tableState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('FIND ITEMS', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ items: [], total: 0 });
        }));
    }
    getItemById(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('GET ITEM BY IT', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE
    update(item) {
        const url = `${this.API_URL}/${item.id}`;
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.put(url, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE ITEM', item, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE Status
    updateStatusForItems(ids, status) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const body = { ids, status };
        const url = this.API_URL + '/updateStatus';
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE STATUS FOR SELECTED ITEMS', ids, status, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // DELETE
    delete(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE ITEM', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // delete list of items
    deleteItems(ids = []) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = this.API_URL + '/deleteItems';
        const body = { ids };
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE SELECTED ITEMS', ids, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    fetch() {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const request = this.find(this._tableState$.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this._items$.next(res.items);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(res.total),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            this._errorMessage.next(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                items: [],
                total: 0
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this._isLoading$.next(false);
            const itemIds = this._items$.value.map((el) => {
                const item = el;
                return item.id;
            });
            this.patchStateWithoutFetch({
                grouping: this._tableState$.value.grouping.clearRows(itemIds),
            });
        }))
            .subscribe();
        this._subscriptions.push(request);
    }
    setDefaults() {
        this.patchStateWithoutFetch({ filter: {} });
        this.patchStateWithoutFetch({ sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"]() });
        this.patchStateWithoutFetch({ grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"]() });
        this.patchStateWithoutFetch({ searchTerm: '' });
        this.patchStateWithoutFetch({
            paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]()
        });
        this._isFirstLoading$.next(true);
        this._isLoading$.next(true);
        this._tableState$.next(DEFAULT_STATE);
        this._errorMessage.next('');
    }
    // Base Methods
    patchState(patch) {
        this.patchStateWithoutFetch(patch);
        this.fetch();
    }
    patchStateWithoutFetch(patch) {
        const newState = Object.assign(this._tableState$.value, patch);
        this._tableState$.next(newState);
    }
}


/***/ }),

/***/ "e/aN":
/*!*************************************************************************!*\
  !*** ./src/app/modules/e-commerce/_fake/fake-server/customers.table.ts ***!
  \*************************************************************************/
/*! exports provided: CustomersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersTable", function() { return CustomersTable; });
class CustomersTable {
}
CustomersTable.customers = [
    {
        id: 1,
        firstName: 'Sonni',
        lastName: 'Gabotti',
        email: 'sgabotti0@wsj.com',
        userName: 'sgabotti0',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '10/14/1950',
        ipAddress: '251.237.126.210',
        type: 2,
        _userId: 1,
        _createdDate: '09/07/2016',
        _updatedDate: '05/31/2013'
    },
    {
        id: 2,
        firstName: 'Abie',
        lastName: 'Cowperthwaite',
        email: 'acowperthwaite1@storify.com',
        userName: 'acowperthwaite1',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '12/31/1998',
        ipAddress: '239.176.5.218',
        type: 2,
        _userId: 2,
        _createdDate: '18/03/2014',
        _updatedDate: '08/17/2016'
    },
    {
        id: 3,
        firstName: 'Melody',
        lastName: 'Stodd',
        email: 'mstodd2@twitpic.com',
        userName: 'mstodd2',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '7/3/1957',
        ipAddress: '14.80.25.15',
        type: 2,
        _userId: 1,
        _createdDate: '07/03/2015',
        _updatedDate: '01/28/2015'
    },
    {
        id: 4,
        firstName: 'Naomi',
        lastName: 'Galbreth',
        email: 'ngalbreth3@springer.com',
        userName: 'ngalbreth3',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '12/30/1976',
        ipAddress: '239.198.18.122',
        type: 1,
        _userId: 2,
        _createdDate: '06/22/2013',
        _updatedDate: '01/31/2011'
    },
    {
        id: 5,
        firstName: 'Ashley',
        lastName: 'Jandl',
        email: 'ajandl4@mapy.cz',
        userName: 'ajandl4',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '11/23/1996',
        ipAddress: '11.19.64.48',
        type: 2,
        _userId: 1,
        _createdDate: '01/30/2018',
        _updatedDate: '05/22/2014'
    },
    {
        id: 6,
        firstName: 'Mildrid',
        lastName: 'Duplan',
        email: 'mduplan5@msn.com',
        userName: 'mduplan5',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '4/21/1954',
        ipAddress: '104.18.128.93',
        type: 2,
        _userId: 1,
        _createdDate: '03/27/2011',
        _updatedDate: '09/02/2015'
    },
    {
        id: 7,
        firstName: 'Dall',
        lastName: 'Stow',
        email: 'dstow6@vistaprint.com',
        userName: 'dstow6',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '4/14/1998',
        ipAddress: '168.199.143.20',
        type: 2,
        _userId: 1,
        _createdDate: '09/05/2011',
        _updatedDate: '06/21/2012'
    },
    {
        id: 8,
        firstName: 'Burton',
        lastName: 'Dering',
        email: 'bdering7@europa.eu',
        userName: 'bdering7',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '8/15/1963',
        ipAddress: '204.7.174.42',
        type: 1,
        _userId: 1,
        _createdDate: '09/09/2017',
        _updatedDate: '06/27/2011'
    },
    {
        id: 9,
        firstName: 'Wolf',
        lastName: 'Blackaller',
        email: 'wblackaller8@biblegateway.com',
        userName: 'wblackaller8',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '5/20/1997',
        ipAddress: '12.229.194.195',
        type: 1,
        _userId: 1,
        _createdDate: '07/16/2011',
        _updatedDate: '05/24/2014'
    },
    {
        id: 10,
        firstName: 'Adham',
        lastName: 'Hurtic',
        email: 'ahurtic9@friendfeed.com',
        userName: 'ahurtic9',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '3/15/1971',
        ipAddress: '236.147.173.25',
        type: 1,
        _userId: 2,
        _createdDate: '03/25/2011',
        _updatedDate: '12/13/2015'
    },
    {
        id: 11,
        firstName: 'Carlina',
        lastName: 'Scudders',
        email: 'cscuddersa@shareasale.com',
        userName: 'cscuddersa',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '2/18/1970',
        ipAddress: '189.61.76.155',
        type: 1,
        _userId: 1,
        _createdDate: '11/01/2015',
        _updatedDate: '02/16/2013'
    },
    {
        id: 12,
        firstName: 'Roderich',
        lastName: 'Landsberg',
        email: 'rlandsbergb@deliciousdays.com',
        userName: 'rlandsbergb',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '12/7/1963',
        ipAddress: '75.200.18.136',
        type: 1,
        _userId: 2,
        _createdDate: '12/12/2017',
        _updatedDate: '02/22/2013'
    },
    {
        id: 13,
        firstName: 'Mychal',
        lastName: 'Tremblett',
        email: 'mtremblettc@printfriendly.com',
        userName: 'mtremblettc',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '7/14/1996',
        ipAddress: '85.132.155.112',
        type: 1,
        _userId: 1,
        _createdDate: '08/14/2014',
        _updatedDate: '08/03/2014'
    },
    {
        id: 14,
        firstName: 'Corine',
        lastName: 'Rajchert',
        email: 'crajchertd@google.com',
        userName: 'crajchertd',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '9/13/1966',
        ipAddress: '47.164.200.96',
        type: 1,
        _userId: 2,
        _createdDate: '12/07/2010',
        _updatedDate: '09/24/2012'
    },
    {
        id: 15,
        firstName: 'Worth',
        lastName: 'McFarlane',
        email: 'wmcfarlanee@cocolog-nifty.com',
        userName: 'wmcfarlanee',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '10/13/1968',
        ipAddress: '56.209.4.81',
        type: 1,
        _userId: 1,
        _createdDate: '02/23/2013',
        _updatedDate: '09/24/2016'
    },
    {
        id: 16,
        firstName: 'Ogden',
        lastName: 'Danielski',
        email: 'odanielskif@goo.ne.jp',
        userName: 'odanielskif',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '10/5/1984',
        ipAddress: '181.198.149.89',
        type: 1,
        _userId: 1,
        _createdDate: '09/08/2012',
        _updatedDate: '10/29/2017'
    },
    {
        id: 17,
        firstName: 'Laurette',
        lastName: 'Tift',
        email: 'ltiftg@about.me',
        userName: 'ltiftg',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '7/29/1964',
        ipAddress: '218.236.252.255',
        type: 2,
        _userId: 2,
        _createdDate: '05/03/2016',
        _updatedDate: '08/02/2011'
    },
    {
        id: 18,
        firstName: 'Eleanora',
        lastName: 'Jackson',
        email: 'ejacksonh@geocities.jp',
        userName: 'ejacksonh',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '1/1/1993',
        ipAddress: '166.210.135.66',
        type: 2,
        _userId: 1,
        _createdDate: '09/25/2017',
        _updatedDate: '01/08/2012'
    },
    {
        id: 19,
        firstName: 'Manon',
        lastName: 'Perott',
        email: 'mperotti@nyu.edu',
        userName: 'mperotti',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '11/6/1994',
        ipAddress: '44.43.119.22',
        type: 2,
        _userId: 2,
        _createdDate: '04/26/2013',
        _updatedDate: '02/24/2012'
    },
    {
        id: 20,
        firstName: 'Karney',
        lastName: 'Damerell',
        email: 'kdamerellj@booking.com',
        userName: 'kdamerellj',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '11/22/1996',
        ipAddress: '253.195.21.217',
        type: 2,
        _userId: 2,
        _createdDate: '11/28/2014',
        _updatedDate: '10/11/2012'
    },
    {
        id: 21,
        firstName: 'Chelsea',
        lastName: 'Bruce',
        email: 'cbrucek@icq.com',
        userName: 'cbrucek',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '12/1/1983',
        ipAddress: '28.184.81.169',
        type: 1,
        _userId: 1,
        _createdDate: '07/29/2013',
        _updatedDate: '12/01/2017'
    },
    {
        id: 22,
        firstName: 'Barny',
        lastName: 'Verny',
        email: 'bvernyl@bing.com',
        userName: 'bvernyl',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '8/13/1957',
        ipAddress: '7.26.116.49',
        type: 1,
        _userId: 1,
        _createdDate: '06/14/2011',
        _updatedDate: '06/28/2011'
    },
    {
        id: 23,
        firstName: 'Elita',
        lastName: 'Matuszewski',
        email: 'ematuszewskim@businesswire.com',
        userName: 'ematuszewskim',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '6/6/1985',
        ipAddress: '82.223.2.228',
        type: 1,
        _userId: 2,
        _createdDate: '05/19/2016',
        _updatedDate: '09/12/2011'
    },
    {
        id: 24,
        firstName: 'Chelsey',
        lastName: 'Scullard',
        email: 'cscullardn@buzzfeed.com',
        userName: 'cscullardn',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '11/20/1960',
        ipAddress: '68.177.196.151',
        type: 1,
        _userId: 1,
        _createdDate: '02/09/2013',
        _updatedDate: '12/11/2011'
    },
    {
        id: 25,
        firstName: 'Jodi',
        lastName: 'Olphert',
        email: 'jolpherto@elpais.com',
        userName: 'jolpherto',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '4/20/2000',
        ipAddress: '32.219.74.161',
        type: 1,
        _userId: 2,
        _createdDate: '07/28/2017',
        _updatedDate: '05/03/2017'
    },
    {
        id: 26,
        firstName: 'Micah',
        lastName: 'Searchfield',
        email: 'msearchfieldp@instagram.com',
        userName: 'msearchfieldp',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '8/15/1993',
        ipAddress: '99.205.47.226',
        type: 2,
        _userId: 1,
        _createdDate: '07/05/2011',
        _updatedDate: '02/19/2013'
    },
    {
        id: 27,
        firstName: 'Freeland',
        lastName: 'O\'Dougherty',
        email: 'fodoughertyq@cbsnews.com',
        userName: 'fodoughertyq',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '5/19/1956',
        ipAddress: '91.116.249.149',
        type: 1,
        _userId: 1,
        _createdDate: '06/09/2012',
        _updatedDate: '03/15/2014'
    },
    {
        id: 28,
        firstName: 'Marna',
        lastName: 'Dacre',
        email: 'mdacrer@tmall.com',
        userName: 'mdacrer',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '10/26/1959',
        ipAddress: '127.23.103.102',
        type: 1,
        _userId: 2,
        _createdDate: '12/30/2011',
        _updatedDate: '03/24/2016'
    },
    {
        id: 29,
        firstName: 'Carlita',
        lastName: 'Calwell',
        email: 'ccalwells@1688.com',
        userName: 'ccalwells',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '7/28/1961',
        ipAddress: '3.205.16.120',
        type: 1,
        _userId: 2,
        _createdDate: '02/28/2016',
        _updatedDate: '02/25/2013'
    },
    {
        id: 30,
        firstName: 'Deonne',
        lastName: 'Castellan',
        email: 'dcastellant@gizmodo.com',
        userName: 'dcastellant',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '10/21/1955',
        ipAddress: '213.3.222.52',
        type: 2,
        _userId: 2,
        _createdDate: '03/12/2011',
        _updatedDate: '03/26/2017'
    },
    {
        id: 31,
        firstName: 'Cesare',
        lastName: 'Chestnutt',
        email: 'cchestnuttu@cornell.edu',
        userName: 'cchestnuttu',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '4/14/1979',
        ipAddress: '218.107.75.113',
        type: 2,
        _userId: 1,
        _createdDate: '03/06/2012',
        _updatedDate: '09/08/2012'
    },
    {
        id: 32,
        firstName: 'Gauthier',
        lastName: 'Luparto',
        email: 'glupartov@wordpress.org',
        userName: 'glupartov',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '11/28/1952',
        ipAddress: '148.234.79.85',
        type: 2,
        _userId: 2,
        _createdDate: '04/28/2013',
        _updatedDate: '02/26/2016'
    },
    {
        id: 33,
        firstName: 'Kimmi',
        lastName: 'Corde',
        email: 'kcordew@kickstarter.com',
        userName: 'kcordew',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '8/7/1978',
        ipAddress: '94.85.235.54',
        type: 1,
        _userId: 2,
        _createdDate: '10/21/2012',
        _updatedDate: '10/31/2017'
    },
    {
        id: 34,
        firstName: 'Riordan',
        lastName: 'Rosenbush',
        email: 'rrosenbushx@wix.com',
        userName: 'rrosenbushx',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '11/28/1957',
        ipAddress: '236.15.158.122',
        type: 1,
        _userId: 2,
        _createdDate: '08/28/2011',
        _updatedDate: '08/14/2015'
    },
    {
        id: 35,
        firstName: 'Daune',
        lastName: 'Sellek',
        email: 'dselleky@amazon.co.jp',
        userName: 'dselleky',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '10/12/1995',
        ipAddress: '163.229.197.138',
        type: 2,
        _userId: 2,
        _createdDate: '03/28/2018',
        _updatedDate: '03/01/2017'
    },
    {
        id: 36,
        firstName: 'Myriam',
        lastName: 'Marshland',
        email: 'mmarshlandz@army.mil',
        userName: 'mmarshlandz',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '8/1/1961',
        ipAddress: '153.40.246.134',
        type: 1,
        _userId: 1,
        _createdDate: '05/15/2017',
        _updatedDate: '08/12/2016'
    },
    {
        id: 37,
        firstName: 'Laryssa',
        lastName: 'Hynard',
        email: 'lhynard10@squidoo.com',
        userName: 'lhynard10',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '1/6/1998',
        ipAddress: '186.155.125.145',
        type: 1,
        _userId: 2,
        _createdDate: '01/16/2012',
        _updatedDate: '10/09/2012'
    },
    {
        id: 38,
        firstName: 'Evelin',
        lastName: 'Poate',
        email: 'epoate11@cnet.com',
        userName: 'epoate11',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '9/11/1957',
        ipAddress: '76.53.54.233',
        type: 1,
        _userId: 1,
        _createdDate: '01/07/2012',
        _updatedDate: '01/18/2018'
    },
    {
        id: 39,
        firstName: 'Cesar',
        lastName: 'D\'Orsay',
        email: 'cdorsay12@ezinearticles.com',
        userName: 'cdorsay12',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '10/20/1992',
        ipAddress: '101.137.215.28',
        type: 2,
        _userId: 1,
        _createdDate: '10/20/2010',
        _updatedDate: '07/14/2012'
    },
    {
        id: 40,
        firstName: 'Jareb',
        lastName: 'Luberto',
        email: 'jluberto13@apple.com',
        userName: 'jluberto13',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '12/22/1951',
        ipAddress: '69.111.152.125',
        type: 1,
        _userId: 1,
        _createdDate: '01/11/2012',
        _updatedDate: '01/20/2018'
    },
    {
        id: 41,
        firstName: 'Kerry',
        lastName: 'Glawsop',
        email: 'kglawsop14@wp.com',
        userName: 'kglawsop14',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '11/28/1953',
        ipAddress: '105.245.81.58',
        type: 2,
        _userId: 2,
        _createdDate: '02/23/2015',
        _updatedDate: '03/14/2012'
    },
    {
        id: 42,
        firstName: 'Brose',
        lastName: 'Conti',
        email: 'bconti15@smh.com.au',
        userName: 'bconti15',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '8/13/1967',
        ipAddress: '109.92.204.48',
        type: 2,
        _userId: 1,
        _createdDate: '08/04/2012',
        _updatedDate: '11/01/2011'
    },
    {
        id: 43,
        firstName: 'Shannah',
        lastName: 'Ceeley',
        email: 'sceeley16@sogou.com',
        userName: 'sceeley16',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '6/10/1962',
        ipAddress: '57.218.60.216',
        type: 1,
        _userId: 2,
        _createdDate: '05/28/2014',
        _updatedDate: '03/16/2018'
    },
    {
        id: 44,
        firstName: 'Rudolf',
        lastName: 'Stallworthy',
        email: 'rstallworthy17@theatlantic.com',
        userName: 'rstallworthy17',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '10/15/1966',
        ipAddress: '74.223.255.220',
        type: 2,
        _userId: 2,
        _createdDate: '06/01/2015',
        _updatedDate: '10/25/2013'
    },
    {
        id: 45,
        firstName: 'Egor',
        lastName: 'Scotson',
        email: 'escotson18@weather.com',
        userName: 'escotson18',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '1/17/1956',
        ipAddress: '70.189.158.38',
        type: 1,
        _userId: 1,
        _createdDate: '03/25/2011',
        _updatedDate: '12/05/2010'
    },
    {
        id: 46,
        firstName: 'Selie',
        lastName: 'Dugue',
        email: 'sdugue19@meetup.com',
        userName: 'sdugue19',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '11/9/1981',
        ipAddress: '54.129.221.70',
        type: 2,
        _userId: 1,
        _createdDate: '06/09/2013',
        _updatedDate: '08/10/2016'
    },
    {
        id: 47,
        firstName: 'Gene',
        lastName: 'Kirkbright',
        email: 'gkirkbright1a@wp.com',
        userName: 'gkirkbright1a',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '5/9/1972',
        ipAddress: '217.224.216.105',
        type: 1,
        _userId: 1,
        _createdDate: '02/02/2016',
        _updatedDate: '03/30/2014'
    },
    {
        id: 48,
        firstName: 'Reagan',
        lastName: 'Colloby',
        email: 'rcolloby1b@usgs.gov',
        userName: 'rcolloby1b',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '9/21/1997',
        ipAddress: '32.53.20.172',
        type: 1,
        _userId: 2,
        _createdDate: '04/08/2016',
        _updatedDate: '01/25/2014'
    },
    {
        id: 49,
        firstName: 'Saidee',
        lastName: 'Kivelle',
        email: 'skivelle1c@newsvine.com',
        userName: 'skivelle1c',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '10/23/1994',
        ipAddress: '79.152.227.238',
        type: 2,
        _userId: 1,
        _createdDate: '12/26/2015',
        _updatedDate: '09/17/2011'
    },
    {
        id: 50,
        firstName: 'Mychal',
        lastName: 'Karlowicz',
        email: 'mkarlowicz1d@opera.com',
        userName: 'mkarlowicz1d',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '10/20/1971',
        ipAddress: '70.175.193.245',
        type: 1,
        _userId: 2,
        _createdDate: '10/10/2011',
        _updatedDate: '03/02/2012'
    },
    {
        id: 51,
        firstName: 'Nessie',
        lastName: 'Casassa',
        email: 'ncasassa1e@pinterest.com',
        userName: 'ncasassa1e',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '3/9/1983',
        ipAddress: '17.128.173.230',
        type: 2,
        _userId: 1,
        _createdDate: '01/09/2018',
        _updatedDate: '08/05/2015'
    },
    {
        id: 52,
        firstName: 'Myrvyn',
        lastName: 'Coots',
        email: 'mcoots1f@sourceforge.net',
        userName: 'mcoots1f',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '4/5/1972',
        ipAddress: '253.21.191.36',
        type: 1,
        _userId: 1,
        _createdDate: '01/13/2015',
        _updatedDate: '04/30/2011'
    },
    {
        id: 53,
        firstName: 'Liuka',
        lastName: 'Monard',
        email: 'lmonard1g@wikipedia.org',
        userName: 'lmonard1g',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '6/6/1999',
        ipAddress: '33.46.177.2',
        type: 2,
        _userId: 1,
        _createdDate: '11/17/2012',
        _updatedDate: '02/18/2011'
    },
    {
        id: 54,
        firstName: 'Alis',
        lastName: 'Nozzolii',
        email: 'anozzolii1h@google.com.br',
        userName: 'anozzolii1h',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '7/25/1953',
        ipAddress: '242.76.135.219',
        type: 2,
        _userId: 1,
        _createdDate: '10/16/2012',
        _updatedDate: '09/17/2012'
    },
    {
        id: 55,
        firstName: 'Gage',
        lastName: 'Slamaker',
        email: 'gslamaker1i@people.com.cn',
        userName: 'gslamaker1i',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '3/19/1959',
        ipAddress: '179.85.197.219',
        type: 1,
        _userId: 2,
        _createdDate: '04/20/2015',
        _updatedDate: '07/02/2014'
    },
    {
        id: 56,
        firstName: 'Jamal',
        lastName: 'Glasard',
        email: 'jglasard1j@google.ru',
        userName: 'jglasard1j',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '9/21/1968',
        ipAddress: '163.99.109.106',
        type: 1,
        _userId: 1,
        _createdDate: '08/24/2017',
        _updatedDate: '12/09/2012'
    },
    {
        id: 57,
        firstName: 'Antone',
        lastName: 'Christophersen',
        email: 'achristophersen1k@slashdot.org',
        userName: 'achristophersen1k',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '8/5/1953',
        ipAddress: '42.207.110.255',
        type: 2,
        _userId: 1,
        _createdDate: '12/30/2012',
        _updatedDate: '04/07/2013'
    },
    {
        id: 58,
        firstName: 'Glenn',
        lastName: 'Gentle',
        email: 'ggentle1l@imdb.com',
        userName: 'ggentle1l',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '8/4/1959',
        ipAddress: '82.135.105.157',
        type: 2,
        _userId: 2,
        _createdDate: '01/16/2017',
        _updatedDate: '10/04/2017'
    },
    {
        id: 59,
        firstName: 'Jerrilyn',
        lastName: 'Prujean',
        email: 'jprujean1m@csmonitor.com',
        userName: 'jprujean1m',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '12/22/1961',
        ipAddress: '45.111.98.145',
        type: 2,
        _userId: 2,
        _createdDate: '08/22/2014',
        _updatedDate: '09/01/2014'
    },
    {
        id: 60,
        firstName: 'Becki',
        lastName: 'Mucklestone',
        email: 'bmucklestone1n@wiley.com',
        userName: 'bmucklestone1n',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '10/15/1970',
        ipAddress: '208.63.250.181',
        type: 1,
        _userId: 1,
        _createdDate: '03/08/2018',
        _updatedDate: '08/09/2016'
    },
    {
        id: 61,
        firstName: 'Kingsly',
        lastName: 'Sawday',
        email: 'ksawday1o@patch.com',
        userName: 'ksawday1o',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '1/20/1978',
        ipAddress: '196.38.7.53',
        type: 1,
        _userId: 2,
        _createdDate: '07/15/2016',
        _updatedDate: '10/28/2012'
    },
    {
        id: 62,
        firstName: 'Austen',
        lastName: 'Possel',
        email: 'apossel1p@blogtalkradio.com',
        userName: 'apossel1p',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '5/8/1960',
        ipAddress: '162.0.150.104',
        type: 2,
        _userId: 2,
        _createdDate: '12/20/2017',
        _updatedDate: '04/20/2018'
    },
    {
        id: 63,
        firstName: 'Rudie',
        lastName: 'Southouse',
        email: 'rsouthouse1q@mapy.cz',
        userName: 'rsouthouse1q',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '12/2/1950',
        ipAddress: '67.123.229.124',
        type: 2,
        _userId: 2,
        _createdDate: '09/24/2012',
        _updatedDate: '07/02/2014'
    },
    {
        id: 64,
        firstName: 'Julienne',
        lastName: 'Le Noury',
        email: 'jlenoury1r@cnet.com',
        userName: 'jlenoury1r',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '10/30/1976',
        ipAddress: '208.192.238.241',
        type: 2,
        _userId: 1,
        _createdDate: '06/29/2012',
        _updatedDate: '11/26/2016'
    },
    {
        id: 65,
        firstName: 'Bernard',
        lastName: 'Levicount',
        email: 'blevicount1s@angelfire.com',
        userName: 'blevicount1s',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '12/6/1982',
        ipAddress: '123.229.51.62',
        type: 2,
        _userId: 2,
        _createdDate: '04/11/2013',
        _updatedDate: '05/14/2013'
    },
    {
        id: 66,
        firstName: 'Katine',
        lastName: 'Glazyer',
        email: 'kglazyer1t@unblog.fr',
        userName: 'kglazyer1t',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '8/20/1954',
        ipAddress: '165.87.178.12',
        type: 1,
        _userId: 1,
        _createdDate: '03/20/2015',
        _updatedDate: '06/18/2015'
    },
    {
        id: 67,
        firstName: 'Rem',
        lastName: 'Crichten',
        email: 'rcrichten1u@patch.com',
        userName: 'rcrichten1u',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '6/19/1950',
        ipAddress: '184.177.108.6',
        type: 2,
        _userId: 1,
        _createdDate: '11/12/2014',
        _updatedDate: '04/12/2011'
    },
    {
        id: 68,
        firstName: 'Colman',
        lastName: 'Simnor',
        email: 'csimnor1v@reddit.com',
        userName: 'csimnor1v',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '1/3/2000',
        ipAddress: '19.3.156.170',
        type: 1,
        _userId: 2,
        _createdDate: '05/06/2013',
        _updatedDate: '05/23/2014'
    },
    {
        id: 69,
        firstName: 'Arin',
        lastName: 'Hanscombe',
        email: 'ahanscombe1w@blogspot.com',
        userName: 'ahanscombe1w',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '9/21/1955',
        ipAddress: '154.59.243.61',
        type: 1,
        _userId: 2,
        _createdDate: '06/23/2013',
        _updatedDate: '11/10/2011'
    },
    {
        id: 70,
        firstName: 'Emogene',
        lastName: 'Gruszka',
        email: 'egruszka1x@cmu.edu',
        userName: 'egruszka1x',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '7/3/1971',
        ipAddress: '105.138.138.125',
        type: 2,
        _userId: 2,
        _createdDate: '07/26/2016',
        _updatedDate: '10/28/2013'
    },
    {
        id: 71,
        firstName: 'Rosina',
        lastName: 'Kauffman',
        email: 'rkauffman1y@google.com.hk',
        userName: 'rkauffman1y',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '11/21/1953',
        ipAddress: '131.87.248.164',
        type: 1,
        _userId: 1,
        _createdDate: '10/16/2016',
        _updatedDate: '07/24/2015'
    },
    {
        id: 72,
        firstName: 'Fran',
        lastName: 'MacGill',
        email: 'fmacgill1z@pinterest.com',
        userName: 'fmacgill1z',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '3/16/1991',
        ipAddress: '155.41.152.146',
        type: 2,
        _userId: 1,
        _createdDate: '11/23/2012',
        _updatedDate: '09/03/2016'
    },
    {
        id: 73,
        firstName: 'Marinna',
        lastName: 'Allington',
        email: 'mallington20@icio.us',
        userName: 'mallington20',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '3/15/1964',
        ipAddress: '120.145.107.78',
        type: 1,
        _userId: 2,
        _createdDate: '09/07/2011',
        _updatedDate: '12/26/2017'
    },
    {
        id: 74,
        firstName: 'Irv',
        lastName: 'Rishbrook',
        email: 'irishbrook21@tripod.com',
        userName: 'irishbrook21',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '11/25/1966',
        ipAddress: '127.115.28.247',
        type: 2,
        _userId: 1,
        _createdDate: '08/25/2014',
        _updatedDate: '06/16/2013'
    },
    {
        id: 75,
        firstName: 'Riordan',
        lastName: 'Durran',
        email: 'rdurran22@hubpages.com',
        userName: 'rdurran22',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '3/3/1952',
        ipAddress: '246.102.6.88',
        type: 2,
        _userId: 1,
        _createdDate: '04/02/2017',
        _updatedDate: '01/30/2011'
    },
    {
        id: 76,
        firstName: 'Phillie',
        lastName: 'Elward',
        email: 'pelward23@parallels.com',
        userName: 'pelward23',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '9/15/1965',
        ipAddress: '75.220.58.105',
        type: 2,
        _userId: 1,
        _createdDate: '06/23/2014',
        _updatedDate: '08/20/2016'
    },
    {
        id: 77,
        firstName: 'Hadlee',
        lastName: 'Haddow',
        email: 'hhaddow24@nationalgeographic.com',
        userName: 'hhaddow24',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '10/2/1973',
        ipAddress: '155.40.18.171',
        type: 1,
        _userId: 2,
        _createdDate: '03/05/2016',
        _updatedDate: '07/03/2017'
    },
    {
        id: 78,
        firstName: 'Luciano',
        lastName: 'Pittford',
        email: 'lpittford25@europa.eu',
        userName: 'lpittford25',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '6/14/1963',
        ipAddress: '131.175.149.47',
        type: 1,
        _userId: 2,
        _createdDate: '05/01/2014',
        _updatedDate: '08/02/2011'
    },
    {
        id: 79,
        firstName: 'Zelma',
        lastName: 'Cumberpatch',
        email: 'zcumberpatch26@multiply.com',
        userName: 'zcumberpatch26',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '7/16/1956',
        ipAddress: '145.155.37.45',
        type: 2,
        _userId: 1,
        _createdDate: '11/07/2015',
        _updatedDate: '12/03/2014'
    },
    {
        id: 80,
        firstName: 'Thornton',
        lastName: 'Smuth',
        email: 'tsmuth27@go.com',
        userName: 'tsmuth27',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '5/9/1989',
        ipAddress: '146.151.187.52',
        type: 2,
        _userId: 2,
        _createdDate: '12/25/2011',
        _updatedDate: '12/31/2010'
    },
    {
        id: 81,
        firstName: 'Bunnie',
        lastName: 'Ealden',
        email: 'bealden28@gravatar.com',
        userName: 'bealden28',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '10/2/1999',
        ipAddress: '184.116.180.222',
        type: 2,
        _userId: 2,
        _createdDate: '04/09/2015',
        _updatedDate: '12/07/2013'
    },
    {
        id: 82,
        firstName: 'Pearl',
        lastName: 'Robeson',
        email: 'probeson29@moonfruit.com',
        userName: 'probeson29',
        gender: 'Female',
        status: 1,
        dateOfBbirth: '8/20/1980',
        ipAddress: '235.213.39.68',
        type: 1,
        _userId: 1,
        _createdDate: '07/13/2016',
        _updatedDate: '03/07/2012'
    },
    {
        id: 83,
        firstName: 'Charlie',
        lastName: 'Marvelley',
        email: 'cmarvelley2a@archive.org',
        userName: 'cmarvelley2a',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '11/22/1969',
        ipAddress: '158.224.240.173',
        type: 1,
        _userId: 2,
        _createdDate: '03/25/2012',
        _updatedDate: '11/20/2012'
    },
    {
        id: 84,
        firstName: 'Vere',
        lastName: 'McCartan',
        email: 'vmccartan2b@about.me',
        userName: 'vmccartan2b',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '3/24/1956',
        ipAddress: '235.57.57.54',
        type: 1,
        _userId: 2,
        _createdDate: '06/21/2016',
        _updatedDate: '05/17/2015'
    },
    {
        id: 85,
        firstName: 'Deni',
        lastName: 'Frostdicke',
        email: 'dfrostdicke2c@jigsy.com',
        userName: 'dfrostdicke2c',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '7/31/1964',
        ipAddress: '108.183.237.176',
        type: 2,
        _userId: 1,
        _createdDate: '03/13/2013',
        _updatedDate: '11/12/2017'
    },
    {
        id: 86,
        firstName: 'Poppy',
        lastName: 'Pech',
        email: 'ppech2d@wsj.com',
        userName: 'ppech2d',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '2/24/1976',
        ipAddress: '221.35.18.213',
        type: 2,
        _userId: 1,
        _createdDate: '09/10/2015',
        _updatedDate: '02/13/2013'
    },
    {
        id: 87,
        firstName: 'Dasya',
        lastName: 'O\'Nion',
        email: 'donion2e@addthis.com',
        userName: 'donion2e',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '7/5/1993',
        ipAddress: '28.25.44.40',
        type: 1,
        _userId: 1,
        _createdDate: '04/12/2013',
        _updatedDate: '08/24/2012'
    },
    {
        id: 88,
        firstName: 'Marco',
        lastName: 'Izhakov',
        email: 'mizhakov2f@si.edu',
        userName: 'mizhakov2f',
        gender: 'Male',
        status: 2,
        dateOfBbirth: '2/28/1999',
        ipAddress: '155.123.153.36',
        type: 1,
        _userId: 1,
        _createdDate: '06/04/2012',
        _updatedDate: '03/06/2017'
    },
    {
        id: 89,
        firstName: 'Jane',
        lastName: 'Meneux',
        email: 'jmeneux2g@bluehost.com',
        userName: 'jmeneux2g',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '3/15/1962',
        ipAddress: '216.200.223.149',
        type: 2,
        _userId: 2,
        _createdDate: '11/24/2015',
        _updatedDate: '02/08/2012'
    },
    {
        id: 90,
        firstName: 'Audry',
        lastName: 'Glasheen',
        email: 'aglasheen2h@booking.com',
        userName: 'aglasheen2h',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '10/24/1962',
        ipAddress: '186.134.95.243',
        type: 1,
        _userId: 1,
        _createdDate: '09/13/2016',
        _updatedDate: '04/28/2014'
    },
    {
        id: 91,
        firstName: 'Florida',
        lastName: 'Lawleff',
        email: 'flawleff2i@livejournal.com',
        userName: 'flawleff2i',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '2/3/1960',
        ipAddress: '88.32.51.173',
        type: 1,
        _userId: 1,
        _createdDate: '03/22/2018',
        _updatedDate: '11/28/2010'
    },
    {
        id: 92,
        firstName: 'Christoforo',
        lastName: 'Pinchon',
        email: 'cpinchon2j@bloglovin.com',
        userName: 'cpinchon2j',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '2/26/1995',
        ipAddress: '244.162.142.84',
        type: 1,
        _userId: 2,
        _createdDate: '11/14/2017',
        _updatedDate: '11/19/2016'
    },
    {
        id: 93,
        firstName: 'Bertie',
        lastName: 'Antognazzi',
        email: 'bantognazzi2k@ow.ly',
        userName: 'bantognazzi2k',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '6/7/1955',
        ipAddress: '108.174.189.179',
        type: 1,
        _userId: 2,
        _createdDate: '08/03/2016',
        _updatedDate: '01/27/2018'
    },
    {
        id: 94,
        firstName: 'Clevey',
        lastName: 'Grima',
        email: 'cgrima2l@cmu.edu',
        userName: 'cgrima2l',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '7/7/1981',
        ipAddress: '255.186.178.211',
        type: 2,
        _userId: 2,
        _createdDate: '03/23/2014',
        _updatedDate: '02/10/2011'
    },
    {
        id: 95,
        firstName: 'Herbie',
        lastName: 'Symper',
        email: 'hsymper2m@ca.gov',
        userName: 'hsymper2m',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '7/16/1993',
        ipAddress: '54.240.157.6',
        type: 1,
        _userId: 1,
        _createdDate: '07/27/2011',
        _updatedDate: '05/28/2013'
    },
    {
        id: 96,
        firstName: 'Kizzie',
        lastName: 'Clapson',
        email: 'kclapson2n@linkedin.com',
        userName: 'kclapson2n',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '1/26/1977',
        ipAddress: '171.243.142.104',
        type: 2,
        _userId: 2,
        _createdDate: '09/03/2011',
        _updatedDate: '10/14/2014'
    },
    {
        id: 97,
        firstName: 'Sigvard',
        lastName: 'Edwin',
        email: 'sedwin2o@mlb.com',
        userName: 'sedwin2o',
        gender: 'Male',
        status: 1,
        dateOfBbirth: '4/24/1966',
        ipAddress: '78.224.218.52',
        type: 1,
        _userId: 1,
        _createdDate: '05/20/2017',
        _updatedDate: '09/17/2013'
    },
    {
        id: 98,
        firstName: 'Boniface',
        lastName: 'Rodd',
        email: 'brodd2p@123-reg.co.uk',
        userName: 'brodd2p',
        gender: 'Male',
        status: 3,
        dateOfBbirth: '10/24/1978',
        ipAddress: '250.44.55.222',
        type: 2,
        _userId: 2,
        _createdDate: '04/21/2012',
        _updatedDate: '07/30/2012'
    },
    {
        id: 99,
        firstName: 'Dorena',
        lastName: 'Oliva',
        email: 'doliva2q@europa.eu',
        userName: 'doliva2q',
        gender: 'Female',
        status: 2,
        dateOfBbirth: '6/16/1987',
        ipAddress: '94.196.238.12',
        type: 1,
        _userId: 1,
        _createdDate: '10/23/2016',
        _updatedDate: '06/28/2014'
    },
    {
        id: 100,
        firstName: 'Sibylla',
        lastName: 'O\'Cahey',
        email: 'socahey2r@paginegialle.it',
        userName: 'socahey2r',
        gender: 'Female',
        status: 3,
        dateOfBbirth: '10/13/1958',
        ipAddress: '139.240.194.212',
        type: 2,
        _userId: 1,
        _createdDate: '11/25/2014',
        _updatedDate: '08/18/2015'
    }
];


/***/ }),

/***/ "e4g8":
/*!*****************************************************!*\
  !*** ./src/app/modules/i18n/translation.service.ts ***!
  \*****************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core



const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
class TranslationService {
    constructor(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        // add new langIds to the list
        this.translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    }
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }
    setLanguage(lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
        }
    }
    /**
     * Returns selected language
     */
    getSelectedLanguage() {
        return (localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
            this.translate.getDefaultLang());
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fksT":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/paginator.model.ts ***!
  \***********************************************************************/
/*! exports provided: PageSizes, PaginatorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return PageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return PaginatorState; });
const PageSizes = [3, 5, 10, 15, 50, 100];
class PaginatorState {
    constructor() {
        this.page = 1;
        this.pageSize = PageSizes[2];
        this.total = 0;
        this.pageSizes = [];
    }
    recalculatePaginator(total) {
        this.total = total;
        return this;
    }
}


/***/ }),

/***/ "fr3w":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/sort.model.ts ***!
  \******************************************************************/
/*! exports provided: SortState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return SortState; });
class SortState {
    constructor() {
        this.column = 'id'; // Id by default
        this.direction = 'asc'; // asc by default;
    }
}


/***/ }),

/***/ "gBr1":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/paginator.model */ "fksT");
/* harmony import */ var _ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function PaginatorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginatorComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ps_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ps_r2, " ");
} }
class PaginatorComponent {
    constructor() {
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizes = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"];
    }
    ngOnInit() {
    }
    pageChange(num) {
        this.paginator.page = num;
        this.paginate.emit(this.paginator);
    }
    sizeChange() {
        this.paginator.pageSize = +this.paginator.pageSize;
        this.paginator.page = 1;
        this.paginate.emit(this.paginator);
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(); };
PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], inputs: { paginator: "paginator", isLoading: "isLoading" }, outputs: { paginate: "paginate" }, decls: 8, vars: 12, consts: [[1, "d-flex", "flex-wrap", "py-2", "mr-3"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageSize", "pageChange"], [1, "d-flex", "align-items-center", "py-3"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "form-control", "form-control-sm", "font-weight-bold", "mr-4", "border-0", "bg-light", "false", 2, "width", "75px", 3, "ngModel", "ngModelChange", "change"], ["class", "btn", 4, "ngFor", "ngForOf"], [1, "react-bootstrap-table-pagin", "ation-total"], [1, "d-flex", "align-items-center"], [1, "mr-2", "text-muted"], [1, "spinner", "spinner-primary", "mr-10"], [1, "btn"]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginatorComponent_Template_ng_pagination_pageChange_1_listener($event) { return ctx.paginator.page = $event; })("pageChange", function PaginatorComponent_Template_ng_pagination_pageChange_1_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginatorComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_Template_select_ngModelChange_4_listener($event) { return ctx.paginator.pageSize = $event; })("change", function PaginatorComponent_Template_select_change_4_listener() { return ctx.sizeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginatorComponent_option_5_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.paginator.total)("page", ctx.paginator.page)("maxSize", 4)("rotate", true)("boundaryLinks", true)("pageSize", ctx.paginator.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paginator.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\u00A0Showing rows ", ctx.paginator.page, " to\u00A0", ctx.paginator.pageSize, " of\u00A0", ctx.paginator.total, "");
    } }, directives: [_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_2__["NgPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paginator',
                templateUrl: './paginator.component.html',
                styleUrls: ['./paginator.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "izYn":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/e-commerce/_fake/fake-server/_e-commerce.data-context.ts ***!
  \**********************************************************************************/
/*! exports provided: ECommerceDataContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerceDataContext", function() { return ECommerceDataContext; });
/* harmony import */ var _customers_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.table */ "e/aN");
/* harmony import */ var _cars_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars.table */ "uDKb");
/* harmony import */ var _remarks_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remarks.table */ "KS1n");
/* harmony import */ var _car_specifications_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-specifications.table */ "ql0D");
/* harmony import */ var _orders_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders.table */ "EJz5");





// Wrapper class
class ECommerceDataContext {
}
ECommerceDataContext.customers = _customers_table__WEBPACK_IMPORTED_MODULE_0__["CustomersTable"].customers;
ECommerceDataContext.cars = _cars_table__WEBPACK_IMPORTED_MODULE_1__["CarsTable"].cars;
// e-commerce car remarks
// one => many relations
ECommerceDataContext.remarks = _remarks_table__WEBPACK_IMPORTED_MODULE_2__["RemarksTable"].remarks;
// e-commerce car specifications
// one => many relations
ECommerceDataContext.carSpecs = _car_specifications_table__WEBPACK_IMPORTED_MODULE_3__["CarSpecificationsTable"].carSpecifications;
ECommerceDataContext.orders = _orders_table__WEBPACK_IMPORTED_MODULE_4__["OrdersTable"].orders;


/***/ }),

/***/ "ql0D":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/e-commerce/_fake/fake-server/car-specifications.table.ts ***!
  \**********************************************************************************/
/*! exports provided: CarSpecificationsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSpecificationsTable", function() { return CarSpecificationsTable; });
// Sub category for cars
class CarSpecificationsTable {
}
CarSpecificationsTable.carSpecifications = [
    {
        id: 1,
        carId: 1,
        specId: 1,
        value: 'purus sit amet nulla',
        _userId: 1,
        _createdDate: '07/14/2011',
        _updatedDate: '07/27/2013'
    }, {
        id: 2,
        carId: 1,
        specId: 2,
        value: 'nulla sed vel enim',
        _userId: 2,
        _createdDate: '09/29/2012',
        _updatedDate: '09/25/2013'
    }, {
        id: 3,
        carId: 1,
        specId: 3,
        value: 'id ornare',
        _userId: 1,
        _createdDate: '01/13/2016',
        _updatedDate: '07/08/2010'
    }, {
        id: 4,
        carId: 1,
        specId: 4,
        value: 'orci luctus et',
        _userId: 1,
        _createdDate: '06/20/2013',
        _updatedDate: '05/09/2013'
    }, {
        id: 5,
        carId: 1,
        specId: 5,
        value: 'convallis duis consequat dui nec',
        _userId: 1,
        _createdDate: '02/24/2014',
        _updatedDate: '04/26/2016'
    }, {
        id: 6,
        carId: 2,
        specId: 6,
        value: 'augue luctus',
        _userId: 1,
        _createdDate: '03/16/2017',
        _updatedDate: '02/01/2018'
    }, {
        id: 7,
        carId: 2,
        specId: 7,
        value: 'in tempus sit amet',
        _userId: 1,
        _createdDate: '01/24/2012',
        _updatedDate: '03/14/2015'
    }, {
        id: 8,
        carId: 2,
        specId: 8,
        value: 'venenatis turpis enim blandit mi',
        _userId: 1,
        _createdDate: '10/02/2017',
        _updatedDate: '05/20/2011'
    }, {
        id: 9,
        carId: 2,
        specId: 9,
        value: 'sed magna at nunc commodo',
        _userId: 2,
        _createdDate: '02/29/2012',
        _updatedDate: '06/30/2015'
    }, {
        id: 10,
        carId: 2,
        specId: 0,
        value: 'nascetur',
        _userId: 1,
        _createdDate: '11/26/2013',
        _updatedDate: '12/03/2013'
    }, {
        id: 11,
        carId: 3,
        specId: 1,
        value: 'magna vestibulum aliquet',
        _userId: 2,
        _createdDate: '06/23/2014',
        _updatedDate: '07/11/2014'
    }, {
        id: 12,
        carId: 3,
        specId: 1,
        value: 'bibendum imperdiet nullam orci',
        _userId: 2,
        _createdDate: '08/14/2013',
        _updatedDate: '06/22/2017'
    }, {
        id: 13,
        carId: 3,
        specId: 2,
        value: 'ligula pellentesque ultrices phasellus',
        _userId: 2,
        _createdDate: '05/03/2016',
        _updatedDate: '06/08/2012'
    }, {
        id: 14,
        carId: 3,
        specId: 3,
        value: 'in faucibus orci luctus',
        _userId: 2,
        _createdDate: '04/10/2016',
        _updatedDate: '11/23/2011'
    }, {
        id: 15,
        carId: 3,
        specId: 4,
        value: 'quis turpis sed ante',
        _userId: 2,
        _createdDate: '12/28/2015',
        _updatedDate: '02/11/2011'
    }, {
        id: 16,
        carId: 4,
        specId: 5,
        value: 'proin risus praesent lectus',
        _userId: 2,
        _createdDate: '04/25/2011',
        _updatedDate: '08/26/2014'
    }, {
        id: 17,
        carId: 4,
        specId: 6,
        value: 'morbi sem mauris laoreet',
        _userId: 2,
        _createdDate: '09/23/2012',
        _updatedDate: '05/17/2018'
    }, {
        id: 18,
        carId: 4,
        specId: 7,
        value: 'erat curabitur gravida',
        _userId: 2,
        _createdDate: '02/26/2015',
        _updatedDate: '01/07/2014'
    }, {
        id: 19,
        carId: 4,
        specId: 8,
        value: 'tellus nulla ut',
        _userId: 1,
        _createdDate: '12/08/2016',
        _updatedDate: '10/08/2015'
    }, {
        id: 20,
        carId: 4,
        specId: 9,
        value: 'tempus sit amet sem fusce',
        _userId: 2,
        _createdDate: '05/09/2011',
        _updatedDate: '11/07/2011'
    }, {
        id: 21,
        carId: 5,
        specId: 0,
        value: 'pellentesque ultrices phasellus',
        _userId: 1,
        _createdDate: '03/22/2011',
        _updatedDate: '07/04/2010'
    }, {
        id: 22,
        carId: 5,
        specId: 1,
        value: 'gravida',
        _userId: 1,
        _createdDate: '01/09/2018',
        _updatedDate: '02/15/2011'
    }, {
        id: 23,
        carId: 5,
        specId: 1,
        value: 'nulla',
        _userId: 1,
        _createdDate: '11/13/2012',
        _updatedDate: '06/25/2017'
    }, {
        id: 24,
        carId: 5,
        specId: 2,
        value: 'et ultrices posuere cubilia',
        _userId: 2,
        _createdDate: '02/24/2014',
        _updatedDate: '12/11/2011'
    }, {
        id: 25,
        carId: 5,
        specId: 3,
        value: 'nulla quisque arcu',
        _userId: 2,
        _createdDate: '12/16/2012',
        _updatedDate: '02/08/2012'
    }, {
        id: 26,
        carId: 6,
        specId: 4,
        value: 'orci eget orci vehicula',
        _userId: 2,
        _createdDate: '09/21/2015',
        _updatedDate: '05/05/2014'
    }, {
        id: 27,
        carId: 6,
        specId: 5,
        value: 'lobortis convallis',
        _userId: 2,
        _createdDate: '08/28/2014',
        _updatedDate: '05/18/2011'
    }, {
        id: 28,
        carId: 6,
        specId: 6,
        value: 'ipsum praesent blandit lacinia',
        _userId: 1,
        _createdDate: '06/14/2015',
        _updatedDate: '12/28/2012'
    }, {
        id: 29,
        carId: 6,
        specId: 7,
        value: 'tempus semper est quam pharetra',
        _userId: 1,
        _createdDate: '08/30/2017',
        _updatedDate: '08/17/2016'
    }, {
        id: 30,
        carId: 6,
        specId: 8,
        value: 'in felis eu sapien',
        _userId: 2,
        _createdDate: '11/18/2010',
        _updatedDate: '09/20/2016'
    }, {
        id: 31,
        carId: 7,
        specId: 9,
        value: 'nam',
        _userId: 2,
        _createdDate: '06/28/2015',
        _updatedDate: '04/19/2011'
    }, {
        id: 32,
        carId: 7,
        specId: 0,
        value: 'metus arcu',
        _userId: 1,
        _createdDate: '06/15/2017',
        _updatedDate: '08/05/2012'
    }, {
        id: 33,
        carId: 7,
        specId: 1,
        value: 'libero nullam',
        _userId: 1,
        _createdDate: '12/15/2014',
        _updatedDate: '03/28/2013'
    }, {
        id: 34,
        carId: 7,
        specId: 1,
        value: 'diam nam',
        _userId: 1,
        _createdDate: '08/28/2017',
        _updatedDate: '08/24/2015'
    }, {
        id: 35,
        carId: 7,
        specId: 2,
        value: 'iaculis congue vivamus metus',
        _userId: 1,
        _createdDate: '06/26/2010',
        _updatedDate: '01/27/2012'
    }, {
        id: 36,
        carId: 8,
        specId: 3,
        value: 'cum sociis natoque',
        _userId: 1,
        _createdDate: '07/04/2016',
        _updatedDate: '12/24/2013'
    }, {
        id: 37,
        carId: 8,
        specId: 4,
        value: 'odio odio elementum eu',
        _userId: 1,
        _createdDate: '06/03/2017',
        _updatedDate: '11/21/2017'
    }, {
        id: 38,
        carId: 8,
        specId: 5,
        value: 'at ipsum ac tellus',
        _userId: 1,
        _createdDate: '06/03/2014',
        _updatedDate: '07/18/2014'
    }, {
        id: 39,
        carId: 8,
        specId: 6,
        value: 'quis',
        _userId: 2,
        _createdDate: '12/25/2015',
        _updatedDate: '10/10/2012'
    }, {
        id: 40,
        carId: 8,
        specId: 7,
        value: 'justo aliquam quis turpis',
        _userId: 2,
        _createdDate: '04/22/2017',
        _updatedDate: '01/16/2018'
    }, {
        id: 41,
        carId: 9,
        specId: 8,
        value: 'adipiscing elit proin risus',
        _userId: 2,
        _createdDate: '02/26/2012',
        _updatedDate: '03/07/2017'
    }, {
        id: 42,
        carId: 9,
        specId: 9,
        value: 'nibh ligula nec sem duis',
        _userId: 1,
        _createdDate: '09/16/2013',
        _updatedDate: '11/13/2011'
    }, {
        id: 43,
        carId: 9,
        specId: 0,
        value: 'purus aliquet at feugiat',
        _userId: 2,
        _createdDate: '05/23/2018',
        _updatedDate: '10/05/2014'
    }, {
        id: 44,
        carId: 9,
        specId: 1,
        value: 'eros suspendisse accumsan tortor quis',
        _userId: 2,
        _createdDate: '10/14/2014',
        _updatedDate: '08/02/2014'
    }, {
        id: 45,
        carId: 9,
        specId: 1,
        value: 'eget rutrum',
        _userId: 2,
        _createdDate: '01/23/2017',
        _updatedDate: '09/28/2012'
    }, {
        id: 46,
        carId: 10,
        specId: 2,
        value: 'hendrerit at vulputate',
        _userId: 1,
        _createdDate: '10/20/2011',
        _updatedDate: '10/09/2010'
    }, {
        id: 47,
        carId: 10,
        specId: 3,
        value: 'et',
        _userId: 1,
        _createdDate: '12/25/2015',
        _updatedDate: '08/26/2015'
    }, {
        id: 48,
        carId: 10,
        specId: 4,
        value: 'volutpat in congue etiam',
        _userId: 2,
        _createdDate: '09/17/2010',
        _updatedDate: '04/12/2016'
    }, {
        id: 49,
        carId: 10,
        specId: 5,
        value: 'odio elementum eu',
        _userId: 2,
        _createdDate: '10/19/2015',
        _updatedDate: '11/10/2017'
    }, {
        id: 50,
        carId: 10,
        specId: 6,
        value: 'donec odio justo',
        _userId: 2,
        _createdDate: '06/18/2016',
        _updatedDate: '01/26/2011'
    }, {
        id: 51,
        carId: 11,
        specId: 7,
        value: 'nulla suspendisse potenti cras in',
        _userId: 2,
        _createdDate: '11/18/2010',
        _updatedDate: '05/30/2017'
    }, {
        id: 52,
        carId: 11,
        specId: 8,
        value: 'nisl',
        _userId: 2,
        _createdDate: '10/26/2010',
        _updatedDate: '05/14/2015'
    }, {
        id: 53,
        carId: 11,
        specId: 9,
        value: 'tincidunt ante',
        _userId: 2,
        _createdDate: '06/29/2016',
        _updatedDate: '09/05/2010'
    }, {
        id: 54,
        carId: 11,
        specId: 0,
        value: 'condimentum curabitur',
        _userId: 1,
        _createdDate: '05/25/2011',
        _updatedDate: '09/29/2014'
    }, {
        id: 55,
        carId: 11,
        specId: 1,
        value: 'mi nulla',
        _userId: 2,
        _createdDate: '12/06/2014',
        _updatedDate: '05/20/2018'
    }, {
        id: 56,
        carId: 12,
        specId: 1,
        value: 'tortor risus',
        _userId: 1,
        _createdDate: '09/26/2016',
        _updatedDate: '08/07/2010'
    }, {
        id: 57,
        carId: 12,
        specId: 2,
        value: 'quisque erat eros',
        _userId: 1,
        _createdDate: '03/18/2012',
        _updatedDate: '03/27/2016'
    }, {
        id: 58,
        carId: 12,
        specId: 3,
        value: 'ultrices posuere cubilia curae nulla',
        _userId: 2,
        _createdDate: '08/11/2010',
        _updatedDate: '01/10/2013'
    }, {
        id: 59,
        carId: 12,
        specId: 4,
        value: 'dapibus',
        _userId: 1,
        _createdDate: '02/15/2015',
        _updatedDate: '10/19/2010'
    }, {
        id: 60,
        carId: 12,
        specId: 5,
        value: 'pharetra magna vestibulum',
        _userId: 2,
        _createdDate: '05/30/2015',
        _updatedDate: '11/13/2011'
    }, {
        id: 61,
        carId: 13,
        specId: 6,
        value: 'lectus',
        _userId: 2,
        _createdDate: '07/20/2012',
        _updatedDate: '03/10/2015'
    }, {
        id: 62,
        carId: 13,
        specId: 7,
        value: 'eget vulputate',
        _userId: 1,
        _createdDate: '04/30/2017',
        _updatedDate: '03/11/2016'
    }, {
        id: 63,
        carId: 13,
        specId: 8,
        value: 'feugiat et eros',
        _userId: 2,
        _createdDate: '04/21/2018',
        _updatedDate: '09/11/2011'
    }, {
        id: 64,
        carId: 13,
        specId: 9,
        value: 'dis parturient',
        _userId: 1,
        _createdDate: '02/09/2011',
        _updatedDate: '02/06/2011'
    }, {
        id: 65,
        carId: 13,
        specId: 0,
        value: 'gravida',
        _userId: 1,
        _createdDate: '08/22/2013',
        _updatedDate: '09/02/2012'
    }, {
        id: 66,
        carId: 14,
        specId: 1,
        value: 'sed',
        _userId: 1,
        _createdDate: '09/18/2010',
        _updatedDate: '06/10/2015'
    }, {
        id: 67,
        carId: 14,
        specId: 1,
        value: 'in blandit',
        _userId: 2,
        _createdDate: '11/21/2017',
        _updatedDate: '06/22/2016'
    }, {
        id: 68,
        carId: 14,
        specId: 2,
        value: 'id',
        _userId: 2,
        _createdDate: '04/23/2014',
        _updatedDate: '02/13/2018'
    }, {
        id: 69,
        carId: 14,
        specId: 3,
        value: 'sapien',
        _userId: 1,
        _createdDate: '09/04/2011',
        _updatedDate: '04/21/2012'
    }, {
        id: 70,
        carId: 14,
        specId: 4,
        value: 'nec nisi volutpat eleifend donec',
        _userId: 2,
        _createdDate: '05/07/2017',
        _updatedDate: '12/28/2015'
    }, {
        id: 71,
        carId: 15,
        specId: 5,
        value: 'non',
        _userId: 2,
        _createdDate: '05/29/2017',
        _updatedDate: '08/15/2014'
    }, {
        id: 72,
        carId: 15,
        specId: 6,
        value: 'pharetra magna ac consequat metus',
        _userId: 2,
        _createdDate: '06/13/2016',
        _updatedDate: '12/22/2014'
    }, {
        id: 73,
        carId: 15,
        specId: 7,
        value: 'erat quisque erat eros',
        _userId: 2,
        _createdDate: '02/27/2013',
        _updatedDate: '07/15/2012'
    }, {
        id: 74,
        carId: 15,
        specId: 8,
        value: 'diam nam tristique tortor eu',
        _userId: 1,
        _createdDate: '01/07/2017',
        _updatedDate: '09/24/2014'
    }, {
        id: 75,
        carId: 15,
        specId: 9,
        value: 'semper sapien a libero nam',
        _userId: 1,
        _createdDate: '02/03/2016',
        _updatedDate: '04/26/2015'
    }, {
        id: 76,
        carId: 16,
        specId: 0,
        value: 'consequat varius',
        _userId: 1,
        _createdDate: '04/06/2014',
        _updatedDate: '04/21/2013'
    }, {
        id: 77,
        carId: 16,
        specId: 1,
        value: 'mauris morbi non',
        _userId: 2,
        _createdDate: '11/15/2017',
        _updatedDate: '02/10/2017'
    }, {
        id: 78,
        carId: 16,
        specId: 1,
        value: 'iaculis justo in hac habitasse',
        _userId: 1,
        _createdDate: '01/11/2013',
        _updatedDate: '12/20/2010'
    }, {
        id: 79,
        carId: 16,
        specId: 2,
        value: 'dui',
        _userId: 1,
        _createdDate: '02/29/2016',
        _updatedDate: '04/20/2014'
    }, {
        id: 80,
        carId: 16,
        specId: 3,
        value: 'pulvinar nulla pede ullamcorper augue',
        _userId: 2,
        _createdDate: '10/31/2013',
        _updatedDate: '12/06/2010'
    }, {
        id: 81,
        carId: 17,
        specId: 4,
        value: 'congue elementum',
        _userId: 1,
        _createdDate: '07/17/2013',
        _updatedDate: '01/28/2014'
    }, {
        id: 82,
        carId: 17,
        specId: 5,
        value: 'dapibus nulla suscipit ligula',
        _userId: 2,
        _createdDate: '08/24/2012',
        _updatedDate: '02/04/2018'
    }, {
        id: 83,
        carId: 17,
        specId: 6,
        value: 'donec ut dolor',
        _userId: 1,
        _createdDate: '01/10/2012',
        _updatedDate: '06/07/2010'
    }, {
        id: 84,
        carId: 17,
        specId: 7,
        value: 'non lectus aliquam sit amet',
        _userId: 2,
        _createdDate: '01/26/2014',
        _updatedDate: '02/06/2016'
    }, {
        id: 85,
        carId: 17,
        specId: 8,
        value: 'sapien iaculis congue vivamus',
        _userId: 2,
        _createdDate: '01/01/2018',
        _updatedDate: '10/20/2012'
    }, {
        id: 86,
        carId: 18,
        specId: 9,
        value: 'dui vel sem',
        _userId: 1,
        _createdDate: '04/04/2016',
        _updatedDate: '01/19/2015'
    }, {
        id: 87,
        carId: 18,
        specId: 0,
        value: 'posuere cubilia curae',
        _userId: 2,
        _createdDate: '06/03/2015',
        _updatedDate: '12/22/2014'
    }, {
        id: 88,
        carId: 18,
        specId: 1,
        value: 'nascetur ridiculus',
        _userId: 1,
        _createdDate: '03/05/2018',
        _updatedDate: '08/04/2015'
    }, {
        id: 89,
        carId: 18,
        specId: 1,
        value: 'vestibulum sagittis sapien cum sociis',
        _userId: 1,
        _createdDate: '12/26/2017',
        _updatedDate: '07/08/2017'
    }, {
        id: 90,
        carId: 18,
        specId: 2,
        value: 'neque vestibulum eget vulputate ut',
        _userId: 2,
        _createdDate: '09/22/2014',
        _updatedDate: '06/08/2015'
    }, {
        id: 91,
        carId: 19,
        specId: 3,
        value: 'habitasse platea',
        _userId: 2,
        _createdDate: '10/06/2011',
        _updatedDate: '07/03/2017'
    }, {
        id: 92,
        carId: 19,
        specId: 4,
        value: 'tortor sollicitudin',
        _userId: 2,
        _createdDate: '03/20/2014',
        _updatedDate: '10/20/2015'
    }, {
        id: 93,
        carId: 19,
        specId: 5,
        value: 'posuere cubilia curae nulla dapibus',
        _userId: 1,
        _createdDate: '04/27/2012',
        _updatedDate: '08/03/2012'
    }, {
        id: 94,
        carId: 19,
        specId: 6,
        value: 'nulla',
        _userId: 1,
        _createdDate: '08/16/2016',
        _updatedDate: '11/02/2016'
    }, {
        id: 95,
        carId: 19,
        specId: 7,
        value: 'vel dapibus at diam nam',
        _userId: 2,
        _createdDate: '08/24/2013',
        _updatedDate: '03/02/2011'
    }, {
        id: 96,
        carId: 20,
        specId: 8,
        value: 'ultrices posuere cubilia',
        _userId: 1,
        _createdDate: '07/04/2010',
        _updatedDate: '06/07/2010'
    }, {
        id: 97,
        carId: 20,
        specId: 9,
        value: 'ut blandit non interdum',
        _userId: 2,
        _createdDate: '04/25/2018',
        _updatedDate: '06/24/2013'
    }, {
        id: 98,
        carId: 20,
        specId: 0,
        value: 'amet erat',
        _userId: 2,
        _createdDate: '07/13/2017',
        _updatedDate: '12/28/2014'
    }, {
        id: 99,
        carId: 20,
        specId: 1,
        value: 'ligula',
        _userId: 1,
        _createdDate: '03/18/2015',
        _updatedDate: '09/14/2012'
    }, {
        id: 100,
        carId: 20,
        specId: 1,
        value: 'id',
        _userId: 1,
        _createdDate: '04/02/2011',
        _updatedDate: '02/16/2017'
    }
];


/***/ }),

/***/ "ratC":
/*!******************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "+BVi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLogued()) {
            this.router.navigate(["/auth/login"]);
            return false;
        }
        let token = this.authService.token;
        let expirado = (JSON.parse(atob(token.split('.')[1]))).exp;
        if ((Math.floor((new Date).getTime() / 1000)) >= expirado) {
            this.authService.logout();
            return false;
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "s3F9":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/de.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Germany
const locale = {
    lang: 'de',
    data: {
        TRANSLATOR: {
            SELECT: 'Wähle deine Sprache',
        },
        MENU: {
            NEW: 'Neu',
            ACTIONS: 'Aktionen',
            CREATE_POST: 'Erstellen Sie einen neuen Beitrag',
            PAGES: 'Pages',
            FEATURES: 'Eigenschaften',
            APPS: 'Apps',
            DASHBOARD: 'Instrumententafel'
        },
        AUTH: {
            GENERAL: {
                OR: 'Oder',
                SUBMIT_BUTTON: 'einreichen',
                NO_ACCOUNT: 'Hast du kein Konto?',
                SIGNUP_BUTTON: 'Anmelden',
                FORGOT_BUTTON: 'Passwort vergessen',
                BACK_BUTTON: 'Zurück',
                PRIVACY: 'Privatsphäre',
                LEGAL: 'Legal',
                CONTACT: 'Kontakt',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nutzername'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "uDKb":
/*!********************************************************************!*\
  !*** ./src/app/modules/e-commerce/_fake/fake-server/cars.table.ts ***!
  \********************************************************************/
/*! exports provided: CarsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsTable", function() { return CarsTable; });
class CarsTable {
}
CarsTable.cars = [
    {
        id: 1,
        model: 'Elise',
        manufacture: 'Lotus',
        modelYear: 2004,
        mileage: 116879,
        // tslint:disable-next-line:max-line-length
        description: `The Lotus Elise first appeared in 1996 and revolutionised small sports car design with its lightweight extruded aluminium chassis and composite body. There have been many variations, but the basic principle remain the same.`,
        color: 'Red',
        price: 18347,
        condition: 2,
        createdDate: '09/30/2017',
        status: 1,
        VINCode: '1FTWX3D52AE575540',
        _userId: 1,
        _createdDate: '03/31/2015',
        _updatedDate: '05/08/2015'
    }, {
        id: 2,
        model: 'Sunbird',
        manufacture: 'Pontiac',
        modelYear: 1984,
        mileage: 99515,
        // tslint:disable-next-line:max-line-length
        description: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 model years,and later as a compact for the 1982 to 1994 model years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 model years, as the 1982 model was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        color: 'Khaki',
        price: 165956,
        condition: 1,
        createdDate: '03/22/2018',
        status: 2,
        VINCode: 'JM1NC2EF8A0293556',
        _userId: 1,
        _createdDate: '11/11/2016',
        _updatedDate: '09/01/2016'
    }, {
        id: 3,
        model: 'Amigo',
        manufacture: 'Isuzu',
        modelYear: 1993,
        mileage: 138027,
        // tslint:disable-next-line:max-line-length
        description: `The Isuzu MU is a mid-size SUV that was produced by the Japan-based manufacturer Isuzu. The three-door MU was introduced in 1989, followed in 1990 by the five-door version called Isuzu MU Wizard, both of which stopped production in 1998 to be replaced by a second generation. This time, the five-door version dropped the "MU" prefix, to become the Isuzu Wizard. The acronym "MU" is short for "Mysterious Utility". Isuzu manufactured several variations to the MU and its derivates for sale in other countries.`,
        color: 'Aquamarine',
        price: 45684,
        condition: 1,
        createdDate: '03/06/2018',
        status: 1,
        VINCode: '1G6DG8E56C0973889',
        _userId: 1,
        _createdDate: '08/14/2012',
        _updatedDate: '03/21/2013'
    }, {
        id: 4,
        model: 'LS',
        manufacture: 'Lexus',
        modelYear: 2004,
        mileage: 183068,
        // tslint:disable-next-line:max-line-length
        description: `The Lexus LS (Japanese: レクサス・LS, Rekusasu LS) is a full-size luxury car (F-segment in Europe) serving as the flagship model of Lexus, the luxury division of Toyota. For the first four generations, all LS models featured V8 engines and were predominantly rear-wheel-drive, with Lexus also offering all-wheel-drive, hybrid, and long-wheelbase variants. The fifth generation changed to using a V6 engine with no V8 option, and the long wheelbase variant was removed entirely.`,
        color: 'Mauv',
        price: 95410,
        condition: 2,
        createdDate: '02/03/2018',
        status: 2,
        VINCode: '2T1BU4EE6DC859114',
        _userId: 2,
        _createdDate: '11/25/2012',
        _updatedDate: '08/15/2013'
    }, {
        id: 5,
        model: 'Paseo',
        manufacture: 'Toyota',
        modelYear: 1997,
        mileage: 74884,
        // tslint:disable-next-line:max-line-length
        description: `The Toyota Paseo (known as the Cynos in Japan and other regions) is a sports styled compact car sold from 1991–1999 and was loosely based on the Tercel. It was available as a coupe and in later models as a convertible. Toyota stopped selling the car in the United States in 1997, however the car continued to be sold in Canada, Europe and Japan until 1999, but had no direct replacement. The Paseo, like the Tercel, shares a platform with the Starlet. Several parts are interchangeable between the three`,
        color: 'Pink',
        price: 24796,
        condition: 2,
        createdDate: '08/13/2017',
        status: 1,
        VINCode: '1D7RB1GP0AS597432',
        _userId: 1,
        _createdDate: '11/21/2016',
        _updatedDate: '10/09/2012'
    }, {
        id: 6,
        model: 'M',
        manufacture: 'Infiniti',
        modelYear: 2009,
        mileage: 194846,
        // tslint:disable-next-line:max-line-length
        description: `The Infiniti M is a line of mid-size luxury (executive) cars from the Infiniti luxury division of Nissan.\r\nThe first iteration was the M30 Coupe/Convertible, which were rebadged JDM Nissan Leopard.\r\nAfter a long hiatus, the M nameplate was used for Infiniti's mid-luxury sedans (executive cars). First was the short-lived M45 sedan, a rebadged version of the Japanese-spec Nissan Gloria. The next generations, the M35/45 and M37/56/35h/30d, became the flagship of the Infiniti brand and are based on the JDM Nissan Fuga.`,
        color: 'Puce',
        price: 30521,
        condition: 2,
        createdDate: '01/27/2018',
        status: 1,
        VINCode: 'YV1940AS1D1542424',
        _userId: 2,
        _createdDate: '03/13/2016',
        _updatedDate: '12/14/2013'
    }, {
        id: 7,
        model: 'Phantom',
        manufacture: 'Rolls-Royce',
        modelYear: 2008,
        mileage: 164124,
        // tslint:disable-next-line:max-line-length
        description: `The Rolls-Royce Phantom VIII is a luxury saloon car manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of Rolls-Royce Phantom, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths`,
        color: 'Purple',
        price: 196247,
        condition: 2,
        createdDate: '09/28/2017',
        status: 2,
        VINCode: '3VWML7AJ1DM234625',
        _userId: 2,
        _createdDate: '03/31/2012',
        _updatedDate: '06/27/2014'
    }, {
        id: 8,
        model: 'QX',
        manufacture: 'Infiniti',
        modelYear: 2002,
        mileage: 57410,
        // tslint:disable-next-line:max-line-length
        description: `The Infiniti QX80 (called the Infiniti QX56 until 2013) is a full-size luxury SUV built by Nissan Motor Company's Infiniti division. The naming convention originally adhered to the current trend of using a numeric designation derived from the engine's displacement, thus QX56 since the car has a 5.6-liter engine. From the 2014 model year, the car was renamed the QX80, as part of Infiniti's model name rebranding. The new name carries no meaning beyond suggesting that the vehicle is larger than smaller models such as the QX60`,
        color: 'Green',
        price: 185775,
        condition: 2,
        createdDate: '11/15/2017',
        status: 1,
        VINCode: 'WDDHF2EB9CA161524',
        _userId: 1,
        _createdDate: '03/17/2013',
        _updatedDate: '09/05/2014'
    }, {
        id: 9,
        model: 'Daytona',
        manufacture: 'Dodge',
        modelYear: 1993,
        mileage: 4444,
        // tslint:disable-next-line:max-line-length
        description: `The Dodge Daytona was an automobile which was produced by the Chrysler Corporation under their Dodge division from 1984 to 1993. It was a front-wheel drive hatchback based on the Chrysler G platform, which was derived from the Chrysler K platform. The Chrysler Laser was an upscale rebadged version of the Daytona. The Daytona was restyled for 1987, and again for 1992. It replaced the Mitsubishi Galant-based Challenger, and slotted between the Charger and the Conquest. The Daytona was replaced by the 1995 Dodge Avenger, which was built by Mitsubishi Motors. The Daytona derives its name mainly from the Dodge Charger Daytona, which itself was named after the Daytona 500 race in Daytona Beach, Florida.`,
        color: 'Maroon',
        price: 171898,
        condition: 1,
        createdDate: '12/24/2017',
        status: 2,
        VINCode: 'WBAET37422N752051',
        _userId: 2,
        _createdDate: '11/17/2012',
        _updatedDate: '03/17/2018'
    }, {
        id: 10,
        model: '1500 Silverado',
        manufacture: 'Chevrolet',
        modelYear: 1999,
        mileage: 195310,
        // tslint:disable-next-line:max-line-length
        description: `The Chevrolet Silverado, and its mechanically identical cousin, the GMC Sierra, are a series of full-size and heavy-duty pickup trucks manufactured by General Motors and introduced in 1998 as the successor to the long-running Chevrolet C/K line. The Silverado name was taken from a trim level previously used on its predecessor, the Chevrolet C/K pickup truck from 1975 through 1998. General Motors continues to offer a GMC-badged variant of the Chevrolet full-size pickup under the GMC Sierra name, first used in 1987 for its variant of the GMT400 platform trucks.`,
        color: 'Blue',
        price: 25764,
        condition: 1,
        createdDate: '08/30/2017',
        status: 2,
        VINCode: '1N6AF0LX6EN590806',
        _userId: 2,
        _createdDate: '10/06/2013',
        _updatedDate: '03/27/2017'
    }, {
        id: 11,
        model: 'CTS',
        manufacture: 'Cadillac',
        modelYear: 2012,
        mileage: 170862,
        // tslint:disable-next-line:max-line-length
        description: `The Cadillac CTS is a mid-size luxury car / executive car designed, engineered, manufactured and marketed by General Motors, and now in its third generation. \r\nInitially available only as a 4-door sedan on the GM Sigma platform, GM had offered the second generation CTS in three body styles: 4-door sedan, 2-door coupe, and 5-door sport wagon also using the Sigma platform — and the third generation in coupe and sedan configurations, using a stretched version of the GM Alpha platform.\r\nWayne Cherry and Kip Wasenko designed the exterior of the first generation CTS, marking the production debut of a design language (marketed as "Art and Science") first seen on the Evoq concept car. Bob Boniface and Robin Krieg designed the exterior of the third generation CTS`,
        color: 'Crimson',
        price: 80588,
        condition: 1,
        createdDate: '02/15/2018',
        status: 1,
        VINCode: '1G4HR54KX4U506530',
        _userId: 2,
        _createdDate: '09/04/2016',
        _updatedDate: '09/17/2012'
    }, {
        id: 12,
        model: 'Astro',
        manufacture: 'Chevrolet',
        modelYear: 1995,
        mileage: 142137,
        // tslint:disable-next-line:max-line-length
        description: `The Chevrolet Astro was a rear-wheel drive van/minivan manufactured and marketed by the American automaker Chevrolet from 1985 to 2005 and over two build generations. Along with its rebadged variant, the GMC Safari, the Astro was marketed in passenger as well as cargo and livery configurations—featuring a V6 engine, unibody construction with a separate front engine/suspension sub-frame, leaf-spring rear suspension, rear bi-parting doors, and a seating capacity of up to eight passengers`,
        color: 'Teal',
        price: 72430,
        condition: 2,
        createdDate: '07/31/2017',
        status: 1,
        VINCode: 'KMHGH4JH2DU676107',
        _userId: 1,
        _createdDate: '02/12/2013',
        _updatedDate: '01/26/2017'
    }, {
        id: 13,
        model: 'XL7',
        manufacture: 'Suzuki',
        modelYear: 2009,
        mileage: 165165,
        // tslint:disable-next-line:max-line-length
        description: `The Suzuki XL-7 (styled as XL7 for the second generation) is Suzuki's mid-sized SUV that was made from 1998 to 2009, over two generations. It was slotted above the Grand Vitara in Suzuki's lineup.`,
        color: 'Puce',
        price: 118667,
        condition: 1,
        createdDate: '02/04/2018',
        status: 1,
        VINCode: '1N6AF0LX9EN733005',
        _userId: 2,
        _createdDate: '10/31/2015',
        _updatedDate: '08/24/2015'
    }, {
        id: 14,
        model: 'SJ 410',
        manufacture: 'Suzuki',
        modelYear: 1984,
        mileage: 176074,
        // tslint:disable-next-line:max-line-length
        description: `The SJ-Series was introduced to the United States (Puerto Rico (SJ-410) and Canada earlier) in 1985 for the 1986 model year. It was priced at $6200 and 47,000 were sold in its first year. The Samurai had a 1.3 liter, 63 hp (47 kW), 4-cylinder engine and was available as a convertible or a hardtop, and with or without a rear seat. The Suzuki Samurai became intensely popular within the serious 4WD community for its good off-road performance and reliability compared to other 4WDs of the time. This is due to the fact that while very compact and light, it is a real 4WD vehicle equipped with a transfer case, switchable 4WD and low range. Its lightness makes it a very nimble off-roader less prone to sinking in softer ground than heavier types. It is also considered a great beginner off-roader due to its simple design and ease of engine and suspension modifications.`,
        color: 'Orange',
        price: 84325,
        condition: 1,
        createdDate: '12/22/2017',
        status: 1,
        VINCode: '2C3CDYBT6DH183756',
        _userId: 1,
        _createdDate: '05/30/2010',
        _updatedDate: '01/02/2014'
    }, {
        id: 15,
        model: 'F-Series',
        manufacture: 'Ford',
        modelYear: 1995,
        mileage: 53030,
        // tslint:disable-next-line:max-line-length
        description: `The Ford F-Series is a series of light-duty trucks and medium-duty trucks (Class 2-7) that have been marketed and manufactured by Ford Motor Company since 1948. While most variants of the F-Series trucks are full-size pickup trucks, the F-Series also includes chassis cab trucks and commercial vehicles. The Ford F-Series has been the best-selling vehicle in the United States since 1986 and the best-selling pickup since 1977.[1][2] It is also the best selling vehicle in Canada.[3] As of the 2018 model year, the F-Series generates $41.0 billion in annual revenue for Ford, making the F-Series brand more valuable than Coca-Cola and Nike.`,
        color: 'Aquamarine',
        price: 77108,
        condition: 1,
        createdDate: '01/09/2018',
        status: 1,
        VINCode: 'WBAVB33526P873481',
        _userId: 1,
        _createdDate: '12/29/2016',
        _updatedDate: '02/14/2012'
    }, {
        id: 16,
        model: 'HS',
        manufacture: 'Lexus',
        modelYear: 2011,
        mileage: 84718,
        // tslint:disable-next-line:max-line-length
        description: `The Lexus HS (Japanese: レクサス・HS, Rekusasu HS) is a dedicated hybrid vehicle introduced by Lexus as a new entry-level luxury compact sedan in 2009.[2] Built on the Toyota New MC platform,[3] it is classified as a compact under Japanese regulations concerning vehicle exterior dimensions and engine displacement. Unveiled at the North American International Auto Show in January 2009, the HS 250h went on sale in July 2009 in Japan, followed by the United States in August 2009 as a 2010 model. The HS 250h represented the first dedicated hybrid vehicle in the Lexus lineup, as well as the first offered with an inline-four gasoline engine.[4] Bioplastic materials are used for the vehicle interior.[5] With a total length of 184.8 inches, the Lexus HS is slightly larger than the Lexus IS, but still smaller than the mid-size Lexus ES.`,
        color: 'Purple',
        price: 140170,
        condition: 1,
        createdDate: '11/14/2017',
        status: 2,
        VINCode: '1FTWF3A56AE545514',
        _userId: 1,
        _createdDate: '12/19/2014',
        _updatedDate: '11/09/2014'
    }, {
        id: 17,
        model: 'Land Cruiser',
        manufacture: 'Toyota',
        modelYear: 2008,
        mileage: 157019,
        // tslint:disable-next-line:max-line-length
        description: `Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle.[2][3] The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle.[4] Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.`,
        color: 'Crimson',
        price: 72638,
        condition: 2,
        createdDate: '08/08/2017',
        status: 2,
        VINCode: '3C3CFFDR2FT957799',
        _userId: 1,
        _createdDate: '05/30/2010',
        _updatedDate: '11/06/2012'
    }, {
        id: 18,
        model: 'Wrangler',
        manufacture: 'Jeep',
        modelYear: 1994,
        mileage: 55857,
        // tslint:disable-next-line:max-line-length
        description: `The Jeep Wrangler is a series of compact and mid-size (Wrangler Unlimited and Wrangler 4-door JL) four-wheel drive off-road vehicle models, manufactured by Jeep since 1986, and currently migrating from its third into its fourth generation. The Wrangler JL was unveiled in late 2017 and will be produced at Jeep's Toledo Complex.`,
        color: 'Red',
        price: 193523,
        condition: 1,
        createdDate: '02/28/2018',
        status: 2,
        VINCode: '3C4PDCAB7FT652291',
        _userId: 1,
        _createdDate: '10/26/2011',
        _updatedDate: '10/04/2016'
    }, {
        id: 19,
        model: 'Sunbird',
        manufacture: 'Pontiac',
        modelYear: 1994,
        mileage: 165202,
        // tslint:disable-next-line:max-line-length
        description: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 model years, and later as a compact for the 1982 to 1994 model years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 model years, as the 1982 model was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        color: 'Blue',
        price: 198739,
        condition: 1,
        createdDate: '05/13/2017',
        status: 2,
        VINCode: '1GD22XEG9FZ103872',
        _userId: 2,
        _createdDate: '07/24/2013',
        _updatedDate: '10/03/2013'
    }, {
        id: 20,
        model: 'A4',
        manufacture: 'Audi',
        modelYear: 1998,
        mileage: 117958,
        // tslint:disable-next-line:max-line-length
        description: `The A4 has been built in five generations and is based on the Volkswagen Group B platform. The first generation A4 succeeded the Audi 80. The automaker's internal numbering treats the A4 as a continuation of the Audi 80 lineage, with the initial A4 designated as the B5-series, followed by the B6, B7, B8 and the B9. The B8 and B9 versions of the A4 are built on the Volkswagen Group MLB platform shared with many other Audi models and potentially one Porsche model within Volkswagen Group`,
        color: 'Yellow',
        price: 159377,
        condition: 1,
        createdDate: '12/15/2017',
        status: 2,
        VINCode: '2C3CDXCT2FH350366',
        _userId: 2,
        _createdDate: '12/04/2014',
        _updatedDate: '03/07/2014'
    }, {
        id: 21,
        model: 'Camry Solara',
        manufacture: 'Toyota',
        modelYear: 2006,
        mileage: 22436,
        // tslint:disable-next-line:max-line-length
        description: `The Toyota Camry Solara, popularly known as the Toyota Solara, is a mid-size coupe/convertible built by Toyota. The Camry Solara is mechanically based on the Toyota Camry and effectively replaced the discontinued Camry Coupe (XV10); however, in contrast with its predecessor's conservative design, the Camry Solara was designed with a greater emphasis on sportiness, with more rakish styling, and uprated suspension and engine tuning intended to provide a sportier feel.[5] The coupe was launched in late 1998 as a 1999 model.[1] In 2000, the convertible was introduced, effectively replacing the Celica convertible in Toyota's North American lineup`,
        color: 'Green',
        price: 122562,
        condition: 1,
        createdDate: '07/11/2017',
        status: 1,
        VINCode: '3C3CFFHH6DT874066',
        _userId: 2,
        _createdDate: '03/21/2018',
        _updatedDate: '02/23/2014'
    }, {
        id: 22,
        model: 'Tribeca',
        manufacture: 'Subaru',
        modelYear: 2007,
        mileage: 127958,
        // tslint:disable-next-line:max-line-length
        description: `The Subaru Tribeca is a mid-size crossover SUV made from 2005 to 2014. Released in some markets, including Canada, as the Subaru B9 Tribeca, the name "Tribeca" derives from the Tribeca neighborhood of New York City.[1] Built on the Subaru Legacy platform and sold in five- and seven-seat configurations, the Tribeca was intended to be sold alongside a slightly revised version known as the Saab 9-6. Saab, at the time a subsidiary of General Motors (GM), abandoned the 9-6 program just prior to its release subsequent to GM's 2005 divestiture of its 20 percent stake in FHI.`,
        color: 'Yellow',
        price: 90221,
        condition: 2,
        createdDate: '11/12/2017',
        status: 1,
        VINCode: 'WVWGU7AN9AE957575',
        _userId: 1,
        _createdDate: '07/04/2011',
        _updatedDate: '08/25/2013'
    }, {
        id: 23,
        model: '1500 Club Coupe',
        manufacture: 'GMC',
        modelYear: 1997,
        mileage: 95783,
        // tslint:disable-next-line:max-line-length
        description: `GMC (General Motors Truck Company), formally the GMC Division of General Motors LLC, is a division of the American automobile manufacturer General Motors (GM) that primarily focuses on trucks and utility vehicles. GMC sells pickup and commercial trucks, buses, vans, military vehicles, and sport utility vehicles marketed worldwide by General Motors.`,
        color: 'Teal',
        price: 64376,
        condition: 2,
        createdDate: '06/28/2017',
        status: 1,
        VINCode: 'SCFBF04BX7G920997',
        _userId: 2,
        _createdDate: '02/21/2017',
        _updatedDate: '01/29/2015'
    }, {
        id: 24,
        model: 'Firebird',
        manufacture: 'Pontiac',
        modelYear: 2002,
        mileage: 74063,
        // tslint:disable-next-line:max-line-length
        description: `The Pontiac Firebird is an American automobile built by Pontiac from the 1967 to the 2002 model years. Designed as a pony car to compete with the Ford Mustang, it was introduced 23 February 1967, the same model year as GM's Chevrolet division platform-sharing Camaro.[1] This also coincided with the release of the 1967 Mercury Cougar, Ford's upscale, platform-sharing version of the Mustang. The name "Firebird" was also previously used by GM for the General Motors Firebird 1950s and early-1960s`,
        color: 'Puce',
        price: 94178,
        condition: 2,
        createdDate: '09/13/2017',
        status: 1,
        VINCode: '3C63D2JL5CG563879',
        _userId: 2,
        _createdDate: '05/11/2014',
        _updatedDate: '11/24/2012'
    }, {
        id: 25,
        model: 'RAV4',
        manufacture: 'Toyota',
        modelYear: 1996,
        mileage: 99461,
        // tslint:disable-next-line:max-line-length
        description: `The Toyota RAV4 (Japanese: トヨタ RAV4 Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile manufacturer Toyota. This was the first compact crossover SUV;[1] it made its debut in Japan and Europe in 1994,[2] and in North America in 1995. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel-drive, RAV4 stands for "Recreational Activity Vehicle: 4-wheel drive", because the aforementioned equipment is an option in select countries`,
        color: 'Goldenrod',
        price: 48342,
        condition: 1,
        createdDate: '12/29/2017',
        status: 1,
        VINCode: '2C4RDGDG6DR836144',
        _userId: 2,
        _createdDate: '04/23/2011',
        _updatedDate: '07/19/2016'
    }, {
        id: 26,
        model: 'Amanti / Opirus',
        manufacture: 'Kia',
        modelYear: 2007,
        mileage: 189651,
        // tslint:disable-next-line:max-line-length
        description: `The Kia Opirus was an executive car manufactured and marketed by Kia Motors that was launched in April 2003 and was marketed globally under various nameplates, prominently as the Amanti. It was considered to be Kia's flagship vehicle.`,
        color: 'Indigo',
        price: 44292,
        condition: 2,
        createdDate: '09/01/2017',
        status: 2,
        VINCode: '1C4SDHCT2CC055294',
        _userId: 2,
        _createdDate: '04/09/2018',
        _updatedDate: '04/17/2014'
    }, {
        id: 27,
        model: 'S60',
        manufacture: 'Volvo',
        modelYear: 2001,
        mileage: 78963,
        // tslint:disable-next-line:max-line-length
        description: `First introduced in 2004, Volvo's S60 R used a Haldex all-wheel-drive system mated to a 300 PS (221 kW; 296 hp) / 400 N⋅m (300 lbf⋅ft) inline-5. The 2004–2005 models came with a 6-speed manual transmission, or an available 5-speed automatic which allowed only 258 lb⋅ft (350 N⋅m) torque in 1st and 2nd gears. The 2006–2007 models came with a 6-speed manual or 6-speed automatic transmission (which was no longer torque-restricted)`,
        color: 'Goldenrod',
        price: 9440,
        condition: 1,
        createdDate: '11/06/2017',
        status: 1,
        VINCode: '3C6TD5CT5CG316067',
        _userId: 2,
        _createdDate: '01/11/2016',
        _updatedDate: '04/18/2013'
    }, {
        id: 28,
        model: 'Grand Marquis',
        manufacture: 'Mercury',
        modelYear: 1984,
        mileage: 153027,
        // tslint:disable-next-line:max-line-length
        description: `The Mercury Grand Marquis is an automobile that was sold by the Mercury division of Ford Motor Company from 1975 to 2011. From 1975 to 1982, it was the premium model of the Mercury Marquis model line, becoming a standalone model line in 1983. For its entire production run, the Grand Marquis served as the flagship of the Mercury line, with the Ford (LTD) Crown Victoria serving as its Ford counterpart. In addition, from 1979 to 2011, the Grand Marquis shared the rear-wheel drive Panther platform alongside the Lincoln Town Car`,
        color: 'Goldenrod',
        price: 76027,
        condition: 1,
        createdDate: '12/16/2017',
        status: 2,
        VINCode: '3C3CFFJH2DT871398',
        _userId: 1,
        _createdDate: '04/04/2014',
        _updatedDate: '08/24/2017'
    }, {
        id: 29,
        model: 'Talon',
        manufacture: 'Eagle',
        modelYear: 1991,
        mileage: 111234,
        // tslint:disable-next-line:max-line-length
        description: `Cosmetically, differences between the three were found in wheels, availability of colors, tail lights, front and rear bumpers, and spoilers. The Talon featured two-tone body color with a black 'greenhouse' (roof, pillars, door-mounted mirrors) regardless of the body color. The variants featured 5-speed manual or 4-speed automatic transmissions and a hood bulge on the left-hand side of the car in order for camshaft clearance on the 4G63 engine. The base model DL did not use this engine but still had a bulge as evident in the 1992 Talon brochure. 2nd Generation cars all had such a bulge, even with the inclusion of the 420A engine`,
        color: 'Teal',
        price: 157216,
        condition: 1,
        createdDate: '05/08/2017',
        status: 2,
        VINCode: 'YV1902FH1D2957659',
        _userId: 1,
        _createdDate: '04/16/2017',
        _updatedDate: '01/14/2011'
    }, {
        id: 30,
        model: 'Passport',
        manufacture: 'Honda',
        modelYear: 2002,
        mileage: 3812,
        // tslint:disable-next-line:max-line-length
        description: `The Passport was a part of a partnership between Isuzu and Honda in the 1990s, which saw an exchange of passenger vehicles from Honda to Isuzu, such as the Isuzu Oasis, and trucks from Isuzu to Honda, such as the Passport and Acura SLX. This arrangement was convenient for both companies, as Isuzu discontinued passenger car production in 1993 after a corporate restructuring, and Honda was in desperate need a SUV, a segment that was growing in popularity in North America as well as Japan during the 1990s. The partnership ended in 2002 with the discontinuation of the Passport in favor of the Honda-engineered Pilot`,
        color: 'Puce',
        price: 41299,
        condition: 2,
        createdDate: '03/08/2018',
        status: 1,
        VINCode: 'WVWEU9AN4AE524071',
        _userId: 2,
        _createdDate: '07/31/2015',
        _updatedDate: '07/03/2017'
    }, {
        id: 31,
        model: 'H3',
        manufacture: 'Hummer',
        modelYear: 2006,
        mileage: 196321,
        // tslint:disable-next-line:max-line-length
        description: `The Hummer H3 is a sport utility vehicle/off-road vehicle from Hummer that was produced from 2005 to 2010. Introduced for the 2006 model year, it was based on a highly modified GMT355 underpinning the Chevrolet Colorado/GMC Canyon compact pickup trucks that were also built at GM's Shreveport Operations in Shreveport, Louisiana and the Port Elizabeth plant in South Africa. The H3 was actually the smallest among the Hummer models. It was available either as a traditional midsize SUV or as a midsize pickup known as the H3T`,
        color: 'Pink',
        price: 186964,
        condition: 2,
        createdDate: '06/04/2017',
        status: 2,
        VINCode: '4T1BF1FK4FU746230',
        _userId: 2,
        _createdDate: '03/09/2014',
        _updatedDate: '02/10/2017'
    }, {
        id: 32,
        model: 'Comanche',
        manufacture: 'Jeep',
        modelYear: 1992,
        mileage: 72285,
        // tslint:disable-next-line:max-line-length
        description: `The Jeep Comanche (designated MJ) is a pickup truck variant of the Cherokee compact SUV (1984–2001)[3] manufactured and marketed by Jeep for model years 1986-1992 in rear wheel (RWD) and four-wheel drive (4WD) models as well as two cargo bed lengths: six-feet (1.83 metres) and seven-feet (2.13 metres)`,
        color: 'Mauv',
        price: 145971,
        condition: 2,
        createdDate: '09/01/2017',
        status: 1,
        VINCode: '1J4PN2GK1BW745045',
        _userId: 2,
        _createdDate: '07/27/2013',
        _updatedDate: '09/23/2016'
    }, {
        id: 33,
        model: 'Blazer',
        manufacture: 'Chevrolet',
        modelYear: 1993,
        mileage: 189804,
        // tslint:disable-next-line:max-line-length
        description: `The 2014 – 2nd generation, MY14 Duramax 2.8L diesel engines have several new parts, namely a new water-cooled variable-geometry turbocharger, a new high-pressure common-rail fuel delivery system, a new exhaust gas recirculation (EGR) system, a new intake manifold, a new cylinder head, a new cylinder block, a new balance shaft unit and a new Engine Control Module (ECM). and now produce 197 hp and 369 Ft/Lbs of torque`,
        color: 'Indigo',
        price: 154594,
        condition: 1,
        createdDate: '09/13/2017',
        status: 1,
        VINCode: '1G6KD57Y43U482896',
        _userId: 1,
        _createdDate: '05/27/2017',
        _updatedDate: '05/17/2016'
    }, {
        id: 34,
        model: 'Envoy XUV',
        manufacture: 'GMC',
        modelYear: 2004,
        mileage: 187960,
        // tslint:disable-next-line:max-line-length
        description: `The GMC Envoy is a mid-size SUV that was produced by General Motors. It was introduced for the 1998 model year. After the first generation Envoy was discontinued after the 2000 model year, but the Envoy was reintroduced and redesigned for the 2002 model year, and it was available in the GMC line of vehicles from the 2002 to 2009 model years`,
        color: 'Turquoise',
        price: 185103,
        condition: 2,
        createdDate: '12/07/2017',
        status: 1,
        VINCode: '5GAER23D09J658030',
        _userId: 2,
        _createdDate: '12/08/2017',
        _updatedDate: '06/15/2011'
    }
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/_services/auth.guard */ "ratC");





const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-errors-errors-module */ "modules-errors-errors-module").then(__webpack_require__.bind(null, /*! ./modules/errors/errors.module */ "o1DB")).then((m) => m.ErrorsModule),
    },
    {
        path: '',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | pages-layout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-layout-module")]).then(__webpack_require__.bind(null, /*! ./pages/layout.module */ "P0uM")).then((m) => m.LayoutModule),
    },
    { path: '**', redirectTo: 'error/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xGIk":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");




function SortIconComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Up-2.svg");
} }
function SortIconComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Down-2.svg");
} }
function SortIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SortIconComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "desc");
} }
function SortIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Shopping/Sort1.svg");
} }
class SortIconComponent {
    constructor(el) {
        this.el = el;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
    }
    ngOnChanges() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        // Load css classes
        parent.classList.add('sortable');
        parent.classList.remove('sortable-active');
        if (this.column === this.activeColumn) {
            parent.classList.add('sortable-active');
        }
        // load icons
        this.isActive = this.column === this.activeColumn;
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        parent.addEventListener('click', () => {
            this.sort.emit(this.column);
        });
    }
}
SortIconComponent.ɵfac = function SortIconComponent_Factory(t) { return new (t || SortIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SortIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortIconComponent, selectors: [["app-sort-icon"]], inputs: { column: "column", activeColumn: "activeColumn", activeDirection: "activeDirection" }, outputs: { sort: "sort" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", 3, "inlineSVG"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", "svg-icon-sort", 3, "inlineSVG"]], template: function SortIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SortIconComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sort-icon',
                templateUrl: './sort-icon.component.html',
                styleUrls: ['./sort-icon.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "z+X0":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/es.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Spain
const locale = {
    lang: 'es',
    data: {
        TRANSLATOR: {
            SELECT: 'Elige tu idioma',
        },
        MENU: {
            NEW: 'nuevo',
            ACTIONS: 'Comportamiento',
            CREATE_POST: 'Crear nueva publicación',
            PAGES: 'Pages',
            FEATURES: 'Caracteristicas',
            APPS: 'Aplicaciones',
            DASHBOARD: 'Tablero'
        },
        AUTH: {
            GENERAL: {
                OR: 'O',
                SUBMIT_BUTTON: 'Enviar',
                NO_ACCOUNT: 'No tienes una cuenta?',
                SIGNUP_BUTTON: 'Regístrate',
                FORGOT_BUTTON: 'Se te olvidó tu contraseña',
                BACK_BUTTON: 'Espalda',
                PRIVACY: 'Intimidad',
                LEGAL: 'Legal',
                CONTACT: 'Contacto',
            },
            LOGIN: {
                TITLE: 'Crear una cuenta',
                BUTTON: 'Registrarse',
            },
            FORGOT: {
                TITLE: 'Contraseña olvidada?',
                DESC: 'Ingrese su correo electrónico para restablecer su contraseña',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Usuario'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map