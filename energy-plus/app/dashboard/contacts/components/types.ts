export type Contact = {
    id: string;
    owner_id: string;
    email: string;
    first_name: string;
    last_name: string;
};

export type Profile = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
};

export type Organization = {
    id: string;
    name: string;
    created_by: string;
};
