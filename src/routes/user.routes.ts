import { create, get, getId, update } from "../controller/user.controller";

const userRoutes = (app: any) => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user/:id", getId);
    app.put("/user/:id", update)
}

export default userRoutes;