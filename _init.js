core.core.routes();
routes = new Routes();

var blog = core.modules.blog.install();
routes.blog = blog.getRoutes();
blog.addTemplateRoot(local.templates);

function mapUrlToJxpFile(uri) {
  
    if( uri.match(/^\/assets\//) ) {
         return null;
    }
 
    // otherwise, just always return our "controller"
    return "index.jxp";
}

useHeader = jxp.pieces.header;
useFooter = jxp.pieces.footer;

