import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "",
    tokenSigningAlg: "RS256"
})

export default jwtCheck;