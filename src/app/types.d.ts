export declare module homestock {

    export interface User {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        location: string;
        title: string;
        description?: any;
        tags?: any;
        avatar?: any;
        language: string;
        theme: string;
        tfa_secret?: any;
        status: string;
        role: string;
        token?: any;
        last_access: Date;
        last_page: string;
    }

}
