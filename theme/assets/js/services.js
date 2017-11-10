var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('dialogService', ['$uibModal', function ($uibModal) {
    return {
        showDialog: function (dialogData, controller, templateUrl) {
            var modalInstance = $uibModal.open({
                controller: controller,
                templateUrl: templateUrl,
                resolve: {
                    dialogData: function () {
                        return dialogData;
                    }
                }
            });
        }
    }
}]);

storefrontApp.service('feedbackService', ['$http', function ($http) {
    return {
        postFeedback: function (data) {
            return $http.post('storefrontapi/feedback', { model: data });
        }
    }
}]);

storefrontApp.service('customerService', ['$http', function ($http) {
    return {
        getCurrentCustomer: function () {
            return $http.get('storefrontapi/account?t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.service('marketingService', ['$http', function ($http) {
    return {
        getDynamicContent: function (placeName) {
            return $http.get('storefrontapi/marketing/dynamiccontent/' + placeName + '?t=' + new Date().getTime());
        },
    }
}]);

storefrontApp.service('pricingService', ['$http', function ($http) {
	return {
		getActualProductPrices: function (products) {
		    return $http.post('storefrontapi/pricing/actualprices', { products: products });
		}
	}
}]);

storefrontApp.service('catalogService', ['$http', function ($http) {
    return {
        getProduct: function (productIds) {
            return $http.get('storefrontapi/products?productIds=' + productIds + '&t=' + new Date().getTime());
        },
        search: function (criteria) {
            return $http.post('storefrontapi/catalog/search', { searchCriteria: criteria });
        },
        searchCategories: function (criteria) {
            return $http.post('storefrontapi/categories/search', { searchCriteria: criteria });
        }
    }
}]);

storefrontApp.service('cartService', ['$http', function ($http) {
    return {
        getCart: function () {
            return $http.get('storefrontapi/cart?t=' + new Date().getTime());
        },
        getCartItemsCount: function () {
            return $http.get('storefrontapi/cart/itemscount?t=' + new Date().getTime());
        },
        addLineItem: function (productId, quantity) {
            return $http.post('storefrontapi/cart/items', { id: productId, quantity: quantity });
        },
        changeLineItemQuantity: function (lineItemId, quantity) {
            return $http.put('storefrontapi/cart/items', { lineItemId: lineItemId, quantity: quantity });
        },
        removeLineItem: function (lineItemId) {
            return $http.delete('storefrontapi/cart/items?lineItemId=' + lineItemId);
        },
        changeLineItemPrice: function (lineItemId, newPrice) {
        	return $http.put('storefrontapi/cart/items/price', { lineItemId: lineItemId, newPrice: newPrice});
        },
        clearCart: function () {
            return $http.post('storefrontapi/cart/clear');
        },
        getCountries: function () {
            return $http.get('storefrontapi/countries?t=' + new Date().getTime());
        },
        getCountryRegions: function (countryCode) {
        	return $http.get('storefrontapi/countries/' + countryCode + '/regions?t=' + new Date().getTime());
        },
        addCoupon: function (couponCode) {
            return $http.post('storefrontapi/cart/coupons/' + couponCode);
        },
        removeCoupon: function () {
            return $http.delete('storefrontapi/cart/coupons');
        },
        addOrUpdateShipment: function (shipment) {
            return $http.post('storefrontapi/cart/shipments', shipment);
        },
        addOrUpdatePayment: function (payment) {
            return $http.post('storefrontapi/cart/payments', payment );
        },
        getAvailableShippingMethods: function (shipmentId) {
            return $http.get('storefrontapi/cart/shipments/' + shipmentId + '/shippingmethods?t=' + new Date().getTime());
        },
        getAvailablePaymentMethods: function () {
            return $http.get('storefrontapi/cart/paymentmethods?t=' + new Date().getTime());
        },
        addOrUpdatePaymentPlan: function (plan) {
            return $http.post('storefrontapi/cart/paymentPlan', plan);
        },
        removePaymentPlan: function () {
            return $http.delete('storefrontapi/cart/paymentPlan');
        },
        createOrder: function (bankCardInfo) {
            return $http.post('storefrontapi/cart/createorder', { bankCardInfo: bankCardInfo });
        }
    }
}]);

storefrontApp.service('listService', ['$http', function ($http) {
    return {
        getWishlist: function (listName) {
            return $http.get('storefrontapi/lists/' + listName + '?t=' + new Date().getTime());
        },
        contains: function (productId, listName) {
            return $http.get('storefrontapi/lists/' + listName +'/items/'+ productId + '/contains?t=' + new Date().getTime());
        },
        addLineItem: function (productId, listName) {
            return $http.post('storefrontapi/lists/' + listName + '/items', { productId: productId });
        },
        removeLineItem: function (lineItemId, listName) {
            return $http.delete('storefrontapi/lists/' + listName + '/items/' + lineItemId);
        }
    }
}]);

storefrontApp.service('quoteRequestService', ['$http', function ($http) {
    return {
        getCurrentQuoteRequest: function () {
            return $http.get('storefrontapi/quoterequest/current?t=' + new Date().getTime());
        },
        getQuoteRequest: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '?t=' + new Date().getTime());
        },
        getQuoteRequestItemsCount: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '/itemscount?t=' + new Date().getTime());
        },
        addProductToQuoteRequest: function (productId, quantity) {
            return $http.post('storefrontapi/quoterequests/current/items', { productId: productId, quantity: quantity });
        },
        removeProductFromQuoteRequest: function (quoteRequestNumber, quoteItemId) {
            return $http.delete('storefrontapi/quoterequests/' + quoteRequestNumber + '/items/' + quoteItemId);
        },
        submitQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/submit', { quoteForm: quoteRequest });
        },
        rejectQuoteRequest: function (quoteRequestNumber) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/reject');
        },
        updateQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.put('storefrontapi/quoterequests/' + quoteRequestNumber + '/update', { quoteRequest: quoteRequest });
        },
        getTotals: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/totals', { quoteRequest: quoteRequest });
        },
        confirmQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/confirm', { quoteRequest: quoteRequest });
        }
    }
}]);

