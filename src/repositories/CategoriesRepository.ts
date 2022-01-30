import { Category } from "../model/Category";


interface IcreateCategoryDTO {  
    name: string;         
    description: string;  
}

class CategoriesRepository {
    private categories: Category[];
    
    constructor() {
        this.categories = [];
    }

    create({name, description}: IcreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, { name, description });
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }
}

export { CategoriesRepository };