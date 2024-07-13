module.exports = {
    ci: {
        collect: {
            // url: ['http://192.168.1.2:8080'],
            // url: ['https://aferreira-deo.github.io/jftl/'],
            url: ['https://dev-onboarding.revers.io/onboarding'],
        },
        assert: {
            assertions: {
                'categories:accessibility': ['error', {
                    'minScore': 0.9
                }]
            }
        },
        upload: {
            target: 'temporary-public-storage'
        },
    },
};