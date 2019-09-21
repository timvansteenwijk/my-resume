export interface Person {
    name: string;
    general: General;
    education: Education[];
    experience: Experience[];
    hobbies: string[];
}

export interface General {
    fullname: string;
    address: string;
    phone: number;
    email: string;
}

export interface Education {
    school: string;
    subject: string;
    start: number;
    end: number;
    completed: boolean;
}

export interface Experience {
    employer: string;
    function: string;
    start: number;
    end: number;
}
