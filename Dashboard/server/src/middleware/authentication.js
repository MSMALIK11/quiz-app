import Jwt  from "jsonwebtoken";
let PRIVATE_KEY="HEYSHOAIB"


export  const authentication=(req,res,next)=>{
    let token=req.headers.cookie;
    token=token.split('=')[1]
    console.log('auth token',token);
    const decodedToken = Jwt.verify(token,PRIVATE_KEY);
    if (!decodedToken?.data) {
        return res
          .status(401)
          .send({ message: 'Token verification failed. Authorization denied.' });
      }
      req.user = decodedToken.data;
      next()


}