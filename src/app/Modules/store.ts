export class Store {
    name: string;
    logo: string;
    branches: string[];

    constructor(name: string, logo: string, branches: string[]) {
        this.name = name;
        this.logo = logo;
        this.branches = branches;
    }
}
