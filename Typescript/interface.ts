interface User {
    name: string;
    surname: string;
    isAboba?: boolean;
    gender: {
        male: boolean;
        pregender?: {
            animal?: boolean;
        };
    };
}

interface Custom {
    user: User;
    money?: number | string;
}

const customPerson: Custom = {
    user: {
        name: "Tim",
        surname: "Kenzhaev",
        gender: {
            male: true,
        },
        isAboba: false,
    },
    money: "NaN",
};



//Прикол интерфейсов в том , что их можно расширять

interface UserWithMail extends User {
   readonly email: string;
}

const personWithEmail: UserWithMail = { // можно расширяться дальше через запятую
    name: "Tim",
    surname: "Kenzhaev",
    gender: {
        male: true,
    },
    email: "sobaka@sobaka.cat",
};

//personWithEmail.email = "zopa"  //readonly