storefrontApp.service('recommendationService', ['$http', function ($http) {
    return {
        getRecommendedProducts: function (requestData) {
            return $http.post('storefrontapi/recommendations', requestData );
        }
    }
}]);

storefrontApp.service('orderService', ['$http', function ($http) {
    return {
        getOrder: function (orderNumber) {
            return $http.get('storefrontapi/orders/' + orderNumber + '?t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.service('communityService', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage) {

    return {
        registerInCommunity: function (registrationData) {
            if (!$localStorage['community']) {
                $localStorage['community'] = {};
            }
            else if (!_.isEmpty($localStorage['community'][registrationData.user_name]))
                return $q(function (resolve, reject) {
                    resolve('User name already used')
                });

            $localStorage['community'].loggedInUser = registrationData.user_name;
            $localStorage['community'][registrationData.user_name] = {};
            angular.extend($localStorage['community'][registrationData.user_name], { profile: registrationData });
            $localStorage['community'][registrationData.user_name]['profile']['linkedAccounts'] = {};
            console.log($localStorage);

            return $q(function (resolve, reject) {
                resolve('User was registered successfully')
            });
        },
        login: function (data) {
            var confirmedUser = _.filter($localStorage['community'], function (profile) { return _.find(profile, { user_name: data.user_name, password: data.password }) });
            confirmedUser = _.first(confirmedUser);
            if (!_.isEmpty(confirmedUser)) {
                $localStorage['community'].loggedInUser = data.user_name;
                return $q(function (resolve, reject) {
                    resolve(200);
                })
            }
            else return $q(function (resolve, reject) {
                resolve(500);
            })
        },
        updateUserProfile: function (profile) {
            _.extend($localStorage['community'][userName], { profile: profile });
        },
        addContributor: function (data, step, userName) {
            if (!$localStorage['community'][userName]['contributorInformation'])
                $localStorage['community'][userName]['contributorInformation'] = {};

            console.log(data);
            if (!data)
                data = {};
            _.extend($localStorage['community'][userName]['contributorInformation'],{[step]: data });
            console.log($localStorage);

            return $q(function (resolve, reject) {
                resolve($localStorage['community'][userName]['contributorInformation'])
            });
        },
        disconnectGithubAccount: function () {
            var currentUserName = $localStorage['community'].loggedInUser;
                $localStorage['community'][currentUserName]['profile']['linkedAccounts']['githubProfile'] = {};
        },
        linkGithubAccount: function () {
            var currentUserName = $localStorage['community'].loggedInUser,
                possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                accountName = "";
            for (var i = 0; i < 8; i++)
                accountName += possible.charAt(Math.floor(Math.random() * possible.length));
            if (!$localStorage['community'][currentUserName]['profile']) {
                return $q(function (resolve, reject) {
                    resolve('Can`t connect to your account')
                });
            }
            _.extend($localStorage['community'][currentUserName]['profile']['linkedAccounts'],{
                githubProfile: {
                    user_name: accountName,
                    tagRaiting: Math.floor(Math.random() * 29),
                    answer: Math.floor(Math.random() * 33),
                    questions : Math.floor(Math.random() * 18),
                    poolRequest : Math.floor(Math.random() * 24)
                }
            });

            return $q(function (resolve, reject) { resolve('Success') });
        },
        getGithubAccount: function () {
            var currentUserName = $localStorage['community'].loggedInUser;
            if ($localStorage['community'][currentUserName]['profile']['linkedAccounts'].githubProfile)
                return $q(function (resolve, reject) { resolve($localStorage['community'][currentUserName]['profile']['linkedAccounts'].githubProfile) });
            else
                return $q(function (resolve, reject) {
                    resolve({})
                })
        },
        getCustomer: function () {
            var currentUser,
                currentUserName = $localStorage['community'].loggedInUser;
            if (_.isEmpty($localStorage['community'])) {

                return $q(function (resolve, reject) {
                    resolve('User is Unregistered')
                });
            }
            else
                currentUser = $localStorage['community'][currentUserName];

            console.log(currentUser);
            return $q(function (resolve, reject) {
                resolve(currentUser['profile'])
            });
        },
        getContributor: function () {
            var currentUserName = $localStorage['community'].loggedInUser;
            console.log(currentUserName);
            if ($localStorage['community'][currentUserName]['contributorInformation']) {
                return $q(function (resolve, reject) {
                    resolve($localStorage['community'][currentUserName]['contributorInformation'])
                });
            }
            else
                return $q(function (resolve, reject) {
                    resolve({});
                });
        },
        checkUserPersonalData: function (userName) {
            var percentage = 0,
                points = 0,
                tagRaiting = 0,
                answer = 0,
                questions = 0,
                poolRequest = 0;
            var githubPoints = $localStorage['community'][userName]['profile']['linkedAccounts'].githubProfile;

            if ($localStorage['community'][userName]['contributorInformation']) {
                if (!_.isEmpty($localStorage['community'][userName]['contributorInformation']['licenseTerms'])) {
                    console.log('123');
                    percentage += 10;
                }
                if (!_.isEmpty($localStorage['community'][userName]['contributorInformation']['contactInfo'])) {
                    percentage += 20;
                }
                if (!_.isEmpty($localStorage['community'][userName]['contributorInformation']['projectInfo'])) {
                    percentage += 25;
                }
                if (!_.isEmpty($localStorage['community'][userName]['profile'].company)) {
                    percentage += 5;
                }
                if (!_.isEmpty(githubPoints)) {
                    percentage += 20;
                }
            }
           
            if (percentage > 0) 
                points = (percentage / 10 + 11);

            if (!_.isEmpty(githubPoints))
                points += (githubPoints.answer + githubPoints.poolRequest + githubPoints.tagRaiting + 2 * githubPoints.questions);

            return $q(function (resolve, reject) { resolve({ percentage: percentage, points: points, tagRaiting: tagRaiting, answer: answer, questions: questions, poolRequest: poolRequest }) });
        }
    }
}]);
