import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {

    private specification: Specification[];
    private static INSTANCE: SpecificationRepository;

    constructor(){
        this.specification = [];
    }

    public static getInstance():SpecificationRepository {
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository
        }
        return SpecificationRepository.INSTANCE
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specificatio = new Specification();
        Object.assign(specificatio, {name,description});
        this.specification.push(specificatio);
        console.log(`Specificiton  ${name} e ${description} criada com sucesso!`);
        return null
        throw new Error("Method not implemented.");
    }

    findByname(name: string): Specification {
        console.log(name)
        let specification = this.specification.find(spc=>spc.name == name)
        return specification
        throw new Error("Method not implemented.");
    }
        list(): Specification[] {
        console.log('listando lista de specification');
        return this.specification;
        throw new Error("Method not implemented.");
    }
}

export { SpecificationRepository }