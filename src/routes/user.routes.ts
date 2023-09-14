import { create, get, getId } from "../controller/user.controller";

const userRoutes = (app: any) => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user", getId)
}

export default userRoutes;