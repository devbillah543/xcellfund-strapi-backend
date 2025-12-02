module.exports = ({ env }) => ({
    /** CKEditor configuration */
    ckeditor5: {
        enabled: true,
        config: {
            editor: {
                removePlugins: ["MediaEmbed"],
            },
        },
    },

    /** Redis configuration */
    redis: {
        config: {
            settings: {
                debug: false,
                enableRedlock: true,
            },
            connections: {
                default: {
                    connection: {
                        host: env("REDIS_HOST", "127.0.0.1"),
                        port: env.int("REDIS_PORT", 6379),
                        password: env("REDIS_PASSWORD", null),
                        db: env.int("REDIS_DB", 0),
                    },
                    settings: {
                        debug: false,
                    },
                },
            },
        },
    },

    /** REST Cache Plugin */
    "rest-cache": {
        enabled: true,
        config: {
            provider: {
                name: "redis",
                options: {
                    connection: "default",
                    ttl: env.int("CACHING_TIMEOUT", 3600 * 1000),
                },
            },

            strategy: {
                keysPrefix: "xcellfund",
                debug: true,
                contentTypes: [
                    { contentType: "api::collateralized-funding.collateralized-funding", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::contact-us.contact-us", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::convertible-debenture.convertible-debenture", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::corporate-accountability.corporate-accountability", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::corporate-focus.corporate-focus", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::corporate-responsibility.corporate-responsibility", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::corporate-sustainability.corporate-sustainability", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::debt-restructuring.debt-restructuring", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::desktop-software.desktop-software", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::employee-pride.employee-pride", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::equity-line-funding.equity-line-funding", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::executive-viewpoint.executive-viewpoint", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::global.global", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::home.home", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::international-impact.international-impact", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::internet-advertising.internet-advertising", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::investment.investment", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::investment-strategy.investment-strategy", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::investor.investor", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::mobile-application.mobile-application", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::niche.niche", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::our-strategy.our-strategy", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::partnership.partnership", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::partnership-process.partnership-process", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::partnership-strategy.partnership-strategy", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::partnership-vs-investment.partnership-vs-investment", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::philanthropy.philanthropy", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::privacy-policy.privacy-policy", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::private-placement.private-placement", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::reg-a-funding.reg-a-funding", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::saas-solution.saas-solution", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::seed-investment.seed-investment", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::series-d-funding.series-d-funding", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::stock-loan.stock-loan", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::terms-of-service.terms-of-service", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::vision-and-goal.vision-and-goal", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::web-property.web-property", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::web-publication.web-publication", hitpass: false, keys: { useQueryParams: false } },
                    { contentType: "api::web-technology.web-technology", hitpass: false, keys: { useQueryParams: false } },
                ],
            },
        },
    },
});
