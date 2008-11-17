function mapUrlToJxpFile(uri) {
  
    // allow any request for a static asset to be just handled
    // by the appserver
    if( uri.match(/^\/assets\//) ) {
         return null;
    }
 
    var session= request.getPostParameter("fb_sig_session_key");
  
    if (session==null){
       return "fblogin.jxp";
    }
 
    // otherwise, just always return our "controller"
 
 
     //initialize Facebook
     core.ws.fb();
     Facebook.api_key ="42696d7cced6055890424b9c9a2c4933";
     Facebook.secret_key="25cbd73b1f5651fb078b7ced673d2075";
  
     Facebook.session_key=session;
     Facebook.format="JSON";
 
 
    return "index.jxp";
}
 
 
