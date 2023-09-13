import { create } from "../controller/user.controller";

const userRoutes = (app: any) => {
    app.post("/user", create)
}

export default userRoutes;