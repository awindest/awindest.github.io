/* Standalone endpoint to return file contents */

async function getWorks() {
    const data = import ('$lib/assets/works.json')
    return data
}

export async function GET () {
    const data = await getWorks()
    return data

}
