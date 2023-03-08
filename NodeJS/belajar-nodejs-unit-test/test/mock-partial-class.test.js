import { userRepository } from "../src/user-repository";
import { userSrvices } from "../src/user-services";

const repository = new userRepository();
const service = new userSrvices(repository);

test("Test Partial Mock findById", () => {
    const user = {
        id: 1,
        name: "ilham"
    }

    const findByIdMock = jest.spyOn(repository, "findById");
    findByIdMock.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(findByIdMock).toHaveBeenCalled();
    expect(findByIdMock).toHaveBeenCalledWith(1);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
    
});

test.failing("Test findAll", () => {
    service.findAll();
})