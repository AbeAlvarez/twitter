class User {

    constructor(id, userName, name, bio){

        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpadated = new Date()

    }
    get getUsername (){
        return this.userName
    }

    set setUsername (newUserName){
        this.userName = newUserName
    }
}

module.exports = User