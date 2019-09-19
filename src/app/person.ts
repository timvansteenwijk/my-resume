export class Person {
    name: string;
    general: {
        fullname: string,
        address: string,
        phone: number,
        email: string
    };
    education: {
            school: string,
            subject: string,
            start: number,
            end: number,
            completed: boolean
        }[];
    experience: {
        employer: string,
        function: string,
        start: number,
        end: number
    }[];
    hobbies: string[];
}
