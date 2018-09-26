import { observable, action, computed } from 'mobx';

class BirdStore {
    @observable birds = [];

    @action addBird=(birds)=>{
        this.birds.push(birds);
    }

    @computed get getBirds() {
        return this.birds.length;
    }

    @action deleteBird=(i)=>{
        this.birds.splice(i,1);
    }

}

// const store = {bird:new BirdStore()}
const store = new BirdStore();
export default store;