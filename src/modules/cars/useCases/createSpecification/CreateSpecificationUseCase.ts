import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name:string;
    description:string
}

class CreateSpecificationUseCase {

    constructor(
        private specificationRepository: ISpecificationRepository
    ){}

    execute({name,description}:IRequest):void{
        const specificationAlreadyExist = this.specificationRepository.findByname(name);
        if(specificationAlreadyExist){
            throw new Error("Nome já Existe");
        }
        this.specificationRepository.create({name,description});
    }
}

export { CreateSpecificationUseCase }