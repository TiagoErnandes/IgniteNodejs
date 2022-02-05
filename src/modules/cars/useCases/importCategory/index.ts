import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCateforyController } from "./ImportCateforyController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";


const categoriesRepository =  CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCateforyController(importCategoryUseCase);


export { importCategoryController };