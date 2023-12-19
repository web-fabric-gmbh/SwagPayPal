// Register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register(
    'SwagPayPalExpressButton',
    () => import('./page/swag-paypal.express-checkout'),
    '[data-swag-paypal-express-button]',
);
PluginManager.register(
    'SwagPayPalSmartPaymentButtons',
    () => import('./checkout/swag-paypal.smart-payment-buttons'),
    '[data-swag-paypal-smart-payment-buttons]',
);
PluginManager.register(
    'SwagPaypalAcdcFields',
    () => import('./checkout/swag-paypal.acdc-fields'),
    '[data-swag-paypal-acdc-fields]',
);
PluginManager.register(
    'SwagPayPalInstallmentBanner',
    () => import('./page/swag-paypal.installment-banner'),
    '[data-swag-paypal-installment-banner]',
);
PluginManager.register(
    'SwagPaypalPuiPolling',
    () => import('./swag-paypal.pui-polling'),
    '[data-swag-paypal-pui-polling]',
);
PluginManager.register(
    'SwagPaypalSepa',
    () => import('./checkout/swag-paypal.sepa'),
    '[data-swag-paypal-sepa]',
);
PluginManager.register(
    'SwagPaypalVenmo',
    () => import('./checkout/swag-paypal.venmo'),
    '[data-swag-paypal-venmo]',
);
PluginManager.register(
    'SwagPaypalPayLater',
    () => import('./checkout/swag-paypal.pay-later'),
    '[data-swag-paypal-pay-later]',
);
PluginManager.register(
    'SwagPaypalFundingEligibility',
    () => import('./page/swag-paypal.funding-eligibility'),
    '[data-swag-paypal-funding-eligibility]',
);
