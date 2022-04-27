const User = require ("./../../app/models/User")

describe("Test para User", () => {
    test('Requerimiento 1: Creación de user', () => {
        const user = new User (2000, "jconor", "John Conor", "Bio")
        expect(user.id).toBe(2000)
        expect(user.userName).toBe("jconor")
    });
    test('Requerimiento 2: Fechas en atributos de user', () => {
        const user = new User (2000, "jconor", "John Conor", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpadated).not.toBeUndefined()
    });

    test('Requerimiento 3: Agregando getters', () => {
        const user = new User (2000, "jconor", "John Conor", "Bio")
        expect(user.id).toBe(2000)
        expect(user.userName).toBe("jconor")
    });

    test('Requerimiento 4: Agregando setters', () => {
        const user = new User (2000, "jconor", "John Conor", "Bio")
        user.setUsername = "jc"
        expect(user.userName).toBe("jc")

    });
})