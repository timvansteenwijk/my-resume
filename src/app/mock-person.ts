import { Person } from './person';

export const TESTPERSON: Person = {
    name: 'Tim',
    general: {
        fullname: 'Tim van Steenwijk',
        address: 'Nieuwehaven 45, Rotterdam',
        phone: 31624598957,
        email: 'tim.van.steenwijk@gmail.com'
    },
    education: [{
        school: 'Emmaus College',
        subject: 'E&M',
        start: 2003,
        end: 2007,
        completed: true
    }, {
        school: 'Leiden University',
        subject: 'Law',
        start: 2010,
        end: 2017,
        completed: false
    }],
experience: [{
    employer: 'Coolblue',
    function: 'Salesrep',
    start: 2016,
    end: 2018
}],
hobbies: ['watching movies', 'gaming', 'singing karaoke']
};
