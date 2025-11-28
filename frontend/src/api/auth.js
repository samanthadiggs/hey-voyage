export async function login(identifier, password){

    try{
        const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();
    return {res, data};

    } catch (error) {
        console.error("Fetch error:", error);
        return { res: null, data: { error: "Load Failed" } };
    }
    
}