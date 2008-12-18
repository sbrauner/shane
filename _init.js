core.core.routes();
routes = new Routes();

var blog = core.modules.blog.install();
routes.blog = blog.getRoutes();

function mapUrlToJxpFile(uri) {
  
    if( uri.match(/^\/assets\//) ) {
         return null;
    }
 
    // otherwise, just always return our "controller"
    return "index.jxp";
}
 
 
