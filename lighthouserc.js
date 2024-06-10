module.exports = {
    ci: {
        collect: {
            url: ['http://192.168.1.2:8080'],
            //url: ['https://aferreira-deo.github.io/jftl/’], 
        },
        assert: {
            preset: 'lighthouse:recommended',
        },
        upload: {
            target: 'temporary-public-storage'
        },
    },
};