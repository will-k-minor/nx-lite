export type Person = {
    name: string;
    birthDate: string;
    job?: Job;
};

export type Job = {
    title: string;
    companyName: string;
    salary: number;
    bonus: boolean;
}