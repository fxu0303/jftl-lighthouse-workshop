module.exports = {
    ci: {
        collect: {
            // url: ['http://127.0.0.1:8080'],
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