import { userRepository } from "../src/user-repository";
import { userSrvices } from "../src/user-services";

jest.mock("../src/user-repository");

const repository = new userRepository();
const services = new userSrvices(repository);

test("Mock Class Save", () => {
    const user = {
        id:1, 
        name: "Ilham"
    }

    services.save(user);
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});

test("Mock Class Test findByID", () => {
    const user = {
        id:1,
        name: "ilham"
    }

    repository.findById.mockReturnValueOnce(user);

    expect(services.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
    
})

test("Mock Class Test findAll", () => {
    const users = [
        {
            id: 1,
            name: "ilham"
        },
        {
            id: 2,
            name: "ilham"
        }
    ]

    repository.findAll.mockReturnValueOnce(users);

    expect(services.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
})