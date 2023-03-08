import {userRepository} from "../src/user-repository"

export class userSrvices {
    constructor(userRepository){
        if(userRepository){
            this.userRepository = userRepository;
        }else {
            this.userRepository = new userRepository();
        }
    }

    save(user){
        this.userRepository.save(user);
    }

    findById(id){
        return this.userRepository.findById(id);
    }

    findAll(){
        return this.userRepository.findAll();
    }
}