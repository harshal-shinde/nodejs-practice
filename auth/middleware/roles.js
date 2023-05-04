 const admin = (req, res, next)=>{
  if(!req.user.roles.includes('admin'))
    return res.status(403).send({
      ok: false,
      error: 'Access Denied'
    });
    next();
 }

 const editor = (req, res, next) =>{
  if(!req.user.roles.includes('editor'))
    return res.status(403).send({
      of: false,
      error: "Access Denied"
    });
    next();
 }

 const viewer = (req, res, next) =>{
  if(!req.user.roles.includes('viewer'))
    return res.status(403).send({
      of: false,
      error: "Access Denied"
    });
    next();
 }

 module.exports = { admin, editor, viewer };