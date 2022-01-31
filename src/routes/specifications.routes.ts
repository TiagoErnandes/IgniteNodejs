import {  Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";


import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();


specificationRoutes.post("/", (request,response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    createSpecificationService.execute({name,description});
    return response.status(201).send();
})

specificationRoutes.get("/",(request,response)=>{
    const specification = specificationRepository.list();
    return response.status(200).json({specification})
})

export { specificationRoutes }