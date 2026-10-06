
const user: string = "Guest";
const access: string = "Guest_access";

const terminal = {
    run: (delta: string | null) => {
        'Launch window terminal and run...'
        console.log(`//User assertion// ${delta}`);
        return 'navigating to /about';
    }
}

function navigate (user: string, permission: string) {

    if(!user.trim() || !permission.trim()) {
        throw new Error("This fields are required");
    }

    const generatePass: string = "*"; // delimeter to point

    terminal.run(generatePass);
    
};

navigate(user, access);