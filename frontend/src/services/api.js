export async function getHealth() {
    const res = await fetch('http://localhost:3000/health')
    return res.json()
}
