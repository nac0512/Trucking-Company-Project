class Main {
    constructor() {
        const nav = new Navigation();
        const form = new FormValidation();
        const subbed = new Subscribe();
    }

    static getInstance() {
        if(!Main._instance) {
            Main._instance = new Main();
            return Main._instance;
        }
        else {
            throw "Main has already been instantiated";
        }
    }
}

(() => {
    const main = Main.getInstance();
})();