module.exports = {
    apps : [{
      script: 'index.js',
    }, {
      script: 'index.js'
    }],
     
    // Deployment Configuration
    deploy : {
      production : {
         "user" : "ubuntu",
         "host" : ["https://js.enovasolutions.com/"],
         "path" : "/var/www/js.enovasolutions/",
         "post-deploy" : "npm install"
      }
    }
  };